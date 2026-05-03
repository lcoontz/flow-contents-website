import Link from "next/link"

const BOOKING_URL = "https://tidycal.com/leland/intro-call-flow-contents-ai-w-leland"

export function CtaSection() {
  return (
    <section id="cta" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-24">
        <div className="rounded-2xl bg-slate-900 p-10 text-center shadow-xl sm:p-16">
          <div className="fc-eyebrow" style={{ color: "#60a5fa" }}>
            Ready when you are
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl text-[32px] font-bold leading-tight tracking-tight text-white sm:text-[40px]">
            Have an active claim? Let's talk for 15 minutes.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-slate-300">
            Walk us through one claim, see how we'd structure the photo handoff, and get a
            firm quote on the spot. No pitch deck, no follow-up sequence.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-7 py-4 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-blue-500"
            >
              Book a 15-min call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+17146752710"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.63 4.35 2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call (714) 675-2710
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] text-slate-400">
            <span>National coverage</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>Based in Los Angeles</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>15-minute call · no commitment</span>
          </div>
        </div>
      </div>
    </section>
  )
}
