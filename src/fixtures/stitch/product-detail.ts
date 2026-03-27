export const productDetailFixture = {
  hero: {
    eyebrow: 'PRECISION MANUFACTURING SERIES',
    title: 'ICM-T836 Twin-System Soft Serve Machine',
    description:
      'A dual-compressor powerhouse designed for high-output commercial environments. Featuring independent cylinder control, the T836 ensures consistent texture and temperature even during peak operational hours.',
    metrics: [
      { label: 'PRODUCTION CAPACITY', value: '36-40 L/Hour' },
      { label: 'HOPPER VOLUME', value: '2 x 6.5 Liters' },
      { label: 'COOLING SYSTEM', value: 'Air + Pre-cooling' },
      { label: 'COMPRESSOR TYPE', value: 'Embraco Aspera' },
    ],
    primaryCta: 'REQUEST FACTORY QUOTE',
    secondaryCtaLabel: 'download',
    note: 'Average lead time: 14-21 business days for global shipping.',
    images: {
      main: {
        alt: 'ICM-T836 Main View',
        src: '/product-detail-main.png',
      },
      gallery: [
        {
          alt: 'ICM-T836 Detail 1',
          src: '/product-detail-detail-1.png',
        },
        {
          alt: 'ICM-T836 Detail 2',
          src: '/product-detail-detail-2.png',
        },
        {
          alt: 'ICM-T836 Context',
          src: '/product-detail-context.png',
        },
      ],
      extraViewCount: 8,
    },
  },
  scenarios: {
    eyebrow: 'OPERATIONAL CONTEXT',
    title: 'Optimal Deployment Scenarios',
    cards: [
      {
        icon: 'restaurant',
        title: 'High-Volume QSR',
        description:
          'Engineered for quick-service restaurants requiring consistent delivery of 400+ servings per peak window without recovery delay.',
      },
      {
        icon: 'hotel',
        title: 'Hospitality & Buffet',
        description:
          'Silent operation and elegant stainless finish make it ideal for front-of-house placement in 5-star hotel breakfast corridors.',
      },
      {
        icon: 'icecream',
        title: 'Artisan Dessert Bars',
        description:
          'Precise air-incorporation (overrun) controls allow for premium, dense gelato-style soft serve or light, airy yogurt.',
      },
    ],
  },
  engineering: {
    title: 'Engineering Specifications',
    modelId: 'PRO-T836-24V',
    rows: [
      { label: 'ELECTRICAL RATING', value: '220V/50Hz (Optional 110V/60Hz)' },
      { label: 'RATED OUTPUT', value: '2.8 kW' },
      { label: 'REFRIGERANT GAS', value: 'R404a (Main) / R134a (Pre-cool)' },
      { label: 'CYLINDER VOLUME', value: '2.0 Liters x 2' },
      { label: 'DIMENSIONS (WXDXH)', value: '540 x 780 x 1435 mm' },
      { label: 'NET WEIGHT', value: '165 kg' },
      { label: 'EXTERNAL FINISH', value: 'Food-Grade 304 Stainless Steel' },
      { label: 'BEATER TYPE', value: 'High-Efficiency POM Scrapers' },
      { label: 'AIR PUMP', value: 'Standard (Integrated)' },
      { label: 'NOISE EMISSION', value: '< 55 dB(A)' },
    ],
  },
  oemBlock: {
    title: 'OEM & Branding Integration',
    description:
      'Transform the ICM-T836 into a proprietary asset for your franchise. We offer comprehensive white-labeling services including custom chassis colors, laser-etched branding, and localized UI software.',
    features: [
      { icon: 'palette', label: 'Custom RAL Colors' },
      { icon: 'branding_watermark', label: 'Brand Etching' },
      { icon: 'terminal', label: 'Custom UI/UX' },
    ],
  },
  exportBlock: {
    icon: 'public',
    title: 'Global Export Support',
    description: 'Door-to-door logistics in 120+ countries.',
    items: [
      'Seaworthy Plywood Crating',
      'Customs Documentation',
      'Multi-Currency Invoicing',
    ],
  },
  related: {
    title: 'Similar Precision Equipment',
    items: [
      {
        href: '/products/soft-serve-machines/icm-s120-single-flavor',
        eyebrow: 'COUNTERTOP SERIES',
        title: 'ICM-S120 Single Flavor',
        description: 'Ultra-compact footprint for convenience stores.',
        image: '/product-detail-similar-1.png',
      },
      {
        href: '/products/soft-serve-machines/icm-p900-triple-flavor',
        eyebrow: 'INDUSTRIAL SERIES',
        title: 'ICM-P900 Triple-Flavor',
        description: 'Maximum throughput for stadiums and parks.',
        image: '/product-detail-similar-2.png',
      },
      {
        href: '/resources/maintenance-guides',
        eyebrow: 'RESOURCE CENTER',
        title: 'Maintenance Guides',
        description: 'Full library of CAD files and service manuals.',
        image: '/product-detail-similar-3.png',
      },
    ],
  },
  faq: {
    title: 'Technical Inquiry FAQ',
    items: [
      {
        question: 'What is the required voltage for international installation?',
        answer:
          'The standard configuration is 220V/50Hz. However, our manufacturing line can customize units for 110V/60Hz (North America) or 220V/60Hz (Middle East/South America) upon request during the order phase.',
        defaultOpen: true,
      },
      {
        question: 'Does the machine include a self-cleaning cycle?',
        answer: '',
        defaultOpen: false,
      },
      {
        question: 'What is the warranty period for the compressor?',
        answer: '',
        defaultOpen: false,
      },
    ],
  },
  cta: {
    title: 'Ready to integrate PRO-TAYLOR into your workflow?',
    description:
      'Speak with a technical specialist today for a customized quote, including shipping and volume discounts for fleet orders.',
    placeholder: 'Corporate Email Address',
    buttonLabel: 'START INQUIRY',
  },
} as const

export default productDetailFixture
