
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  ArrowRight,
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    // Frontend demonstration only.
    // Backend/email integration will be added later.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">

        {/* LEFT SIDE - CONTACT INTRODUCTION */}

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            05 — LET'S CONNECT
          </motion.span>

          <motion.h2
  className="contact-tagline"
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
>
  Simplify Work.
  <br />
  Amplify Growth.
</motion.h2>

          <p>
            A practical conversation starts with one business
            challenge. Tell us what you want to improve, and
            let's explore a suitable solution.
          </p>

          <motion.div
            className="contact-detail"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="contact-detail-icon"
              whileHover={{ scale: 1.1, rotate: 8 }}
            >
              <Mail size={21} />
            </motion.div>

            <div>
              <strong>Start a conversation</strong>
              <span>
                Share your business enquiry through our form.
              </span>
            </div>
          </motion.div>

          <motion.div
            className="contact-detail"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <motion.div
              className="contact-detail-icon"
              whileHover={{ scale: 1.1, rotate: -8 }}
            >
              <MessageSquare size={21} />
            </motion.div>

            <div>
              <strong>Tell us your challenge</strong>
              <span>
                Describe the process or problem you want to improve.
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - ENQUIRY FORM */}

        <motion.div
          className="contact-form-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <h3>Send us an enquiry</h3>

          <p>
            Let's start with a little information about your needs.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="form-notice"
                role="status"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <CheckCircle size={30} />
                </motion.div>

                <strong>Form interface tested!</strong>

                <span>
                  This is currently a frontend demonstration.
                  Your enquiry has not been emailed or stored.
                  Backend integration will be added later.
                </span>

                <button
                  type="button"
                  className="text-link"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another enquiry
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >

                <div className="form-row">
                  <label>
                    Your name

                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label>
                    Email address

                    <input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <label>
                  What service are you interested in?

                  <select
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Automation">
                      Automation
                    </option>

                    <option value="Data and Business Intelligence">
                      Data & Business Intelligence
                    </option>

                    <option value="Digital Experiences">
                      Digital Experiences
                    </option>

                    <option value="Other">
                      Other enquiry
                    </option>
                  </select>
                </label>

                <label>
                  Tell us about your business challenge

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="How can we help your business?"
                    required
                  />
                </label>

                <motion.button
                  type="submit"
                  className="btn btn-primary form-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Enquiry
                  <Send size={18} />
                </motion.button>

              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
