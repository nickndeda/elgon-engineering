import { useEffect, useState } from "react";
import logo from "./assets/logo.png";

const links = [
  ["#home", "Home"],
  ["#services", "Services"],
  ["#projects", "Projects"],
  ["#process", "Process"],
  ["#standards", "Standards"],
  ["#contact", "Contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(([href]) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="Elgon Engineering home">
          <img src={logo} alt="Elgon Engineering Logo" className="logo" />
          <span>
            <strong>Elgon Engineering</strong>
            <small>Electrical | Mechanical | Precision</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={active === href ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-quote" href="#booking">Request a quote</a>
          <button
            className="nav-toggle"
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`nav-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div className="nav-inner" onClick={(e) => e.stopPropagation()}>
          <button className="close" type="button" onClick={() => setOpen(false)}>Close</button>
          <p className="menu-kicker">Navigate</p>
          <ul>
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
            <li>
              <a href="#booking" onClick={() => setOpen(false)}>Request a quote</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
