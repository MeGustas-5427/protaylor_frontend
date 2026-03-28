import { ROUTES } from '@/fixtures/stitch/site'

export const categoryFixture = {
  slug: 'soft-serve-machines',
  heroEyebrow: 'Precision Engineering',
  heroLineOne: 'Soft Serve',
  heroLineTwo: 'Ice Cream Machines',
  heroPrimaryLabel: 'View Series',
  heroPrimaryHref: ROUTES.product,
  heroSecondaryLabel: 'Technical Catalog',
  heroSecondaryHref: ROUTES.article,
  overviewName: 'Soft Ice Cream',
  modelCount: '42 Models',
  overviewImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA3xXp9gYBhkKD5wQ1UYrDAKFzQ_B5-_pUMru9FBp4D3SQqVmxs4tR9PIkkrgbSI1JyO7P3D6UjJNigZblE7DLwz7z8F2ZWbL2sZkPMaQ9anWCNuu1YiL4ZuEXC4apRQVyq-izc_wUiO008wGVx1jSbFDdIDlIeSZFVOplWMMpp3G45n8qCF-ywXq0_Gil-YA4_5DIBKzibKRo_e_ITz397EsA5-fjfESFBlVwNaPND0ZQE8S1MIrV79Tq155ZLRyCn-Vlzyl8WssE',
  overviewAlt: 'Soft ice cream product category overview',
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

export const iceLollyCategoryFixture = {
  ...categoryFixture,
  slug: 'ice-lolly-machines',
  heroLineOne: 'Ice Lolly',
  heroLineTwo: 'Production Machines',
  heroPrimaryHref: ROUTES.contact,
  overviewName: 'Ice Lolly',
  modelCount: '28 Models',
  overviewImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCSUa9c9h-Y-OcvxuV87ynNRYkJ4MKH14y6LmdFMxSFWVeWvVrJMoc2Tp6Yrtr8KSqhNUfHwMiLql8fIbvJRtmT-6L0SjX0SRIgnJuN8M-40ZEgPAGhAiC1LKxkhMlO2PCnQNYVIuoea8G3TIkrZdEOhJpmncNQ2wNQlw8oi6Z-J0fzz4eN61AK-v4bRG0-UtlOCXRFVOL-fmbbckY65YGWYxwkCu9y23OXj2IeLqtzY2xg5XHzL11Nl2i3ulkLbmQ96NcQ7_lgjk0',
  overviewAlt: 'Ice lolly product category overview',
  title: 'Ice Lolly Machines',
  description:
    'Rapid brine-tank freezing systems, mold handling lines, and demolding equipment built for frozen novelty brands and high-output production schedules.',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCSUa9c9h-Y-OcvxuV87ynNRYkJ4MKH14y6LmdFMxSFWVeWvVrJMoc2Tp6Yrtr8KSqhNUfHwMiLql8fIbvJRtmT-6L0SjX0SRIgnJuN8M-40ZEgPAGhAiC1LKxkhMlO2PCnQNYVIuoea8G3TIkrZdEOhJpmncNQ2wNQlw8oi6Z-J0fzz4eN61AK-v4bRG0-UtlOCXRFVOL-fmbbckY65YGWYxwkCu9y23OXj2IeLqtzY2xg5XHzL11Nl2i3ulkLbmQ96NcQ7_lgjk0',
  configurations: categoryFixture.configurations.map((configuration) => ({
    ...configuration,
    href: ROUTES.contact,
  })),
  floatingCta: 'Request Ice Lolly Quote',
} as const

export const slushCategoryFixture = {
  ...categoryFixture,
  slug: 'slush-freezer-machines',
  heroLineOne: 'Slush',
  heroLineTwo: 'Freezer Machines',
  heroPrimaryHref: ROUTES.contact,
  overviewName: 'Slush',
  modelCount: '15 Models',
  overviewImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDR5V3LeOGZf-vy0c_RctWFWuif9npy4YlcO0mgV-ece9PwkviaIzAi4iwPWROXMKweH2QlTNW3J4suFvaOdpLfP4tphct4S-8YPx1ZqRV4H8MujP68AHt7Lt3-dinCoY-vNe7MIY3cSpa3s52c8rQCylcmYnR8-SRuWF-wrxwhykv4aBppWLKsAbjE2FSIqyaIwmAg1hxZUYvRej3dw5ghZnC8kEeqLr52qZD4Zm34-SGJWi_saaX9DqbmQYpTD2YOCVezTr9qj2o',
  overviewAlt: 'Slush freezer product category overview',
  title: 'Slush Freezer Machines',
  description:
    'Durable auger-driven slush and frozen beverage systems developed for fast-moving beverage programs, amusement venues, and convenience retail.',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDR5V3LeOGZf-vy0c_RctWFWuif9npy4YlcO0mgV-ece9PwkviaIzAi4iwPWROXMKweH2QlTNW3J4suFvaOdpLfP4tphct4S-8YPx1ZqRV4H8MujP68AHt7Lt3-dinCoY-vNe7MIY3cSpa3s52c8rQCylcmYnR8-SRuWF-wrxwhykv4aBppWLKsAbjE2FSIqyaIwmAg1hxZUYvRej3dw5ghZnC8kEeqLr52qZD4Zm34-SGJWi_saaX9DqbmQYpTD2YOCVezTr9qj2o',
  configurations: categoryFixture.configurations.map((configuration) => ({
    ...configuration,
    href: ROUTES.contact,
  })),
  floatingCta: 'Request Slush Machine Quote',
} as const

export const gelatoCategoryFixture = {
  ...categoryFixture,
  slug: 'gelato-batch-freezers',
  heroLineOne: 'Gelato',
  heroLineTwo: 'Batch Freezers',
  heroPrimaryHref: ROUTES.contact,
  overviewName: 'Gelato',
  modelCount: '36 Models',
  overviewImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBNLtcGo1taIKNBfav4T2IldFaXBizwMFp6rK7tjB2VymOYKHVvVUILUkVZyx1MrVe-RadcYDKJ5LwK2PU9bmVJ5Iz9SgzuwdfayvV2t2XlJ-1ZKRtXaFoUDbWFHB6xW6banPxuGE8FAzpHdbIEyHaxGmY00B8DokIoXnip1yCpmsouM-DF37OSLEMo4W8zxMefnALKPuXt5DfIiU_0Izc8CqFvgjUEKuw3JY0MeBjVMQdKHlIwLSzt-UHmcvQb0Iwt3dmpy_FG0GY',
  overviewAlt: 'Gelato batch freezer product category overview',
  title: 'Gelato Batch Freezers',
  description:
    'Low-speed, high-control batch freezers designed for artisanal gelato labs, premium dessert programs, and texture-first frozen dessert production.',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBNLtcGo1taIKNBfav4T2IldFaXBizwMFp6rK7tjB2VymOYKHVvVUILUkVZyx1MrVe-RadcYDKJ5LwK2PU9bmVJ5Iz9SgzuwdfayvV2t2XlJ-1ZKRtXaFoUDbWFHB6xW6banPxuGE8FAzpHdbIEyHaxGmY00B8DokIoXnip1yCpmsouM-DF37OSLEMo4W8zxMefnALKPuXt5DfIiU_0Izc8CqFvgjUEKuw3JY0MeBjVMQdKHlIwLSzt-UHmcvQb0Iwt3dmpy_FG0GY',
  configurations: categoryFixture.configurations.map((configuration) => ({
    ...configuration,
    href: ROUTES.contact,
  })),
  floatingCta: 'Request Gelato System Quote',
} as const

export const frozenDrinkCategoryFixture = {
  ...categoryFixture,
  slug: 'multifunction-frozen-drink-machines',
  heroLineOne: 'Multifunction',
  heroLineTwo: 'Frozen Drink Machines',
  heroPrimaryHref: ROUTES.contact,
  overviewName: 'Multifunction',
  modelCount: '54 Models',
  overviewImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuApEAGJZuRPwAhgTwjHxGBJLx5jFpGvH_bKlnrhzmhapF4XUMyTuPkbXsSoLQyzAkgexz5tdPwU6d8u4K--kOqfzjZLDGsmKjIcl6fh1ZyfZpxTkVTwG-DOnN905UCxA76-tjGNrIOJx0JavTp9JqMTp_3BRd68ERqwQs9bU710y0tE4O9IuFJNRzJHJiVBePyc3lSTomnaAmBJxj_hrhEYnSVc8CBlwGBIfBnkK17f8KPoSvp6Z0LaZokI7jRYHxk3gmVMQXYUim4',
  overviewAlt: 'Multifunction frozen drink product category overview',
  title: 'Multifunction Frozen Drink Machines',
  description:
    'Hybrid beverage systems for granita, frozen cocktails, and mixed-format dessert menus where menu flexibility matters as much as capacity.',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuApEAGJZuRPwAhgTwjHxGBJLx5jFpGvH_bKlnrhzmhapF4XUMyTuPkbXsSoLQyzAkgexz5tdPwU6d8u4K--kOqfzjZLDGsmKjIcl6fh1ZyfZpxTkVTwG-DOnN905UCxA76-tjGNrIOJx0JavTp9JqMTp_3BRd68ERqwQs9bU710y0tE4O9IuFJNRzJHJiVBePyc3lSTomnaAmBJxj_hrhEYnSVc8CBlwGBIfBnkK17f8KPoSvp6Z0LaZokI7jRYHxk3gmVMQXYUim4',
  configurations: categoryFixture.configurations.map((configuration) => ({
    ...configuration,
    href: ROUTES.contact,
  })),
  floatingCta: 'Request Frozen Drink Quote',
} as const

export const iceMakersCategoryFixture = {
  ...categoryFixture,
  slug: 'ice-makers-related-equipment',
  heroLineOne: 'Ice Makers',
  heroLineTwo: 'Related Equipment',
  heroPrimaryHref: ROUTES.contact,
  overviewName: 'Ice Makers',
  modelCount: '22 Models',
  overviewImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Xj984hT85QDHtiVVPlOE6tcNvdwe8lvnsM4GyOpFdDLQiOYe6LlAotVmIyU8pwWJri3Upzgs4L0eUK_rMznXW8Ai0ggrhpqjm7ejwx2QFx31jvW5_-Khsy4JMaSytzSPu2y1xXMqyprEoJlC8lWjNA3teB76ELdzQuD8soLt-xMX2Z40vQtrHiwlIHdGRtzMB_QPA8Aoy2l9mYAVBghD-jC495R6XnV393vPnf4ZIog2jZbK0PeBqCVScGiFyA3KF3dsr8EWXI8',
  overviewAlt: 'Ice makers and related equipment product category overview',
  title: 'Ice Makers & Related Equipment',
  description:
    'Supporting systems for ice generation, holding, and refrigerated prep infrastructure built to complement beverage and dessert production lines.',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Xj984hT85QDHtiVVPlOE6tcNvdwe8lvnsM4GyOpFdDLQiOYe6LlAotVmIyU8pwWJri3Upzgs4L0eUK_rMznXW8Ai0ggrhpqjm7ejwx2QFx31jvW5_-Khsy4JMaSytzSPu2y1xXMqyprEoJlC8lWjNA3teB76ELdzQuD8soLt-xMX2Z40vQtrHiwlIHdGRtzMB_QPA8Aoy2l9mYAVBghD-jC495R6XnV393vPnf4ZIog2jZbK0PeBqCVScGiFyA3KF3dsr8EWXI8',
  configurations: categoryFixture.configurations.map((configuration) => ({
    ...configuration,
    href: ROUTES.contact,
  })),
  floatingCta: 'Request Ice Equipment Quote',
} as const

export const categoryFixtures = [
  categoryFixture,
  iceLollyCategoryFixture,
  slushCategoryFixture,
  gelatoCategoryFixture,
  frozenDrinkCategoryFixture,
  iceMakersCategoryFixture,
] as const

export type CategoryFixture = (typeof categoryFixtures)[number]

export function getCategoryFixtureBySlug(slug: string) {
  return categoryFixtures.find((category) => category.slug === slug)
}

export const productFixtures = [productFixture] as const

export type ProductFixture = (typeof productFixtures)[number]

export function getProductFixtureBySlug(categorySlug: string, productSlug: string) {
  return productFixtures.find(
    (product) =>
      product.categorySlug === categorySlug &&
      product.slug === productSlug,
  )
}

export const productsOverviewFixture = {
  eyebrow: 'Manufacturing Excellence',
  title: 'Precision-Engineered Frozen Dessert Systems',
  description:
    'Explore our master collection of commercial equipment, designed for high-volume production and architectural durability. Serving 20+ categories and 300+ machine models globally.',
  primaryCtaLabel: 'Request Master Catalog',
  primaryCtaHref: ROUTES.contact,
  secondaryCtaLabel: 'Compare Equipment Lines',
  secondaryCtaHref: ROUTES.category,
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuApnMncHh1Oq6eRIN27y8fEGYJneuQiZlFUNH8lCOD-h_7r1lNOfUO2MyCcVBJ75H7BHTzNSnGrOt67pplbM7NYi4e-PVC8vqcg39BVW8P_YJsZsQTjyNtnF1X1B6Dp1zVgr4uO-JHhdB7uKs8iNmg6P3f77O3g0uvc-NQ3kZXHy44iFLUqLvlYplHIGwuRtb9db_K4PF8oKNxD27oDher1itUYkLQlizdx4sDdWgi5eoHKg7Sp5H23AeDCylesKLXUBdSpBfMwQIo',
  heroAlt: 'Featured PRO-TAYLOR soft serve machine',
  featuredLabel: 'Featured Model',
  featuredTitle: 'The PT-900 High-Output Series',
  categories: categoryFixtures.map((category) => ({
    name: category.overviewName,
    count: category.modelCount,
    image: category.overviewImage,
    alt: category.overviewAlt,
    href: `/products/${category.slug}`,
  })),
  buyerPaths: [
    {
      title: 'Distributors & Wholesale',
      copy:
        'High-volume sourcing with preferential tier pricing and localized spare-parts support.',
      href: ROUTES.solutionDistributor,
      tone: 'primary',
    },
    {
      title: 'OEM & Private Label',
      copy:
        'Bespoke manufacturing solutions for proprietary equipment lines under your brand.',
      href: ROUTES.solution,
      tone: 'secondary',
    },
    {
      title: 'Cafe & Dessert Business',
      copy:
        'Curated selections for boutique operations and compact retail footprints.',
      href: ROUTES.solutionCafe,
      tone: 'outline',
    },
  ],
  selectionGuide: {
    columns: ['Metric', 'Soft Serve', 'Ice Lolly', 'Slush'],
    rows: [
      ['Output Capacity', '18-60L / Hour', '2,000-10,000 Pcs / Day', '12-45L / Batch'],
      ['Footprint', 'Countertop / Floor', 'Industrial Floor', 'Countertop Only'],
      ['Overrun Control', 'Precision (Gravity/Pump)', 'N/A (Solid Mold)', 'Fixed Agitation'],
      ['Maintenance Scale', 'Daily Cleaning', 'Weekly Deep-Clean', 'Rinse & Sanitize'],
    ],
  },
  spotlight: {
    eyebrow: 'Series Spotlight',
    title: 'The New PT-900 Series',
    copy:
      'Redefining high-volume soft serve production with dual-compressor cooling and intelligent texture-mapping software. Built for the most demanding global environments.',
    href: ROUTES.product,
    ctaLabel: 'Read Technical Profile',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEyj7Y2LVhgTbY4beRO2lphdDY3kJr1fyCVMLTXxOtsIBiHNFDSFhZ-37z6DiXqRBWGwT_2boa5hjgPBwJ9wzrxwDeG5W0T-zhrm1Vd0evUA1QUivkMeixd24Fmk-KbfQ9sT7pqxOAdpuVvsVWZAQXxL0s-dDYZl_vtnkHf8eGqjzrMcSNK_GHP_hxYZW_YtJKucXdlpazsm0_S57etAkXchRTukCJDEGN93qIIpOEA2KIVTd_p3jjF4C3XumebLMiiD9pZL4yMsU',
  },
  resources: [
    {
      eyebrow: 'Logistics',
      title: "The Distributor's Guide to Importing High-Volume Equipment",
      copy:
        'A technical breakdown of compliance standards, freight optimization, and tariff navigation for commercial machinery.',
      href: ROUTES.resources,
    },
    {
      eyebrow: 'Maintenance',
      title: 'Maximizing Uptime: Seasonal Service Protocols for Soft Serve Units',
      copy:
        'Professional maintenance schedules that extend machine lifespan through preventive calibration.',
      href: ROUTES.article,
    },
  ],
  faqs: [
    {
      question: 'What are the standard lead times for bulk orders?',
      answer:
        'Standard manufacturing for batch orders typically ranges from 15 to 30 days. High-volume OEM projects may require 45-60 days depending on component customization.',
      defaultOpen: true,
    },
    {
      question: 'Do you provide CE and UL certification documentation?',
      answer:
        'All PRO-TAYLOR equipment is CE certified as standard. UL and NSF certifications are available for specific models designated for the North American market.',
    },
    {
      question: 'What is your global warranty policy for distributors?',
      answer:
        'We offer a 1-year comprehensive warranty on parts, with an extended 3-year warranty on compressors and spare-parts support for bulk orders.',
    },
    {
      question: 'Can machines be customized for local power standards?',
      answer:
        'Yes, our engineering team configures equipment for 110V/60Hz, 220V/50-60Hz, or 3-phase power requirements for international deployments.',
    },
  ],
  cta: {
    title: 'Ready to scale your production?',
    copy:
      'Speak with a manufacturing specialist today to discuss your technical requirements and custom volume pricing.',
    contactOptions: [
      { label: 'Email Engineering', href: ROUTES.contact, icon: 'mail' },
      { label: 'Direct WhatsApp', href: ROUTES.contact, icon: 'chat' },
    ],
    form: {
      companyPlaceholder: 'Company Name',
      businessTypeOptions: ['Distributor', 'OEM Project', 'Retail Chain'],
      volumePlaceholder: 'Estimated Monthly Volume',
      submitLabel: 'Submit Manufacturing Inquiry',
    },
  },
} as const
