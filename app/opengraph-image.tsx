import { ImageResponse } from "next/og"

export const alt = "Flow Contents — 72-Hour Contents Lists for Public Adjusters"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #f8fafc 0%, #ffffff 55%, #eff6ff 100%)",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#2563eb",
            fontSize: "28px",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            F
          </div>
          Flow Contents
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 16px",
              borderRadius: "999px",
              background: "#eff6ff",
              color: "#2563eb",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            72-hour turnaround
          </div>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "1000px",
            }}
          >
            Forensic contents lists for public adjusters
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "#475569",
              lineHeight: 1.35,
              maxWidth: "920px",
            }}
          >
            Send us photos. Get a Xactimate-ready report — guaranteed better
            than any list you&apos;ve seen, or your money back.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#64748b",
            fontSize: "22px",
          }}
        >
          <span>flowcontents.com</span>
          <span style={{ color: "#2563eb", fontWeight: 600 }}>
            AI-powered · Auditor-reviewed
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}
