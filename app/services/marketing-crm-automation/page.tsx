import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Marketing & CRM Automation Kenya — WhatsApp & Email Follow-Up Systems',
  description:
    'We automate lead follow-ups, WhatsApp sequences, CRM population, and drip campaigns for Kenyan businesses. Every lead actioned, every time.',
  path: '/services/marketing-crm-automation',
})

const useCases = [
  {
    title: 'WhatsApp follow-up sequences',
    description: 'New lead signs up → personalised WhatsApp message sent in 4 minutes. Sequence continues automatically until they book a call or opt out.',
    result: '4 min avg first follow-up vs 2 days manual',
  },
  {
    title: 'CRM auto-population',
    description: 'Form submissions, WhatsApp inquiries, and email leads all routed into your CRM automatically — enriched, tagged, and assigned to the right rep.',
    result: 'Zero manual data entry into CRM',
  },
  {
    title: 'Drip email campaigns',
    description: 'Behaviour-triggered email sequences that send the right message at the right time. New lead, inactive user, post-purchase follow-up — all automated.',
    result: '40% higher engagement vs batch emails',
  },
  {
    title: 'Deal stage automation',
    description: 'When a deal moves stage, the right tasks, messages, and alerts fire automatically. Sales reps focus on selling, not updating CRM fields.',
    result: 'CRM accuracy from 60% to 95%+',
  },
]

export default function MarketingCRMPage() {
  return (
    <div className="pt-24 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="flex flex-col gap-5 mb-16">
          <div className="flex items-center gap-3">
            <Link href="/services" className="font-body text-sm text-brand-subtle hover:text-brand-text transition-colors">Services</Link>
            <span className="text-brand-muted">/</span>
            <span className="font-body text-sm text-brand-accent">Marketing & CRM Automation</span>
          </div>
          <p className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest">Service 04</p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-brand-text tracking-tight max-w-3xl">
            Marketing & CRM automation Kenya
          </h1>
          <p className="font-body text-xl text-brand-accent2 font-medium">Follow up with every lead. Without lifting a finger.</p>
          <p className="font-body text-lg text-brand-subtle leading-relaxed max-w-2xl">
            We connect your CRM, email, and WhatsApp so every new lead gets a personalised follow-up
            sequence — automatically, within minutes of signing up. No leads fall through the cracks.
            No manual follow-ups to remember.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            Fix your follow-up
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px bg-brand-border rounded-2xl overflow-hidden border border-brand-border mb-20">
          {[
            { value: '4 min', label: 'avg first follow-up time' },
            { value: '3×', label: 'more leads actioned weekly' },
            { value: '60%', label: 'open rate on WhatsApp sequences' },
          ].map((stat) => (
            <div key={stat.label} className="bg-brand-surface flex flex-col items-center py-8 px-4 text-center">
              <span className="font-display font-bold text-3xl text-brand-accent2">{stat.value}</span>
              <span className="font-body text-sm text-brand-subtle mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Use cases */}
        <div className="mb-20">
          <h2 className="font-display font-bold text-3xl text-brand-text tracking-tight mb-10">What we build</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-brand-surface border border-brand-border rounded-2xl p-7">
                <h3 className="font-display font-semibold text-xl text-brand-text tracking-tight mb-3">{uc.title}</h3>
                <p className="font-body text-sm text-brand-subtle leading-relaxed mb-4">{uc.description}</p>
                <p className="font-body text-xs text-brand-accent2 font-medium bg-brand-accent2/10 border border-brand-accent2/20 px-3 py-2 rounded-lg">{uc.result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Included */}
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 mb-20">
          <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-6">What every engagement includes</h2>
          <ul className="grid sm:grid-cols-2 gap-3" role="list">
            {[
              'Lead flow mapping from source to CRM',
              'WhatsApp Business API integration',
              'Email platform integration (any provider)',
              'CRM setup and automation rules',
              'Sequence copywriting guidance',
              'A/B testing framework included',
              'Performance dashboard setup',
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
            <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-2">Stop losing leads to slow follow-ups.</h2>
            <p className="font-body text-brand-subtle">Book a free call. We'll show you exactly what an automated follow-up system would look like for your business.</p>
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
