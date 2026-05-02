import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ProcessSection } from "@/components/process-section"
import { SampleReportSection } from "@/components/sample-report-section"
import { OfferSection } from "@/components/offer-section"
import { ProofSection } from "@/components/proof-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <SampleReportSection />
      <OfferSection />
      <ProofSection />
      <GuaranteeSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  )
}
