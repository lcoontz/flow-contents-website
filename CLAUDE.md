# CLAUDE.md — Flow Contents Website

Marketing website for Flow Contents (flowcontents.com). Migrated from V0 export, deployed on Vercel.

## Stack

- **Next.js 16** + React 19 + TypeScript
- **Tailwind CSS 4** + shadcn/ui (button, table only)
- **Vercel Analytics** for traffic tracking
- **Static site** — all pages pre-rendered at build time

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Homepage with 6 sections (hero, philosophy, process, proof, output, footer) |
| `/whitepaper` | `app/whitepaper/page.tsx` | Whitepaper download page |

## Directory Structure

```
app/                   # Next.js app router pages + globals.css
components/            # Section components (hero, footer, etc.)
components/ui/         # shadcn/ui primitives (button, table)
lib/utils.ts           # cn() utility for Tailwind class merging
public/images/         # Product screenshots and profile photos
public/                # Favicons and app icons
```

## Development

```bash
npm install
npm run dev      # Local dev server
npm run build    # Production build (static export)
```

## Brand & Positioning

Brand voice, positioning angles, and marketing context live in the sibling marketing repo:
`/Users/lelandcoontziv/Code/flow-product/`

Key files:
- `.claude/product-marketing-context.md` — positioning, audience, competitors
- `.claude/brand-voice-profile.md` — tone, style, vocabulary
- `docs/` — case studies, one-pagers, presentations

## Design System

- **Primary:** Deep Navy (`oklch(0.25 0.05 250)`)
- **Accent:** Teal (`oklch(0.65 0.15 195)`)
- **Font:** Geist (sans) + Geist Mono
- CSS variables defined in `app/globals.css`

## Deployment

- **Host:** Vercel (auto-deploys from `main` branch)
- **Domain:** flowcontents.com
- **Repo:** github.com/lcoontz/flow-contents-website
- No env vars or API keys required
