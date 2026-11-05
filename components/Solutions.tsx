
"use client";

import { motion } from "motion/react";

import {
  Bot,
  Workflow,
  BarChart3,
  FileSearch,
  ArrowUpRight,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: Workflow,
    category: "BUSINESS AUTOMATION",
    title: "Enquiry Management Workflow",
    description:
      "An example workflow that captures customer enquiries, organizes requests and helps teams manage follow-ups.",
    steps: ["Capture", "Assign", "Follow up"],
  },
  {
    number: "02",
    icon: BarChart3,
    category: "DATA & INTELLIGENCE",
    title: "Business Reporting Dashboard",
    description:
      "An illustrative dashboard concept that brings business information together for clearer reporting and decisions.",
    steps: ["Collect", "Organize", "Report"],
  },
  {
    number: "03",
    icon: Bot,
    category: "AI ASSISTANTS",
    title: "Customer Support Assistant",
    description:
      "A sample AI assistant concept designed to understand customer questions and provide helpful responses.",
    steps: ["Ask", "Understand", "Respond"],
  },
  {
    number: "04",
    icon: FileSearch,
    category: "DOCUMENT PROCESSING",
    title: "Invoice Data Extraction",
    description:
      "A demonstration of how document processing can extract invoice details and prepare them for validation.",
    steps: ["Read", "Extract", "Validate"],
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

export default function Solutions() {
  return (
    <section id="solutions" className="section demos-section">
      <div className="container">

        {/* SECTION HEADING */}

        <motion.div
          className="section-heading demos-heading"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="section-label"
            variants={itemVariants}
          >
            03 — EXAMPLE SOLUTIONS
          </motion.span>

          <motion.h2
  className="solutions-tagline"
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
>
  Ideas transformed
  <br />
  into intelligent solutions.
</motion.h2>

          <motion.p variants={itemVariants}>
            Explore illustrative examples of how automation,
            AI and digital technology can help simplify
            everyday business operations.
          </motion.p>
        </motion.div>

        {/* SOLUTION CARDS */}

        <motion.div
          className="demos-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <motion.article
                className="demo-card"
                key={solution.number}
                variants={itemVariants}
                whileHover={{
                  y: -9,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="demo-card-top">
                  <span className="demo-number">
                    {solution.number}
                  </span>

                  <span className="demo-badge">
                    <FlaskConical size={13} />
                    DEMONSTRATION
                  </span>
                </div>

                <motion.div
                  className="demo-icon"
                  whileHover={{
                    scale: 1.12,
                    rotate: 8,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={27} />
                </motion.div>

                <span className="demo-category">
                  {solution.category}
                </span>

                <h3>{solution.title}</h3>

                <p>{solution.description}</p>

                {/* SOLUTION WORKFLOW */}

                <div className="demo-steps">
                  {solution.steps.map((step, index) => (
                    <motion.span
                      key={step}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.1,
                      }}
                    >
                      <CheckCircle2 size={14} />
                      {step}
                    </motion.span>
                  ))}
                </div>

                <a href="#contact" className="demo-link">
                  Discuss a similar solution
                  <ArrowUpRight size={17} />
                </a>
              </motion.article>
            );
          })}
        </motion.div>

        {/* DISCLAIMER */}

        <motion.p
          className="demo-disclaimer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <FlaskConical size={15} />
          These are illustrative demonstrations, not
          representations of completed client projects.
        </motion.p>

      </div>
    </section>
  );
}
