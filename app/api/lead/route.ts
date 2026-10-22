import { NextResponse } from "next/server"
import { Resend } from "resend"
import { adminDb } from "@/lib/firebase-admin"
import { FieldValue } from "firebase-admin/firestore"
import { appendLeadToSheet, notifyWhatsApp } from "@/lib/lead-notify"
import { sanitizeAttribution } from "@/lib/attribution"

interface LeadPayload {
  source?: string
  name?: string
  email?: string
  referral?: string
  attribution?: unknown
}

const BOOKING_URL = "https://tidycal.com/leland/intro-call-flow-contents-ai-w-leland"

export const runtime = "nodejs"

export async function POST(req: Request) {
  let body: LeadPayload = {}
  try {
    body = (await req.json()) as LeadPayload
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 })
  }

  const email = body.email?.trim()
  const name = body.name?.trim() || ""
  const source = body.source?.trim() || "sample-report"
  // "Who told you about us?" is asked on every form instead of tracking links.
  const referral = body.referral?.trim().slice(0, 200) || ""
  // Campaign tags from the link the visitor arrived on (see lib/attribution.ts).
  const attribution = sanitizeAttribution(body.attribution)
  const isWaitlist = source === "jogger-waitlist"

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "email_required" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM
  const replyTo = process.env.LEAD_REPLY_TO || "leland@flowcontents.com"
  const sheetUrl = process.env.SAMPLE_SHEET_URL

  if (!apiKey || !from || !sheetUrl) {
    console.error("[lead] missing config", { hasKey: !!apiKey, hasFrom: !!from, hasSheet: !!sheetUrl })
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 })
  }

  // 1) Durable record FIRST, capturing the lead no matter what happens with the
  // email or alert channels. This is the system of record (mirrors to BigQuery).
  let leadId: string | null = null
  try {
    const ref = await adminDb()
      .collection("websiteLeads")
      .add({
        source,
        name: name || null,
        email,
        referral: referral || null,
        attribution,
        status: "new",
        userAgent: req.headers.get("user-agent") || null,
        referer: req.headers.get("referer") || null,
        createdAt: FieldValue.serverTimestamp(),
      })
    leadId = ref.id
  } catch (err) {
    // Don't fail the request — the visitor still gets their sample below.
    console.error("[lead] firestore write failed", err)
  }

  const greeting = name ? `Hi ${name.split(" ")[0]},` : "Hi,"
  const subject = "Flow Contents — Sample Report + How we work"

  const text = [
    greeting,
    "",
    "Leland here. Thanks for requesting our sample report. Open the live spreadsheet to see every line item, fully filterable and priced:",
    "",
    sheetUrl,
    "",
    "How it works",
    "",
    "Once we receive your photos, our pipeline runs them through a multi-step identification process where we extract LKQ features and details, then identify approximate age and condition. From there we price each item against live retail data, not an outdated database.",
    "",
    "Then every single item is reviewed by our contents specialists.",
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
  <p>Leland here. Thanks for requesting our sample report. Open the live spreadsheet to see every line item, fully filterable and priced:</p>
  <p style="margin:18px 0">
    <a href="${sheetUrl}" style="display:inline-block;background:#1d4ed8;color:#fff;text-decoration:none;font-weight:600;padding:10px 18px;border-radius:6px">Open the sample report →</a>
  </p>
  <h3 style="margin-top:24px;margin-bottom:8px;font-size:16px">How it works</h3>
  <p>Once we receive your photos, our pipeline runs them through a multi-step identification process where we extract LKQ features and details, then identify approximate age and condition. From there we price each item against live retail data, not an outdated database.</p>
  <p>Then every single item is reviewed by our contents specialists.</p>
  <p>We offer <strong>priority 72-hour turnaround</strong>. Normal processing is one week, audit included. Our average list size runs about <strong>3,000 items</strong>.</p>
  <p>I'd love your honest feedback on the report. If you have an active claim or know someone who does, just hit reply — this email goes straight to me.</p>
  <p style="margin-top:24px">Best,<br>
  Leland Coontz IV<br>
  Flow Contents<br>
  <a href="https://flowcontents.com" style="color:#1d4ed8">flowcontents.com</a></p>
</body></html>`

  // Memory Jogger waitlist sign-ups get a waitlist confirmation, not the sample report.
  const waitlistText = [
    greeting,
    "",
    "Thanks for joining the Memory Jogger waitlist. It's our room-by-room checklist of more than 12,000 household items, built from real fire claims, and your whole family can work on it from their own phones. I'll email you as soon as it opens.",
    "",
    `If you'd like help with your contents list before then, just reply to this email or book a 15-minute call: ${BOOKING_URL}`,
    "",
    "Best,",
    "Leland Coontz IV",
    "Flow Contents",
    "flowcontents.com",
  ].join("\n")
  const waitlistHtml = `<div dir="ltr">${greeting}<br><br>Thanks for joining the Memory Jogger waitlist. It's our room-by-room checklist of more than 12,000 household items, built from real fire claims, and your whole family can work on it from their own phones. I'll email you as soon as it opens.<br><br>If you'd like help with your contents list before then, just reply to this email or <a href="${BOOKING_URL}">book a 15-minute call</a>.<br><br>Best,<br>Leland Coontz IV<br>Flow Contents<br><a href="https://flowcontents.com">flowcontents.com</a></div>`

  const resend = new Resend(apiKey)
  try {
    const { data, error } = await resend.emails.send({
      from,
      to: email,
      replyTo,
      subject: isWaitlist ? "You're on the Memory Jogger waitlist" : subject,
      text: isWaitlist ? waitlistText : text,
      html: isWaitlist ? waitlistHtml : html,
    })

    if (error) {
      console.error("[lead] resend error", { source: body.source, email, error })
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
    }

    console.log("[lead] sent", { id: data?.id, source, email, name, referral, leadId })

    // 3) Internal alerts, best-effort. Awaited (so they actually run in the
    // serverless function) but never allowed to fail the visitor response.
    const notifyEmail = process.env.LEAD_NOTIFY_EMAIL || replyTo
    const when = new Date().toISOString()
    // Source, medium, campaign, content, landing page.
    const attributionValues = attribution
      ? [attribution.utm_source, attribution.utm_medium, attribution.utm_campaign, attribution.utm_content, attribution.landing_page].map(
          (v) => v ?? "",
        )
      : []
    const attributionLine = attribution ? `\nCame from: ${attributionValues.map((v) => v || "-").join(" / ")}` : ""
    // Sheet cells are written with USER_ENTERED, so a visitor-supplied value that starts with = + - or @ would run as a formula.
    const sheetSafe = (v: string) => (/^[=+\-@]/.test(v) ? `'${v}` : v)
    const summary = `New ${source} lead\nEmail: ${email}\nName: ${name || "(none)"}\nWho told them: ${referral || "(not answered)"}${attributionLine}\nTime: ${when}\nLead ID: ${leadId || "(not saved)"}`
    const channels = await Promise.allSettled([
      resend.emails.send({
        from,
        to: notifyEmail,
        replyTo: email,
        subject: `New ${source} lead: ${email}`,
        text: summary,
      }),
      notifyWhatsApp(summary),
      // Attribution goes in trailing columns G to K, and only when there is some, so rows
      // from untagged visitors stay exactly the six columns the sheet already has.
      appendLeadToSheet([when, email, name, source, leadId || "", req.headers.get("referer") || "", ...attributionValues.map(sheetSafe)]),
    ])
    const channelNames = ["notify-email", "whatsapp", "sheet"]
    channels.forEach((r, i) => {
      if (r.status === "rejected") console.error(`[lead] alert ${channelNames[i]} failed`, r.reason)
    })

    return NextResponse.json({ ok: true, id: data?.id, leadId })
  } catch (err) {
    console.error("[lead] resend exception", err)
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
  }
}
