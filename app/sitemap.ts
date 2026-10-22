import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

// Every public page. The home page is "" so its URL matches the canonical tag, which has no trailing slash.
const PATHS = ["", "/homeowners", "/memory-jogger", "/preview", "/sample-report.html", "/whitepaper", "/privacy", "/terms"]

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({ url: `${SITE_URL}${path}` }))
}
