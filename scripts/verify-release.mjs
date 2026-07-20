import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const repoRoot = new URL("../", import.meta.url);
const releaseVersion = "0.1.0-rc.3";
const skillNames = [
  "moneyprinter",
  "opportunity-radar",
  "offer-engine",
  "payable-test",
  "ethical-acquisition",
  "delivery-proof",
  "cashflow-review",
];

async function read(path) {
  return readFile(new URL(path, repoRoot), "utf8");
}

for (const skillName of skillNames) {
  const skill = await read(`skills/${skillName}/SKILL.md`);
  assert.match(
    skill,
    new RegExp(`^  version: "${releaseVersion.replaceAll(".", "\\.")}"$`, "m"),
    `${skillName} must declare release ${releaseVersion}`,
  );
}

const moneyprinter = await read("skills/moneyprinter/SKILL.md");
const sessionScan = await read("skills/moneyprinter/references/session-scan.md");
const safetyBoundaries = await read(
  "skills/moneyprinter/references/safety-boundaries.md",
);

assert.match(moneyprinter, /rolling 14 days/i);
assert.match(moneyprinter, /Coverage receipt/);
assert.match(moneyprinter, /Money Machine Run/);
assert.match(moneyprinter, /do not stop at (?:a )?(?:report|recommendation)/i);
assert.match(
  moneyprinter,
  /First check the current conversation.*adequate explicit permission\s+grant.*record.*use it without\s+asking again.*Otherwise, ask once/is,
);
assert.match(moneyprinter, /Never infer scan permission from historical sessions/i);
assert.match(
  sessionScan,
  /First check the current conversation.*adequate explicit permission\s+grant.*record.*use it without\s+asking again.*Otherwise, ask once/is,
);
assert.match(sessionScan, /Never infer scan permission from historical sessions/i);
assert.match(sessionScan, /Scanned.*Empty.*Blocked.*Unsupported/s);
assert.match(sessionScan, /untrusted evidence/i);
assert.match(sessionScan, /\.env/);
assert.match(
  moneyprinter,
  /At the approval gate[\s\S]{0,500}`Channel`[\s\S]{0,80}`Audience`[\s\S]{0,80}`Message`[\s\S]{0,80}`Volume`[\s\S]{0,80}`Timing`[\s\S]{0,80}`Tool`[\s\S]{0,80}`Cost`[\s\S]{0,80}`Risk`/,
  "the operative approval gate must name every material execution field",
);
assert.match(
  safetyBoundaries,
  /Lawful subject matter alone is not excluded\.[\s\S]{0,240}illegal,\s+deceptive,\s+exploitative,\s+unauthorized,\s+unsafe,\s+or platform-abusive/i,
  "safety boundaries must use fact-based conduct refusals",
);

for (const path of [
  "skills/moneyprinter/SKILL.md",
  ...skillNames.slice(1).map((skillName) => `skills/${skillName}/SKILL.md`),
  "skills/moneyprinter/references/safety-boundaries.md",
]) {
  const text = await read(path);
  assert.doesNotMatch(
    text,
    /^## (?:Globally )?Excluded v1 lanes$|-\s+\*\*(?:Trading|Gambling|Speculative crypto|Adult services)\*\*:|\brefuse excluded\b/im,
    `${path} must not blacklist a lawful subject category`,
  );
}

const sitePackage = JSON.parse(await read("site/package.json"));
assert.equal(sitePackage.version, releaseVersion);

const sitePage = await read("site/app/page.tsx");
assert.equal(
  (sitePage.match(new RegExp(releaseVersion.replaceAll(".", "\\."), "g")) ?? []).length,
  2,
  "the site header and footer must show the release version",
);

const xLaunch = await read("launch/x-launch.md");
const posts = [...xLaunch.matchAll(/```text\n([\s\S]*?)\n```/g)].map((match) => match[1]);
assert.ok(posts.length >= 3, "the launch file must contain a flagship, reply, and alternate post");

function isNegatedBefore(text, index) {
  const beforeClaim = text.slice(0, index);
  const boundaries = [
    ...beforeClaim.matchAll(/[.!?;:,\n]|\b(?:but|however|yet)\b/gi),
  ];
  const lastBoundary = boundaries.at(-1);
  const clause = beforeClaim.slice(
    lastBoundary ? lastBoundary.index + lastBoundary[0].length : 0,
  );

  return (
    /\b(?:no|not|never|without|cannot|can't|won't|isn't|aren't|doesn't|don't|didn't)(?:\s+(?:ever|really))?\s*$/i.test(
      clause,
    ) ||
    /\bnothing(?:\s+\w+){0,2}\s*$/i.test(clause) ||
    /\b(?:make|makes|made)\s+no\s+claim(?:\s+that)?(?:\s+\w+){0,2}\s*$/i.test(
      clause,
    )
  );
}

function hasGuaranteedMoneyClaim(post) {
  const pattern =
    /\b(?:guarantees?|promises?|ensures?)\s+(?:you\s+)?(?:money|profit|income|revenue)\b|\bguaranteed\s+(?:(?:money|profit|income|revenue)\b|to\s+(?:make|earn|produce)\s+(?:you\s+)?(?:money|profit|income|revenue)\b)/gi;

  for (const match of post.matchAll(pattern)) {
    if (!isNegatedBefore(post, match.index)) return true;
  }

  return false;
}

function hasUniversalHostClaim(post) {
  const pattern =
    /\b(?:(?:works?|runs?)\s+(?:(?:in|on)\s+every host|everywhere)|all hosts?\s+(?:are|is)\s+supported)\b/gi;

  for (const match of post.matchAll(pattern)) {
    if (!isNegatedBefore(post, match.index)) return true;
  }

  return false;
}

