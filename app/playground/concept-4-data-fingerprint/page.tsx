import { HeroCopy, PlaygroundFrame, PlaygroundNav } from "../_shared"

export default function Concept4() {
  // Generate a deterministic "fingerprint" of varying tick widths — looks like an
  // abstract data visualization, but it's purely decorative.
  const rows = Array.from({ length: 40 }, (_, r) =>
    Array.from({ length: 80 }, (_, c) => {
      // pseudo-random based on r/c so it's stable on render
      const v = (Math.sin(r * 12.9898 + c * 78.233) + 1) / 2
      return v
    })
  )

  return (
    <PlaygroundFrame title="Concept 4 — Data fingerprint" notes="Abstract pattern from item-row ticks">
      <PlaygroundNav />
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex flex-col gap-[5px] px-12 py-12"
          style={{
            opacity: 0.12,
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 45%, black 0%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 45%, black 0%, transparent 80%)",
          }}
        >
          {rows.map((row, ri) => (
            <div key={ri} className="flex gap-[5px]">
              {row.map((v, ci) => (
                <div
                  key={ci}
                  style={{
                    height: "8px",
                    width: `${4 + v * 18}px`,
                    background: v > 0.78 ? "#2563eb" : "#cbd5e1",
                    borderRadius: "1px",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,0.85) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1320px] px-6 pb-32 pt-24 lg:pt-32">
          <HeroCopy />
        </div>
      </section>
    </PlaygroundFrame>
  )
}
