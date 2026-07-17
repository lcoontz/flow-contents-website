"use client"

import { useEffect } from "react"
import "./home.css"
import { HOME_HTML } from "./home-markup"

/**
 * Flow Contents marketing homepage.
 * Markup + styles are the approved design from homepage-draft/, scoped under
 * `.fc-home` so nothing leaks into /preview or /whitepaper. The format carousel
 * and the sample-report email form are driven here; FAQ uses native <details>.
 */
export default function Home() {
  useEffect(() => {
    const form = document.getElementById("sampleForm") as HTMLFormElement | null
    const status = document.getElementById("sampleStatus")
    if (!form || !status) return

    const input = form.querySelector<HTMLInputElement>("input[type=email]")
    const button = form.querySelector<HTMLButtonElement>("button[type=submit]")

    const onSubmit = async (e: Event) => {
      e.preventDefault()
      const email = input?.value.trim() ?? ""
      if (!email) return
      if (button) {
        button.disabled = true
        button.textContent = "Sending..."
      }
      status.textContent = "Sending your copy..."
      try {
        const res = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: "sample-report" }),
        })
        const data = (await res.json().catch(() => ({}))) as { ok?: boolean }
        if (!res.ok || !data.ok) throw new Error("send_failed")
        status.textContent = "Sent. Check your inbox for the sample report."
        if (button) button.textContent = "Sent"
        if (input) input.value = ""
      } catch {
        status.textContent = "Something went wrong on our end. Please try again in a minute."
        if (button) {
          button.disabled = false
          button.textContent = "Email it to me"
        }
      }
    }

    form.addEventListener("submit", onSubmit)
    return () => form.removeEventListener("submit", onSubmit)
  }, [])

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
