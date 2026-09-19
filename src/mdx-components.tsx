import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...props }) => (
      <Link href={href ?? "#"} {...props}>
        {children}
      </Link>
    ),
    table: ({ children, ...props }) => (
      <div
        className="article-table"
        role="region"
        aria-label="Article comparison table"
        tabIndex={0}
      >
        <table {...props}>{children}</table>
      </div>
    ),
    ...components,
  };
}
