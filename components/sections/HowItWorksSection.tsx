"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, Wrench, GraduationCap } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/motion";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Search,
  Wrench,
  GraduationCap,
};

export default function HowItWorksSection() {
  const prefersReducedMotion = useReducedMotion();
  const containerVariants = prefersReducedMotion ? {} : staggerContainer;
  const itemVariants = prefersReducedMotion ? {} : fadeUp;

  return (
    <section
      className="py-24 bg-brand-bg"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col gap-4 mb-16 text-center"
        >
          <motion.p
            variants={itemVariants}
            className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest"
          >
            How it works
          </motion.p>
          <motion.h2
            id="how-it-works-heading"
            variants={itemVariants}
            className="font-display font-bold text-3xl sm:text-4xl text-brand-text tracking-tight"
          >
            From first call to working system — in weeks, not months
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-body text-brand-subtle leading-relaxed max-w-xl mx-auto"
          >
            We've built a process that's deliberately short and low-friction. No
            6-month projects. No consultancy theatre. Just systems that work.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-brand-border"
            aria-hidden="true"
          />

          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-brand-surface border border-brand-border rounded-2xl flex items-center justify-center mx-auto">
                    {Icon && <Icon className="w-8 h-8 text-brand-accent" />}
                  </div>
                  <span className="absolute -top-3 -right-3 w-7 h-7 bg-brand-accent text-white font-display font-bold text-xs flex items-center justify-center rounded-full">
                    {index + 1}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-xl text-brand-text tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-brand-subtle leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline callout */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 bg-brand-surface border border-brand-border rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between"
        >
          <div>
            <p className="font-display font-semibold text-lg text-brand-text tracking-tight mb-1">
              Typical timeline: 2–4 weeks to go live.
            </p>
            <p className="font-body text-sm text-brand-subtle">
              From the first discovery call to a running, tested automation. No
              long retainers required to start.
            </p>
          </div>
          <div className="flex gap-8 shrink-0">
            <div className="text-center">
              <span className="font-display font-bold text-2xl text-brand-accent2">
                Week 1
              </span>
              <p className="font-body text-xs text-brand-subtle mt-1">
                Audit & design
              </p>
            </div>
            <div className="text-center">
              <span className="font-display font-bold text-2xl text-brand-accent2">
                Week 2–3
              </span>
              <p className="font-body text-xs text-brand-subtle mt-1">
                Build & test
              </p>
            </div>
            <div className="text-center">
              <span className="font-display font-bold text-2xl text-brand-accent2">
                Week 4
              </span>
              <p className="font-body text-xs text-brand-subtle mt-1">
                Launch & train
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
