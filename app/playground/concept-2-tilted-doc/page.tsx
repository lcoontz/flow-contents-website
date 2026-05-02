import { HeroCopy, PlaygroundFrame, PlaygroundNav } from "../_shared"

export default function Concept2() {
  return (
    <PlaygroundFrame title="Concept 2 — Single tilted document" notes="One real report card, large, blurred, tilted">
      <PlaygroundNav />
      <section className="relative overflow-hidden bg-white">
        {/* base wash */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[520px] rounded-full opacity-60" style={{ background: "radial-gradient(closest-side, rgba(37, 99, 235, 0.10), transparent 70%)" }} />

        {/* the tilted document, sitting behind the hero copy */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[820px] -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: "translate(-50%, -42%) rotate(-4deg)",
            opacity: 0.18,
            filter: "blur(1.2px)",
          }}
        >
          <FakeReport />
        </div>

        {/* fade-out gradient so the doc dissolves into the page */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(255,255,255,0.6) 60%, white 95%)",
          }}
        />

        <div className="relative mx-auto max-w-[1320px] px-6 pb-32 pt-24 lg:pt-32">
          <HeroCopy />
        </div>
      </section>
    </PlaygroundFrame>
  )
}

function FakeReport() {
  return (
    <div className="h-full w-full overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-[10px] font-bold text-white">FC</div>
          <span className="font-mono text-[11px] text-slate-500">sample_property_inventory.xlsx</span>
        </div>
        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700">
          Xactimate-ready
        </span>
      </div>
      <table className="w-full text-[12px]">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            <th className="px-3 py-2">Item</th>
            <th className="px-3 py-2">Xact Code</th>
            <th className="px-3 py-2">Cond.</th>
            <th className="px-3 py-2 text-right">RCV</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            ["Sectional Sofa, top-grain leather", "FRN SOFA-LR+", "Good", "$6,240.00"],
            ["Smart Toaster, 4-slice", "KIT TOAS+", "Good", "$149.95"],
            ["Persian-style area rug", "FRN RUG-PER", "Fair", "$1,820.00"],
            ["Tufted velvet accent chair", "FRN CHR-ACC", "Excellent", "$680.00"],
            ["Roll-top secretary desk", "FRN DSK-RT", "Good", "$1,360.00"],
            ["Walnut 6-drawer dresser", "FRN DRS-6D", "Excellent", "$1,599.00"],
            ["Treadmill, folding", "REC EX-TRD", "Good", "$2,499.00"],
            ["Memory foam mattress, king", "FRN MAT-KNG", "Good", "$1,995.00"],
            ["Espresso machine, semi-automatic", "KIT ESP+", "Excellent", "$749.95"],
            ["Brass tripod floor lamp", "LIT FLR-LMP", "Good", "$295.00"],
            ["Stand mixer, 5-quart", "KIT MIX-STD", "Good", "$449.99"],
            ["Stainless cookware set, 10-pc", "KIT COOK-SET", "Good", "$1,199.95"],
          ].map(([name, code, cond, rcv]) => (
            <tr key={code}>
              <td className="px-3 py-2 text-slate-700">{name}</td>
              <td className="px-3 py-2"><span className="font-mono text-[11px] font-semibold text-blue-700">{code}</span></td>
              <td className="px-3 py-2 text-slate-500">{cond}</td>
              <td className="px-3 py-2 text-right font-mono tabular-nums font-semibold text-slate-900">{rcv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
