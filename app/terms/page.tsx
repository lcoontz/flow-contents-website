import type { Metadata } from "next"
import "../home.css"

const TITLE = "Terms of Use | Flow Contents"
const DESCRIPTION =
  "The rules for using the Flow Contents website, the free preview and sample report, and the Memory Jogger checklist."
// A page that sets openGraph or twitter replaces the layout's copy, which is where the share image lives,
// so the image is repeated here. Same block as pageMetadata in lib/seo.ts (the SEO PR).
const SHARE_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Flow Contents: contents inventories for homeowners and public adjusters",
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "website",
    url: "/terms",
    siteName: "Flow Contents",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [SHARE_IMAGE],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
}

const EMAIL = "leland@flowcontents.com"

export default function TermsPage() {
  return (
    <main className="fc-home">
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="wordmark" href="/">
            <span className="fc">FC</span>
            <span className="name">Flow Contents</span>
          </a>
          <nav className="nav-links">
            <a className="link" href="/homeowners">For homeowners</a>
            <a className="link" href="/">For adjusters</a>
          </nav>
        </div>
      </header>

      <article className="legal">
        <p className="draft">Draft for legal review</p>
        <h1>Terms of Use</h1>
        <p className="updated">Last updated: October 22, 2026</p>

        <p>
          These terms are the rules for using the Flow Contents website (flowcontents.com), our free preview and sample
          report, and the Memory Jogger checklist. They are between you and Flow Contents Services LLC
          (&quot;Flow Contents,&quot; &quot;we&quot; or &quot;us&quot;). By using our website or submitting one of our
          forms, you agree to these terms and to our <a href="/privacy">Privacy Policy</a>. If you don&apos;t agree,
          please don&apos;t use them.
        </p>
        <p>
          If you hire us to build a full inventory, the written agreement we make with you or your representative
          covers that work. If it conflicts with these terms, the written agreement wins.
        </p>

        <h2>What we do, and what we don&apos;t</h2>
        <ul>
          <li>
            We build itemized, priced contents inventories after a fire or other loss, for families and for the public
            adjusters, attorneys and other professionals who represent them.
          </li>
          <li>
            We aren&apos;t an insurance company, a public adjuster or a law firm. We don&apos;t give legal, insurance
            or claim advice, and we don&apos;t negotiate claims. Your insurance company decides what it covers and what
            it pays.
          </li>
        </ul>

        <h2>The free preview and sample report</h2>
        <ul>
          <li>
            A preview is an estimate built from the photos you send. It shows the total value, the item count and a
            breakdown by category. Prices are approximate, and values aren&apos;t final until we deliver your final
            report.
          </li>
          <li>
            The sample report is an anonymized report from a real claim, shown as an example. Don&apos;t copy, post or
            resell it.
          </li>
          <li>We can change, limit or stop the free preview at any time, and we can decline a request.</li>
        </ul>

        <h2>What you send us</h2>
        <ul>
          <li>
            You keep ownership of the photos, documents and other information you send us. You confirm that you own
            them or have permission to share them, and that sending them doesn&apos;t break the law or anyone&apos;s
            rights.
          </li>
          <li>
            You give us permission to use what you send to prepare your estimate or inventory, and in the other ways
            our <a href="/privacy">Privacy Policy</a> describes.
          </li>
          <li>Don&apos;t send anything illegal or harmful, and don&apos;t send files that contain viruses or malware.</li>
        </ul>

        <h2>Using our website</h2>
        <p>Use the website only for lawful purposes. Please don&apos;t:</p>
        <ul>
          <li>try to break into it, overload it or interfere with how it works</li>
          <li>copy or scrape it in bulk</li>
          <li>use it to send spam or fake requests</li>
          <li>pretend to be someone else</li>
        </ul>

        <h2>Accounts and the Memory Jogger</h2>
        <p>
          If we give you access to the Memory Jogger or another account, keep your sign-in private. You&apos;re
          responsible for what happens under your account, including what family members you invite do with it. Tell us
          right away if you think someone else is using it. We can suspend or close an account that breaks these terms.
        </p>

        <h2>Our content</h2>
        <p>
          The website, our software, the sample report, and our text, images and logos belong to Flow Contents or the
          companies that license them to us. Please don&apos;t copy them, resell them or use them to build a competing
          product. Inventories and reports we deliver to you are yours to use for your claim, including to share with
          your insurance company and the professionals who represent you.
        </p>

        <h2>No guarantees</h2>
        <p>
          We work hard to make every inventory accurate, but the website, previews and estimates are provided
          &quot;as is&quot; and &quot;as available.&quot; We can&apos;t promise a particular claim outcome or payment,
          or that your insurance company will accept an inventory or a price. Our prices come from comparable products
          and can differ from the ones your insurance company uses.
        </p>

        <h2>Limit on our liability</h2>
        <p>
          To the extent the law allows, Flow Contents isn&apos;t responsible for indirect or consequential losses, for
          lost profits, or for a claim payment that is lower, late or denied. For the website and the free preview, our
          total liability to you is limited to $100. If you hire us, the limit in your written agreement applies
          instead.
        </p>

        <h2>Links to other sites</h2>
        <p>
          Our website links to other sites, such as TidyCal for booking a call. We don&apos;t control those sites and
          aren&apos;t responsible for them.
        </p>

        <h2>Changes and ending access</h2>
        <p>
          We can change these terms or the website at any time. When we change the terms, we&apos;ll update the date at
          the top, and if you keep using the website after that, you accept the changes. We can suspend your access to
          the website or the free preview if you break these terms.
        </p>

        <h2>Contact us</h2>
        <p>
          Flow Contents Services LLC
          <br />
          Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <br />
          Phone: <a href="tel:+17146752710">(714) 675-2710</a>
        </p>
      </article>

      <footer className="site">
        <div className="wrap foot-inner">
          <a className="wordmark" href="/">
            <span className="fc">FC</span>
            <span className="name">Flow Contents</span>
          </a>
          <div className="foot-meta">
            <a href="/">flowcontents.com</a> &nbsp;·&nbsp; contents inventories for homeowners and{" "}
            <a href="/">public adjusters</a> &nbsp;·&nbsp; <a href="/privacy">Privacy</a> &nbsp;·&nbsp;{" "}
            <a href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
