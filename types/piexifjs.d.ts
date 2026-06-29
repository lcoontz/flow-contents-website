// piexifjs ships no types. We only use insert/dump + the Exif IFD tag map to
// re-embed DateTimeOriginal into converted JPEGs, so a minimal surface is enough.
declare module "piexifjs" {
  interface Piexif {
    /** Insert an EXIF byte string (from `dump`) into a JPEG binary string. */
    insert(exifBytes: string, jpegBinaryString: string): string
    /** Serialize an EXIF object into the byte string `insert` expects. */
    dump(exifObj: Record<string, unknown>): string
    ExifIFD: { DateTimeOriginal: number; [key: string]: number }
    ImageIFD: Record<string, number>
    GPSIFD: Record<string, number>
    [key: string]: unknown
  }
  const piexif: Piexif
  export default piexif
}
