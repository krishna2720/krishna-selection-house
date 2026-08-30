import { useState } from "react";
import { openWhatsApp, whatsappMessages } from "../utils/whatsapp";

// The navbar stays fixed at the top of the page.
// On mobile it collapses into a hamburger menu (☰) because there
// isn't enough width to show every link side by side.
function Navbar() {
  // isMenuOpen tracks whether the mobile dropdown menu is visible.
  // This is a simple example of React state: a variable that,
  // when changed, causes the component to re-render automatically.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Each link scrolls to a section on the same page (id="...").
  const navLinks = [
    { label: "Ladies", href: "#ladies" },
    { label: "Men", href: "#men" },
    { label: "Kids", href: "#kids" },
    { label: "School Uniform", href: "#school-uniform" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#top" className="font-display text-xl sm:text-2xl font-semibold text-maroon">
          Krishna Selection House
        </a>

        {/* Links visible on medium screens and up */}
        <ul className="hidden md:flex items-center gap-6 font-body text-sm text-charcoal">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-maroon transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => openWhatsApp(whatsappMessages.general)}
          className="hidden md:inline-block bg-teal text-ivory font-body text-sm font-semibold px-4 py-2 rounded-full hover:bg-teal-dark transition-colors"
        >
          WhatsApp Us
        </button>

        {/* Hamburger button - only visible on small screens */}
        <button
          className="md:hidden text-maroon text-3xl leading-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile dropdown menu - only rendered when isMenuOpen is true */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 pt-2 font-body text-charcoal bg-ivory">
          {navLinks.map((link) => (
            <li key={link.href}>
              {/* Closing the menu after a link is tapped gives a cleaner
                  mobile experience than leaving it open. */}
              <a href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-lg">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => openWhatsApp(whatsappMessages.general)}
              className="w-full bg-teal text-ivory font-semibold px-4 py-3 rounded-full mt-2"
            >
              WhatsApp Us
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
