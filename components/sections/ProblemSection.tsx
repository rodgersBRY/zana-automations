'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { AlertCircle, ArrowRight } from 'lucide-react'
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportConfig } from '@/lib/motion'

const painPoints = [
  'Approvals stuck in WhatsApp threads for days',
  'Your team manually copies data between spreadsheets',
  "Leads go cold because follow-ups happen \"when someone remembers\"",
  "You're building reports by hand every Monday morning",
  'Every new client means 2 hours of admin setup',
  "You're paying staff to do work software should be doing",
]

export default function ProblemSection() {
  const prefersReducedMotion = useReducedMotion()
  const containerVariants = prefersReducedMotion ? {} : staggerContainer
  const itemVariants     = prefersReducedMotion ? {} : fadeUp
  const leftVariants     = prefersReducedMotion ? {} : slideLeft
  const rightVariants    = prefersReducedMotion ? {} : slideRight

  return (
    <section
      className="py-24 bg-brand-surface border-y border-brand-border"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest mb-4"
        >
          The problem
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: pain points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.h2
              id="problem-heading"
              variants={leftVariants}
              className="font-display font-bold text-3xl sm:text-4xl text-brand-text tracking-tight mb-4"
            >
              Sound familiar?
            </motion.h2>
            <motion.p
              variants={leftVariants}
              className="font-body text-brand-subtle leading-relaxed mb-8"
            >
              Most Kenyan businesses are running on manual work that should have been automated years ago.
              The cost isn't just time — it's the deals you're losing, the errors compounding, and the growth
              you're leaving on the table.
            </motion.p>

            <ul className="flex flex-col gap-3" role="list">
              {painPoints.map((point) => (
                <motion.li
                  key={point}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <AlertCircle className="w-4 h-4 text-red-400/70 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="font-body text-sm text-brand-subtle leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: solution tease */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-6"
          >
            <div className="bg-brand-bg border border-brand-border rounded-2xl p-8">
              <h3 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-4">
                Your business is losing hours every week to work that should be automated.
              </h3>
              <p className="font-body text-brand-subtle leading-relaxed mb-6">
                We've seen it in logistics companies, coaching businesses, retail operations, and SaaS startups
                across Nairobi. The fix is almost never "hire more people." It's building the right system.
              </p>
              <p className="font-body text-brand-subtle leading-relaxed mb-8">
                One well-built automation workflow can reclaim 20–40 hours a month for a 5-person team —
                without adding headcount, without disrupting how you work, and without a 6-month implementation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  See what we fix
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 border border-brand-border hover:border-brand-accent/50 text-brand-text font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  See real examples
                </Link>
              </div>
            </div>

            {/* Quick stat callout */}
            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-2xl p-6">
              <p className="font-body text-sm text-brand-accent font-medium mb-1">Real client result</p>
              <p className="font-display font-bold text-2xl text-brand-text tracking-tight mb-2">
                3-day approvals → 8 minutes
              </p>
              <p className="font-body text-sm text-brand-subtle">
                A Nairobi logistics firm replaced a WhatsApp-based approval chain with an automated
                workflow. 97% faster. Zero follow-up messages.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
