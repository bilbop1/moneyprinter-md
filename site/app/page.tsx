"use client";

import { useState } from "react";

const repositoryUrl = "https://github.com/bilbop1/moneyprinter-md";
const installCommand = "npx skills add bilbop1/moneyprinter-md";

const routes = [
  ["Starting from zero", "Inventory real skills and one reachable buyer privately; prepare a fit note before any approved contact."],
  ["Local service", "Audit one week of missed-call or estimate-follow-up records privately before proposing any customer contact."],
  ["Professional expertise", "Map one bounded diagnostic and its qualified-review boundary before interviewing or pricing it."],
  ["Creator / ecommerce", "Audit one owned offer path and current policy constraints before proposing a live conversion test."],
  ["Existing operator", "Baseline one leaking handoff privately; change live delivery only after guardrails and rollback are approved."],
];

const flow = ["Interview", "Route", "Research", "Offer", "Payable test", "Delivery", "Receipt", "Review"];
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
  ["moneyprinter", "Set the receipt-first operating standard."],
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
        <span className="release-mark">0.1.0-rc.1</span>
      </header>

      <main id="main-content">
        <section id="hero" className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true">◆</span> OPEN SOURCE / RECEIPTS FIRST</p>
            <h1 id="hero-title">The models are finally good. Their money playbooks are not.</h1>
            <p className="lede">A receipts-first revenue operating system for frontier agents.</p>
            <p className="hero-note">A practical field guide for testing useful offers, tracing what happened, and refusing to confuse a benchmark with a bank balance.</p>
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
          <aside className="receipt hero-receipt" aria-label="MoneyPrinter receipt preview">
            <div className="receipt-top"><span>MP / RECEIPT 001</span><span>STATUS: OPEN</span></div>
            <div className="receipt-total"><small>Claim under review</small><strong>$19,000</strong><em>simulated benchmark value</em></div>
            <p className="receipt-warning">$19,000 simulated benchmark value ≠ $19,000 cash collected</p>
            <div className="receipt-rule" />
            <dl><div><dt>Ask</dt><dd>Find a payable test</dd></div><div><dt>Proof</dt><dd>Keep the source receipt</dd></div><div><dt>Next</dt><dd>Review before repeat</dd></div></dl>
            <div className="receipt-stamp">UNSETTLED</div>
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
          <p className="section-label">03 / THE LOOP</p><h2 id="flow-title">A money playbook should leave a trail.</h2>
          <ol className="flow-strip">{flow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
        </section>

        <section id="receipts" className="section-shell receipts-section" aria-labelledby="receipts-title">
          <div className="section-heading"><div><p className="section-label">04 / SEVEN SKILLS</p><h2 id="receipts-title">Each move earns its place by making the next receipt clearer.</h2></div><p>Not a funnel. Not a content calendar. A sequence that keeps an agent close to a human decision and an observable outcome.</p></div>
          <div className="skill-map">{skills.map(([skill, description], index) => <article key={skill} className="skill-card"><span>{String(index + 1).padStart(2, "0")}</span><h3>{skill}</h3><p>{description}</p></article>)}</div>
        </section>

        <section id="compatibility" className="section-shell compatibility" aria-labelledby="compatibility-title">
          <div><p className="section-label">05 / PORTABILITY IS A CLAIM TOO</p><h2 id="compatibility-title">Installable is not activated.</h2><p>The portable core is installer-documented but host activation remains unverified. MiniMax is provider-only. Treat every host-specific claim as a receipt waiting to happen.</p></div>
          <div className="matrix" role="table" aria-label="Compatibility matrix"><div className="matrix-row matrix-head" role="row"><span role="columnheader">Surface</span><span role="columnheader">State</span><span role="columnheader">Meaning</span></div><div className="matrix-row" role="row"><span role="cell">Portable core</span><span role="cell" className="signal">Installer-documented</span><span role="cell">Public GitHub installer command is provided.</span></div><div className="matrix-row" role="row"><span role="cell">Host activation</span><span role="cell" className="warning">Unverified</span><span role="cell">Do not imply it works everywhere.</span></div><div className="matrix-row" role="row"><span role="cell">MiniMax</span><span role="cell" className="warning">Provider-only</span><span role="cell">Not a general compatibility promise.</span></div></div>
        </section>

        <section id="method" className="section-shell method-section" aria-labelledby="method-title">
          <p className="section-label">06 / METHOD &amp; SAFETY</p><h2 id="method-title">The test—or discovery step—is bounded and reviewable.</h2>
          <div className="method-links"><a href="#flow"><span>01</span><strong>Route before you automate</strong><em>Keep a human decision in the loop.</em></a><a href="#receipts"><span>02</span><strong>Receipt before you repeat</strong><em>Separate delivered value from a story about value.</em></a><a href="#proof"><span>03</span><strong>Review before you scale</strong><em>Stop when the claim outruns the evidence.</em></a></div>
        </section>

        <section id="pledge" className="section-shell pledge" aria-labelledby="pledge-title"><div><p className="section-label">07 / QUIET PLEDGE</p><h2 id="pledge-title">If it helps, pass some signal back.</h2></div><p>If MoneyPrinter produces attributable profit, consider voluntarily returning 1%. No tracking, no obligation, no invented checkout link. Just a reminder that useful tools can leave the place a little stronger.</p></section>
      </main>

      <footer className="site-footer"><span>MoneyPrinter.md <b>0.1.0-rc.1</b></span><span>Receipts first. Claims second.</span><a href="#hero">Back to top ↑</a></footer>
    </>
  );
}
