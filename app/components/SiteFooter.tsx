import Link from "next/link";
import { contactInfo, navLinks } from "./siteData";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Image src="/logobalck.png" alt="Viceroy Banquet Hall" width={180} height={98} />
          <h1 className="hero-title" style={{ color: "#8a6222" }}>Banquet Hall</h1>
          <p className="section-copy">
            A perfect location for every occasion with elegant interiors and dependable event
            support in Aligarh.
          </p>
        </div>
        <div>
          <h4>Pages</h4>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="footer-links">
            <li>{contactInfo.address}</li>
            <li>
              <a href={contactInfo.phoneHref}>{contactInfo.phoneDisplay}</a>
            </li>
            <li>
              <a href={contactInfo.emailHref}>{contactInfo.email}</a>
            </li>
            <li>Timing: {contactInfo.timings}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
