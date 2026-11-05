
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Approach", href: "#approach" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* Company Logo */}
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
          aria-label="Intevoris AI Solutions - Home"
        >
          <img
            src="/images/logo.png"
            alt="Intevoris AI Solutions"
            className="brand-logo"
          />
        </a>

        {/* Desktop and Mobile Navigation */}
        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}
