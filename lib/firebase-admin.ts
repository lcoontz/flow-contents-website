import { cert, getApps, initializeApp, type App } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import { getStorage } from "firebase-admin/storage"

// Server-only Firebase Admin SDK, pointed at the platform's `flow-contents`
// project. Credentials come from a service-account JSON in the
// FIREBASE_SERVICE_ACCOUNT env var (set in Vercel / .env.local — never in code).
//
// Used for: writing preview-lead docs to Firestore and minting v4 signed
// upload URLs so the browser can PUT photos straight to Cloud Storage
// (large sets can't be proxied through a serverless request body).

const BUCKET = process.env.FIREBASE_STORAGE_BUCKET || "flow-contents.firebasestorage.app"

function initAdmin(): App {
  const existing = getApps()
  if (existing.length) return existing[0]

  const raw = process.env.FIREBASE_SERVICE_ACCOUNT
  if (!raw) {
    throw new Error("FIREBASE_SERVICE_ACCOUNT is not set")
  }
  // Accept either raw JSON or base64-encoded JSON.
  const json = raw.trim().startsWith("{")
    ? raw
    : Buffer.from(raw, "base64").toString("utf8")
  const creds = JSON.parse(json) as {
    project_id: string
    client_email: string
    private_key: string
  }

  return initializeApp({
    credential: cert({
      projectId: creds.project_id,
      clientEmail: creds.client_email,
      // Env vars escape newlines; restore them for the PEM key.
      privateKey: creds.private_key.replace(/\\n/g, "\n"),
    }),
    storageBucket: BUCKET,
  })
}

export function adminDb() {
  return getFirestore(initAdmin())
}

export function adminBucket() {
  return getStorage(initAdmin()).bucket(BUCKET)
}

export const STORAGE_BUCKET = BUCKET
