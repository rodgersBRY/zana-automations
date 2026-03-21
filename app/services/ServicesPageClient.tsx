'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Workflow, Brain, Database, Target } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/motion'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Workflow,
  Brain,
  Database,
  Target,
}

export default function ServicesPageClient() {
  const prefersReducedMotion = useReducedMotion()
  const containerVariants    = prefersReducedMotion ? {} : staggerContainer
  const itemVariants         = prefersReducedMotion ? {} : fadeUp

  return (
    <div className="pt-24 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 mb-20"
        >
          <motion.p variants={itemVariants} className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest">
            Our services
          </motion.p>
          <motion.h1 variants={itemVariants} className="font-display font-extrabold text-5xl sm:text-6xl text-brand-text tracking-tight max-w-3xl">
            Business automation services in Kenya
          </motion.h1>
          <motion.p variants={itemVariants} className="font-body text-lg text-brand-subtle leading-relaxed max-w-2xl">
            We specialise in four areas where manual work kills the most time and costs the most money for
            Kenyan businesses. Each service is built to fit how your business actually operates — not a
            generic template.
          </motion.p>
        </motion.div>

        {/* Services — detailed */}
        <div className="flex flex-col gap-12">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="grid md:grid-cols-2 gap-10 items-start py-12 border-t border-brand-border"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-brand-accent/15 border border-brand-accent/20 rounded-xl flex items-center justify-center">
                      {Icon && <Icon className="w-5 h-5 text-brand-accent" />}
                    </div>
                    <span className="font-body text-xs font-medium text-brand-subtle uppercase tracking-widest">
                      Service {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-brand-text tracking-tight mb-3">
                    {service.name}
                  </h2>
                  <p className="font-body text-brand-accent2 font-medium mb-4">{service.tagline}</p>
                  <p className="font-body text-brand-subtle leading-relaxed mb-6">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 flex flex-col gap-6">
                  <div>
                    <p className="font-body text-xs font-medium text-brand-subtle uppercase tracking-widest mb-3">What we build</p>
                    <ul className="flex flex-col gap-2.5" role="list">
                      {service.examples.map((ex) => (
                        <li key={ex} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-brand-accent2 rounded-full shrink-0" aria-hidden="true" />
                          <span className="font-body text-sm text-brand-subtle">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-brand-border pt-5">
                    <p className="font-body text-xs font-medium text-brand-subtle uppercase tracking-widest mb-3">Results</p>
                    <div className="flex flex-col gap-2">
                      {service.stats.map((stat) => (
                        <span key={stat} className="font-body text-sm text-brand-accent2 font-medium">{stat}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-20 bg-brand-surface border border-brand-border rounded-2xl p-10 flex flex-col sm:flex-row items-start sm:items-center gap-8 justify-between"
        >
          <div>
            <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-2">Not sure which service you need?</h2>
            <p className="font-body text-brand-subtle">
              Book a free 30-minute call. We'll map your biggest time sinks and tell you exactly what to fix first.
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
