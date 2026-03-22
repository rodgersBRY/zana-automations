# Zana Automations — Website

Marketing website for **Zana Automations**, a Nairobi-based business process automation consultancy helping Kenyan SMBs, startups, and solopreneurs reclaim time by automating repetitive work.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Syne (display) + DM Sans (body) via `next/font`
- **Forms:** React Hook Form + Resend
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Project Structure

```
app/                        # Next.js App Router pages
├── layout.tsx              # Root layout: nav, footer, fonts, analytics
├── page.tsx                # Homepage
├── services/               # Services hub + 4 service detail pages
├── our-work/               # Before/after demos + case studies
├── how-it-works/           # 3-step process explainer
├── pricing/                # Pricing tiers + FAQ
├── about/                  # Founder story + team
├── contact/                # Contact form + booking
└── api/contact/route.ts    # Form submission handler (Resend)

components/
├── ui/                     # Reusable primitives (Button, Card, Badge)
├── layout/                 # Navbar, Footer, Container
├── sections/               # Page-specific sections
└── motion/                 # Shared Framer Motion variants

lib/
├── metadata.ts             # Shared metadata helpers
├── motion.ts               # Shared animation variants
└── constants.ts            # Services data, pricing, nav links
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key_here
```

---

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` triggers an automatic production deployment.

Set `RESEND_API_KEY` in the Vercel project environment variables before going live.

---

## About Zana Automations

**Zana** means *tools* or *instruments* in Swahili — fitting for a company that builds the systems so you can run the business.

We help small & medium businesses across Kenya and East Africa automate manual, repetitive workflows using **n8n**, **Python**, **JavaScript**, and AI tools including the **OpenAI** and **Claude** APIs.

**Based in Nairobi. Serving East Africa.**
