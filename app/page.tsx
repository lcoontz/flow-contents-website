import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ProcessSection } from "@/components/process-section"
import { ProofSection } from "@/components/proof-section"
import { OutputSection } from "@/components/output-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <ProcessSection />
      <ProofSection />
      <OutputSection />
      <FooterSection />
    </main>
  )
}
