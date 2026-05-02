"use client"

import { useState } from "react"
import { useSampleReport } from "@/components/providers"

export function SampleReportSection() {
  const { open: openReport } = useSampleReport()
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const formData = new FormData(e.currentTarget)
    try {
      await fetch("/api/lead", {
        method: "POST",
        body: JSON.stringify({
          source: "sample-report",
          name: formData.get("name"),
          email: formData.get("email"),
          firm: formData.get("firm"),
        }),
        headers: { "Content-Type": "application/json" },
      })
    } catch {
      // non-fatal
    }
    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <section id="sample" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="fc-eyebrow">Sample Report</div>
          <h2 className="fc-section-title mt-4">
            See what your client's report will look like.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[18px] font-semibold leading-snug text-slate-900">
            1,000 items. 10 rooms. 72 hours. Every item priced, sourced, and depreciated.
          </p>
          <p className="fc-lead mt-4">
            An anonymized excerpt — every line with the full nine fields, every link live.
            Browse it in your browser. We'll generate the real file for your specific claim.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-6">
          {/* Primary: open the report */}
          <button
            type="button"
            onClick={openReport}
            className="group inline-flex items-center gap-3 rounded-md bg-blue-600 px-8 py-4 text-[16px] font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            View the Sample Report
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <p className="text-[13px] text-slate-500">
            Browse the spreadsheet in-browser · the full file is generated per claim
          </p>
        </div>

        {/* Lead capture: have us follow up */}
        <div className="mx-auto mt-16 max-w-xl rounded-xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
          {submitted ? (
            <div className="text-center">
              <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="mt-3 text-[16px] font-semibold tracking-tight text-slate-900">
                Got it. We'll be in touch.
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                Leland will reach out personally within one business day. If you have an
                active claim, mention it in your reply.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
              <Input name="name" label="Name" placeholder="Your name" required />
              <Input name="email" type="email" label="Work email" placeholder="you@firm.com" required />
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-[42px] items-center justify-center gap-1.5 rounded-md border border-slate-300 bg-white px-5 text-[13px] font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-100 disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Have us follow up"}
              </button>
              <input type="hidden" name="firm" value="" />
              <p className="text-[11px] text-slate-500 sm:col-span-3">
                Have a live claim or want a tailored walkthrough? Drop your email and we'll
                reach out within one business day.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Input({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
}: {
  name: string
  label: string
  type?: string
  placeholder: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 block h-[42px] w-full rounded-md border border-slate-300 bg-white px-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
      />
    </label>
  )
}
