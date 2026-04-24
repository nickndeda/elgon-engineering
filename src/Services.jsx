import { motion } from "framer-motion";

function Services() {
  const services = [
    ["Electrical Installation", "Professional wiring and systems setup."],
    ["Machining & Metal Cutting", "Precision fabrication and shaping."],
    ["Design & Development", "Engineering innovation solutions."],
    ["Consulting Services", "Expert engineering guidance."],
    ["Precision Engineering", "High-accuracy tool making."],
    ["Maintenance & Repairs", "Reliable system servicing."]
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <p className="subtitle">
        Precision engineering solutions tailored for industry excellence.
      </p>

      <div className="service-grid">
        {services.map((item, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{item[0]}</h3>
            <p>{item[1]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;