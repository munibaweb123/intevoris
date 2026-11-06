"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Workflow,
  Bot,
  ChartNoAxesCombined,
} from "lucide-react";

// --- NEW COMPONENT: Floating Paint Background ---
const FloatingWavesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 transform rotate-[-10deg] scale-110 origin-bottom-left">
      
      <svg className="absolute w-0 h-0">
        <defs>
          {/* Matches the bright cyan-to-blue gradient of the Intevoris logo */}
          <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />   {/* Light Blue */}
            <stop offset="25%" stopColor="#22d3ee" />  {/* Cyan */}
            <stop offset="50%" stopColor="#1e40af" />  {/* Deep Blue */}
            <stop offset="75%" stopColor="#22d3ee" />  {/* Cyan */}
            <stop offset="100%" stopColor="#0ea5e9" /> {/* Light Blue */}
          </linearGradient>
          
          {/* Matches the darker, structural blue of the logo */}
          <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* 
        RIBBON 1: The thick, dark blue underlying ribbon
        Simulates the back-fold of the logo.
      */}
      <motion.div
        className="absolute top-[25%] left-0 w-[200%] h-[50%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full opacity-60" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <path 
            d="M 0 300 Q 125 100 250 300 T 500 300 T 750 300 T 1000 300"
            fill="none"
            stroke="url(#logoGrad2)"
            strokeWidth="45"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* 
        RIBBON 2: The bright, glowing cyan foreground ribbon
        Simulates the bright top-fold of the logo, intersecting the dark ribbon.
      */}
      <motion.div
        className="absolute top-[25%] left-0 w-[200%] h-[50%]"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <path 
            d="M 0 300 Q 125 500 250 300 T 500 300 T 750 300 T 1000 300"
            fill="none"
            stroke="url(#logoGrad1)"
            strokeWidth="15"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* 
        RIBBON 3: A fast-moving, thin energy line 
        Matches the digital/tech aesthetic of the company profile cover.
      */}
      <motion.div
        className="absolute top-[25%] left-0 w-[200%] h-[50%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <path 
            d="M 0 300 Q 125 100 250 300 T 500 300 T 750 300 T 1000 300"
            fill="none"
            stroke="#e0f2fe"
            strokeWidth="3"
            strokeLinecap="round"
            className="opacity-70"
          />
        </svg>
      </motion.div>

    </div>
  );
};

// --- EXISTING HIGHLIGHTS & VARIANTS ---
const highlights = [
  {
    icon: Workflow,
    title: "Smart Automation",
    description: "Simplify repetitive work",
  },
  {
    icon: Bot,
    title: "AI Assistants",
    description: "Make interactions smarter",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Business Intelligence",
    description: "Turn data into clarity",
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

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Replaced static glows with the animated paint background */}
      <FloatingWavesBackground/>

      {/* Added relative and z-10 to ensure content stays above the background */}
      <div className="container hero-container relative z-10">
        
        {/* LEFT SIDE */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="eyebrow block mb-4" variants={itemVariants}>
            <span className="status-dot inline-block w-2 h-2 rounded-full bg-teal-400 mr-2" />
            INTELLIGENT DIGITAL SOLUTIONS
          </motion.span>

          
          <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-6">
  <motion.span className="hero-title-line">
    Simplify Work.
  </motion.span>

  <motion.span className="hero-title-line hero-title-gradient">
    Amplify Growth.
  </motion.span>
</motion.h1>

          <motion.p className="hero-description mb-8 text-lg opacity-80" variants={itemVariants}>
            Technology that fits the way you work. We help businesses simplify operations,
            strengthen their digital presence and grow through intelligent automation.
          </motion.p>

          {/* BUTTONS */}
          <motion.div className="hero-actions flex gap-4" variants={itemVariants}>
            <motion.a
              href="#services"
              className="btn btn-primary flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-md"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Services <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              className="btn btn-outline flex items-center gap-2 border border-white px-6 py-3 rounded-md"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Talk <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>

          <motion.div className="hero-note mt-6 text-sm opacity-60" variants={itemVariants}>
            Practical technology. Meaningful progress.
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: TECHNOLOGY VISUAL */}
        <motion.div
          className="hero-visual relative"
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          {/* Floating Core */}
          <motion.div
            className="visual-core relative bg-slate-900/50 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="core-icon mx-auto flex justify-center mb-4 text-teal-400">
              <Workflow size={44} />
            </div>
            <span className="block text-xs opacity-70">INTELLIGENT</span>
            <strong className="block text-xl">WORKFLOWS</strong>
            <small className="block opacity-60">Connected. Simplified. Smarter.</small>
          </motion.div>

          {/* FLOATING CARDS */}
          <div className="absolute inset-0 pointer-events-none">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`floating-card floating-card-${index + 1} absolute pointer-events-auto`}
                  style={{
                    // Approximate positioning based on index to scatter them around the core
                    top: `${index * 30}%`,
                    left: index % 2 === 0 ? '-10%' : '70%'
                  }}
                >
                  <motion.div
                    className="floating-card-inner bg-slate-800/80 backdrop-blur-sm p-4 rounded-lg border border-white/10 flex items-center gap-4 shadow-lg"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.9 + index * 0.2,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.06, y: -5 }}
                  >
                    <div className="floating-icon text-teal-400">
                      <Icon size={21} />
                    </div>
                    <div>
                      <strong className="block text-sm">{item.title}</strong>
                      <small className="opacity-70 text-xs">{item.description}</small>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM LABEL */}
      <motion.div
        className="hero-bottom container absolute bottom-8 left-0 right-0 flex justify-between text-xs opacity-50 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>01 / INTRODUCTION</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </motion.div>
    </section>
  );
}