"use client"

import { useEffect, useState } from "react"

export function SampleReportButton() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-[48px] items-center gap-2 rounded-lg border-2 border-blue-600 bg-white px-6 text-[15px] font-semibold text-blue-700 shadow-sm transition-colors hover:bg-blue-50 hover:text-blue-800 sm:text-[16px]"
      >
        See an example report
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-stretch justify-center bg-slate-900/70 p-4 sm:p-8"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Sample report preview"
        >
          <div
            className="flex w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Sample preview</div>
                <div className="text-[14px] font-semibold text-slate-900">This is what your estimate will look like</div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <iframe
              src="/sample-report.html"
              title="Sample preview report"
              className="min-h-0 flex-1 bg-slate-100"
              sandbox="allow-same-origin"
            />

            <div className="flex flex-col items-center gap-3 border-t border-slate-200 bg-blue-50 px-5 py-4 sm:flex-row sm:justify-between">
              <p className="text-center text-[13px] text-slate-700 sm:text-left">
                Want one for your own claim? Close this and upload your photos above — free.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-[40px] items-center justify-center rounded-md bg-blue-600 px-5 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Get my free report
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
