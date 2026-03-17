"use client"

import { TrendingUp } from "lucide-react"
import { useReveal } from "./use-reveal"
import { useCountUp } from "./use-count-up"

const caseStudies = [
  {
    location: "The Palisades",
    detail: "2,840 sq ft home",
    items: "4,287",
    initial: "$385,000",
    initialNum: 385000,
    documented: "$687,500",
    documentedNum: 687500,
    increase: "+$302,500",
    percent: "79%",
    percentNum: 79,
  },
  {
    location: "The Palisades",
    detail: "2,160 sq ft home",
    items: "3,812",
    initial: "$320,000",
    initialNum: 320000,
    documented: "$465,200",
    documentedNum: 465200,
    increase: "+$145,200",
    percent: "45%",
    percentNum: 45,
  },
  {
    location: "Malibu",
    detail: "3,380 sq ft home",
    items: "7,634",
    initial: "$580,000",
    initialNum: 580000,
    documented: "$1,142,800",
    documentedNum: 1142800,
    increase: "+$562,800",
    percent: "97%",
    percentNum: 97,
  },
]

function RecoveryBar({ initialNum, documentedNum, percentNum }: { initialNum: number; documentedNum: number; percentNum: number }) {
  const barRef = useReveal()
  const initialWidth = Math.round((initialNum / documentedNum) * 100)

  return (
    <div ref={barRef} className="reveal mt-4 mb-2">
      <div className="w-full h-2 bg-navy/10 rounded-full overflow-hidden">
        <div className="h-full bg-navy/20 rounded-full relative" style={{ width: "100%" }}>
          <div
            className="h-full bg-teal rounded-full recovery-bar absolute left-0 top-0"
            style={{ width: `${initialWidth}%` }}
          />
        </div>
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="text-[10px] text-navy/40">Initial</span>
        <span className="text-[10px] text-teal font-medium">+{percentNum}% recovered</span>
      </div>
    </div>
  )
}

function StatCounter({ end, prefix, suffix, label, isTeal }: { end: number; prefix?: string; suffix?: string; label: string; isTeal?: boolean }) {
  const { ref, value } = useCountUp(end)

  return (
    <div ref={ref}>
      <div className={`text-2xl md:text-3xl font-bold ${isTeal ? "text-teal" : "text-white"}`}>
        {prefix}{value.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
    </div>
  )
}

export function ProofSection() {
  const headerRef = useReveal()
  const card1Ref = useReveal(100)
  const card2Ref = useReveal(250)
  const card3Ref = useReveal(400)
  const statsRef = useReveal(200)
  const cardRefs = [card1Ref, card2Ref, card3Ref]

  return (
    <section id="proof" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal font-medium uppercase tracking-wider text-sm">Documented Results</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
            Over $1M in Additional Value Recovered
          </h2>
          <p className="mt-4 text-navy/70">
            Our clients recover an average of 79% more than generic inventory lists. Here are three LA-area properties
            we&apos;ve documented.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              ref={cardRefs[index]}
              className="reveal bg-white rounded-2xl p-8 shadow-sm border border-navy/10 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">{study.location}</h3>
                  <p className="text-sm text-navy/50">{study.detail}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-navy/60">Items documented</span>
                  <span className="text-lg font-bold text-navy">{study.items}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-navy/60">Initial estimate</span>
                  <span className="text-navy/70">{study.initial}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-navy/60">Documented value</span>
                  <span className="font-semibold text-navy">{study.documented}</span>
                </div>

                <RecoveryBar initialNum={study.initialNum} documentedNum={study.documentedNum} percentNum={study.percentNum} />

                <div className="pt-4 border-t border-navy/10 flex justify-between items-baseline">
                  <span className="text-sm font-medium text-teal">Value recovered</span>
                  <div className="text-right">
                    <span className="text-xl font-bold text-teal">{study.increase}</span>
                    <span className="ml-2 text-sm font-semibold text-teal/70">({study.percent})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combined totals bar with animated counters */}
        <div ref={statsRef} className="reveal-scale bg-navy rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <StatCounter end={15733} label="Items Documented" />
          <StatCounter end={1} prefix="$" suffix="M+" label="Additional Value Recovered" isTeal />
          <StatCounter end={79} suffix="%" label="Avg Value Increase" />
          <StatCounter end={7634} label="Max Items / Property" />
        </div>
      </div>
    </section>
  )
}
