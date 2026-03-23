declare global {
  interface Window {
    umami?: {
      track: (
        eventName: string,
        data?: Record<string, string | number | boolean>
      ) => void
    }
  }
}

type EventData = Record<string, string | number | boolean>

function trackEvent(name: string, data?: EventData): void {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(name, data)
  }
}

/**
 * Type-safe Umami event helpers.
 * Import `track` wherever you need to fire an analytics event.
 */
export const track = {
  /** Primary / secondary CTA button clicks — label + where on the page */
  ctaClick: (label: string, location: string) =>
    trackEvent('cta_click', { label, location }),

  /** Mobile hamburger menu opened */
  navMobileOpen: () => trackEvent('nav_mobile_open'),

  /** Services dropdown opened (desktop hover) */
  navServicesOpen: () => trackEvent('nav_services_open'),

  /** User focused the first contact form field */
  formStart: () => trackEvent('contact_form_start'),

  /** User clicked the submit button */
  formSubmit: () => trackEvent('contact_form_submit'),

  /** API confirmed the message was received */
  formSuccess: () => trackEvent('contact_form_success'),

  /** Submit failed — captures the reason string */
  formError: (reason: string) =>
    trackEvent('contact_form_error', { reason }),

  /** Social icon clicked — 'linkedin' | 'whatsapp' */
  socialClick: (platform: string) =>
    trackEvent('social_link_click', { platform }),

  /** Pricing tier CTA clicked — passes tier name */
  pricingTierClick: (tier: string) =>
    trackEvent('pricing_tier_click', { tier }),

  /** Demo tab switched on the demos section */
  demoTabChange: (name: string) =>
    trackEvent('demo_tab_change', { name }),
}
