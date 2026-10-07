import Navbar from "./Navbar";
import Services from "./Services";
import Footer from "./Footer";
import HeroCarousel from "./HeroCarousel";
import BookingForm from "./BookingForm";
import MapSection from "./MapSection";
import WhatsAppButton from "./WhatsAppButton";
import "./App.css";
import { motion } from "framer-motion";
import c6 from "./assets/images/c6.jpg";
import c8 from "./assets/images/c8.jpg";
import c10 from "./assets/images/c10.png";


const projects = [
  {
    label: "Electrical Engineering",
    title: "Electrical Installation and Power Distribution",
    image: c6,
    meta: "Focus: Power distribution, wiring and electrical safety",
    detail:
      "Electrical installation and distribution solutions designed to support reliable power delivery, safe operations and efficient electrical systems across commercial, industrial and institutional facilities.",
  },
  {
    label: "Fabrication & Machining",
    title: "Precision Metal Fabrication and Component Machining",
    image: c8,
    meta: "Focus: Metal fabrication, machining and component assembly",
    detail:
      "Fabrication and machining solutions for engineering components, equipment parts and custom assemblies, with attention to dimensional accuracy, material suitability and dependable performance.",
  },
  {
    label: "Mechanical Engineering",
    title: "Mechanical Maintenance and Equipment Servicing",
    image: c10,
    meta: "Focus: Equipment maintenance, repairs and commissioning",
    detail:
      "Mechanical engineering support covering equipment inspection, fault diagnosis, maintenance and repair to help improve operational reliability, minimize downtime and extend equipment service life.",
  },
];

const sectors = [
  "Manufacturing plants",
  "Commercial facilities",
  "Contractors and builders",
  "Agricultural processors",
  "Workshops and fabrication teams",
  "Public and institutional sites",
];

const process = [
  ["Consult", "Confirm site conditions, service need, urgency and constraints."],
  ["Design", "Define the technical approach, materials, drawings and cost basis."],
  ["Build", "Fabricate, install or repair with checks at critical stages."],
  ["Commission", "Test operation, document the handover and correct issues before release."],
  ["Support", "Provide maintenance guidance, follow-up visits and repair planning."],
];

const faqs = [
  ["Do you handle both electrical and mechanical work?", "Yes. Elgon Engineering covers electrical installation, mechanical machining and repair, and precision engineering services."],
  ["Can I request a site visit?", "Use the quote form or call button with your location, service type and urgency. Add photos or measurements when available."],
  ["What should I include in a quote request?", "Send the site location, service category, drawings or photos if you have them, required timeline and any safety or access constraints."],
  ["Do you work outside Kitale?", "Add your project location in the message field so the team can confirm availability and logistics."],
];

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* HERO */}
      <HeroCarousel />

      <WhatsAppButton />

      <Services />

      <motion.section
        id="about"
        className="about-section blueprint-surface section-pad"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
        viewport={{ once: true }}
      >
        <div className="about-mark">EE</div>
        <div>
          <p className="section-kicker">About</p>
          <h2>Engineering support for teams that cannot afford avoidable failure.</h2>
        </div>
        <p>
          Elgon Engineering provides electrical installation, machining, metal cutting, design, development, consulting, precision engineering, maintenance and repair services for industrial and commercial clients.
        </p>
      </motion.section>

      <section id="projects" className="projects section-pad">
        <div className="section-heading">
          <p className="section-kicker">Featured projects</p>
          <h2>Replace these project slots with real work, specifications and site photos.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card-${index + 1}`} key={project.title}>
              <img src={project.image} alt={`${project.label}: ${project.title}`} loading="lazy" />
              <div>
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p className="project-meta">{project.meta}</p>
                <p>{project.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="sectors" className="sectors section-pad">
        <div className="section-heading split-heading">
          <div>
            <p className="section-kicker">Clients and sectors</p>
            <h2>Built for the people responsible for uptime, safety and procurement clarity.</h2>
          </div>
          <p>
            Facility managers, factory owners, contractors and procurement officers need scope, proof and a clear next step before they trust a contractor with critical work.
          </p>
        </div>
        <ul className="sector-list">
          {sectors.map((sector) => (
            <li key={sector}>{sector}</li>
          ))}
        </ul>
      </section>

      <section id="process" className="process section-pad blueprint-surface">
        <div className="section-heading">
          <p className="section-kicker">Process</p>
          <h2>From site requirement to supported handover.</h2>
        </div>
        <ol className="process-list">
          {process.map(([title, description], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      
      <section id="standards" className="standards section-pad">
  <div className="standards-panel">
    <div>
      <p className="section-kicker">Quality, Safety and Compliance</p>
      <h2>
        Engineering solutions guided by quality, safety and project requirements.
      </h2>
      <p>
        Every project has its own technical specifications, safety
        considerations and compliance requirements. Contact our team
        to discuss the standards, documentation and procedures relevant
        to your project.
      </p>
    </div>
    <ul>
      <li>Project-specific technical specifications and requirements</li>
      <li>Applicable industry standards and regulatory requirements</li>
      <li>Quality assurance and inspection considerations</li>
      <li>Site safety procedures and project risk management</li>
    </ul>
  </div>
      </section>

      <section id="faq" className="faq section-pad">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2>Quick answers before you request a quote.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section section-pad">
        <div className="contact-intro">
          <p className="section-kicker">Contact</p>
          <h2>Send the job scope, photos or measurements and the team will follow up.</h2>
          <div className="contact-cards">
            <a href="tel:+254785468526">
              <span>Call</span>
              +254 785 468 526
            </a>
            <a href="https://wa.me/254785468526" target="_blank" rel="noreferrer noopener">
              <span>WhatsApp</span>
              Start a chat
            </a>
            <a href="mailto:info@elgonengineering.com">
              <span>Email</span>
              info@elgonengineering.com
            </a>
          </div>
          <div className="hours-panel">
            <strong>Location and hours</strong>
            <p>Kitale, Kenya</p>
            <p>Monday
              07:00 to 18:00
              Tuesday
              07:00 to 18:00
              Wednesday
              07:00 to 18:00
              Thursday
              07:00 to 18:00
              Friday
              07:00 to 18:00
              Saturday
              08:00 to 12:00
              Sunday
              Closed</p>
          </div>
        </div>

        <BookingForm />
      </section>

      <MapSection />

      <Footer />
    </div>
  );
}

export default App;
