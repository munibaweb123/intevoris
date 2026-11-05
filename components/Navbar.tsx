
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* Company Logo */}
        <a href="#home" className="brand">
          <img
            src="/images/logo.png"
            alt="Intevoris AI Solutions"
            className="brand-logo"
          />
        </a>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </nav>

        {/* Mobile Menu */}
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}
