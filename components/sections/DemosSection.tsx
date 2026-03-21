"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react";
import { fadeUp, staggerContainer, fadeIn, viewportConfig } from "@/lib/motion";
import { DEMOS } from "@/lib/constants";

export default function DemosSection() {
  const [activeDemo, setActiveDemo] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const containerVariants = prefersReducedMotion ? {} : staggerContainer;
  const itemVariants = prefersReducedMotion ? {} : fadeUp;
  const tabContent = prefersReducedMotion ? {} : fadeIn;

  const demo = DEMOS[activeDemo];

  return (
    <section
      className="py-24 bg-brand-surface border-y border-brand-border"
      aria-labelledby="demos-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col gap-4 mb-12"
        >
          <motion.p
            variants={itemVariants}
            className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest"
          >
            Before & after
          </motion.p>
          <motion.h2
            id="demos-heading"
            variants={itemVariants}
            className="font-display font-bold text-3xl sm:text-4xl text-brand-text tracking-tight"
          >
            Real systems. Real results.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-body text-brand-subtle leading-relaxed max-w-xl"
          >
            We don't describe what automation could do for you. We show you
            exactly what it did for businesses with the same problems you have
            right now.
          </motion.p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap gap-3 mb-10"
          role="tablist"
          aria-label="Demo examples"
        >
          {DEMOS.map((d, i) => (
            <button
              key={d.id}
              role="tab"
              aria-selected={activeDemo === i}
              aria-controls={`demo-panel-${d.id}`}
              onClick={() => setActiveDemo(i)}
              className={`font-body text-sm font-medium px-5 py-2.5 rounded-xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                activeDemo === i
                  ? "bg-brand-accent text-white border-brand-accent"
                  : "bg-transparent text-brand-subtle border-brand-border hover:border-brand-accent/40 hover:text-brand-text"
              }`}
            >
              {d.name}
            </button>
          ))}
        </motion.div>

        {/* Demo card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            variants={tabContent}
            initial="hidden"
            animate="visible"
            exit="hidden"
            id={`demo-panel-${demo.id}`}
            role="tabpanel"
            className="bg-brand-bg border border-brand-border rounded-2xl overflow-hidden"
          >
            {/* Hook */}
            <div className="px-8 py-6 border-b border-brand-border">
              <p className="font-body text-brand-subtle leading-relaxed italic">{`"${demo.hook}"`}</p>
            </div>

            {/* Before / After split */}
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand-border">
              {/* Before */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-5">
                  <TrendingDown
                    className="w-4 h-4 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="font-body text-xs font-medium text-red-400 uppercase tracking-widest">
                    Before
                  </span>
                </div>
                <ul className="flex flex-col gap-3 mb-5" role="list">
                  {demo.before.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-body text-xs text-brand-muted mt-0.5 shrink-0">
                        {i + 1}.
                      </span>
                      <span className="font-body text-sm text-brand-subtle leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs text-red-400/80 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2.5">
                  {demo.before.pain}
                </p>
              </div>

              {/* After */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-5">
                  <TrendingUp
                    className="w-4 h-4 text-brand-accent2"
                    aria-hidden="true"
                  />
                  <span className="font-body text-xs font-medium text-brand-accent2 uppercase tracking-widest">
                    After
                  </span>
                </div>
                <ul className="flex flex-col gap-3 mb-5" role="list">
                  {demo.after.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 bg-brand-accent2 rounded-full mt-2 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-body text-sm text-brand-subtle leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs text-brand-accent2 bg-brand-accent2/10 border border-brand-accent2/20 rounded-lg px-4 py-2.5">
                  {demo.after.result}
                </p>
              </div>
            </div>

            {/* Stats pills */}
            <div className="px-8 py-5 bg-brand-surface border-t border-brand-border flex flex-wrap gap-3">
              {demo.stats.map((stat) => (
                <span
                  key={stat}
                  className="font-body text-xs font-medium text-brand-text bg-brand-accent2/15 border border-brand-accent2/25 px-4 py-2 rounded-full"
                >
                  {stat}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
        >
          <p className="font-body text-sm text-brand-subtle">
            These are real systems we've built. Every number is real.
          </p>
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent shrink-0"
          >
            See all demos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
