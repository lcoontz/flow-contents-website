import Link from "next/link"
import { Wordmark } from "@/components/logo"

export function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-[1180px] px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Wordmark size={28} href="/" />
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-slate-500">
              AI-powered forensic contents documentation for public adjusters.
              72-hour delivery, guaranteed.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-2 text-[13px]">
            <Link href="#solution" className="text-slate-600 transition-colors hover:text-slate-900">
              How It Works
            </Link>
            <Link href="#sample" className="text-slate-600 transition-colors hover:text-slate-900">
              Sample Report
            </Link>
            <Link href="#offer" className="text-slate-600 transition-colors hover:text-slate-900">
              Pricing
            </Link>
            <Link href="#faq" className="text-slate-600 transition-colors hover:text-slate-900">
              FAQ
            </Link>
            <Link href="/whitepaper" className="text-slate-600 transition-colors hover:text-slate-900">
              Whitepaper
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <span className="text-[12px] text-slate-500">© 2026 Flow Contents. All rights reserved.</span>
          <div className="flex gap-5 text-[12px] text-slate-500">
            <a href="mailto:leland@flowcontents.com" className="transition-colors hover:text-slate-900">
              leland@flowcontents.com
            </a>
            <span>·</span>
            <a href="tel:+17146752710" className="transition-colors hover:text-slate-900">
              (714) 675-2710
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
