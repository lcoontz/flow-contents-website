import type { Metadata } from "next"
import "../home.css"

export const metadata: Metadata = {
  title: "Privacy Policy | Flow Contents",
  description:
    "What Flow Contents collects when you use our website, web app, Memory Jogger and mobile apps, how we use it, who we share it with, and how to delete it.",
  alternates: { canonical: "/privacy" },
}

const EMAIL = "leland@flowcontents.com"

export default function PrivacyPage() {
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
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: October 22, 2026</p>

        <p>
          Flow Contents Services LLC (&quot;Flow Contents,&quot; &quot;we&quot; or &quot;us&quot;) builds itemized contents inventories after a fire or other loss, for families and for the
          public adjusters, attorneys and other professionals who represent them. This policy explains what we collect
          and what we do with it. It covers our website (flowcontents.com), our web app (app.flowcontents.com), the
          Memory Jogger checklist, and our iOS and Android apps.
        </p>
        <p>
          If you have a question or a request, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call{" "}
          <a href="tel:+17146752710">(714) 675-2710</a>.
        </p>

        <h2>What we collect</h2>
        <h3>Information you give us</h3>
        <ul>
          <li>
            Contact details, such as your name, email address and phone number, when you ask for a sample report, join
            a waitlist, send us your claim or create an account.
          </li>
          <li>
            Claim details, such as the property address, the type and date of the loss, your insurance company, your
            policy details and coverage amounts.
          </li>
          <li>
            Photos, videos, receipts, order history, statements, lists and other documents you send us so we can build
            your inventory. Photo files can carry information from your camera, such as the date and the place a photo
            was taken.
          </li>
          <li>
            Information about your household that helps us build a complete list, such as who lives in the home
            (including children&apos;s first names and ages) and how your family shops.
          </li>
          <li>
            What your family enters in the Memory Jogger: the items you check, quantities, notes, photos, documents and
            voice notes, along with the name of the family member who made each change.
          </li>
          <li>
            Messages and comments you send us. If we record a call with you, we keep the recording and a transcript.
          </li>
        </ul>

        <h3>Information from others</h3>
        <ul>
          <li>
            When a public adjuster, attorney, contractor or other representative hires us for your claim, they share
            information about you, your home and your loss, like the details listed above.
          </li>
          <li>
            We collect business contact details of insurance and restoration professionals from public sources and lead
            lists so we can tell them about our services.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            When you use our website or web app, we record how you use it: the pages you view, what you click, your
            device and browser, and your approximate location based on your IP address. We also record sessions, and a
            recording can show what was on your screen. We use PostHog for this, and PostHog sets a cookie so it can
            recognize your browser.
          </li>
          <li>
            Our website also uses the LinkedIn Insight Tag. It tells LinkedIn which of our pages you visit and sets
            LinkedIn cookies, so we can measure our LinkedIn ads and show our ads to people who visited our site. It
            runs only on our public website, not in our web app.
          </li>
          <li>Vercel Analytics counts visits to our website without using cookies.</li>
          <li>
            Our mobile apps record basic usage, such as which screens you open, and keep you signed in by storing your
            session securely on your device. They don&apos;t use your camera, microphone, photos or location unless a
            feature needs it and you allow it.
          </li>
        </ul>

        <h2>How we use it</h2>
        <ul>
          <li>
            To build, price and deliver your inventory and reports, and to revise them when you or your insurance company
            ask.
          </li>
          <li>To run your account and the Memory Jogger, including showing your family who added what.</li>
          <li>To talk with you about your claim, your account and our services.</li>
          <li>
            To check our work, improve our tools, and train and test the contents specialists who build inventories, including
            people applying to work with us, using examples from past inventories.
          </li>
          <li>To keep our services secure and prevent abuse.</li>
          <li>To meet legal obligations and to defend legal claims.</li>
        </ul>
        <p>
          We don&apos;t sell your personal information. Visits to our public website, through the LinkedIn Insight Tag,
          are the only use of your information for advertising. We never use your claim information, your photos or what
          you enter in our forms for advertising.
        </p>

        <h2>AI and automated tools</h2>
        <p>
          We use artificial intelligence to find the items in your photos, describe them, search for comparable products
          and suggest prices. Our contents specialists review the inventory before we deliver it. To do this we send photos,
          cropped images of items and item descriptions to these services:
        </p>
        <ul>
          <li>
            Google&apos;s Gemini models on Vertex AI. Gemini also turns Memory Jogger voice notes into text, and we
            don&apos;t keep the recordings.
          </li>
          <li>OpenAI and Anthropic, for some identification, search and assistant features.</li>
          <li>
            Product search services (Serper, Firecrawl, and SerpAPI, which uses Google Lens). They receive item
            descriptions, product links and cropped images of single items so they can find matching products and
            prices.
          </li>
        </ul>
        <p>
          Google, OpenAI and Anthropic handle this data under their business terms, which don&apos;t allow them to use
          it to train their models.
        </p>

        <h2>Who we share it with</h2>
        <ul>
          <li>
            <strong>The people working on your claim.</strong> We deliver inventories and reports to you and to the
            representative who hired us, and we share them with your insurance company when you or your representative
            ask us to.
          </li>
          <li>
            <strong>Our team and contractors.</strong> Our contents specialists, including contractors who work outside the
            United States, see your photos and documents so they can build and price your inventory.
          </li>
          <li>
            <strong>Service providers</strong> that host, process or deliver data for us:
            <ul>
              <li>Google Cloud and Firebase for hosting, our database, file storage and sign-in</li>
              <li>Google Workspace for email, documents and spreadsheets</li>
              <li>Vercel for website and app hosting</li>
              <li>PostHog for analytics and session recordings</li>
              <li>Resend for email delivery</li>
              <li>WhatsApp, through Maytapi, for messages within our team</li>
              <li>Stripe for payments (we never see your full card number)</li>
              <li>Fireflies.ai for call recordings and transcripts</li>
              <li>Instantly for email to insurance professionals</li>
              <li>the AI and product search services listed above</li>
            </ul>
          </li>
          <li>
            <strong>For legal reasons.</strong> When the law requires it, to respond to legal process, or to protect the
            rights and safety of our clients, our team and others.
          </li>
          <li>
            <strong>If the business changes hands.</strong> If Flow Contents merges, is acquired or sells its assets,
            your information may transfer as part of that deal, and this policy will keep applying to it.
          </li>
        </ul>

        <h2>How long we keep it</h2>
        <p>
          We keep claim information, including photos, inventories and reports, while we work on your claim and
          afterwards, because an insurance company can ask questions, request revisions or dispute a claim long after
          it&apos;s submitted. We keep contact details until you ask us to remove them. You can ask us to delete your
          information at any time (see below). After we delete something, a copy can remain in our backups for up to
          about three months before it&apos;s overwritten.
        </p>

        <h2>Your choices and rights</h2>
        <ul>
          <li>
            <strong>See, correct or delete your information.</strong> Email us to get a copy of your information, fix
            it, or delete it, including deleting your account. We&apos;ll confirm it&apos;s you and respond within 30
            days. If a representative hired us for your claim, we may let them know about your request. We may need to
            keep some information, for example to finish work you&apos;ve asked for, to meet a legal obligation or to
            resolve a dispute.
          </li>
          <li>
            <strong>Marketing email.</strong> You can ask us to stop sending marketing email at any time by replying to
            one or emailing us. We&apos;ll still send messages about work you&apos;ve asked us to do.
          </li>
          <li>
            <strong>Cookies.</strong> You can block or delete cookies in your browser settings, and the website still
            works without them. We don&apos;t currently respond to browser &quot;Do Not Track&quot; signals.
          </li>
          <li>
            <strong>State privacy rights.</strong> Depending on where you live, including California, you may have the
            right to know what we collect about you, to have it corrected or deleted, and not to be treated differently
            for using these rights. We honor these requests from everyone, wherever they live.
          </li>
        </ul>

        <h2>Children</h2>
        <p>
          Our services aren&apos;t directed to children under 13, and we don&apos;t knowingly collect information
          directly from them. Families may tell us about children in the household, and photos of a home can show
          children. We use that information to build the family&apos;s inventory. If you think a child has given us
          information directly, contact us and we&apos;ll delete it.
        </p>

        <h2>Security</h2>
        <p>
          Your data is stored on Google Cloud, which encrypts it in transit and at rest. Inside our app, only our team
          and the contractors who work on claims can see client data. Some files, such as photos in a report, open from a private link
          without signing in, so share report links only with people you trust. No way of storing or sending data is
          completely secure, so we can&apos;t guarantee it.
        </p>

        <h2>Where your data is processed</h2>
        <p>
          We&apos;re based in the United States, and our main systems are in the US. Some of our providers process data
          in other countries, and some of our contents specialists work outside the US.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          When we change this policy, we&apos;ll update the date at the top. If a change is significant, we&apos;ll tell
          you by email or in the app.
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
