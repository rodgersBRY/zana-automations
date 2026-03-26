"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import AnimatedHeading from "@/components/motion/AnimatedHeading";
import CountUp from "@/components/motion/CountUp";
import { track } from "@/lib/umami";

const stats = [
  { num: 10, suffix: " min", label: "avg approval time" },
  { num: 40, suffix: " hrs", label: "saved per team monthly" },
  { num: 0, suffix: "", label: "manual steps left in the loop" },
];

const toolLogos = [
  "n8n",
  "Python",
  "OpenAI",
  "Claude API",
  "WhatsApp API",
  "Airtable",
];

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? {} : fadeUp;
  const containerVariants = prefersReducedMotion ? {} : staggerContainer;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden hero-glow"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient orbs — CSS animations run on compositor thread */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            width: 384, height: 384, top: "25%", left: "25%",
            background: "#6C63FF", filter: "blur(120px)", opacity: 0.15,
            animation: "orb-drift-1 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 320, height: 320, top: "55%", left: "65%",
            background: "#00E5A0", filter: "blur(120px)", opacity: 0.12,
            animation: "orb-drift-2 10s ease-in-out 2s infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 480, height: 480, top: "40%", left: "45%",
            background: "#3A3A4A", filter: "blur(120px)", opacity: 0.18,
            animation: "orb-drift-3 6s ease-in-out 4s infinite",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Label */}
          <motion.div variants={variants}>
            <span className="inline-flex items-center gap-2 font-body text-xs font-medium text-brand-accent uppercase tracking-widest border border-brand-accent/30 bg-brand-accent/10 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-brand-accent2 rounded-full animate-pulse" />
              Nairobi-based · Serving East Africa
            </span>
          </motion.div>

          {/* Headline — word reveal */}
          <motion.div variants={variants}>
            <AnimatedHeading
              as="h1"
              id="hero-heading"
              animate="onMount"
              className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-brand-text tracking-tight leading-[1.08] max-w-4xl text-balance"
            >
              Stop losing hours to work{" "}
              <span className="text-brand-accent">a system can do</span> in
              seconds.
            </AnimatedHeading>
          </motion.div>

          {/* Subline */}
          <motion.p
            variants={variants}
            className="font-body text-lg sm:text-xl text-brand-subtle leading-relaxed max-w-2xl text-balance"
          >
            We build custom automation systems for Kenyan SMBs and startups — so
            your team stops doing manually what should run on autopilot. n8n,
            Python, and AI, all configured for how your business actually works.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={variants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium px-7 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
              onClick={() => track.ctaClick('Book a free call', 'hero')}
            >
              Book a free call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/our-work"
              className="inline-flex items-center justify-center gap-2 border border-brand-border hover:border-brand-accent/50 text-brand-text font-body font-medium px-7 py-4 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
              onClick={() => track.ctaClick('See our demos', 'hero')}
            >
              <Play className="w-4 h-4" />
              See our demos
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.p
            variants={variants}
            className="font-body text-xs text-brand-subtle"
          >
            Free 30-minute discovery call · No commitment · We reply within 24
            hours
          </motion.p>
        </motion.div>

        {/* Stats row — CountUp */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 w-full grid grid-cols-1 sm:grid-cols-3 gap-px bg-brand-border rounded-2xl overflow-hidden border border-brand-border"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={variants}
              className="bg-brand-surface flex flex-col items-center py-6 px-4"
            >
              <CountUp
                to={stat.num}
                suffix={stat.suffix}
                duration={1.2}
                className="font-display font-bold text-3xl text-brand-accent2"
              />
              <span className="font-body text-sm text-brand-subtle mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tool logos strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-col items-center gap-4"
        >
          <p className="font-body text-xs text-brand-subtle uppercase tracking-widest">
            Built with the tools your business needs
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {toolLogos.map((tool) => (
              <span
                key={tool}
                className="font-body text-xs font-medium text-brand-subtle bg-brand-surface border border-brand-border px-3 py-1.5 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
