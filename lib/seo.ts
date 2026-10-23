import type { Metadata } from "next"

export const SITE_URL = "https://www.flowcontents.com"

// The share image: a plain 1200 x 630 JPEG in public/share/. It was drawn from the page that used to live in
// app/share/opengraph-image.tsx (see git history), saved as JPEG because LinkedIn's Post Inspector kept
// 160 px copies of the PNG for /, /homeowners and /preview on Oct 23 and Oct 24.
// LinkedIn keeps the first copy it fetched from an image address. To change the picture, or to get a fresh
// copy, save the new file under a new name, then change this path and the two copies in
// public/sample-report.html together.
export const SHARE_IMAGE = {
  url: "/share/flow-contents-share.jpg",
  width: 1200,
  height: 630,
  alt: "Flow Contents: contents inventories for homeowners and public adjusters",
}

interface PageSeo {
  title: string
  description: string
  /** Path on the site, like "/privacy". Resolved against metadataBase in app/layout.tsx. */
  path: string
}

/**
 * Title, description, canonical, Open Graph and Twitter tags for one page.
 *
 * Next merges metadata shallowly: a page that sets openGraph or twitter replaces the layout's copy
 * instead of adding to it, and that copy is where the file-based share image is attached. So each page
 * repeats the whole block through this helper, image included.
 */
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Flow Contents",
      title,
      description,
      locale: "en_US",
      images: [SHARE_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [SHARE_IMAGE] },
  }
}
