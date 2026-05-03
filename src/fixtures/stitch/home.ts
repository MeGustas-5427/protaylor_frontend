import { ROUTES } from '@/fixtures/stitch/site'

export const homePageData = {
  hero: {
    image: '/images/home/gelato-batch-freezer-hero-desktop.webp',
  },
  mobileHero: {
    image: '/images/home/gelato-batch-freezer-hero-mobile.webp',
    eyebrow: 'Established 1984',
    title: 'Precision Engineered for the Modern Dessert Bar.',
    copy:
      'Architectural aesthetics, consistent output, and export-ready manufacturing for premium frozen dessert operators.',
  },
  mobileFeature: {
    eyebrow: 'Core Capability',
    title: 'Signature Soft Serve Systems',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKN-_XMe7FErFvuKCejgrCGiabgrYxB92_TaxvTjc9IC3LEHledgPpQSkJXZTQebfshetpW8saFNoQtHlQkfAkGzqGr0i6rmNXDjGwSueSUOZIFilzBSBLg15srV4ukxB4K7BJfouKXkV0laFC-HiskgB9giqhoP1uG2MiOX6EAswR9f-8iMBrtqdiM4N5FN5atEsWTWx-MHKW7srI1Br4tLUJ20OL7PVJaWXmn7S3pGUrMV7w49QEa472X9eD4beEzu-jnnd94lg',
    cta: 'Explore Specifications',
    href: ROUTES.products,
  },
  mobileHighlights: [
    {
      eyebrow: 'Compliance',
      title: 'CE / Export Ready',
      icon: 'verified_user',
    },
    {
      eyebrow: 'Scale',
      title: 'OEM / Global Supply',
      icon: 'public',
    },
  ],
  mobileSpecs: [
    ['Lead Time', '14-21 Days'],
    ['Response', '<4 Hours'],
    ['Markets', '80+ Countries'],
    ['Support', 'Factory Direct'],
  ],
  mobileCta: {
    title: 'Start Your Project',
    copy:
      'Connect with our engineering team for a technical recommendation and tailored factory quote.',
    primary: 'Request Formal Quote',
    secondary: 'Contact Engineering',
  },
  buyerPaths: [
    {
      title: 'Commercial & Wholesale',
      copy: 'Industrial solutions for global distributors and high-volume manufacturers.',
      cta: 'OEM Solutions',
      href: ROUTES.solution,
      image:
        '/images/home/ChatGPT%20Image%20May%203,%202026,%2009_30_07%20PM.webp',
      tone: 'bg-surface-container-low',
    },
    {
      title: 'Shop & Cafe',
      copy: 'Boutique equipment designed for precision, aesthetics, and reliability.',
      cta: 'Retail Catalog',
      href: ROUTES.solutionCafe,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDlGPqjCbjV3pBQOTHdH7hQs92mg-cBEgFxxutbC4clJRz8Kj41RapIJV1-EbQvAEkPzrxb_5ej3ifFHccSXBRtKLCKPLLDKC1PpW8t8BtSSfIWATCVW1_p1cpKTXiXC_i_DgggSF1dpMBDSWd1bpVA63SpkcbGlekxXRIAje88tj6XTmAW2dB3vPe4KYYywFQxGpGsIHOLscE_6Ol5D_srNZPc0d78AfZE-7Wc7xn4CCfwZHSryrXzOnc-XvZT9su4VSKYh7PsZGI',
      tone: 'bg-surface-container',
      bordered: true,
    },
  ],
  categories: [
    {
      title: 'Soft Serve',
      copy: 'High-overrun technology for the smoothest textures in the industry.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAKN-_XMe7FErFvuKCejgrCGiabgrYxB92_TaxvTjc9IC3LEHledgPpQSkJXZTQebfshetpW8saFNoQtHlQkfAkGzqGr0i6rmNXDjGwSueSUOZIFilzBSBLg15srV4ukxB4K7BJfouKXkV0laFC-HiskgB9giqhoP1uG2MiOX6EAswR9f-8iMBrtqdiM4N5FN5atEsWTWx-MHKW7srI1Br4tLUJ20OL7PVJaWXmn7S3pGUrMV7w49QEa472X9eD4beEzu-jnnd94lg',
      href: ROUTES.category,
    },
    {
      title: 'Ice Lolly',
      copy: 'Rapid freezing systems for high-output popsicle production.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCHFtdjFtTlOUnAq7s6zw5-QF0dDhmXxLRxoCK3QU2MJCjjXSWgyHjfyE9-drgrX_NAWcI3286CMEhBfX5rxqAnk6kZPmB-9GC5HBlkWbToVCXXHlXlroOCLuot4pYJmt8GFLgOVubuzz0Ty4H4-r9r3bCpZy9JCtVl1CyR5mra0S_4cXyD4AQtIdPsmLYoDSKnMCRJ3XsllUhq9-5h6GBur2b-6jxiU8jcNVDSzyOrLFQcz26KaAMTmN6TgUI2q7wsG4lhEWfMVS4',
      href: ROUTES.categoryIceLolly,
    },
    {
      title: 'Slush',
      copy: 'Dual-tank versatility with precise temperature consistency.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAj4IY_ZfFQAxfZGmLNrUGmu2YkCymdckTkhqOzBjsaPJhdHP5uAf908TvUv7TRF6SVNt5OfzzzIqmrcl5z6HpoHCNcVLsrfW-5NIx1tC04QtYdBNXl7_0ZJGs4DN07AP8QWpcKpBzPRcYvb7kyDpeW5JGgop0PHXUFaF0zDHRF6e_0A_ZzxGUFRNvXBuobZ7fxUKGScIlxvx-UY4CWg1oNvw85ZQcd_4_qhwjq0h_wcmziHYR60j4IBOSTAgs6ctwrTiwUrnw2xMc',
      href: ROUTES.categorySlush,
    },
    {
      title: 'Gelato',
      copy: 'The traditional vertical batch freezer, re-engineered for 2024.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD3UVrC2H4HleSZyHNuFZg9KDD6I6XsRZCjoaIxEUI1qRaaJY4-jYyOLSonDgmO1S4AsFL9h8_hM1TVKZctpALRwKCy9dkFB_ZCfM2As2A54IRtzUu6BI94sxUo_xeL-wG4mDukZKAmlX22rvn8CZDDr65xTezFNYHVD9eXGv9Nd8WF_DFf9l9xHfdOEKQ80Ku9Dc8_U1a5imJN4Q5BU7CKk2xVseBI1AJ6h4feconWiatrySjkDoEVTO81rWzA1lv-pMBdFkCNWi8',
      href: ROUTES.categoryGelato,
    },
  ],
  valuePoints: [
    {
      icon: 'factory',
      title: 'Factory-Led Innovation',
      copy: "We don't just sell equipment; we manufacture it. Direct access to engineering teams for custom requests.",
    },
    {
      icon: 'local_shipping',
      title: 'Global Export Support',
      copy: 'Seamless logistics and customs handling for over 80 countries worldwide.',
    },
    {
      icon: 'verified_user',
      title: 'Rigorous QC Standards',
      copy: 'Every unit undergoes a 48-hour stress test before leaving our facility.',
    },
  ],
  valueImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB9s-73xYujL08LiCz89pfUDNKw6dMtiUZ3OKRq4vdhkivg0IyXpW2ZM1MYqzCZTT1CbOWveVgnfESEZ7-MGF6AfjiKwNHHUDocK1rEAvHspdbnYS-uxyb7w5grgO3bMawUSNi_HRYUtjFhw6H4xSu37XNiyNhybI3coGQ-QAQIjsOhKhr9C2p2xp6OFlWUQVZ3BycA-rDSyo6GO4rXcEG9jMJO6cUWTl9giBZ4u9HOlzyAsEx_VHAqOgGGIQABXVe2WCZeAJcdgJk',
  editorialBlocks: [
    {
      eyebrow: 'The Craft',
      title: 'The Art of Soft Serve',
      titleAccent: 'Soft Serve',
      copy: 'Discover how air-incorporation and precision cooling create the signature PRO-TAYLOR texture. Our machines are designed to preserve flavor integrity while maximizing yield.',
      cta: 'Read Article',
      href: ROUTES.article,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC9WJ0LO_AucroguYqa1XrNh1ktqWWDyEux4OytCG0rUiKYuzPCmPKGzjFGHvetsgN8orAt81NtYn-XHWuZtc8ru-mb799CAAxFV-nlhQoWWTt3gNOFxrQpWGZT_g7OUyipJGTyGEewOWApZpy0Y_UFiTDFzwfqpqcGLpeFS9iyf9b2rmVSltfV4je3_kxLhv3yHLiMSTDZZWN48Bb2rb01MB2pUkzvQm3PBH-L32Q0fskV-0fdWlLc72FylV5GF4ROi47WBBVFqU0',
      reverse: true,
      panelTone: 'surface',
    },
    {
      eyebrow: 'Inside the Factory',
      title: 'Our Manufacturing Philosophy',
      titleAccent: 'Manufacturing Philosophy',
      copy: 'From CNC precision milling to hand-finishing stainless steel panels, our process blends robotic accuracy with human oversight for unmatched durability.',
      cta: 'Watch Film',
      href: ROUTES.company,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAIiZ4RtTMLVeyLSeNnoeG-vBbPlg4-4Cr9gLOrnYq1nhBY6PTCY8JiGKqDdsjrh8UQmEV4MSP11C-4xrJybNxaYsxHEd2rPOcN90zkmGVwMi6D6PqHF_DUYHNHi2Wb7Ldu2ZnwJnpKzqA1eYDW9dkrjm4V8hoqOOzlbhoWMaBVmcXRvdzTJUGa2nG3T8iH4jJ8Ja48rF3_8-lBYcbB94AKHQQ3SDdHWm5CqOPiKcb9wKd-CxOfE7-bDnwDWq3SLgZOWxWM1CudtQQ',
      reverse: false,
      panelTone: 'low',
    },
  ],
  testimonial: {
    quote:
      '"PRO-TAYLOR has been our exclusive manufacturing partner for six years. Their commitment to CE compliance and robust shipping logistics makes them the most reliable supplier in the Asian market."',
    name: 'Marcus Velling',
    title: 'Global Operations, EuroIce Systems',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfXekJhQ0XCEX3_FNiwjujMS0PspxeomIfDs4geUYN7ZXYBFOsI1C9SSdsYSNMtEiaRzz2kBdURU2OqzSufN7UuWtne5Syr1woLfrG1Lb3l4bMpOrHwpHh-qZQWfjv9hVKrhjOylqrE27_a_pLDjgtUen6yrLeoJI64n3KebjJhX6Fh8wst927oQf3AzxXBrwihDtDDYmWyiFRaXFxfYXXIPWvHs4cqo7NcCsK30t4edVq9NzOVDn-q5ok-srAnOXL1b5_-UlJaKs',
  },
  faqs: [
    {
      question: 'Do you offer custom OEM branding?',
      answer:
        'Yes, we provide full OEM support including logo placement, custom paneling colors, and specified component sourcing for large-scale wholesale orders.',
    },
    {
      question: 'What are the lead times for global shipping?',
      answer:
        'Typical production lead time is 15-20 days, followed by sea freight (3-5 weeks) depending on your destination port. Air freight options are available for spare parts.',
    },
    {
      question: 'How is after-sales technical support handled?',
      answer:
        'We provide a 1-year comprehensive warranty and 24/7 video technical support. Spare parts are stocked globally to ensure minimal downtime for your business.',
    },
  ],
} as const
