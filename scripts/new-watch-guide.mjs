#!/usr/bin/env node
// Scaffold a rated watch guide from templates/watch-ranked-guide.mdx.
//   pnpm new:watch <slug> <route> "<Title>"
//   pnpm new:watch best-thrillers-on-netflix netflix/best-thrillers "Best Thrillers on Netflix, Ranked by ..."
import fs from "node:fs";
import path from "node:path";

const [slug, route, ...titleParts] = process.argv.slice(2);
const title = titleParts.join(" ").trim();
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");

function fail(message) {
  console.error(`✗ ${message}\n  usage: pnpm new:watch <slug> <route> "<Title>"`);
  process.exit(1);
}

if (!slug || !route || !title) fail("slug, route and title are all required.");
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(`slug "${slug}" must be lowercase-kebab-case.`);
if (!/^[a-z0-9-]+(\/[a-z0-9-]+)*$/.test(route)) fail(`route "${route}" must look like netflix/best-thrillers.`);

const routesPath = path.join(root, "src/lib/watch-routes.json");
const routes = JSON.parse(fs.readFileSync(routesPath, "utf8"));
const target = path.join(root, "src/content/articles/watch", `${slug}.mdx`);

if (routes[slug]) fail(`slug "${slug}" is already routed to ${routes[slug]}.`);
if (Object.values(routes).includes(route)) fail(`route "${route}" is already taken.`);
if (fs.existsSync(target)) fail(`${path.relative(root, target)} already exists.`);

const now = new Date();
const iso = now.toISOString().slice(0, 10);
const long = now.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

const mdx = fs
  .readFileSync(path.join(root, "templates/watch-ranked-guide.mdx"), "utf8")
  .replaceAll("__SLUG__", slug)
  .replaceAll("__TITLE__", title.replaceAll('"', '\\"'))
  .replaceAll("__DATE_LONG__", long)
  .replaceAll("__DATE__", iso);

fs.writeFileSync(target, mdx);
routes[slug] = route;
fs.writeFileSync(routesPath, `${JSON.stringify(routes, null, 2)}\n`);

console.log(`✓ ${path.relative(root, target)}
✓ routed to /movies-series/${route}  (draft: true, so it will not ship until you remove that line)

Next: fill every TODO, run \`pnpm check:watch\`, delete \`draft: true\`, push.
See docs/watch-guides.md for the house rules.`);
