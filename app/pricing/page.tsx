import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { PRICING_TIERS } from '@/lib/constants'
import PricingClient from './PricingClient'

export const metadata: Metadata = buildMetadata({
  title: 'Automation Consultancy Pricing Kenya — KES-Priced Tiers',
  description:
    'Clear, KES-priced automation packages for Kenyan SMBs. Starter from KES 45,000, Growth projects, and Scale retainers. Custom quotes available.',
  path: '/pricing',
})

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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingClient />
    </>
  )
}
