import Link from "next/link";
import { navLinks } from "./siteData";

type SiteHeaderProps = {
  ctaLabel?: string;
};

export default function SiteHeader({ ctaLabel = "Book a Wedding Date" }: SiteHeaderProps) {
  return (
    <header className="top-nav">
      <div className="container top-nav-inner">
        <Link href="/" className="brand-mark">
          Viceroy Banquet Hall
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button button-primary">
          {ctaLabel}
        </Link>
      </div>
    </header>
  );
}
