#!/usr/bin/env node
// Pre-publish gate for rated watch guides. Fails on the mistakes that are easy to ship:
// leftover TODOs, anchors that go nowhere, picks/table/ratings that disagree, missing check date.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dir = path.join(root, "src/content/articles/watch");
const routes = JSON.parse(fs.readFileSync(path.join(root, "src/lib/watch-routes.json"), "utf8"));
let failed = false;

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"))) {
  const src = fs.readFileSync(path.join(dir, file), "utf8");
  if (!src.includes("export const picks")) continue; // only ranked guides
  const problems = [];
  const draft = /\bdraft:\s*true\b/.test(src);
  const slug = src.match(/slug:\s*"([^"]+)"/)?.[1];

  if (!slug || !routes[slug]) problems.push(`slug "${slug}" is missing from src/lib/watch-routes.json`);
  if (/TODO/.test(src)) problems.push(`${src.match(/TODO/g).length} TODO placeholders left`);

  const ids = [...src.matchAll(/<h2 id="([^"]+)"/g)].map((m) => m[1]);
  const anchors = [...src.matchAll(/anchor:\s*"([^"]+)"/g)].map((m) => m[1]);
  const tableLinks = [...src.matchAll(/\]\(#([^)]+)\)/g)].map((m) => m[1]);
  const ratings = (src.match(/<LocoRating /g) || []).length;

  for (const a of anchors) if (!ids.includes(a)) problems.push(`picks anchor "#${a}" has no <h2 id>`);
  for (const a of tableLinks) if (!ids.includes(a)) problems.push(`table link "#${a}" has no <h2 id>`);
  if (anchors.join() !== ids.filter((id) => anchors.includes(id)).join()) problems.push("picks order differs from the order of entries on the page");
  if (ratings !== anchors.length) problems.push(`${anchors.length} picks but ${ratings} <LocoRating> cards`);
  if (new Set(tableLinks).size !== anchors.length) problems.push(`${anchors.length} picks but ${new Set(tableLinks).size} rows linked in the decision table`);
  if (!/checked \d{1,2} \w+ \d{4}/.test(src)) problems.push('missing "…checked <date>" line');
  if (!src.includes("<Faq items={faq} />")) problems.push("FAQ is not rendered from the faq export");
  for (const key of ["seoTitle", "seoDescription", "shortTitle", "keywords"]) if (!new RegExp(`\\b${key}:`).test(src)) problems.push(`meta.${key} missing`);
  const seoTitle = src.match(/seoTitle:\s*"([^"]+)"/)?.[1] ?? "";
  if (seoTitle.length > 60) problems.push(`seoTitle is ${seoTitle.length} chars (max 60)`);
  const seoDescription = src.match(/seoDescription:\s*"([^"]+)"/)?.[1] ?? "";
  if (seoDescription.length > 160) problems.push(`seoDescription is ${seoDescription.length} chars (max 160)`);

  if (!problems.length) { console.log(`✓ ${file}${draft ? "  (draft)" : ""}`); continue; }
  console.log(`${draft ? "…" : "✗"} ${file}${draft ? "  (draft, not blocking)" : ""}`);
  for (const p of problems) console.log(`    - ${p}`);
  if (!draft) failed = true;
}
process.exit(failed ? 1 : 0);
