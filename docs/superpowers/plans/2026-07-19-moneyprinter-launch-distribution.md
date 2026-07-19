# MoneyPrinter Launch and Distribution Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce an evidence-backed directory-submission map, paste-ready submissions, and a complete GitHub/X launch package without performing unapproved account actions.

**Architecture:** Keep one canonical product-description and claim sheet, then adapt it to each directory's current requirements. Separate verified submission surfaces from speculative promotion ideas. Social launch assets all resolve to the same GitHub proof loop and landing page.

**Tech Stack:** Markdown, SVG/PNG social assets, GitHub native features, current platform documentation, browser research.

## Global Constraints

- Research platform requirements live on 2026-07-19 or later; do not rely on stale summaries.
- Separate directories that index Agent Skills from model providers, general product directories, and social channels.
- Do not submit, post, create accounts, change DNS, or publish a GitHub repository without confirmed credentials and final authorization.
- Never purchase votes, automate stars, trade engagement, mass-post links, or advertise through unrelated GitHub issues.
- All claims must match the repository and compatibility matrix.
- “Cash collected” may appear only for a real settled result.
- Social visuals may be provocative but cannot display fabricated earnings.

---

### Task 1: Canonical launch fact sheet

**Files:**
- Create: `launch/fact-sheet.md`
- Create: `launch/claims.md`
- Create: `launch/links.md`

**Interfaces:**
- Consumes: README, compatibility matrix, research ledger, evidence taxonomy.
- Produces: Approved reusable facts for every submission and post.

- [ ] **Step 1: Write the fact sheet**

Use:

```markdown
# MoneyPrinter.md fact sheet

## One sentence
A receipts-first revenue operating system for frontier agents.

## What it does
Runs a quick interview, chooses one credible payable test and one fallback, then
guides research, offer design, ethical acquisition, delivery proof, and cashflow
review.

## What makes it different
It labels cash, booked revenue, pipeline, estimates, simulations, and anecdotes
separately.

## Format
Open Agent Skills (`SKILL.md`), MIT licensed, text-first.

## Audience
Beginners, creators, local businesses, professionals, ecommerce operators, and
experienced founders.

## Explicit exclusions
Guaranteed income, fake benchmark earnings, autonomous spam, deceptive tactics,
trading, gambling, and speculative crypto.
```

- [ ] **Step 2: Create the claim allowlist**

`launch/claims.md` must have Approved, Conditional, and Forbidden sections.

Approved:

- open source;
- text-first;
- Agent Skills format;
- receipts-first;
- seven evidence labels;
- human approval before external actions.

Conditional:

- specific compatibility claims only after verification;
- installation count or stars only from current live surfaces;
- field outcomes only with evidence and consent.

Forbidden:

- guaranteed profit;
- personal AGI as established fact;
- “works everywhere”;
- real earnings derived from simulations or examples;
- “fully autonomous” external action.

- [ ] **Step 3: Create the canonical link registry**

`launch/links.md` must contain exact fields:

```markdown
| Surface | Final URL | Confirmed | Notes |
|---|---|---|---|
| GitHub | | No | |
| Landing page | | No | |
| Ko-fi | | No | |
| X account | | No | |
| Skills.sh package | | No | |
| ClawHub package | | No | |
```

Blank values are intentional blockers, not invented URLs.

- [ ] **Step 4: Commit**

```bash
git add launch/fact-sheet.md launch/claims.md launch/links.md
git commit -m "docs: add canonical MoneyPrinter launch facts"
```

---

### Task 2: Submission-channel research

**Files:**
- Create: `launch/submissions/directory-matrix.md`
- Create: `launch/submissions/source-notes.md`

**Interfaces:**
- Consumes: Current official docs and live directory interfaces.
- Produces: Prioritized, evidence-backed channel map.

- [ ] **Step 1: Research direct Agent Skills surfaces**

Verify current submission or discovery behavior for:

- Skills.sh / `npx skills`;
- ClawHub / OpenClaw skills;
- Hermes Skills Hub and skills-sh source;
- Claude Code plugin marketplaces;
- Kimi Code plugins or skill import;
- Codex plugin marketplace or local-skill discovery;
- OpenSpace skill hub;
- MCP Registry only if the product later exposes MCP.

For each, record the official URL, submission method, authentication, review,
package format, ranking/discovery mechanic, expected effort, and whether a
text-only multi-skill repo qualifies.

- [ ] **Step 2: Research curated GitHub surfaces**

Verify:

- relevant `awesome-agent-skills`, Claude, Codex, Kimi, OpenClaw, and solo-business
  lists;
- GitHub Topics and current Trending/Explore behavior;
- repository Releases, Discussions, community-profile, social-preview, and
  sponsor-button mechanics.

Do not recommend promotional issues in unrelated repositories unless their
contribution rules explicitly accept the category.

- [ ] **Step 3: Research adjacent launch directories**

