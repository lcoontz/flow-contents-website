"use client"

import { useEffect, useState } from "react"
import { HeroCopy, PlaygroundFrame, PlaygroundNav } from "../_shared"
import { cellClass, isBlank, pickAlt, pickCell, type Cell } from "@/lib/matrix-content"

const COLS = 9
const ROWS = 22

interface CellState {
  blank: boolean
  cell: Cell
  cycling: boolean
}

function buildInitial(): CellState[][] {
  return Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => ({
      blank: isBlank(c, r, 0.30, 13),
      cell: pickCell(c, r, 13),
      // ~22% of non-blank cells cycle their content
      cycling: !isBlank(c, r, 0.30, 13) && (Math.sin(c * 5.3 + r * 11.7) + 1) / 2 < 0.22,
    }))
  )
}

export default function Concept8() {
  const [grid, setGrid] = useState<CellState[][]>(buildInitial)
  const [step, setStep] = useState(0)

  // Every 1.6s, swap content for ~5 random cycling cells. Smooth transitions
  // are handled by CSS opacity on the inner span.
  useEffect(() => {
    const id = window.setInterval(() => {
      setStep((s) => s + 1)
      setGrid((prev) => {
        const next = prev.map((row) => row.slice())
        // pick a few cycling cells to update
        const toUpdate = 5
        for (let i = 0; i < toUpdate; i++) {
          const r = Math.floor(Math.random() * ROWS)
          const c = Math.floor(Math.random() * COLS)
          const cell = next[r][c]
          if (!cell.cycling) continue
          next[r] = next[r].slice()
          next[r][c] = { ...cell, cell: pickAlt(c, r, step + i, cell.cell.kind) }
        }
        return next
      })
    }, 1600)
    return () => window.clearInterval(id)
  }, [step])

  return (
    <PlaygroundFrame title="Concept 8 — Character cycling" notes="Mostly stable grid; ~22% of cells quietly swap content every 1.6s">
      <PlaygroundNav />
      <section className="relative overflow-hidden bg-white">
        <style>{`
          .fc-cycle-text {
            transition: opacity 800ms ease-in-out;
          }
          @media (prefers-reduced-motion: reduce) {
            .fc-cycle-text { transition: none; }
          }
        `}</style>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none"
          style={{
            opacity: 0.22,
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 0%, transparent 82%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 0%, transparent 82%)",
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
            {grid.flat().map((c, i) => (
              <div
                key={i}
                className={`flex items-center text-[11px] leading-none whitespace-nowrap overflow-hidden ${
                  c.blank ? "" : cellClass(c.cell.kind)
                }`}
              >
                {!c.blank && (
                  <span key={c.cell.text} className="fc-cycle-text">
                    {c.cell.text}
                  </span>
                )}
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
