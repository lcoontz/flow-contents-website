// Production hero background — promoted from /playground/concept-10.
// Single layer using both effects: gentle (random per-cell timing) + horizontal
// (left-to-right translateX drift). CSS-only animations, deterministic layout
// for SSR/CSR parity.

import { cellClass, isBlank, pickCell } from "@/lib/matrix-content"

const COLS = 7
const ROWS = 26

function combinedTiming(c: number, r: number) {
  const seed = Math.sin(c * 17.31 + r * 9.71) * 43758.5453
  const frac = seed - Math.floor(seed)
  const cycle = 10 + frac * 8 // 10–18s per cell
  const colStagger = (c / COLS) * 5
  const jitter = ((seed * 1.7) % 1) * 6
  return { cycle, delay: -(colStagger + jitter) }
}

export function HeroMatrixBg() {
  const cells = Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => ({
      blank: isBlank(c, r, 0.16, 19),
      cell: pickCell(c, r, 19),
      timing: combinedTiming(c, r),
    }))
  )

  return (
    <>
      <style>{`
        @keyframes fc-hero-bg {
          0%   { opacity: 0;   transform: translateX(-7px); }
          18%  { opacity: 1;   transform: translateX(-2px); }
          55%  { opacity: 1;   transform: translateX(2px); }
          85%  { opacity: 0;   transform: translateX(7px); }
          100% { opacity: 0;   transform: translateX(7px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fc-hero-bg-cell { animation: none !important; opacity: 0.5 !important; transform: none !important; }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          opacity: 0.26,
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 45%, black 0%, transparent 84%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 45%, black 0%, transparent 84%)",
        }}
      >
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
              className={`fc-hero-bg-cell flex items-center text-[11px] leading-none whitespace-nowrap overflow-hidden ${
                c.blank ? "" : cellClass(c.cell.kind)
              }`}
              style={{
                animation: c.blank
                  ? "none"
                  : `fc-hero-bg ${c.timing.cycle}s ease-in-out ${c.timing.delay}s infinite`,
                willChange: "opacity, transform",
              }}
            >
              {c.blank ? "" : c.cell.text}
            </div>
          ))}
        </div>
      </div>

      {/* center wash so hero copy stays readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(255,255,255,0.85) 0%, transparent 70%)",
        }}
      />
    </>
  )
}
