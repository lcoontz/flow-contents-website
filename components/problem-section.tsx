const problems = [
  {
    title: "Generic lists, minimum payouts",
    body: "Carrier software values \"toaster\" at $4.88 and \"Breville Smart Toaster (BTA840XL)\" at $149.95. Your client's list looks like the first one — and they leave 70% on the table without ever knowing.",
  },
  {
    title: "Weeks to compile, days to file",
    body: "A traditional contents list takes 4–5 weeks to assemble. Meanwhile your client is sleeping on a friend's couch and the carrier is asking why nothing has been submitted.",
  },
  {
    title: "Carriers reject unverified lines",
    body: "If a line item doesn't have a comparable replacement, a real product link, and quantifiable features, the carrier values it at the lowest match in the database. Then they push back when you challenge it.",
  },
  {
    title: "The task usually lands on the homeowner",
    body: "Contents claims take weeks. It's not unusual for the homeowner to be left with the impossible task — one nobody wants to take. Send it to us instead. Your clients get a more complete, defensible list than anyone could have built alone. You get your time back, and a higher fee on the overall total payout.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-[1180px] px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="fc-eyebrow">The Problem</div>
          <h2 className="fc-section-title mt-4">
            Contents claims are the bottleneck no one has solved.
          </h2>
          <p className="fc-lead mt-5">
            Reading damage is your job. Pricing 5,000 items shouldn&apos;t be.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-[16px] font-semibold tracking-tight text-slate-900">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
