import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import HowItWorksClient from "./HowItWorksClient";

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

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HowItWorksClient />
    </>
  );
}
