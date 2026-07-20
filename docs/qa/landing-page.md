# Landing-page QA

Reviewed: 2026-07-19
Release candidate: `0.1.0-rc.3`

## Automated checks

From `site/`:

```bash
npm test
npm run lint
```

Result:

- Vinext production build completed.
- Five server-render, metadata-safety, accessibility, flow, and social-image
  tests passed.
- ESLint completed with no findings.
- The two committed copies of the social image are byte-identical 1200 × 630
  PNGs.

## Browser checks

Desktop, 1440 × 1250:

- The scan-first hero, 14-day receipt, rc.3 marker, install control, GitHub
  control, and full disclaimer rendered without overlap or clipping.
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
- The ten-stage flow renders in a bounded five-column grid on wide screens and
  collapses to one column below 720 px.

Current preview captures:

| Output | Browser inner/root/body width | Horizontal overflow | Navigation | Flow/skill layout |
| --- | ---: | --- | --- | --- |
| 1440 × 1250 | 1440/1425/1425 px | None; 15 px is the visible vertical scrollbar | Full header | Five-column flow |
| 320 × 568 | 335/320/320 px | None in the captured 320 px content plane | Compact header | Single-column below 720 px |

The current mobile artifact uses a 335 px browser viewport because this browser
reserves 15 px for a classic vertical scrollbar. The screenshot crops the
remaining 320 px content plane, whose root and body widths both measured 320
px. This keeps the committed artifact exactly 320 × 568 without pretending the
browser uses an overlay scrollbar.

The first desktop attempt used `127.0.0.1` while Vinext was listening on IPv6
localhost and captured `ERR_CONNECTION_REFUSED`. It was discarded. The final
desktop and mobile captures used the verified `localhost:4173` production
build. Both committed previews were visually inspected after the current
source-candidate wording replaced the stale public-install copy.

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

These checks establish public site and installer availability. They do not
establish conversation-level activation in any named host; that retained test
remains open. They also do not establish that rc.3 is live; publication and a
fresh runtime receipt belong to the release task.
