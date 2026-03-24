import { ROUTES } from '@/fixtures/stitch/site'

export const contactFixture = {
  title: 'Refined Precision at Your Scale.',
  description:
    'Request a technical consultation or a formal quote for our industrial solutions. Our engineering team typically responds within 4 business hours.',
  contactCards: [
    {
      icon: 'mail',
      eyebrow: 'Direct Email',
      value: 'sales@pro-taylor.com',
      tone: 'primary',
    },
    {
      icon: 'call',
      eyebrow: 'Global Sales Phone',
      value: '+1 (888) 555-0192',
      tone: 'secondary',
    },
    {
      icon: 'chat',
      eyebrow: 'WhatsApp Support',
      value: 'Live Engineering Chat',
      tone: 'whatsapp',
    },
  ],
  steps: [
    ['01', 'Data Verification', 'Our system verifies your requirements and routes them to the relevant regional specialist.'],
    ['02', 'Technical Consultation', 'An engineer will discuss machine specifications, configuration options, and OEM capabilities.'],
    ['03', 'Formal Proposal', 'Receive a tailored quote including lead time, shipping estimates, and technical documents.'],
  ],
  facilityImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDMZa0y_ELIDlEncBf5E0pQEmppgE-v_V4fMfZ6jrnAPof056J1RmxOlM7W-dR_0SpSranuqCav_mftGwS8u0B5XTbPEKJyhimX_VMXtQNjdfIZchS6rAwPS7IbAjgXGMSGyOV00NAA8wBHtmtXAfSOVM1gG-eoJf7wdXc0uorXNMfchayLWpR4zY2becbwH2kn9nk-j13cnehnzGmTpaXql_1PKw2Nr9Ri2E_ET_82UJjq72y7faWnpf3Jx6YwHGLX0qUEnyjywhg',
}

export const companyFixture = {
  title: 'The Art of Precision Cooling.',
  description:
    "For three decades, PRO-TAYLOR has redefined industrial thermal management. Our facility isn't just a factory; it's a sanctuary of engineering where thermodynamics meets architectural craftsmanship.",
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB4yDMPo_ktxzpG8t7UW1sfEldHJh2ZR8X0_5FQOkpA0oQVJNMfx3JowNgwxcBvD0rz9eA1FuFzDBOIq1J_7DN9hMqJqJhVAVtkBQUrsYh0NTCznAbyqjIoAPC0204gbm1eqZVbKc0N9HtBQAvK_q9sxnvu1nED9EJJxN7iq4y6oaZ5Tc4Z0f5gqbuXmHpFUjCTigv1_TsRW0vtvEz4pFh_7yc1ho77GY6R3Bf-ghioKlFDPWQrD-nvt_0SQxAbJpMgw7t8wbQ_2bY',
  stats: [
    ['30+', 'Years of Cooling Expertise'],
    ['80+', 'Export Markets Served'],
  ],
  capabilityCards: [
    {
      title: 'CNC Fabrication',
      copy: 'Laser-cutting, precision milling, and stainless forming under one roof.',
    },
    {
      title: 'Assembly & Testing',
      copy: 'Integrated assembly lines with 48-hour stress testing for every flagship batch.',
    },
    {
      title: 'Export Readiness',
      copy: 'Carton engineering, customs documentation, and global shipment planning.',
    },
  ],
  qcSteps: [
    ['01', 'Component Intake', 'Critical parts are verified against sourcing, electrical, and tolerance requirements.'],
    ['02', 'Assembly Control', 'Key checkpoints are signed off across refrigeration, chassis, and dispensing subsystems.'],
    ['03', 'Zero-Defect Review', 'Final load testing and cosmetic finishing ensure export-grade release.'],
  ],
  complianceItems: ['CE', 'ISO 9001', 'Factory Audit', 'Global Export'],
  journeyCards: [
    'Specification alignment',
    'Pilot confirmation',
    'Production assurance',
    'After-sales continuity',
  ],
  leaders: [
    {
      name: 'Lina Zhou',
      role: 'Factory Operations Lead',
      quote: 'Precision is a discipline, not a department.',
    },
    {
      name: 'Marcus Tang',
      role: 'Export Engineering Manager',
      quote: 'Every shipment carries our reputation into a new market.',
    },
    {
      name: 'Celine Mo',
      role: 'Quality Control Director',
      quote: 'Consistency is what turns machines into long-term partners.',
    },
  ],
}

