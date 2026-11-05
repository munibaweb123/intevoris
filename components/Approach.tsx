
"use client";

import { motion } from "motion/react";
import {
  Search,
  Lightbulb,
  Code2,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand Your Workflow",
    description:
      "We listen to your team, map your current process and identify repetitive tasks, delays and opportunities for improvement.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design a Practical Solution",
    description:
      "We define the requirements, recommend suitable tools and agree on clear outcomes—with human review wherever it matters.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Build and Validate",
    description:
      "We develop a focused prototype, test it against real business scenarios and refine it through your feedback.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch and Improve",
    description:
      "We support implementation, document the workflow and review results to identify further improvements.",
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Approach() {
  return (
    <section id="approach" className="approach-section">
      <div className="approach-container">

        <motion.div
          className="approach-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="approach-eyebrow">OUR APPROACH</span>

          <motion.h2
  className="approach-tagline"
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
>
  Understand Your Business.
  <br />
  <span className="approach-title-gradient">
    Build What Matters.
  </span>
</motion.h2>

          <p className="approach-intro">
            We start with your challenges and create practical AI and
            automation solutions that help your team work more effectively.
          </p>
        </motion.div>

        <motion.div
          className="approach-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                className="approach-card"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="approach-card-top">
                  <span className="approach-number">{step.number}</span>

                  <div className="approach-icon">
                    <Icon size={25} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="approach-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Have a process you want to simplify?</h3>

          <p>Let’s explore what better could look like.</p>

          <a href="#contact" className="approach-button">
            Click Here to Connect
            <ArrowUpRight size={19} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
