"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

const inventoryItems = [
  {
    generic: "Mug",
    enhanced: "White coffee mug with printed image",
    features: "Photo-printed design, curved D-handle",
  },
  {
    generic: "Candle holder",
    enhanced: "Leaf-Pattern Metal Candle Lantern",
    features: "Metal cylinder, laser-cut leaf design, holds candle",
  },
  {
    generic: "Area rug",
    enhanced: "Persian-style patterned area rug",
    features: "Oriental-style pattern, covers a substantial floor area",
  },
  {
    generic: "Side table",
    enhanced: "Antique Wooden Two-Tier Side Table",
    features: "Two-tier shelving, decorative turned legs, lower shelf",
  },
  {
    generic: "Desk",
    enhanced: "Wooden roll-top secretary desk",
    features: "Roll-top; three upper drawers; cubby compartments; turned legs",
  },
  {
    generic: "Book",
    enhanced: "Atlas of Ancient Indian History",
    features: "Hardback, green cover, scholarly title",
  },
  {
    generic: "Book",
    enhanced: "Concise History of Ancient India Vol I",
    features: "Black and white spine with red center, volume I visible",
  },
  {
    generic: "Board game",
    enhanced: "Scrabble Crossword Game classic edition",
    features: "100 wooden letter tiles, four tile racks, board game",
  },
  {
    generic: "Coffee table",
    enhanced: "Dark Wood Rectangular Coffee Table",
    features: "Two-tier design, carved table legs, dark wood finish",
  },
  {
    generic: "Vase",
    enhanced: "Artificial pink peony flower arrangement in glass vase",
    features: "Clear glass, large full-bloom faux peonies in pink/white",
  },
  {
    generic: "Chair",
    enhanced: "Tufted velvet accent chair",
    features: "Button tufting; wooden cabriole legs; curved arms",
  },
  {
    generic: "Pen",
    enhanced: "Parker Jotter Originals Magenta Ballpoint Pen",
    features: "Retractable click, metal clip",
  },
  {
    generic: "Binder clips",
    enhanced: "Office Depot Brand Binder Clips, Medium",
    features: "Medium, approx 19 mm width",
  },
  {
    generic: "Sheet music",
    enhanced: "El Arriero Va Lyrics Sheet Music",
    features: "Black-and-white, pink paper-clip top left",
  },
  {
    generic: "File sorter",
    enhanced: "Onyx Mesh Desk Organizer with Three Sections",
    features: "Metal mesh construction, freestanding",
  },
  {
    generic: "Desk organizer",
    enhanced: "Safco Onyx Mesh Desk Organizer with Five Sections",
    features: "Powder-coated steel mesh; open front; side handles",
  },
]

