import { HeroCopy, PlaygroundFrame, PlaygroundNav } from "../_shared"

export default function Concept1() {
  return (
    <PlaygroundFrame title="Concept 1 — Pure & calm" notes="Current production baseline">
      <PlaygroundNav />
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.045) 1px, transparent 0)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 70%, transparent 100%)",
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[520px] rounded-full opacity-60" style={{ background: "radial-gradient(closest-side, rgba(37, 99, 235, 0.10), transparent 70%)" }} />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-40 h-[380px] w-[460px] rounded-full opacity-60" style={{ background: "radial-gradient(closest-side, rgba(14, 165, 233, 0.08), transparent 70%)" }} />

        <div className="relative mx-auto max-w-[1320px] px-6 pb-32 pt-24 lg:pt-32">
          <HeroCopy />
        </div>
      </section>
    </PlaygroundFrame>
  )
}
