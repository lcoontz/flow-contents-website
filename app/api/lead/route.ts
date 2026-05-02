// TODO: wire this to a real destination — gspread (Google Sheets) is already set up
// in the flow-product repo (scripts/sheets.py uses ~/.config/gspread/credentials.json).
// Likely path: forward to a Vercel cron or a small Cloud Function that appends to the
// "Flow Outreach" sheet (1C8QhSe9YCrcu6uzXfD-MfgjEb1FR3pg2z-bgGb3a2j4) with source=sample-report.
// Also send the sample PDF link via Resend or similar.

import { NextResponse } from "next/server"

interface LeadPayload {
  source?: string
  name?: string
  email?: string
  firm?: string
}

export async function POST(req: Request) {
  let body: LeadPayload = {}
  try {
    body = (await req.json()) as LeadPayload
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 })
  }

  if (!body.email) {
    return NextResponse.json({ ok: false, error: "email_required" }, { status: 400 })
  }

  // Stub: log to server console until the real sink is wired.
  console.log("[lead]", {
    at: new Date().toISOString(),
    source: body.source ?? "unknown",
    name: body.name ?? "",
    email: body.email,
    firm: body.firm ?? "",
  })

  return NextResponse.json({ ok: true })
}
