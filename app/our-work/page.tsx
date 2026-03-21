import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import OurWorkClient from "./OurWorkClient";

export const metadata: Metadata = buildMetadata({
  title: "Automation Case Studies Kenya — Before & After Demos",
  description:
    "See real automation systems Zana built for Kenyan businesses. Before/after comparisons, real results, and specific numbers on time saved and processes improved.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return <OurWorkClient />;
}
