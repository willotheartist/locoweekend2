// src/components/site/Header.tsx
"use client";

import { useState, useEffect } from "react";
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

const TRENDING_LEFT = [
  { title: "The Death of the DJ Bar", href: "/articles/death-of-the-dj-bar" },
  { title: "Virgil Was Right", href: "/articles/virgil-was-right" },
  { title: "What Beirut Eats Now", href: "/articles/what-beirut-eats-now" },
];

const TRENDING_RIGHT = [
  { title: "Nigo\u2019s Next Move", href: "/articles/nigos-next-move" },
  { title: "Best New Tracks", href: "/articles/best-new-tracks" },
  { title: "Film Picks: Feb \u201926", href: "/articles/film-picks-feb-26" },
];

const CATEGORY_NAV = [
  { label: "FLICKS", href: "/flicks" },
  { label: "SOUND", href: "/sound" },
  { label: "THREADS", href: "/threads" },
  { label: "GRUB", href: "/grub" },
  { label: "DRINKS", href: "/drinks" },
  { label: "POLITICS", href: "/politics" },
  { label: "ART", href: "/art" },
  { label: "PICKS", href: "/picks" },
];

/* ───────────────────────────────────────────
   HEADER
   ─────────────────────────────────────────── */

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes lw-line-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes lw-slide-right {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes lw-slide-left {
          from { opacity: 0; transform: translateX(12px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes lw-menu-item {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .lw-anim-topbar { animation: lw-fade-down 0.5s ease both; }
        .lw-anim-logo { animation: lw-scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both; }
        .lw-anim-tagline { animation: lw-fade-up 0.5s ease 0.35s both; }

        .lw-anim-trending-left > a { animation: lw-slide-right 0.4s ease both; }
        .lw-anim-trending-left > a:nth-child(1) { animation-delay: 0.25s; }
        .lw-anim-trending-left > a:nth-child(2) { animation-delay: 0.35s; }
        .lw-anim-trending-left > a:nth-child(3) { animation-delay: 0.45s; }

        .lw-anim-trending-right > a { animation: lw-slide-left 0.4s ease both; }
        .lw-anim-trending-right > a:nth-child(1) { animation-delay: 0.25s; }
        .lw-anim-trending-right > a:nth-child(2) { animation-delay: 0.35s; }
        .lw-anim-trending-right > a:nth-child(3) { animation-delay: 0.45s; }

        .lw-anim-catnav { animation: lw-fade-up 0.45s ease 0.4s both; }
        .lw-anim-border { animation: lw-line-grow 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both; transform-origin: center; }
        .lw-anim-edit-tag { animation: lw-fade-up 0.35s ease 0.55s both; }

        .lw-menu-open .lw-menu-item { animation: lw-menu-item 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; }

        .lw-trending-link { position: relative; display: inline-block; }
        .lw-trending-link::after {
          content: '';
          position: absolute;
          bottom: 1px;
          left: 0;
          right: 0;
          height: 1px;
          background: #FFF100;
          transition: transform 0.2s ease;
          transform-origin: left;
        }
        .lw-trending-link:hover::after { transform: scaleX(1.05); }

        .lw-cat-link { position: relative; }
        .lw-cat-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #FFF100;
          transition: width 0.2s ease, left 0.2s ease;
        }
        .lw-cat-link:hover::after { width: 100%; left: 0; }

        .lw-search-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s ease, padding 0.3s ease;
          padding: 0 2rem;
          border-bottom: 1px solid transparent;
        }
        .lw-search-wrap.open {
          grid-template-rows: 1fr;
          padding: 1rem 2rem;
          border-bottom-color: #D4D4D0;
        }
        .lw-search-wrap > div { overflow: hidden; }
      `}</style>

      <header className="bg-paper font-mono w-full relative z-50">

        {/* ═══ TIER 1: TOP BAR ═══ */}
        <div className={`border-b border-grey-line ${mounted ? "lw-anim-topbar" : "opacity-0"}`}>
          {/* Desktop */}
          <div className="hidden md:block px-7 py-2.5">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center max-w-6xl mx-auto">
              {/* Left links */}
              <div className="flex items-center gap-0">
                {TOP_BAR_LEFT.map((item, i) => (
                  <span key={item.label} className="inline-flex items-center">
                    {i > 0 && <span className="text-grey-line text-xs select-none mx-1">|</span>}
                    <Link href={item.href} className="text-ink no-underline px-2.5 py-0.5 text-[10.5px] font-bold tracking-widest uppercase whitespace-nowrap hover:text-grey-text transition-colors duration-200">
                      {item.label}
                    </Link>
                  </span>
                ))}
              </div>

              {/* Center brand */}
              <div className="flex items-center">
                <span className="text-grey-line text-xs select-none mx-2">|</span>
                <span className="font-serif text-xl font-medium italic tracking-tight normal-case px-3 select-none">Wall&Fifth</span>
                <span className="text-grey-line text-xs select-none mx-2">|</span>
              </div>

              {/* Right links + subscribe/signin */}
              <div className="flex items-center justify-end gap-0">
                {TOP_BAR_RIGHT.map((item, i) => (
                  <span key={item.label} className="inline-flex items-center">
                    {i > 0 && <span className="text-grey-line text-xs select-none mx-1">|</span>}
                    <Link href={item.href} className="text-ink no-underline px-2.5 py-0.5 text-[10.5px] font-bold tracking-widest uppercase whitespace-nowrap hover:text-grey-text transition-colors duration-200">
                      {item.label}
                    </Link>
                  </span>
                ))}
                <span className="text-grey-line text-xs select-none mx-1">|</span>
                <Link href="/subscribe" className="text-ink px-2.5 py-0.5 text-[10.5px] font-bold tracking-widest uppercase whitespace-nowrap underline underline-offset-2 hover:text-grey-text transition-colors duration-200">Subscribe</Link>
                <span className="text-grey-line text-xs select-none mx-1">|</span>
                <Link href="/signin" className="text-ink no-underline px-2.5 py-0.5 text-[10.5px] font-bold tracking-widest uppercase whitespace-nowrap hover:text-grey-text transition-colors duration-200">Sign In</Link>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center justify-between px-4 py-2.5">
            <button onClick={() => setMenuOpen(true)} className="bg-transparent border-none cursor-pointer p-1 text-ink" aria-label="Open menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <span className="font-serif text-base font-medium italic tracking-tight select-none">Wall&Fifth</span>
            <button onClick={() => setSearchOpen(!searchOpen)} className="bg-transparent border-none cursor-pointer p-1 text-ink" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>

        {/* ═══ TIER 2: MASTHEAD ═══ */}
        <div className="max-w-5xl mx-auto px-6 pt-8 pb-7 md:pt-10 md:pb-8">
          {/* Desktop: 3-column grid */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-6">
            <div className={`flex flex-col gap-1 items-start ${mounted ? "lw-anim-trending-left" : "opacity-0"}`}>
              {TRENDING_LEFT.map((item) => (
                <Link key={item.title} href={item.href} className="lw-trending-link font-serif text-sm italic text-grey-dark no-underline leading-relaxed hover:text-ink transition-colors duration-200">
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="text-center relative">
              <button onClick={() => setMenuOpen(true)} className="absolute -left-16 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-2 text-ink hover:scale-110 transition-transform duration-200" aria-label="Open menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>

              <div className={mounted ? "lw-anim-logo" : "opacity-0"}>
                <Image src="/LWICON.png" alt="" width={48} height={48} className="mx-auto mb-1 w-12 h-12" priority />
                <Link href="/" className="font-serif text-7xl font-extrabold leading-none -tracking-[0.03em] text-ink no-underline block">LocoWeekend</Link>
              </div>
              <p className={`font-mono text-[15px] text-grey-text mt-3.5 tracking-wide ${mounted ? "lw-anim-tagline" : "opacity-0"}`}>
                We used to write about tourism, now we write about everything.
              </p>

              <button onClick={() => setSearchOpen(!searchOpen)} className="absolute -right-16 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-2 text-ink hover:scale-110 transition-transform duration-200" aria-label="Search">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>

            <div className={`flex flex-col gap-1 items-end ${mounted ? "lw-anim-trending-right" : "opacity-0"}`}>
              {TRENDING_RIGHT.map((item) => (
                <Link key={item.title} href={item.href} className="lw-trending-link font-serif text-sm italic text-grey-dark no-underline leading-relaxed hover:text-ink transition-colors duration-200">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile / Tablet */}
          <div className="lg:hidden text-center">
            <div className={mounted ? "lw-anim-logo" : "opacity-0"}>
              <Image src="/LWICON.png" alt="" width={40} height={40} className="mx-auto mb-1 w-10 h-10" priority />
              <Link href="/" className="font-serif text-5xl sm:text-6xl font-extrabold leading-none -tracking-[0.03em] text-ink no-underline block">LocoWeekend</Link>
            </div>
            <p className={`font-mono text-[13px] text-grey-text mt-2.5 tracking-wide ${mounted ? "lw-anim-tagline" : "opacity-0"}`}>
              We used to write about tourism, now we write about everything.
            </p>
          </div>
        </div>

        {/* ═══ SEARCH BAR ═══ */}
        <div className={`lw-search-wrap ${searchOpen ? "open" : ""}`}>
          <div>
            <div className="max-w-lg mx-auto flex items-center gap-3 border-b-2 border-ink pb-1.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input type="text" placeholder="Find anything..." className="flex-1 font-mono text-sm border-none bg-transparent outline-none text-ink placeholder:text-grey-text placeholder:italic" />
            </div>
          </div>
        </div>

        {/* ═══ TIER 3: CATEGORY NAV ═══ */}
        <div className="relative">
          <div className={`h-[2.5px] bg-ink ${mounted ? "lw-anim-border" : "opacity-0"}`} />
          <div className={`absolute left-6 sm:left-8 top-0 -translate-y-full bg-yellow text-ink font-mono text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 leading-none ${mounted ? "lw-anim-edit-tag" : "opacity-0"}`}>
            THE EDIT
          </div>
          <nav className={`flex items-center justify-center py-3.5 px-4 sm:px-6 max-w-5xl mx-auto overflow-x-auto ${mounted ? "lw-anim-catnav" : "opacity-0"}`}>
            {CATEGORY_NAV.map((item, i) => (
              <span key={item.label} className="inline-flex items-center shrink-0">
                {i > 0 && <div className="w-px h-4 bg-grey-text/35 shrink-0" aria-hidden="true" />}
                <Link href={item.href} className="lw-cat-link font-mono text-sm font-bold tracking-wider uppercase text-ink no-underline px-4 sm:px-5 py-1 whitespace-nowrap hover:text-grey-text transition-colors duration-200">
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
          <div className={`h-[2.5px] bg-ink ${mounted ? "lw-anim-border" : "opacity-0"}`} />
        </div>
      </header>

      {/* ═══ MOBILE MENU ═══ */}
      <div className={`fixed inset-0 bg-ink z-999 flex flex-col items-center justify-center transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} ${menuOpen ? "lw-menu-open" : ""}`}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 bg-transparent border-none text-paper cursor-pointer p-2 hover:rotate-90 transition-transform duration-200" aria-label="Close menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="mb-8">
          <Image src="/LWICON.png" alt="" width={36} height={36} className="mx-auto invert w-9 h-9" />
        </div>

        {CATEGORY_NAV.map((item, i) => (
          <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="lw-menu-item font-mono text-base font-bold tracking-[0.12em] uppercase text-paper no-underline py-3 px-6 hover:text-yellow transition-colors duration-200" style={{ animationDelay: `${0.05 + i * 0.04}s` }}>
            {item.label}
          </Link>
        ))}

        <div className="lw-menu-item mt-8 w-8 h-0.5 bg-yellow" style={{ animationDelay: "0.4s" }} />

        <div className="lw-menu-item flex items-center gap-6 mt-4" style={{ animationDelay: "0.45s" }}>
          <Link href="/subscribe" onClick={() => setMenuOpen(false)} className="font-mono text-xs text-paper/50 no-underline tracking-widest uppercase hover:text-yellow transition-colors duration-200">SUBSCRIBE</Link>
          <Link href="/signin" onClick={() => setMenuOpen(false)} className="font-mono text-xs text-paper/50 no-underline tracking-widest uppercase hover:text-yellow transition-colors duration-200">SIGN IN</Link>
        </div>
      </div>
    </>
  );
}