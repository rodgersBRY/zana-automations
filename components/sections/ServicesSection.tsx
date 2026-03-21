"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Workflow, Brain, Database, Target, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/motion";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Workflow,
  Brain,
  Database,
  Target,
};

export default function ServicesSection() {
  const prefersReducedMotion = useReducedMotion();
  const containerVariants = prefersReducedMotion ? {} : staggerContainer;
  const itemVariants = prefersReducedMotion ? {} : fadeUp;

  return (
    <section className="py-24 bg-brand-bg" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-start gap-4 mb-14"
        >
          <motion.p
            variants={itemVariants}
            className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest"
          >
            Our services
          </motion.p>
          <motion.h2
            id="services-heading"
            variants={itemVariants}
            className="font-display font-bold text-3xl sm:text-4xl text-brand-text tracking-tight max-w-2xl"
          >
            Four ways we eliminate your manual work
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-body text-brand-subtle leading-relaxed max-w-xl"
          >
            Every engagement starts with understanding how your business
            actually runs. Then we build the systems that handle the repetitive
            parts — permanently.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                className="group bg-brand-surface border border-brand-border hover:border-brand-accent/40 rounded-2xl p-8 transition-all duration-300 hover:bg-brand-surface/80"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 bg-brand-accent/15 border border-brand-accent/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent/25 transition-colors duration-300">
                    {Icon && <Icon className="w-5 h-5 text-brand-accent" />}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-brand-text tracking-tight">
                      {service.name}
                    </h3>
                    <p className="font-body text-sm text-brand-accent2 mt-0.5">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <p className="font-body text-sm text-brand-subtle leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="flex flex-col gap-2 mb-6" role="list">
                  {service.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2">
                      <span
                        className="w-1 h-1 bg-brand-accent2 rounded-full shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-body text-xs text-brand-subtle">
                        {example}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 font-body text-sm text-brand-accent hover:text-brand-accent/80 transition-colors duration-200 group-hover:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 transition-all duration-200" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-brand-border hover:border-brand-accent/50 text-brand-text font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
