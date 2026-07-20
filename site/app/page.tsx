"use client";

import { useState } from "react";

const repositoryUrl = "https://github.com/bilbop1/moneyprinter-md";
const kofiUrl = "https://ko-fi.com/bilbop";
const installCommand = "npx skills add bilbop1/moneyprinter-md";

const routes = [
  ["Starting from zero", "Inventory real skills and one reachable buyer privately; prepare a fit note before any approved contact."],
  ["Local service", "Audit one week of missed-call or estimate-follow-up records privately before proposing any customer contact."],
  ["Professional expertise", "Map one bounded diagnostic and its qualified-review boundary before interviewing or pricing it."],
  ["Creator / ecommerce", "Audit one owned offer path and current policy constraints before proposing a live conversion test."],
  ["Existing operator", "Baseline one leaking handoff privately; change live delivery only after guardrails and rollback are approved."],
];

const flow = [
  "Permission",
  "14-day scan",
  "Confirm",
  "Prioritize",
  "Offer",
  "Payable test",
  "Acquire",
  "Deliver",
  "Receipt",
  "Rerank",
];
const evidence = [
  "Cash collected",
  "Revenue contracted",
  "Revenue booked",
  "Pipeline signal",
  "Estimated economic value",
  "Simulation",
  "Unverified anecdote",
];
const skills = [
  ["moneyprinter", "Scan the work, confirm the read, and keep the cash-first route moving."],
  ["opportunity-radar", "Find a buyer-adjacent constraint worth testing."],
  ["offer-engine", "Make the exchange specific and bounded."],
  ["payable-test", "Ask for the smallest real payment."],
  ["ethical-acquisition", "Reach people without turning outreach into spam."],
  ["delivery-proof", "Do the work and preserve acceptance evidence."],
  ["cashflow-review", "Review what changed before making another claim."],
];

