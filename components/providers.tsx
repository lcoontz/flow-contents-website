"use client"

import { createContext, useCallback, useContext, useState, type ReactNode } from "react"
import { SampleReportModal } from "@/components/sample-report-modal"

interface SampleReportApi {
  open: () => void
  close: () => void
  isOpen: boolean
}

const SampleReportContext = createContext<SampleReportApi>({
  open: () => {},
  close: () => {},
  isOpen: false,
})

export function useSampleReport() {
  return useContext(SampleReportContext)
}

export function Providers({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <SampleReportContext.Provider value={{ open, close, isOpen }}>
      {children}
      <SampleReportModal open={isOpen} onClose={close} />
    </SampleReportContext.Provider>
  )
}
