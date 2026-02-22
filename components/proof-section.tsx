import { TrendingUp } from "lucide-react"

const caseStudies = [
  {
    location: "The Palisades",
    detail: "2,840 sq ft home",
    items: "4,287",
    initial: "$385,000",
    documented: "$687,500",
    increase: "+$302,500",
    percent: "79%",
  },
  {
    location: "The Palisades",
    detail: "2,160 sq ft home",
    items: "3,812",
    initial: "$320,000",
    documented: "$465,200",
    increase: "+$145,200",
    percent: "45%",
  },
  {
    location: "Malibu",
    detail: "3,380 sq ft home",
    items: "7,634",
    initial: "$580,000",
    documented: "$1,142,800",
    increase: "+$562,800",
    percent: "97%",
  },
]

export function ProofSection() {
  return (
    <section id="proof" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal font-medium uppercase tracking-wider text-sm">Documented Results</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
            Over $1M in Additional Value Recovered
          </h2>
          <p className="mt-4 text-navy/70">
            Our clients recover an average of 79% more than generic inventory lists. Here are three LA-area properties
            we've documented.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-navy/10 hover:shadow-md transition-shadow"
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

        {/* Combined totals bar */}
        <div className="bg-navy rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white">15,733</div>
            <div className="text-sm text-white/60 mt-1">Items Documented</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-teal">$1M+</div>
            <div className="text-sm text-white/60 mt-1">Additional Value Recovered</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white">79%</div>
            <div className="text-sm text-white/60 mt-1">Avg Value Increase</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white">7,634</div>
            <div className="text-sm text-white/60 mt-1">Max Items / Property</div>
          </div>
        </div>
      </div>
    </section>
  )
}
