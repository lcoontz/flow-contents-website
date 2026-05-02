// Pool of plausible spreadsheet cell content for the matrix-grid hero backgrounds.
// All anonymized — no client names, no addresses. Brand-prefixed item names with
// rich descriptive content (per user direction: "Lululemon yoga mat" not "yoga mat").

export type CellKind = "name" | "code" | "money" | "link" | "cond" | "age" | "qty" | "cat" | "desc"

export interface Cell {
  text: string
  kind: CellKind
}

const NAMES = [
  // Furniture
  "Natuzzi Italia Amalfi sectional sofa",
  "West Elm Andes 3-pc sectional",
  "Pottery Barn Raleigh upholstered king bed",
  "Article Lenia walnut dresser, 6-drawer",
  "Restoration Hardware Maxwell sofa",
  "CB2 Forte oak dining table",
  "DWR Eames lounge chair, walnut + black",
  "Crate & Barrel Lounge II ottoman",
  "Pottery Barn Cayman teak coffee table",
  "Joybird Bryant velvet accent chair",
  "Floyd platform bed frame, queen",
  "Article Sven leather sofa, charme tan",
  "West Elm Mid-century 6-drawer dresser",
  // Mattresses + bedding
  "Casper Original Hybrid mattress, king",
  "Tempur-Pedic ProAdapt mattress, queen",
  "Brooklinen Luxe Core sheet set, king",
  "Parachute Linen duvet cover, full/queen",
  "Coyuchi Cloud Brushed bath sheet (set of 4)",
  "Boll & Branch Signature pillowcases, pair",
  // Kitchen
  "Breville BTA840XL Smart Toaster, 4-slice",
  "Breville BES870XL Barista Express",
  "KitchenAid KSM150PSER Artisan stand mixer, empire red",
  "All-Clad D3 Stainless 10-pc cookware set",
  "Wüsthof Classic 8-inch chef's knife",
  "Vitamix A3500 Ascent Series blender",
  "Le Creuset Signature 5.5-qt round Dutch oven, cerise",
  "Smeg FAB28U 50s-style refrigerator, pastel blue",
  "Nespresso Vertuo Next coffee machine",
  "Cuisinart DFP-14BCNY 14-cup food processor",
  "Williams Sonoma Goldtouch nonstick muffin pan",
  // Lighting
  "West Elm Mid-century brass tripod floor lamp",
  "Pottery Barn Bestler arc lamp, brushed brass",
  "Schoolhouse Princeton sconce, polished nickel",
  "Restoration Hardware Boule de Cristal chandelier",
  "Article Hayek table lamp, walnut + linen",
  // Decor
  "Anthropologie Persian-style hand-knotted area rug, 9'×12'",
  "Lulu and Georgia Joelle abstract canvas, 60×40",
  "West Elm Industrial Metal+Wood mirror, 36\"",
  "CB2 Quattro brass bookends, set of 2",
  "Williams Sonoma boxwood wreath, 24\"",
  "Pottery Barn linen pleated lampshade, oatmeal",
  // Office
  "Herman Miller Aeron task chair, size B, graphite",
  "1stDibs antique walnut roll-top secretary desk, c. 1910",
  "Steelcase Series 1 task chair, licorice",
  "Safco Onyx mesh desk organizer, 5-section",
  "Moleskine Classic large hardcover notebook",
  // Exercise
  "NordicTrack Commercial 1750 folding treadmill",
  "Bowflex SelectTech 552 adjustable dumbbells, pair",
  "Manduka PRO 6mm yoga mat, deep coral",
  "Lululemon The Mat 5mm reversible yoga mat",
  "Peloton Bike+ stationary bike, 24\" rotating HD touchscreen",
  "Hyperice Hypervolt 2 Pro percussion massager",
  // Outdoor
  "Weber Genesis II E-435 4-burner natural gas grill",
  "Sun Joe SPX3000 2030-PSI electric pressure washer",
  "Pottery Barn Chesapeake teak 6-seat outdoor dining set",
  "Yeti Tundra 65 hard cooler, charcoal",
  "Solo Stove Bonfire 2.0 stainless steel fire pit",
  // Tools / garage
  "DeWalt DCD791D2 20V MAX cordless drill kit",
  "Husky 41-inch 6-drawer rolling tool chest, red",
  "Milwaukee M18 FUEL impact driver kit",
  "Stanley FatMax 25-foot tape measure",
  // Personal care / bath
  "Philips Sonicare DiamondClean 9000 electric toothbrush",
  "Dyson Supersonic hair dryer, fuchsia + nickel",
  "Theragun Elite handheld percussive therapy device",
  "Brooklinen Super-Plush bath towel set (8-pc)",
  // Tech / electronics
  "Sonos Arc Premium soundbar, black",
  "Apple HomePod (2nd gen), white",
  "LG OLED65C3PUA 65\" 4K Smart TV",
  "MacBook Pro 14-inch (M3 Pro), space gray",
  "Bose QuietComfort Ultra Headphones",
  "Sony WH-1000XM5 wireless headphones",
  // Books / collectibles
  "Hardback first edition: 'A Brief History of Time'",
  "Encyclopaedia Britannica 2010 print, 32 volumes",
  "Vintage Royal typewriter, 1956 model",
  // Apparel-related
  "Patagonia Black Hole 60L duffel bag, classic navy",
  "Tumi Alpha 3 international expandable carry-on",
]

