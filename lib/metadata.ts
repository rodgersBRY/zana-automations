import type { Metadata } from "next";

const BASE_URL = "https://zanaautomations.co.ke";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: `${title} | Zana Automations`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: `${BASE_URL}${path}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path}`,
      siteName: "Zana Automations",
      locale: "en_KE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
