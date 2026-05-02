import { HeroCopy, PlaygroundFrame, PlaygroundNav } from "../_shared"
import { cellClass, isBlank, pickCell } from "@/lib/matrix-content"

const COLS = 9
const ROWS = 22

export default function Concept5() {
  const cells = Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => ({
      blank: isBlank(c, r, 0.32),
      cell: pickCell(c, r),
    }))
  )

  return (
    <PlaygroundFrame title="Concept 5 — Static matrix grid (text)" notes="Spreadsheet content as background, low opacity, static">
      <PlaygroundNav />
      <section className="relative overflow-hidden bg-white">
        {/* the static matrix */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none"
          style={{
            opacity: 0.16,
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
                className={`flex items-center text-[11px] leading-none ${
                  c.blank ? "" : cellClass(c.cell.kind)
                } whitespace-nowrap overflow-hidden`}
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

        <div className="relative mx-auto max-w-[1320px] px-6 pb-32 pt-24 lg:pt-32">
          <HeroCopy />
        </div>
      </section>
    </PlaygroundFrame>
  )
}
