
"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const footerLinks = {
  explore: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Our Process", href: "#process" },
  ],

  services: [
    { label: "Automation", href: "#services" },
    { label: "Data & Business Intelligence", href: "#services" },
    { label: "Digital Experiences", href: "#services" },
    { label: "AI Solutions", href: "#solutions" },
  ],
};

const columnVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* FOOTER MAIN */}

        <motion.div
          className="footer-main"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >

          {/* COMPANY BRAND */}

          <motion.div
            className="footer-brand"
            variants={columnVariants}
          >
            <a href="#home" className="brand footer-logo">
              <img
                src="/images/logo.gif"
                alt="Intevoris AI Solutions"
                className="footer-brand-logo"
              />
            </a>

            <p>
              Technology that fits the way you work.
              Simplifying operations and supporting
              business growth through intelligent
              digital solutions.
            </p>

            <a href="#contact" className="footer-contact-link">
              Let's work together
              <ArrowUpRight size={17} />
            </a>

            {/* SOCIAL MEDIA ICONS */}

            <div className="footer-socials">
              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebookF />
              </motion.a>
            </div>
          </motion.div>

          {/* EXPLORE LINKS */}

          <motion.div
            className="footer-column"
            variants={columnVariants}
          >
            <h4>Explore</h4>

            {footerLinks.explore.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* SERVICES LINKS */}

          <motion.div
            className="footer-column"
            variants={columnVariants}
          >
            <h4>Our Services</h4>

            {footerLinks.services.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* CONTACT */}

          <motion.div
            className="footer-column footer-connect"
            variants={columnVariants}
          >
            <h4>Get in Touch</h4>

            <p>
              Have a business challenge?
              Let's explore how technology can help.
            </p>

            <motion.a
              href="#contact"
              className="footer-cta"
              whileHover={{ x: 5 }}
            >
              Contact Us
              <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>

        </motion.div>

        {/* FOOTER BOTTOM */}

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            © 2026 Intevoris AI Solutions.
            All rights reserved.
          </p>

          <span className="footer-tagline">
            Simplify Work. Amplify Growth.
          </span>

          <motion.a
            href="#home"
            className="back-to-top"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top
            <ArrowUp size={15} />
          </motion.a>
        </motion.div>

      </div>
    </footer>
  );
}
