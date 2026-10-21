import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Tracking } from "@/components/tracking"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const siteUrl = "https://www.flowcontents.com"
const siteTitle = "Flow Contents | Contents inventories for homeowners and public adjusters"
const siteDescription =
  "Itemized, priced contents inventories after a fire or other loss, for families and the public adjusters who represent them. Every item documented and priced accurately, and every line reviewed by a contents specialist."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Flow Contents",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  // Icons are picked up automatically from app/icon.svg + public/apple-icon.png
  // OG/Twitter image is generated dynamically by app/opengraph-image.tsx
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <Tracking />
      </body>
    </html>
  )
}
