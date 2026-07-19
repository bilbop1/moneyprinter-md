# MoneyPrinter Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and production-deploy a fast, accessible landing page that explains MoneyPrinter in 20 seconds and sends qualified visitors to the GitHub repository.

**Architecture:** Use a zero-dependency static site with semantic HTML, one focused stylesheet, and a small progressive-enhancement script. Content is sourced from the repository's evidence and compatibility contracts. The page can deploy independently through Sites and later receive the custom `bilbop.org` domain.

**Tech Stack:** HTML5, CSS, vanilla JavaScript, SVG, Sites hosting, Playwright browser validation.

## Global Constraints

- No framework, package install, analytics SDK, cookies, or build step.
- No guaranteed-income language, fabricated metrics, testimonials, or fake terminal output.
- Every displayed economic example is explicitly labelled as Simulation unless real evidence exists.
- Primary calls to action point to the public GitHub repository only after its URL is confirmed.
- External links open safely and remain usable without JavaScript.
- The page meets WCAG AA contrast, keyboard navigation, reduced-motion, and mobile-layout requirements.
- Visual direction: dark editorial terminal, warm receipt-paper accents, serious and slightly subversive rather than casino-like.
- Deployment uses Sites; custom-domain mutation waits for confirmed DNS access.

---

### Task 1: Semantic page and content contract

**Files:**
- Create: `site/index.html`
- Create: `site/404.html`

**Interfaces:**
- Consumes: README positioning, skill map, evidence taxonomy, compatibility statuses.
- Produces: Stable section IDs used by CSS, JavaScript, social links, and browser tests.

- [ ] **Step 1: Create the semantic skeleton**

`site/index.html` must contain:

```html
<header id="top"></header>
<main>
  <section id="hero"></section>
  <section id="proof"></section>
  <section id="routes"></section>
  <section id="flow"></section>
  <section id="receipts"></section>
  <section id="compatibility"></section>
  <section id="method"></section>
  <section id="pledge"></section>
</main>
<footer></footer>
```

Include a skip link, one `<h1>`, ordered heading hierarchy, visible focus states,
and buttons implemented as links when they navigate.

- [ ] **Step 2: Write hero copy**

The hero must render:

```text
MONEYPRINTER.MD / OPEN SOURCE

The models are finally good.
Their money playbooks are not.

A receipts-first revenue operating system for frontier agents.

[View on GitHub] [Copy install command]

No guaranteed income. No fake benchmark dollars. No autonomous spam.
```

Use a static pre-publication GitHub target file or disabled state until the URL
is confirmed; never publish a broken or invented repository URL.

- [ ] **Step 3: Write proof and route content**

The proof section must contrast:

```text
$19,000 simulated benchmark value != $19,000 cash collected
```

Do not name or attack a specific project on the landing page. Explain the seven
evidence labels.

The route section must offer cards for:

- Starting from zero;
- Local service;
- Professional expertise;
- Creator/ecommerce;
- Existing operator.

Each card states the likely first route and first payable test without claiming
a result.

- [ ] **Step 4: Write flow, compatibility, method, and pledge**

Flow:

```text
Interview → Route → Research → Offer → Payable test → Delivery → Receipt → Review
```

Compatibility must use Verified, Installer-supported, Manual, Provider-only, and
Planned labels. Method must link to research and evidence docs. Pledge uses:

```text
If MoneyPrinter produces attributable profit for you, consider voluntarily
returning 1% through Ko-fi. No tracking. No obligation.
```

- [ ] **Step 5: Create the 404 page**

`site/404.html` must link to `/` and use no JavaScript.

- [ ] **Step 6: Validate semantic structure**

Run:

```bash
rg -c "<h1" site/index.html
rg -n 'id="(hero|proof|routes|flow|receipts|compatibility|method|pledge)"' site/index.html
```

Expected: one `<h1>` and all eight section IDs.

- [ ] **Step 7: Commit**

```bash
git add site/index.html site/404.html
git commit -m "feat: add MoneyPrinter landing-page content"
```

---

### Task 2: Visual system and responsive layout

