import { JWT } from "google-auth-library"

// Best-effort, side-channel lead alerts. Every function here is guarded by its
// own env vars and resolves to { skipped: true } when not configured, so a
// missing credential silently disables that channel instead of breaking lead
// capture. Callers should run these under Promise.allSettled so an alert
// failure never affects the visitor-facing response.

function serviceAccount(): { client_email: string; private_key: string } | null {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT
  if (!raw) return null
  const json = raw.trim().startsWith("{") ? raw : Buffer.from(raw, "base64").toString("utf8")
  return JSON.parse(json)
}

// Maytapi WhatsApp ping to the configured number. Mirrors the platform's
// scripts/whatsapp/send_whatsapp.py sendMessage call.
export async function notifyWhatsApp(message: string): Promise<{ ok?: true; skipped?: true }> {
  const productId = process.env.MAYTAPI_PRODUCT_ID
  const phoneId = process.env.MAYTAPI_PHONE_ID
  const token = process.env.MAYTAPI_TOKEN
  const to = process.env.LEAD_WHATSAPP_TO
  if (!productId || !phoneId || !token || !to) return { skipped: true }

  const url = `https://api.maytapi.com/api/${productId}/${phoneId}/sendMessage`
  const res = await fetch(url, {
    method: "POST",
    headers: { "x-maytapi-key": token, "Content-Type": "application/json" },
    body: JSON.stringify({ to_number: to, type: "text", message }),
  })
  const data = (await res.json().catch(() => ({}))) as { success?: boolean }
  if (!data?.success) throw new Error(`maytapi send failed: ${JSON.stringify(data)}`)
  return { ok: true }
}

// Appends one row to a Google Sheet via the Sheets REST API, authenticated with
// the same GCP service account used for Firestore. The service-account email
// must be granted edit access to the target sheet (LEADS_SHEET_ID).
export async function appendLeadToSheet(row: string[]): Promise<{ ok?: true; skipped?: true }> {
  const sheetId = process.env.LEADS_SHEET_ID
  const sa = serviceAccount()
  if (!sheetId || !sa) return { skipped: true }

  const range = process.env.LEADS_SHEET_RANGE || "Leads!A:F"
  const client = new JWT({
    email: sa.client_email,
    key: sa.private_key.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })
  const { token } = await client.getAccessToken()

  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/` +
    `${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ values: [row] }),
  })
  if (!res.ok) throw new Error(`sheets append ${res.status}: ${await res.text()}`)
  return { ok: true }
}
