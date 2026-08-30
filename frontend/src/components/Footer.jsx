function Footer() {
  // A tiny helper so the copyright year updates automatically every
  // year, instead of us having to remember to change a hard-coded number.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory/80 py-8 px-4 sm:px-6 text-center font-body text-sm">
      <p className="font-display text-lg text-ivory">Krishna Selection House</p>
      <p className="mt-1">Khari Kuan, Dhampur, Bijnor, Uttar Pradesh, India</p>
      <p className="mt-1">7455990282</p>
      <p className="mt-4 text-ivory/50">&copy; {currentYear} Krishna Selection House. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
