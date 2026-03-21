import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Web Scraping & Data Pipelines Kenya — Automated Data Collection',
  description:
    'We build web scrapers and data pipelines that collect competitor prices, market data, and leads for Kenyan businesses. Clean, structured, delivered where you need it.',
  path: '/services/web-scraping-data-pipelines',
})

const useCases = [
  {
    title: 'Competitor price monitoring',
    description: 'Scrape competitor prices across multiple sites on a schedule. Get alerts when prices change. Make pricing decisions on fresh data, not last week\'s spreadsheet.',
    result: '1,200 price points tracked daily, 0 manual hours',
  },
  {
    title: 'Lead list building',
    description: 'Automated collection of business contacts, LinkedIn profiles, or directory listings based on your criteria. Cleaned, deduplicated, delivered to your CRM.',
    result: '500+ qualified leads/week vs 50 manually',
  },
  {
    title: 'Market data pipelines',
    description: 'Commodity prices, forex rates, government tender listings, property listings — collected, cleaned, and delivered to your system on a schedule.',
    result: 'Real-time data vs weekly manual collection',
  },
  {
    title: 'Google Sheets / Airtable sync',
    description: 'Connect your data sources to your operational tools. Auto-sync between databases, CRMs, and spreadsheets without manual exports or copy-paste.',
    result: 'Zero manual data transfers between systems',
  },
]

export default function WebScrapingPage() {
  return (
    <div className="pt-24 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="flex flex-col gap-5 mb-16">
          <div className="flex items-center gap-3">
            <Link href="/services" className="font-body text-sm text-brand-subtle hover:text-brand-text transition-colors">Services</Link>
            <span className="text-brand-muted">/</span>
            <span className="font-body text-sm text-brand-accent">Web Scraping & Data Pipelines</span>
          </div>
          <p className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest">Service 03</p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-brand-text tracking-tight max-w-3xl">
            Web scraping Kenya — automated data pipelines
          </h1>
          <p className="font-body text-xl text-brand-accent2 font-medium">Stop copying data. Start acting on it.</p>
          <p className="font-body text-lg text-brand-subtle leading-relaxed max-w-2xl">
            We build automated scrapers and data pipelines that collect competitor prices, market data, and
            leads — cleaned, structured, and delivered where you need it. No more half-day data collection
            tasks.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            Discuss your data needs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px bg-brand-border rounded-2xl overflow-hidden border border-brand-border mb-20">
          {[
            { value: '1,000+', label: 'records/hour collected' },
            { value: 'Daily', label: 'fresh data, zero manual export' },
            { value: '100%', label: 'structured, query-ready output' },
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

        {/* Tech note */}
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 mb-20">
          <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-6">What every engagement includes</h2>
          <ul className="grid sm:grid-cols-2 gap-3" role="list">
            {[
              'Target site analysis and data structure mapping',
              'Python or n8n scraper built to spec',
              'Data cleaning and normalisation included',
              'Scheduled runs at your preferred frequency',
              'Alert system for data anomalies or site changes',
              'Delivery to Google Sheets, Airtable, or your database',
              '30-day post-launch support and monitoring',
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
            <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-2">Stop doing manual data collection.</h2>
            <p className="font-body text-brand-subtle">Tell us what data you need, how often, and where it needs to go. We'll build it.</p>
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
