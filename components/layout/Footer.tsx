import Link from "next/link";
import { Zap, Linkedin, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-brand-border bg-brand-bg"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-brand-accent rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-brand-text">
                Zana Automations
              </span>
            </Link>
            <p className="font-body text-sm text-brand-subtle max-w-xs">
              We build the systems. You run the business. Nairobi-based, serving
              East Africa.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-brand-subtle hover:text-brand-text transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/zana-automations"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zana Automations on LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-brand-border text-brand-subtle hover:text-brand-text hover:border-brand-accent/50 transition-all duration-200"
              data-umami-event="social_link_click"
              data-umami-event-platform="linkedin"
            >
              <Linkedin className="w-4 h-4" />
              <span className="sr-only">Zana Automations on LinkedIn</span>
            </a>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-brand-border text-brand-subtle hover:text-brand-text hover:border-brand-accent2/50 transition-all duration-200"
              data-umami-event="social_link_click"
              data-umami-event-platform="whatsapp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="sr-only">Chat with us on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-brand-subtle">
            © 2026 Zana Automations. Built with automation.
          </p>
          <p className="font-body text-xs text-brand-subtle">
            All prices in KES. Based in Nairobi, Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}
