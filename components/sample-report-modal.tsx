"use client"

import { useEffect, useMemo, useState } from "react"
import { sampleRows, type SampleRow } from "@/lib/sample-report-data"

const PDF_URL = "/sample/sample-property-inventory-report.pdf"

interface Props {
  open: boolean
  onClose: () => void
}

type View = "spreadsheet" | "pdf"

export function SampleReportModal({ open, onClose }: Props) {
  const [view, setView] = useState<View>("spreadsheet")
  const [activeRoom, setActiveRoom] = useState<string>("All rooms")

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  const rooms = useMemo(() => {
    const set = new Set(sampleRows.map((r) => r.room))
    return ["All rooms", ...Array.from(set)]
  }, [])

  const filtered = useMemo(
    () => (activeRoom === "All rooms" ? sampleRows : sampleRows.filter((r) => r.room === activeRoom)),
    [activeRoom]
  )

  const totals = useMemo(() => {
    const acv = filtered.reduce((s, r) => s + r.acv, 0)
    const rcv = filtered.reduce((s, r) => s + r.rcv, 0)
    return { acv, rcv, count: filtered.length }
  }, [filtered])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sample-report-title"
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      {/* backdrop */}
      <button
        type="button"
        aria-label="Close report viewer"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
      />

      {/* dialog */}
      <div className="relative flex h-[94vh] w-[96vw] max-w-[1280px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
        {/* header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-blue-600 text-[11px] font-bold tracking-tight text-white">
              FC
            </div>
            <div className="min-w-0">
              <h2
                id="sample-report-title"
                className="truncate text-[15px] font-semibold tracking-tight text-slate-900"
              >
                Sample Property Report
              </h2>
              <p className="truncate text-[12px] text-slate-500">
                Anonymized · representative excerpt of 5,000+ items across 9 rooms
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* tabs + filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-2.5">
          <div className="inline-flex rounded-md border border-slate-200 bg-white p-0.5">
            <Tab active={view === "spreadsheet"} onClick={() => setView("spreadsheet")}>
              Spreadsheet
            </Tab>
            <Tab active={view === "pdf"} onClick={() => setView("pdf")}>
              PDF Document
            </Tab>
          </div>

          {view === "spreadsheet" && (
            <div className="flex items-center gap-2">
              <label htmlFor="room-filter" className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Room
              </label>
              <select
                id="room-filter"
                value={activeRoom}
                onChange={(e) => setActiveRoom(e.target.value)}
                className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] font-medium text-slate-700 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              >
                {rooms.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* body */}
        <div className="min-h-0 flex-1 overflow-hidden bg-slate-50">
          {view === "spreadsheet" ? (
            <SpreadsheetView rows={filtered} />
          ) : (
            <iframe
              src={`${PDF_URL}#view=FitH&toolbar=0`}
              title="Sample report PDF"
              className="h-full w-full bg-white"
            />
          )}
        </div>

        {/* footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-white px-5 py-3 text-[12px]">
          <div className="text-slate-500">
            {view === "spreadsheet" ? (
              <>
                Showing <span className="font-semibold text-slate-700">{totals.count}</span> sample items{" "}
                {activeRoom !== "All rooms" && (
                  <>
                    in <span className="font-semibold text-slate-700">{activeRoom}</span>
                  </>
                )}
                {" · "}
                <span className="font-mono tabular-nums">
                  ACV {money(totals.acv)} · RCV{" "}
                  <span className="font-semibold text-blue-700">{money(totals.rcv)}</span>
                </span>
              </>
            ) : (
              "PDF preview · the real file is generated per claim"
            )}
          </div>
          <a
            href="#cta"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Book a 15-min call
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

function SpreadsheetView({ rows }: { rows: SampleRow[] }) {
  return (
    <div
      className="h-full overflow-auto select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      <table className="w-full border-separate border-spacing-0 text-[12px]">
        <thead>
          <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            <Th sticky>#</Th>
            <Th sticky>Item</Th>
            <Th sticky>Description</Th>
            <Th sticky>Features</Th>
            <Th sticky>Category</Th>
            <Th sticky>Xact Code</Th>
            <Th sticky>Age</Th>
            <Th sticky>Cond.</Th>
            <Th sticky align="right">ACV</Th>
            <Th sticky align="right">RCV</Th>
            <Th sticky>Link</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const isRoomChange = i === 0 || rows[i - 1]?.room !== r.room
            return (
              <>
                {isRoomChange && (
                  <tr key={`${r.room}-divider`}>
                    <td colSpan={11} className="bg-blue-50/50 px-4 py-1.5">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-blue-700">
                        {r.room}
                      </span>
                    </td>
                  </tr>
                )}
                <tr key={`${r.room}-${i}`} className="bg-white hover:bg-slate-50">
                  <Td muted mono>{String(i + 1).padStart(3, "0")}</Td>
                  <Td>
                    <span className="font-semibold text-slate-900">{r.name}</span>
                  </Td>
                  <Td>
                    <span className="text-slate-600">{r.description}</span>
                  </Td>
                  <Td>
                    <span className="text-slate-500">{r.features}</span>
                  </Td>
                  <Td muted>{r.category}</Td>
                  <Td>
                    <span className="font-mono text-[11px] font-semibold text-blue-700">
                      {r.xactCode}
                    </span>
                  </Td>
                  <Td muted>{r.age}</Td>
                  <Td>
                    <ConditionBadge condition={r.condition} />
                  </Td>
                  <Td align="right" mono>
                    {money(r.acv)}
                  </Td>
                  <Td align="right" mono accent>
                    {money(r.rcv)}
                  </Td>
                  <Td>
                    <a
                      href={r.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-700 underline-offset-2 hover:underline"
                    >
                      {r.link.vendor}
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </a>
                  </Td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function Tab({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded px-3 py-1.5 text-[12px] font-semibold transition-colors ${
        active
          ? "bg-slate-900 text-white"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      {children}
    </button>
  )
}

function Th({
  children,
  align = "left",
  sticky = false,
}: {
  children: React.ReactNode
  align?: "left" | "right"
  sticky?: boolean
}) {
  return (
    <th
      className={`whitespace-nowrap border-b border-slate-200 bg-slate-100 px-3 py-2 ${
        align === "right" ? "text-right" : "text-left"
      } ${sticky ? "sticky top-0 z-10" : ""}`}
    >
      {children}
    </th>
  )
}

function Td({
  children,
  align = "left",
  muted = false,
  mono = false,
  accent = false,
}: {
  children: React.ReactNode
  align?: "left" | "right"
  muted?: boolean
  mono?: boolean
  accent?: boolean
}) {
  return (
    <td
      className={`border-b border-slate-100 px-3 py-2.5 align-top ${
        align === "right" ? "text-right" : "text-left"
      } ${mono ? "font-mono tabular-nums" : ""} ${
        accent ? "font-semibold text-blue-700" : muted ? "text-slate-500" : "text-slate-700"
      }`}
    >
      {children}
    </td>
  )
}

function ConditionBadge({ condition }: { condition: string }) {
  const styles: Record<string, string> = {
    Excellent: "bg-green-100 text-green-700",
    Good: "bg-slate-100 text-slate-700",
    Fair: "bg-yellow-100 text-yellow-700",
    Poor: "bg-orange-100 text-orange-700",
  }
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${styles[condition] ?? "bg-slate-100 text-slate-700"}`}>
      {condition}
    </span>
  )
}

function money(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" })
}
