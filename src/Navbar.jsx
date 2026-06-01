import { useState } from "react";
import logo from "./assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <img src={logo} alt="Elgon Engineering Logo" className="logo" />
          <h2>Elgon Engineering</h2>
        </div>

        <button className="nav-toggle" onClick={() => setOpen(true)} aria-label="Open menu">☰</button>
      </nav>

      <div className={`nav-overlay ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <div className="nav-inner" onClick={(e) => e.stopPropagation()}>
          <button className="close" onClick={() => setOpen(false)}>✕</button>
          <ul>
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
            <li><a href="#booking" onClick={() => setOpen(false)}>Book Consultation</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;