// src/components/site/Header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ───────────────────────────────────────────
   CONFIG
   ─────────────────────────────────────────── */

const TOP_BAR_LEFT = [
  { label: "LOCOWEEKEND", href: "/" },
  { label: "THE SAUCE", href: "/the-sauce" },
  { label: "DEAD STOCK", href: "/dead-stock" },
];

const TOP_BAR_RIGHT = [
  { label: "PICKS", href: "/picks" },
  { label: "CULTURE", href: "/culture" },
  { label: "MAGAZINE", href: "/magazine" },
];

const CATEGORY_NAV = [
  { label: "Culture", href: "/culture" },
  { label: "Affairs", href: "/affairs" },
  { label: "Fashion", href: "/fashion" },
  { label: "Travel", href: "/travel" },
  { label: "Guides", href: "/guides" },
  { label: "Politics", href: "/politics" },
];

/* ───────────────────────────────────────────
   HEADER
   ─────────────────────────────────────────── */

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @keyframes lw-fade-down {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lw-fade-up {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lw-scale-in {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes lw-line-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .lw-anim-topbar { animation: lw-fade-down 0.45s ease both; }
        .lw-anim-mast { animation: lw-scale-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both; }
        .lw-anim-tagline { animation: lw-fade-up 0.45s ease 0.18s both; }
        .lw-anim-catnav { animation: lw-fade-up 0.45s ease 0.26s both; }
        .lw-anim-border { animation: lw-line-grow 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.22s both; transform-origin: center; }

        .lw-search-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.28s ease, padding 0.28s ease, border-color 0.28s ease;
          padding: 0 1.25rem;
          border-bottom: 1px solid transparent;
        }
        .lw-search-wrap.open {
          grid-template-rows: 1fr;
          padding: 0.85rem 1.25rem;
          border-bottom-color: #D4D4D0;
        }
        .lw-search-wrap > div { overflow: hidden; }

        @media (min-width: 640px) {
          .lw-search-wrap {
            padding: 0 2rem;
          }
          .lw-search-wrap.open {
            padding: 0.85rem 2rem;
          }
        }

        .lw-icon-btn{
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #111;
          -webkit-tap-highlight-color: transparent;
        }
        .lw-icon-btn:hover{ opacity: 0.7; }

        .lw-scrollbar-none{
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .lw-scrollbar-none::-webkit-scrollbar{
          display: none;
        }
      `}</style>

      <header className="w-full bg-paper relative z-50">
        {/* ─────────────────────────────
           TOP UTILITY ROW
           ───────────────────────────── */}
        <div className="lw-anim-topbar">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10">
            <div className="h-10 flex items-center">
              <div className="hidden md:grid w-full grid-cols-[1fr_auto_1fr] items-center">
                <div className="flex items-center">
                  {TOP_BAR_LEFT.map((item, i) => (
                    <span key={item.label} className="inline-flex items-center">
                      <Link
                        href={item.href}
                        className="text-ink no-underline px-2.5 py-0.5 text-[10.5px] font-bold tracking-widest uppercase whitespace-nowrap hover:text-grey-text transition-colors duration-200 font-mono"
                      >
                        {item.label}
                      </Link>
                      {i < TOP_BAR_LEFT.length - 1 && (
                        <span className="text-grey-line text-xs select-none mx-2">
                          |
                        </span>
                      )}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <span className="text-grey-line text-xs select-none mx-2">
                    |
                  </span>
                  <span className="font-serif text-xl font-medium italic tracking-tight normal-case px-3 select-none text-ink">
                    Wall&Fifth
                  </span>
                  <span className="text-grey-line text-xs select-none mx-2">
                    |
                  </span>
                </div>

                <div className="flex items-center justify-end">
                  {TOP_BAR_RIGHT.map((item, i) => (
                    <span key={item.label} className="inline-flex items-center">
                      <Link
                        href={item.href}
                        className="text-ink no-underline px-2.5 py-0.5 text-[10.5px] font-bold tracking-widest uppercase whitespace-nowrap hover:text-grey-text transition-colors duration-200 font-mono"
                      >
                        {item.label}
                      </Link>
                      {i < TOP_BAR_RIGHT.length - 1 && (
                        <span className="text-grey-line text-xs select-none mx-2">
                          |
                        </span>
                      )}
                    </span>
                  ))}
                  <span className="text-grey-line text-xs select-none mx-2">
                    |
                  </span>
                  <Link
                    href="/subscribe"
                    className="text-ink px-2.5 py-0.5 text-[10.5px] font-bold tracking-widest uppercase whitespace-nowrap underline underline-offset-2 hover:text-grey-text transition-colors duration-200 font-mono"
                  >
                    Subscribe
                  </Link>
                  <span className="text-grey-line text-xs select-none mx-2">
                    |
                  </span>
                  <Link
                    href="/signin"
                    className="text-ink no-underline px-2.5 py-0.5 text-[10.5px] font-bold tracking-widest uppercase whitespace-nowrap hover:text-grey-text transition-colors duration-200 font-mono"
                  >
                    Sign In
                  </Link>
                </div>
              </div>

              {/* Mobile */}
              <div className="md:hidden w-full flex items-center justify-between gap-3">
                <Link
                  href="/"
                  className="font-mono text-[10px] sm:text-[10.5px] font-bold tracking-[0.16em] uppercase text-ink no-underline truncate"
                >
                  LOCOWEEKEND
                </Link>

                <div className="flex items-center gap-4 shrink-0">
                  <Link
                    href="/culture"
                    className="font-mono text-[10px] sm:text-[10.5px] font-bold tracking-[0.16em] uppercase text-ink no-underline"
                  >
                    Culture
                  </Link>
                  <Link
                    href="/subscribe"
                    className="font-mono text-[10px] sm:text-[10.5px] font-bold tracking-[0.16em] uppercase text-ink underline underline-offset-2"
                  >
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-b border-grey-line" />
          </div>
        </div>

        {/* ─────────────────────────────
           MASTHEAD
           ───────────────────────────── */}
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="relative py-5 sm:py-7">
            <button
              onClick={() => setMenuOpen(true)}
              className="lw-icon-btn absolute left-0 top-1/2 -translate-y-1/2 z-20"
              aria-label="Open menu"
              type="button"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="lw-icon-btn absolute right-0 top-1/2 -translate-y-1/2 z-20"
              aria-label="Search"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <div className="relative z-0 text-center lw-anim-mast px-12 sm:px-16">
              <Link href="/" className="no-underline inline-block">
                {/* Desktop / tablet */}
                <span className="hidden sm:inline-flex items-baseline justify-center">
                  <span className="font-serif font-extrabold leading-none -tracking-[0.03em] text-ink text-[104px] md:text-[122px]">
                    Loco
                  </span>

                  <span className="inline-flex items-center justify-center mx-3">
                    <Image
                      src="/LWICON.png"
                      alt=""
                      width={90}
                      height={90}
                      priority
                      className="w-[72px] h-[72px] md:w-[86px] md:h-[86px]"
                    />
                  </span>

                  <span className="font-serif font-extrabold leading-none -tracking-[0.03em] text-ink text-[104px] md:text-[122px]">
                    Weekend
                  </span>
                </span>

                {/* Mobile */}
                <span className="sm:hidden block">
                  <span className="flex items-center justify-center gap-2">
                    <span className="font-serif font-extrabold leading-none -tracking-[0.03em] text-ink text-[46px]">
                      Loco
                    </span>
                    <Image
                      src="/LWICON.png"
                      alt=""
                      width={44}
                      height={44}
                      priority
                      className="w-9 h-9"
                    />
                    <span className="font-serif font-extrabold leading-none -tracking-[0.03em] text-ink text-[46px]">
                      Weekend
                    </span>
                  </span>
                </span>
              </Link>

              <p className="lw-anim-tagline mt-2 sm:mt-3 font-serif text-[15px] leading-snug sm:text-[24px] text-ink/80 max-w-[28rem] sm:max-w-none mx-auto px-2 sm:px-0">
                We used to write about tourism, now we write about everything.
              </p>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────
           SEARCH
           ───────────────────────────── */}
        <div className={`lw-search-wrap ${searchOpen ? "open" : ""}`}>
          <div>
            <div className="max-w-2xl mx-auto flex items-center gap-3 border-b-2 border-ink pb-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#888"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Find anything..."
                className="flex-1 font-mono text-sm border-none bg-transparent outline-none text-ink placeholder:text-grey-text placeholder:italic min-w-0"
              />
            </div>
          </div>
        </div>

        {/* ─────────────────────────────
           CATEGORY ROW
           ───────────────────────────── */}
        <div className="bg-paper">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10">
            <div className="h-px bg-grey-line lw-anim-border" />

            <nav
              aria-label="Primary categories"
              className="lw-anim-catnav py-3 sm:py-4"
            >
              {/* Mobile: compact horizontal scroll */}
              <div className="sm:hidden overflow-x-auto lw-scrollbar-none">
                <div className="flex items-center gap-5 min-w-max px-0.5">
                  {CATEGORY_NAV.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="font-serif text-[18px] leading-none text-ink no-underline hover:text-grey-text transition-colors duration-200 whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Desktop: centered with separators */}
              <div className="hidden sm:flex items-center justify-center overflow-x-auto">
                {CATEGORY_NAV.map((item, i) => (
                  <span
                    key={`${item.label}-${i}`}
                    className="inline-flex items-center shrink-0"
                  >
                    {i > 0 && (
                      <span className="text-grey-line select-none mx-6">|</span>
                    )}
                    <Link
                      href={item.href}
                      className="font-serif text-[24px] sm:text-[26px] leading-none text-ink no-underline hover:text-grey-text transition-colors duration-200 whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  </span>
                ))}
              </div>
            </nav>

            <div className="h-px bg-grey-line lw-anim-border" />
          </div>
        </div>
      </header>

      {/* ─────────────────────────────
         MOBILE MENU OVERLAY
         ───────────────────────────── */}
      <div
        className={`fixed inset-0 bg-ink z-[999] transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="relative h-full overflow-y-auto">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 bg-transparent border-none text-paper cursor-pointer p-2 hover:rotate-90 transition-transform duration-200"
            aria-label="Close menu"
            type="button"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="min-h-full flex flex-col px-6 pt-16 pb-10">
            <div className="mb-6">
              <Image
                src="/LWICON.png"
                alt=""
                width={36}
                height={36}
                className="invert w-9 h-9"
              />
            </div>

            <div className="grid gap-1">
              {CATEGORY_NAV.map((item, i) => (
                <Link
                  key={`${item.label}-mobile-${i}`}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-[30px] sm:text-[34px] leading-[1.02] text-paper no-underline py-2 hover:text-yellow transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 border-t border-paper/20 pt-6 grid gap-3">
              {TOP_BAR_RIGHT.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-paper/70 no-underline hover:text-yellow transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-10">
              <div className="w-8 h-0.5 bg-yellow mb-5" />
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/subscribe"
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-[11px] text-paper/70 no-underline tracking-[0.16em] uppercase hover:text-yellow transition-colors duration-200"
                >
                  Subscribe
                </Link>
                <Link
                  href="/signin"
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-[11px] text-paper/70 no-underline tracking-[0.16em] uppercase hover:text-yellow transition-colors duration-200"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}