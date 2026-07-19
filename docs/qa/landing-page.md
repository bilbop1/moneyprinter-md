# Landing-page QA

Reviewed: 2026-07-19
Release candidate: `0.1.0-rc.1`

## Automated checks

From `site/`:

```bash
npm test
npm run lint
```

Result:

- Vinext production build completed.
- Five server-render, metadata-safety, accessibility, and social-image tests
  passed.
- ESLint completed with no findings.
- The committed social image is a real 1200 × 630 PNG.

## Browser checks

Desktop:

- One `h1`, eight named sections, all seven canonical skill names, the full
  evidence taxonomy, compatibility caveats, and the voluntary pledge rendered.
- The local command is `npx skills add .`; `--list` remains a QA/discovery
  command in repository documentation.
- The copy control changed to `Copied` and exposed the live-region confirmation
  `Command copied to clipboard.`
- No warning or error was recorded for `localhost:4173`.

Exact mobile emulation:

| Viewport | Root width | Document overflow | Navigation | Flow/skill layout |
| --- | ---: | --- | --- | --- |
| 390 × 844 | 390 px | None | Compact header | Single-column below 720 px |
| 320 × 568 | 320 px | None | Compact header | 294/296 px single columns |

The mobile checks used browser device-metric emulation rather than the host
window's minimum width. The first raw window-size screenshots were discarded
because Edge held a 492 px CSS viewport while cropping the image to 390 px.

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

The primary card says `QUICK INTERVIEW`, `BEGINNER → OPERATOR`, and
`PORTABLE CORE`. It does not claim that every host has been activation-tested.

## Remaining publication checks

Before public promotion:

1. Open the deployed Sites URL and eventual custom domain in a logged-out
   browser.
2. Confirm the canonical and image URLs use the requested host.
3. Confirm the GitHub call to action no longer says `not live` only after the
   repository exists publicly.
4. Run the published installer from a clean temporary directory.
