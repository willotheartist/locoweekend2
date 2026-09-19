import Link from "next/link";

const sections = [
  ["Culture", "/culture"],
  ["Business", "/business"],
  ["Affairs", "/affairs"],
  ["Style", "/fashion"],
  ["Food", "/grub"],
  ["Drinks", "/drinks"],
  ["Travel", "/travel"],
  ["Film", "/flicks"],
];
const explore = [
  ["The magazine", "/magazine"],
  ["The Sauce", "/the-sauce"],
  ["Dead Stock", "/dead-stock"],
  ["Our picks", "/picks"],
  ["Guides", "/guides"],
  ["Lisbon", "/lisbon"],
  ["Madrid", "/madrid"],
  ["Search", "/search"],
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-top">
          <div className="footer-intro">
            <Link href="/" className="wordmark">
              LOCO<span>WEEKEND</span>
              <i aria-hidden="true">.</i>
            </Link>
            <p>For the independently curious.</p>
            <span className="eyebrow">
              Culture, affairs & anything interesting.
            </span>
          </div>
          <nav aria-label="Footer sections">
            <h2 className="eyebrow">Sections</h2>
            {sections.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <nav aria-label="More from LocoWeekend">
            <h2 className="eyebrow">Explore</h2>
            {explore.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} LocoWeekend</p>
          <p>Read widely. Go somewhere. Stay curious.</p>
          <Link href="#main-content">Back to top ↑</Link>
        </div>
      </div>
    </footer>
  );
}