export const solutionFixture = {
  slug: 'commercial-wholesale-oem',
  title: "Scale your Business with PRO-TAYLOR's Manufacturing Expertise",
  description:
    'Access high-precision industrial solutions designed for distributors and global OEMs. Our factory direct model ensures competitive margins without compromising on architectural-grade quality.',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDMZa0y_ELIDlEncBf5E0pQEmppgE-v_V4fMfZ6jrnAPof056J1RmxOlM7W-dR_0SpSranuqCav_mftGwS8u0B5XTbPEKJyhimX_VMXtQNjdfIZchS6rAwPS7IbAjgXGMSGyOV00NAA8wBHtmtXAfSOVM1gG-eoJf7wdXc0uorXNMfchayLWpR4zY2becbwH2kn9nk-j13cnehnzGmTpaXql_1PKw2Nr9Ri2E_ET_82UJjq72y7faWnpf3Jx6YwHGLX0qUEnyjywhg',
  recommendationCards: [
    {
      title: 'OEM Component Integration',
      copy: 'Designed for manufacturers requiring sub-assemblies or specialized units that integrate into larger industrial ecosystems.',
      recommendation: 'Recommended: PT-900 Series',
      icon: 'settings_input_component',
      tone: 'light',
    },
    {
      title: 'Distribution Ready',
      copy: 'Curated assortments, durable packaging, and sales-friendly documentation for market expansion partners.',
      recommendation: 'Recommended: Retail Launch Kit',
      icon: 'local_shipping',
      tone: 'primary',
    },
    {
      title: 'Private Label Programs',
      copy: 'Low-friction co-branding options for premium distributors and hospitality-led portfolios.',
      recommendation: 'Recommended: OEM Cosmetic Pack',
      icon: 'brand_awareness',
      tone: 'light',
    },
  ],
  workflowSteps: [
    ['01', 'Brief Alignment', 'Commercial goals, market constraints, and target product tiers are aligned with engineering.'],
    ['02', 'Configuration Matching', 'Recommended machine families, options, and QC checkpoints are selected for your channel.'],
    ['03', 'Launch Planning', 'Lead time, export packing, and documentation are finalized before release.'],
  ],
  comparisonRows: [
    ['OEM Program', 'Deep customization', 'Best for proprietary product lines'],
    ['Wholesale Distribution', 'Ready-to-market assortments', 'Best for dealer expansion'],
    ['Private Label', 'Brand-ready cosmetics', 'Best for premium reseller launches'],
  ],
  stats: [
    ['80+', 'Countries served'],
    ['14-21', 'Business day lead time'],
    ['24/7', 'Technical support window'],
    ['15+', 'Years of export continuity'],
  ],
}

