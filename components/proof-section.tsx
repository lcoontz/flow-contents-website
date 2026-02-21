import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const comparisonData = [
  {
    description: '"Toaster"',
    selection: "Toaster - Standard (Mainstays)",
    payout: "$4.88",
    isHighlight: false,
  },
  {
    description: '"Toaster - Macy\'s"',
    selection: "Toaster - Dept. Store Grade",
    payout: "$25.00",
    isHighlight: false,
  },
  {
    description: '"Breville Smart Toaster"',
    selection: "Name Brand / Specific Model",
    payout: "$150.00+",
    isHighlight: true,
  },
]

export function ProofSection() {
  return (
    <section id="proof" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-teal font-medium uppercase tracking-wider text-sm">The Proof</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
              The Cost of Being Generic
            </h2>
            <p className="mt-4 text-navy/70">
              See how the same item yields dramatically different payouts based on description quality.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-navy/10 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-navy/5">
                  <TableHead className="text-navy font-semibold">Description Submitted</TableHead>
                  <TableHead className="text-navy font-semibold">Adjuster Software Selection</TableHead>
                  <TableHead className="text-navy font-semibold text-right">Estimated Payout</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className={row.isHighlight ? "bg-teal/5" : ""}>
                    <TableCell className="font-medium text-navy">{row.description}</TableCell>
                    <TableCell className="text-navy/70">{row.selection}</TableCell>
                    <TableCell className={`text-right font-bold ${row.isHighlight ? "text-teal" : "text-navy"}`}>
                      {row.payout}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <p className="mt-6 text-center text-navy/60 text-sm">
            Specific features shrink the pool of acceptable replacements, forcing the insurer to price a truly
            comparable item.
          </p>
        </div>
      </div>
    </section>
  )
}
