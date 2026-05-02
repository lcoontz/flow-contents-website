import { HeroCopy, PlaygroundFrame, PlaygroundNav } from "../_shared"
import { HeroMatrixBg } from "@/components/hero-matrix-bg"

// This concept now mirrors production — see components/hero-matrix-bg.tsx for
// the canonical implementation. Iterations to the production hero land here
// automatically.

export default function Concept10() {
  return (
    <PlaygroundFrame
      title="Concept 10 — Combined: gentle fade + typewriter (PRODUCTION)"
      notes="Single layer with both effects + clip-path typewriter. Mirrors live site."
    >
      <PlaygroundNav />
      <section className="relative overflow-hidden bg-white">
        <HeroMatrixBg />
        <div className="relative mx-auto max-w-[1320px] px-6 pb-32 pt-24 lg:pt-32">
          <HeroCopy />
        </div>
      </section>
    </PlaygroundFrame>
  )
}
