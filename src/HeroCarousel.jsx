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

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      {images.map((img, i) => (
        <div
          key={i}
          className="slide"
          style={{
            backgroundImage: `url(${img})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      <div className="hero-overlay">
        <h1>Elgon Engineering</h1>
        <p>Innovative Engineering Solutions</p>
      </div>
    </div>
  );
}

export default HeroCarousel;