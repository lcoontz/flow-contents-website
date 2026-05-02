import { HeroCopy, PlaygroundFrame, PlaygroundNav } from "../_shared"

export default function Concept3() {
  return (
    <PlaygroundFrame title="Concept 3 — Fanned stack" notes="Three documents fanned out — implies depth">
      <PlaygroundNav />
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[520px] rounded-full opacity-50" style={{ background: "radial-gradient(closest-side, rgba(37, 99, 235, 0.10), transparent 70%)" }} />

        {/* three cards, fanned */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-32 flex justify-center">
          <div className="relative h-[560px] w-[820px]">
            {[
              { rotate: -10, x: -180, y: 30, opacity: 0.10 },
              { rotate: 8, x: 180, y: 50, opacity: 0.12 },
              { rotate: -2, x: 0, y: 0, opacity: 0.18 },
            ].map((c, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 h-[480px] w-[640px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-2xl"
                style={{
                  transform: `translate(calc(-50% + ${c.x}px), calc(-50% + ${c.y}px)) rotate(${c.rotate}deg)`,
                  opacity: c.opacity,
                  filter: "blur(0.6px)",
                }}
              >
                <MiniReport />
              </div>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 45%, transparent 0%, rgba(255,255,255,0.55) 65%, white 95%)",
          }}
        />

        <div className="relative mx-auto max-w-[1320px] px-6 pb-32 pt-24 lg:pt-32">
          <HeroCopy />
        </div>
      </section>
    </PlaygroundFrame>
  )
}

function MiniReport() {
  return (
    <>
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
        <span className="font-mono text-[11px] text-slate-500">sample_property_inventory.xlsx</span>
      </div>
      <div className="space-y-1.5 p-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="h-2.5 flex-1 rounded-full bg-slate-200" />
            <div className="h-2.5 w-16 rounded-full bg-blue-200" />
            <div className="h-2.5 w-20 rounded-full bg-slate-200" />
          </div>
        ))}
      </div>
    </>
  )
}
