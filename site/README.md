# MoneyPrinter.md site

Production landing page for MoneyPrinter.md: a receipts-first revenue operating
system for frontier agents. The site does not promise income, publish an
unconfirmed repository, or imply host compatibility that has not been verified.

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
npm test
```

Use `npx skills add . --list` as the local discovery check before the visitor-
facing install command `npx skills add .`. `npm run build` produces the
Cloudflare Worker-compatible production output. The required deployment wiring
is committed in `.openai/hosting.json`, `vite.config.ts`, `build/`, and
`worker/`; generated build output and local dependency state are ignored by Git.
