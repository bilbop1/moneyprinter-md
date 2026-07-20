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
  assert.doesNotMatch(
    post,
    /[—–“”]|\p{Extended_Pictographic}|(?:^|\s)#[\p{L}\p{N}_]+/u,
    `X post ${index + 1} contains humanizer-blocked punctuation, emoji, or a hashtag`,
  );
  assert.doesNotMatch(
    post,
    /\b(?:pivotal|groundbreaking|game-changing|transformative|marks a shift|the future of|here is|let me know|would you like|want me to)\b/i,
    `X post ${index + 1} contains generic significance or chatbot framing`,
  );
  assert.doesNotMatch(
    post,
    /\b(?:works? everywhere|runs? (?:in|on) every host|guarantees?|promises?|ensures?)\b/i,
    `X post ${index + 1} claims host activation or a guaranteed outcome`,
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
assert.match(recommendedPost, /\bfigures out what shit is actually real\b/i);
assert.match(recommendedPost, /\bstarts working on the best money route\b/i);
assert.match(recommendedPost, /https:\/\/github\.com\/bilbop1\/moneyprinter-md\b/);
assert.doesNotMatch(
  recommendedPost,
  /\b[^,\n]+,\s+[^,\n]+,\s+(?:and|or)\s+[^,\n]+[.!?]?/i,
  "the recommended opener must not fall into a polished rule-of-three cadence",
);

console.log(`release ${releaseVersion}: ${skillNames.length} skills and ${posts.length} X posts verified`);
