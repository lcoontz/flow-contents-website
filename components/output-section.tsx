import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const features = [
  'Forensic Detail: "Photo-printed design, curved D-handle"',
  'Specifics: "Concise History of Ancient India Vol 1" vs just "Book"',
  "Hyperlinks: Direct links to replacement items for immediate verification",
]

export function OutputSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-teal font-medium uppercase tracking-wider text-sm">The Output</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
              Give Them What They Need to Say "Yes"
            </h2>
            <p className="mt-6 text-navy/70 leading-relaxed">
              Adjusters need to "audit-proof" their work. A professional, formatted report that mirrors their in-house
              vendor reports signals credibility.
            </p>
            <p className="mt-4 text-navy/70 leading-relaxed">We provide a data-rich spreadsheet including:</p>
            <ul className="mt-6 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                  <span className="text-navy/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual - Spreadsheet Screenshots */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-navy/10 overflow-hidden">
              <div className="bg-navy/5 px-4 py-2 border-b border-navy/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="p-2">
                <Image
                  src="/images/closeup-201.png"
                  alt="Detailed inventory spreadsheet showing item features, object types, replacement products, prices, and purchase links"
                  width={800}
                  height={400}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
