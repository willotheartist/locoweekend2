// next.config.mjs
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactCompiler: true,
};

const withMDX = createMDX({});

if (process.env.NODE_ENV === 'production') {
  fetch('https://www.google.com/ping?sitemap=https%3A%2F%2Flocoweekend.com%2Fsitemap.xml')
    .then(() => console.log('✓ Google pinged'))
    .catch(() => {});
}

export default withMDX(nextConfig);