export function HeroSection() {
  const [showEnhanced, setShowEnhanced] = useState(false)

  useEffect(() => {
    const interval = setInterval(
      () => {
        setShowEnhanced((prev) => !prev)
      },
      showEnhanced ? 7000 : 4000,
    )
    return () => clearInterval(interval)
  }, [showEnhanced])

  return (
    <section className="relative min-h-screen flex items-center bg-background">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="text-navy font-semibold text-xl">Flow Contents</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#process" className="text-navy/70 hover:text-navy transition-colors">
            How It Works
          </Link>
          <Link href="#proof" className="text-navy/70 hover:text-navy transition-colors">
            Results
          </Link>
          <Link href="#partners" className="text-navy/70 hover:text-navy transition-colors">
            Partners
          </Link>
          <Link href="#contact" className="text-navy/70 hover:text-navy transition-colors">
            Contact
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight text-balance">
              Precise Contents Inventory for Insurance Claims.
            </h1>
            <p className="mt-6 text-lg text-navy/70 leading-relaxed">
              After a fire, the last thing you need is a spreadsheet. We photograph, identify, and price every item in
              your home — and deliver a report built to hold up under adjuster scrutiny. We've recovered over $1M in
              additional value for homeowners across LA.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-navy hover:bg-navy/90 text-white px-8" asChild>
                <Link href="#contact">Free Consultation Call</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-navy text-navy hover:bg-navy/5 bg-transparent"
                asChild
              >
                <Link href="/whitepaper">Read the Whitepaper</Link>
              </Button>
            </div>
          </div>

          <div className="relative overflow-visible py-6">
            <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Spreadsheet Header */}
              <div className="bg-gray-100 border-b border-gray-200 px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between rounded-t-xl">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 ml-1 sm:ml-2 hidden sm:inline">
                    contents_inventory.xlsx
                  </span>
                </div>
                <span
                  className={`text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded transition-all duration-700 ${
                    showEnhanced ? "bg-navy text-white shadow-md" : "bg-gray-300 text-gray-600"
                  }`}
                >
                  <span className="hidden sm:inline">{showEnhanced ? "Flow Contents Output" : "Generic Input"}</span>
                  <span className="sm:hidden">{showEnhanced ? "Enhanced" : "Generic"}</span>
                </span>
              </div>

              {/* Column Headers */}
              <div
                className={`grid border-b border-gray-200 bg-gray-50 text-[10px] sm:text-xs font-semibold text-gray-600 transition-all duration-700 ${
                  showEnhanced
                    ? "grid-cols-[32px_1fr_1fr] sm:grid-cols-[40px_1fr_1fr]"
                    : "grid-cols-[32px_1fr] sm:grid-cols-[40px_1fr]"
                }`}
              >
                <div className="px-2 py-2 border-r border-gray-200 text-center">#</div>
                <div className="px-2 sm:px-3 py-2 border-r border-gray-200">Item Name</div>
                {showEnhanced && (
                  <div className="px-2 sm:px-3 py-2 text-teal animate-in fade-in duration-500">Details</div>
                )}
              </div>

              {/* Data Rows */}
              <div className="max-h-[360px] sm:max-h-[420px] overflow-hidden">
                {inventoryItems.map((item, index) => (
                  <div
                    key={index}
                    className={`grid border-b border-gray-100 text-[10px] sm:text-xs transition-all duration-700 ${
                      showEnhanced
                        ? "grid-cols-[32px_1fr_1fr] sm:grid-cols-[40px_1fr_1fr]"
                        : "grid-cols-[32px_1fr] sm:grid-cols-[40px_1fr]"
                    } ${showEnhanced ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <div className="px-2 py-1.5 sm:py-2 border-r border-gray-100 text-center text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div
                      className={`px-2 sm:px-3 py-1.5 sm:py-2 border-r border-gray-100 transition-all duration-700 leading-snug ${
                        showEnhanced ? "text-navy font-medium" : "text-gray-400"
                      }`}
                    >
                      {showEnhanced ? item.enhanced : item.generic}
                    </div>
                    {showEnhanced && (
                      <div className="px-2 sm:px-3 py-1.5 sm:py-2 text-navy/60 leading-snug animate-in fade-in duration-500">
                        {item.features}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Summary Row */}
              <div
                className={`grid bg-gray-100 text-[10px] sm:text-xs font-bold border-t-2 border-gray-300 transition-all duration-700 ${
                  showEnhanced
                    ? "grid-cols-[32px_1fr_1fr] sm:grid-cols-[40px_1fr_1fr]"
                    : "grid-cols-[32px_1fr] sm:grid-cols-[40px_1fr]"
                }`}
              >
                <div className="px-2 py-2.5 sm:py-3 border-r border-gray-200"></div>
                <div className="px-2 sm:px-3 py-2.5 sm:py-3 border-r border-gray-200 text-gray-700 text-xs sm:text-sm">
                  {showEnhanced ? "16 items · 16 details captured" : "16 items"}
                </div>
                {showEnhanced && (
                  <div className="px-2 sm:px-3 py-2.5 sm:py-3 text-teal font-semibold text-xs sm:text-sm animate-in fade-in duration-500">
                    Audit-ready
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
