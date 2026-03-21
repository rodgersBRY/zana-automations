import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import ContactForm from './ContactForm'
import { Clock, MessageCircle, Phone } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Zana Automations — Book a Free Discovery Call',
  description:
    'Book a free 30-minute discovery call or send a message to Zana Automations. We reply within 24 hours. Based in Nairobi, serving businesses across East Africa.',
  path: '/contact',
})

const trustSignals = [
  {
    icon: Phone,
    title: 'Free 30-minute discovery call',
    body: 'No commitment, no sales pitch. We map your manual processes and show you what automation would look like for your business.',
  },
  {
    icon: Clock,
    title: 'We reply within 24 hours',
    body: 'Usually same day during Nairobi business hours. We don\'t leave enquiries sitting.',
  },
  {
    icon: MessageCircle,
    title: 'Plain language, no jargon',
    body: 'We explain what we\'d build, why, and what it costs — in terms that make sense to a business owner, not an engineer.',
  },
]

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-16">
          <p className="font-body text-xs font-medium text-brand-accent uppercase tracking-widest">
            Contact us
          </p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-brand-text tracking-tight max-w-2xl">
            Let's talk about your business
          </h1>
          <p className="font-body text-lg text-brand-subtle leading-relaxed max-w-xl">
            Fill in the form and we'll get back to you within 24 hours. Or just tell us what you need
            and we'll figure out the right next step together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: trust signals */}
          <div className="flex flex-col gap-8">
            {trustSignals.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-5">
                <div className="w-10 h-10 bg-brand-accent/15 border border-brand-accent/20 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-brand-text tracking-tight mb-1.5">{title}</h2>
                  <p className="font-body text-sm text-brand-subtle leading-relaxed">{body}</p>
                </div>
              </div>
            ))}

            <div className="mt-4 bg-brand-surface border border-brand-border rounded-2xl p-6">
              <p className="font-body text-xs font-medium text-brand-subtle uppercase tracking-widest mb-3">Location</p>
              <p className="font-body text-sm text-brand-text font-medium mb-1">Nairobi, Kenya</p>
              <p className="font-body text-sm text-brand-subtle">Serving businesses across Kenya and East Africa remotely.</p>
            </div>
          </div>

          {/* Right: contact form */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
