import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";

const repoRoot = new URL("../", import.meta.url);

async function read(path) {
  return readFile(new URL(path, repoRoot), "utf8");
}

const headline =
  "One permission. MoneyPrinter scans the last 14 days across every detected AI CLI and GUI it can access, figures out what is real, and gets to work on the best path to money.";

function normalize(text) {
  return text.replace(/\s+/g, " ").trim();
}

const submissions = (await readdir(new URL("launch/submissions/", repoRoot)))
  .filter((name) => name.endsWith(".md"))
  .map((name) => `launch/submissions/${name}`)
  .sort();

const currentCopyFiles = [
  "README.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "docs/install.md",
  "docs/compatibility.md",
  "docs/troubleshooting.md",
  "evals/README.md",
  "research/README.md",
  "site/README.md",
  "launch/fact-sheet.md",
  "launch/channel-matrix.md",
  "launch/launch-control.md",
  "launch/show-hn.md",
  "launch/x-launch.md",
  "ROADMAP.md",
  "CHANGELOG.md",
  ...submissions,
];

const staleInterviewFirstPatterns = [
  /\bshort (?:business )?interview\b/i,
  /\bMoneyPrinter interviews\b/i,
  /\binterviews? (?:a |the )?user\b/i,
  /\bInterview (?:a user's|your real|your)\b/i,
  /^## Interview delta$/im,
];

const failures = [];
function check(label, callback) {
  try {
    callback();
  } catch (error) {
    failures.push(`${label}: ${error.message}`);
  }
}

const readme = await read("README.md");
check("README leads with the approved headline", () => {
  assert.ok(normalize(readme).includes(headline));
});

for (const pattern of [
  /one confirmation/i,
  /cash-first/i,
  /private research/i,
  /offer/i,
  /payable test/i,
  /acquisition/i,
  /delivery preparation/i,
  /exact external action/i,
  /Action receipt/i,
  /rerank/i,
]) {
  check(`README explains ${pattern}`, () => assert.match(readme, pattern));
}

const factSheet = await read("launch/fact-sheet.md");
check("fact sheet carries the approved headline", () => {
  assert.ok(normalize(factSheet).includes(headline));
});

for (const path of currentCopyFiles) {
  const text = await read(path);
  for (const pattern of staleInterviewFirstPatterns) {
    check(`${path} has no interview-first copy ${pattern}`, () =>
      assert.doesNotMatch(text, pattern),
    );
  }
}

const security = await read("SECURITY.md");
for (const pattern of [
  /history-scan consent/i,
  /prompt injection/i,
  /credential (?:stores|paths)/i,
  /raw histor/i,
  /coverage receipt/i,
  /one-off external action/i,
  /autonomous or bulk action/i,
]) {
  check(`security contract covers ${pattern}`, () =>
    assert.match(security, pattern),
  );
}

const compatibility = await read("docs/compatibility.md");
check("compatibility separates installation from cross-application access", () => {
  assert.match(compatibility, /installer support/i);
  assert.match(compatibility, /other applications'\s+session stores/i);
  assert.match(compatibility, /detected, permitted, and\s+accessible/i);
});

const examples = [
  "examples/starting-from-zero.md",
  "examples/roofer-revenue-recovery.md",
  "examples/lawyer-productized-expertise.md",
  "examples/tiktok-shop-conversion.md",
  "examples/existing-business-leverage.md",
];

const exampleSections = [
  "Simulated coverage receipt",
  "One confirmation",
  "Cash-first ranking",
  "Private work continued",
  "Exact-action approval",
  "Simulated action receipt",
  "Rerank",
];

for (const path of examples) {
  const text = await read(path);
  check(`${path} keeps its Simulation label`, () =>
    assert.match(text, /\*\*Simulation\b/),
  );

  let cursor = 0;
  for (const section of exampleSections) {
    check(`${path} contains ordered ${section}`, () => {
      const index = text.indexOf(`## ${section}`, cursor);
      assert.notEqual(index, -1);
      cursor = index + section.length + 3;
    });
  }

  check(`${path} does not claim a real outcome`, () => {
    assert.match(text, /hypothetical/i);
    assert.match(text, /not (?:a )?(?:customer|business|revenue|performance|legal|real-world)/i);
  });
}

const changelog = await read("CHANGELOG.md");
check("changelog records rc.3 as unreleased", () => {
  assert.match(changelog, /^## 0\.1\.0-rc\.3 - Unreleased$/m);
  assert.match(changelog, /14-day/i);
  assert.match(changelog, /rc\.1\/rc\.2[\s\S]{0,100}historical/i);
});

if (failures.length > 0) {
  console.error(`public copy contract: ${failures.length} failure(s)`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `public copy contract: ${currentCopyFiles.length} current files and ${examples.length} simulations verified`,
  );
}
