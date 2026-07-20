# Task 5 report: scan-first landing page

## Status

Complete locally. The landing page, metadata, release markers, social card, and
checked-in previews now lead with the permissioned 14-day scan and the
confirmation-to-rerank run.

Publication is intentionally not part of this task. The live-site baseline in
`docs/qa/landing-page.md` remains rc.2 until the release task deploys and
verifies rc.3.

## RED evidence

The required rendered-HTML assertions were added before the page copy changed.

Command:

```sh
cd site
npm test
```

Initial result: exit 1. Vinext built successfully, four tests passed, and the
main render test failed on the first new requirement:

```text
AssertionError: The input did not match the regular expression /last 14 days/i
tests 5
pass 4
fail 1
```

The old page still led with the model/playbook headline and an
interview-first, eight-stage flow, so the failure represented the missing
feature rather than a broken fixture.

## Implementation

- Replaced the hero with a bounded claim: MoneyPrinter scans every detected AI
  CLI and GUI the current host can access, asks for one confirmation, and gets
  to work.
- Replaced the simulated-dollar receipt with a 14-day coverage receipt.
- Replaced the eight-stage interview loop with:
  `Permission -> 14-day scan -> Confirm -> Prioritize -> Offer -> Payable test
  -> Acquire -> Deliver -> Receipt -> Rerank`.
- Changed the wide flow to a bounded five-column grid and the narrow flow to
  one column. There is no horizontal flow strip at 320 px.
- Updated page metadata, the site package, both page release markers, all seven
  skill metadata blocks, and the release verifier to `0.1.0-rc.3`.
- Added rendered assertions for the flagship claims, ordered ten-stage flow,
  rc.3-only page marker, responsive flow CSS, and byte-identical card copies.

## Social card

The parent-supplied, visually approved source was mechanically reduced from
1730 × 909 to 1200 × 630 with `sips -Z 1200`; it did not require another
generation pass.

Both committed card paths are byte-identical:

```text
a82c7cbfabb6f9e34dd21d2ed5febb3085e8ca3bea81ba1799d114755779d59e  site/public/og.png
a82c7cbfabb6f9e34dd21d2ed5febb3085e8ca3bea81ba1799d114755779d59e  launch/assets/moneyprinter-social-card.png
```

The card says `WITH PERMISSION • DETECTED + ACCESSIBLE`,
`SCAN THE LAST 14 DAYS`, `GET TO WORK`, `14-DAY SCAN`, `ONE CONFIRMATION`, and
`RECEIPTS -> RERANK`. Visual inspection found the text legible and the receipt
edge intact at the declared dimensions.

## Browser evidence

The first desktop capture was invalid: Vinext was listening on IPv6 localhost
while Edge requested `127.0.0.1`, so the image contained
`ERR_CONNECTION_REFUSED`. It was discarded and replaced only after
`http://localhost:4173/` returned HTTP 200 with the rc.3 title, hero, and two
rc.3 markers.

Final assets:

```text
launch/assets/landing-desktop-preview.png  1440 × 1250
launch/assets/landing-mobile-preview.png   320 × 568
```

The desktop preview shows the full first-screen hero and receipt with no
overlap or clipping. Both final PNGs were inspected with `view_image`.

A raw 320 px Edge window retains a roughly 500 px CSS viewport, so the exact
mobile capture used Edge DevTools device-metric emulation. The pre-capture
probe returned:

```json
{"title":"MoneyPrinter.md | Turn 14 days of AI work into one money route","hero":"Your last 14 days are already the brief.","innerWidth":320,"innerHeight":568,"rootScrollWidth":320,"bodyScrollWidth":320,"readyState":"complete"}
```

The final mobile image wraps the hero, lede, and supporting copy within the
320 px viewport without horizontal clipping.

## GREEN verification

Fresh site gate:

```text
cd site
npm test

tests 5
pass 5
fail 0

npm run lint
ESLint completed with no findings.
```

Fresh repository gate:

```text
node scripts/verify-release.mjs
release 0.1.0-rc.3: 7 skills and 6 X posts verified

node scripts/verify-public-copy.mjs
public copy contract: 42 current files, 5 simulations, and 16 adversarial fixtures verified

node scripts/verify-money-machine-chain.mjs
money-machine chain contract: 6 skills and 11 references verified

git diff --check
clean
```

The first repository-verifier invocation was accidentally run from `site/`
and returned `MODULE_NOT_FOUND` for the three root-relative scripts. Each
command was immediately rerun from the repository root and produced the
passing results above.

## Remaining limitations

1. These are local render, contract, and visual receipts. They do not prove
   that rc.3 is deployed.
2. The static landing page explains the feature; it does not scan sessions.
   Scanning happens inside the installed Markdown skill through the current
   host's own permissions and tools.
3. Cross-application session access and conversation-level activation remain
   host-dependent and unverified unless a later host-specific receipt says
   otherwise.
4. The screenshots cover the first screen, not every section at every
   breakpoint. Server-rendered tests cover the complete document structure and
   the exact 320 px browser probe covers horizontal overflow.

## Review correction

Review found one P1: the standalone card still said
`SCAN THE LAST 14 DAYS` without visible permission or source-coverage scope.
The page copy was bounded, but the card could travel without that context.

No new image generation was used. A deterministic Sharp composite sampled the
existing black field, covered only the old top line, and replaced it with
exactly `WITH PERMISSION • DETECTED + ACCESSIBLE`. The title, scan/get-to-work
lines, receipt edge, and bottom `14-DAY SCAN • ONE CONFIRMATION • RECEIPTS ->
RERANK` line remain unchanged.

The same corrected PNG was copied to both public paths and visually inspected
at 1200 × 630. Open Graph and X alternative text now state `with permission`,
`detected`, and `accessible`; rendered tests assert the scoped string on both
metadata surfaces.
