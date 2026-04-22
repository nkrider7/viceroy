import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="section">
        <div className="container">
          <div className="section-header fade-up">
            <p className="section-kicker">About Viceroy</p>
            <h1 className="section-title">A perfect location for every occasion</h1>
            <p className="section-copy">
              Viceroy in Aligarh stands out as a top choice for those seeking a luxurious banquet
              experience with modern interiors and organized event support.
            </p>
          </div>

          <section className="section" style={{ paddingBottom: "2rem" }}>
            <div className="service-grid">
              <article className="card fade-up">
                <h3>Modern Interiors</h3>
                <p className="section-copy">
                  Sophisticated decor and premium ambiance to elevate wedding and party moments.
                </p>
              </article>
              <article className="card fade-up delay-1">
                <h3>All-Inclusive Packages</h3>
                <p className="section-copy">
                  Packages designed to cover key event details for smooth planning and execution.
                </p>
              </article>
              <article className="card fade-up delay-2">
                <h3>Exceptional Service</h3>
                <p className="section-copy">
                  Our dedicated team focuses on quality delivery and memorable guest experiences.
                </p>
              </article>
            </div>
          </section>

          <section className="footer-band fade-up">
            <h3 style={{ marginTop: 0 }}>Our approach</h3>
            <p className="section-copy">
              Whether you are hosting a grand celebration or an intimate gathering, we work to
              transform your vision into reality through elegant setups and dependable hospitality.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
