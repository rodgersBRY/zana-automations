"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/90 backdrop-blur-md border-b border-brand-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-brand-accent rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-xl text-brand-text tracking-tight">
            Zana
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 font-body text-sm text-brand-subtle hover:text-brand-text transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded">
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-60 bg-brand-surface border border-brand-border rounded-xl shadow-xl overflow-hidden">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 font-body text-sm text-brand-subtle hover:text-brand-text hover:bg-brand-muted/30 transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-sm text-brand-subtle hover:text-brand-text transition-colors duration-200"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a free call
          </Link>
          <button
            className="md:hidden text-brand-subtle hover:text-brand-text transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-surface border-t border-brand-border">
          <div className="px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <p className="font-body text-xs text-brand-subtle uppercase tracking-widest mb-2 mt-4">
                    {link.label}
                  </p>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2.5 font-body text-sm text-brand-text"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-2.5 font-body text-sm text-brand-text"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              className="mt-6 w-full text-center bg-brand-accent text-white font-body font-medium text-sm px-5 py-3 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              Book a free call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
