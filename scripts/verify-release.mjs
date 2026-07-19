import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const repoRoot = new URL("../", import.meta.url);
const releaseVersion = "0.1.0-rc.2";
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

for (const [index, post] of posts.entries()) {
  const xWeightedLength = post.replace(/https?:\/\/\S+/g, "x".repeat(23)).length;
  assert.ok(xWeightedLength <= 280, `X post ${index + 1} is ${xWeightedLength} weighted characters`);
  assert.doesNotMatch(post, /[—–“”]/, `X post ${index + 1} contains humanizer-blocked punctuation`);
}

console.log(`release ${releaseVersion}: ${skillNames.length} skills and ${posts.length} X posts verified`);
