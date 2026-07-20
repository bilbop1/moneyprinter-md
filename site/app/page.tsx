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
            <p className="lede">MoneyPrinter tells your current AI host to scan every detected AI CLI and GUI it can access, ask for one confirmation, then get to work.</p>
            <p className="hero-note">The seven skills separate receipts from hype, pick the strongest cash-first route, and direct the host through the offer, payable test, acquisition, delivery, and rerank.</p>
            <div className="install-control" aria-label="Install command">
              <code>{installCommand}</code>
              <button type="button" onClick={copyInstall} aria-label={`${copyLabel}: ${installCommand}`}>{copyLabel}</button>
            </div>
            <p className="copy-status" aria-live="polite">{copyState === "manual" ? "Clipboard unavailable — the command stays selectable." : copyState === "copied" ? "Command copied to clipboard." : "Install the seven public rc.3 skills."}</p>
            <div className="hero-controls">
              <a className="text-control" href={repositoryUrl} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a>
              <a className="text-control" href="#method">Read the method <span aria-hidden="true">↓</span></a>
            </div>
            <p className="disclaimer">No guaranteed income. No fake benchmark dollars. No autonomous spam.</p>
          </div>
          <div className="hero-side">
            <aside className="hero-support" aria-label="Support MoneyPrinter">
              <p className="hero-support-kicker">KEEP THE PRINTER INKED</p>
              <p>If this thing makes you money, consider throwing 1% back into keeping it free, tested, and updated.</p>
              <div className="hero-support-actions">
                <a className="kofi-button" href={kofiUrl} target="_blank" rel="noreferrer">Support MoneyPrinter on Ko-fi <span aria-hidden="true">↗</span></a>
                <a className="pledge-control" href="#pledge">Read the 1% pledge <span aria-hidden="true">↓</span></a>
              </div>
            </aside>
            <aside className="receipt hero-receipt" aria-label="MoneyPrinter scan receipt preview">
              <div className="receipt-top"><span>MP / 14-DAY SCAN</span><span>READY TO CONFIRM</span></div>
              <div className="receipt-total"><small>Accessible history window</small><strong>14 DAYS</strong><em>detected + permitted sources</em></div>
              <p className="receipt-warning">Coverage names every scanned, empty, blocked, unsupported, or excluded source.</p>
              <div className="receipt-rule" />
              <dl><div><dt>Permission</dt><dd>One scoped grant</dd></div><div><dt>Confirm</dt><dd>One correction pass</dd></div><div><dt>Next</dt><dd>Get to work</dd></div></dl>
              <div className="receipt-stamp">RERANK</div>
            </aside>
          </div>
        </section>

        <section id="proof" className="section-shell split-section" aria-labelledby="proof-title">
          <div><p className="section-label">01 / EVIDENCE, NOT VIBES</p><h2 id="proof-title">Name the evidence before you name the win.</h2><p>A receipt is the smallest durable unit of learning: who paid, what changed hands, what it cost to deliver, and what should be tested next.</p></div>
          <ol className="evidence-ladder" aria-label="Evidence strength from strongest to weakest">
            {evidence.map((item, index) => (
              <li className={`evidence evidence-${index}`} key={item}>
                <span className="evidence-rank">{String(index + 1).padStart(2, "0")}</span>
                <span className="evidence-name">{item}</span>
                <span className="evidence-signal" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </section>

        <section id="routes" className="section-shell" aria-labelledby="routes-title">
          <div className="section-heading"><div><p className="section-label">02 / PICK A REAL START</p><h2 id="routes-title">Five starting points. One credible next step.</h2></div><p>Routes are not identities. Start with the nearest real asset, keep the first step private when facts are missing, and earn the right to test.</p></div>
          <ol className="route-list route-rail">{routes.map(([title, test], index) => <li key={title}><span className="route-number">0{index + 1}</span><div><h3>{title}</h3><p>{test}</p></div><span className="route-arrow" aria-hidden="true">ENTER</span></li>)}</ol>
        </section>

        <section id="flow" className="section-shell flow-section" aria-labelledby="flow-title">
          <p className="section-label">03 / THE LOOP</p><h2 id="flow-title">It does not stop at ranking the work.</h2>
          <p className="flow-copy">The scan ends with one confirmation. The written workflow does not. It directs the host through private work until an exact external action needs approval, then records the result and reranks. Exact host conformance is still experimental.</p>
          <div className="flow-circuit" aria-label="MoneyPrinter operating loop">
            <div className="flow-phase flow-phase-read">
              <span>READ THE WORK</span><em>one scoped pass</em>
            </div>
            <div className="flow-phase flow-phase-run">
              <span>RUN THE MONEY LOOP</span><em>receipt decides what repeats</em>
            </div>
            <svg className="flow-wiring" viewBox="0 0 1200 610" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <defs>
                <marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" />
                </marker>
              </defs>
              <path className="flow-path flow-intake" d="M120 155 H565" />
              <path className="flow-path flow-drop" d="M565 155 C650 155 650 290 755 290" />
              <path className="flow-path flow-outbound" d="M755 290 H1080 V470 H190" />
              <path className="flow-path flow-return" data-from="Rerank" data-to="Prioritize" d="M120 470 C45 470 45 575 180 575 H580 C620 575 620 530 620 480 V350 C620 315 635 290 660 290" />
            </svg>
            <ol className="flow-steps">
              {flow.map((step, index) => (
                <li className={`flow-node flow-node-${index + 1}`} key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                  {index === 5 && (
                    <span className="approval-gate" aria-label="EXACT ACTION APPROVAL">
                      <b>EXACT ACTION</b>
                      APPROVAL
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <p className="flow-return-label"><span>RESULT LOGGED</span> Rerank from the receipt, not the story.</p>
          </div>
        </section>

        <section id="receipts" className="section-shell receipts-section" aria-labelledby="receipts-title">
          <div className="section-heading"><div><p className="section-label">04 / SEVEN SKILLS</p><h2 id="receipts-title">Each move earns its place by making the next receipt clearer.</h2></div><p>Not a funnel. Not a content calendar. A sequence that keeps an agent close to a human decision and an observable outcome.</p></div>
          <ol className="skill-relay" aria-label="Seven-skill execution relay">
            {skills.map(([skill, description], index) => (
              <li key={skill} className={`skill-module ${index === 0 ? "skill-router" : "skill-worker"}`}>
                <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{skill}</h3><p>{description}</p></div>
                <span className="skill-handoff" aria-hidden="true">{index === 0 ? "ROUTE" : index === skills.length - 1 ? "REVIEW" : "PASS"}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="compatibility" className="section-shell compatibility" aria-labelledby="compatibility-title">
          <div><p className="section-label">05 / PORTABILITY IS A CLAIM TOO</p><h2 id="compatibility-title">Installable is not activated.</h2><p>The rc.3 files pass local package checks, and public GitHub discovery finds all seven. The release asset and this landing page are live. The best corrected blind local session run passed 5 of 6; one run reached the approval gate but skipped required artifact sections. MiniMax is provider-only.</p></div>
          <div className="validation-console" role="table" aria-label="Compatibility validation console"><div className="matrix-row matrix-head" role="row"><span role="columnheader">Surface</span><span role="columnheader">State</span><span role="columnheader">Meaning</span></div><div className="matrix-row" role="row"><span role="cell">Portable core</span><span role="cell" className="signal"><span className="status-lamp" aria-hidden="true" />Locally validated</span><span role="cell">Seven rc.3 skill files pass package checks.</span></div><div className="matrix-row" role="row"><span role="cell">Full host chain</span><span role="cell" className="warning"><span className="status-lamp" aria-hidden="true" />Experimental</span><span role="cell">Best corrected blind local run: 5/6.</span></div><div className="matrix-row" role="row"><span role="cell">Public rc.3 receipt</span><span role="cell" className="signal"><span className="status-lamp" aria-hidden="true" />Verified</span><span role="cell">GitHub release, remote discovery, and landing page are live.</span></div><div className="matrix-row" role="row"><span role="cell">MiniMax</span><span role="cell" className="warning"><span className="status-lamp" aria-hidden="true" />Provider-only</span><span role="cell">Not a general compatibility promise.</span></div></div>
        </section>

        <section id="method" className="section-shell method-section" aria-labelledby="method-title">
          <p className="section-label">06 / METHOD &amp; SAFETY</p><h2 id="method-title">The test—or discovery step—is bounded and reviewable.</h2>
          <div className="guardrail-controls"><a href="#flow"><span>01</span><strong>Route before you automate</strong><em>Keep a human decision in the loop.</em></a><a href="#receipts"><span>02</span><strong>Receipt before you repeat</strong><em>Separate delivered value from a story about value.</em></a><a href="#proof"><span>03</span><strong>Review before you scale</strong><em>Stop when the claim outruns the evidence.</em></a></div>
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
