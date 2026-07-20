# MoneyPrinter Visual System Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the landing page's flat grids with a connected editorial operating diagram, verify it at desktop and 320-pixel mobile widths, and deploy the exact tested source to `moneyprinter.bilbop.org`.

**Architecture:** Keep all critical copy in semantic HTML and use an aria-hidden inline SVG only for the loop's connector paths, arrow marker, approval crossing, and rerank return. Express the supporting evidence, route, skill, compatibility, and method systems with semantic lists/table roles plus CSS rails, signals, and stamps. Preserve the existing one-page React surface and global stylesheet so this remains a small, dependency-free launch site.

**Tech Stack:** React 19, TypeScript, Next.js/OpenNext Cloudflare build, CSS, inline SVG, Node test runner, ESLint, Sites hosting.

## Global Constraints

- Preserve the dark ink, warm paper, acid-lime, red-orange, and stamped-receipt visual language.
- Do not add gradients, glass panels, decorative AI imagery, new runtime dependencies, or essential text inside SVG.
- Preserve the exact evidence taxonomy, host-conformance caveat, MiniMax caveat, 5/6 result, Ko-fi link, GitHub link, install command, and no-guarantee language.
- Preserve a single `h1`, logical headings, ordered semantic lists, written state labels, visible focus, and at least 44-pixel interactive targets.
- SVG connectors must be decorative with `aria-hidden="true"` and `focusable="false"`.
- The layout must have no horizontal overflow at 320 CSS pixels.
- `prefers-reduced-motion: reduce` must leave the complete diagram understandable and static.
- The exact verified source commit must be pushed before a Sites version is saved and deployed.

---

### Task 1: Lock the visual contract with failing tests

**Files:**
- Modify: `site/tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: the existing server-rendered page and CSS source.
- Produces: markup/CSS requirements for `flow-circuit`, `flow-wiring`, `flow-return`, `flow-steps`, and `approval-gate`.

- [ ] **Step 1: Replace the obsolete five-column-grid assertions**

Add these assertions to the production-surface test and delete the assertions
that require the five-column `.flow-strip`:

```js
assert.match(page, /className="flow-circuit"/);
assert.match(page, /<svg[^>]+className="flow-wiring"[^>]+aria-hidden="true"[^>]+focusable="false"/s);
assert.match(page, /<marker[^>]+id="flow-arrow"/s);
assert.match(page, /className="flow-path flow-return"/);
assert.match(page, /className="approval-gate"/);
assert.match(page, /EXACT ACTION\s*APPROVAL/);
assert.doesNotMatch(page, /className="flow-strip"/);

