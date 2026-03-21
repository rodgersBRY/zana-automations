import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "How Our Business Automation Process Works",
  description:
    "Three steps from first call to working automation: process audit, build & test, hand over & train. See what to expect when you work with Zana Automations.",
  path: "/how-it-works",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Zana Automations builds your system",
  description: "From first call to a live automation — our 3-step process",
  step: HOW_IT_WORKS_STEPS.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.title,
    text: step.description,
  })),
};

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects go from first call to a live system in 2–4 weeks. Larger or more complex builds can take 6–8 weeks, but we always agree on timelines upfront.",
  },
  {
    q: "Do I need to be technical to work with you?",
    a: "Not at all. Our job is to ask the right questions, understand how your business works, and translate that into a working system. You review outputs, not code.",
  },
  {
    q: "What happens after the system is live?",
    a: "We provide 30–60 days of post-launch support depending on your tier. We also offer ongoing retainers if you want a long-term automation partner.",
  },
  {
    q: "Can you work with the tools we already use?",
    a: "Yes. We build around your existing stack — whether that's Google Workspace, WhatsApp, M-Pesa integrations, CRMs, or accounting software. We don't force you to switch tools.",
  },
  {
    q: "What if the automation breaks?",
    a: "We hand over full documentation so you understand exactly how it works. During the support period, we fix any issues at no extra cost. For retainer clients, we monitor proactively.",
  },
];

export default function HowItWorksPage() {
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
            How it works
          </p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-brand-text tracking-tight max-w-3xl">
            From first call to working system — in weeks, not months
          </h1>
          <p className="font-body text-lg text-brand-subtle leading-relaxed max-w-xl">
            No 6-month retainers before you see results. No consultancy theatre.
            Here&apos;s exactly what happens when you work with us.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-0 mb-20">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <div
              key={step.number}
              className="grid md:grid-cols-[120px_1fr] gap-8 py-12 border-t border-brand-border"
            >
              <div className="flex flex-col items-start gap-2">
                <span className="font-display font-bold text-5xl text-brand-accent/30 leading-none">
                  {step.number}
                </span>
                <span className="font-body text-xs text-brand-subtle uppercase tracking-widest">
                  Step {i + 1}
                </span>
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-3">
                  {step.title}
                </h2>
                <p className="font-body text-brand-subtle leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 mb-20">
          <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-6">
            Typical timeline
          </h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              {
                period: "Day 1",
                label: "Discovery call",
                desc: "Map your processes, agree on scope and timeline",
              },
              {
                period: "Week 1",
                label: "Audit & design",
                desc: "Detailed workflow design, tools selected, plan confirmed",
              },
              {
                period: "Week 2–3",
                label: "Build & test",
                desc: "System built, tested against real scenarios, refined",
              },
              {
                period: "Week 4",
                label: "Launch & train",
                desc: "Go live, team trained, documentation handed over",
              },
            ].map(({ period, label, desc }) => (
              <div key={period} className="flex flex-col gap-2">
                <span className="font-display font-bold text-xl text-brand-accent2">
                  {period}
                </span>
                <span className="font-body text-sm font-medium text-brand-text">
                  {label}
                </span>
                <span className="font-body text-xs text-brand-subtle leading-relaxed">
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="font-display font-bold text-3xl text-brand-text tracking-tight mb-10">
            Common questions
          </h2>
          <div className="flex flex-col gap-0">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="py-8 border-t border-brand-border grid md:grid-cols-2 gap-6"
              >
                <h3 className="font-display font-semibold text-lg text-brand-text tracking-tight">
                  {faq.q}
                </h3>
                <p className="font-body text-brand-subtle leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-10 flex flex-col sm:flex-row items-start sm:items-center gap-8 justify-between">
          <div>
            <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight mb-2">
              Ready to start Step 1?
            </h2>
            <p className="font-body text-brand-subtle">
              Book a free 30-minute discovery call. We&apos;ll map your processes and
              show you exactly what we&apos;d build.
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
  );
}
