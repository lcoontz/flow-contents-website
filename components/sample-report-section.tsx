"use client"

import { useState } from "react"

export function SampleReportSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        body: JSON.stringify({
          source: "sample-report",
          name: formData.get("name"),
          email: formData.get("email"),
        }),
        headers: { "Content-Type": "application/json" },
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || "send_failed")
      }
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Try again, or email leland@flowcontents.com directly.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="sample" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="fc-eyebrow">Sample Report</div>
          <h2 className="fc-section-title mt-4">
            See a real sample report
          </h2>
          <p className="fc-lead mx-auto mt-5 max-w-xl">
            Anonymized excerpt from a real claim. Drop your email and we&apos;ll send you the live spreadsheet.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
          {submitted ? (
            <div className="text-center">
              <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="mt-3 text-[16px] font-semibold tracking-tight text-slate-900">
                Check your inbox.
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                The sample report is on its way. If it doesn&apos;t arrive in a few minutes,
                check spam or email{" "}
                <a href="mailto:leland@flowcontents.com" className="font-medium text-blue-700 underline-offset-2 hover:underline">
                  leland@flowcontents.com
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="name" label="Name" placeholder="Your name" required />
                <Input name="email" type="email" label="Work email" placeholder="you@firm.com" required />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send me the sample report"}
                {!submitting && (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
              {error && (
                <p className="text-center text-[12px] text-red-600">{error}</p>
              )}
              <p className="text-center text-[11px] text-slate-500">
                We&apos;ll email it within seconds. No spam — just the sample and a brief note.
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
