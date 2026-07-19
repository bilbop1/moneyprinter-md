# MoneyPrinter.md site

Production landing page for MoneyPrinter.md: a receipts-first revenue operating
system for frontier agents. The site does not promise income, publish an
unconfirmed repository, or imply host compatibility that has not been verified.

The deployable source is a Vinext/React page with a Cloudflare Worker entry
point for Sites. It has no application authentication, database, analytics,
cookies, or user-data collection. Generated output and `node_modules` stay
ignored and local; the public repository contains only the source and lockfile.

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
npm test
```

Use `npx skills add . --list` as the local discovery check before publishing.
The visitor-facing command is
`npx skills add bilbop1/moneyprinter-md`; do not deploy the site until that
remote command passes from a clean directory. `npm run build` produces the
Cloudflare Worker-compatible production output. The required deployment wiring
is committed in `.openai/hosting.json`, `vite.config.ts`, `build/`, and
`worker/`; generated build output and local dependency state are ignored by Git.
