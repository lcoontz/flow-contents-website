export function SolutionSection() {
  return (
    <section id="solution" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="fc-eyebrow">The Solution</div>
          <h2 className="fc-section-title mt-4">
            We turn your photos into a finished, priced contents report in 72 hours.
          </h2>
          <p className="fc-lead mt-5">
            You upload the photos. We send back the finished report in 72 hours, ready to submit.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Pillar
            kicker="01 — Photos in"
            title="You send the photos"
            body="Smoke, water, contamination, fire. Phone photos, drone shots, walk-through video stills. We accept what your team or your client already has — no on-site visit required, no protocol training, no proprietary capture rig."
          />
          <Pillar
            kicker="02 — Engine + specialists"
            title="AI does the volume. People handle the accuracy."
            body="Our AI detects every item, extracts features, and proposes a replacement product with ACV and RCV. Our content specialists then walk every line — correcting matches, catching the items the AI missed, and locking in the Xactimate code."
            featured
          />
          <Pillar
            kicker="03 — Speed"
            title="72 hours. Not 3 weeks."
            body="A property that used to take three weeks of contents work, finished in 72 hours at the same depth — and the accuracy guarantee sits on us, not your client."
          />
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 sm:p-10">
          <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 text-white">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18M3 12h18" />
              </svg>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-700">
                Why this matters
              </div>
              <p className="mt-2 text-[16px] font-semibold leading-snug text-slate-900">
                We believe in AI, but we don&apos;t depend on it.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                In insurance you have to aim for perfect to land on good. A human-only inventory costs more than
                the claim is worth and still won&apos;t get you there. An AI-only inventory is wrong often enough to be
                a liability. AI builds the 95% baseline; our content specialists close the gap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pillar({
  kicker,
  title,
  body,
  featured = false,
}: {
  kicker: string
  title: string
  body: string
  featured?: boolean
}) {
  return (
    <div
      className={`rounded-xl border p-7 ${
        featured
          ? "border-blue-200 bg-blue-50/40 shadow-md"
          : "border-slate-200 bg-white shadow-sm"
      }`}
    >
      <div
        className={`text-[11px] font-semibold uppercase tracking-wider ${
          featured ? "text-blue-700" : "text-slate-500"
        }`}
      >
        {kicker}
      </div>
      <h3 className="mt-3 text-[18px] font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-2.5 text-[14px] leading-relaxed text-slate-600">{body}</p>
    </div>
  )
}
