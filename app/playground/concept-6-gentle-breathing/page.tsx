import { HeroCopy, PlaygroundFrame, PlaygroundNav } from "../_shared"
import { cellClass, isBlank, pickCell } from "@/lib/matrix-content"

const COLS = 9
const ROWS = 22

// Deterministic per-cell phase + duration so the SSR + CSR markup matches.
function cellTiming(c: number, r: number) {
  const seed = Math.sin(c * 17.31 + r * 9.71) * 43758.5453
  const frac = seed - Math.floor(seed)
  // duration between 6s and 16s
  const duration = 6 + frac * 10
  // delay between -16s and 0 so cells start mid-cycle, no synchronized first beat
  const delay = -frac * 16
  return { duration, delay }
}

export default function Concept6() {
  const cells = Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => ({
      blank: isBlank(c, r, 0.28),
      cell: pickCell(c, r),
      timing: cellTiming(c, r),
    }))
  )

  return (
    <PlaygroundFrame title="Concept 6 — Gentle breathing" notes="Cells fade in/out softly, randomized timing. CSS only.">
      <PlaygroundNav />
      <section className="relative overflow-hidden bg-white">
        <style>{`
          @keyframes fc-breathe {
            0%   { opacity: 0; }
            45%  { opacity: 1; }
            55%  { opacity: 1; }
            100% { opacity: 0; }
          }
          @media (prefers-reduced-motion: reduce) {
            .fc-breathe-cell { animation: none !important; opacity: 0.55 !important; }
          }
        `}</style>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none"
          style={{
            opacity: 0.22,
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 0%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 0%, transparent 80%)",
          }}
        >
          <div
            className="grid h-full w-full px-12 py-10"
            style={{
              gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
              gap: "10px 18px",
            }}
          >
            {cells.flat().map((c, i) => (
              <div
                key={i}
                className={`fc-breathe-cell flex items-center text-[11px] leading-none whitespace-nowrap overflow-hidden ${
                  c.blank ? "" : cellClass(c.cell.kind)
                }`}
                style={{
                  animation: c.blank
                    ? "none"
                    : `fc-breathe ${c.timing.duration}s ease-in-out ${c.timing.delay}s infinite`,
                  willChange: "opacity",
                }}
              >
                {c.blank ? "" : c.cell.text}
              </div>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(255,255,255,0.85) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1320px] px-6 pb-32 pt-24 lg:pt-32">
          <HeroCopy />
        </div>
      </section>
    </PlaygroundFrame>
  )
}