export const resourcesFixture = {
  title: 'PRO-TAYLOR | Journal & Resources',
  featured: {
    title: "The Architect's Guide to Industrial Precision.",
    copy: 'In an era of rapid commoditization, the difference lies in the micron. We explore how to evaluate manufacturing partners for high-stakes projects.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBTtWjEWUIKWG20i-Iat4VcG0---H4tZSmZQ9o8Zsk6CjqZbdHLpc9QLvu91kz1PrIzB0WabRrVkNiT1JF-vk3B0-r-UXtmkr8-iSQNkrgmvQSf99imRI4IfyM7tAgbphhbWRz7bu-ycq1t1f_9nsMzgGbO6qM0onsJ134urkSi4_jJmBDvhG1CH4nejC57fkHqm7a8v0YH4vji6QX8Jz82F0OLolIANFcfVSQmYZKyx9TFLXccbFgS7Rf8esey6GnslzVOfoEKFhs',
    href: ROUTES.article,
  },
  filters: ['All', 'Buying Guides', 'Factory Insights', 'OEM Strategy'],
  cards: [
    {
      title: 'How to Choose the Right Soft Serve Machine',
      copy: 'A structured framework for throughput, overrun, serviceability, and recovery speed.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBWLK5VQaLBPFglkZQERQgAJdBRQkEGzgYjaT0DD-ES2tVU3ZNAj0qZt3Ylp7qSpOyIps56emwyqvJJO1Ui7WK7L1EQEPJB6hS7RYQ0hH7qefjhgexjpIb6-reIUxis3_C48dtCISw6H27jisoXAn2ZFTGQmGciAaY_w_4ElZySG-nM-nCobZJ9Xu6LO-InLR9QMBUuk_hSYwgGSWbrKH8Y5agxPP9FIqhnBL4mIseMi0AthF4RQ0C1KN7VNrLbXbJgWU4ejdYjrwo',
      href: ROUTES.article,
    },
    {
      title: 'Cooling Architecture for Premium Dessert Bars',
      copy: 'How placement, ambient heat, and compressor configuration affect consistency.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC9WJ0LO_AucroguYqa1XrNh1ktqWWDyEux4OytCG0rUiKYuzPCmPKGzjFGHvetsgN8orAt81NtYn-XHWuZtc8ru-mb799CAAxFV-nlhQoWWTt3gNOFxrQpWGZT_g7OUyipJGTyGEewOWApZpy0Y_UFiTDFzwfqpqcGLpeFS9iyf9b2rmVSltfV4je3_kxLhv3yHLiMSTDZZWN48Bb2rb01MB2pUkzvQm3PBH-L32Q0fskV-0fdWlLc72FylV5GF4ROi47WBBVFqU0',
      href: ROUTES.article,
    },
    {
      title: 'Factory Notes on Stainless Chassis Finishing',
      copy: 'What premium manufacturers control before export release.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAIiZ4RtTMLVeyLSeNnoeG-vBbPlg4-4Cr9gLOrnYq1nhBY6PTCY8JiGKqDdsjrh8UQmEV4MSP11C-4xrJybNxaYsxHEd2rPOcN90zkmGVwMi6D6PqHF_DUYHNHi2Wb7Ldu2ZnwJnpKzqA1eYDW9dkrjm4V8hoqOOzlbhoWMaBVmcXRvdzTJUGa2nG3T8iH4jJ8Ja48rF3_8-lBYcbB94AKHQQ3SDdHWm5CqOPiKcb9wKd-CxOfE7-bDnwDWq3SLgZOWxWM1CudtQQ',
      href: ROUTES.company,
    },
  ],
}

export const articleFixture = {
  slug: 'how-to-choose-the-right-soft-serve-machine',
  title: 'How to Choose the Right Soft Serve Machine for your Business',
  subtitle:
    'Performance is found in the intersection of output capacity, overrun control, and architectural reliability.',
  toc: [
    ['summary', 'Executive Summary'],
    ['capacity', 'Volume & Capacity'],
    ['cooling', 'Cooling Systems'],
    ['comparison', 'Model Comparison'],
    ['faq', 'Common Queries'],
  ],
  summary:
    'For high-traffic environments, a Twin-Twist Floor Model with independent cooling is non-negotiable. For boutique cafes, a Countertop Gravity-Fed system offers the highest ROI with minimal footprint.',
  capacityImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDMZa0y_ELIDlEncBf5E0pQEmppgE-v_V4fMfZ6jrnAPof056J1RmxOlM7W-dR_0SpSranuqCav_mftGwS8u0B5XTbPEKJyhimX_VMXtQNjdfIZchS6rAwPS7IbAjgXGMSGyOV00NAA8wBHtmtXAfSOVM1gG-eoJf7wdXc0uorXNMfchayLWpR4zY2becbwH2kn9nk-j13cnehnzGmTpaXql_1PKw2Nr9Ri2E_ET_82UJjq72y7faWnpf3Jx6YwHGLX0qUEnyjywhg',
  matrixRows: [
    ['Countertop Gravity', 'Low-to-medium', 'Fast ROI, compact footprint'],
    ['Twin-Twist Floor', 'High traffic', 'Best balance of speed and showmanship'],
    ['Industrial Pasteurizing', 'Central production', 'Best for continuous volume and QA control'],
  ],
  faqs: [
    ['How much output is enough for a dessert bar?', 'Estimate peak-hour servings first, then match cylinder reserve and recovery speed to that demand rather than relying on daily averages.'],
    ['When should I choose water cooling?', 'Use water cooling when ambient heat is consistently high or the machine will run under prolonged heavy load with limited air circulation.'],
    ['Can one model cover both retail and OEM use cases?', 'Sometimes, but retail-facing deployments and OEM programs usually diverge in cosmetics, control presets, and service expectations.'],
  ],
}
