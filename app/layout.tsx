import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/motion/PageTransition";
import CursorTrail from "@/components/motion/CursorTrail";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zana Automations | Business Automation Consultancy in Nairobi, Kenya",
  description:
    "We help Kenyan SMBs and startups eliminate manual, repetitive work using n8n, Python, and AI tools. Based in Nairobi, serving East Africa.",
  metadataBase: new URL("https://zanaautomations.co.ke"),
  openGraph: {
    siteName: "Zana Automations",
    locale: "en_KE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Zana Automations",
  description: "Business process automation consultancy in Nairobi, Kenya",
  url: "https://zanaautomations.co.ke",
  areaServed: ["Kenya", "East Africa"],
  serviceType: "Business Automation",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-bg text-brand-text antialiased">
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <Analytics />
        <CursorTrail />
      </body>
    </html>
  );
}
