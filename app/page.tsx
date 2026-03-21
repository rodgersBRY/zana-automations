import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DemosSection from "@/components/sections/DemosSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import HomeCTASection from "@/components/sections/HomeCTASection";

export const metadata: Metadata = buildMetadata({
  title:
    "Business Automation Kenya — Stop Doing Manually What a System Can Do in Seconds",
  description:
    "Zana Automations helps Kenyan SMBs and startups eliminate manual, repetitive work. We build n8n, Python, and AI-powered automations that save your team hours every week. Based in Nairobi.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <DemosSection />
      <HowItWorksSection />
      <HomeCTASection />
    </>
  );
}