Evaluate Product Hunt, Hacker News Show HN, Dev Hunt, Uneed, AlternativeTo,
Futurepedia, There's An AI For That, Toolify, and relevant open-source showcases.
Label these as adjacent product discovery, not skill installation.

- [ ] **Step 4: Write the prioritized matrix**

Use:

```markdown
| Priority | Surface | Type | Organic discovery | Submission path | Requirements | Cost | Auth | Text-only fit | Status | Source |
|---:|---|---|---|---|---|---|---|---|---|---|
```

Priority rules:

- `P0`: direct install/discovery and strong exact-audience fit;
- `P1`: curated GitHub or agent ecosystem with meaningful traffic;
- `P2`: broad launch directory with plausible fit;
- `P3`: low-signal, paid, stale, or unverified.

- [ ] **Step 5: State the organic-growth verdict**

The matrix conclusion must distinguish:

- GitHub/Skills.sh can amplify an initial install/star velocity;
- they do not guarantee cold-start traffic;
- field reports, releases, forks, and individual skill rankings create recurring
  GitHub-native surface area;
- one honest X post and one useful demo thread are recommended seed actions, not
  a dependency on an existing large audience.

- [ ] **Step 6: Commit**

```bash
git add launch/submissions
git commit -m "research: map MoneyPrinter distribution channels"
```

---

### Task 3: Paste-ready directory submissions

**Files:**
- Create: `launch/submissions/skills-sh.md`
- Create: `launch/submissions/clawhub.md`
- Create: `launch/submissions/hermes.md`
- Create: `launch/submissions/claude.md`
- Create: `launch/submissions/kimi.md`
- Create: `launch/submissions/openspace.md`
- Create: `launch/submissions/awesome-lists.md`
- Create: `launch/submissions/product-hunt.md`
- Create: `launch/submissions/show-hn.md`

**Interfaces:**
- Consumes: Fact sheet, claim allowlist, link registry, directory matrix.
- Produces: Exact commands, titles, descriptions, and checklists ready for user submission.

- [ ] **Step 1: Create a standard submission template**

Every file must contain:

```markdown
# [Surface]

## Verdict
## Current official submission path
## Prerequisites
## Exact command or form URL
## Listing title
## Short description
## Long description
## Tags
## Links required
## Assets required
## Review risks
## Final human action
```

- [ ] **Step 2: Write direct-skill submissions**

Skills.sh copy:

```text
MoneyPrinter.md — receipts-first revenue workflows for AI agents
```

ClawHub/Hermes/Claude/Kimi/OpenSpace copy must mention only verified support and
must not call MiniMax a host.

- [ ] **Step 3: Write curated-list PR package**

`awesome-lists.md` must contain a reusable Markdown entry:

```markdown
- [MoneyPrinter.md](https://github.com/bilbop1/moneyprinter-md) — A receipts-first Agent Skills pack that
  routes users from a short business interview to an ethical payable test,
  delivery proof, and correctly labelled economic results.
```

Also include a PR title, PR body, contribution-rule checklist, and instruction to
customize each PR rather than bulk-submit.

- [ ] **Step 4: Write broad-launch copy**

Product Hunt:

```text
Tagline: The receipts-first revenue operating system for AI agents
```

Show HN title:

```text
Show HN: MoneyPrinter.md – revenue skills that separate real cash from AI hype
```

Descriptions must lead with the open-source method, not donation.

- [ ] **Step 5: Verify against claim allowlist**

Run:

```bash
rg -n -i "guaranteed|works everywhere|fully autonomous|earned \\$|personal AGI is" launch/submissions
```

Expected: no matches outside warnings.

- [ ] **Step 6: Commit**

```bash
git add launch/submissions
git commit -m "docs: prepare MoneyPrinter directory submissions"
```

---

### Task 4: X launch campaign

**Files:**
- Create: `launch/social/x-launch-thread.md`
- Create: `launch/social/x-single-posts.md`
- Create: `launch/social/replies.md`
- Create: `launch/social/posting-checklist.md`

**Interfaces:**
- Consumes: Fact sheet, final URLs, proof visuals.
- Produces: One recommended thread, three standalone posts, and honest follow-up replies.

- [ ] **Step 1: Write the launch thread**

Use this narrative:

1. Strong models arrived; economic operating procedures lagged.
2. Viral agent repos often use simulated or estimated “earnings.”
3. MoneyPrinter separates seven levels of proof.
4. A short interview routes zero-to-veteran users differently.
5. Show three persona examples.
6. Explain open `SKILL.md` portability.
7. Invite field reports and research corrections.
8. Link GitHub and landing page.
9. State the voluntary 1% pledge without guilt or obligation.

The first post must fit within current X limits and include one social image.

- [ ] **Step 2: Write three standalone posts**

Angles:

- `The models changed; the money prompts did not.`
- `Benchmark dollars are not customer dollars.`
- `A roofer, lawyer, TikTok creator, and beginner should not receive the same AI business plan.`

