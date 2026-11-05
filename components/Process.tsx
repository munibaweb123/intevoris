
"use client";

import { motion } from "motion/react";

import {
  Search,
  ClipboardList,
  Code2,
  ShieldCheck,
  Headset,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "We learn about your business, understand your challenges and identify opportunities for improvement.",
    detail: "Discover your needs",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Define",
    description:
      "We define the project scope, outline requirements and identify the right approach for your goals.",
    detail: "Plan the right solution",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description:
      "We develop practical automation, AI and digital solutions designed around your business needs.",
    detail: "Turn ideas into solutions",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Validate",
    description:
      "We review and test the solution to check functionality, reliability and alignment with requirements.",
    detail: "Test and improve",
  },
  {
    number: "05",
    icon: Headset,
    title: "Deliver & Support",
    description:
      "We deliver the solution and provide support to help you move forward with confidence.",
    detail: "Launch and support",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="container">

        {/* SECTION HEADING */}

        <motion.div
          className="section-heading process-heading"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="section-label"
            variants={itemVariants}
          >
            04 — HOW WE WORK
          </motion.span>

          <motion.h2
  className="process-tagline"
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
>
  A clear process.
  <br />
  Meaningful progress.
</motion.h2>

          <motion.p variants={itemVariants}>
            Every successful solution starts with understanding
            the problem. Our structured approach takes your
            ideas from initial discovery to delivery and support.
          </motion.p>
        </motion.div>

        {/* PROCESS STEPS */}

        <motion.div
          className="process-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                className="process-step"
                key={step.number}
                variants={itemVariants}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="process-step-top">
                  <span className="process-number">
                    {step.number}
                  </span>

                  <motion.div
                    className="process-icon"
                    whileHover={{
                      scale: 1.12,
                      rotate: 8,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={25} />
                  </motion.div>
                </div>

                <div className="process-step-content">
                  <span className="process-detail">
                    {step.detail}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

                {index !== processSteps.length - 1 && (
                  <motion.div
                    className="process-arrow"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3,
                    }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                )}
              </motion.article>
            );
          })}
        </motion.div>

        {/* BOTTOM CTA */}

        <motion.div
          className="process-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span>READY TO GET STARTED?</span>
            <h3>Let's turn your ideas into progress.</h3>
          </div>

          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a Conversation
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
