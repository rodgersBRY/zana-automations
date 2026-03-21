"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "10 min", label: "avg approval time" },
  { value: "40 hrs", label: "saved per team monthly" },
  { value: "0", label: "manual steps left in the loop" },
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
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-accent2/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl" />
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

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            variants={variants}
            className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-brand-text tracking-tight leading-[1.08] max-w-4xl text-balance"
          >
            Stop losing hours to work{" "}
            <span className="text-brand-accent">a system can do</span> in
            seconds.
          </motion.h1>

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
            >
              Book a free call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/our-work"
              className="inline-flex items-center justify-center gap-2 border border-brand-border hover:border-brand-accent/50 text-brand-text font-body font-medium px-7 py-4 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
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

        {/* Stats row */}
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
              <span className="font-display font-bold text-3xl text-brand-accent2">
                {stat.value}
              </span>
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
