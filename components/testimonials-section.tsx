import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "We searched everywhere and other vendors just don't compare. Flow walked us through the process from beginning to end and delivered results far beyond what we expected. We felt completely taken care of.",
    name: "Homeowner",
    detail: "The Palisades, CA",
    type: "Client",
  },
  {
    quote:
      "Flow Contents saved the day when they were able to prove double the expected inventory valuation on our client's property. This helped confirm the payout the insurance company had committed to was deserved and reasonable.",
    name: "Partner",
    detail: "Public Adjuster, Los Angeles",
    type: "Partner",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal font-medium uppercase tracking-wider text-sm">What They Say</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight text-balance">
            Trusted by Homeowners and Partners
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <Quote className="w-8 h-8 text-teal/40 mb-4" />
              <blockquote className="text-white/80 leading-relaxed mb-6">{testimonial.quote}</blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center">
                  <span className="text-teal font-semibold text-sm">{testimonial.type[0]}</span>
                </div>
                <div>
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-white/50 text-sm">{testimonial.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
