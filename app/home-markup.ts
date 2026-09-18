// Flow Contents homepage markup (generated from homepage-draft/index.html)
// eslint-disable-next-line
export const HOME_HTML = String.raw`
<!-- ============ NAV ============ -->
<header class="nav">
  <div class="wrap nav-inner">
    <a class="wordmark" href="#top"><span class="fc">FC</span><span class="name">Flow Contents</span></a>
    <nav class="nav-links">
      <a class="link" href="#how">How it works</a>
      <a class="link" href="#formats">Reports</a>
      <a class="link" href="#sample">Sample report</a>
      <a class="link" href="#faq">FAQ</a>
      <a class="btn btn-primary" href="#sample">Get the sample report</a>
    </nav>
  </div>
</header>

<!-- ============ HERO ============ -->
<section class="hero" id="top">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <span class="eyebrow"><span class="dot"></span> State-of-the-art contents inventory for claims</span>
      <h1 class="hero-h">Every item documented and priced accurately.</h1>
      <p class="hero-sub">
        You want the maximum settlement and the list to back it up. Our in-house contents
        specialists return 3,000 to 5,000 line items per claim, each with a replacement product
        link, RCV, and ACV. Filed in 72 hours.
      </p>
      <div class="hero-ctas">
        <a class="btn btn-primary btn-lg" href="#sample">Get the sample report
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a class="btn btn-secondary btn-lg" href="https://tidycal.com/leland/intro-call-flow-contents-ai-w-leland" target="_blank" rel="noopener">Book a 15-min call</a>
      </div>
      <p class="hero-note"><b>Guaranteed in 72 hours</b>, or your money back.</p>
    </div>

    <div class="hero-visual">
      <!-- Borderless frame. Hero promo video. -->
      <div class="player">
        <div class="screen">
          <video
            class="hero-video"
            src="/flow-contents-promo.mp4"
            poster="/flow-contents-promo-poster.jpg"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            controls
          ></video>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ TRUST STRIP ============ -->
<div class="trust">
  <div class="wrap trust-inner">
    <span class="stat"><b>$12M+</b><span>in contents value documented</span></span>
    <span class="divider"></span>
    <span class="stat"><b>70,000+</b><span>items inventoried</span></span>
    <span class="divider"></span>
    <span class="stat"><b>72hr</b><span>guaranteed turnaround</span></span>
    <span class="divider"></span>
    <span class="stat"><b>100%</b><span>specialist-reviewed</span></span>
  </div>
</div>

<!-- ============ ONE UPLOAD, MULTIPLE FORMATS (rotating cards) ============ -->
<section class="block" id="formats">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-eyebrow"><span class="dot"></span> what you get</span>
      <h2 class="sec-h">We turn one set of photos into every report the claim needs.</h2>
      <p class="sec-sub">You send the photos once, and we send the same reviewed inventory back as PDF reports and an Excel workbook.</p>
    </div>

    <div class="fmt-viewport">
      <div class="fmt-track" id="fmtTrack">

        <!-- 1 · branded settlement report -->
        <div class="fmt-frame"><div class="report-slide">
          <div class="report-paper"><img src="/home/reports/r1.png" alt="Flow Contents settlement report (PDF)" /></div>
          <div class="report-desc">
            <span class="rtag">PDF · settlement report</span>
            <h3>Carrier-ready settlement report</h3>
            <p>This is the classic deliverable. It has a cover page, a full settlement summary, and section-numbered line-item detail, formatted to hold up under carrier review.</p>
            <ul>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> RCV, sales tax, depreciation, ACV, and net claim</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Section-numbered line-item detail</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Print-ready PDF for the claim file</li>
            </ul>
          </div>
        </div></div>

        <!-- 2 · photo-backed -->
        <div class="fmt-frame"><div class="report-slide">
          <div class="report-paper"><img src="/home/reports/r2.png" alt="Photo-backed inventory (PDF)" /></div>
          <div class="report-desc">
            <span class="rtag">PDF · photo-backed</span>
            <h3>Photo-backed inventory</h3>
            <p>Every line is ranked by value and backed by the photo that proves the item was there, which makes it hard for a carrier to wave away.</p>
            <ul>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> A photo on every line item</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Ranked by total replacement value</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Quantity and value per item</li>
            </ul>
          </div>
        </div></div>

        <!-- 3 · coverage & category -->
        <div class="fmt-frame"><div class="report-slide">
          <div class="report-paper"><img src="/home/reports/r3.png" alt="Coverage and category breakdown (PDF)" /></div>
          <div class="report-desc">
            <span class="rtag">PDF · coverage &amp; category</span>
            <h3>Coverage &amp; category breakdown</h3>
            <p>This is the analysis adjusters respond to. It shows coverage sublimits, category and room distribution, and age-bracket depreciation, all computed from the inventory.</p>
            <ul>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Coverage sublimits vs. claim totals</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Category &amp; room distribution</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Age-bracket depreciation analysis</li>
            </ul>
          </div>
        </div></div>

        <!-- 4 · excel workbook -->
        <div class="fmt-frame"><div class="report-slide">
          <div class="report-paper"><img src="/home/reports/r4.png" alt="Excel workbook (XLSX)" /></div>
          <div class="report-desc">
            <span class="rtag">Excel · workbook</span>
            <h3>Editable line-item workbook</h3>
            <p>This is the whole claim as a spreadsheet. Each room has its own tab, every line is sortable, and the live RCV / ACV formulas let you reprice on the spot.</p>
            <ul>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> One sheet per room, plus summary tabs</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Live RCV / ACV formulas</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Sort, filter, and edit any line</li>
            </ul>
          </div>
        </div></div>

      </div>
    </div>
    <div class="fmt-dots" id="fmtDots">
      <button class="d on" aria-label="Settlement report"></button>
      <button class="d" aria-label="Photo-backed inventory"></button>
      <button class="d" aria-label="Coverage and category breakdown"></button>
      <button class="d" aria-label="Excel workbook"></button>
    </div>
  </div>
</section>

<!-- ============ LIVE DASHBOARD ============ -->
<section class="block alt" id="dashboard">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-eyebrow"><span class="dot"></span> live dashboard</span>
      <h2 class="sec-h">You can edit any item and choose its price.</h2>
      <p class="sec-sub">You and your client log in to the same workspace our specialists use, where you can correct any line and choose the replacement product from a ranked list.</p>
    </div>

    <div class="dash">
      <!-- editor -->
      <div class="dash-pane editor">
        <div class="dash-label">Item · editing</div>
        <div class="item-photo"><img src="/home/source-photo.jpg" alt="Source photo with detected items" />
          <div class="det" style="left:6.2%;top:7.2%;width:26.3%;height:44.5%"></div>
          <div class="det" style="left:34.5%;top:8.5%;width:5%;height:26%"></div>
          <div class="det" style="left:43.5%;top:5.2%;width:12.7%;height:16.3%"></div>
          <div class="det" style="left:41.5%;top:33.5%;width:11.2%;height:21%"></div>
          <div class="det" style="left:58.7%;top:19%;width:21.3%;height:24.8%"></div>
          <div class="det" style="left:31.7%;top:36.5%;width:3%;height:14%"></div>
          <div class="det" style="left:38%;top:41.2%;width:2.7%;height:10.3%"></div>
          <div class="det" style="left:6%;top:56.2%;width:10.7%;height:12.3%"></div>
          <div class="det" style="left:17.2%;top:51.2%;width:22.5%;height:32.3%"></div>
          <div class="det" style="left:21.7%;top:81.2%;width:4.1%;height:9.3%"></div>
          <div class="det" style="left:28.7%;top:83%;width:5.8%;height:11.5%"></div>
          <div class="det" style="left:40.8%;top:58.8%;width:10.7%;height:21.7%"></div>
          <div class="det" style="left:52.2%;top:59%;width:2.8%;height:8.8%"></div>
          <div class="det" style="left:64.7%;top:71.2%;width:17.6%;height:17%"></div>
          <div class="det sel" style="left:57.5%;top:42.5%;width:20.2%;height:29.3%"><span class="det-label">Beats wireless headphones</span></div>
        </div>
        <div class="field"><label>Item name</label>
          <div class="control focus"><span>Beats wireless headphones</span><span class="caret">edit</span></div></div>
        <div class="field-row">
          <div class="field"><label>Room</label><div class="control"><span>Home Office</span><span class="caret">▾</span></div></div>
          <div class="field"><label>Quantity</label><div class="control"><span>1</span><span class="caret">▾</span></div></div>
        </div>
        <div class="field-row">
          <div class="field"><label>Age</label><div class="control"><span>4 yrs</span><span class="caret">▾</span></div></div>
          <div class="field"><label>Condition</label><div class="control"><span>Good</span><span class="caret">▾</span></div></div>
        </div>
        <div class="field-row">
          <div class="field"><label>Category</label><div class="control"><span>Electronics</span><span class="caret">▾</span></div></div>
          <div class="field"><label>Xactimate code</label><div class="control"><span>CEL AUDHS</span><span class="caret">▾</span></div></div>
        </div>
      </div>

      <!-- price picker: scrolling matrix of platform-style cards, pinned foot -->
      <div class="dash-pane picker">
        <div class="picker-head"><span class="t">Replacement price</span><span class="n">6 candidates</span></div>
        <div class="pscroll">
          <div class="pgrid">
            <div class="pcard sel">
              <div class="pcheck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
              <img src="/home/products/p1.webp" alt="Beats Solo 4 wireless" />
              <div class="pov"><div class="ptitle">Beats Solo 4 wireless</div><div class="pmeta"><span class="pstore">Apple</span><span class="pprice">$121</span></div></div>
            </div>
            <div class="pcard">
              <div class="pcheck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
              <img src="/home/products/p2.webp" alt="Beats Studio Pro" />
              <div class="pov"><div class="ptitle">Beats Studio Pro</div><div class="pmeta"><span class="pstore">Best Buy</span><span class="pprice">$170</span></div></div>
            </div>
            <div class="pcard">
              <div class="pcheck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
              <img src="/home/products/p3.webp" alt="Sony WH-CH520" />
              <div class="pov"><div class="ptitle">Sony WH-CH520</div><div class="pmeta"><span class="pstore">Amazon</span><span class="pprice">$40</span></div></div>
            </div>
            <div class="pcard">
              <div class="pcheck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
              <img src="/home/products/p4.webp" alt="Bose QuietComfort" />
              <div class="pov"><div class="ptitle">Bose QuietComfort</div><div class="pmeta"><span class="pstore">Bose</span><span class="pprice">$199</span></div></div>
            </div>
            <div class="pcard">
              <div class="pcheck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
              <img src="/home/products/p5.webp" alt="JBL Tune 720BT" />
              <div class="pov"><div class="ptitle">JBL Tune 720BT</div><div class="pmeta"><span class="pstore">Target</span><span class="pprice">$70</span></div></div>
            </div>
            <div class="pcard">
              <div class="pcheck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
              <img src="/home/products/p6.webp" alt="Anker Soundcore Q20i" />
              <div class="pov"><div class="ptitle">Anker Soundcore Q20i</div><div class="pmeta"><span class="pstore">Amazon</span><span class="pprice">$50</span></div></div>
            </div>
          </div>
        </div>
        <div class="picker-foot">
          <div class="totals">
            <div class="kv"><div class="k">RCV</div><div class="v">$121</div></div>
            <div class="kv"><div class="k">Depreciation</div><div class="v">−$42</div></div>
            <div class="kv"><div class="k">ACV</div><div class="v" style="color:#1d4ed8">$79</div></div>
          </div>
          <span class="btn btn-primary" aria-hidden="true">Use this price</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ HOW IT WORKS ============ -->
<section class="block" id="how">
  <div class="wrap how">
    <div class="how-head">
      <h2 class="sec-h">How it works</h2>
      <p class="sec-sub">You send us the photos and we return a finished, priced report within 72 hours.</p>
    </div>
    <ol class="steps">
      <li class="step">
        <div class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4m0 0L8 8m4-4l4 4"/><path d="M20 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2"/></svg></div>
        <div class="sbody">
          <div class="sn">Step 1 · Hours 0 to 48</div>
          <h4>You upload your photos.</h4>
          <p>Send whatever your team or client captured, including phone photos, video stills, walk-throughs, and drone footage. Our software finds every visible item, matches it to a replacement product, and calculates RCV and ACV.</p>
        </div>
      </li>
      <li class="step">
        <div class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg></div>
        <div class="sbody">
          <div class="sn">Step 2 · Hours 24 to 60</div>
          <h4>Our team reviews every item.</h4>
          <p>A specialist checks each line, corrects the matches, adds anything the software missed, and confirms age and condition. No report goes out until a person has reviewed all of it.</p>
        </div>
      </li>
      <li class="step">
        <div class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg></div>
        <div class="sbody">
          <div class="sn">Step 3 · Hour 72</div>
          <h4>You download the report.</h4>
          <p>You get a carrier-ready PDF and an Excel workbook, formatted to go straight into your claim file.</p>
        </div>
      </li>
    </ol>
  </div>
</section>

<!-- ============ SAMPLE REPORT (emailed) ============ -->
<section class="block alt" id="sample">
  <div class="wrap">
    <div class="offer">
      <div class="offer-copy">
        <span class="sec-eyebrow"><span class="dot"></span> sample report</span>
        <h2 class="sec-h">Get a sample report emailed to you.</h2>
        <p class="sec-sub">This is an anonymized report from a real claim. Enter your email and we'll send you the PDF and the Excel workbook to keep.</p>
        <form class="email-form" id="sampleForm">
          <div class="efield"><input type="email" name="email" placeholder="you@firm.com" aria-label="Work email" required /><button class="btn btn-primary" type="submit">Email it to me</button></div>
          <p class="fineprint" id="sampleStatus">We'll send it within seconds, and we won't send you spam.</p>
        </form>
        <a class="textlink" href="/sample-report.html">Or open the sample in your browser first
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
      <div class="offer-viz"><img src="/home/broll/sample1.jpg" alt="Reviewing the sample report" /></div>
    </div>
  </div>
</section>

<!-- ============ BUILD YOUR OWN PREVIEW ============ -->
<section class="block own" id="preview">
  <div class="wrap">
    <div class="offer">
      <div class="offer-viz"><img src="/home/broll/sample2.jpg" alt="Uploading your claim photos" /></div>
      <div class="offer-copy">
        <span class="sec-eyebrow"><span class="dot"></span> use your own photos</span>
        <h2 class="sec-h">Want to build your own report?</h2>
        <p class="sec-sub">Upload photos from one of your claims and we'll build a real preview from that loss. We itemize and price what's in your photos, then email the preview back to you.</p>
        <a class="btn btn-white btn-lg" href="/preview">Get a preview from your photos
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <p class="fineprint">Your photos stay private, and there's no obligation.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ FAQ ============ -->
<section class="block" id="faq">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-eyebrow"><span class="dot"></span> common questions</span>
      <h2 class="sec-h">Questions public adjusters ask us.</h2>
    </div>
    <div class="faq">
      <details class="qa" open>
        <summary>What photos do you actually need?<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
        <div class="ans">We need whatever you or your client already have. iPhone walk-throughs, drone footage, individual room photos, and video stills all work. The denser the coverage, the more items we can extract, but there's no proprietary capture protocol to learn.</div>
      </details>
      <details class="qa">
        <summary>What if my client doesn't have pre-loss photos?<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
        <div class="ans">Most don't, and that's fine. We work from post-loss photos plus structured client interviews. For total losses, we can also pull comparable rooms from real estate listings, social media archives, and prior insurance documentation to reconstruct the inventory.</div>
      </details>
      <details class="qa">
        <summary>How accurate is the inventory? Won't it invent items?<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
        <div class="ans">Our content specialists review every single line before it leaves the building, which is the whole point of the hybrid process. We don't promise 100% accuracy, but our reports have fewer duplicates and errors than any other report we've tested. If you find a more accurate one elsewhere, we'll make it right.</div>
      </details>
      <details class="qa">
        <summary>What's your turnaround on revisions?<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
        <div class="ans">Up to three revision passes are included, each turned in 24 to 48 hours. Most claims close inside the included revisions.</div>
      </details>
      <details class="qa">
        <summary>How is this different from Enservio or Exact Contents?<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
        <div class="ans">Enservio and Exact Contents are carrier-side vendors, so they work for the insurance company. We work for you. Our engine and review process are calibrated to extract every defensible attribute that drives the line item up the LKQ ladder, not down it.</div>
      </details>
      <details class="qa">
        <summary>What kinds of claims do you take?<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
        <div class="ans">We take any first-party residential contents claim, including smoke, water, fire, contamination, mold, and vandalism. We take commercial claims case by case.</div>
      </details>
      <details class="qa">
        <summary>Who owns the data and the report?<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary>
        <div class="ans">You and your client. We retain working copies for revision support and case history, but the deliverable is yours to use, share, and file as you see fit. No carrier ever sees your file from us.</div>
      </details>
    </div>
  </div>
</section>

<!-- ============ PROBLEM (end) ============ -->
<section class="block alt" id="problem">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-eyebrow"><span class="dot"></span> the problem</span>
      <h2 class="sec-h">Contents claims are the bottleneck no one has solved.</h2>
      <p class="sec-sub">Reading damage is your job. Pricing 5,000 items shouldn't be.</p>
    </div>
    <div class="probs">
      <div class="prob"><h3>Generic lists, minimum payouts</h3><p>Carrier software values "toaster" at $4.88 and "Breville Smart Toaster (BTA840XL)" at $149.95. Your client's list looks like the first one, and they leave 70% on the table without ever knowing.</p></div>
      <div class="prob"><h3>Weeks to compile, days to file</h3><p>A traditional contents list takes 4 to 5 weeks to assemble. Meanwhile your client is sleeping on a friend's couch and the carrier is asking why nothing has been submitted.</p></div>
      <div class="prob"><h3>Carriers reject unverified lines</h3><p>If a line item doesn't have a comparable replacement, a real product link, and quantifiable features, the carrier values it at the lowest match in the database, then pushes back when you challenge it.</p></div>
      <div class="prob"><h3>The task usually lands on the homeowner</h3><p>Contents claims take weeks, and the impossible task often falls to the homeowner. Send it to us instead. Your clients get a more complete, defensible list than anyone could build alone, and you get your time back.</p></div>
    </div>
  </div>
</section>

<!-- ============ GUARANTEE (end) ============ -->
<section class="block" id="guarantee">
  <div class="wrap">
    <div class="guarantee">
      <div class="gtop">
        <span class="shield"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg></span>
        <div>
          <div class="sec-eyebrow" style="margin-bottom:6px;">the guarantee</div>
          <h3>72 hours. Best list you've ever seen. Or your money back.</h3>
        </div>
      </div>
      <div class="gcards">
        <div class="gcard"><h4>Late = full refund</h4><p>If we don't deliver your complete, carrier-ready report within 72 hours of photo handoff, you get every dollar back. No prorating. No clauses.</p></div>
        <div class="gcard"><h4>Not the best list you've seen?</h4><p>Open the file. If it isn't sharper, more complete, and more defensible than any contents list you've ever filed, tell us how to make it better. We fix it or refund it. Your sole judgment.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- ============ CLOSER ============ -->
<section class="closer" id="book">
  <div class="wrap">
    <div class="kicker">Made for public adjusters</div>
    <h2>Stop leaving money off the claim.</h2>
    <p>Send us the photos from one claim. We'll send back a real report so you can see the difference for yourself.</p>
    <div class="row">
      <a class="btn btn-primary btn-lg" href="#sample">Get the sample report</a>
      <a class="btn btn-ghost-light btn-lg" href="https://tidycal.com/leland/intro-call-flow-contents-ai-w-leland" target="_blank" rel="noopener">Book a 15-min call</a>
    </div>
  </div>
</section>

<!-- ============ FOOTER ============ -->
<footer class="site">
  <div class="wrap foot-inner">
    <a class="wordmark" href="#top"><span class="fc">FC</span><span class="name">Flow Contents</span></a>
    <div class="foot-meta"><a href="https://flowcontents.com">flowcontents.com</a> &nbsp;·&nbsp; contents settlement reports, made for public adjusters</div>
  </div>
</footer>
`;
