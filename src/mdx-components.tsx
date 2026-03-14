// src/mdx-components.tsx
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

function isFigureOnlyParagraph(children: React.ReactNode) {
  const arr = React.Children.toArray(children).filter((c) => {
    if (typeof c === "string") return c.trim().length > 0;
    return c !== null && c !== undefined;
  });

  if (arr.length !== 1) return false;

  const only = arr[0];
  return React.isValidElement(only) && only.type === "figure";
}

function textFromChildren(children: React.ReactNode): string {
  if (typeof children === "string") return children;

  if (Array.isArray(children)) {
    return children.map((child) => textFromChildren(child)).join("").trim();
  }

  if (
    children &&
    typeof children === "object" &&
    "props" in children &&
    (children as { props?: { children?: React.ReactNode } }).props
  ) {
    return textFromChildren(
      (children as { props?: { children?: React.ReactNode } }).props?.children
    );
  }

  return "";
}

function IconHelp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
      <path d="M9.75 9a2.5 2.5 0 1 1 3.8 2.15c-.9.55-1.55 1.1-1.55 2.35" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
      <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function IconArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-[0.9em] w-[0.9em] translate-y-[1px]">
      <path d="M7 17 17 7" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 7h8v8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconQuote() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
      <path d="M9 11H5.5A2.5 2.5 0 0 1 8 8.5V8a4 4 0 0 0-4 4v1a3 3 0 0 0 3 3H9v-5Zm11 0h-3.5A2.5 2.5 0 0 1 19 8.5V8a4 4 0 0 0-4 4v1a3 3 0 0 0 3 3H20v-5Z" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function useMDXComponents(): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="font-serif text-4xl sm:text-5xl font-semibold leading-[1.08] text-ink mt-12 mb-4"
        {...props}
      />
    ),

    h2: ({ children, ...props }) => {
      const text = textFromChildren(children);
      const isFaq = /^faq:/i.test(text);

      if (isFaq) {
        const cleaned = text.replace(/^faq:\s*/i, "");

        return (
          <div className="mt-14 mb-7 rounded-[28px] border border-yellow/35 bg-yellow/10 px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-yellow/45 bg-paper text-ink">
                <IconHelp />
              </div>

              <div className="min-w-0">
                <div className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-grey-dark mb-1">
                  Frequently Asked
                </div>
                <h2
                  className="font-serif text-[34px] sm:text-[40px] font-semibold leading-[1.02] tracking-[-0.02em] text-ink"
                  {...props}
                >
                  {cleaned}
                </h2>
              </div>
            </div>
          </div>
        );
      }

      return (
        <h2
          className="font-crimson text-[32px] sm:text-[36px] font-semibold leading-[1.12] tracking-[0em] text-ink mt-10 mb-3"
          {...props}
        >
          {children}
        </h2>
      );
    },

    h3: (props) => (
      <h3
        className="font-serif text-2xl font-semibold leading-[1.18] text-ink mt-8 mb-2"
        {...props}
      />
    ),

    h4: (props) => (
      <h4
        className="font-serif text-[22px] font-semibold leading-[1.22] text-ink mt-7 mb-2"
        {...props}
      />
    ),

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

    a: ({ href, children, ...props }) => (
      <Link
        href={href ?? "#"}
        className="text-ink underline underline-offset-2 decoration-1 hover:text-grey-dark transition-colors"
        {...props}
      >
        <span className="inline-flex items-center gap-1">
          {children}
          <IconArrowUpRight />
        </span>
      </Link>
    ),

    ul: ({ children, ...props }) => (
      <ul className="mb-7 mt-5 space-y-3" {...props}>
        {children}
      </ul>
    ),

    ol: ({ children, ...props }) => (
      <ol className="mb-7 mt-5 space-y-3" {...props}>
        {children}
      </ol>
    ),

    li: ({ children, ...props }) => (
      <li className="list-none" {...props}>
        <div className="flex items-start gap-3 rounded-[20px] border border-grey-line bg-paper px-4 py-3">
          <div className="mt-[2px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow/20 text-ink">
            <IconSparkle />
          </div>
          <div className="min-w-0 font-crimson text-[19px] leading-[1.48] tracking-[-0.01em] text-ink">
            {children}
          </div>
        </div>
      </li>
    ),

    blockquote: ({ children, ...props }) => (
      <blockquote
        className="my-8 rounded-[24px] border border-yellow/35 bg-yellow/10 px-6 py-5"
        {...props}
      >
        <div className="mb-3 flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-grey-dark">
          <IconQuote />
          Note
        </div>
        <div className="font-crimson text-[19px] italic text-grey-dark leading-[1.55] tracking-[-0.01em]">
          {children}
        </div>
      </blockquote>
    ),

    hr: () => <hr className="border-t border-dashed border-grey-line my-10" />,

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

    strong: (props) => <strong className="font-semibold text-ink" {...props} />,
    em: (props) => <em className="italic" {...props} />,
  };
}
