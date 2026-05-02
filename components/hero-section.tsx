"use client"

import Link from "next/link"
import { Wordmark } from "@/components/logo"
import { useSampleReport } from "@/components/providers"
import { HeroMatrixBg } from "@/components/hero-matrix-bg"

export function HeroSection() {
  const { open: openReport } = useSampleReport()

  return (
    <>
      {/* ── Top nav ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1320px] items-center justify-between px-6">
          <Wordmark size={28} href="/" />
          <div className="hidden items-center gap-7 md:flex">
            <Link href="#solution" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              How It Works
            </Link>
            <Link href="#sample" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              Sample Report
            </Link>
            <Link href="#offer" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              FAQ
            </Link>
          </div>
          <Link
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Book a call
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* ── Hero — full-width, centered, with matrix grid background ──── */}
      <section className="relative overflow-hidden bg-white">
        <HeroMatrixBg />

        <div className="relative mx-auto max-w-[1320px] px-6 pb-24 pt-24 lg:pb-32 lg:pt-32">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="text-[20px] font-semibold tracking-tight text-blue-700 sm:text-[22px]">
              72-hour contents list for public adjusters
            </p>

            <h1 className="fc-hero-title mt-4">
              Every dollar in every photo. <em>Defensible.</em>
            </h1>

            <p className="fc-lead mx-auto mt-6 max-w-2xl">
              You want the maximum settlement and the no-hassle list to back it up. Our
              in-house contents specialists plus our AI inventory engine return 5,000–7,000
              line items, each with replacement product link, RCV, ACV, guaranteed in 72
              hours, or your money back.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={openReport}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-7 py-4 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
              >
                View Sample Report
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
              <Link
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-7 py-4 text-[15px] font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                Book a 15-min call
              </Link>
            </div>

            {/* proof strip */}
            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t border-slate-200 pt-8 text-[13px] text-slate-600">
              <Stat value="$1M+" label="additional value recovered" />
              <Divider />
              <Stat value="79%" label="avg payout increase" />
              <Divider />
              <Stat value="15K+" label="items documented" />
              <Divider />
              <Stat value="72hr" label="guaranteed turnaround" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="inline-flex items-baseline gap-1.5">
      <span className="font-semibold text-slate-900">{value}</span>
      <span>{label}</span>
    </div>
  )
}

function Divider() {
  return <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />
}
