import "../home.css"
import { pageMetadata } from "@/lib/seo"
import { WaitlistForm } from "./waitlist-form"

export const metadata = pageMetadata({
  title: "Contents inventories for homeowners | Flow Contents",
  description:
    "After a fire or other total loss, we build your itemized contents list with you, item by item, and a contents specialist reviews every line. More than 30 Los Angeles families have trusted us with their contents.",
  path: "/homeowners",
})

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

const HELP = [
  {
    h: "You took the advance and stopped",
    p: "The rest of the list felt impossible, so you put it down. The rest of your contents coverage usually needs an itemized list, and you don't have to build it alone.",
  },
  {
    h: "You've been on a spreadsheet for months",
    p: "Or an app export, and you're not sure it's right. Send us what you have, and we'll go through every line, fill the gaps and price it.",
  },
  {
    h: "Your home is standing, but smoke got into everything",
    p: "Belongings that can't be cleaned need to go on an itemized list with a replacement price. For many standing homes, that list is the contents claim.",
  },
  {
    h: "You owned art, antiques or designer pieces",
    p: "A generic list can't price them properly, so our contents specialists price those pieces one at a time.",
  },
]

const STEPS = [
  {
    h: "You send us what you have.",
    p: "Photos, videos, receipts, online order history, a list you started or an export from another app. You don't need to organize any of it first.",
  },
  {
    h: "Your family remembers the rest.",
    p: "The Memory Jogger is our room-by-room checklist of more than 12,000 household items. We check off everything we already found in your photos and records, so you only add what's missing.",
  },
  {
    h: "Our contents specialists build the list.",
    p: "A trained contents specialist goes through every line and writes down exactly what each item is, with the brand, model and size whenever we can find them. Then they price a replacement of the same kind and quality, with a link to a comparable product.",
  },
  {
    h: "You review it.",
    p: "You see the whole list before it goes anywhere. Change a count, add something you remembered, or take out anything that isn't right.",
  },
  {
    h: "We stay with it.",
    p: "If your insurer has questions, or you remember more, we update the list. Revisions are included.",
  },
]

const WHY = [
  {
    h: "Every line reviewed by a contents specialist",
    p: "AI helps us work quickly, but a trained contents specialist goes through every item on your list.",
  },
  {
    h: "Built from both sides of the claim",
    p: "Our founder's dad spent 10 years adjusting claims for insurance companies and the last 10 as a public adjuster. We build lists an adjuster can approve.",
  },
  {
    h: "We write down what you actually had",
    p: "If your list says “TV,” the insurance company prices the cheapest TV it can find. If it says “Sony 65-inch,” they price a Sony 65-inch.",
  },
  {
    h: "Your list stays open",
    p: "As you remember more, we add it. You're never stuck with the first version.",
  },
  {
    h: "A report insurers expect",
    p: "Your list arrives as a professional report, room by room, with the evidence behind each item, so it's easier to review and approve.",
  },
  {
    h: "Fair to everyone",
    p: "We don't inflate anything. Every item on a Flow list is something your family owned, because that's the list that holds up.",
  },
]

const FAQ = [
  {
    q: "I already got an advance. Is it worth finishing the list?",
    a: "For many families, the advance covers only part of their contents coverage, and the rest usually needs an itemized list. A short call is the easiest way to see where you stand.",
  },
  {
    q: "I started a list already. Do I have to start over?",
    a: "No. Send us what you have, whether it's a spreadsheet, an app export or a list on paper, and we'll build on it.",
  },
  {
    q: "How long does it take?",
    a: "It depends on the size of the home and what you already have. We'll give you an honest start date and timeline on the call. We work fast, but we don't rush.",
  },
  {
    q: "What do you need from me?",
    a: "Your photos and records, some time with the Memory Jogger, and a review of the finished list. We do the rest.",
  },
  {
    q: "Do you work with my public adjuster or attorney?",
    a: "Yes. We build the list, and they handle your claim.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the size and complexity of your claim. We'll explain our fees on the call, before you commit to anything.",
  },
]

