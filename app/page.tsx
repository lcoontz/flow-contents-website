import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ProcessSection } from "@/components/process-section"
import { ProofSection } from "@/components/proof-section"
import { OutputSection } from "@/components/output-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PartnersSection } from "@/components/partners-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <ProcessSection />
      <ProofSection />
      <OutputSection />
      <TestimonialsSection />
      <PartnersSection />
      <FooterSection />
    </main>
  )
}
