"use client"

import { useState } from "react"

const faqs = [
  {
    q: "How does pricing actually work on a real claim?",
    a: "Flat $2,000 base fee plus 1% of documented value above $200,000. So a $400,000 claim is $2,000 + $2,000 = $4,000 total. A $1M claim is $2,000 + $8,000 = $10,000. Only the $2,000 base is due upfront — the performance bonus is invoiced on delivery, after you've seen the report. No hidden per-item charges, no per-room charges, no overages.",
  },
  {
    q: "What photos do you actually need?",
    a: "Whatever you or your client already have. iPhone walk-throughs, drone footage, individual room photos, video stills — we work with all of it. The denser the photo coverage, the more items we can extract, but there's no proprietary capture protocol you have to learn or train your team on.",
  },
  {
    q: "What if my client doesn't have pre-loss photos?",
    a: "Most don't, and that's fine. We work from post-loss photos plus structured client interviews. For total losses, we can also pull comparable rooms from real estate listings, social media archives, and prior insurance documentation to reconstruct the inventory.",
  },
  {
    q: "Will the report import directly into Xactimate or Symbility?",
    a: "Every line item carries the correct Xactimate contents code. The spreadsheet is column-mapped for direct import — no manual code lookup, no reformatting. Symbility-compatible export is on request.",
  },
  {
    q: "What's your turnaround on revisions?",
    a: "Up to three revision passes are included in the base fee, each turned in 24–48 hours. Beyond that, $1 per item revised. Most claims close inside the included revisions.",
  },
  {
    q: "How is this different from Enservio or ITEL?",
    a: "Enservio and ITEL are carrier-side vendors — they work for the insurance company. We work for you. Our engine and review process is calibrated to extract every defensible attribute that drives the line item up the LKQ ladder, not down it.",
  },
  {
    q: "What kinds of claims do you take?",
    a: "Smoke, water, fire, contamination, mold, vandalism — any first-party residential contents claim from $50,000 to $5 million. Commercial claims case-by-case.",
  },
  {
    q: "Who owns the data and the report?",
    a: "You and your client. We retain working copies for revision support and case history, but the deliverable is yours to use, share, and file as you see fit. No carrier ever sees your file from us.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-[1180px] px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="fc-eyebrow">Common Questions</div>
          <h2 className="fc-section-title mt-4">Questions public adjusters ask us.</h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all ${
                  isOpen ? "border-blue-300 shadow-md" : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-slate-900">{f.q}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-6 py-5 text-[14px] leading-relaxed text-slate-600">
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
