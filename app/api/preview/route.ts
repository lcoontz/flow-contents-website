import { NextResponse } from "next/server"
import { randomUUID } from "node:crypto"
import { adminBucket, adminDb } from "@/lib/firebase-admin"
import { FieldValue } from "firebase-admin/firestore"

export const runtime = "nodejs"

// Public limit advertised on the form is 1,000; server enforces the same.
const MAX_FILES = 1000
const MAX_FILE_BYTES = 25 * 1024 * 1024 // 25 MB per image
const SIGNED_URL_TTL_MS = 60 * 60 * 1000 // 1 hour to finish the upload

interface FileMeta {
  name?: string
  size?: number
  contentType?: string
}

// `prepare` (action 1): returns signed upload URLs for a fresh session. The
// browser starts uploading the moment the user picks photos — no lead doc
// exists yet, so the form fields aren't required here.
interface PrepareBody {
  action?: "prepare"
  files?: FileMeta[]
}

// `submit` (action 2): the user finishes the form and hits "Get my free
// report". This is when the lead doc gets created and the auto-pipeline
// trigger has a record to act on.
interface SubmitBody {
  action: "submit"
  sessionId?: string
  propertyName?: string
  email?: string
  phone?: string
  extras?: Record<string, string>
  photoCount?: number
  uploadedCount?: number
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// This is a PUBLIC, unauthenticated endpoint. Gate uploads by file EXTENSION
// (not content-type — browsers send application/octet-stream / "" for CSV/XLS,
// so a content-type allow-list would reject legitimate inventory lists). HEIC is
// converted to JPEG client-side before upload, but we still permit heic/heif here
// as defense-in-depth. Everything else — executables, scripts, archives — is
// rejected. The ~25 MB/file cap is enforced separately below.
const ALLOWED_EXTENSIONS = new Set([
  "jpg", "jpeg", "png", "gif", "webp", "bmp", "tif", "tiff", "heic", "heif", // images
  "pdf", "xls", "xlsx", "csv", // documents / inventory lists
])

function extensionOf(name: string): string {
  const match = /\.([a-zA-Z0-9]+)$/.exec(name || "")
  return match ? match[1].toLowerCase() : ""
}

function isAllowedFile(name: string): boolean {
  return ALLOWED_EXTENSIONS.has(extensionOf(name))
}

function safeName(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120) || "photo.jpg"
}

export async function POST(req: Request) {
  let body: PrepareBody | SubmitBody
  try {
    body = (await req.json()) as PrepareBody | SubmitBody
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 })
  }

  try {
    if (body.action === "submit") return await submit(body as SubmitBody)
    return await prepare(body as PrepareBody)
  } catch (err) {
    console.error("[preview] error", err)
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 })
  }
}

async function prepare(body: PrepareBody) {
  const files = Array.isArray(body.files) ? body.files : []
  if (files.length === 0) return NextResponse.json({ ok: false, error: "no_files" }, { status: 400 })
  if (files.length > MAX_FILES) {
    return NextResponse.json({ ok: false, error: "too_many_files", max: MAX_FILES }, { status: 400 })
  }
  for (const f of files) {
    if ((f.size ?? 0) > MAX_FILE_BYTES) {
      return NextResponse.json({ ok: false, error: "file_too_large", max: MAX_FILE_BYTES }, { status: 400 })
    }
    if (!isAllowedFile(f.name || "")) {
      return NextResponse.json({ ok: false, error: "file_type_not_allowed" }, { status: 400 })
    }
  }

  // sessionId doubles as the Firestore lead-doc id at submit time — keeps the
  // Storage prefix and Firestore record aligned on a single uuid.
  const sessionId = randomUUID()
  const storagePrefix = `preview-leads/${sessionId}`
  const bucket = adminBucket()
  const expires = Date.now() + SIGNED_URL_TTL_MS

  const uploads = await Promise.all(
    files.map(async (f, idx) => {
      const contentType = f.contentType || "application/octet-stream"
      const objectPath = `${storagePrefix}/${String(idx).padStart(4, "0")}-${safeName(f.name || `photo-${idx}.jpg`)}`
      const [url] = await bucket.file(objectPath).getSignedUrl({
        version: "v4",
        action: "write",
        expires,
        contentType,
      })
      return { uploadUrl: url, objectPath, contentType }
    }),
  )

  return NextResponse.json({ ok: true, sessionId, uploads })
}

async function submit(body: SubmitBody) {
  const sessionId = body.sessionId?.trim()
  const propertyName = body.propertyName?.trim()
  const email = body.email?.trim()
  const phone = body.phone?.trim()

  if (!sessionId) return NextResponse.json({ ok: false, error: "session_id_required" }, { status: 400 })
  if (!propertyName) return NextResponse.json({ ok: false, error: "property_name_required" }, { status: 400 })
  if (!email || !EMAIL_RE.test(email)) return NextResponse.json({ ok: false, error: "email_required" }, { status: 400 })
  if (!phone) return NextResponse.json({ ok: false, error: "phone_required" }, { status: 400 })

  // status="submitted" is the signal the Phase-B Cloud Function trigger waits
  // for to auto-create the property and start the pipeline.
  await adminDb()
    .collection("previewLeads")
    .doc(sessionId)
    .set({
      propertyName,
      email,
      phone,
      extras: body.extras ?? {},
      photoCount: body.photoCount ?? null,
      uploadedCount: body.uploadedCount ?? null,
      storagePrefix: `preview-leads/${sessionId}`,
      sessionId,
      status: "submitted",
      source: "preview-landing",
      createdAt: FieldValue.serverTimestamp(),
      submittedAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    })

  return NextResponse.json({ ok: true, leadId: sessionId })
}