assert.match(css, /\.flow-circuit\s*\{[^}]*position:\s*relative/is);
assert.match(css, /\.flow-wiring\s*\{[^}]*position:\s*absolute/is);
assert.match(css, /\.flow-return\s*\{[^}]*stroke-dasharray/is);
assert.match(css, /@media \(max-width:\s*720px\)[\s\S]*\.flow-wiring\s*\{[^}]*display:\s*none/is);
assert.match(css, /@media \(max-width:\s*720px\)[\s\S]*\.flow-steps::before/is);
assert.doesNotMatch(css, /\.flow-strip\s*\{/);
```

- [ ] **Step 2: Require ordered, accessible rendered structures**

Add these assertions to the server-render test:

```js
assert.match(html, /<ol[^>]+class="flow-steps"/);
assert.match(html, /aria-label="MoneyPrinter operating loop"/);
```

- [ ] **Step 3: Run the focused test and observe RED**

Run:

```bash
cd site
npm run build
node --test tests/rendered-html.test.mjs
```

Expected: FAIL because the current page still contains `flow-strip` and does
not contain the operating-circuit structure.

- [ ] **Step 4: Commit the red test contract**

```bash
git add site/tests/rendered-html.test.mjs
git commit -m "test: define the editorial diagram contract"
```

### Task 2: Build the connected operating loop

**Files:**
- Modify: `site/app/page.tsx`
- Modify: `site/app/globals.css`
- Test: `site/tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: the existing `flow` array in its unchanged ten-step order.
- Produces: `.flow-circuit`, `.flow-wiring`, `.flow-path`, `.flow-return`, `.flow-steps`, `.flow-node`, and `.approval-gate`.

- [ ] **Step 1: Replace the flow grid with semantic nodes and decorative wiring**

Replace the existing `flow-strip` ordered list with this structure:

```tsx
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
    <path className="flow-path flow-return" d="M190 470 C65 470 55 560 180 575 H725 C790 575 810 530 810 480" />
  </svg>
  <ol className="flow-steps">
    {flow.map((step, index) => (
      <li className={`flow-node flow-node-${index + 1}`} key={step}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>{step}</strong>
        {index === 5 && (
          <span className="approval-gate">
            <b>EXACT ACTION</b>
            APPROVAL
          </span>
        )}
      </li>
    ))}
  </ol>
  <p className="flow-return-label"><span>RESULT LOGGED</span> Rerank from the receipt, not the story.</p>
</div>
```

- [ ] **Step 2: Plot the desktop circuit without card/table borders**

Add desktop rules that:

- position `.flow-circuit` as a 610-pixel schematic canvas;
- place `.flow-steps` as a full-canvas CSS grid;
- position nodes 1–3 across the intake row, nodes 4–6 across the upper money
  row, and nodes 7–10 in reverse reading direction along the lower return row;
- render nodes as typographic markers with circular or ticket-like number
  tokens, not equal bordered boxes;
- place `.flow-wiring` absolutely behind nodes;
- use `marker-end: url(#flow-arrow)` on directional paths;
- render `.flow-return` as a dashed acid-lime return path;
- render `.approval-gate` as an offset red-orange stamped crossing between
  Payable test and Acquire.

The relevant selectors must be explicit:

```css
.flow-circuit { position: relative; min-height: 610px; margin-top: 3rem; border-block: 1px solid var(--line); overflow: hidden; }
.flow-wiring { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
.flow-path { fill: none; stroke: #687061; stroke-width: 3; vector-effect: non-scaling-stroke; marker-end: url(#flow-arrow); }
.flow-wiring marker path { fill: var(--acid); }
.flow-return { stroke: var(--acid); stroke-dasharray: 10 8; }
.flow-steps { position: absolute; inset: 0; z-index: 1; list-style: none; margin: 0; padding: 0; }
.flow-node { position: absolute; width: 150px; min-height: 96px; }
.approval-gate { position: absolute; min-width: 132px; color: var(--danger); border: 2px solid currentColor; transform: rotate(-3deg); }
```

- [ ] **Step 3: Build the mobile vertical circuit**

Inside `@media (max-width: 720px)`, hide the desktop SVG and plot all nodes in
normal document flow:

```css
.flow-circuit { min-height: 0; overflow: visible; padding: 2rem 0 1rem; }
.flow-wiring { display: none; }
.flow-phase { position: static; margin: 0 0 1.5rem 3rem; }
.flow-phase-run { margin-top: 2rem; }
.flow-steps { position: relative; display: grid; gap: .3rem; padding-left: 3rem; }
.flow-steps::before { content: ""; position: absolute; left: 1rem; top: 1rem; bottom: 1rem; width: 2px; background: var(--line); }
.flow-node { position: relative; inset: auto; width: auto; min-height: 74px; padding: .65rem 0; }
.flow-node::before { content: "↓"; position: absolute; left: -2.65rem; color: var(--acid); }
.approval-gate { position: static; display: inline-flex; width: fit-content; margin-top: .65rem; transform: none; }
.flow-return-label { position: relative; margin: 1.5rem 0 0 3rem; }
```

- [ ] **Step 4: Run tests and lint**

Run:

```bash
cd site
npm run build
node --test tests/rendered-html.test.mjs
npm run lint
```

Expected: all loop assertions and existing tests pass; lint reports zero
errors.

- [ ] **Step 5: Commit the operating circuit**

```bash
git add site/app/page.tsx site/app/globals.css
git commit -m "feat: turn the money loop into a connected circuit"
```

### Task 3: Replace every remaining flat grid with an explanatory system

**Files:**
- Modify: `site/app/page.tsx`
- Modify: `site/app/globals.css`
- Test: `site/tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: the existing `evidence`, `routes`, and `skills` arrays and exact compatibility copy.
- Produces: `.evidence-ladder`, `.route-rail`, `.skill-relay`, `.validation-console`, and `.guardrail-controls`.

- [ ] **Step 1: Add and run the supporting-system test contract**

Add these source assertions to the production-surface test:

```js
assert.match(page, /className="evidence-ladder"/);
assert.match(page, /className="route-list route-rail"/);
assert.match(page, /className="skill-relay"/);
assert.match(page, /className="validation-console"/);
assert.match(page, /className="guardrail-controls"/);
assert.doesNotMatch(page, /className="evidence-grid"/);
assert.doesNotMatch(page, /className="skill-map"/);
assert.match(css, /\.evidence-ladder\s*\{/);
assert.match(css, /\.skill-relay\s*\{/);
assert.match(css, /\.validation-console\s*\{/);
assert.doesNotMatch(css, /\.skill-map\s*\{/);
```

Add these rendered HTML assertions to the server-render test:

```js
assert.match(html, /<ol[^>]+class="evidence-ladder"/);
assert.match(html, /<ol[^>]+class="route-list route-rail"/);
assert.match(html, /<ol[^>]+class="skill-relay"/);
assert.match(html, /aria-label="Evidence strength from strongest to weakest"/);
assert.match(html, /aria-label="Seven-skill execution relay"/);
assert.match(html, /role="table"[^>]+aria-label="Compatibility validation console"/);
```

Run:

```bash
cd site
npm run build
node --test tests/rendered-html.test.mjs
```

Expected: FAIL because the old evidence grid, skill map, matrix, and method rows
are still present.

- [ ] **Step 2: Convert evidence to a semantic signal ladder**

Use this ordered structure:

```tsx
<ol className="evidence-ladder" aria-label="Evidence strength from strongest to weakest">
  {evidence.map((item, index) => (
    <li className={`evidence evidence-${index}`} key={item}>
      <span className="evidence-rank">{String(index + 1).padStart(2, "0")}</span>
      <span className="evidence-name">{item}</span>
      <span className="evidence-signal" aria-hidden="true" />
    </li>
  ))}
</ol>
```

Make each successive rung narrower with explicit widths from 100% to 64%.
Give the top rung a filled acid signal, middle rungs outlined/muted signals, and
the last three caution-colored signals. Do not restore a two-column card grid.

- [ ] **Step 3: Add the route entry rail**

Keep the existing ordered list and content, change its class to
`route-list route-rail`, and use pseudo-elements to draw one vertical rail and
five junction markers behind the numbered entries. Remove the northeast-arrow
glyph and replace it with a short visible label, `ENTER`, that remains
`aria-hidden="true"`.

- [ ] **Step 4: Convert the seven skills to a router plus execution relay**

Use:

```tsx
<ol className="skill-relay" aria-label="Seven-skill execution relay">
  {skills.map(([skill, description], index) => (
    <li key={skill} className={`skill-module ${index === 0 ? "skill-router" : "skill-worker"}`}>
      <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
      <div><h3>{skill}</h3><p>{description}</p></div>
      <span className="skill-handoff" aria-hidden="true">{index === 0 ? "ROUTE" : index === skills.length - 1 ? "REVIEW" : "PASS"}</span>
    </li>
  ))}
</ol>
```

Make `moneyprinter` a wide paper-colored control ticket. Draw a continuous
acid-lime relay rail behind the six worker modules. Offset alternating worker
modules above and below the rail at desktop widths; use a vertical rail on
mobile.

- [ ] **Step 5: Restyle compatibility as a validation console**

Change the wrapper to:

```tsx
<div className="validation-console" role="table" aria-label="Compatibility validation console">
```

Add an aria-hidden `.status-lamp` before every written state. Preserve all
`row`, `columnheader`, and `cell` roles and exact copy. Use an inset console
frame, row index marks, signal lamps, and written state stamps. Do not hide the
meaning column on desktop or mobile.

- [ ] **Step 6: Convert method links into guardrail controls**

Rename the wrapper to `.guardrail-controls`. Give each link a large acid number,
an offset dark panel, a right-edge arrow, and a red-orange rule. Preserve the
three destinations and all text.

- [ ] **Step 7: Run the complete automated suite**

Run:

```bash
cd site
npm run build
npm test
npm run lint
```

Expected: all rendered HTML tests pass and ESLint reports zero errors.

- [ ] **Step 8: Commit the supporting visual systems**

```bash
git add site/app/page.tsx site/app/globals.css site/tests/rendered-html.test.mjs
git commit -m "feat: replace flat grids with editorial systems"
```

### Task 4: Render, inspect, and correct the responsive page

**Files:**
- Modify if defects are found: `site/app/page.tsx`
- Modify if defects are found: `site/app/globals.css`
- Replace: `launch/assets/landing-desktop-preview.png`
- Replace: `launch/assets/landing-mobile-preview.png`
- Test: `site/tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: the built site from Tasks 2–3.
- Produces: visually verified desktop/mobile compositions and current launch previews.

- [ ] **Step 1: Start the production-like local server**

Run:

```bash
cd site
npm run build
npm run start -- --port 4174
```

Expected: the server prints a local preview URL and remains running.

- [ ] **Step 2: Inspect at 1440×1000**

Use the in-app browser to check the complete page and specifically verify:

- the SVG paths pass through or between the intended nodes;
- the approval gate sits between Payable test and Acquire;
- the rerank return visibly points back toward Prioritize;
- no labels collide with connector paths;
- evidence visibly descends in strength;
- `moneyprinter` reads as the relay controller;
- compatibility caveats remain readable;
- Ko-fi and receipt remain above the redesigned systems.

Capture the complete desktop page to:

`launch/assets/landing-desktop-preview.png`

- [ ] **Step 3: Inspect at 320×900**

Verify:

- `document.documentElement.scrollWidth === 320`;
- the SVG is hidden and the vertical loop rail is visible;
- every step and the approval gate are readable in order;
- evidence, routes, relay, console, and guardrails remain legible;
- all links/buttons meet a 44-pixel minimum target;
- no clipped text or accidental two-column squeeze remains.

Capture the complete mobile page to:

`launch/assets/landing-mobile-preview.png`

- [ ] **Step 4: Correct every visible defect and repeat both inspections**

Use `apply_patch` for source changes. Re-run:

```bash
cd site
npm run build
npm test
npm run lint
```

Expected: all tests pass, lint is clean, and the repeated desktop/mobile
inspection finds no overflow, collision, or unreadable state.

- [ ] **Step 5: Commit verified previews and responsive fixes**

```bash
git add site/app/page.tsx site/app/globals.css launch/assets/landing-desktop-preview.png launch/assets/landing-mobile-preview.png
git commit -m "fix: polish the responsive MoneyPrinter schematic"
```

### Task 5: Verify the repository, push, deploy, and audit the live result

**Files:**
- Modify only if public-state facts change: `README.md`
- Modify only if deployment receipts change: `docs/qa/landing-page.md`

**Interfaces:**
- Consumes: the clean, visually inspected source commit.
- Produces: matching GitHub main, Sites source commit, saved Sites version, production deployment, and verified custom-domain render.

- [ ] **Step 1: Run all release gates**

Run:

```bash
cd site && npm test && npm run lint
cd ..
node scripts/verify-release.mjs
node scripts/verify-public-copy.mjs
node scripts/verify-money-machine-chain.mjs
node scripts/verify-evals.mjs
npx --yes skills add . --list
git diff --check
git status --short
```

Expected: all checks pass, seven skills are listed, `git diff --check` is
silent, and only intentional receipt documentation is dirty.

- [ ] **Step 2: Commit any final receipt documentation**

```bash
git add docs/qa/landing-page.md
git commit -m "docs: record the visual-system deployment"
```

Skip this commit only when neither file changed.

- [ ] **Step 3: Push the tested branch to GitHub main**

```bash
git push origin HEAD:main
```

Expected: the remote reports the exact local HEAD as `main`.

- [ ] **Step 4: Push the exact source to the existing Sites project**

Read `.openai/hosting.json`, reuse its opaque `project_id`, obtain a fresh Sites
source credential, and push the exact local HEAD to that source. Do not create a
new site.

Expected: the Sites source repository reports the same commit SHA as local
`git rev-parse HEAD`.

- [ ] **Step 5: Save and deploy a Sites version**

Package the exact pushed source, save one version referencing that commit, then
deploy that saved version. Poll deployment status until it is terminal.

Expected: deployment state is `succeeded`.

- [ ] **Step 6: Verify the custom domain and next weak point**

Open `https://moneyprinter.bilbop.org`, hard-refresh, and verify:

- the live loop is the connected schematic rather than the old 5×2 grid;
- Ko-fi targets `https://ko-fi.com/bilbop`;
- GitHub targets `https://github.com/bilbop1/moneyprinter-md`;
- the desktop page has no collisions;
- the 320-pixel page has no horizontal overflow;
- the deployed HTML retains all honesty/caveat copy.

Then inspect the full page once more for the next weakest visual or launch
blocker. Fix any reversible in-scope defect, repeat the appropriate tests, push
the new exact source if it changed, and deploy a new saved version. Stop only
when the live page is internally consistent and no concrete defect remains.
