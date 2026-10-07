import { useEffect, useState } from "react";

import c1 from "./assets/images/c1.jpg";
import c2 from "./assets/images/c2.jpg";
import c3 from "./assets/images/c3.jpg";
import c4 from "./assets/images/c4.jpg";
import c5 from "./assets/images/c5.jpg";
import c6 from "./assets/images/c6.jpg";
import c7 from "./assets/images/c7.jpg";
import c8 from "./assets/images/c8.jpg";
import c9 from "./assets/images/c9.jpg";
import c10 from "./assets/images/c10.png";

const images = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
];


const proofPoints = [
  ["Multi-disciplinary", "engineering solutions"],
  ["End-to-end", "project support"],
  ["Quality-focused", "workmanship and delivery"],
  ["Safety-conscious", "engineering practices"],
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return undefined;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-carousel blueprint-surface" aria-label="Elgon Engineering introduction">
      <div className="hero-copy">
        <p className="section-kicker">Kitale, Kenya | Electrical, mechanical and precision engineering</p>
        <h1>Specified engineering for industrial sites.</h1>
        <p className="hero-lede">
          Elgon Engineering helps facility teams move from site requirement to safe installation, fabrication or repair.
        </p>

        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href="#booking">Request a quote</a>
          <a className="button secondary" href="#services">View services</a>
        </div>

        <dl className="proof-grid" aria-label="Company proof points">
          {proofPoints.map(([value, label]) => (
            <div key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero-media" aria-label="Workshop and engineering project image slots">
        {images.slice(0, 5).map((img, i) => (
          <img
            key={img}
            src={img}
            alt={`Elgon Engineering project photo slot ${i + 1}`}
            className={i === current % 5 ? "active" : ""}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="image-slot-label">
          Replace with real workshop, machinery and completed project photos
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
