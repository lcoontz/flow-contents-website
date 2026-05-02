// Production hero background — promoted from /playground/concept-10.
// Two parallel CSS animations per cell:
//   1. fc-hero-fade: opacity + horizontal drift (gentle bell, no pop-offs)
//   2. fc-hero-type: clip-path reveal (typewriter — chars wipe in left-to-right,
//      out right-to-left, in sync with the fade)
// Both share the same per-cell duration + delay so type-in completes as the
// cell finishes fading in, and type-out completes as it finishes fading out.

import { cellClass, isBlank, pickCell } from "@/lib/matrix-content"

const COLS = 7
const ROWS = 26

function combinedTiming(c: number, r: number) {
  const seed = Math.sin(c * 17.31 + r * 9.71) * 43758.5453
  const frac = seed - Math.floor(seed)
  // Slightly longer cycles than C10 so transitions read as gentler.
  const cycle = 13 + frac * 9 // 13–22s per cell
  const colStagger = (c / COLS) * 6
  const jitter = ((seed * 1.7) % 1) * 7
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
        /* Symmetric bell — opacity ramps in, holds, ramps out. No abrupt
           transitions; the start-of-cycle opacity 0 connects seamlessly to
           the end-of-cycle opacity 0 of the previous loop. */
        @keyframes fc-hero-fade {
          0%   { opacity: 0; transform: translateX(-6px); }
          32%  { opacity: 1; transform: translateX(0); }
          68%  { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(6px); }
        }
        /* Typewriter wipe via clip-path. inset(0 100% 0 0) clips everything
           from the right edge → invisible. Receding the right inset reveals
           text left-to-right (typing in). Re-extending it hides the text
           right-to-left (backspacing). Same shape as the fade so they stay
           perfectly synced. */
        @keyframes fc-hero-type {
          0%   { clip-path: inset(0 100% 0 0); }
          32%  { clip-path: inset(0 0% 0 0); }
          68%  { clip-path: inset(0 0% 0 0); }
          100% { clip-path: inset(0 100% 0 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fc-hero-bg-cell {
            animation: none !important;
            opacity: 0.5 !important;
            transform: none !important;
            clip-path: none !important;
          }
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
                  : `fc-hero-fade ${c.timing.cycle}s ease-in-out ${c.timing.delay}s infinite, fc-hero-type ${c.timing.cycle}s ease-in-out ${c.timing.delay}s infinite`,
                willChange: "opacity, transform, clip-path",
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
