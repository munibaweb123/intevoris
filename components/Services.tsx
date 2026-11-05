
"use client";

import { motion } from "motion/react";

import {
  Workflow,
  Bot,
  FileText,
  BarChart3,
  Database,
  ChartNoAxesCombined,
  Globe,
  ShoppingCart,
  MonitorSmartphone,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Workflow,
    title: "Automation",
    description:
      "Simplify repetitive business operations with intelligent automation and connected workflows.",
    features: [
      {
        icon: Workflow,
        title: "Business Workflow Automation",
        description:
          "Connect everyday business tasks and streamline repetitive processes.",
      },
      {
        icon: Bot,
        title: "Robotic Process Automation",
        description:
          "Use software robots to handle repetitive, rule-based activities.",
      },
      {
        icon: FileText,
        title: "Document Processing",
        description:
          "Automate document handling and information extraction.",
      },
    ],
  },
  {
    number: "02",
    icon: ChartNoAxesCombined,
    title: "Data & Business Intelligence",
    description:
      "Turn business information into organized reports and meaningful insights.",
    features: [
      {
        icon: BarChart3,
        title: "Dashboards & Reporting",
        description:
          "Present important business information through clear dashboards and reports.",
      },
      {
        icon: Database,
        title: "Data Management",
        description:
          "Organize business data to make information easier to access and understand.",
      },
      {
        icon: ChartNoAxesCombined,
        title: "Reconciliation & Validation",
        description:
          "Compare and validate information to support accurate business records.",
      },
    ],
  },
  {
    number: "03",
    icon: MonitorSmartphone,
    title: "Digital Experiences",
    description:
      "Build useful digital experiences that strengthen your online presence and customer interactions.",
    features: [
      {
        icon: Globe,
        title: "Company Websites",
        description:
          "Create professional websites that communicate your brand and services.",
      },
      {
        icon: ShoppingCart,
        title: "E-commerce Stores",
        description:
          "Build online shopping experiences for products and services.",
      },
      {
        icon: Bot,
        title: "AI Assistants",
        description:
          "Create intelligent assistants to support customer interactions.",
      },
    ],
  },
];

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
    y: 40,
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

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">

        {/* SECTION HEADING */}

        <motion.div
          className="section-heading services-heading"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="section-label"
            variants={itemVariants}
          >
            02 — WHAT WE DO
          </motion.span>

          <motion.h2
  className="services-tagline"
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 0.9,
    ease: "easeOut",
  }}
>
  Technology designed around your business.
</motion.h2>

          <motion.p variants={itemVariants}>
            From intelligent automation to digital experiences,
            we help businesses simplify operations and make
            technology work for them.
          </motion.p>
        </motion.div>

        {/* SERVICE CARDS */}

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => {
            const MainIcon = service.icon;

            return (
              <motion.article
                className="service-card"
                key={service.number}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="service-card-header">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <motion.div
                    className="service-main-icon"
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                  >
                    <MainIcon size={28} />
                  </motion.div>
                </div>

                <h3>{service.title}</h3>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-divider" />

                {/* INDIVIDUAL SERVICES */}

                <div className="service-features">
                  {service.features.map((feature, index) => {
                    const FeatureIcon = feature.icon;

                    return (
                      <motion.div
                        className="service-feature"
                        key={feature.title}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.12,
                        }}
                      >
                        <div className="feature-icon">
                          <FeatureIcon size={19} />
                        </div>

                        <div>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <a href="#contact" className="service-link">
                  Discuss this service
                  <ArrowUpRight size={17} />
                </a>
              </motion.article>
            );
          })}
        </motion.div>

        {/* BOTTOM CTA */}

        <motion.div
          className="services-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Not sure which solution fits your business?
          </p>

          <a href="#contact" className="text-link">
            Let's discuss your needs
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
