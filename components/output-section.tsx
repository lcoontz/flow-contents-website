import Image from "next/image"
import { FileText, Tags, ShoppingCart, Link as LinkIcon } from "lucide-react"

const columns = [
  {
    icon: FileText,
    title: "Item Description",
    description: "AI-generated from forensic photos. Specific enough to force premium-grade replacements.",
  },
  {
    icon: Tags,
    title: "Feature Attributes",
    description: "Material, construction, brand, design details. These trigger higher valuations in adjuster software.",
  },
  {
    icon: ShoppingCart,
    title: "Replacement Product",
    description: "An exact Like Kind and Quality match — a specific, purchasable item, not a generic category.",
  },
  {
    icon: LinkIcon,
    title: "Purchase Link",
    description: "Verified live URL. Adjusters click and confirm — no back-and-forth, no disputes.",
  },
]

const comparisons = [
  {
    generic: '"Area rug"',
    enhanced: "Persian-style patterned area rug, oriental-style pattern, covers a substantial floor area",
    genericPrice: "$89",
    enhancedPrice: "$2,012",
  },
  {
    generic: '"Desk"',
    enhanced: "Wooden roll-top secretary desk, three upper drawers, cubby compartments, turned legs",
    genericPrice: "$120",
    enhancedPrice: "$1,880",
  },
]

export function OutputSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal font-medium uppercase tracking-wider text-sm">What You Get</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
            A Report Built for Approval, Not Argument
          </h2>
          <p className="mt-4 text-navy/70">
            Every item in your home documented with the specificity that forces fair valuations. Here's what's in every
            row of your report.
          </p>
        </div>

        {/* Screenshot */}
        <div className="mb-12">
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
                width={1200}
                height={400}
                className="rounded"
              />
            </div>
          </div>
          <p className="text-center text-sm text-navy/50 mt-3">
            Each row: AI-generated description, features, replacement match, pricing, and verified purchase link
          </p>
        </div>

        {/* Column callouts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {columns.map((col, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border-t-2 border-navy shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-4">
                <col.icon className="w-5 h-5 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">{col.title}</h3>
              <p className="text-sm text-navy/60 leading-relaxed">{col.description}</p>
            </div>
          ))}
        </div>

        {/* Generic vs Flow comparison */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-navy mb-6 text-center">Why Detail Drives Value</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-navy/10 overflow-hidden">
            <div className="grid grid-cols-[1fr_1fr_auto_auto] text-xs sm:text-sm font-semibold border-b border-navy/10">
              <div className="px-4 py-3 bg-red-50 text-red-800">Generic Description</div>
              <div className="px-4 py-3 bg-green-50 text-green-800">Flow Contents Description</div>
              <div className="px-4 py-3 bg-red-50 text-red-800 text-right">Generic</div>
              <div className="px-4 py-3 bg-green-50 text-green-800 text-right">Actual</div>
            </div>
            {comparisons.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-[1fr_1fr_auto_auto] text-sm ${index < comparisons.length - 1 ? "border-b border-navy/5" : ""}`}
              >
                <div className="px-4 py-3 text-red-700 bg-red-50/30">{row.generic}</div>
                <div className="px-4 py-3 text-green-800 bg-green-50/30">{row.enhanced}</div>
                <div className="px-4 py-3 text-red-600 font-semibold text-right bg-red-50/30 min-w-[80px]">
                  {row.genericPrice}
                </div>
                <div className="px-4 py-3 text-green-700 font-semibold text-right bg-green-50/30 min-w-[80px]">
                  {row.enhancedPrice}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-navy/50 mt-3">
            Real examples from a documented Palisades property. Specific features force valuation software to match
            premium replacements.
          </p>
        </div>
      </div>
    </section>
  )
}
