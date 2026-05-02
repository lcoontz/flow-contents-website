const fields = [
  { code: "01", label: "Item name", desc: "Specific product where verifiable. Generic only when the photo doesn't allow more." },
  { code: "02", label: "Description", desc: "One-line plain-English description of what the line item is." },
  { code: "03", label: "Features", desc: "Material, finish, configuration, brand, model number — every attribute extracted from the photos." },
  { code: "04", label: "Category", desc: "Internal taxonomy that groups items for room-by-room and total claim views." },
  { code: "05", label: "Xactimate contents code", desc: "The exact carrier code, ready for direct entry. No mapping work for your team." },
  { code: "06", label: "Age", desc: "Estimated using photo evidence and category benchmarks. Drives depreciation correctly." },
  { code: "07", label: "Condition", desc: "Excellent / Good / Fair / Poor, supported by photo. Stops carrier downgrades." },
  { code: "08", label: "ACV", desc: "Actual Cash Value — depreciated against age and condition." },
  { code: "09", label: "RCV", desc: "Replacement Cost Value — current market price from the linked replacement product." },
]

const examples = [
  { claim: "$200,000", base: 2000, bonus: 0, total: 2000 },
  { claim: "$400,000", base: 2000, bonus: 2000, total: 4000 },
  { claim: "$1,000,000", base: 2000, bonus: 8000, total: 10000 },
  { claim: "$2,500,000", base: 2000, bonus: 23000, total: 25000 },
]

export function OfferSection() {
  return (
    <section id="offer" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="fc-eyebrow">What You Get</div>
          <h2 className="fc-section-title mt-4">
            Every line. Nine fields. Every claim.
          </h2>
          <p className="fc-lead mt-5">
            One report. One fee. Built for a public adjuster's claim file — not a homeowner's
            Google Sheet.
          </p>
        </div>

        {/* 9-field grid */}
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {fields.map((f) => (
            <div
              key={f.code}
              className="rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-baseline gap-2.5">
                <span className="font-mono text-[11px] font-semibold tabular-nums text-blue-700">
                  {f.code}
                </span>
                <span className="text-[14px] font-semibold text-slate-900">{f.label}</span>
              </div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing card */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-lg">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.15fr_1fr] lg:items-start">
            {/* Left: pitch + included */}
            <div>
              <div className="fc-eyebrow">Pricing</div>
              <h3 className="mt-3 text-[28px] font-bold tracking-tight text-slate-900 sm:text-[32px]">
                One tier. One fee. No surprises.
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                Flat <strong className="text-slate-900">$2,000 base fee</strong> plus{" "}
                <strong className="text-slate-900">1% of documented value above $200,000</strong>.
                You only pay the base upfront — the performance bonus comes due on delivery,
                after you've seen the report.
              </p>
              <ul className="mt-6 space-y-3 text-[14px] text-slate-700">
                <Bullet>Unlimited photos per property — all rooms, exterior, garage</Bullet>
                <Bullet>5,000–7,000 line items per property, on average</Bullet>
                <Bullet>All 9 fields on every line, including Xactimate code</Bullet>
                <Bullet>Claims from $50K to $5M</Bullet>
                <Bullet>Up to 3 revision passes included</Bullet>
                <Bullet>72-hour turnaround, guaranteed</Bullet>
                <Bullet>No per-item, per-room, or overage charges. Ever.</Bullet>
              </ul>
            </div>

            {/* Right: pricing card + examples */}
            <div className="space-y-5">
              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-baseline gap-2">
                  <span className="text-[44px] font-bold leading-none tracking-tight text-slate-900">
                    $2,000
                  </span>
                  <span className="text-[14px] text-slate-500">base · paid upfront</span>
                </div>
                <div className="mt-3 flex items-baseline gap-2 border-t border-slate-100 pt-4">
                  <span className="text-[20px] font-semibold text-slate-900">+ 1%</span>
                  <span className="text-[13px] text-slate-600">
                    of documented value above $200K · paid on delivery
                  </span>
                </div>
                <div className="mt-5 rounded-md bg-blue-50 p-4">
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-blue-700">
                    Payment terms
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-700">
                    Only the $2,000 base is due upfront. The performance bonus is invoiced when
                    we deliver — never before.
                  </p>
                </div>
                <a
                  href="#cta"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  Start a claim
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Worked examples */}
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="border-b border-slate-200 bg-slate-50 px-4 py-2">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    What it costs on real claims
                  </span>
                </div>
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      <th className="px-4 py-2">Claim value</th>
                      <th className="px-4 py-2 text-right">Base</th>
                      <th className="px-4 py-2 text-right">+ 1% bonus</th>
                      <th className="px-4 py-2 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {examples.map((e) => (
                      <tr key={e.claim}>
                        <td className="px-4 py-2 font-mono tabular-nums text-slate-700">
                          {e.claim}
                        </td>
                        <td className="px-4 py-2 text-right font-mono tabular-nums text-slate-700">
                          ${e.base.toLocaleString()}
                        </td>
                        <td className="px-4 py-2 text-right font-mono tabular-nums text-slate-700">
                          {e.bonus === 0 ? "—" : `$${e.bonus.toLocaleString()}`}
                        </td>
                        <td className="px-4 py-2 text-right font-mono tabular-nums font-semibold text-slate-900">
                          ${e.total.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  )
}
