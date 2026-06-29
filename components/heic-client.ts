"use client"
/**
 * Main-thread client for the HEIC→JPEG worker. Lazily spins up a single Web
 * Worker (created only in the browser, on first use — never at module load, so
 * SSR is safe) and hands files to it one request at a time via an id→resolver
 * map. One worker is plenty for the typical handful of preview photos; a pool
 * could be added later if all-HEIC batches feel slow.
 */
// A healthy libheif decode is well under a second; this only catches a wedged
// worker. A JS timeout can't interrupt a stuck WASM call, so on timeout we kill
// the worker and fail the file as a retryable error rather than hang the form.
const CONVERT_TIMEOUT_MS = 30_000

let worker: Worker | null = null
let seq = 0
const pending = new Map<number, { resolve: (blob: Blob) => void; reject: (err: Error) => void }>()

interface OutMessage {
  id: number
  ok: boolean
  blob?: Blob
  error?: string
}

function getWorker(): Worker {
  if (worker) return worker
  worker = new Worker(new URL("./heic-worker.ts", import.meta.url), { type: "module" })
  worker.onmessage = (e: MessageEvent<OutMessage>) => {
    const { id, ok, blob, error } = e.data
    const p = pending.get(id)
    if (!p) return
    pending.delete(id)
    if (ok && blob) p.resolve(blob)
    else p.reject(new Error(error || "convert_failed"))
  }
  worker.onerror = () => resetWorker("worker_error")
  return worker
}

// Fail every in-flight conversion and drop the worker so the next call gets a
// fresh one. Each reject clears its own timeout (see the wrapper in the promise).
function resetWorker(reason: string) {
  for (const p of pending.values()) p.reject(new Error(reason))
  pending.clear()
  worker?.terminate()
  worker = null
}

/** True if a picked file is HEIC/HEIF by MIME type or extension. */
export function isHeic(file: File): boolean {
  const type = (file.type || "").toLowerCase()
  return type === "image/heic" || type === "image/heif" || /\.(heic|heif)$/i.test(file.name)
}

/**
 * Name for the converted JPEG. Keeps the original basename (so the admin still
 * sees e.g. IMG_0420) and GUARANTEES a `.jpg` extension — some iOS HEIC files
 * carry `image/heic` with no extension, and the server allow-list gates by
 * extension, so a `.jpg` ending must always be present.
 */
function toJpegName(name: string): string {
  if (/\.(heic|heif)$/i.test(name)) return name.replace(/\.(heic|heif)$/i, ".jpg")
  if (/\.jpe?g$/i.test(name)) return name
  return (name || "photo") + ".jpg"
}

/**
 * Convert one HEIC/HEIF File to a JPEG File. The returned File keeps the
 * original basename (so the admin still sees e.g. IMG_0420) with a `.jpg`
 * extension and an `image/jpeg` type — this is what gets uploaded.
 */
export function convertHeicToJpeg(file: File): Promise<File> {
  return new Promise<Blob>((resolve, reject) => {
    const id = ++seq
    const timer = setTimeout(() => {
      if (pending.has(id)) resetWorker("convert_timeout")
    }, CONVERT_TIMEOUT_MS)
    pending.set(id, {
      resolve: (blob) => {
        clearTimeout(timer)
        resolve(blob)
      },
      reject: (err) => {
        clearTimeout(timer)
        reject(err)
      },
    })
    try {
      getWorker().postMessage({ id, file })
    } catch (err) {
      clearTimeout(timer)
      pending.delete(id)
      reject(err instanceof Error ? err : new Error(String(err)))
    }
  }).then((blob) => new File([blob], toJpegName(file.name), { type: "image/jpeg" }))
}
