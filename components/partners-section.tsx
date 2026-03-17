"use client"

import { Scale, Briefcase, Wrench, ArrowRight } from "lucide-react"
import { useReveal } from "./use-reveal"

const partnerTypes = [
  {
    icon: Briefcase,
    title: "Public Adjusters",
    description:
      "We handle the contents inventory so you can focus on the structure and negotiation. Our reports are formatted for direct import into your workflow — audit-proof and submission-ready.",
    accentColor: "bg-teal/10",
    iconColor: "text-teal",
    iconBg: "bg-teal/20",
    borderAccent: "border-t-teal",
  },
  {
    icon: Scale,
    title: "Insurance Attorneys",
    description:
      "Evidence-grade documentation that holds up under scrutiny. Every item individually photographed, described with specific attributes, and linked to a verifiable purchase source.",
    accentColor: "bg-navy/5",
    iconColor: "text-navy",
    iconBg: "bg-navy/10",
    borderAccent: "border-t-navy",
  },
  {
    icon: Wrench,
    title: "Remediation Contractors",
    description:
      "Your clients need contents help alongside reconstruction. We take the inventory burden off their plate so they can focus on rebuilding — and you can focus on the build.",
    accentColor: "bg-slate-100",
    iconColor: "text-navy/70",
    iconBg: "bg-navy/5",
    borderAccent: "border-t-navy/40",
  },
]

export function PartnersSection() {
  const headerRef = useReveal()
  const card1Ref = useReveal(100)
  const card2Ref = useReveal(250)
  const card3Ref = useReveal(400)
  const cardRefs = [card1Ref, card2Ref, card3Ref]

  return (
    <section id="partners" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal font-medium uppercase tracking-wider text-sm">For Partners</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
            We Partner With Lawyers, Public Adjusters, and Contractors
          </h2>
          <p className="mt-4 text-navy/70">
            Contents inventory is the most time-consuming part of a property claim. We take it off your plate with
            reports that make your job easier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partnerTypes.map((partner, index) => (
            <div
              key={index}
              ref={cardRefs[index]}
              className={`reveal bg-white rounded-2xl p-8 shadow-sm border border-navy/10 border-t-2 ${partner.borderAccent} hover:shadow-md transition-shadow`}
            >
              <div className={`w-14 h-14 rounded-xl ${partner.iconBg} flex items-center justify-center mb-6`}>
                <partner.icon className={`w-7 h-7 ${partner.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">{partner.title}</h3>
              <p className="text-navy/70 leading-relaxed mb-6">{partner.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-teal font-medium text-sm hover:gap-3 transition-all"
              >
                Work With Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
