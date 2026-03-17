"use client"

import { ArrowRight } from "lucide-react"
import { useReveal } from "./use-reveal"

export function PhilosophySection() {
  const leftRef = useReveal()
  const rightRef = useReveal(200)

  return (
    <section id="philosophy" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div ref={leftRef} className="reveal-left">
            <span className="text-teal font-medium uppercase tracking-wider text-sm">Our Philosophy</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
              It&apos;s Not a Fight.
              <br />
              It&apos;s an Information Game.
            </h2>
            <div className="mt-8 space-y-6 text-navy/70 leading-relaxed">
              <p>
                The settlement of a personal property claim is often perceived as a battle. But the primary obstacle to
                a fair settlement isn&apos;t malice&mdash;it&apos;s a missing report.
              </p>
              <p>
                Insurance adjusters manage 50 to 100 claims at once. They rely on software that defaults to the lowest
                price unless specific data overrides it.
              </p>
            </div>
          </div>

          {/* Right Visual - Garbage In/Out Principle */}
          <div ref={rightRef} className="reveal-right bg-white rounded-2xl p-8 shadow-sm border border-navy/10">
            <h3 className="text-lg font-semibold text-navy mb-6">The &ldquo;Garbage In, Garbage Out&rdquo; Principle</h3>

            <div className="space-y-4">
              {/* Generic Input */}
              <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold">?</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-navy/60">Generic Input</p>
                  <p className="font-medium text-navy">&ldquo;Sofa&rdquo;</p>
                </div>
                <ArrowRight className="w-5 h-5 text-navy/30" />
                <div className="text-right">
                  <p className="text-sm text-navy/60">Payout</p>
                  <p className="font-bold text-red-600">$500</p>
                </div>
              </div>

              {/* Specific Input */}
              <div className="flex items-center gap-4 p-4 bg-teal/10 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-teal/20 flex items-center justify-center">
                  <span className="text-teal font-bold">&#10003;</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-navy/60">Specific Features</p>
                  <p className="font-medium text-navy">&ldquo;Top-grain Aniline Leather Sofa&rdquo;</p>
                </div>
                <ArrowRight className="w-5 h-5 text-navy/30" />
                <div className="text-right">
                  <p className="text-sm text-navy/60">Payout</p>
                  <p className="font-bold text-teal">$3,000</p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-navy/60">The same item. Different documentation. 6x the payout.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
