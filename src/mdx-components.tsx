// src/mdx-components.tsx
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

function isFigureOnlyParagraph(children: React.ReactNode) {
  const arr = React.Children.toArray(children).filter((c) => {
    // Drop empty strings / whitespace-only nodes
    if (typeof c === "string") return c.trim().length > 0;
    return c !== null && c !== undefined;
  });

  if (arr.length !== 1) return false;

  const only = arr[0];
  return React.isValidElement(only) && only.type === "figure";
}

export function useMDXComponents(): MDXComponents {
  return {
    // ── HEADINGS ──
    h1: (props) => (
      <h1
        className="font-serif text-4xl sm:text-5xl font-semibold leading-[1.08] text-ink mt-12 mb-4"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="font-crimson text-[32px] sm:text-[36px] font-semibold leading-[1.12] tracking-[0em] text-ink mt-10 mb-3"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="font-serif text-2xl font-semibold leading-[1.18] text-ink mt-8 mb-2"
        {...props}
      />
    ),

    // ── PARAGRAPHS ──
    // Fix hydration: if the paragraph only contains a <figure>, render a <div> instead of <p>
    p: ({ children, ...props }) => {
      if (isFigureOnlyParagraph(children)) {
        return (
          <div className="my-8" {...props}>
            {children}
          </div>
        );
      }

      return (
        <p
          className="font-crimson text-[19px] leading-[1.48] tracking-[-0.01em] text-ink mb-5"
          {...props}
        >
          {children}
        </p>
      );
    },

    // ── LINKS ──
    a: ({ href, children, ...props }) => (
      <Link
        href={href ?? "#"}
        className="text-ink underline underline-offset-2 decoration-1 hover:text-grey-dark transition-colors"
        {...props}
      >
        {children}
      </Link>
    ),

    // ── LISTS ──
    ul: (props) => (
      <ul
        className="font-crimson text-[19px] leading-[1.48] tracking-[-0.01em] text-ink mb-6 ml-6 list-disc space-y-1"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="font-crimson text-[19px] leading-[1.48] tracking-[-0.01em] text-ink mb-6 ml-6 list-decimal space-y-1"
        {...props}
      />
    ),
    li: (props) => <li className="pl-1" {...props} />,

    // ── BLOCKQUOTE ──
    blockquote: (props) => (
      <blockquote
        className="border-l-[3px] border-yellow pl-6 my-8 font-crimson text-[19px] italic text-grey-dark leading-[1.55] tracking-[-0.01em]"
        {...props}
      />
    ),

    // ── HORIZONTAL RULE ──
    hr: () => <hr className="border-t border-dashed border-grey-line my-10" />,

    // ── CODE ──
    code: (props) => (
      <code
        className="font-mono text-[15px] bg-grey-line/30 px-1.5 py-0.5 rounded text-ink"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="font-mono text-sm bg-ink text-paper p-5 overflow-x-auto my-8 leading-relaxed"
        {...props}
      />
    ),

    // ── IMAGES ──
    // Return a <figure> (now safe, because <p> unwraps image-only paragraphs to <div>)
    img: ({ src, alt, ...props }) => (
      <figure className="my-10">
        {src ? (
          <div className="relative w-full aspect-16/10 bg-grey-line/50 overflow-hidden">
            <Image
              src={src}
              alt={alt ?? ""}
              fill
              sizes="(min-width: 1024px) 860px, 100vw"
              className="object-cover"
              {...(props as Record<string, unknown>)}
            />
          </div>
        ) : null}

        {alt ? (
          <figcaption className="font-mono text-[10px] text-grey-text mt-2 italic">
            {alt}
          </figcaption>
        ) : null}
      </figure>
    ),

    // ── STRONG / EM ──
    strong: (props) => <strong className="font-semibold text-ink" {...props} />,
    em: (props) => <em className="italic" {...props} />,
  };
}
