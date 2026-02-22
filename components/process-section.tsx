import { Camera, Cpu, FileCheck } from "lucide-react"

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
  return (
    <section id="process" className="py-24 bg-navy">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal font-medium uppercase tracking-wider text-sm">How It Works</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight text-balance">
            From Photos to Audit-Proof Report
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-teal/20 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-teal" />
                </div>
                <span className="text-teal/60 text-sm font-mono font-semibold">Step {item.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
