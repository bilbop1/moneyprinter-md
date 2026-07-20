import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const siteRoot = new URL("../", import.meta.url);
const requiredSectionIds = [
  "hero",
  "proof",
  "routes",
  "flow",
  "receipts",
  "compatibility",
  "method",
  "pledge",
];

function luminance(hex) {
  const channels = hex.slice(1).match(/.{2}/g).map((channel) => Number.parseInt(channel, 16) / 255);
  const [red, green, blue] = channels.map((channel) =>
    channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrast(first, second) {
  const [lighter, darker] = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
}

async function render(requestHeaders = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: {
        accept: "text/html",
        ...requestHeaders,
      },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the MoneyPrinter receipts-first landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>MoneyPrinter\.md \| Turn 14 days of AI work into one money route<\/title>/i);
  assert.match(html, /<link rel="canonical" href="http:\/\/localhost\/"/i);
  assert.match(html, /<meta property="og:image" content="http:\/\/localhost\/og\.png"/i);
  assert.match(html, /<meta property="og:image:alt" content="MoneyPrinter\.md: with permission, scan the last 14 days of detected and accessible AI sessions, get to work, then rerank from receipts\."/i);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"/i);
  assert.match(html, /<meta name="twitter:image" content="http:\/\/localhost\/og\.png"/i);
  assert.match(html, /<meta name="twitter:image:alt" content="MoneyPrinter\.md: with permission, scan the last 14 days of detected and accessible AI sessions, get to work, then rerank from receipts\."/i);
  assert.match(html, /With permission, MoneyPrinter scans accessible AI sessions/);
  assert.match(html, /WITH PERMISSION\s*\/\s*RECEIPTS FIRST/);
  assert.match(html, /Your last 14 days are already the brief\./);
  assert.match(html, /last 14 days/i);
  assert.match(html, /AI CLI and GUI/i);
  assert.match(html, /one confirmation/i);
  assert.match(html, /gets to work/i);
  assert.doesNotMatch(html, /Answer a short interview/i);
  assert.match(
    html,
    /Permission[\s\S]*14-day scan[\s\S]*Confirm[\s\S]*Prioritize[\s\S]*Offer[\s\S]*Payable test[\s\S]*Acquire[\s\S]*Deliver[\s\S]*Receipt[\s\S]*Rerank/i,
  );
  assert.match(html, /No guaranteed income\. No fake benchmark dollars\. No autonomous spam\./);
  assert.match(html, /npx skills add bilbop1\/moneyprinter-md/);
  assert.doesNotMatch(html, /npx skills add (?:\.|\S+ --list)/);
  assert.match(
    html,
    /<a[^>]+href="https:\/\/github\.com\/bilbop1\/moneyprinter-md"[^>]*>View on GitHub/i,
  );
  assert.match(
    html,
    /<a[^>]+href="https:\/\/ko-fi\.com\/bilbop"[^>]*>Support maintenance on Ko-fi/i,
  );
  assert.match(html, /bilbop1\/moneyprinter-md/);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);

  for (const id of requiredSectionIds) {
    assert.match(html, new RegExp(`<section[^>]+id=["']${id}["']`, "i"));
  }

  for (const label of [
    "Cash collected",
    "Revenue contracted",
    "Revenue booked",
    "Pipeline signal",
    "Estimated economic value",
    "Simulation",
    "Unverified anecdote",
  ]) {
    assert.match(html, new RegExp(label));
  }

  for (const skill of [
    "moneyprinter",
    "opportunity-radar",
    "offer-engine",
    "payable-test",
    "ethical-acquisition",
    "delivery-proof",
    "cashflow-review",
  ]) {
    assert.match(html, new RegExp(skill));
  }

  assert.match(html, /Inventory real skills and one reachable buyer privately/);
  assert.match(html, /Audit one week of missed-call or estimate-follow-up records privately/);
  assert.match(html, /Baseline one leaking handoff privately/);
  assert.match(html, /The test—or discovery step—is bounded and reviewable\./);
  assert.doesNotMatch(
    html,
    /book five discovery calls|measure replies|test a fix for seven days/i,
  );

  assert.match(html, /<a[^>]+class=["'][^"']*skip-link/i);
  assert.match(html, /<header\b/i);
  assert.match(html, /<main\b/i);
  assert.match(html, /<footer\b/i);
  assert.match(html, /0\.1\.0-rc\.3/);
  assert.doesNotMatch(html, /0\.1\.0-rc\.2/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site|Starter Project|codex-preview|react-loading-skeleton/i);
});

test("keeps the production surface honest and starter-free", async () => {
  const [page, layout, css, packageJson, readme] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("package.json", siteRoot), "utf8"),
    readFile(new URL("README.md", siteRoot), "utf8"),
  ]);

  assert.match(page, /navigator\.clipboard/);
  assert.match(page, /https:\/\/github\.com\/bilbop1\/moneyprinter-md/);
  assert.match(page, /host activation remains unverified/i);
  assert.match(page, /MiniMax is provider-only/i);
  assert.match(page, /Install all seven skills from the public repository\./i);
  assert.match(page, /Public GitHub installer command verified\./i);
  assert.doesNotMatch(
    page,
    /Remote install target — confirm the repository is live before running|live-public verification is pending/i,
  );
  assert.match(page, /voluntarily returning 1%/i);
  assert.match(page, /https:\/\/ko-fi\.com\/bilbop/);
  assert.deepEqual(
    [...new Set(page.match(/https?:\/\/[^";\s]+/g) ?? [])],
    ["https://github.com/bilbop1/moneyprinter-md", "https://ko-fi.com/bilbop"],
  );
  assert.doesNotMatch(layout, /next\/font|Starter Project|codex-preview/i);
  assert.doesNotMatch(css, /@import\s+url|https?:\/\//i);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(packageJson, /drizzle|db:generate/);
  assert.equal(JSON.parse(packageJson).name, "moneyprinter-md-site");
  assert.equal(JSON.parse(packageJson).version, "0.1.0-rc.3");
  assert.match(readme, /npx skills add \. --list/);

  for (const unusedStarterPath of [
    "../app/chatgpt-auth.ts",
    "../db/index.ts",
    "../drizzle.config.ts",
    "../examples/d1/app/api/notes/route.ts",
    "../public/file.svg",
    "../public/globe.svg",
    "../public/window.svg",
  ]) {
    await assert.rejects(access(new URL(unusedStarterPath, import.meta.url)));
  }

  const guaranteedIncomeMentions = page.match(/guaranteed income/gi) ?? [];
  assert.equal(guaranteedIncomeMentions.length, 1);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /min-height:\s*44px/);
  assert.match(css, /max-width:\s*1180px/);
  assert.match(css, /\.wordmark,\s*nav a,\s*\.site-footer a,\s*\.text-control\s*\{[^}]*min-height:\s*44px[^}]*display:\s*inline-flex/is);
  assert.match(css, /\.hero-copy,\s*\.hero-receipt\s*\{[^}]*min-width:\s*0/is);
  assert.match(css, /\.install-control code\s*\{[^}]*min-width:\s*0/is);
  assert.match(css, /@media \(max-width:\s*900px\)\s*\{[^}]*\.hero\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)/is);
  assert.match(css, /@media \(max-width:\s*720px\)/i);
  assert.match(css, /\.flow-strip\s*\{[^}]*grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)[^}]*overflow-x:\s*clip/is);
  assert.doesNotMatch(css, /\.flow-strip\s*\{[^}]*grid-template-columns:\s*repeat\(8/i);
  assert.match(css, /\.flow-strip,\s*\.skill-map\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)[^}]*overflow-x:\s*visible/is);

  const paper = css.match(/--paper:\s*(#[0-9a-f]{6})/i)?.[1];
  const stampInk = css.match(/--stamp-ink:\s*(#[0-9a-f]{6})/i)?.[1];
  assert.ok(paper && stampInk, "receipt paper and stamp colors must be explicit hex values");
  assert.ok(contrast(paper, stampInk) >= 4.5, "UNSETTLED stamp ink must meet AA contrast on receipt paper");
});

test("derives social URLs from Host and ignores forwarded-host injection", async () => {
  const response = await render({
    host: "preview.moneyprinter.example",
    "x-forwarded-host": "evil.example, proxy.example",
    "x-forwarded-proto": "javascript",
  });
  const html = await response.text();

  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/preview\.moneyprinter\.example\/"/i,
  );
  assert.match(
    html,
    /<meta property="og:image" content="https:\/\/preview\.moneyprinter\.example\/og\.png"/i,
  );
  assert.doesNotMatch(html, /evil\.example|javascript:/i);
});

test("falls back to a non-public local origin for an invalid Host", async () => {
  const response = await render({ host: "bad.example, proxy.example" });
  const html = await response.text();

  assert.match(html, /<link rel="canonical" href="http:\/\/localhost\/"/i);
  assert.doesNotMatch(html, /bad\.example|proxy\.example/i);
});

test("ships the launch card at the declared social dimensions", async () => {
  const [card, launchCard] = await Promise.all([
    readFile(new URL("../public/og.png", import.meta.url)),
    readFile(new URL("../../launch/assets/moneyprinter-social-card.png", import.meta.url)),
  ]);
  assert.ok(card.byteLength > 100_000, "social card should not be a placeholder");
  assert.deepEqual(card, launchCard, "site and launch copies of the social card must be byte-identical");

  const pngSignature = card.subarray(0, 8).toString("hex");
  assert.equal(pngSignature, "89504e470d0a1a0a");
  assert.equal(card.readUInt32BE(16), 1200);
  assert.equal(card.readUInt32BE(20), 630);
});
