
import {
  Bot,
  Workflow,
  BarChart3,
  FileSearch,
  ArrowUpRight,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

const demonstrations = [
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

export default function DemoSolutions() {
  return (
    <section id="solutions" className="section demos-section">
      <div className="container">

        {/* SECTION HEADING */}

        <div className="section-heading demos-heading">
          <span className="section-label">
            03 — EXAMPLE SOLUTIONS
          </span>

          <h2>
            Ideas transformed
            <br />
            <span>into intelligent solutions.</span>
          </h2>

          <p>
            Explore illustrative examples of how automation,
            AI and digital technology can help simplify
            everyday business operations.
          </p>
        </div>

        {/* DEMONSTRATION CARDS */}

        <div className="demos-grid">
          {demonstrations.map((demo) => {
            const Icon = demo.icon;

            return (
              <article
                className="demo-card"
                key={demo.number}
              >
                <div className="demo-card-top">
                  <span className="demo-number">
                    {demo.number}
                  </span>

                  <span className="demo-badge">
                    <FlaskConical size={13} />
                    DEMONSTRATION
                  </span>
                </div>

                <div className="demo-icon">
                  <Icon size={27} />
                </div>

                <span className="demo-category">
                  {demo.category}
                </span>

                <h3>{demo.title}</h3>

                <p>{demo.description}</p>

                <div className="demo-steps">
                  {demo.steps.map((step) => (
                    <span key={step}>
                      <CheckCircle2 size={14} />
                      {step}
                    </span>
                  ))}
                </div>

                <a href="#contact" className="demo-link">
                  Discuss a similar solution
                  <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>

        {/* DISCLAIMER */}

        <p className="demo-disclaimer">
          <FlaskConical size={15} />
          These are illustrative demonstrations, not
          representations of completed client projects.
        </p>

      </div>
    </section>
  );
}