const DESCRIPTIONS = [
  "Top-grain leather, 8-way hand-tied",
  "Powder-coated steel, weatherproof",
  "Solid walnut, hairpin legs",
  "Sateen weave, 1000 thread count",
  "Tri-ply stainless, induction-compatible",
  "Hand-knotted wool, oriental motif",
  "Brushed stainless, LCD display",
  "Powder-coated, swivel base",
  "Linen-blend upholstery, button tufting",
  "Hardwood frame, brass casters",
  "Borosilicate glass, push-button lid",
  "Signature glaze, dishwasher safe",
  "Cast iron, enameled exterior",
  "Adjustable lumbar, mesh back",
  "Marble top, walnut base",
  "Down-filled, removable cover",
  "Carbon steel, full tang",
  "Belgian linen, vintage washed",
  "Reclaimed teak, weathered finish",
  "Soft-close drawers, full extension",
]

const CODES = [
  "FRN SOFA-LR+", "KIT TOAS+", "FRN RUG-PER", "FRN CHR-ACC", "FRN DRS-6D",
  "KIT ESP+", "KIT MIX-STD", "FRN TBL-COF", "LIT FLR-LMP", "FRN MAT-KNG",
  "REC EX-TRD", "REC EX-DMB", "FRN BED-KNG", "KIT COOK-SET", "KIT KNF-CHF",
  "REC EX-YOG", "FRN DSK-RT", "FRN CHR-OFF", "BTH TWL-SET", "BTH TBR-ELE",
  "OUT FRN-DIN", "OUT EQU-GRL", "OUT EQU-PWR", "TOO POW-DRL", "TOO STR-CHT",
  "BED SHT-KNG", "DEC VSE-MED", "DEC LNT-BR", "BOK HC-REF", "DEC MIR-WAL",
  "BED THR-BLK", "FRN TBL-SID", "OFF FIL-CAB", "OUT FRN-LNG", "REC EX-BCH",
  "APP AIR-PUR", "ELE TV-LG65", "ELE SND-BAR", "KIT BLD-VTM", "KIT REF-STD",
  "FRN CHR-DIN", "DEC ART-CAN", "OFF DSK-EXE", "ELE LAP-MBP",
]

const MONEY = [
  "$149.95", "$6,240.00", "$1,820.00", "$680.00", "$1,599.00", "$749.95",
  "$449.99", "$560.00", "$295.00", "$1,995.00", "$2,499.00", "$449.00",
  "$1,999.00", "$1,199.95", "$169.95", "$138.00", "$1,360.00", "$1,745.00",
  "$149.00", "$219.95", "$3,499.00", "$999.00", "$199.00", "$580.00",
  "$48.00", "$199.99", "$2,995.00", "$78.50", "$320.00", "$5,499.00",
  "$849.00", "$3,200.00", "$112.00", "$2,449.00", "$420.00", "$92.50",
  "$1,099.00", "$2,899.00",
]

