import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const serviceCards = [
  {
    title: "Wedding Celebrations",
    description:
      "From engagement to reception, our venue supports complete wedding functions with elegant ambiance and coordinated event flow.",
  },
  {
    title: "Conference Events",
    description:
      "Host corporate meetings, launches, and community conferences in a professional setting with reliable event support.",
  },
  {
    title: "Private Party Functions",
    description:
      "Celebrate birthdays, anniversaries, and family milestones in a premium and comfortable environment.",
  },
];

const packageRows = [
  { label: "Venue Setup", value: "Modern hall layout with premium finishing" },
  { label: "Event Support", value: "Dedicated team for smooth execution" },
  { label: "Decor Flexibility", value: "Theme-friendly arrangements for occasions" },
  { label: "Guest Comfort", value: "Spacious seating and organized hosting flow" },
];

export default function ServicesPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="section">
        <div className="container">
          <div className="section-header fade-up">
            <p className="section-kicker">Services and packages</p>
            <h1 className="section-title">Designed for memorable celebrations</h1>
            <p className="section-copy">
              Viceroy offers complete event-focused support for weddings, conferences, and parties
              with quality service and thoughtful venue planning.
            </p>
          </div>

          <section className="section" style={{ paddingBottom: "2rem" }}>
            <div className="service-grid">
              {serviceCards.map((card, index) => (
                <article key={card.title} className={`card fade-up delay-${index}`}>
                  <h3>{card.title}</h3>
                  <p className="section-copy">{card.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
            <div className="section-header">
              <p className="section-kicker">What you get</p>
              <h2 className="section-title">All-inclusive event essentials</h2>
            </div>
            <div className="table-stack">
              {packageRows.map((row, index) => (
                <div key={row.label} className={`table-row fade-up delay-${index}`}>
                  <strong>{row.label}</strong>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
