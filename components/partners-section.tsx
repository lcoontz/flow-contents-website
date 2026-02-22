import { Scale, Briefcase, Wrench, ArrowRight } from "lucide-react"

const partnerTypes = [
  {
    icon: Briefcase,
    title: "Public Adjusters",
    description:
      "We handle the contents inventory so you can focus on the structure and negotiation. Our reports are formatted for direct import into your workflow — audit-proof and submission-ready.",
  },
  {
    icon: Scale,
    title: "Insurance Attorneys",
    description:
      "Evidence-grade documentation that holds up under scrutiny. Every item individually photographed, described with specific attributes, and linked to a verifiable purchase source.",
  },
  {
    icon: Wrench,
    title: "Remediation Contractors",
    description:
      "Your clients need contents help alongside reconstruction. We take the inventory burden off their plate so they can focus on rebuilding — and you can focus on the build.",
  },
]

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal font-medium uppercase tracking-wider text-sm">For Partners</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
            We Partner With the Professionals Your Clients Trust
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
              className="bg-white rounded-2xl p-8 shadow-sm border border-navy/10 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mb-6">
                <partner.icon className="w-7 h-7 text-navy" />
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
