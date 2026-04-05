export const PRODUCT_DETAIL_STATIC_CONTENT = {
  hero: {
    primaryCtaLabel: 'REQUEST FACTORY QUOTE',
    averageLeadTimeFallback: 'Average lead time: 14-21 business days for global shipping.',
  },
  scenarios: {
    eyebrow: 'OPERATIONAL CONTEXT',
    title: 'Optimal Deployment Scenarios',
    icons: ['restaurant', 'hotel', 'icecream'] as const,
  },
  specs: {
    title: 'Engineering Specifications',
  },
  oem: {
    title: 'OEM & Branding Integration',
    description:
      'Transform the ICM-T836 into a proprietary asset for your franchise. We offer comprehensive white-labeling services including custom chassis colors, laser-etched branding, and localized UI software.',
    bullets: [
      { icon: 'palette', label: 'Custom RAL Colors' },
      { icon: 'branding_watermark', label: 'Brand Etching' },
      { icon: 'terminal', label: 'Custom UI/UX' },
    ],
  },
  exportSupport: {
    title: 'Global Export Support',
    description: 'Door-to-door logistics in 120+ countries.',
    bullets: [
      'Seaworthy Plywood Crating',
      'Customs Documentation',
      'Multi-Currency Invoicing',
    ],
  },
  related: {
    title: 'Similar Precision Equipment',
  },
  faq: {
    title: 'Technical Inquiry FAQ',
  },
  finalCta: {
    title: 'Ready to integrate PRO-TAYLOR into your workflow?',
    description:
      'Speak with a technical specialist today for a customized quote, including shipping and volume discounts for fleet orders.',
    emailPlaceholder: 'Corporate Email Address',
    buttonLabel: 'Start Inquiry',
  },
  floatingCta: {
    href: '/contact',
    label: 'CHAT WITH ENGINEER',
  },
} as const