Each post contains one link only and no more than two hashtags.

- [ ] **Step 3: Write reply bank**

Prepare honest answers for:

- Is this a scam or get-rich-quick pack?
- Does it send outreach automatically?
- Why not just use Marketing Skills or ECC?
- Does it work in Claude/Codex/Kimi/OpenClaw/Hermes?
- Why ask for 1%?
- Where are the real earnings screenshots?
- Why exclude trading and crypto?
- Can I contribute my industry?

- [ ] **Step 4: Write posting checklist**

Require:

- confirm final GitHub and landing URLs;
- confirm public repository visibility;
- render and inspect the attached image;
- test both links logged out;
- post recommended thread between `09:00–12:00` in the account audience's primary
  time zone;
- stay available for genuine replies;
- do not delete critical questions;
- never buy or coordinate engagement.

- [ ] **Step 5: Commit**

```bash
git add launch/social
git commit -m "docs: prepare MoneyPrinter X launch campaign"
```

---

### Task 5: Social and repository visuals

**Files:**
- Create: `launch/social/visual-brief.md`
- Create: `launch/social/assets/social-card.png`
- Create: `launch/social/assets/receipts-not-hype.png`
- Create: `launch/social/assets/persona-router.png`
- Create: `site/assets/social-card.png`

**Interfaces:**
- Consumes: Final visual system and approved claims.
- Produces: Inspected 16:9 social previews for GitHub, X, and landing-page metadata.

- [ ] **Step 1: Write the visual brief**

Require:

- `1200×630` output;
- black/editorial background;
- warm off-white receipt strip;
- acid green verification mark;
- no currency piles, sports cars, robots in suits, casino imagery, or fake
  dashboards;
- large text legible at mobile-feed size;
- original geometric graphics;
- exact approved copy only.

- [ ] **Step 2: Generate the main social card**

Copy:

```text
THE MODELS ARE FINALLY GOOD.
THEIR MONEY PLAYBOOKS ARE NOT.

MONEYPRINTER.MD
Receipts-first revenue skills for frontier agents.
```

- [ ] **Step 3: Generate the evidence card**

Copy:

```text
BENCHMARK DOLLARS
ARE NOT CUSTOMER DOLLARS.

Cash. Booked. Pipeline. Estimate. Simulation.
Label the result before you market it.
```

- [ ] **Step 4: Generate the persona-router card**

Show five clean routes from one interview:

```text
ZERO → FIRST PAYABLE TEST
ROOFER → REVENUE RECOVERY
LAWYER → PRODUCTIZED EXPERTISE
CREATOR → CONVERSION LOOP
OPERATOR → BOTTLENECK LEVERAGE
```

- [ ] **Step 5: Inspect every image**

Verify exact text, spelling, contrast, absence of artifacts, and crop safety.
Regenerate any image with malformed text. Copy the approved main card to
`site/assets/social-card.png`.

- [ ] **Step 6: Commit**

```bash
git add launch/social site/assets/social-card.png
git commit -m "design: add MoneyPrinter launch visuals"
```

---

### Task 6: Final launch control sheet

**Files:**
- Create: `launch/LAUNCH-CONTROL.md`
- Create: `launch/overnight-handoff.md`

**Interfaces:**
- Consumes: All repository, deployment, submission, and social deliverables.
- Produces: One safe sequence for the owner to publish and promote.

- [ ] **Step 1: Create the control sheet**

Use phases:

```markdown
## Gate 0 — identity and links
## Gate 1 — public GitHub
## Gate 2 — landing page
## Gate 3 — direct skill directories
## Gate 4 — X seed post
## Gate 5 — curated lists
## Gate 6 — field reports and releases
```

Each gate contains exact prerequisites, action, verification, rollback, and
owner.

- [ ] **Step 2: Set the recommended order**

1. Publish GitHub release candidate.
2. Confirm logged-out install and README social preview.
3. Deploy/confirm landing page.
4. Submit Skills.sh and ClawHub.
5. Post the X thread.
6. Answer replies for 60 minutes.
7. Submit only to curated lists whose rules fit.
8. Open the first transparent simulated persona discussion.
9. Replace simulations only when real field reports arrive.

- [ ] **Step 3: Write the overnight handoff**

Include:

- completed work with links;
- verification results;
- credentials or handles still needed;
- actions intentionally not taken;
- exact first five owner clicks;
- recommended launch post and image;
- known risks;
- next 24-hour response plan.

- [ ] **Step 4: Run the final token and link scan**

```bash
rg -n -e 'T[B]D' -e 'T[O]DO' -e 'F[I]XME' -e 'example\\.com' -e 'your-username' launch README.md site docs
```

Expected: no unresolved token appears in a deployed or public-facing file.
Unknown account values such as the Ko-fi username are described as explicit
owner-input blockers without dummy substitution strings.

- [ ] **Step 5: Commit**

```bash
git add launch
git commit -m "chore: finalize MoneyPrinter launch control"
```
