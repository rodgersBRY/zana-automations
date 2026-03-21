import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { ArrowRight } from 'lucide-react'
import { TOOLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'About Zana Automations — Automation Consultant Nairobi',
  description:
    'Meet the team behind Zana Automations. Nairobi-based automation consultants building n8n, Python, and AI-powered systems for Kenyan SMBs and startups.',
  path: '/about',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Zana Automations',
  description: 'Business process automation consultancy in Nairobi, Kenya',
  url: 'https://zanaautomations.co.ke',
  address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
  areaServed: ['Kenya', 'East Africa'],
  priceRange: 'KES 45,000–250,000+',
}

const values = [
  {
    title: 'We build, we don\'t just consult.',
    body: 'We don\'t write 40-page strategy documents. We build working systems and hand them over. If it doesn\'t run, it doesn\'t count.',
  },
  {
    title: 'Real numbers only.',
    body: 'We never say "save time" without a number attached. If we can\'t measure the improvement, we don\'t claim it.',
  },
  {
    title: 'Your stack, not ours.',
    body: 'We build around the tools you already use. WhatsApp, M-Pesa, Google Sheets, your existing CRM — we meet you where you are.',
  },
  {
    title: 'Transparent from day one.',
    body: 'You get a fixed quote before we start, full documentation when we finish, and plain-language explanations throughout.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 bg-brand-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="flex flex-col gap-5 mb-20">
          <p className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest">
            About us
          </p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-brand-text tracking-tight max-w-3xl">
            Automation consultant Nairobi — built for East African business
          </h1>
        </div>

        {/* Founder story + team */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-5">
              Why we built Zana
            </h2>
            <div className="flex flex-col gap-4 font-body text-brand-subtle leading-relaxed">
              <p>
                We started Zana because we kept seeing the same thing: Kenyan businesses staffed by
                smart, capable people spending 30–40% of their week on work that a system should be
                doing. Copying data between spreadsheets. Chasing approvals over WhatsApp. Manually
                sending the same follow-up email for the tenth time.
              </p>
              <p>
                The technology to fix all of this exists and is affordable. The gap is someone who
                understands both the business operations side <em>and</em> the technical side well
                enough to build a system that actually fits how a Kenyan SMB works — not a
                Western SaaS template with M-Pesa bolted on.
              </p>
              <p>
                That's the gap we fill. We're based in Nairobi, we've worked inside Kenyan businesses,
                and we build automation systems that fit the actual tools and workflows East African
                companies use every day.
              </p>
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-5">
              The team
            </h2>
            <div className="flex flex-col gap-5">
              {[
                {
                  initials: 'ZA',
                  name: 'Founder & Lead Automation Engineer',
                  bio: 'Builds the systems. 5+ years working on workflow automation, API integrations, and AI pipelines across logistics, fintech, and services businesses in East Africa.',
                },
                {
                  initials: 'PM',
                  name: 'Process & Implementation Specialist',
                  bio: 'Maps the business logic. Makes sure every automation we build matches how clients actually work, not how we assume they work.',
                },
              ].map((member) => (
                <div key={member.initials} className="flex items-start gap-4 bg-brand-surface border border-brand-border rounded-2xl p-5">
                  <div className="w-12 h-12 bg-brand-accent/20 border border-brand-accent/30 rounded-xl flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-sm text-brand-accent">{member.initials}</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-brand-text tracking-tight text-sm mb-1">{member.name}</p>
                    <p className="font-body text-xs text-brand-subtle leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="font-display font-bold text-3xl text-brand-text tracking-tight mb-10">
            How we work
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-brand-surface border border-brand-border rounded-2xl p-7">
                <h3 className="font-display font-semibold text-lg text-brand-text tracking-tight mb-3">{value.title}</h3>
                <p className="font-body text-sm text-brand-subtle leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-20">
          <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-6">
            Our tech stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="font-body text-sm font-medium text-brand-text bg-brand-surface border border-brand-border px-4 py-2 rounded-xl"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="font-body text-sm text-brand-subtle mt-4">
            We also integrate with M-Pesa Daraja API, Safaricom Business, Pesapal, Equity Bank APIs, and most tools
            your business already uses.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-10 flex flex-col sm:flex-row items-start sm:items-center gap-8 justify-between">
          <div>
            <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-2">
              Let's talk about your business.
            </h2>
            <p className="font-body text-brand-subtle">
              Book a free 30-minute call. No pitch, no pressure — just a practical conversation about what we can automate for you.
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