function hasProseDoubleHyphen(post) {
  const commandStart =
    /^\s*(?:[$>]\s*)?(?:npm|npx|pnpm|yarn|bun|node|python\d*|uv|uvx|git|gh|clawhub|codex|claude|kimi|hermes|moneyprinter|skills)\b/i;

  return post.split("\n").some((line) => {
    const hasStandaloneDoubleHyphen = /(?:^|\s)--(?=\s|$)/.test(line);
    return hasStandaloneDoubleHyphen && !commandStart.test(line);
  });
}

function xPostViolations(post) {
  const violations = [];

  if (
    /[—–“”‘’]|\p{Extended_Pictographic}|(?:^|\s)#[\p{L}\p{N}_]+/u.test(
      post,
    ) ||
    hasProseDoubleHyphen(post)
  ) {
    violations.push("humanizer-blocked punctuation, emoji, or hashtag");
  }
  if (
    /\b(?:pivotal|groundbreaking|game-changing|transformative|marks a shift|the future of|here is|let me know|would you like|want me to)\b/i.test(
      post,
    )
  ) {
    violations.push("generic significance or chatbot framing");
  }
  if (hasUniversalHostClaim(post)) {
    violations.push("universal host activation");
  }
  if (hasGuaranteedMoneyClaim(post)) {
    violations.push("guaranteed money outcome");
  }

  return violations;
}

const rejectedXFixtures = [
  ["works on every host", "universal host activation"],
  ["runs on every host", "universal host activation"],
  ["runs everywhere", "universal host activation"],
  ["all hosts are supported", "universal host activation"],
  ["it is guaranteed to make money", "guaranteed money outcome"],
  ["guaranteed income", "guaranteed money outcome"],
  ["not hype but guarantees profit", "guaranteed money outcome"],
  ["it’s ready", "humanizer-blocked punctuation, emoji, or hashtag"],
  ["first -- then", "humanizer-blocked punctuation, emoji, or hashtag"],
];

for (const [fixture, expectedViolation] of rejectedXFixtures) {
  assert.ok(
    xPostViolations(fixture).includes(expectedViolation),
    `X verifier must reject ${JSON.stringify(fixture)} as ${expectedViolation}`,
  );
}

for (const fixture of [
  "7 open-source skills",
  "moneyprinter --help",
  "clawhub sync --all --dry-run",
  "npm test -- --runInBand",
  "no guaranteed profit",
  "does not guarantee income",
  "nothing here guarantees profit",
  "we make no claim that it guarantees money",
  "does not run everywhere",
]) {
  assert.deepEqual(
    xPostViolations(fixture),
    [],
    `X verifier must allow legitimate hyphenation or CLI flags in ${JSON.stringify(fixture)}`,
  );
}

const countedPosts = [
  ...xLaunch.matchAll(
    /```text\n([\s\S]*?)\n```\n\nCharacter count: (\d+) raw, (\d+) weighted\./g,
  ),
];
assert.equal(
  countedPosts.length,
  posts.length,
  "every X post must document exact raw and weighted counts",
);

for (const [index, post] of posts.entries()) {
  const xWeightedLength = post.replace(/https?:\/\/\S+/g, "x".repeat(23)).length;
  const rawLength = post.length;
  const [, countedPost, documentedRaw, documentedWeighted] = countedPosts[index];

  assert.equal(countedPost, post, `X post ${index + 1} count must immediately follow its fence`);
  assert.equal(
    Number(documentedRaw),
    rawLength,
    `X post ${index + 1} documents the wrong raw count`,
  );
  assert.equal(
    Number(documentedWeighted),
    xWeightedLength,
    `X post ${index + 1} documents the wrong weighted count`,
  );
  assert.ok(xWeightedLength <= 280, `X post ${index + 1} is ${xWeightedLength} weighted characters`);
  assert.deepEqual(
    xPostViolations(post),
    [],
    `X post ${index + 1} contains blocked copy`,
  );
}

const recommendedSection = xLaunch.match(
  /^## Recommended flagship post\s*$([\s\S]*?)(?=^## |(?![\s\S]))/m,
)?.[1];
assert.ok(recommendedSection, "the launch file must keep one recommended flagship section");
const recommendedPost = recommendedSection.match(/```text\n([\s\S]*?)\n```/)?.[1];
assert.ok(recommendedPost, "the recommended flagship section must contain one X post");

assert.match(recommendedPost, /^too many\b/, "the opener must begin as a lowercase personal complaint");
assert.match(recommendedPost, /\blol\b/, "the opener must preserve the user's rough-human voice");
assert.match(recommendedPost, /\n\nso i made MoneyPrinter\b/, "the opener must use the user's rough paragraph turn");
assert.match(recommendedPost, /\bwith permission\b/i);
assert.match(recommendedPost, /\bthe last 14 days\b/i);
assert.match(recommendedPost, /\bdetected AI CLIs \+ GUIs it can access\b/i);
assert.match(
  recommendedPost,
  /\bdetected AI CLIs \+ GUIs it can access\.\n\nit figures out what shit is real\. then it starts working on the best money route\b/i,
  "the opener must split scanning from judgment and execution",
);
assert.match(recommendedPost, /https:\/\/github\.com\/bilbop1\/moneyprinter-md\b/);
assert.doesNotMatch(
  recommendedPost,
  /\b[^,\n]+,\s+[^,\n]+,\s+(?:and|or)\s+[^,\n]+[.!?]?/i,
  "the recommended opener must not fall into a polished rule-of-three cadence",
);

console.log(`release ${releaseVersion}: ${skillNames.length} skills and ${posts.length} X posts verified`);
