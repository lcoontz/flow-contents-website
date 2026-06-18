"use client"

import { useEffect } from "react"
import "./home.css"
import { HOME_HTML } from "./home-markup"

/**
 * Flow Contents marketing homepage.
 * Markup + styles are the approved design from homepage-draft/, scoped under
 * `.fc-home` so nothing leaks into /preview or /whitepaper. The format carousel
 * is driven here (the only interactive piece); FAQ uses native <details>.
 */
export default function Home() {
  useEffect(() => {
    const track = document.getElementById("fmtTrack")
    const dots = Array.from(
      document.querySelectorAll<HTMLElement>("#fmtDots .d")
    )
    if (!track || dots.length === 0) return

    const n = dots.length
    let i = 0
    let timer: ReturnType<typeof setInterval> | undefined

    const go = (p: number) => {
      i = (p + n) % n
      track.style.transform = `translateX(${-i * 100}%)`
      dots.forEach((d, k) => d.classList.toggle("on", k === i))
    }
    const start = () => {
      timer = setInterval(() => go(i + 1), 4500)
    }
    const reset = () => {
      if (timer) clearInterval(timer)
      start()
    }

    const handlers = dots.map((d, k) => {
      const h = () => {
        go(k)
        reset()
      }
      d.addEventListener("click", h)
      return h
    })

    go(0)
    start()

    return () => {
      if (timer) clearInterval(timer)
      dots.forEach((d, k) => d.removeEventListener("click", handlers[k]))
    }
  }, [])

  return (
    <main className="fc-home" dangerouslySetInnerHTML={{ __html: HOME_HTML }} />
  )
}