**Files:**
- Create: `site/styles.css`
- Create: `site/assets/mark.svg`
- Create: `site/assets/grid.svg`

**Interfaces:**
- Consumes: Section IDs from Task 1.
- Produces: Responsive visual system used by the complete page and social capture.

- [ ] **Step 1: Define design tokens**

Start `site/styles.css` with:

```css
:root {
  --ink: #080a09;
  --panel: #101310;
  --paper: #f2ead8;
  --paper-dim: #c8bea8;
  --acid: #c9ff4a;
  --signal: #ff6b4a;
  --line: rgba(242, 234, 216, 0.16);
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.34);
  --radius: 18px;
  --max: 1180px;
  color-scheme: dark;
}
```

Use a system sans stack plus a system monospace stack. Do not fetch web fonts.

- [ ] **Step 2: Implement responsive layout**

Requirements:

- content width no more than `1180px`;
- readable body line length no more than `70ch`;
- hero uses a two-column composition above `900px`;
- route cards use five columns only when each remains at least `190px`;
- all sections collapse to one column below `720px`;
- no horizontal scrolling at `320px`;
- tap targets at least `44px`;
- receipt labels remain legible without color alone.

- [ ] **Step 3: Implement editorial details**

Add:

- a fine grid background;
- registration marks and section indexes;
- receipt-like proof cards with serrated-edge illusion in CSS;
- subtle acid highlight for verified actions;
- red-orange treatment for warnings;
- terminal cursor animation only when motion is allowed.

- [ ] **Step 4: Add accessibility and reduced motion**

Include:

```css
:focus-visible {
  outline: 3px solid var(--acid);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 5: Create SVG assets**

`mark.svg` must be an original black/acid receipt-and-cursor monogram with an
accessible `<title>MoneyPrinter.md mark</title>`.

`grid.svg` must contain only geometric lines and no embedded text, raster image,
script, or external URL.

- [ ] **Step 6: Run static checks**

```bash
rg -n "https?://.*\\.(woff|woff2|ttf)|@import|overflow-x: hidden" site/styles.css
```

Expected: no matches.

- [ ] **Step 7: Commit**

```bash
git add site/styles.css site/assets
git commit -m "style: add MoneyPrinter editorial visual system"
```

---

### Task 3: Progressive interactions and metadata

**Files:**
- Create: `site/app.js`
- Create: `site/robots.txt`
- Create: `site/sitemap.xml`
- Modify: `site/index.html`

**Interfaces:**
- Consumes: `data-*` hooks in the page.
- Produces: Install-command copy, persona route switching, and social/search metadata.

- [ ] **Step 1: Add copy interaction**

Use this behavior:

```js
const copyButton = document.querySelector("[data-copy-install]");
const installCommand = document.querySelector("[data-install-command]");

copyButton?.addEventListener("click", async () => {
  const text = installCommand?.textContent?.trim();
  if (!text) return;
  await navigator.clipboard.writeText(text);
  const previous = copyButton.textContent;
  copyButton.textContent = "Copied";
  window.setTimeout(() => {
    copyButton.textContent = previous;
  }, 1600);
});
```

Keep the command selectable when clipboard permission fails.

- [ ] **Step 2: Add accessible persona switching**

Use real buttons with `aria-pressed`. Clicking a route updates only the example
panel, not the URL or document order. All route content must also exist in the
HTML so it remains accessible without JavaScript.

- [ ] **Step 3: Add head metadata**

Include:

- unique title under 60 characters;
- meta description under 160 characters;
- canonical URL only after the final URL is known;
- Open Graph title, description, type, URL, and image;
- Twitter `summary_large_image`;
- theme color;
- JSON-LD `SoftwareApplication` or `CreativeWork` with `isAccessibleForFree:
  true`, no ratings, and no fabricated offers.

- [ ] **Step 4: Add robots and sitemap**

`robots.txt`:

```text
User-agent: *
Allow: /
Sitemap: https://bilbop.org/moneyprinter/sitemap.xml
```

`sitemap.xml` contains `https://bilbop.org/moneyprinter` only. The temporary
Sites deployment may serve the same file until the custom-domain route is
configured.

