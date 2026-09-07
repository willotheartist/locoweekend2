// next.config.mjs
import fs from "fs";
import path from "path";
import createMDX from "@next/mdx";

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");

function getBusinessArticleSlugs() {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const slugs = [];
  const directories = fs.readdirSync(ARTICLES_DIR, { withFileTypes: true });

  for (const directory of directories) {
    if (!directory.isDirectory()) continue;

    const directoryPath = path.join(ARTICLES_DIR, directory.name);
    const files = fs.readdirSync(directoryPath);

    for (const file of files) {
      if (!file.endsWith(".mdx")) continue;

      const source = fs.readFileSync(path.join(directoryPath, file), "utf-8");
      const metaMatch = source.match(
        /export\s+const\s+meta\s*=\s*(\{[\s\S]*?\})\s*;?/m
      );

      if (!metaMatch) continue;

      try {
        const meta = new Function(`return ${metaMatch[1]}`)();
        const category = String(meta.category || "").toLowerCase();

        if (category !== "business" && category !== "tech") continue;

        slugs.push(meta.slug || path.basename(file, ".mdx"));
      } catch {
        // Ignore malformed article metadata here. The article loader handles it too.
      }
    }
  }

  return slugs;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactCompiler: true,
  async redirects() {
    return getBusinessArticleSlugs().map((slug) => ({
      source: `/articles/${slug}`,
      destination: `/business/${slug}`,
      permanent: true,
    }));
  },
};

const withMDX = createMDX({});

if (process.env.NODE_ENV === "production") {
  fetch(
    "https://www.google.com/ping?sitemap=https%3A%2F%2Flocoweekend.com%2Fsitemap.xml"
  )
    .then(() => console.log("✓ Google pinged"))
    .catch(() => {});
}

export default withMDX(nextConfig);
