import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Business Process Automation Services Kenya",
  description:
    "Four specialised automation services for Kenyan SMBs: business process automation, AI & LLM automation, web scraping & data pipelines, and marketing & CRM automation.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesPageClient />;
}
