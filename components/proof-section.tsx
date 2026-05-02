const properties = [
  {
    label: "Pacific Palisades",
    detail: "2,840 sqft · 4,287 items",
    initial: "$385,000",
    final: "$687,500",
    deltaPct: 79,
    deltaDollars: "+$302,500",
  },
  {
    label: "Pacific Palisades",
    detail: "1,960 sqft · 3,812 items",
    initial: "$320,000",
    final: "$465,200",
    deltaPct: 45,
    deltaDollars: "+$145,200",
  },
  {
    label: "Malibu",
    detail: "3,380 sqft · 7,634 items",
    initial: "$580,000",
    final: "$1,142,800",
    deltaPct: 97,
    deltaDollars: "+$562,800",
    featured: true,
  },
]

const aggregate = [
  { value: "$1,010,500", label: "Additional value recovered" },
  { value: "79%", label: "Average payout increase" },
  { value: "15,733", label: "Items documented" },
  { value: "3", label: "Properties to date" },
]

export function ProofSection() {
  return (
    <section id="proof" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-[1180px] px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="fc-eyebrow">The Numbers</div>
          <h2 className="fc-section-title mt-4">
            What happens when the documentation is right.
          </h2>
          <p className="fc-lead mt-5">
            Three properties. Three carriers. The same engine produced these results.
          </p>
        </div>

        {/* aggregate KPIs */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 shadow-sm sm:grid-cols-4">
          {aggregate.map((k) => (
            <div key={k.label} className="bg-white p-6 sm:p-8">
              <div className="font-mono text-[28px] font-bold tabular-nums tracking-tight text-slate-900 sm:text-[32px]">
                {k.value}
              </div>
              <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {k.label}
              </div>
            </div>
          ))}
        </div>

        {/* per-property cards */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {properties.map((p) => (
            <div
              key={p.detail}
              className={`rounded-xl border p-7 shadow-sm ${
                p.featured ? "border-blue-200 bg-white shadow-md" : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[14px] font-semibold text-slate-900">{p.label}</span>
                {p.featured && (
                  <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700">
                    Largest
                  </span>
                )}
              </div>
              <div className="mt-1 text-[12px] text-slate-500">{p.detail}</div>

              <div className="mt-6 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-[12px] uppercase tracking-wider text-slate-500">
                    Initial
                  </span>
                  <span className="font-mono text-[14px] tabular-nums text-slate-700">
                    {p.initial}
                  </span>
                </div>
                <div className="flex items-baseline justify-between border-t border-slate-100 pt-3">
                  <span className="text-[12px] uppercase tracking-wider text-slate-500">
                    Final
                  </span>
                  <span className="font-mono text-[18px] font-bold tabular-nums text-slate-900">
                    {p.final}
                  </span>
                </div>
              </div>

              <div className="mt-5 rounded-md bg-blue-50 px-4 py-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-[12px] font-semibold text-blue-700">
                    {p.deltaDollars}
                  </span>
                  <span className="font-mono text-[14px] font-bold tabular-nums text-blue-700">
                    +{p.deltaPct}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
