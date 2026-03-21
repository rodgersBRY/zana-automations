'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { PRICING_TIERS } from '@/lib/constants'
import { pricingContainer, pricingCenter, pricingFlank, viewportConfig } from '@/lib/motion'
import AnimatedHeading from '@/components/motion/AnimatedHeading'
import TiltCard from '@/components/motion/TiltCard'

const faqItems = [
  {
    q: 'Are these prices fixed?',
    a: 'The ranges above are typical starting points. Every project is scoped individually and we send you a fixed quote before any work begins — no surprises.',
  },
  {
    q: "What's included in the free discovery call?",
    a: 'A 30-minute session where we map your manual processes, identify your biggest time sinks, and outline what an automation system would look like. No pitch, just value.',
  },
  {
    q: 'Do you charge per automation or per project?',
    a: 'We price per project scope, not per individual automation. You get everything needed to solve the problem — not a bill for every n8n node.',
  },
  {
    q: 'Can I start with Starter and upgrade later?',
    a: 'Yes. Most clients start with a focused Starter project to see results, then move to Growth or Scale once they see the impact.',
  },
  {
    q: 'Do you work on M-Pesa integrations?',
    a: 'Yes. We build M-Pesa C2B/B2C integrations, payment notifications, reconciliation automations, and Daraja API workflows regularly.',
  },
]

export default function PricingClient() {
  const prefersReducedMotion = useReducedMotion()
  const containerVariants = prefersReducedMotion ? {} : pricingContainer

  return (
    <div className="pt-24 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="flex flex-col gap-5 mb-16 text-center max-w-2xl mx-auto">
          <p className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest">
            Pricing
          </p>
          <AnimatedHeading
            as="h1"
            className="font-display font-extrabold text-5xl sm:text-6xl text-brand-text tracking-tight"
          >
            Automation consultancy pricing Kenya
          </AnimatedHeading>
          <p className="font-body text-lg text-brand-subtle leading-relaxed">
            Clear, KES-priced packages. No retainer required to start. All prices exclude VAT and are
            agreed before any work begins.
          </p>
        </div>

        {/* Pricing tiers — staggered entrance + TiltCard */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {PRICING_TIERS.map((tier, i) => {
            const cardVariants = prefersReducedMotion
              ? {}
              : tier.highlighted
              ? pricingCenter
              : pricingFlank

            return (
              <motion.div key={tier.name} variants={cardVariants}>
                <TiltCard
                  className={`relative flex flex-col bg-brand-surface border rounded-2xl p-8 h-full ${
                    tier.highlighted
                      ? 'border-brand-accent shadow-[0_0_40px_rgba(108,99,255,0.12)]'
                      : 'border-brand-border'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="font-body text-xs font-medium text-white bg-brand-accent px-4 py-1.5 rounded-full">
                        Most popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-1">
                      {tier.name}
                    </h2>
                    <p className="font-body text-sm text-brand-subtle">{tier.tagline}</p>
                  </div>

                  <div className="mb-6">
                    <span className="font-display font-extrabold text-3xl text-brand-text">{tier.price}</span>
                    <p className="font-body text-xs text-brand-subtle mt-1">{tier.priceNote}</p>
                  </div>

                  <ul className="flex flex-col gap-3 mb-8 flex-1" role="list">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-accent2 mt-0.5 shrink-0" aria-hidden="true" />
                        <span className="font-body text-sm text-brand-subtle">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full text-center inline-flex items-center justify-center gap-2 font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                      tier.highlighted
                        ? 'bg-brand-accent hover:bg-brand-accent/90 text-white hover:scale-[1.02] active:scale-[0.98]'
                        : 'border border-brand-border hover:border-brand-accent/50 text-brand-text'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </TiltCard>
              </motion.div>
            )
          })}
        </motion.div>

        <p className="text-center font-body text-sm text-brand-subtle mb-20">
          All prices in KES. Custom quotes available for enterprise and multi-system builds.
          <br />
          Not sure which tier? Book a free call — we&apos;ll tell you exactly what you need.
        </p>

        {/* FAQ */}
        <div>
          <AnimatedHeading
            as="h2"
            className="font-display font-bold text-3xl text-brand-text tracking-tight mb-10"
          >
            Pricing questions
          </AnimatedHeading>
          <div className="flex flex-col gap-0">
            {faqItems.map((faq, i) => (
              <div key={i} className="py-8 border-t border-brand-border grid md:grid-cols-2 gap-6">
                <h3 className="font-display font-semibold text-lg text-brand-text tracking-tight">{faq.q}</h3>
                <p className="font-body text-brand-subtle leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-brand-surface border border-brand-border rounded-2xl p-10 flex flex-col sm:flex-row items-start sm:items-center gap-8 justify-between">
          <div>
            <AnimatedHeading
              as="h2"
              className="font-display font-bold text-2xl text-brand-text tracking-tight mb-2"
            >
              Want a custom quote?
            </AnimatedHeading>
            <p className="font-body text-brand-subtle">
              Tell us what you need and we&apos;ll scope it precisely — no guesswork, no hidden costs.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            Get a quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
