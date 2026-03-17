"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import { useReveal } from "./use-reveal"

export function FooterSection() {
  const headerRef = useReveal()
  const cardRef = useReveal(200)

  return (
    <footer id="contact" className="bg-navy py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={headerRef} className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight text-balance">
              Secure Your Full Recovery
            </h2>
            <p className="mt-6 text-white/70 max-w-2xl mx-auto leading-relaxed">
              Because of the forensic, high-touch nature of this work, we can only accept 2&ndash;3 new clients per month. We
              are currently forming a waiting list.
            </p>
          </div>

          {/* Contact Card */}
          <div ref={cardRef} className="reveal-scale mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 inline-block">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-teal">
                  <Image
                    src="/images/screenshot-202025-12-16-20at-2001.png"
                    alt="Leland Coontz - Flow Contents Owner"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">Leland Coontz</h3>
                <p className="text-teal text-sm mb-3">Founder & Lead Analyst</p>
                <div className="space-y-2">
                  <a
                    href="tel:7146752710"
                    className="flex items-center gap-2 text-white/80 hover:text-teal transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(714) 675-2710</span>
                  </a>
                  <a
                    href="mailto:leland.coontz.iv@gmail.com"
                    className="flex items-center gap-2 text-white/80 hover:text-teal transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>leland.coontz.iv@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            <Button size="lg" className="mt-8 bg-teal hover:bg-teal/90 text-white px-10 py-6 text-base w-full sm:w-auto cta-glow" asChild>
              <a
                href="https://tidycal.com/leland/intro-call-flow-contents-ai-w-leland"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-white/80 font-medium">Flow Contents</span>
          </div>
          <p className="text-white/50 text-sm">&copy; 2026 Flow Contents. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
