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
    title: 'OEM & Customization Support',
    description:
      'PRO-TAYLOR supports OEM/ODM production across multiple equipment lines. Depending on the model, customization may include color options, mold configuration, and selected branded details confirmed during inquiry.',
    bullets: [
      { icon: 'factory', label: 'OEM/ODM Available' },
      { icon: 'palette', label: 'Model-Specific Customization' },
      { icon: 'category', label: 'Custom Molds on Applicable Machines' },
    ],
  },
  exportSupport: {
    title: 'Factory-Direct Export Service',
    description:
      'PRO-TAYLOR operates as a manufacturer and exporter for global markets. Product support is handled through factory-direct communication, with model-dependent warranty terms, online support on applicable products, and export packaging confirmed per order.',
    bullets: [
      'Global Export Experience',
      'Fiber Wooden Box Packaging',
      'Online Support on Applicable Models',
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