- [ ] **Step 5: Verify JavaScript syntax**

```bash
node --check site/app.js
```

Expected: exit code `0`.

- [ ] **Step 6: Commit**

```bash
git add site
git commit -m "feat: add landing-page interactions and metadata"
```

---

### Task 4: Browser, mobile, and accessibility verification

**Files:**
- Create: `docs/qa/landing-page.md`
- Modify: site files when defects are found.

**Interfaces:**
- Consumes: Complete static site.
- Produces: Visual evidence and a release-readiness checklist.

- [ ] **Step 1: Start a local server**

```bash
python3 -m http.server 4173 --directory site
```

Expected: server listening on port `4173`.

- [ ] **Step 2: Inspect desktop**

Open `http://127.0.0.1:4173/` at `1440×1000`. Verify:

- the thesis, descriptor, and CTA are visible without scrolling;
- no text overlaps;
- proof labels are visually distinct;
- the reading order matches the design;
- clipboard interaction works;
- there are no console errors.

- [ ] **Step 3: Inspect mobile**

Inspect at `390×844` and `320×568`. Verify:

- no horizontal scroll;
- CTA buttons remain reachable;
- route cards stack;
- code/command text wraps or scrolls within its own region;
- minimum tap target is preserved;
- footer links remain readable.

- [ ] **Step 4: Inspect keyboard and reduced motion**

Navigate with Tab and Shift+Tab. Verify every control has a visible focus state
and logical order. Emulate reduced motion and verify animations stop.

- [ ] **Step 5: Record QA**

`docs/qa/landing-page.md` must record:

```markdown
| Check | Desktop | 390px | 320px | Notes |
|---|---|---|---|---|
| Hero readable | Pass/Fail | Pass/Fail | Pass/Fail | |
| No overflow | Pass/Fail | Pass/Fail | Pass/Fail | |
| Keyboard | Pass/Fail | Pass/Fail | Pass/Fail | |
| Reduced motion | Pass/Fail | Pass/Fail | Pass/Fail | |
| Console errors | Pass/Fail | Pass/Fail | Pass/Fail | |
| Links | Pass/Fail | Pass/Fail | Pass/Fail | |
```

- [ ] **Step 6: Commit**

```bash
git add site docs/qa/landing-page.md
git commit -m "test: verify MoneyPrinter landing page"
```

---

### Task 5: Sites production deployment

**Files:**
- Create or update only through Sites: `.openai/hosting.json`
- Create: `docs/deployment/bilbop-org.md`

**Interfaces:**
- Consumes: Exact verified `site/` source state.
- Produces: Saved Sites version, production URL, and custom-domain handoff.

- [ ] **Step 1: Read existing hosting state**

```bash
test -f .openai/hosting.json && cat .openai/hosting.json
```

Expected: reuse the opaque `project_id` if the file exists; otherwise create one
site exactly once through Sites.

- [ ] **Step 2: Push the exact source state**

Use the Sites source-preparation and push workflow on `site/`. Record the returned
commit SHA. Do not invent or transform any Sites identifier.

- [ ] **Step 3: Save a version**

Save a Sites version whose `commit_sha` exactly matches the pushed source.

- [ ] **Step 4: Deploy the saved version**

Deploy only the saved version. The resulting URL is production. Inspect status
until terminal.

- [ ] **Step 5: Smoke-test production**

Verify the production URL returns the landing page, assets, 404 page, robots, and
sitemap. Recheck mobile layout and console errors.

- [ ] **Step 6: Write the custom-domain handoff**

`docs/deployment/bilbop-org.md` must recommend one exact path:

```text
Primary: https://bilbop.org/moneyprinter
Alternative subdomain: https://moneyprinter.bilbop.org
```

Record the DNS or reverse-proxy values supplied by the actual hosting surface.
Do not invent them. Note that the live Sites URL remains valid until DNS is
configured.

- [ ] **Step 7: Commit**

```bash
git add .openai/hosting.json docs/deployment/bilbop-org.md
git commit -m "chore: record MoneyPrinter production deployment"
```
