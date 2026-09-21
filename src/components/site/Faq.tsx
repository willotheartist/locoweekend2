import Link from "next/link";
import type { ArticleFaqItem } from "./ArticlePageView";

/**
 * Renders an article's FAQ from the same `faq` export that feeds FAQPage JSON-LD,
 * so the visible answers and the structured data can never drift apart.
 *
 * Answers are plain text plus optional [label](url) links.
 */
function renderAnswer(text: string) {
  const parts: React.ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <Link key={match.index} href={match[2]}>
        {match[1]}
      </Link>
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function Faq({ items }: { items: ArticleFaqItem[] }) {
  return (
    <>
      {items.map((item) => (
        <section key={item.q}>
          <h3>{item.q}</h3>
          <p>{renderAnswer(item.a)}</p>
        </section>
      ))}
    </>
  );
}
