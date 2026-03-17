"use client"

import { Camera, Cpu, FileCheck, ArrowRight } from "lucide-react"
import { useReveal } from "./use-reveal"

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Forensic Photography",
    description:
      "Every item in your home is individually photographed at macro detail. We capture brand labels, materials, construction, serial numbers, and distinguishing features — the data that proves value.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Feature Extraction",
    description:
      "Our AI analyzes each photo and extracts specific attributes: material, brand, design, dimensions, and condition. These features trigger premium-grade matches in valuation software.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Verified Inventory Report",
    description:
      "Every item is matched to a specific replacement product with a verified purchase link. The report is formatted for direct import into adjuster workflows — audit-proof and submission-ready.",
  },
]

export function ProcessSection() {
  const headerRef = useReveal()
  const step1Ref = useReveal(100)
  const step2Ref = useReveal(250)
  const step3Ref = useReveal(400)
  const stepRefs = [step1Ref, step2Ref, step3Ref]

  return (
    <section id="process" className="py-24 bg-navy">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal font-medium uppercase tracking-wider text-sm">How It Works</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight text-balance">
            From Photos to Audit-Proof Report
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              ref={stepRefs[index]}
              className={`reveal bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal/50 transition-colors relative ${index < steps.length - 1 ? "step-connector" : ""}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-teal/20 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-teal" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal font-mono font-bold text-2xl">{item.step}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">{item.description}</p>

              {/* Arrow connector on mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-6">
                  <ArrowRight className="w-5 h-5 text-teal/40 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
