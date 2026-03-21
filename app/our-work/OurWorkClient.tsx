'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ArrowRight, TrendingDown, TrendingUp } from 'lucide-react'
import { fadeUp, staggerContainer, fadeIn, viewportConfig } from '@/lib/motion'
import { DEMOS } from '@/lib/constants'

export default function OurWorkClient() {
  const [activeDemo, setActiveDemo] = useState(0)
  const prefersReducedMotion = useReducedMotion()
  const containerVariants   = prefersReducedMotion ? {} : staggerContainer
  const itemVariants        = prefersReducedMotion ? {} : fadeUp
  const tabContent          = prefersReducedMotion ? {} : fadeIn

  const demo = DEMOS[activeDemo]

  return (
    <div className="pt-24 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 mb-16"
        >
          <motion.p variants={itemVariants} className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest">
            Our work
          </motion.p>
          <motion.h1 variants={itemVariants} className="font-display font-extrabold text-5xl sm:text-6xl text-brand-text tracking-tight max-w-3xl">
            Automation case studies — Kenya
          </motion.h1>
          <motion.p variants={itemVariants} className="font-body text-lg text-brand-subtle leading-relaxed max-w-xl">
            Every demo below is a real system we built. Every number is real. No mockups, no hypotheticals.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap gap-3 mb-10"
          role="tablist"
        >
          {DEMOS.map((d, i) => (
            <button
              key={d.id}
              role="tab"
              aria-selected={activeDemo === i}
              aria-controls={`panel-${d.id}`}
              onClick={() => setActiveDemo(i)}
              className={`font-body text-sm font-medium px-5 py-2.5 rounded-xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                activeDemo === i
                  ? 'bg-brand-accent text-white border-brand-accent'
                  : 'bg-transparent text-brand-subtle border-brand-border hover:border-brand-accent/40 hover:text-brand-text'
              }`}
            >
              {d.name}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            variants={tabContent}
            initial="hidden"
            animate="visible"
            exit="hidden"
            id={`panel-${demo.id}`}
            role="tabpanel"
            className="bg-brand-surface border border-brand-border rounded-2xl overflow-hidden"
          >
            <div className="px-8 py-6 border-b border-brand-border">
              <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-2">{demo.name}</h2>
              <p className="font-body text-brand-subtle italic">{`"${demo.hook}"`}</p>
            </div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand-border">
              <div className="p-8">
                <div className="flex items-center gap-2 mb-5">
                  <TrendingDown className="w-4 h-4 text-red-400" aria-hidden="true" />
                  <span className="font-body text-xs font-medium text-red-400 uppercase tracking-widest">Before</span>
                </div>
                <ul className="flex flex-col gap-3 mb-5" role="list">
                  {demo.before.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-body text-xs text-brand-muted mt-0.5 shrink-0">{i + 1}.</span>
                      <span className="font-body text-sm text-brand-subtle leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs text-red-400/80 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2.5">
                  {demo.before.pain}
                </p>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-5">
                  <TrendingUp className="w-4 h-4 text-brand-accent2" aria-hidden="true" />
                  <span className="font-body text-xs font-medium text-brand-accent2 uppercase tracking-widest">After</span>
                </div>
                <ul className="flex flex-col gap-3 mb-5" role="list">
                  {demo.after.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-accent2 rounded-full mt-2 shrink-0" aria-hidden="true" />
                      <span className="font-body text-sm text-brand-subtle leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs text-brand-accent2 bg-brand-accent2/10 border border-brand-accent2/20 rounded-lg px-4 py-2.5">
                  {demo.after.result}
                </p>
              </div>
            </div>

            <div className="px-8 py-5 bg-brand-bg border-t border-brand-border flex flex-wrap gap-3">
              {demo.stats.map((stat) => (
                <span key={stat} className="font-body text-xs font-medium text-brand-text bg-brand-accent2/15 border border-brand-accent2/25 px-4 py-2 rounded-full">
                  {stat}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA strip */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between bg-brand-surface border border-brand-border rounded-2xl p-8"
        >
          <div>
            <h2 className="font-display font-bold text-xl text-brand-text tracking-tight mb-2">
              Want to see a system like this for your business?
            </h2>
            <p className="font-body text-sm text-brand-subtle">
              Book a free 30-minute call. We&apos;ll walk through your manual processes and show you what
              automation would look like — with real numbers.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            Book a free call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
