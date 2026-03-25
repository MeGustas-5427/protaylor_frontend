import { ROUTES } from '@/fixtures/stitch/site'

export const categoryFixture = {
  slug: 'soft-serve-machines',
  title: 'Soft Serve Ice Cream Machines',
  description:
    'High-capacity, floor-standing and countertop solutions engineered for consistent texture and rapid recovery times. Designed for high-traffic commercial environments.',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBDDYRX7iow2RJZJOXRATklnt3VgwWaijpBEpQ8vgS_1Ij05K300WQBD_GJvdSosZaZoOlawwnqoIv-1NHVU9MgQQrCzKL7ngFhNlh5RWNQ-6c4wv0Ynpf7EnXpujiWoTrYMSi_Z5gAMqrLTHs5BAn-_56KhN1fg8JAUxKPN2kpG991rRTfqOe0kZijISzIHri0H9xVstvulLgVW-foob73f6QJw8YarcDVEp5yL2QdYay0GUqOw9ee0s_z1zBu1R8eIcjGUtKGMMY',
  audienceCards: [
    {
      icon: 'storefront',
      title: 'Artisanal Cafes',
      copy: 'Compact countertop units that deliver premium texture without compromising valuable floor space. Perfect for low-to-medium volume.',
      tone: 'light',
    },
    {
      icon: 'restaurant',
      title: 'High-Traffic Quick Service',
      copy: 'Double-flavor floor units with air pumps for maximum overrun and rapid recovery during peak demand periods.',
      tone: 'primary',
    },
    {
      icon: 'factory',
      title: 'Industrial Food Prep',
      copy: 'High-output pasteurizing units designed for 24/7 operation and minimal maintenance downtime.',
      tone: 'light',
    },
  ],
  comparisonRows: [
    {
      model: 'Taylor-C100 Elite',
      subtitle: 'Countertop / Single Flavor',
      production: '18 - 22 L/H',
      cylinder: '1.7 L',
      cooling: 'Air Cooled',
      phase: 'Single (220V)',
    },
    {
      model: 'Taylor-F500 Pro',
      subtitle: 'Floor / Twin Twist',
      production: '45 - 55 L/H',
      cylinder: '3.2 L x 2',
      cooling: 'Air/Water Hybrid',
      phase: 'Three (380V)',
    },
    {
      model: 'Taylor-X900 Max',
      subtitle: 'Industrial High Output',
      production: '90+ L/H',
      cylinder: '5.0 L x 2',
      cooling: 'Water Cooled',
      phase: 'Three (380V)',
    },
  ],
  configurations: [
    {
      name: 'T-Elite 200 Series',
      badge: 'Best Seller',
      badgeTone: 'primary',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC967tLsc6tq_r99W0GTOXv5c68l7oSqUJnbYnvC4zx9rnSbXzq8gu5xxTRe12y_7wtTlPrM0BnZdeiRi7gtB8OENsNnJkfJbr8gMDJ2G68jGEw_6j5n4DiJeo3_8ZyUbQ9ied3qclCcqPFn8lewMzZQGVJGkl7aSRQkXv6moDfqe4pPjjqHzAXFklp6tdeMlRDoF4ZgHBFXq55LewiGq0bS805yCDUU-ykDRVd0_xqBniJTbtmxB6iHCR1UxuWFoC49D7o_nWYS9o',
      alt: 'Commercial Ice Cream Machine',
      copy: 'Twin twist floor standing model with intelligent touch control and gravity feed system.',
      href: ROUTES.product,
    },
    {
      name: 'C-Compact 100',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAmwklGOxZ7e1C9X3aldb5tKCXMDh_n2OA4IMha3_n3i7fIyC-wiNvE9EiinUpLo1Mnpxc5I1upJurPdSnVSxoFpAHR9-IQafv8Depoei0iLAohU6cjN5BbKeSoPrdaKArSmGZlQ16AQv34Egb9bChx7O90y4WBp0NNCG8xMl3k5L4UYREkXuG2tdB28nyOFhjocV4GNSRELgga4fKaaa2w2mcOp8xLGMt5lmoU-1uzfTdIexD56p4q3CvvR7xMFMH2omUuhGCj-P0',
      alt: 'Compact Countertop Machine',
      copy: 'High-efficiency single flavor unit designed for boutique kiosks and bar-top service.',
      href: ROUTES.product,
    },
    {
      name: 'X-Industrial 900',
      badge: 'High Capacity',
      badgeTone: 'secondary',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCAw48T7eCxfViOxPL04IfGNiLYPp3VtmybNgUvqQ5bUYUstrMB4rAq1BkAxZxr-py_BWS7gjej45tIsCHbtCxrk47_gGTYAPQoFg2ZLA0-bbR650gOXbDN7nhQM3JOUiioBoVWzeJXpHAguNWee82td9zWqMBnstylYSm0S1iE5GH6A3Ol_KKTtTp6gANS9L5PkrRPju8TtJUkMtiVV01AG4iywmcKCoyhVmtS4P-hCBPpxRto9y6tdL-BRUxwwV_Fu83a6LvdeU0',
      alt: 'Industrial Grade Machine',
      copy: 'Massive output capabilities with heat-treatment cleaning cycles for reduced maintenance.',
      href: ROUTES.product,
    },
  ],
  buyingGuide: {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDH748o06q9Lh-L_GmaWPkKgBehskf9IAt7ocS_vcJI7Iu34eqYBeyJae7xkokydkezqtc6M6hvaeeq1Dzke6-lQq6kRjd_wNyzJpiPDxOweeJ_3VDPg-M1f2n7f1JU-ADyuJiZ888fvLXcMMaSIyWzlifoXUMp_hWdXj-pesrZXyLWysCdsRj-hcpxo4-eQnPYx_iYIWUBnF7dVd2n510hbPHWBVjz9VMgaJdsiBhuZ9CAN6qmqE6jFrDSZ5aPinm_ncUCUBzFaNg',
    quote: '"Precision is the difference between profit and waste."',
    quoteBy: '— Lead Engineer, Pro-Taylor',
    factors: [
      {
        number: '01',
        title: 'Overrun Control',
        copy: 'Ensure the machine provides consistent air incorporation. Higher overrun (up to 50%) increases profit margins and improves product creaminess.',
      },
      {
        number: '02',
        title: 'Recovery Time',
        copy: 'In high-traffic environments, the speed at which the machine returns product to serve temperature after a draw is critical for throughput.',
      },
      {
        number: '03',
        title: 'Cleaning Complexity',
        copy: "Look for 'Simplify-Wash' technologies or heat-treatment cycles that extend intervals between manual deep cleans from 3 days to 14 days.",
      },
    ],
  },
  expertResources: [
    {
      title: 'Profitability Calculator',
      copy: 'Estimate ROI based on your expected daily volume.',
      cta: 'Access Tool →',
      href: ROUTES.resources,
    },
    {
      title: 'Maintenance Guide',
      copy: 'Daily and weekly checklist for machine longevity.',
      cta: 'Download PDF →',
      href: ROUTES.article,
    },
  ],
  commonInquiries: [
    {
      question: 'What is the difference between gravity and pump machines?',
      answer:
        'Gravity machines use natural flow to fill cylinders, resulting in denser product. Pump machines inject air under pressure, creating a lighter texture and higher profitability due to increased overrun.',
    },
    {
      question: 'Can these machines handle vegan/dairy-free mixes?',
      answer:
        'Yes, our high-torque motors and adjustable cooling settings allow for perfect consistency with almond, oat, and coconut based soft serve mixes.',
    },
    {
      question: 'What is the standard lead time for factory orders?',
      answer:
        'Standard configurations ship within 14 business days. Custom OEM branding or specialized electrical requirements typically require 6-8 weeks for precision fabrication.',
    },
  ],
  floatingCta: 'Request Production Quote',
} as const

