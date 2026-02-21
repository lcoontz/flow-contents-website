import { Camera, Tag, Diamond } from "lucide-react"

const pillars = [
  {
    icon: Camera,
    title: "Forensic Photography",
    description:
      'A standard wide shot isn\'t enough. We capture the digital information needed to prove value: serial number stickers, wood grain, and joinery. This visual evidence makes your claim "audit-proof."',
  },
  {
    icon: Tag,
    title: 'The "Toaster Principle"',
    description:
      'We never list generic nouns. We list attributes. By specifying "Digital Display" or "Stainless Steel," we force the valuation software to exclude budget models and select a "Like Kind and Quality" replacement.',
  },
  {
    icon: Diamond,
    title: "Premium Triggers",
    description:
      'We use algorithmic trigger words like "Solid Wood," "Carbon Fiber," and "Dovetail Joints." These keywords move your items from "Standard Grade" to "Premium Grade" in the adjuster\'s database.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-navy">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal font-medium uppercase tracking-wider text-sm">Our Process</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight text-balance">
            The Three Pillars of Maximum Recovery
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-teal/20 flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{pillar.title}</h3>
              <p className="text-white/70 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
