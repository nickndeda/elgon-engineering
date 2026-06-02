function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <p>© {currentYear} Elgon Engineering. All rights reserved.</p>
    </footer>
  );
}

export default Footer;