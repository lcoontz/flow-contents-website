"use client"

import { useEffect, useRef, useState } from "react"

interface UploadTarget {
  uploadUrl: string
  objectPath: string
  contentType: string
}

interface Snapshot {
  propertyName: string
  email: string
  phone: string
  extras: Record<string, string>
}

const MAX_FILES = 1000
const UPLOAD_CONCURRENCY = 4

export function PreviewIntakeForm() {
  const [files, setFiles] = useState<File[]>([])
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [uploadedCount, setUploadedCount] = useState(0)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [showDetails, setShowDetails] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null)
  const [submitDone, setSubmitDone] = useState(false)
  const [submitFailed, setSubmitFailed] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Auto-upload effect: whenever the picked file list changes, kick off a
  // fresh prepare + parallel PUTs to GCS in the background.
  useEffect(() => {
    if (files.length === 0) {
      setSessionId(null)
      setUploadedCount(0)
      setUploadError(null)
      return
    }
    if (files.length > MAX_FILES) {
      setUploadError("too_many_files")
      return
    }

    let cancelled = false
    setSessionId(null)
    setUploadedCount(0)
    setUploadError(null)

    void (async () => {
      try {
        const prepRes = await fetch("/api/preview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "prepare",
            files: files.map((f) => ({
              name: f.name,
              size: f.size,
              contentType: f.type || "application/octet-stream",
            })),
          }),
        })
        const prep = (await prepRes.json()) as { ok: boolean; sessionId?: string; uploads?: UploadTarget[]; error?: string }
        if (cancelled) return
        if (!prepRes.ok || !prep.ok || !prep.sessionId || !prep.uploads) {
          setUploadError(prep.error || "prepare_failed")
          return
        }
        setSessionId(prep.sessionId)

        const queue = prep.uploads.map((u, i) => ({ u, file: files[i] }))
        let done = 0
        async function worker() {
          for (;;) {
            if (cancelled) return
            const next = queue.shift()
            if (!next) return
            try {
              const r = await fetch(next.u.uploadUrl, {
                method: "PUT",
                headers: { "Content-Type": next.u.contentType },
                body: next.file,
              })
              if (!r.ok) throw new Error(`upload_${r.status}`)
            } catch {
              if (!cancelled) setUploadError("upload_failed")
              return
            }
            done += 1
            if (!cancelled) setUploadedCount(done)
          }
        }
        await Promise.all(
          Array.from({ length: Math.min(UPLOAD_CONCURRENCY, prep.uploads.length) }, worker),
        )
      } catch {
        if (!cancelled) setUploadError("network_error")
      }
    })()

    return () => {
      cancelled = true
    }
  }, [files])

  // Submit effect: once the user has clicked "Get my free report" (snapshot
  // captured) AND uploads are complete, fire the lead-creation call.
  useEffect(() => {
    if (!snapshot || !sessionId) return
    if (files.length === 0) return
    if (uploadedCount < files.length) return
    if (uploadError) return
    if (submitDone || submitFailed) return

    void (async () => {
      try {
        const res = await fetch("/api/preview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "submit",
            sessionId,
            propertyName: snapshot.propertyName,
            email: snapshot.email,
            phone: snapshot.phone,
            extras: snapshot.extras,
            photoCount: files.length,
            uploadedCount,
          }),
        })
        const data = (await res.json()) as { ok: boolean; error?: string }
        if (res.ok && data.ok) setSubmitDone(true)
        else setSubmitFailed(true)
      } catch {
        setSubmitFailed(true)
      }
    })()
  }, [snapshot, sessionId, uploadedCount, files.length, uploadError, submitDone, submitFailed])

  function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    setFiles(Array.from(e.target.files ?? []))
    setFormError(null)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError(null)
    if (files.length === 0) {
      setFormError("Please add at least one photo.")
      return
    }
    if (files.length > MAX_FILES) {
      setFormError("Please upload no more than 1,000 photos per submission.")
      return
    }
    if (uploadError) {
      setFormError("Photo upload error. Re-select your photos to retry.")
      return
    }
    const fd = new FormData(e.currentTarget)
    const extras: Record<string, string> = {}
    for (const k of ["lossType", "carrier", "lossDate"]) {
      const v = (fd.get(k) as string | null)?.trim()
      if (v) extras[k] = v
    }
    setSnapshot({
      propertyName: String(fd.get("propertyName") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      extras,
    })
  }

  const overlayOpen = snapshot !== null
  const allUploaded = files.length > 0 && uploadedCount === files.length
  const progressPct = files.length ? Math.round((uploadedCount / files.length) * 100) : 0

  return (
    <>
      <div className="mx-auto mt-12 max-w-xl rounded-xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <Field name="propertyName" label="Property name" placeholder="e.g. Smith Residence" required />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="email" type="email" label="Email" placeholder="you@firm.com" required />
            <Field name="phone" type="tel" label="Phone" placeholder="(555) 123-4567" required />
          </div>

          <button
            type="button"
            onClick={() => setShowDetails((s) => !s)}
            className="justify-self-start text-[12px] font-medium text-blue-700 underline-offset-2 hover:underline"
          >
            {showDetails ? "− Hide claim details" : "+ Add claim details (optional)"}
          </button>
          {showDetails && (
            <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 sm:grid-cols-3">
              <label className="block">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Loss type</span>
                <select name="lossType" className="mt-1.5 block h-[42px] w-full rounded-md border border-slate-300 bg-white px-3 text-[14px] text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20">
                  <option value="">—</option>
                  <option>Fire</option>
                  <option>Water</option>
                  <option>Theft</option>
                  <option>Storm / Wind</option>
                  <option>Other</option>
                </select>
              </label>
              <Field name="carrier" label="Carrier" placeholder="Optional" />
              <label className="block">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Date of loss</span>
                <input name="lossDate" type="date" className="mt-1.5 block h-[42px] w-full rounded-md border border-slate-300 bg-white px-3 text-[14px] text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20" />
              </label>
            </div>
          )}

          <div className="block">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Claim photos &amp; lists
            </span>
            <div className="mt-1.5 flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-slate-300 bg-white px-3 py-6">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,.pdf,.xlsx,.xls,.csv"
                multiple
                onChange={onPick}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex h-[40px] items-center gap-2 rounded-md bg-blue-600 px-5 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                </svg>
                Upload files
              </button>
              <span className="text-[12px] text-slate-500">
                {files.length === 0
                  ? "Photos, PDFs, or existing inventory lists"
                  : `${files.length.toLocaleString()} file${files.length === 1 ? "" : "s"} selected`}
              </span>
            </div>
            {files.length === 0 && (
              <span className="mt-1.5 block text-center text-[12px] text-slate-500">
                Upload up to 1,000 photos — and an existing inventory list if you have one — and you&apos;ll get a sneak peek of our system.
              </span>
            )}
            {files.length > 0 && !uploadError && (
              <UploadStatus current={uploadedCount} total={files.length} pct={progressPct} done={allUploaded} />
            )}
            {uploadError && (
              <span className="mt-1.5 block text-[12px] font-medium text-red-600">
                Upload error. Re-select your files to retry.
              </span>
            )}
            {files.length > MAX_FILES && (
              <span className="mt-1.5 block text-[12px] font-medium text-red-600">
                {files.length.toLocaleString()} selected — 1,000 file maximum.
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={overlayOpen}
            className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-60"
          >
            Get my free report
          </button>

          {formError && <p className="text-center text-[12px] text-red-600">{formError}</p>}
          <p className="text-center text-[11px] text-slate-500">
            We email your estimated report within 24 hours — that&apos;s why we ask for your email and phone. No account needed, no spam.
          </p>
        </form>
      </div>

      {overlayOpen && (
        <SubmitOverlay
          done={submitDone}
          failed={submitFailed}
          uploadedCount={uploadedCount}
          totalCount={files.length}
          progressPct={progressPct}
          uploadError={uploadError}
        />
      )}
    </>
  )
}

function UploadStatus({
  current,
  total,
  pct,
  done,
}: {
  current: number
  total: number
  pct: number
  done: boolean
}) {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between text-[12px]">
        <span className={done ? "font-medium text-green-700" : "text-slate-500"}>
          {done ? "✓ Photos uploaded" : "Uploading in the background…"}
        </span>
        <span className="font-medium text-slate-700">
          {current.toLocaleString()} of {total.toLocaleString()} ({pct}%)
        </span>
      </div>
      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
        <div className="h-full bg-blue-600 transition-[width] duration-300" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function SubmitOverlay({
  done,
  failed,
  uploadedCount,
  totalCount,
  progressPct,
  uploadError,
}: {
  done: boolean
  failed: boolean
  uploadedCount: number
  totalCount: number
  progressPct: number
  uploadError: string | null
}) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  const showError = failed || !!uploadError

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-2xl">
        {done ? (
          <>
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="mt-4 text-[20px] font-semibold tracking-tight text-slate-900">You&apos;re all set.</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
              Your photos are uploaded. We&apos;ll email your preliminary contents report within 24 hours.
            </p>
          </>
        ) : showError ? (
          <>
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b91c1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              </svg>
            </div>
            <h2 className="mt-4 text-[20px] font-semibold tracking-tight text-slate-900">Something went wrong.</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
              Please refresh and try again, or email{" "}
              <a className="text-blue-700 underline" href="mailto:leland.coontz.iv@gmail.com">
                leland.coontz.iv@gmail.com
              </a>
              .
            </p>
          </>
        ) : (
          <>
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            </div>
            <h2 className="mt-4 text-[20px] font-semibold tracking-tight text-slate-900">
              Thank you for requesting a report.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
              Your photos are currently uploading. Wait a moment for that to finish and then
              we&apos;ll send you your report within 24 hours.
            </p>
            <div className="mt-6">
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-slate-500">Uploading…</span>
                <span className="font-medium text-slate-700">
                  {uploadedCount.toLocaleString()} of {totalCount.toLocaleString()} ({progressPct}%)
                </span>
              </div>
              <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full bg-blue-600 transition-[width] duration-300"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
            <p className="mt-6 text-[12px] text-slate-500">Please keep this tab open while photos finish uploading.</p>
          </>
        )}
      </div>
    </div>
  )
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
}: {
  name: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 block h-[42px] w-full rounded-md border border-slate-300 bg-white px-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
      />
    </label>
  )
}