export const productFixture = {
  categorySlug: categoryFixture.slug,
  slug: 'icm-t836-twin-system-soft-serve-machine',
  title: 'ICM-T836 Twin-System Soft Serve Machine',
  series: 'Precision Manufacturing Series',
  description:
    'A dual-compressor powerhouse designed for high-output commercial environments. Featuring independent cylinder control, the T836 ensures consistent texture and temperature even during peak operational hours.',
  gallery: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBWLK5VQaLBPFglkZQERQgAJdBRQkEGzgYjaT0DD-ES2tVU3ZNAj0qZt3Ylp7qSpOyIps56emwyqvJJO1Ui7WK7L1EQEPJB6hS7RYQ0hH7qefjhgexjpIb6-reIUxis3_C48dtCISw6H27jisoXAn2ZFTGQmGciAaY_w_4ElZySG-nM-nCobZJ9Xu6LO-InLR9QMBUuk_hSYwgGSWbrKH8Y5agxPP9FIqhnBL4mIseMi0AthF4RQ0C1KN7VNrLbXbJgWU4ejdYjrwo',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCkoPe7py_9EYM9Mq7csZUsJmpTfrC1eJpMIAZnAnECk4Oyi3LYWA6F2yMS76hQqXXtZEcsxxhHbxA3EkVyKgTsQXs4nDMGffwa887eq0l1Ehtv8LrOHQBtZNbc3mzshEPVAoQeO9Jbn9C5tVvn85i7LiUloP_CS2T4_s5w3j2EGLje2viTpMZPmryCTkinCm6fmfw9XaeMW3LOEf4rDJ48-tmvSRyZS8V0HEZdRB13jaVTRMn12cJZ7cKYTqcV5o8L6nJdWJxAtso',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCg9934uMv_QdZYtbPBETS__3-QLlUYX_t5tJSeWzWa27a2Es70UcvOac1_z43bhvK8oZQljNK1HfwGnsPKlxvqmLPJc92bFGvJWzJBGIqm4-b8hIku-JnteKCB_fVtCq9na2xTSPo1K_hdOk70uFgEJWdomkJIXq3falqD5-dXdFzn39-7_dAQ2PZyieTwK79EHd0iT450LQW4kmglKMWFaq0v_J6v2cPBGkEGPooyRl97D_aQjxPfOulYMg4XcSvZMEs1zcQfRH4',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDAeSHWLK1T2cdVBtJIaEFOyGoRTjOWAL-kfEzq7Cckw6f4naxF_gWxXBVpFzICyrLhW9YxUwESk6t-P-cO4QbfRS8pDgzvN5WjY8lbZLT9MnAMQIMUcaqc0Nmnn8w6pxefrLURLXVKThwvBNzrcnyL_CYTyhV0K6GonjK33ptj-cIl5DjkLHmICmd3K5P45tE_FPRxdQGvnvw-ZO4HwxM0sVlNbZ3e0t5hzri97Go-4XgZFrp5H5vp24P6yG-5B8-_GD_Ec7qzmPE',
  ],
  metrics: [
    { label: 'Production Capacity', value: '36-40 L/Hour' },
    { label: 'Hopper Volume', value: '2 x 6.5 Liters' },
    { label: 'Cooling System', value: 'Air + Pre-cooling' },
    { label: 'Compressor Type', value: 'Embraco Aspera' },
  ],
  useCases: [
    {
      icon: 'restaurant',
      title: 'High-Volume QSR',
      copy: 'Engineered for quick-service restaurants requiring consistent delivery of 400+ servings per peak window without recovery delay.',
    },
    {
      icon: 'hotel',
      title: 'Hospitality & Buffet',
      copy: 'Silent operation and elegant stainless finish make it ideal for front-of-house placement in premium hospitality environments.',
    },
    {
      icon: 'icecream',
      title: 'Artisan Dessert Bars',
      copy: 'Precise air-incorporation controls allow for premium dense textures or light, airy yogurt-style output.',
    },
  ],
  specRows: [
    ['Dimensions', '540 x 770 x 1460 mm'],
    ['Net Weight', '168 kg'],
    ['Power Supply', '220V / 50Hz or 380V / 60Hz'],
    ['Rated Power', '2.8 kW'],
    ['Refrigerant', 'R404a'],
    ['Cylinder Volume', '2 x 2.0 L'],
    ['Hopper Capacity', '2 x 6.5 L'],
    ['Overrun Control', 'Air Pump Optional'],
  ],
  customization: [
    'Custom panel finishes and branding applications for OEM programs',
    'Localized voltage packages and compressor sourcing for export markets',
    'Optional pasteurization, air-pump, and pre-cooling feature sets',
  ],
  support: [
    'Factory-direct lead time planning and export packing support',
    'Commissioning guidance, video troubleshooting, and spare-parts planning',
    'Dimensional drawings, carton specs, and loading assistance on request',
  ],
  relatedProducts: [
    { name: 'Taylor-F500 Pro', href: ROUTES.product },
    { name: 'Taylor-C100 Elite', href: ROUTES.product },
    { name: 'Taylor-X900 Max', href: ROUTES.product },
  ],
  relatedResources: [
    { name: 'How to Choose the Right Soft Serve Machine', href: ROUTES.article },
    { name: 'Commercial, Wholesale & OEM Solutions', href: ROUTES.solution },
  ],
  faqs: [
    {
      question: 'Can the T836 be configured for OEM branding?',
      answer:
        'Yes. The chassis, panel finish, branding plate, and packaging system can all be adapted for qualified OEM and wholesale programs.',
    },
    {
      question: 'What is the typical lead time for this configuration?',
      answer:
        'Typical production lead time is 14-21 business days, followed by route-specific export scheduling and freight coordination.',
    },
    {
      question: 'Is this model suitable for front-of-house installation?',
      answer:
        'Yes. The clean stainless execution and controlled operational noise make it appropriate for premium dessert bars and hospitality counters.',
    },
  ],
} as const
