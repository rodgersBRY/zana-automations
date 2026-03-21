import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Business Process Automation Kenya — Workflow Automation for SMBs',
  description:
    'We automate approvals, data entry, onboarding, and reporting for Kenyan businesses. Stop losing hours to manual processes. Build systems that run without you.',
  path: '/services/business-process-automation',
})

const useCases = [
  {
    title: 'Invoice & payment approvals',
    description: 'Replace WhatsApp approval chains with a one-click workflow. Finance submits, manager approves, records update automatically. Full audit trail included.',
    result: '8 min average approval vs 3 days manually',
  },
  {
    title: 'Employee onboarding',
    description: 'Every new hire triggers a sequence: IT access provisioned, HR forms sent, training materials delivered, manager notified. No checklist to manage manually.',
    result: '2 hours of admin → 10 minutes of review',
  },
  {
    title: 'Automated reporting',
    description: 'Weekly sales reports, daily inventory summaries, monthly financial snapshots — generated from your existing data and sent to the right people automatically.',
    result: 'Report generation: from 4 hours to 0',
  },
  {
    title: 'Multi-department approval chains',
    description: 'Procurement, ops, compliance, finance — we build approval chains where each stage is automated, tracked, and escalated if stalled.',
    result: 'Approval bottlenecks reduced by 80%+',
  },
]

export default function BusinessProcessAutomationPage() {
  return (
    <div className="pt-24 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="flex flex-col gap-5 mb-16">
          <div className="flex items-center gap-3">
            <Link href="/services" className="font-body text-sm text-brand-subtle hover:text-brand-text transition-colors">
              Services
            </Link>
            <span className="text-brand-muted">/</span>
            <span className="font-body text-sm text-brand-accent">Business Process Automation</span>
          </div>
          <p className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest">
            Service 01
          </p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-brand-text tracking-tight max-w-3xl">
            Business process automation Kenya
          </h1>
          <p className="font-body text-xl text-brand-accent2 font-medium">
            Kill the manual bottlenecks killing your growth.
          </p>
          <p className="font-body text-lg text-brand-subtle leading-relaxed max-w-2xl">
            We map every repetitive step in your operation — approvals, data entry, reporting — and replace
            them with automated workflows that run without you. Built on n8n and Python, configured for how
            your Kenyan business actually works.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            Get a free audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px bg-brand-border rounded-2xl overflow-hidden border border-brand-border mb-20">
          {[
            { value: '8 min', label: 'avg approval time' },
            { value: '40 hrs', label: 'saved per team monthly' },
            { value: '0', label: 'manual steps in the loop' },
          ].map((stat) => (
            <div key={stat.label} className="bg-brand-surface flex flex-col items-center py-8 px-4 text-center">
              <span className="font-display font-bold text-3xl text-brand-accent2">{stat.value}</span>
              <span className="font-body text-sm text-brand-subtle mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Use cases */}
        <div className="mb-20">
          <h2 className="font-display font-bold text-3xl text-brand-text tracking-tight mb-10">
            What we build
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-brand-surface border border-brand-border rounded-2xl p-7">
                <h3 className="font-display font-semibold text-xl text-brand-text tracking-tight mb-3">{uc.title}</h3>
                <p className="font-body text-sm text-brand-subtle leading-relaxed mb-4">{uc.description}</p>
                <p className="font-body text-xs text-brand-accent2 font-medium bg-brand-accent2/10 border border-brand-accent2/20 px-3 py-2 rounded-lg">
                  {uc.result}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What's included */}
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 mb-20">
          <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-6">
            What every engagement includes
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3" role="list">
            {[
              'Full process audit before we build anything',
              'n8n or Python workflow built to your exact spec',
              'Integration with your existing tools',
              'Testing against real business scenarios',
              'Team training session included',
              'Full documentation handed over',
              '30-day post-launch support',
              'Fixed quote agreed before we start',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-brand-accent2 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="font-body text-sm text-brand-subtle">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-10 flex flex-col sm:flex-row items-start sm:items-center gap-8 justify-between">
          <div>
            <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-2">
              Ready to stop doing this manually?
            </h2>
            <p className="font-body text-brand-subtle">
              Book a free 30-minute call. We'll map your manual processes and tell you exactly what to automate first.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            Book a free call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
