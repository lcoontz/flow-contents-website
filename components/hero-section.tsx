"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

const inventoryItems = [
  {
    generic: "Toaster",
    genericPrice: 4.88,
    enhanced: "Breville Die-Cast Smart Toaster, 4-Slice, Motorized Lift",
    enhancedPrice: 183.47,
  },
  {
    generic: "Bicycle",
    genericPrice: 147.23,
    enhanced: "Road Bike, Carbon Fiber Frame, Shimano 105 Groupset",
    enhancedPrice: 1847.65,
  },
  {
    generic: "Dining Table",
    genericPrice: 203.91,
    enhanced: "Solid Cherry Dining Table, Hand-Carved Legs, 8-Seater",
    enhancedPrice: 2534.28,
  },
  {
    generic: "Laptop",
    genericPrice: 394.76,
    enhanced: "Gaming Laptop, Intel i9, 32GB RAM, RTX 4070, 240Hz",
    enhancedPrice: 2187.43,
  },
  {
    generic: "Sofa",
    genericPrice: 512.88,
    enhanced: "Sectional, 8-Way Hand-Tied Springs, Top-Grain Italian Leather",
    enhancedPrice: 3542.19,
  },
  {
    generic: "Men's Suit",
    genericPrice: 96.54,
    enhanced: "100% Merino Wool, Full Canvas Construction, Made in Italy",
    enhancedPrice: 1189.67,
  },
  {
    generic: "Blender",
    genericPrice: 22.73,
    enhanced: "Vitamix Professional Series, 2.2 HP Motor, Stainless Blades",
    enhancedPrice: 457.82,
  },
  {
    generic: "Area Rug",
    genericPrice: 108.42,
    enhanced: "Hand-Knotted Wool & Silk Blend, High-Density Pile",
    enhancedPrice: 1614.91,
  },
  {
    generic: "TV",
    genericPrice: 346.19,
    enhanced: "55-inch OLED Display, 120Hz Native Refresh Rate",
    enhancedPrice: 1423.56,
  },
  {
    generic: "Cordless Drill",
    genericPrice: 31.67,
    enhanced: "20V Max Brushless Hammer Drill, Heavy Duty, 2 Batteries",
    enhancedPrice: 247.38,
  },
]

const genericTotal = 335980
const enhancedTotal = 767809
const valueDifference = enhancedTotal - genericTotal

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
          <Link href="#philosophy" className="text-navy/70 hover:text-navy transition-colors">
            Philosophy
          </Link>
          <Link href="#process" className="text-navy/70 hover:text-navy transition-colors">
            Process
          </Link>
          <Link href="#proof" className="text-navy/70 hover:text-navy transition-colors">
            Proof
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
              your home — and deliver a report built to hold up under adjuster scrutiny.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-navy hover:bg-navy/90 text-white px-8" asChild>
                <Link href="#contact">Book a Call</Link>
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

          <div className="relative overflow-visible py-6 pr-8">
            <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-visible">
              {/* Value sticker - positioned outside container with overflow-visible */}
              <div
                className={`absolute -right-6 -top-6 z-20 bg-green-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl transition-all duration-700 ${
                  showEnhanced ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              >
                +${valueDifference.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </div>

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
                {/* State indicator - made more prominent and responsive */}
                <span
                  className={`text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded transition-all duration-700 ${
                    showEnhanced ? "bg-navy text-white shadow-md" : "bg-gray-300 text-gray-600"
                  }`}
                >
                  <span className="hidden sm:inline">{showEnhanced ? "Flow Contents Output" : "Generic Input"}</span>
                  <span className="sm:hidden">{showEnhanced ? "Enhanced" : "Generic"}</span>
                </span>
              </div>

              {/* Spreadsheet Content */}
              <div className="relative">
                {/* Column Headers */}
                <div className="grid grid-cols-[40px_1fr_100px] sm:grid-cols-[50px_1fr_140px] border-b border-gray-200 bg-gray-50 text-xs sm:text-sm font-semibold text-gray-600">
                  <div className="px-2 sm:px-3 py-2 sm:py-2.5 border-r border-gray-200 text-center">#</div>
                  <div className="px-2 sm:px-4 py-2 sm:py-2.5 border-r border-gray-200">Item Description</div>
                  <div className="px-2 sm:px-4 py-2 sm:py-2.5 text-right">Value</div>
                </div>

                {/* Data Rows */}
                <div className="max-h-[280px] sm:max-h-[340px] overflow-hidden">
                  {inventoryItems.map((item, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-[40px_1fr_100px] sm:grid-cols-[50px_1fr_140px] border-b border-gray-100 text-xs sm:text-sm transition-all duration-700 ${
                        showEnhanced ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <div className="px-2 sm:px-3 py-2 sm:py-2.5 border-r border-gray-100 text-center text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div
                        className={`px-2 sm:px-4 py-2 sm:py-2.5 border-r border-gray-100 transition-all duration-700 leading-snug ${
                          showEnhanced ? "text-navy font-medium" : "text-gray-400"
                        }`}
                      >
                        {showEnhanced ? item.enhanced : item.generic}
                      </div>
                      <div
                        className={`px-2 sm:px-4 py-2 sm:py-2.5 text-right transition-all duration-700 ${
                          showEnhanced ? "text-navy font-bold" : "text-gray-400"
                        }`}
                      >
                        $
                        {showEnhanced
                          ? item.enhancedPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })
                          : item.genericPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total Row - made more prominent and responsive */}
                <div className="grid grid-cols-[40px_1fr_100px] sm:grid-cols-[50px_1fr_140px] bg-gray-100 text-xs sm:text-sm font-bold border-t-2 border-gray-300 rounded-b-xl">
                  <div className="px-2 sm:px-3 py-2.5 sm:py-3.5 border-r border-gray-200"></div>
                  <div className="px-2 sm:px-4 py-2.5 sm:py-3.5 border-r border-gray-200 text-gray-700 text-sm sm:text-base">
                    Total Claim Value
                  </div>
                  <div
                    className={`px-2 sm:px-4 py-2.5 sm:py-3.5 text-right transition-all duration-700 text-sm sm:text-base ${
                      showEnhanced ? "text-green-600 font-extrabold" : "text-gray-500"
                    }`}
                  >
                    $
                    {showEnhanced
                      ? enhancedTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })
                      : genericTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </div>
                </div>
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
