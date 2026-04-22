import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const galleryHighlights = [
  "Haldi Theme Decor",
  "Wedding Stage Setup",
  "Banquet Lighting Mood",
  "Family Event Moments",
  "Reception Dining Area",
  "Conference Arrangement",
];

const instagramPlaceholders = Array.from({ length: 6 }, (_, i) => ({
  title: `Instagram Showcase ${i + 1}`,
  caption: "Replace this card with real Instagram media.",
}));

export default function GalleryPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="section">
        <div className="container">
          <div className="section-header fade-up">
            <p className="section-kicker">Our most exciting gallery</p>
            <h1 className="section-title">Celebrations captured at Viceroy</h1>
            <p className="section-copy">
              Explore event-ready aesthetics inspired by our old website gallery sections. Instagram
              area is prepared with placeholders for your latest posts.
            </p>
          </div>

          <section className="section" style={{ paddingBottom: "2rem" }}>
            <div className="gallery-grid">
              {galleryHighlights.map((title, index) => (
                <article key={title} className={`image-tile fade-up delay-${index % 4}`}>
                  <div style={{ width: "100%", height: "100%", position: "relative" }}>
                    <video className="image-fill" src="/parambg.mp4" autoPlay muted loop playsInline />
                    <div className="hero-overlay" />
                    <strong
                      style={{
                        position: "absolute",
                        left: "1rem",
                        bottom: "1rem",
                        zIndex: 1,
                        borderRadius: "999px",
                        background: "rgba(255,253,249,0.92)",
                        padding: "0.35rem 0.7rem",
                      }}
                    >
                      {title}
                    </strong>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" style={{ paddingTop: "1rem" }}>
            <div className="section-header">
              <p className="section-kicker">Instagram ready section</p>
              <h2 className="section-title">Placeholder grid for @viceroy_banquet_hall_aligarh</h2>
            </div>
            <div className="gallery-grid" style={{ marginTop: "1.25rem" }}>
              {instagramPlaceholders.map((item, index) => (
                <article key={item.title} className={`card fade-up delay-${index % 4}`}>
                  <h3>{item.title}</h3>
                  <p className="section-copy">{item.caption}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
