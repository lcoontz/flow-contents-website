// Where a visitor came from: the four campaign tags on the link they arrived on
// plus the page they landed on. Kept in a first-party cookie for 30 days so a form
// sent from a later page (or from app.flowcontents.com, the cookie is shared across
// the subdomains) still knows which post or ad brought the visitor. The server uses
// sanitizeAttribution on whatever the browser sends, because the endpoints are public.

export const ATTRIBUTION_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const

export type Attribution = Partial<Record<(typeof ATTRIBUTION_KEYS)[number] | "landing_page", string>>

const COOKIE_NAME = "fc_attr"
export const ATTRIBUTION_DAYS = 30
const TAG_MAX = 100
const LANDING_MAX = 200

function clean(value: unknown, max: number): string | undefined {
  if (typeof value !== "string") return undefined
  const text = value.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max)
  return text || undefined
}

/** Keeps only the four tags and the landing page, as trimmed capped strings. Null when no tag is present. */
export function sanitizeAttribution(input: unknown): Attribution | null {
  if (!input || typeof input !== "object") return null
  const raw = input as Record<string, unknown>
  const out: Attribution = {}
  for (const key of ATTRIBUTION_KEYS) {
    const value = clean(raw[key], TAG_MAX)
    if (value) out[key] = value
  }
  // The tags are the attribution; a landing page with no tags says nothing about the source.
  if (Object.keys(out).length === 0) return null
  const landing = clean(raw.landing_page, LANDING_MAX)
  if (landing) out.landing_page = landing
  return out
}

// Browser only from here down.

// Fallback for visitors who block cookies: still right for forms sent without a full page reload.
let current: Attribution | null = null

// Both cookie helpers swallow errors: a sandboxed iframe or a locked-down browser can throw on
// document.cookie, and this runs from the root layout and from every form submit.
function readCookie(): Attribution | null {
  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`))
    return match ? sanitizeAttribution(JSON.parse(decodeURIComponent(match[1]))) : null
  } catch {
    return null
  }
}

function writeCookie(attr: Attribution) {
  try {
    const host = window.location.hostname
    const shared = host === "flowcontents.com" || host.endsWith(".flowcontents.com")
    document.cookie =
      `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(attr))}; Max-Age=${ATTRIBUTION_DAYS * 24 * 60 * 60}; Path=/; SameSite=Lax` +
      (shared ? "; Domain=.flowcontents.com" : "") +
      (window.location.protocol === "https:" ? "; Secure" : "")
  } catch {
    // Not saved across page loads; `current` below still serves this page.
  }
}

/**
 * Call on every page load. Tags in the link replace whatever was saved (the newest
 * link wins); a link without tags leaves the saved ones alone.
 */
export function captureAttribution(): Attribution | null {
  const params = new URLSearchParams(window.location.search)
  const tags: Record<string, string> = {}
  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key)
    if (value) tags[key] = value
  }
  // Path only: a query string can carry tracking ids or an email from a warm-email link.
  const fresh = sanitizeAttribution({ ...tags, landing_page: window.location.pathname })
  if (fresh) {
    current = fresh
    writeCookie(fresh)
    return fresh
  }
  return getAttribution()
}

/** What a form sends with its payload: the saved tags, or null for a visitor who arrived without any. */
export function getAttribution(): Attribution | null {
  if (typeof document === "undefined") return null
  return readCookie() ?? current
}
