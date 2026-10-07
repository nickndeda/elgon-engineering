function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <div>
        <strong>Elgon Engineering</strong>
        <p>Electrical, mechanical and precision engineering in Kenya.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#booking">Request a quote</a>
      </nav>
      <p>© {currentYear} Elgon Engineering. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
