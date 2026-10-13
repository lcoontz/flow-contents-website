"use client"

import { useState } from "react"
import { trackLead } from "@/components/tracking"

/** Memory Jogger waitlist sign-up. Posts to /api/lead with source "jogger-waitlist". */
export function WaitlistForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const email = String(fd.get("email") ?? "").trim()
    if (!email) return
    setState("sending")
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: String(fd.get("name") ?? "").trim(),
          referral: String(fd.get("referral") ?? "").trim(),
          source: "jogger-waitlist",
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean }
      if (!res.ok || !data.ok) throw new Error("send_failed")
      trackLead(email, "jogger-waitlist")
      form.reset()
      setState("done")
    } catch {
      setState("error")
    }
  }

  return (
    <form className="email-form wl-form" onSubmit={onSubmit}>
      <div className="efield">
        <input type="text" name="name" placeholder="Your name" aria-label="Your name" maxLength={120} />
      </div>
      <div className="efield">
        <input type="email" name="email" placeholder="you@email.com" aria-label="Email" required />
        <button className="btn btn-white" type="submit" disabled={state === "sending" || state === "done"}>
          {state === "sending" ? "Joining..." : state === "done" ? "You're on the list" : "Join the waitlist"}
        </button>
      </div>
      <div className="efield">
        <input
          type="text"
          name="referral"
          placeholder="Who told you about us? (optional)"
          aria-label="Who told you about us?"
          maxLength={200}
        />
      </div>
      <p className="fineprint" role="status">
        {state === "done"
          ? "Thanks. Check your inbox, and we'll email you when the Memory Jogger opens."
          : state === "error"
            ? "Something went wrong on our end. Please try again in a minute."
            : "We'll only email you about the Memory Jogger and your contents list."}
      </p>
    </form>
  )
}