export default function Home() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "manual">("idle");

  async function copyInstall() {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopyState("copied");
    } catch {
      setCopyState("manual");
    }
  }

  const copyLabel = copyState === "copied" ? "Copied" : copyState === "manual" ? "Select command" : "Copy install";

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header" aria-label="MoneyPrinter navigation">
        <a className="wordmark" href="#hero" aria-label="MoneyPrinter.md home">MoneyPrinter<span>.md</span></a>
        <nav aria-label="Section navigation">
          <a href="#proof">Proof</a><a href="#flow">Method</a><a href="#compatibility">Compatibility</a>
        </nav>
        <span className="release-mark">0.1.0-rc.3</span>
      </header>

      <main id="main-content">
        <section id="hero" className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true">◆</span> WITH PERMISSION / RECEIPTS FIRST</p>
            <h1 id="hero-title">Your last 14 days are already the brief.</h1>
            <p className="lede">MoneyPrinter scans every detected AI CLI and GUI it can access, asks for one confirmation, then gets to work.</p>
            <p className="hero-note">It separates receipts from hype, picks the strongest cash-first route, and keeps moving through the offer, payable test, acquisition, delivery, and rerank.</p>
            <div className="install-control" aria-label="Install command">
              <code>{installCommand}</code>
              <button type="button" onClick={copyInstall} aria-label={`${copyLabel}: ${installCommand}`}>{copyLabel}</button>
            </div>
            <p className="copy-status" aria-live="polite">{copyState === "manual" ? "Clipboard unavailable — the command stays selectable." : copyState === "copied" ? "Command copied to clipboard." : "Install all seven skills from the public repository."}</p>
            <div className="hero-controls">
              <a className="text-control" href={repositoryUrl} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a>
              <a className="text-control" href="#method">Read the method <span aria-hidden="true">↓</span></a>
            </div>
            <p className="disclaimer">No guaranteed income. No fake benchmark dollars. No autonomous spam.</p>
          </div>
          <aside className="receipt hero-receipt" aria-label="MoneyPrinter scan receipt preview">
            <div className="receipt-top"><span>MP / 14-DAY SCAN</span><span>READY TO CONFIRM</span></div>
            <div className="receipt-total"><small>Accessible history window</small><strong>14 DAYS</strong><em>detected + permitted sources</em></div>
            <p className="receipt-warning">Coverage names every scanned, empty, blocked, unsupported, or excluded source.</p>
            <div className="receipt-rule" />
            <dl><div><dt>Permission</dt><dd>One scoped grant</dd></div><div><dt>Confirm</dt><dd>One correction pass</dd></div><div><dt>Next</dt><dd>Get to work</dd></div></dl>
            <div className="receipt-stamp">RERANK</div>
          </aside>
        </section>

        <section id="proof" className="section-shell split-section" aria-labelledby="proof-title">
          <div><p className="section-label">01 / EVIDENCE, NOT VIBES</p><h2 id="proof-title">Name the evidence before you name the win.</h2><p>A receipt is the smallest durable unit of learning: who paid, what changed hands, what it cost to deliver, and what should be tested next.</p></div>
          <div className="evidence-grid" aria-label="Evidence labels">
            {evidence.map((item, index) => <div className={`evidence evidence-${index}`} key={item}><span>0{index + 1}</span>{item}</div>)}
          </div>
        </section>

        <section id="routes" className="section-shell" aria-labelledby="routes-title">
          <div className="section-heading"><div><p className="section-label">02 / PICK A REAL START</p><h2 id="routes-title">Five starting points. One credible next step.</h2></div><p>Routes are not identities. Start with the nearest real asset, keep the first step private when facts are missing, and earn the right to test.</p></div>
          <ol className="route-list">{routes.map(([title, test], index) => <li key={title}><span className="route-number">0{index + 1}</span><div><h3>{title}</h3><p>{test}</p></div><span className="route-arrow" aria-hidden="true">↗</span></li>)}</ol>
        </section>

        <section id="flow" className="section-shell flow-section" aria-labelledby="flow-title">
          <p className="section-label">03 / THE LOOP</p><h2 id="flow-title">It does not stop at ranking the work.</h2>
          <p className="flow-copy">The scan ends with one confirmation. The run does not. MoneyPrinter keeps doing the private work until an exact external action needs approval, then records the result and reranks.</p>
          <ol className="flow-strip">{flow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
        </section>

        <section id="receipts" className="section-shell receipts-section" aria-labelledby="receipts-title">
          <div className="section-heading"><div><p className="section-label">04 / SEVEN SKILLS</p><h2 id="receipts-title">Each move earns its place by making the next receipt clearer.</h2></div><p>Not a funnel. Not a content calendar. A sequence that keeps an agent close to a human decision and an observable outcome.</p></div>
          <div className="skill-map">{skills.map(([skill, description], index) => <article key={skill} className="skill-card"><span>{String(index + 1).padStart(2, "0")}</span><h3>{skill}</h3><p>{description}</p></article>)}</div>
        </section>

        <section id="compatibility" className="section-shell compatibility" aria-labelledby="compatibility-title">
          <div><p className="section-label">05 / PORTABILITY IS A CLAIM TOO</p><h2 id="compatibility-title">Installable is not activated.</h2><p>The portable core is installer-documented but host activation remains unverified. MiniMax is provider-only. Treat every host-specific claim as a receipt waiting to happen.</p></div>
          <div className="matrix" role="table" aria-label="Compatibility matrix"><div className="matrix-row matrix-head" role="row"><span role="columnheader">Surface</span><span role="columnheader">State</span><span role="columnheader">Meaning</span></div><div className="matrix-row" role="row"><span role="cell">Portable core</span><span role="cell" className="signal">Installer-verified</span><span role="cell">Public GitHub installer command verified.</span></div><div className="matrix-row" role="row"><span role="cell">Host activation</span><span role="cell" className="warning">Unverified</span><span role="cell">Do not imply it works everywhere.</span></div><div className="matrix-row" role="row"><span role="cell">MiniMax</span><span role="cell" className="warning">Provider-only</span><span role="cell">Not a general compatibility promise.</span></div></div>
        </section>

        <section id="method" className="section-shell method-section" aria-labelledby="method-title">
          <p className="section-label">06 / METHOD &amp; SAFETY</p><h2 id="method-title">The test—or discovery step—is bounded and reviewable.</h2>
          <div className="method-links"><a href="#flow"><span>01</span><strong>Route before you automate</strong><em>Keep a human decision in the loop.</em></a><a href="#receipts"><span>02</span><strong>Receipt before you repeat</strong><em>Separate delivered value from a story about value.</em></a><a href="#proof"><span>03</span><strong>Review before you scale</strong><em>Stop when the claim outruns the evidence.</em></a></div>
        </section>

        <section id="pledge" className="section-shell pledge" aria-labelledby="pledge-title">
          <div><p className="section-label">07 / QUIET PLEDGE</p><h2 id="pledge-title">If it helps, pass some signal back.</h2></div>
          <div className="pledge-copy">
            <p>If MoneyPrinter produces attributable profit, consider voluntarily returning 1%. No tracking and no obligation. It helps fund source review, compatibility checks, and updates.</p>
            <a className="pledge-link" href={kofiUrl} target="_blank" rel="noreferrer">Support maintenance on Ko-fi <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer"><span>MoneyPrinter.md <b>0.1.0-rc.3</b></span><span>Receipts first. Claims second.</span><a href="#hero">Back to top ↑</a></footer>
    </>
  );
}
