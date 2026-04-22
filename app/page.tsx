import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import Image from "next/image";
import { homeGalleryData } from "./components/homeGalleryData";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy fade-up">
              <span className="pill">Viceroy Banquet Hall, Aligarh</span>
              <h1 className="hero-title">
                Venue that suits your <span className="accent">celebration</span>
              </h1>
              <p className="section-copy">
                A perfect location for weddings, conferences, and parties with modern interiors,
                all-inclusive event support, and a team dedicated to making every event memorable.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.35rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="button button-primary">
                  Book a Wedding Date
                </Link>
                <Link href="/gallery" className="button button-ghost">
                  View Gallery
                </Link>
              </div>
            </div>
            <div className="hero-art fade-up delay-1">
              {/* <video className="hero-video" src="/parambg.mp4" autoPlay muted loop playsInline /> */}
              <Image
                src="https://viceroybanquet.in/wp-content/uploads/2024/08/9bcbaa14-2361-4aca-bf1a-e6327875fa61.jpg"
                alt="Viceroy Banquet Hall"
                fill
                className="image-fill"
              />
              <div className="hero-overlay" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container stats-grid">
            <article className="card fade-up">
              <h3>Premium</h3>
              <p className="section-copy">Elegant and modern interiors for grand celebrations.</p>
            </article>
            <article className="card fade-up delay-1">
              <h3>All-Inclusive</h3>
              <p className="section-copy">Packages designed for smooth planning and execution.</p>
            </article>
            <article className="card fade-up delay-2">
              <h3>Dedicated Team</h3>
              <p className="section-copy">Service experts to support every event requirement.</p>
            </article>
            <article className="card fade-up delay-3">
              <h3>Prime Aligarh</h3>
              <p className="section-copy">Convenient location for guests and event hosts.</p>
            </article>
          </div>
        </section>

        <section className="section" id="events">
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">Celebrate with us</p>
              <h2 className="section-title">Perfect venue for every occasion</h2>
            </div>
            <p className="section-copy">
              Whether you are hosting a grand wedding, business conference, or private party,
              Viceroy offers the right ambiance and support.
            </p>
            <div className="service-grid" style={{ marginTop: "1.25rem" }}>
              {[
                {
                  t: "Weddings",
                  d: "Stylish decor-ready halls and guest-friendly service for unforgettable wedding functions.",
                },
                {
                  t: "Conferences",
                  d: "Professional setup with comfort and flexibility for meetings, launches, and corporate events.",
                },
                {
                  t: "Party",
                  d: "Celebrate birthdays, anniversaries, and family events with refined hospitality.",
                },
              ].map((item, idx) => (
                <article key={item.t} className={`card fade-up delay-${idx}`}>
                  <h3>{item.t}</h3>
                  <p className="section-copy">{item.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="highlights">
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">Our gallery highlights</p>
              <h2 className="section-title">A glimpse of memorable celebrations</h2>
            </div>
            <div className="gallery-grid" style={{ marginTop: "1.25rem" }}>
              {homeGalleryData.map((item, idx) => (
                <article key={item.title} className={`image-tile fade-up delay-${idx}`}>
                  <div style={{ width: "100%", height: "100%", position: "relative" }}>
                    <Image src={item.imageSrc} alt={item.alt} fill className="image-fill" />
                    <div className="hero-overlay" />
                    <strong
                      style={{
                        position: "absolute",
                        bottom: "1rem",
                        left: "1rem",
                        zIndex: 1,
                        background: "rgba(255,253,249,0.92)",
                        padding: "0.3rem 0.65rem",
                        borderRadius: "999px",
                      }}
                    >
                      {item.title}
                    </strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact-band">
          <div className="container">
            <div className="footer-band fade-up delay-3">
              <h3 style={{ marginTop: 0 }}>Plan your event with Viceroy</h3>
              <p className="section-copy">
                Connect with our team for bookings and inquiries. We are here to assist you with
                all your event needs.
              </p>
              <div style={{ display: "flex", gap: "0.7rem", marginTop: "0.9rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="button button-primary">
                  Contact for Booking
                </Link>
                <a className="button button-ghost" href="mailto:book@viceroybanquet.in">
                  book@viceroybanquet.in
                </a>
              </div>
            </div>
            <div className="highlight-band fade-up delay-2">
              <p style={{ margin: 0, fontWeight: 700 }}>Address</p>
              <p className="section-copy" style={{ marginTop: "0.45rem" }}>
                2nd floor, Kalyan Singh Habitat Centre, Aligarh-202001 (U.P) INDIA
              </p>
              <p className="section-copy" style={{ marginTop: "0.45rem" }}>
                Timing: 10am - 8pm | Phone: +91 9927004970
              </p>
              <Link href="/services" className="button button-ghost" style={{ marginTop: "0.9rem" }}>
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
