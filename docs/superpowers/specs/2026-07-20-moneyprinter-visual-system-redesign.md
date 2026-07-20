# MoneyPrinter Visual System Redesign

**Date:** 2026-07-20
**Status:** Approved for implementation under standing design authority
**Surface:** `moneyprinter.bilbop.org`

## Verdict

The landing page has a strong hero and receipt motif, but its middle sections
collapse into interchangeable bordered grids. The redesign will turn those
sections into an editorial operating diagram: every visual structure must
explain ranking, routing, handoff, approval, or feedback instead of merely
containing text.

The page will keep its dark ink, warm paper, acid-lime, and stamped-receipt
language. It will not add gradients, glass panels, decorative AI imagery, or
generic dashboard cards.

## Approaches considered

### Static illustration

A single raster or generated diagram could look dramatic, but it would bake
critical labels into an image, become difficult to maintain, and degrade on
small screens. Rejected.

### CSS cards with arrows

Adding arrows between the existing boxes would be inexpensive, but the result
would still read as a table with decoration. It would not communicate the
approval gate or the rerank feedback loop clearly. Rejected.

### Semantic HTML plus SVG and CSS

Use semantic lists, headings, and table roles for the content; SVG only for
connectors, arrows, and the feedback path; CSS for responsive hierarchy and
brand styling. This gives the page a real schematic while keeping every label
accessible, selectable, and responsive. Chosen.

## Section design

### 1. The loop: an operating circuit

The ten steps become one connected diagram with two distinct phases:

- **Read the work:** Permission → 14-day scan → Confirm.
- **Run the money loop:** Prioritize → Offer → Payable test → Acquire → Deliver
  → Receipt → Rerank.

The phase transition is explicit. An **exact-action approval** gate sits between
the payable test and external acquisition. A visible return path runs from
Rerank back to Prioritize, so the section reads as a loop rather than a numbered
checklist.

The steps remain an ordered list in the document. Desktop uses a plotted
schematic with an SVG connector layer behind the nodes. Mobile becomes a
vertical circuit with a persistent rail, directional arrows, an approval gate,
and a return cue; it must not create horizontal overflow.

### 2. Evidence: a signal ladder

The evidence taxonomy becomes a descending ladder. Width, marker strength, and
color communicate confidence:

- cash collected is the strongest and widest rung;
- contracted and booked revenue remain strong but visibly unsettled;
- pipeline signal is provisional;
- estimates, simulations, and anecdotes use increasingly cautionary treatment.

This remains an ordered list. The visual must make it impossible to mistake an
estimate or anecdote for collected cash.

### 3. Starting routes: an entry rail

The five persona routes stay scannable, but their numbers attach to a continuous
vertical rail. Each route reads as an entry point into the same system rather
than a generic accordion row. Hover and focus states may illuminate the relevant
rail segment without hiding content.

### 4. Seven skills: a relay

`moneyprinter` becomes the control/router node. The six specialist skills form
a connected relay:

`opportunity-radar → offer-engine → payable-test → ethical-acquisition →
delivery-proof → cashflow-review`

The layout distinguishes control from execution and shows handoffs with a
continuous signal rail. It must not look like seven equal feature cards.

### 5. Compatibility: a validation console

The compatibility section retains its exact evidence and caveats but becomes an
instrument panel. Each row has a surface label, a visible state lamp/stamp, and
plain-language meaning. Honest distinctions such as “locally validated,”
“experimental,” and “provider-only” remain prominent. Table semantics or
equivalent ARIA roles are preserved.

### 6. Method: numbered guardrail controls

The three method links become large numbered guardrail placards with an
offset/angled editorial edge and directional affordance. They remain real links
with at least 44-pixel targets and visible focus states.

## Motion and interaction

Motion is subordinate to comprehension. On capable devices, connector strokes
or signal indicators may reveal gently as the page enters view, but the diagram
must be fully understandable without animation. Under
`prefers-reduced-motion: reduce`, all reveals and transforms become static.

Hover effects may brighten a path or stamp; they must not be required to expose
text or meaning.

## Accessibility and responsiveness

- Preserve a single `h1`, logical heading order, and semantic list structure.
- SVG connectors are decorative and hidden from assistive technology.
- Do not place essential text inside SVG.
- State may not depend on color alone; every signal includes a written label.
- Maintain AA contrast for body text and receipt/stamp combinations.
- Maintain visible keyboard focus and 44-pixel interactive targets.
- Verify no horizontal overflow at 320 CSS pixels.
- Verify desktop composition at 1440 CSS pixels and a representative tablet
  width.

## Verification

Tests will require:

- ordered semantic loop and evidence structures;
- a connector SVG with arrow marker and rerank return path;
- an exact-action approval gate;
- distinct signal-ladder, entry-rail, skill-relay, validation-console, and
  guardrail-control structures;
- responsive mobile circuit rules;
- reduced-motion handling;
- unchanged honesty copy and compatibility states.

After automated tests and lint pass, the built site will be inspected at desktop
and 320-pixel mobile widths. New desktop and mobile launch previews will replace
the old grid-based screenshots. The exact verified source commit will then be
pushed, saved as a Sites version, deployed, and checked on the custom domain.
