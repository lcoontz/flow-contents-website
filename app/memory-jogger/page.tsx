import type { Metadata } from "next"
import "../home.css"
import { WaitlistForm } from "../homeowners/waitlist-form"

// Memory Jogger lead-magnet page (founder direction 2026-10-20, docs/PRODUCT-STRATEGY.md shift log
// "memory-jogger-lead-magnet"). Early-access list until the self-serve app opens; then the forms
// become sign-up links. Copy rules: homeowners never see a turnaround time, public numbers only
// from the approved list (docs/specs/website-stat-claims.md), "contents specialist", never bare
// "specialist". Checklist counts come from apps/checklist/data/master/checklist.json (2026-10-20).

export const metadata: Metadata = {
  title: "Memory Jogger: a free checklist of everything in your home | Flow Contents",
  description:
    "After a fire or other total loss, the Memory Jogger walks your family through more than 12,000 household items, room by room, so your contents list includes what you'd never think to write down. Free to use.",
  alternates: { canonical: "/memory-jogger" },
}

const BOOKING_URL = "https://tidycal.com/leland/intro-call-flow-contents-ai-w-leland"

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function Chevron() {
  return (
    <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

// Rows are real rows from the master checklist ("KITCHEN — Utensils & Tools").
const MOCK_ROWS = [
  { t: "Wooden spoons (set)", on: true, qty: 2 },
  { t: "Mixing bowls (set)", on: true, qty: 1, note: "Pyrex, 3 glass bowls" },
  { t: "Salad spinner", on: true, qty: 1, note: "OXO" },
  { t: "Colander", on: true, qty: 2 },
  { t: "Ice cream scoop", on: false },
  { t: "Ladle", on: true, qty: 1 },
  { t: "Butter dish", on: false },
]

const PAINS = [
  {
    h: "A blank spreadsheet doesn't remind you of anything",
    p: "You write down the couch and the TV, and the hundreds of smaller things never come to mind.",
  },
  {
    h: "The small things add up",
    p: "Spatulas, extension cords, spare sheets, the coats in storage. Each one is small, but a home holds thousands of them, and anything left off the list can't be paid for.",
  },
  {
    h: "One person usually carries it alone",
    p: "Everyone in the family remembers different rooms, but the list tends to land on one person's laptop at midnight.",
  },
]

const STEPS = [
  {
    h: "Open a room.",
    p: "Start anywhere: the kitchen, a bedroom closet, the garage. Each room is split into smaller groups, like utensils, cookware and small appliances, so you're never looking at everything at once.",
  },
  {
    h: "Check what you had.",
    p: "Tap each item your family owned and set how many. When you remember the brand, model or where you bought it, add a note.",
  },
  {
    h: "Bring in your family.",
    p: "Invite the people who lived there. Everyone works on the same list from their own phone, and it keeps your place, so you can do the kitchen tonight and the garage on Saturday.",
  },
]

const FEATURES = [
  {
    h: "More than 12,000 household items",
    p: "Built from real fire claims and organized room by room. The kitchen alone has 789 items across nine groups.",
  },
  {
    h: "A section for what's out of sight",
    p: "It covers the things that live in boxes, like off-season clothes, baby things saved for later, photo albums and holiday decorations.",
  },
  {
    h: "Counts and notes on every item",
    p: "Set how many you had and write down the brand or model while you remember it.",
  },
  {
    h: "Your whole family on one list",
    p: "Each person signs in on their own phone, and everyone adds to the same list.",
  },
  {
    h: "Saves as you go",
    p: "Close it whenever you need to. Your list is there when you come back, on any phone.",
  },
  {
    h: "Free, with nothing to buy",
    p: "You don't have to hire us to use it. Your list is yours either way.",
  },
]

// From the master checklist's "Commonly forgotten & seasonal stored items" section.
const FORGOTTEN = [
  "Packages that arrived but were never opened",
  "Winter coats, boots and ski gear stored for the off-season",
  "Baby clothes and gear saved for the next child",
  "Kids' outgrown clothes, school papers and art in boxes",
  "Photo albums, yearbooks and home videos",
  "A wedding dress, prom dress or military uniform in storage",
  "Holiday decorations in labeled bins",
  "Camping gear and seasonal sports equipment",
]

const FAQ = [
  {
    q: "Is it really free?",
    a: "Yes. The Memory Jogger is free to use, and you don't have to hire us. If you want help later, your checklist gives us a head start.",
  },
  {
    q: "When can I start?",
    a: "We're opening the Memory Jogger to families soon. Join the early access list and we'll email you as soon as you can sign in. If you need help sooner, book a free call.",
  },
  {
    q: "Does it work on my phone?",
    a: "Yes. It's built for iPhone and Android phones.",
  },
  {
    q: "Can my family work on it together?",
    a: "Yes. Invite them to your list, and each person signs in on their own phone.",
  },
  {
    q: "Is the checklist the same as the inventory my insurance company needs?",
    a: "Not on its own. The Memory Jogger helps you remember what you owned. The inventory your insurance company reviews also needs a description and a replacement price for each item, and that's the part our contents specialists do.",
  },
  {
    q: "I already started a spreadsheet. Should I still use this?",
    a: "Yes. Keep your spreadsheet and use the Memory Jogger to find what's missing from it. If you hire us, we'll combine the two.",
  },
  {
    q: "What does it cost if I want your help?",
    a: "The Memory Jogger stays free. If you hire us to build your full inventory, our fee is 3% of what your insurance company pays for your contents, split into three payments.",
  },
  {
    q: "Who sees my list?",
    a: "Your family and our team. We don't sell your information.",
    privacy: true,
  },
]

export default function MemoryJoggerPage() {
  return (
    <main className="fc-home">
      {/* NAV */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="wordmark" href="/">
            <span className="fc">FC</span>
            <span className="name">Flow Contents</span>
          </a>
          <nav className="nav-links">
            <a className="link" href="#how">How it works</a>
            <a className="link" href="#what">What it does</a>
            <a className="link" href="#faq">Questions</a>
            <a className="link" href="/homeowners">Our service</a>
            <a className="btn btn-primary" href="#join">Get early access</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy" id="join">
            <span className="eyebrow"><span className="dot" /> Free for families after a fire or other total loss</span>
            <h1 className="hero-h">The free checklist that helps your family remember everything you owned.</h1>
            <p className="hero-sub">
              Your insurance company asks for a list of everything that was in your home. The Memory Jogger walks you
              through more than 12,000 household items, room by room, so you check off what you had instead of trying
              to remember it all from a blank page.
            </p>
            <WaitlistForm cta="Get early access" buttonClass="btn-primary" />
            <p className="hero-note">
              More than 30 Los Angeles families have trusted us with their contents.
            </p>
          </div>
          <div className="hero-visual">
            <div className="mj-phone" aria-label="The Memory Jogger on a phone, showing kitchen utensils">
              <div className="mj-screen">
                <div className="mj-top">
                  <div className="mj-room">Kitchen</div>
                  <div className="mj-group">Utensils &amp; Tools</div>
                  <div className="mj-progress">
                    <span className="mj-bar"><span style={{ width: "43%" }} /></span>
                    <span className="mj-count">18 of 42</span>
                  </div>
                  <span className="mj-status">strong start</span>
                </div>
                <ul className="mj-rows">
                  {MOCK_ROWS.map((r) => (
                    <li key={r.t} className={r.on ? "on" : ""}>
                      <span className="mj-box">{r.on && <Check />}</span>
                      <span className="mj-text">
                        <span className="mj-name">{r.t}</span>
                        {r.note && <span className="mj-note">{r.note}</span>}
                      </span>
                      {r.on && r.qty ? <span className="mj-qty">{r.qty}</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust">
        <div className="wrap trust-inner">
          <span className="stat"><b>30+</b><span>Los Angeles families helped</span></span>
          <span className="divider" />
          <span className="stat"><b>100,000+</b><span>items inventoried</span></span>
          <span className="divider" />
          <span className="stat"><b>$21M+</b><span>in contents value documented</span></span>
          <span className="divider" />
          <span className="stat"><b>92%</b><span>of delivered claims paid out</span></span>
        </div>
      </div>

      {/* THE PROBLEM */}
      <section className="block" id="why">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-eyebrow"><span className="dot" /> why the list is so hard</span>
            <h2 className="sec-h">Nobody can list a whole house from memory.</h2>
            <p className="sec-sub">
              The things your family used every day are the hardest to remember, because nobody ever thought about
              them.
            </p>
          </div>
          <div className="probs three">
            {PAINS.map((c) => (
              <div className="prob" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="block alt" id="how">
        <div className="wrap how">
          <div className="how-head">
            <h2 className="sec-h">It&apos;s easier to recognize something than to remember it.</h2>
            <p className="sec-sub">
              That&apos;s the whole idea. Seeing &quot;salad spinner&quot; on a list brings it back in a second, even
              if you&apos;d never have thought of it on your own.
            </p>
          </div>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li className="step" key={s.h}>
                <div className="si">{i + 1}</div>
                <div className="sbody">
                  <div className="sn">Step {i + 1}</div>
                  <h4>{s.h}</h4>
                  <p>{s.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section className="block" id="what">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-eyebrow"><span className="dot" /> what you get, free</span>
            <h2 className="sec-h">Everything your family needs to remember what you owned.</h2>
          </div>
          <div className="probs three">
            {FEATURES.map((c) => (
              <div className="prob" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL MATTERS */}
      <section className="block own" id="detail">
        <div className="wrap">
          <div className="offer">
            <div className="offer-viz">
              <img src="/home/jogger-phone.jpg" alt="The Memory Jogger kitchen checklist on a phone" />
            </div>
            <div className="offer-copy">
              <span className="sec-eyebrow"><span className="dot" /> why the details matter</span>
              <h2 className="sec-h">Your insurance company prices what your list says.</h2>
              <p className="sec-sub">
                If your list says &quot;toaster,&quot; the insurance company prices the cheapest toaster it can find.
                If it says &quot;Breville four-slice toaster,&quot; they price a Breville. The Memory Jogger gives every
                item a place for the brand and model, so the details you remember don&apos;t get lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* START NOW */}
      <section className="block alt" id="start">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-eyebrow"><span className="dot" /> start tonight</span>
            <h2 className="sec-h">Start with the things that live out of sight.</h2>
            <p className="sec-sub">
              You don&apos;t have to wait for the app. These come straight from the Memory Jogger&apos;s section on
              stored and seasonal things, and they&apos;re the easiest to leave off a list.
            </p>
          </div>
          <ul className="mj-forgot">
            {FORGOTTEN.map((f) => (
              <li key={f}>
                <span className="mj-box"><Check /></span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHEN YOU WANT HELP */}
      <section className="block" id="help">
        <div className="wrap">
          <div className="mj-help">
            <span className="sec-eyebrow"><span className="dot" /> when you want help</span>
            <h2 className="sec-h">We can turn your checklist into a finished inventory.</h2>
            <p className="sec-sub">
              When you&apos;re ready, our team builds the inventory your insurance company reviews. We describe and
              price every item you checked, add what we find in your photos and records, and a contents specialist
              reviews every line. If you need help now, we&apos;ll build your Memory Jogger for you from your photos
              and records.
            </p>
            <div className="mj-help-ctas">
              <a className="btn btn-primary btn-lg" href={BOOKING_URL} target="_blank" rel="noopener">
                Book a free call <Arrow />
              </a>
              <a className="btn btn-secondary btn-lg" href="/homeowners">See how our service works</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="block alt" id="faq">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-eyebrow"><span className="dot" /> common questions</span>
            <h2 className="sec-h">Questions families ask about the Memory Jogger.</h2>
          </div>
          <div className="faq">
            {FAQ.map((f, i) => (
              <details className="qa" key={f.q} open={i === 0}>
                <summary>
                  {f.q}
                  <Chevron />
                </summary>
                <div className="ans">
                  {f.a}
                  {f.privacy && (
                    <>
                      {" "}
                      Read our <a href="/privacy">privacy policy</a>.
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSER */}
      <section className="closer" id="early-access">
        <div className="wrap">
          <div className="kicker">The Memory Jogger</div>
          <h2>Get early access. It&apos;s free.</h2>
          <p>Join the list and we&apos;ll email you as soon as your family can sign in.</p>
          <div className="mj-closer-form">
            <WaitlistForm cta="Get early access" />
          </div>
          <p className="smallprint">
            Flow Contents builds contents inventories. We work alongside your public adjuster or attorney, and we
            don&apos;t negotiate claims.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site">
        <div className="wrap foot-inner">
          <a className="wordmark" href="/">
            <span className="fc">FC</span>
            <span className="name">Flow Contents</span>
          </a>
          <div className="foot-meta">
            <a href="/">flowcontents.com</a> &nbsp;·&nbsp; contents inventories for homeowners and{" "}
            <a href="/">public adjusters</a> &nbsp;·&nbsp; <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
