const steps = [
  {
    n: "Hour 0",
    title: "You upload the photos",
    body: "Drag-and-drop or shared drive link. Phone photos, video stills, walk-through footage — whatever your team or your client captured. We ingest the full set in minutes.",
  },
  {
    n: "Hour 0–48",
    title: "AI drafts every line",
    body: "Our inventory engine detects every visible item, extracts feature attributes from photo metadata, matches to a replacement product, and computes ACV / RCV against current vendor pricing.",
  },
  {
    n: "Hour 24–60",
    title: "Reviewers finalize",
    body: "A trained Flow Contents reviewer walks every line — correcting wrong matches, adding the items the AI missed, locking in Xactimate codes, and confirming age and condition.",
  },
  {
    n: "Hour 72",
    title: "Carrier-ready report delivered",
    body: "You receive a single spreadsheet — every line with the full 9 fields, formatted to drop straight into your claim file. No rekeying. No reformatting. Filed the same day.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-[1180px] px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="fc-eyebrow">The 72-hour Process</div>
          <h2 className="fc-section-title mt-4">
            From photos to filed in 72 hours.
          </h2>
          <p className="fc-lead mt-5">
            One handoff. One delivery. The hours between are ours to manage.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-blue-700">
                  {s.n}
                </span>
                <span className="font-mono text-[11px] font-semibold tabular-nums text-slate-300">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-3 text-[16px] font-semibold tracking-tight text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
