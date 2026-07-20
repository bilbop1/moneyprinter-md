# Landing-page QA

Reviewed: 2026-07-20
Release candidate: `0.1.0-rc.3`

## Automated checks

From `site/`:

```bash
npm test
npm run lint
```

Result:

- Vinext production build completed.
- Six server-render, metadata-safety, accessibility, flow, and social-image
  tests passed.
- ESLint completed with no findings.
- The two committed copies of the social image are byte-identical 1200 × 630
  PNGs.

## Browser checks

Desktop, 1440 × 1250:

- The scan-first hero, 14-day receipt, rc.3 marker, install control, GitHub
  control, and full disclaimer rendered without overlap or clipping.
- The desktop shell expands to 1360 px, and the Ko-fi support block sits above
  the receipt with a second in-page link to the full voluntary 1% pledge.
- Below 720 px, both support controls stack at full width before the receipt.
- One `h1`, eight named sections, all seven canonical skill names, the full
  evidence taxonomy, compatibility caveats, and voluntary pledge remain in the
  rendered document.
- The visitor-facing command is
  `npx skills add bilbop1/moneyprinter-md`, and the GitHub control is a real
  link to the intended repository. Both GitHub targets passed from a clean
  directory on 2026-07-19. `npx skills add . --list` remains the local
  QA/discovery command in repository documentation.
- The copy control changed to `Copied` and exposed the live-region confirmation
  `Command copied to clipboard.`
- The ten-stage flow renders as a connected operating circuit on wide screens:
  Permission, scan, and confirmation feed a money loop with an exact-action
  approval gate between Payable test and Acquire, and a dashed return from
  Rerank to Prioritize.
- Below 720 px, the decorative SVG wiring hides and the ten steps become one
  ordered vertical circuit with a continuous rail and the approval gate still
  between Payable test and Acquire.
- The evidence taxonomy renders as a descending strength ladder, the five
  starting routes share a visible entry rail, the seven skills form a connected
  router/worker relay, compatibility is a written-state validation console, and
  the method links are large guardrail controls rather than flat tables.

Current preview captures:

| Output | Browser viewport / document width | Horizontal overflow | Navigation | Flow/skill layout |
| --- | ---: | --- | --- | --- |
| 1440 × 1250 | 1440/1440 px | None | Full header | SVG operating circuit; six-worker relay alternates across a shared rail |
| 320 × 568 | 320/320 px | None | Compact header | One-column loop and vertical skill relay |

End-to-end browser inspection also covered 1440 × 1000, 900 × 1000, and a true
320 × 900 viewport. No rendered element was offscreen, no visible link or
button measured below 44 × 44 px, and the page had no horizontal overflow at
any inspected width. At 320 px, the flow is one 248 px column and all ten nodes
remain readable in order.

The Browser screenshot surface subtracts its capture gutter from requested
dimensions. Capture bounds were calibrated to produce exact 1440 × 1250 and
320 × 568 PNG outputs without resampling or distortion. The final captures used
the verified `localhost:4174` production build, passed PNG signature and
dimension checks, and were visually inspected against the rc.3 source.

## Metadata abuse cases

The metadata builder uses the normalized `Host` header and ignores
`X-Forwarded-Host` and `X-Forwarded-Proto`.

Covered cases:

- a valid custom host produces same-origin canonical, Open Graph, and X image
  URLs;
- a hostile or comma-separated forwarded-host chain cannot replace that host;
- an invalid comma-separated `Host` falls back to the non-public
  `http://localhost` origin instead of throwing or emitting an attacker URL;
- the X image includes alternative text.

## Visual assets

- `launch/assets/moneyprinter-social-card.png` — primary X/GitHub/Open Graph
  image, 1200 × 630.
- `launch/assets/landing-desktop-preview.png` — complete first-screen desktop
  preview.
- `launch/assets/landing-mobile-preview.png` — exact 320 × 568 mobile preview.

The primary card says `SCAN THE LAST 14 DAYS`, `GET TO WORK`,
`ONE CONFIRMATION`, and `RECEIPTS → RERANK`. It does not claim that every host
has been activation-tested.

## Prior published runtime baseline

Verified on 2026-07-19 before the rc.3 deployment task:

- `https://moneyprinter.bilbop.org` returned HTTPS 200 with a valid
  certificate.
- Sites reported the custom-domain, provider, and SSL states active.
- The canonical and `og:url` use
  `https://moneyprinter.bilbop.org/`; the X and Open Graph image use
  `https://moneyprinter.bilbop.org/og.png`.
- `/og.png` returned HTTP 200 as `image/png`.
- The live page contains the final GitHub URL and
  `npx skills add bilbop1/moneyprinter-md`.
- The live page shows `0.1.0-rc.2` in its header and footer with no stale rc.1
  marker.
- The GitHub repository returned HTTP 200, and fresh remote `--list` checks
  against both the default branch and public tag `v0.1.0-rc.2` found all seven
  skills.

These checks establish the prior rc.2 public baseline. They do not establish
conversation-level activation in any named host.

## Current rc.3 runtime receipt

Verified on 2026-07-20 after the current rc.3 deployment:

- Sites version 5 was built, saved, and deployed from
  `14f8e29656599df8b7be9929e5967e1b7eb5ef75`.
- The configured production URL `https://moneyprinter.bilbop.org` returned
  HTTPS 200 with the rc.3 scan-first copy and the new Ko-fi hero controls.
- Sites reported the custom-domain, provider, and SSL states active.
- Live browser measurement found a 1360 px hero, zero horizontal overflow, the
  Ko-fi block above the receipt, and the exact `https://ko-fi.com/bilbop`
  target.
- `/og.png` returned HTTP 200 as `image/png`.
- The public GitHub release, remote install target, and landing-page calls to
  action resolve to the final project.
- The full named-host chain remains experimental. The best corrected blind
  local session run is still 5/6, and no simulation score was upgraded during
  publication.
