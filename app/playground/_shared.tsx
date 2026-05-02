"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { Wordmark } from "@/components/logo"

export function PlaygroundFrame({
  title,
  notes,
  children,
}: {
  title: string
  notes?: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Playground bar */}
      <div className="border-b border-slate-200 bg-slate-50 px-6 py-3">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <Link href="/playground" className="text-[12px] font-semibold text-slate-500 hover:text-slate-900">
              ← Playground
            </Link>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              {title}
            </span>
          </div>
          {notes && <span className="hidden text-[12px] text-slate-500 sm:inline">{notes}</span>}
        </div>
      </div>
      {children}
    </div>
  )
}

/**
 * Shared hero copy + CTAs — identical to production so we're comparing only the
 * background, not the content.
 */
export function HeroCopy() {
  return (
    <div className="relative mx-auto max-w-[860px] text-center">
      <p className="text-[20px] font-semibold tracking-tight text-blue-700 sm:text-[22px]">
        We generate contents lists for public adjusters.
      </p>
      <h1 className="fc-hero-title mt-4">
        Every dollar in every photo. <em>Defensible.</em> In 72 hours.
      </h1>
      <p className="fc-lead mx-auto mt-6 max-w-2xl">
        Built for public adjusters who promise their clients the maximum settlement —
        and need the no-hassle list to back it up. Send us the photos. Our trained
        in-house team plus our AI inventory engine return 5,000–7,000 line items,
        every one with replacement product, purchase link, ACV, and RCV — guaranteed
        in 72 hours, or your money back.
      </p>
      <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-7 py-4 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
        >
          View Sample Report
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-7 py-4 text-[15px] font-semibold text-slate-900 hover:bg-slate-50"
        >
          Book a 15-min call
        </button>
      </div>
    </div>
  )
}

export function PlaygroundNav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1320px] items-center justify-between px-6">
        <Wordmark size={28} href="/" />
        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Hero preview only
        </span>
      </div>
    </nav>
  )
}
