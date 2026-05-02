import { HeroCopy, PlaygroundFrame, PlaygroundNav } from "../_shared"
import { cellClass, isBlank, pickCell } from "@/lib/matrix-content"

const COLS = 11
const ROWS = 22

// Each row gets a stagger across columns (left-to-right wave). Each row also
// has its own slight phase offset so the waves don't all march in lockstep.
function cellTiming(c: number, r: number) {
  const cycle = 14 // total seconds for one full pass across the row
  const colDelay = (c / COLS) * cycle * 0.6
  const rowJitter = ((r * 0.37) % 1) * 4 // 0–4s row offset
  return {
    duration: cycle,
    delay: -(colDelay + rowJitter),
  }
}

export default function Concept7() {
  const cells = Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => ({
      blank: isBlank(c, r, 0.18, 7),
      cell: pickCell(c, r, 7),
      timing: cellTiming(c, r),
    }))
  )

  return (
    <PlaygroundFrame title="Concept 7 — Horizontal flow" notes="Slow left-to-right wave of data. Each row has its own offset.">
      <PlaygroundNav />
      <section className="relative overflow-hidden bg-white">
        <style>{`
          @keyframes fc-flow {
            0%   { opacity: 0;   transform: translateX(-6px); }
            18%  { opacity: 1;   transform: translateX(0); }
            55%  { opacity: 1;   transform: translateX(0); }
            85%  { opacity: 0;   transform: translateX(6px); }
            100% { opacity: 0;   transform: translateX(6px); }
          }
          @media (prefers-reduced-motion: reduce) {
            .fc-flow-cell { animation: none !important; opacity: 0.55 !important; transform: none !important; }
          }
        `}</style>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none"
          style={{
            opacity: 0.22,
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 45%, black 0%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 45%, black 0%, transparent 85%)",
          }}
        >
          <div
            className="grid h-full w-full px-12 py-10"
            style={{
              gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
              gap: "10px 16px",
            }}
          >
            {cells.flat().map((c, i) => (
              <div
                key={i}
                className={`fc-flow-cell flex items-center text-[11px] leading-none whitespace-nowrap overflow-hidden ${
                  c.blank ? "" : cellClass(c.cell.kind)
                }`}
                style={{
                  animation: c.blank
                    ? "none"
                    : `fc-flow ${c.timing.duration}s ease-in-out ${c.timing.delay}s infinite`,
                  willChange: "opacity, transform",
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
