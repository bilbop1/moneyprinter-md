# bilbop.org deployment handoff

Desired public hostname: `moneyprinter.bilbop.org`
Local site source: `site/`

## Current status

The production build, tests, lint, desktop render, and exact 390 px / 320 px
mobile renders pass. The site is not deployed and the custom hostname is not
configured.

The required Sites project creation was attempted once on 2026-07-19 with:

- title: `MoneyPrinter.md`
- slug: `moneyprinter-md`
- description: `Receipts-first revenue operating system for frontier AI
  agents.`

The Sites service returned an internal error. An immediate owned-site listing
showed no MoneyPrinter project, so no opaque `project_id` or source credential
was returned and nothing could be persisted to
`site/.openai/hosting.json`. No version was saved or deployed.

The Sites workflow prohibits blindly calling create more than once for the same
local site. Do not invent an ID, reuse the unrelated `PVC Signal Ledger`
project, or pretend a production URL exists.

## Safe recovery

1. List the owner's Sites projects and confirm that a MoneyPrinter project was
   not created asynchronously.
2. If no project exists, recover through the Sites UI/support or a fresh
   user-authorized publish attempt rather than guessing an identifier.
3. Persist the returned project ID exactly as `project_id` in
   `site/.openai/hosting.json`.
4. Restore the validated nested site Git metadata from the ignored reversible
   backup at `.superpowers/sdd/site-nested-git-backup` if a standalone Sites
   source push is required.
5. Commit the hosting manifest, rerun `npm test` and `npm run lint`, and push
   that exact site source state to the Sites source repository using a
   short-lived credential.
6. Package and save a Sites version from the same pushed commit SHA.
7. Verify owner-only access, deploy the saved version privately, poll to a
   terminal state, and inspect the production URL.
8. Attach `moneyprinter.bilbop.org` only after the production site is healthy.
   Use the exact CNAME and verification records returned by Sites.
9. Add those exact records at the domain's DNS provider. No DNS target has been
   returned yet, so none is documented here.
10. Recheck the custom-domain status, then obtain explicit approval before any
    public/open-world deployment.

## Post-deploy checks

- Open both the Sites URL and custom hostname while logged out.
- Confirm the canonical, `og:url`, Open Graph image, and X image use the
  requested host.
- Confirm `/og.png` is 1200 × 630 and publicly fetchable.
- Confirm the page has no `not live` GitHub label only after the repository is
  public.
- Repeat the clean published-install test before posting launch copy.
