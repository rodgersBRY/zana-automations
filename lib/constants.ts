export const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        label: "Business Process Automation",
        href: "/services/business-process-automation",
      },
      { label: "AI & LLM Automation", href: "/services/ai-llm-automation" },
      {
        label: "Web Scraping & Data Pipelines",
        href: "/services/web-scraping-data-pipelines",
      },
      {
        label: "Marketing & CRM Automation",
        href: "/services/marketing-crm-automation",
      },
    ],
  },
  { label: "Our Work", href: "/our-work" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const SERVICES = [
  {
    slug: "business-process-automation",
    icon: "Workflow",
    name: "Business Process Automation",
    tagline: "Kill the manual bottlenecks killing your growth.",
    description:
      "We map every repetitive step in your operation — approvals, data entry, reporting — and replace them with automated workflows that run without you.",
    examples: [
      "Invoice generation & sending",
      "Multi-step approval chains (ops, finance)",
      "Employee onboarding checklists",
      "Automated daily/weekly reports",
    ],
    stats: [
      "8 min avg approval time",
      "40 hrs/month saved per team",
      "0 manual steps in the loop",
    ],
  },
  {
    slug: "ai-llm-automation",
    icon: "Brain",
    name: "AI & LLM Automation",
    tagline: "Give your business a brain that never sleeps.",
    description:
      "We build AI-powered automations using GPT-4 and Claude to draft emails, summarise documents, classify leads, and answer customer questions — at scale.",
    examples: [
      "AI customer support triage & response",
      "Automated lead qualification with scoring",
      "Document summarisation & extraction",
      "Proposal drafting from brief inputs",
    ],
    stats: [
      "3 min response time vs 4 hrs manual",
      "90% accuracy on lead classification",
      "KES 0 extra headcount",
    ],
  },
  {
    slug: "web-scraping-data-pipelines",
    icon: "Database",
    name: "Web Scraping & Data Pipelines",
    tagline: "Stop copying data. Start acting on it.",
    description:
      "We build automated scrapers and data pipelines that collect competitor prices, market data, and leads — cleaned, structured, and delivered where you need it.",
    examples: [
      "Competitor price monitoring",
      "Automated lead list building",
      "Market data collection (daily/hourly)",
      "Google Sheets / Airtable sync pipelines",
    ],
    stats: [
      "1,000+ records/hour",
      "Daily fresh data, zero manual export",
      "100% structured, query-ready output",
    ],
  },
  {
    slug: "marketing-crm-automation",
    icon: "Target",
    name: "Marketing & CRM Automation",
    tagline: "Follow up with every lead. Without lifting a finger.",
    description:
      "We connect your CRM, email, and WhatsApp so every new lead gets a personalised follow-up sequence — automatically, within minutes of signing up.",
    examples: [
      "WhatsApp follow-up sequences",
      "CRM auto-population from forms",
      "Drip email campaigns triggered by behaviour",
      "Deal stage updates and sales alerts",
    ],
    stats: [
      "4 min avg first follow-up",
      "3× more leads actioned per week",
      "60% open rate on automated WhatsApp",
    ],
  },
];

export const DEMOS = [
  {
    id: "invoice-approval",
    name: "Invoice Approval Workflow",
    hook: "A logistics firm was chasing approvals over WhatsApp. Nothing was tracked. Payments were delayed by days.",
    before: {
      label: "Before",
      steps: [
        "Finance creates invoice manually in Excel",
        "Sends PDF over WhatsApp to manager",
        "Manager reviews when they remember",
        "Approval confirmed verbally or via message",
        "Finance manually updates the sheet",
      ],
      pain: "3–5 day approval cycle, zero audit trail",
    },
    after: {
      label: "After",
      steps: [
        "Finance fills a simple form",
        "System auto-generates invoice and notifies manager",
        "Manager approves in one click from email",
        "Finance gets instant confirmation",
        "Airtable updated automatically with full audit trail",
      ],
      result: "8-minute approval cycle, full visibility",
    },
    stats: [
      "97% faster approvals",
      "Zero follow-up messages needed",
      "100% audit trail coverage",
    ],
  },
  {
    id: "lead-followup",
    name: "Lead Follow-Up Automation",
    hook: "A coaching business was losing leads because follow-ups were inconsistent. Hot leads went cold in 24 hours.",
    before: {
      label: "Before",
      steps: [
        "Lead fills contact form on website",
        "Form data lands in inbox",
        "Sales team manually copies to spreadsheet",
        "Follow-up email sent when someone remembers",
        "No tracking of who was contacted or when",
      ],
      pain: "Average 2-day response time, 40% of leads never followed up",
    },
    after: {
      label: "After",
      steps: [
        "Lead fills contact form",
        "CRM auto-populated with lead data and score",
        "Personalised WhatsApp message sent in 4 minutes",
        "Email drip sequence starts automatically",
        "Sales alert fired to team with full lead context",
      ],
      result: "4-minute response time, every lead actioned",
    },
    stats: [
      "4 min avg first response",
      "3× more leads actioned weekly",
      "0 leads fall through the cracks",
    ],
  },
  {
    id: "price-monitoring",
    name: "Competitor Price Monitoring",
    hook: "An e-commerce retailer was manually checking competitor prices every week. It took half a day and was always out of date.",
    before: {
      label: "Before",
      steps: [
        "Team manually visits 12 competitor websites",
        "Copies prices into a shared Google Sheet",
        "Half-day task done weekly at best",
        "Data stale within hours of collection",
        "Pricing decisions made on outdated info",
      ],
      pain: "Half-day weekly task, always outdated by the time decisions are made",
    },
    after: {
      label: "After",
      steps: [
        "Scraper runs every 6 hours across all competitor sites",
        "Prices cleaned and structured automatically",
        "Sheet updated with deltas highlighted",
        "Slack alert fires when competitor drops price > 5%",
        "Team acts on real-time intelligence",
      ],
      result: "Fresh data every 6 hours, zero manual work",
    },
    stats: [
      "1,200 price points tracked daily",
      "0 hours of manual work weekly",
      "Alerts in under 10 min of price change",
    ],
  },
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    tagline: "One problem. One system. Done.",
    price: "KES 45,000–80,000",
    priceNote: "One-off project",
    features: [
      "Single workflow or automation",
      "Up to 3 tools integrated",
      "n8n or Python-based build",
      "2 rounds of revisions",
      "30-day post-launch support",
      "Documentation handed over",
    ],
    cta: "Start with Starter",
    highlighted: false,
  },
  {
    name: "Growth",
    tagline: "Multiple systems. Real operational change.",
    price: "KES 120,000–250,000",
    priceNote: "Project + optional retainer",
    features: [
      "Up to 4 interconnected automations",
      "Unlimited tool integrations",
      "AI/LLM features included",
      "Full process audit included",
      "60-day post-launch support",
      "Training session for your team",
      "Monthly maintenance retainer available",
    ],
    cta: "Get a Growth quote",
    highlighted: true,
  },
  {
    name: "Scale",
    tagline: "Ongoing automation partner for your business.",
    price: "KES 35,000+/mo",
    priceNote: "Monthly retainer",
    features: [
      "Unlimited automation requests",
      "Priority builds and turnaround",
      "Monthly strategy session",
      "Proactive system monitoring",
      "Dedicated Slack channel",
      "New integrations as your stack grows",
    ],
    cta: "Book a Scale call",
    highlighted: false,
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Audit your processes",
    description:
      "We spend 30 minutes mapping how your business actually runs — the bottlenecks, the manual steps, the time sinks. You leave with clarity on what to fix first.",
    icon: "Search",
  },
  {
    number: "02",
    title: "Build & test",
    description:
      "We design, build, and test your automation system. You see progress at every stage. Nothing ships until it works exactly as expected.",
    icon: "Wrench",
  },
  {
    number: "03",
    title: "Hand over & train",
    description:
      "We hand over full documentation, train your team, and stay on hand for 30–60 days. Your system runs. You run your business.",
    icon: "GraduationCap",
  },
];

export const TOOLS = [
  "n8n",
  "Python",
  "OpenAI",
  "Claude API",
  "Airtable",
  "WhatsApp API",
  "Google Workspace",
  "Slack",
];
