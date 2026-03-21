'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, fadeIn, viewportConfig } from '@/lib/motion'
import { DEMOS } from '@/lib/constants'
import AnimatedHeading from '@/components/motion/AnimatedHeading'
import DragScrubber from '@/components/motion/DragScrubber'

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
          <AnimatedHeading
            as="h1"
            animate="onMount"
            className="font-display font-extrabold text-5xl sm:text-6xl text-brand-text tracking-tight max-w-3xl"
          >
            Automation case studies — Kenya
          </AnimatedHeading>
          <motion.p variants={itemVariants} className="font-body text-lg text-brand-subtle leading-relaxed max-w-xl">
            Every demo below is a real system we built. Every number is real. No mockups, no hypotheticals.
          </motion.p>
        </motion.div>

        {/* Demo tabs */}
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

        {/* Demo card with drag scrubber */}
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
            {/* Card header */}
            <div className="px-8 py-6 border-b border-brand-border">
              <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-2">{demo.name}</h2>
              <p className="font-body text-brand-subtle italic">{`"${demo.hook}"`}</p>
            </div>

            {/* Drag scrubber */}
            <DragScrubber
              before={demo.before}
              after={demo.after}
            />

            {/* Stats */}
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
            <AnimatedHeading
              as="h2"
              className="font-display font-bold text-xl text-brand-text tracking-tight mb-2"
            >
              Want to see a system like this for your business?
            </AnimatedHeading>
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
