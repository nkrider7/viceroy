import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { contactInfo } from "../components/siteData";

export default function ContactPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="section">
        <div className="container">
          <div className="section-header fade-up">
            <p className="section-kicker">Contact us</p>
            <h1 className="section-title">Connect for bookings and inquiries</h1>
            <p className="section-copy">
              We are here to assist with all your event needs. Reach out for wedding dates,
              conference plans, and party bookings.
            </p>
          </div>

          <section className="section" style={{ paddingBottom: "2rem" }}>
            <div className="contact-grid">
              <article className="card fade-up">
                <h3>Visit Venue</h3>
                <p className="section-copy">{contactInfo.address}</p>
              </article>
              <article className="card fade-up delay-1">
                <h3>Call Us</h3>
                <p className="section-copy">
                  <a href={contactInfo.phoneHref}>{contactInfo.phoneDisplay}</a>
                </p>
              </article>
              <article className="card fade-up delay-2">
                <h3>Email</h3>
                <p className="section-copy">
                  <a href={contactInfo.emailHref}>{contactInfo.email}</a>
                </p>
              </article>
              <article className="card fade-up delay-3">
                <h3>Timing</h3>
                <p className="section-copy">{contactInfo.timings}</p>
              </article>
            </div>
          </section>

          <section className="footer-band fade-up">
            <h3 style={{ marginTop: 0 }}>Quick enquiry</h3>
            <p className="section-copy">
              For a faster response, share your event type and preferred date through email.
            </p>
            <a className="button button-primary" href={contactInfo.emailHref} style={{ marginTop: "0.9rem" }}>
              {contactInfo.email}
            </a>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
