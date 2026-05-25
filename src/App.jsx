import Navbar from "./Navbar";
import Services from "./Services";
import Footer from "./Footer";
import HeroCarousel from "./HeroCarousel";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* HERO */}
      <HeroCarousel />

      {/* SERVICES */}
      <Services />

      {/* ABOUT */}
      <motion.section
  id="about"
  className="info-section"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2>About Us</h2>
  <p>
    Elgon Engineering is committed to delivering top-tier engineering
    services across multiple industries with precision, innovation, and reliability.
  </p>
</motion.section>

{/* CONTACT */}
<motion.section
  id="contact"
  className="info-section"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  <h2>Contact</h2>

  <p>
    Email:{" "}
    <a href="mailto:info@elgonengineering.com" className="contact-link">
      info@elgonengineering.com
    </a>
  </p>

  <p>
    Phone:{" "}
    <a href="tel:+254785468526" className="contact-link">
      +254 722 856 529
    </a>
  </p>
</motion.section>

      <Footer />
    </div>
  );
}

export default App;
