"use client"

import { useEffect } from "react"
import { ATTRIBUTION_DAYS, ATTRIBUTION_KEYS, captureAttribution } from "@/lib/attribution"
import { registerSuperProperties, trackEvent } from "@/components/tracking"

/**
 * Mounted once in the root layout. On every full page load it saves the campaign
 * tags from the link (see lib/attribution.ts) and hands them to PostHog, so every
 * later event from the visitor carries them. It also reports clicks on the two
 * links that are spread across the site and static markup: TidyCal bookings and
 * the sample report.
 */
export function AttributionTracker() {
  useEffect(() => {
    const attr = captureAttribution()
    if (attr) {
      // PostHog merges what it is given, so name every tag: a newer link without utm_campaign
      // must not keep the campaign of the older link on later events.
      const props: Record<string, string | null> = { landing_page: attr.landing_page ?? null }
      for (const key of ATTRIBUTION_KEYS) props[key] = attr[key] ?? null
      registerSuperProperties(props, ATTRIBUTION_DAYS)
    }

    function onClick(e: MouseEvent) {
      const href = (e.target as Element | null)?.closest?.("a")?.getAttribute("href") ?? ""
      if (href.includes("tidycal.com/")) {
        trackEvent("tidycal_clicked", { page: window.location.pathname })
      } else if (href.includes("sample-report.html")) {
        trackEvent("sample_report_viewed", { page: window.location.pathname, via: "link" })
      }
    }
    // Capture phase, so a link that opens in this tab still reports before the page unloads.
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  return null
}
