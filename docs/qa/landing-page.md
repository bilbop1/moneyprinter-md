# Landing-page QA

Reviewed: 2026-07-19
Release candidate: `0.1.0-rc.2`

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
- The visitor-facing command is
  `npx skills add bilbop1/moneyprinter-md`, and the GitHub control is a real
  link to the intended repository. Both GitHub targets passed from a clean
  directory on 2026-07-19. `npx skills add . --list` remains the local
  QA/discovery command in repository documentation.
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

## Published runtime checks

Verified on 2026-07-19:

- `https://moneyprinter.bilbop.org` returned HTTPS 200 with a valid
  certificate.
- Sites reported the custom-domain, provider, and SSL states active.
- The canonical and `og:url` use
  `https://moneyprinter.bilbop.org/`; the X and Open Graph image use
  `https://moneyprinter.bilbop.org/og.png`.
- `/og.png` returned HTTP 200 as `image/png`.
- The live page contains the final GitHub URL and
  `npx skills add bilbop1/moneyprinter-md`.
- The GitHub repository returned HTTP 200, and a fresh remote `--list` check
  against the current public source found all seven skills. Repeat the check
  against release target `v0.1.0-rc.2` after the tag is public.

These checks establish public site and installer availability. They do not
establish conversation-level activation in any named host; that retained test
remains open.
