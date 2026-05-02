import { HeroCopy, PlaygroundFrame, PlaygroundNav } from "../_shared"
import { cellClass, isBlank, pickAlt, pickCell } from "@/lib/matrix-content"

const COLS = 7
const ROWS = 26

// Per-cell timing: every cell shares the same total cycle, but Layer A is visible
// during the first half and Layer B during the second half. Each cell's start
// phase is randomized so the two layers never crossfade in lockstep.
function phase(c: number, r: number) {
  const seed = Math.sin(c * 17.31 + r * 9.71) * 43758.5453
  const frac = seed - Math.floor(seed)
  const cycle = 16 // total seconds for a full A→B→A
  const delay = -frac * cycle
  return { cycle, delay }
}

export default function Concept9() {
  const layerA = Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => ({
      blank: isBlank(c, r, 0.18, 11),
      cell: pickCell(c, r, 11),
      timing: phase(c, r),
    }))
  )
  const layerB = Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => ({
      blank: isBlank(c, r, 0.18, 23),
      cell: pickAlt(c, r, 73, undefined),
      timing: phase(c, r),
    }))
  )

  return (
    <PlaygroundFrame
      title="Concept 9 — Two-layer alternating waves"
      notes="Layer A waves out as Layer B waves in. Continuous turnover, much higher density."
    >
      <PlaygroundNav />
      <section className="relative overflow-hidden bg-white">
        <style>{`
          @keyframes fc-layer-a {
            0%   { opacity: 0; transform: translateX(-4px); }
            10%  { opacity: 1; transform: translateX(0); }
            45%  { opacity: 1; transform: translateX(0); }
            55%  { opacity: 0; transform: translateX(4px); }
            100% { opacity: 0; transform: translateX(4px); }
          }
          @keyframes fc-layer-b {
            0%   { opacity: 0; transform: translateX(-4px); }
            45%  { opacity: 0; transform: translateX(-4px); }
            55%  { opacity: 0; transform: translateX(-4px); }
            65%  { opacity: 1; transform: translateX(0); }
            95%  { opacity: 1; transform: translateX(0); }
            100% { opacity: 0; transform: translateX(4px); }
          }
          @media (prefers-reduced-motion: reduce) {
            .fc-layer-a, .fc-layer-b { animation: none !important; opacity: 0.45 !important; transform: none !important; }
            .fc-layer-b { opacity: 0 !important; }
          }
        `}</style>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none"
          style={{
            opacity: 0.24,
            maskImage: "radial-gradient(ellipse 78% 68% at 50% 45%, black 0%, transparent 82%)",
            WebkitMaskImage: "radial-gradient(ellipse 78% 68% at 50% 45%, black 0%, transparent 82%)",
          }}
        >
          {/* both layers absolutely overlapping */}
          <div className="absolute inset-0">
            <Grid cells={layerA} animationName="fc-layer-a" />
          </div>
          <div className="absolute inset-0">
            <Grid cells={layerB} animationName="fc-layer-b" />
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

interface CellData {
  blank: boolean
  cell: { text: string; kind: ReturnType<typeof pickCell>["kind"] }
  timing: { cycle: number; delay: number }
}

function Grid({ cells, animationName }: { cells: CellData[][]; animationName: string }) {
  return (
    <div
      className="grid h-full w-full px-10 py-10"
      style={{
        gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
        gap: "8px 16px",
      }}
    >
      {cells.flat().map((c, i) => (
        <div
          key={i}
          className={`flex items-center text-[11px] leading-none whitespace-nowrap overflow-hidden ${
            animationName === "fc-layer-a" ? "fc-layer-a" : "fc-layer-b"
          } ${c.blank ? "" : cellClass(c.cell.kind)}`}
          style={{
            animation: c.blank
              ? "none"
              : `${animationName} ${c.timing.cycle}s ease-in-out ${c.timing.delay}s infinite`,
            willChange: "opacity, transform",
          }}
        >
          {c.blank ? "" : c.cell.text}
        </div>
      ))}
    </div>
  )
}
