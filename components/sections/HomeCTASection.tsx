"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock, Phone, MessageSquare } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/motion";

const trustSignals = [
  {
    icon: Phone,
    label: "Free 30-min discovery call",
    sub: "No commitment, no sales pressure",
  },
  {
    icon: Clock,
    label: "Reply within 24 hours",
    sub: "Often same day during business hours",
  },
  {
    icon: MessageSquare,
    label: "Plain language, no jargon",
    sub: "We explain exactly what we build and why",
  },
];

export default function HomeCTASection() {
  const prefersReducedMotion = useReducedMotion();
  const containerVariants = prefersReducedMotion ? {} : staggerContainer;
  const itemVariants = prefersReducedMotion ? {} : fadeUp;

  return (
    <section
      className="py-24 bg-brand-surface border-t border-brand-border"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center text-center gap-6 mb-14"
        >
          <motion.p
            variants={itemVariants}
            className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest"
          >
            Get started
          </motion.p>
          <motion.h2
            id="cta-heading"
            variants={itemVariants}
            className="font-display font-extrabold text-4xl sm:text-5xl text-brand-text tracking-tight max-w-3xl text-balance"
          >
            Ready to stop doing manually what a system can do in seconds?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-body text-brand-subtle leading-relaxed max-w-xl text-balance"
          >
            Book a free 30-minute call. We'll map your biggest time sinks and
            show you exactly what automation would look like for your business —
            no jargon, no pressure.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
            >
              Book a free call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-brand-border hover:border-brand-accent/50 text-brand-text font-body font-medium px-8 py-4 rounded-xl transition-all duration-200 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
            >
              View pricing
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-3 gap-6"
        >
          {trustSignals.map(({ icon: Icon, label, sub }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="bg-brand-bg border border-brand-border rounded-2xl p-6 flex flex-col items-center text-center gap-3"
            >
              <div className="w-10 h-10 bg-brand-accent/15 border border-brand-accent/20 rounded-xl flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <p className="font-display font-semibold text-brand-text tracking-tight">
                  {label}
                </p>
                <p className="font-body text-sm text-brand-subtle mt-1">
                  {sub}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
