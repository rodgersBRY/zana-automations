import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'AI & LLM Automation Kenya — GPT & Claude-Powered Business Systems',
  description:
    'We build AI-powered automations using OpenAI and Claude for Kenyan businesses. Customer support, lead qualification, document summarisation, and more — at scale.',
  path: '/services/ai-llm-automation',
})

const useCases = [
  {
    title: 'AI customer support triage',
    description: 'Incoming messages classified, prioritised, and responded to by AI — instantly, 24/7. Only edge cases escalated to your team.',
    result: '3 min avg response vs 4 hrs manual',
  },
  {
    title: 'Lead qualification & scoring',
    description: 'New leads scored against your ideal client profile, classified by intent, and routed to the right sales rep — automatically.',
    result: '90% accuracy, zero manual review for standard leads',
  },
  {
    title: 'Document summarisation',
    description: 'Contracts, reports, tender documents, and proposals summarised into structured outputs. Key clauses extracted, risks flagged.',
    result: '45-minute review → 5-minute briefing',
  },
  {
    title: 'Proposal & email drafting',
    description: 'Your team inputs a brief. AI drafts a personalised proposal or response email in your voice. Human reviews, approves, sends.',
    result: '80% reduction in first-draft writing time',
  },
]

export default function AILLMAutomationPage() {
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
            <span className="font-body text-sm text-brand-accent">AI & LLM Automation</span>
          </div>
          <p className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest">Service 02</p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-brand-text tracking-tight max-w-3xl">
            AI automation Kenya — LLM-powered business systems
          </h1>
          <p className="font-body text-xl text-brand-accent2 font-medium">
            Give your business a brain that never sleeps.
          </p>
          <p className="font-body text-lg text-brand-subtle leading-relaxed max-w-2xl">
            We build AI-powered automations using GPT-4 and Claude to draft emails, summarise documents,
            classify leads, and answer customer questions — at the scale your business needs, without adding
            headcount.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            Explore AI automation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px bg-brand-border rounded-2xl overflow-hidden border border-brand-border mb-20">
          {[
            { value: '3 min', label: 'avg AI response time' },
            { value: '90%', label: 'lead classification accuracy' },
            { value: 'KES 0', label: 'extra headcount needed' },
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

        {/* AI models note */}
        <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-2xl p-8 mb-20">
          <h2 className="font-display font-bold text-xl text-brand-text tracking-tight mb-3">Which AI models do we use?</h2>
          <p className="font-body text-sm text-brand-subtle leading-relaxed mb-4">
            We select the right model for the task — not the most expensive one. GPT-4o and Claude 3.5 Sonnet
            for complex reasoning and generation. Smaller, faster models for classification and routing where
            cost efficiency matters. All data handling discussed and agreed upfront.
          </p>
          <div className="flex flex-wrap gap-3">
            {['GPT-4o', 'Claude 3.5 Sonnet', 'GPT-4o mini', 'Claude Haiku', 'Embeddings API'].map((m) => (
              <span key={m} className="font-body text-xs font-medium text-brand-accent bg-brand-accent/15 border border-brand-accent/25 px-3 py-1.5 rounded-full">{m}</span>
            ))}
          </div>
        </div>

        {/* Included */}
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 mb-20">
          <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-6">What every engagement includes</h2>
          <ul className="grid sm:grid-cols-2 gap-3" role="list">
            {[
              'Prompt engineering for your specific use case',
              'API integration with your existing tools',
              'Accuracy testing before deployment',
              'Guardrails and escalation logic',
              'Cost estimation per 1,000 operations',
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
            <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-2">Ready to add AI to your operations?</h2>
            <p className="font-body text-brand-subtle">Book a free call. We'll identify exactly where AI adds real value for your business — and where it doesn't.</p>
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