export default function HomeownersPage() {
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
            <a className="link" href="#jogger">Memory Jogger</a>
            <a className="link" href="#faq">Questions</a>
            <a className="link" href="/">For adjusters</a>
            <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener">Book a call</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="dot" /> For families after a fire or other total loss</span>
            <h1 className="hero-h">We handle the contents so you can put your life back together.</h1>
            <p className="hero-sub">
              After a fire or other total loss, your insurer asks for a list of everything you owned. We build that
              list with you, item by item, and price it the way insurers expect. If your insurer has questions, we
              revise it until your contents payment is settled.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary btn-lg" href={BOOKING_URL} target="_blank" rel="noopener">
                Book a free call <Arrow />
              </a>
              <a className="btn btn-secondary btn-lg" href="#jogger">Join the Memory Jogger waitlist</a>
            </div>
            <p className="hero-note">More than 30 Los Angeles families have trusted us with their contents.</p>
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              <img src="/home/homeowner-family.jpg" alt="A family going through their contents checklist together on their phones" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust">
        <div className="wrap trust-inner">
          <span className="stat"><b>$21M+</b><span>in contents value documented</span></span>
          <span className="divider" />
          <span className="stat"><b>100,000+</b><span>items inventoried</span></span>
          <span className="divider" />
          <span className="stat"><b>92%</b><span>of delivered claims paid out</span></span>
          <span className="divider" />
          <span className="stat"><b>Every line</b><span>reviewed by a contents specialist</span></span>
        </div>
      </div>

      {/* WHO WE HELP */}
      <section className="block" id="help">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-eyebrow"><span className="dot" /> who we help</span>
            <h2 className="sec-h">Wherever you are with your list, we can start there.</h2>
          </div>
          <div className="probs">
            {HELP.map((c) => (
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
            <h2 className="sec-h">How it works</h2>
            <p className="sec-sub">We do the heavy lifting. You tell us what you had.</p>
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

      {/* MEMORY JOGGER WAITLIST */}
      <section className="block own" id="jogger">
        <div className="wrap">
          <div className="offer">
            <div className="offer-viz">
              <img src="/home/jogger-phone.jpg" alt="The Memory Jogger kitchen checklist on a phone" />
            </div>
            <div className="offer-copy">
              <span className="sec-eyebrow"><span className="dot" /> the memory jogger</span>
              <h2 className="sec-h">Remember what was in your home, one room at a time.</h2>
              <p className="sec-sub">
                It&apos;s our checklist of more than 12,000 household items, built from real fire claims. Your whole
                family can work on it from their own phones, and it keeps your place, so you can do the kitchen tonight
                and the garage on Saturday. It opens to families soon. Join the waitlist and we&apos;ll email you when
                it does.
              </p>
              <WaitlistForm />
              <a className="textlink" href="/memory-jogger">
                See everything the Memory Jogger does <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FAMILIES CHOOSE US */}
      <section className="block" id="why">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-eyebrow"><span className="dot" /> why families choose us</span>
            <h2 className="sec-h">A person checks every line, and your list stays open.</h2>
          </div>
          <div className="probs three">
            {WHY.map((c) => (
              <div className="prob" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
          <div className="center-link">
            <a className="textlink" href="/sample-report.html">
              See a sample report <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="block alt" id="about">
        <div className="wrap">
          <div className="founder">
            <div className="founder-photo">
              <img src="/home/leland.jpg" alt="Leland Coontz IV, founder of Flow Contents" />
            </div>
            <div className="founder-copy">
              <span className="sec-eyebrow"><span className="dot" /> why we started</span>
              <h2 className="sec-h">We started in a public adjuster&apos;s office.</h2>
              <p>
                My dad was an adjuster for the insurance companies for 10 years, and for the last 10 he&apos;s been a
                public adjuster. After the January 2025 fires he had more families than hours, and every one of them
                needed the same thing: a list of everything they&apos;d lost.
              </p>
              <p>
                I came from tech and thought I could help. I guessed the first family&apos;s list would take a month.
                It took four, because doing it right takes far more detail than anyone expects. We&apos;ve since built
                inventories for more than 30 families in Los Angeles, and we built Flow Contents so families don&apos;t
                have to do this alone.
              </p>
              <p className="founder-sign">Leland Coontz IV, founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="block" id="faq">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-eyebrow"><span className="dot" /> common questions</span>
            <h2 className="sec-h">Questions families ask us.</h2>
          </div>
          <div className="faq">
            {FAQ.map((f, i) => (
              <details className="qa" key={f.q} open={i === 0}>
                <summary>
                  {f.q}
                  <Chevron />
                </summary>
                <div className="ans">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSER */}
      <section className="closer" id="book">
        <div className="wrap">
          <div className="kicker">For homeowners</div>
          <h2>You don&apos;t have to build this list alone.</h2>
          <p>
            Book a free 15-minute call. We&apos;ll look at where you are, tell you honestly whether we can help, and
            give you a start date.
          </p>
          <div className="row">
            <a className="btn btn-primary btn-lg" href={BOOKING_URL} target="_blank" rel="noopener">Book a free call</a>
            <a className="btn btn-ghost-light btn-lg" href="#jogger">Join the waitlist</a>
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
