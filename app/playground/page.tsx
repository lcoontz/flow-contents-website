import Link from "next/link"

const concepts = [
  {
    slug: "concept-9-two-layer-waves",
    title: "Concept 9 — Two-layer alternating waves",
    desc: "Two layers of cells at the same coordinates. Layer A waves out as Layer B waves in. Continuous content turnover, much higher density. Brand-prefixed item names ('Lululemon yoga mat', not 'yoga mat').",
    badge: "ROUND 3 · two layers",
  },
  {
    slug: "concept-10-combined-effects",
    title: "Concept 10 — Combined gentle + horizontal, richer",
    desc: "Single layer using both Concept 6 (gentle breathing) and Concept 7 (horizontal flow) simultaneously. Each cell breathes on its own randomized cycle AND drifts left-to-right. Same enriched content pool.",
    badge: "ROUND 3 · combined effects",
  },
  {
    slug: "concept-5-static-matrix",
    title: "Concept 5 — Static matrix grid (text)",
    desc: "Real spreadsheet content as background — item names, dollar amounts, Xact codes, vendor links. Static.",
    badge: "Round 2",
  },
  {
    slug: "concept-6-gentle-breathing",
    title: "Concept 6 — Gentle breathing",
    desc: "Each cell quietly fades in and out on its own randomized 6–16s cycle. CSS only.",
    badge: "Round 2",
  },
  {
    slug: "concept-7-horizontal-flow",
    title: "Concept 7 — Horizontal flow",
    desc: "Cells fade in from the left and out to the right, in a slow procession. Each row offset.",
    badge: "Round 2",
  },
  {
    slug: "concept-8-character-cycling",
    title: "Concept 8 — Character cycling",
    desc: "Mostly stable grid; ~22% of cells quietly swap content every 1.6s.",
    badge: "Round 2",
  },
  {
    slug: "concept-1-blank",
    title: "Concept 1 — Pure & calm",
    desc: "Current production hero baseline. Just dot grid + radial glows.",
  },
  {
    slug: "concept-2-tilted-doc",
    title: "Concept 2 — Single tilted document",
    desc: "One large report card, tilted, blurred behind the hero copy.",
  },
  {
    slug: "concept-3-fanned-stack",
    title: "Concept 3 — Fanned stack",
    desc: "Three report cards fanned out behind the copy. Implies depth without animation.",
  },
  {
    slug: "concept-4-data-fingerprint",
    title: "Concept 4 — Data fingerprint",
    desc: "Abstract pattern of micro-rectangles. Decorative only — no readable content.",
  },
]

export default function PlaygroundIndex() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="fc-eyebrow">Playground</div>
        <h1 className="fc-hero-title mt-3">Hero background concepts</h1>
        <p className="fc-lead mt-4">
          Sandbox for iterating on the hero. Nothing here ships to production until you say
          so. Click through, react, then tell me what to refine.
        </p>

        <div className="mt-6 rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-[13px] text-slate-700">
          <strong className="text-blue-700">Round 3:</strong> brand-prefixed items ("Lululemon
          yoga mat" not "yoga mat"), denser content pool, plus your two requested treatments —
          two-layer alternating waves (C9) and combined gentle + horizontal (C10).
        </div>

        <ul className="mt-8 space-y-3">
          {concepts.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/playground/${c.slug}`}
                className={`block rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md ${
                  c.badge?.startsWith("ROUND 3")
                    ? "border-blue-300 bg-blue-50/30 hover:border-blue-400"
                    : c.badge
                      ? "border-blue-200 hover:border-blue-300"
                      : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-[15px] font-semibold text-slate-900">{c.title}</span>
                      {c.badge && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                            c.badge.startsWith("ROUND 3")
                              ? "bg-blue-600 text-white"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {c.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">
                      {c.desc}
                    </p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-slate-400">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-xl border border-dashed border-slate-300 bg-white p-6">
          <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Tell me what to tune
          </div>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-700">
            On any concept I can dial: opacity, density, grid dimensions, animation speed,
            content mix (more codes vs. money vs. links), color emphasis, edge fade. Just
            point at one and say "more X, less Y."
          </p>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-[13px] font-medium text-slate-500 hover:text-slate-900">
            ← Back to production homepage
          </Link>
        </div>
      </div>
    </main>
  )
}
