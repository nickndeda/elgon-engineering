import { motion } from "framer-motion";

function Services() {
  const serviceGroups = [
    {
      number: "01",
      title: "Electrical",
      description:
        "Installation, wiring, maintenance and fault resolution for industrial and commercial facilities.",
      typical:
        "Typical projects: distribution boards, motor control circuits, lighting upgrades, plant maintenance and site electrical checks.",
      items: ["Electrical Installation", "Maintenance & Repairs", "Consulting Services"],
    },
    {
      number: "02",
      title: "Mechanical",
      description:
        "Fabrication, fitting, repair and modification work for equipment that needs to keep operating under load.",
      typical:
        "Typical projects: machining, metal cutting, equipment brackets, repair parts, guards and mechanical assemblies.",
      items: ["Machining & Metal Cutting", "Design & Development", "Maintenance & Repairs"],
    },
    {
      number: "03",
      title: "Precision",
      description:
        "High-accuracy tool making, component development and measured work where tolerances matter.",
      typical:
        "Typical projects: precision components, jigs, fixtures, tool repair and prototype parts for production teams.",
      items: ["Precision Engineering", "Design & Development", "Consulting Services"],
    },
  ];

  return (
    <section id="services" className="services section-pad">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker">Services</p>
          <h2>One engineering partner for site power, mechanical works and precision parts.</h2>
        </div>
        <p>
          The original service list is preserved and grouped around the way industrial buyers usually scope work: electrical systems, mechanical execution and precision engineering.
        </p>
      </div>

      <div className="service-rows">
        {serviceGroups.map((group, i) => (
          <motion.div
            key={group.title}
            className="service-row"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <span className="service-number">{group.number}</span>
            <div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <p className="typical">{group.typical}</p>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
