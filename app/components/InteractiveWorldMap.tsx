"use client";

import { useMemo, useState } from "react";

type ContinentKey =
  | "north-america"
  | "south-america"
  | "europe"
  | "africa"
  | "asia"
  | "oceania";

type Continent = {
  key: ContinentKey;
  label: string;
  path: string;
  base: string;
  hover: string;
  glow: string;
};

const continents: Continent[] = [
  {
    key: "north-america",
    label: "North America",
    path: "M112 108L158 84L225 92L265 128L251 170L224 196L182 204L156 184L130 156L108 126Z",
    base: "#1e3a8a",
    hover: "#3b82f6",
    glow: "rgba(59,130,246,0.35)",
  },
  {
    key: "south-america",
    label: "South America",
    path: "M214 218L248 236L261 273L246 327L224 381L203 396L186 368L196 317L178 276L188 240Z",
    base: "#166534",
    hover: "#22c55e",
    glow: "rgba(34,197,94,0.35)",
  },
  {
    key: "europe",
    label: "Europe",
    path: "M364 102L392 86L432 91L447 111L429 130L391 135L368 124L355 112Z",
    base: "#dc2626",
    hover: "#ef4444",
    glow: "rgba(239,68,68,0.3)",
  },
  {
    key: "africa",
    label: "Africa",
    path: "M386 156L426 164L444 210L432 276L396 313L360 279L356 224L374 181Z",
    base: "#ca8a04",
    hover: "#eab308",
    glow: "rgba(234,179,8,0.35)",
  },
  {
    key: "asia",
    label: "Asia",
    path: "M458 100L533 83L626 92L686 124L694 170L652 202L599 211L541 186L508 205L458 173L439 138Z",
    base: "#7c3aed",
    hover: "#a855f7",
    glow: "rgba(168,85,247,0.35)",
  },
  {
    key: "oceania",
    label: "Oceania",
    path: "M677 251L719 238L752 257L764 291L742 318L705 316L680 293L667 269Z",
    base: "#0f766e",
    hover: "#14b8a6",
    glow: "rgba(20,184,166,0.35)",
  },
];

export default function InteractiveWorldMap() {
  const [active, setActive] = useState<ContinentKey | null>(null);

  const current = useMemo(
    () => continents.find((continent) => continent.key === active) ?? null,
    [active],
  );

  return (
    <section className="section map-section" aria-labelledby="map-title">
      <div className="container map-wrap">
        <div className="map-copy fade-up">
          <h2 className="section-title" id="map-title">
            Explore The World, Continent By Continent
          </h2>
          <p className="section-copy">
            Hover each region to reveal a smooth color transition using palettes inspired by iconic
            flag colors from that part of the world.
          </p>
          <p className="map-status" aria-live="polite">
            {current ? `Now exploring: ${current.label}` : "Hover or tap a continent to explore"}
          </p>
          <div className="continent-legend" aria-hidden>
            {continents.map((continent) => (
              <span key={continent.key}>
                <i style={{ background: continent.base }} /> {continent.label}
              </span>
            ))}
          </div>
        </div>

        <div className="map-card fade-up delay-1">
          <svg
            viewBox="0 0 820 460"
            className="world-map-svg"
            role="img"
            aria-label="Interactive world map by continent"
          >
            <defs>
              <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#edf6ff" />
                <stop offset="100%" stopColor="#f4efe6" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="820" height="460" rx="28" fill="url(#oceanGradient)" />

            {continents.map((continent) => {
              const isActive = active === continent.key;
              return (
                <path
                  key={continent.key}
                  d={continent.path}
                  className={`continent-shape${isActive ? " is-active" : ""}`}
                  fill={isActive ? continent.hover : continent.base}
                  style={{
                    filter: isActive ? `drop-shadow(0 10px 24px ${continent.glow})` : "none",
                  }}
                  onMouseEnter={() => setActive(continent.key)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(continent.key)}
                  onBlur={() => setActive(null)}
                >
                  <title>{continent.label}</title>
                </path>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
