# bilbop.org deployment handoff

Desired public hostname: `moneyprinter.bilbop.org`
Local site source: `site/`

## Current status

The site is deployed through Sites and public at
`https://moneyprinter.bilbop.org`. On 2026-07-19:

- the custom hostname returned HTTPS 200 with a valid certificate;
- Sites reported the custom-domain, provider, and SSL states active;
- DNS resolved the `moneyprinter` CNAME to
  `custom-domains.chatgpt.site.`;
- the canonical, `og:url`, and social-image URLs used the custom hostname;
- `/og.png` returned HTTP 200 as `image/png`;
- the live GitHub link and displayed install command matched the public
  repository; and
- the next release/distribution source target is `v0.1.0-rc.2`; repeat the
  clean remote listing after that tag is public.

The existing Sites project ID is persisted in
`site/.openai/hosting.json`. Reuse that exact project for later versions; do
not create a duplicate project or substitute another ID.

## DNS safety boundary

The MoneyPrinter hostname uses the dedicated `moneyprinter` CNAME. Publishing
this subdomain did not require changing the root A records, nameservers, MX,
SPF, DMARC, DKIM, `autoconfig`, or `autodiscover` records. Those records serve
the root site and mail and must remain untouched.

For a later domain repair, use only the exact records returned by Sites and
compare the complete DNS record set before and after the change. Do not infer a
target from another Sites project.

## Future deployment sequence

1. Use the existing project in `site/.openai/hosting.json`.
2. Rerun `npm test` and `npm run lint` from `site/`.
3. Push the exact site source state to its Sites source repository.
4. Save a version from that pushed commit SHA and deploy that saved version.
5. Poll the deployment to a terminal state.
6. Recheck the custom-domain, provider, and SSL states.
7. Repeat the public checks below before announcing a new version.

## Post-deploy checks

- Open both the Sites URL and custom hostname while logged out.
- Confirm the canonical, `og:url`, Open Graph image, and X image use the
  requested host.
- Confirm `/og.png` is 1200 × 630 and publicly fetchable.
- Confirm the GitHub control opens the intended public repository and the
  displayed remote install command passes from a clean directory.
- Repeat the clean published-install test before posting launch copy.
