/// <reference lib="webworker" />
/**
 * Off-main-thread HEIC/HEIF → JPEG conversion for the /preview upload form.
 *
 * Why this exists: iPhones submit `.heic`, but (1) browsers can't render HEIC in
 * the admin's <img> thumbnails and (2) the app's pipeline runs `sharp` on the
 * bytes, which can't decode HEIC. Converting to JPEG client-side and uploading
 * the JPEG bytes as a `.jpg` object fixes both. See the app side:
 *   flow-contents-platform/functions/src/preview-leads/{on-lead-submitted,run-pipeline}.ts
 *   flow-contents-platform/functions/src/detection/detect-and-identify.ts (getExifCapturedAt)
 *
 * Capture time: `heic-to` drops EXIF on convert, and the preview pipeline reads
 * capture time from the JPEG *bytes* (getExifCapturedAt → sharp metadata.exif),
 * NOT from object custom metadata. So we read DateTimeOriginal from the original
 * HEIC and re-embed it into the converted JPEG. Best-effort — a failure here
 * never blocks the upload; we just lose capture time for that photo.
 */
import { heicTo } from "heic-to/next" // /next variant for a Web Worker bundle
import exifr from "exifr"
import piexif from "piexifjs"

const ctx = self as unknown as Worker

interface InMessage {
  id: number
  file: File
}

ctx.onmessage = async (event: MessageEvent<InMessage>) => {
  const { id, file } = event.data
  try {
    // heic-to DROPS EXIF on convert — read capture time from the ORIGINAL HEIC first.
    let capturedAt: string | null = null
    try {
      const exif = await exifr.parse(file, ["DateTimeOriginal"])
      capturedAt = exif?.DateTimeOriginal ? new Date(exif.DateTimeOriginal).toISOString() : null
    } catch {
      /* no/unreadable EXIF — fine */
    }

    let blob = await heicTo({ blob: file, type: "image/jpeg", quality: 0.85 })

    if (capturedAt) {
      try {
        blob = await embedCapturedAt(blob, capturedAt)
      } catch {
        /* keep the plain JPEG — capture time is a nice-to-have, not a blocker */
      }
    }

    ctx.postMessage({ id, ok: true, blob, capturedAt })
  } catch (err) {
    ctx.postMessage({ id, ok: false, error: String(err) })
  }
}

/**
 * Re-embed DateTimeOriginal into a JPEG so the app reads it from EXIF like any
 * normal photo. EXIF datetime format is "YYYY:MM:DD HH:MM:SS" (no timezone);
 * we derive it from the ISO string — exact TZ/second precision isn't needed, the
 * value is only used to order photos chronologically.
 */
async function embedCapturedAt(jpeg: Blob, capturedAtIso: string): Promise<Blob> {
  const dt = capturedAtIso.slice(0, 10).replace(/-/g, ":") + " " + capturedAtIso.slice(11, 19)
  // Only DateTimeOriginal — NOT Orientation. heic-to bakes rotation into the
  // pixels, so writing an orientation tag would make the app's sharp.rotate()
  // double-rotate.
  const exifObj = { "0th": {}, Exif: { [piexif.ExifIFD.DateTimeOriginal]: dt }, GPS: {} }
  const exifBytes = piexif.dump(exifObj)
  const stamped = piexif.insert(exifBytes, await blobToBinaryString(jpeg))
  return binaryStringToBlob(stamped, "image/jpeg")
}

async function blobToBinaryString(blob: Blob): Promise<string> {
  const bytes = new Uint8Array(await blob.arrayBuffer())
  let out = ""
  const CHUNK = 0x8000 // chunk to stay under the String.fromCharCode arg limit
  for (let i = 0; i < bytes.length; i += CHUNK) {
    out += String.fromCharCode(...bytes.subarray(i, i + CHUNK))
  }
  return out
}

function binaryStringToBlob(bin: string, type: string): Blob {
  const out = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i) & 0xff
  return new Blob([out], { type })
}
