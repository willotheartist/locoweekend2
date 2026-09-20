"use client";
import { sections as editorialSections } from "@/lib/sections";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";

const navigation = editorialSections.map(section => [section.title, section.href] as const);
const moreNavigation = [
  ["The magazine", "/magazine"],
  ["The Sauce", "/the-sauce"],
  ["Dead Stock", "/dead-stock"],
  ["Our picks", "/picks"],
  ["Film", "/flicks"],
  ["Drinks", "/drinks"],
  ["Guides", "/guides"],
  ["Lisbon", "/lisbon"],
  ["Madrid", "/madrid"],
] as const;

export function Header() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDialogElement>(null);
  const searchRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <div className="utility-bar">
        <Link href="/magazine">
          Culture, affairs & anything interesting{" "}
          <ArrowUpRight size={13} aria-hidden="true" />
        </Link>
      </div>
      <header className="site-header">
        <div className="masthead">
          <button
            className="icon-button menu-toggle"
            type="button"
            aria-label="Open navigation"
            aria-haspopup="dialog"
            onClick={() => menuRef.current?.showModal()}
          >
            <Menu size={21} strokeWidth={1.5} />
          </button>
          <Link href="/" className="wordmark" aria-label="LocoWeekend home">
            LOCO<span>WEEKEND</span>
            <i aria-hidden="true">.</i>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="masthead-actions">
            <Link href="/magazine" className="magazine-link">
              The magazine <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            <button
              className="icon-button"
              type="button"
              aria-label="Search articles"
              aria-haspopup="dialog"
              onClick={() => searchRef.current?.showModal()}
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
        <nav className="mobile-nav" aria-label="Section navigation">
          {navigation.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <dialog
        ref={menuRef}
        className="navigation-dialog"
        aria-labelledby="menu-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) menuRef.current?.close();
        }}
      >
        <div className="dialog-content">
          <div className="dialog-heading">
            <p id="menu-title" className="eyebrow">
              Explore LocoWeekend
            </p>
            <button
              type="button"
              className="icon-button"
              aria-label="Close navigation"
              onClick={() => menuRef.current?.close()}
            >
              <X size={22} />
            </button>
          </div>
          <nav
            aria-label="All sections"
            onClick={() => menuRef.current?.close()}
          >
            <div className="menu-primary">
              {navigation.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                  <ArrowUpRight size={22} />
                </Link>
              ))}
            </div>
            <div className="menu-secondary">
              {moreNavigation.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          </nav>
          <p className="menu-note">A magazine for the independently curious.</p>
        </div>
      </dialog>
      <dialog
        ref={searchRef}
        className="search-dialog"
        aria-labelledby="search-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) searchRef.current?.close();
        }}
      >
        <div className="dialog-content">
          <div className="dialog-heading">
            <h2 id="search-title">Find something interesting.</h2>
            <button
              type="button"
              className="icon-button"
              aria-label="Close search"
              onClick={() => searchRef.current?.close()}
            >
              <X size={22} />
            </button>
          </div>
          <form
            action="/search"
            method="get"
            className="search-form"
            onSubmit={() => searchRef.current?.close()}
          >
            <label htmlFor="site-search" className="sr-only">
              Search articles
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              required
              maxLength={120}
              placeholder="Culture, cities, big ideas…"
            />
            <button type="submit" aria-label="Submit search">
              <Search size={22} />
            </button>
          </form>
          <p className="eyebrow search-hint">
            Try: Lisbon, music, software, wine
          </p>
        </div>
      </dialog>
    </>
  );
}
