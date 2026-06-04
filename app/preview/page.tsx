import type { Metadata } from "next"
import { PreviewIntakeForm } from "@/components/preview-intake-form"
import { SampleReportButton } from "@/components/sample-report-button"
import { FooterSection } from "@/components/footer-section"

export const metadata: Metadata = {
  title: "Free quote and sample report — Flow Contents",
  description:
    "Upload your photos to get a priced estimate. We'll price and estimate your list in 24 hours. Free, no account.",
}

export default function PreviewPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="fc-eyebrow">Free Preview · No Account</div>
            <h1 className="fc-section-title mt-4">
              Free Quote — And Sample Report
            </h1>
            <p className="fc-lead mx-auto mt-5 max-w-xl">
              Upload your photos to get a priced estimate. We&apos;ll price and estimate your list in 24 hours.
            </p>
            <div className="mt-10 flex justify-center">
              <SampleReportButton />
            </div>
          </div>

          <PreviewIntakeForm />

          <p className="mx-auto mt-6 max-w-xl text-center text-[12px] leading-relaxed text-slate-500">
            Your photos are used only to prepare your estimate. The preview shows total value, item
            count, and category breakdown; exact per-item pricing and the full audited report are
            available when you book.
          </p>
        </div>
      </section>
      <FooterSection />
    </main>
  )
}