const LINKS = [
  "Wayfair →", "Pottery Barn →", "West Elm →", "CB2 →", "Williams Sonoma →",
  "Sur La Table →", "Brooklinen →", "All-Clad →", "Wüsthof →", "Casper →",
  "Article →", "Home Depot →", "Manduka →", "Bowflex →", "NordicTrack →",
  "1stDibs →", "Herman Miller →", "Weber →", "AbeBooks →", "Anthropologie →",
  "Restoration Hardware →", "Tempur-Pedic →", "Crate & Barrel →", "Sonos →",
  "Apple →", "B&H Photo →", "REI →", "Lululemon →", "Patagonia →",
]

const CONDITIONS = ["Excellent", "Good", "Fair", "Poor"]
const AGES = ["1 yr", "2 yrs", "3 yrs", "4 yrs", "5 yrs", "6 yrs", "8 yrs", "10 yrs", "15 yrs", "20 yrs"]
const QTYS = ["×1", "×2", "×3", "×4", "×6", "×8", "×12"]
const CATS = ["Furniture", "Lighting", "Kitchen", "Linens", "Outdoor", "Tools", "Books", "Decor", "Exercise", "Electronics"]

const POOL: Cell[] = [
  ...NAMES.map((text) => ({ text, kind: "name" as CellKind })),
  ...DESCRIPTIONS.map((text) => ({ text, kind: "desc" as CellKind })),
  ...CODES.map((text) => ({ text, kind: "code" as CellKind })),
  ...MONEY.map((text) => ({ text, kind: "money" as CellKind })),
  ...LINKS.map((text) => ({ text, kind: "link" as CellKind })),
  ...CONDITIONS.map((text) => ({ text, kind: "cond" as CellKind })),
  ...AGES.map((text) => ({ text, kind: "age" as CellKind })),
  ...QTYS.map((text) => ({ text, kind: "qty" as CellKind })),
  ...CATS.map((text) => ({ text, kind: "cat" as CellKind })),
]

/**
 * Deterministic pseudo-random per (col, row) — keeps SSR/CSR in sync and avoids
 * hydration mismatch warnings.
 */
function hash(col: number, row: number, salt = 0): number {
  const x = Math.sin(col * 12.9898 + row * 78.233 + salt * 37.719) * 43758.5453
  return x - Math.floor(x)
}

export function pickCell(col: number, row: number, salt = 0): Cell {
  const idx = Math.floor(hash(col, row, salt) * POOL.length)
  return POOL[idx]
}

/** Blank density — `density` ∈ [0, 1]; higher = more blank cells */
export function isBlank(col: number, row: number, density = 0.42, salt = 0): boolean {
  return hash(col, row, salt + 100) < density
}

/** Pick an alternate value for a cell (used by cycling concept) */
export function pickAlt(col: number, row: number, step: number, kind?: CellKind): Cell {
  const filtered = kind ? POOL.filter((p) => p.kind === kind) : POOL
  const idx = Math.floor(hash(col, row, step + 1000) * filtered.length)
  return filtered[idx]
}

export function cellClass(kind: CellKind): string {
  switch (kind) {
    case "money":
      return "font-mono tabular-nums font-semibold text-blue-700"
    case "code":
      return "font-mono font-semibold text-blue-700"
    case "link":
      return "font-medium text-blue-600"
    case "cond":
      return "text-slate-500"
    case "age":
      return "font-mono tabular-nums text-slate-500"
    case "qty":
      return "font-mono tabular-nums text-slate-400"
    case "cat":
      return "uppercase tracking-wider text-[9px] text-slate-400"
    case "desc":
      return "italic text-slate-500"
    case "name":
    default:
      return "text-slate-700"
  }
}
