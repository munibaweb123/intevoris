
"use client";

import { motion } from "motion/react";
import { Target, Eye, ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="section-label"
            variants={itemVariants}
          >
            01 — WHO WE ARE
          </motion.span>

         <motion.h2
  className="about-tagline"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.6 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  Technology that fits the way you work.
</motion.h2>
        </motion.div>

        {/* About Content */}
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Company Introduction */}
          <motion.div
            className="about-intro"
            variants={itemVariants}
          >
            <span className="mini-line" />

            <h3>
              Intelligent solutions for practical progress.
            </h3>

            <p>
              We help businesses simplify operations,
              strengthen their digital presence and grow
              through intelligent automation.
            </p>

            <a href="#services" className="text-link">
              Discover what we do
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="purpose-card"
            variants={itemVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.25 },
            }}
          >
            <motion.div
              className="purpose-icon"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <Target size={26} />
            </motion.div>

            <span>OUR MISSION</span>

            <h3>
              Turn technology into measurable progress.
            </h3>

            <p>
              Practical AI, automation and digital solutions
              that reduce repetitive work, improve efficiency
              and create better customer experiences.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="purpose-card vision-card"
            variants={itemVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.25 },
            }}
          >
            <motion.div
              className="purpose-icon"
              whileHover={{ rotate: -10, scale: 1.1 }}
            >
              <Eye size={26} />
            </motion.div>

            <span>OUR VISION</span>

            <h3>
              A trusted partner for digital transformation.
            </h3>

            <p>
              A future where organizations of every size use
              intelligent, connected systems to adapt,
              compete and grow.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
