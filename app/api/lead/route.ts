import { NextResponse } from "next/server"
import { promises as fs } from "node:fs"
import path from "node:path"
import { Resend } from "resend"

interface LeadPayload {
  source?: string
  name?: string
  email?: string
}

export const runtime = "nodejs"

const PDF_FILENAME = "Flow-Contents-Sample-Report.pdf"
const PDF_PATH = path.join(process.cwd(), "public", "sample", "sample-property-inventory-report.pdf")

export async function POST(req: Request) {
  let body: LeadPayload = {}
  try {
    body = (await req.json()) as LeadPayload
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 })
  }

  const email = body.email?.trim()
  const name = body.name?.trim() || ""

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "email_required" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM
  const replyTo = process.env.LEAD_REPLY_TO || "leland.coontz.iv@gmail.com"
  const sheetUrl = process.env.SAMPLE_SHEET_URL

  if (!apiKey || !from || !sheetUrl) {
    console.error("[lead] missing config", { hasKey: !!apiKey, hasFrom: !!from, hasSheet: !!sheetUrl })
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 })
  }

  const greeting = name ? `Hi ${name.split(" ")[0]},` : "Hi,"
  const subject = "Flow Contents — Sample Report + How we work"

  const text = [
    greeting,
    "",
    "Leland here. Thanks for requesting our sample report — here it is, in two formats so you can browse however you prefer:",
    "",
    `Live spreadsheet (filterable, sortable): ${sheetUrl}`,
    "PDF version: attached to this email.",
    "",
    "How it works",
    "",
    "Once we receive your photos, our pipeline runs them through a multi-step identification process where we extract LKQ features and details, then identify approximate age and condition. From there we price each item against live retail data — no outdated database.",
    "",
    "Then every single item is reviewed by our auditor team.",
    "",
    "We offer priority 72-hour turnaround. Normal processing is one week, audit included. Our average list size runs about 3,000 items.",
    "",
    "I'd love your honest feedback on the report. If you have an active claim or know someone who does, just hit reply — this email goes straight to me.",
    "",
    "Best,",
    "Leland Coontz IV",
    "Flow Contents",
    "flowcontents.com",
  ].join("\n")

  const html = `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0f172a;line-height:1.55;font-size:15px;max-width:600px">
  <p>${greeting}</p>
  <p>Leland here. Thanks for requesting our sample report — here it is, in two formats so you can browse however you prefer:</p>
  <ul style="padding-left:18px">
    <li><strong>Live spreadsheet</strong> (filterable, sortable): <a href="${sheetUrl}" style="color:#1d4ed8">open in Google Sheets</a></li>
    <li><strong>PDF version:</strong> attached to this email</li>
  </ul>
  <h3 style="margin-top:24px;margin-bottom:8px;font-size:16px">How it works</h3>
  <p>Once we receive your photos, our pipeline runs them through a multi-step identification process where we extract LKQ features and details, then identify approximate age and condition. From there we price each item against live retail data — no outdated database.</p>
  <p>Then every single item is reviewed by our auditor team.</p>
  <p>We offer <strong>priority 72-hour turnaround</strong>. Normal processing is one week, audit included. Our average list size runs about <strong>3,000 items</strong>.</p>
  <p>I'd love your honest feedback on the report. If you have an active claim or know someone who does, just hit reply — this email goes straight to me.</p>
  <p style="margin-top:24px">Best,<br>
  Leland Coontz IV<br>
  Flow Contents<br>
  <a href="https://flowcontents.com" style="color:#1d4ed8">flowcontents.com</a></p>
</body></html>`

  let pdfContent: Buffer
  try {
    pdfContent = await fs.readFile(PDF_PATH)
  } catch (err) {
    console.error("[lead] failed to read PDF", err)
    return NextResponse.json({ ok: false, error: "attachment_unavailable" }, { status: 500 })
  }

  const resend = new Resend(apiKey)
  try {
    const { data, error } = await resend.emails.send({
      from,
      to: email,
      replyTo,
      subject,
      text,
      html,
      attachments: [
        {
          filename: PDF_FILENAME,
          content: pdfContent,
        },
      ],
    })

    if (error) {
      console.error("[lead] resend error", { source: body.source, email, error })
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
    }

    console.log("[lead] sent", { id: data?.id, source: body.source, email, name })
    return NextResponse.json({ ok: true, id: data?.id })
  } catch (err) {
    console.error("[lead] resend exception", err)
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
  }
}
