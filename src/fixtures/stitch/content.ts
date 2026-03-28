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
    ['01', 'Data Verification', 'Our system verifies your requirements and assigns them to the relevant regional specialist.'],
    ['02', 'Technical Consultation', 'An engineer will reach out to discuss machine specifications and OEM capabilities.'],
    ['03', 'Formal Proposal', 'Receive a tailored quote including global shipping estimates and lead times.'],
  ],
  form: {
    machineOptions: [
      'CNC Precision Milling Series',
      'Automated Assembly Lines',
      'Custom Hydraulic Solutions',
      'Industrial Packaging Systems',
    ],
    checkboxTitle: 'OEM/ODM Support Inquiry',
    checkboxCopy:
      'Check this if you require custom branding or specialized factory modifications.',
    messagePlaceholder: 'Describe your specific technical requirements or questions...',
    buttonLabel: 'Send Inquiry',
    legal: 'By submitting this form, you agree to our Privacy Policy and Data Handling terms.',
  },
  locationSection: {
    eyebrow: 'Global Presence',
    title: 'Visit Our Facilities',
    copy:
      'We welcome our clients to tour our manufacturing headquarters. Witness the precision of PRO-TAYLOR firsthand and meet the engineering team behind your projects.',
    locations: [
      ['Manufacturing Hub A', '102 Industrial Way, Tech Park, Shanghai'],
      ['European Liaison Office', 'Kurfürstendamm 213, 10719 Berlin, Germany'],
    ],
  },
  facilityImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAwibhmNtEjFd-6GpgdGfJQhQtItEvL0Vol8nepcybKK62cPFj6vbTFY0_RRv5Np8JvLNEy-IDBZqWVKPvyZMcbwxXZT5J7x0IsIYgccDsh7n86BPPPL79BfSfoZPQGKqAzA9LA1tkvBHMVBa4k6v-HNnRzeaN8Xk_cF9R8N6_a6J4R-key6sYNTTnuQm18c10SHS71KHieayHEEhB1uyz9hFaemd8O4h_C8SXT4xx1stdwE__f7fZTC23Pxnq3zgMaYcfALmRp6bc',
}

export const companyFixture = {
  title: 'The Art of Precision Cooling.',
  description:
    "For three decades, PRO-TAYLOR has redefined industrial thermal management. Our facility isn't just a factory; it's a sanctuary of engineering where thermodynamics meets architectural craftsmanship.",
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB4yDMPo_ktxzpG8t7UW1sfEldHJh2ZR8X0_5FQOkpA0oQVJNMfx3JowNgwxcBvD0rz9eA1FuFzDBOIq1J_7DN9hMqJqJhVAVtkBQUrsYh0NTCznAbyqjIoAPC0204gbm1eqZVbKc0N9HtBQAvK_q9sxnvu1nED9EJJxN7iq4y6oaZ5Tc4Z0f5gqbuXmHpFUjCTigv1_TsRW0vtvEz4pFh_7yc1ho77GY6R3Bf-ghioKlFDPWQrD-nvt_0SQxAbJpMgw7t8wbQ_2bY',
  scaleHeading: ['Industrial Scale.', 'Bespoke Detail.'],
  scaleStats: [
    ['50k+', 'Sq Meters Facility'],
    ['120', 'CNC Centers'],
  ],
  capabilityCards: [
    {
      title: 'Automated Assembly',
      copy:
        'High-speed SMT and robotic assembly lines ensuring 99.9% consistency across production batches.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAhbpe6FlQ5gII5ZtiROD6VqgshzyKTYEVZ7nl27jKX3m_kqvNj3L6014mZNhRV5ep4Eqc4Ss_hM71WJUmToiayxuW1d8rUMFFZ4OiSk74-r6_udoA7Kot4ztnJKdjXXh7znxu2LfX3RVCZKQevV205XcZMPfEiYPRdFd0oFSRTxN7KkLHBX192nHKyhCLEByZXz6MHDxYC2QLrZdrnaiDWLLbHkyrFDvNyWSVLvn5gNjTiNcFrp_qKAcIZ8N7EROk0tpieIFTGrfQ',
      stagger: false,
    },
    {
      title: 'Custom Fabrication',
      copy:
        'Specialized unit for OEM prototypes and small-batch high-performance cooling solutions.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCZkDVdmOrFgwanESDkCmKFJEQp2uBDXwNMb3nvwtQ_WnqAXsBfFbKPEsV6vIe728gtZ23MVyvhWKVUfihnBlinQZfYUsobwfnfe9cvxC-ux_9gs8MOllfNcCov1YTk7GNHXZV84tNaJmew79fCaj0KFv9kg23xF6BokyWNvLtvdvWCpfOaXJUZWFUa1EUBZVGcgtmiDj-yeFR40oKVrrL62xc31z1QeEro4eAt7spscByL7a6Z6Lk1HzT86zkbq82KV0QYV_rMQYs',
      stagger: true,
    },
    {
      title: 'Thermal Testing',
      copy:
        'In-house environmental chambers simulating extreme conditions from -40°C to +85°C.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC-jLqKTSC-RmGRcGBBuZh8Ml90WGmImuO8Uiyicm_O8PBNbNkNECHXJ0kU3wK6yh2Vq3ktwLFncSVCFC1xsau-2uNWC8JGxZe0evkSw9ti-cYCtoCSfuvCW83yVXnHhx5msjRrPd9ylkJicF6MXR1g6XW-doMlab3xKSnN-1h9_gQl7PaXdDqyRvQFqTXtpZSRXmIdD8ZM2ihLjQ4imimfnAWKgLlvjmo1GGI9SjW7Y1nkIu4B_f6XdExLGGwKdBLwNwkswCo_1ic',
      stagger: false,
    },
  ],
  qcStages: [
    ['Stage 01', 'Material Verification', 'Every batch of raw aluminum and copper undergoes spectral analysis before entering the floor.'],
    ['Stage 02', 'AOI Inspection', 'Automated Optical Inspection identifies microscopic defects invisible to the human eye.'],
    ['Stage 03', 'Final Validation', 'A 24-hour burn-in test is mandatory for all active cooling systems prior to packaging.'],
  ],
  methodologyTags: [
    { icon: 'biotech', label: 'Micro-Precision' },
    { icon: 'analytics', label: 'Data Logging' },
  ],
  complianceTitle: 'Global Standard, Uncompromised.',
  complianceSubtitle:
    'Certified to exceed the most rigorous international manufacturing standards.',
  complianceItems: [
    { icon: 'verified_user', label: 'ISO 9001:2015' },
    { icon: 'eco', label: 'RoHS Compliant' },
    { icon: 'security', label: 'CE Certified' },
    { icon: 'gavel', label: 'UL Listed' },
  ],
  journeyTitle: 'The Journey of Trust.',
  journeyCards: [
    ['01', 'Inquiry', 'Technical consultation and rapid prototyping brief established.'],
    ['02', 'Production', 'Live tracking of your batch through our ERP-integrated manufacturing floor.'],
    ['03', 'Logistics', 'Premium palletizing and custom clearancing for global ports.'],
    ['04', 'Delivery', 'On-site technical support for final installation and integration.'],
  ],
  supportEyebrow: 'Ongoing Commitment',
  supportTitle: 'Beyond the Transaction.',
  supportDescription:
    "We don't just ship products; we build industrial partnerships. Our dedicated support engineers are available 24/7 for troubleshooting, maintenance schedules, and scaling consultation.",
  supportHighlights: [
    ['Extended Warranty', 'Up to 5 years of comprehensive coverage on industrial units.'],
    ['Spares Inventory', 'Guaranteed parts availability for 10 years after product EOL.'],
  ],
  leadershipTitle: 'The Human Precision.',
  leadershipEyebrow: 'Meet the Leadership',
  leaders: [
    {
      name: 'Dr. Chen Wei',
      role: 'Chief Engineer',
      quote: 'Precision is a mindset, not just a measurement.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCR_cy0GiRSdyEQ2Lrm8JW_tUl112ovl_JL9vYmj_yDWWliiN3ECvu9DrlDhbp3v-JTTHzyGHcSozLfJ1cCH24xus-5Qg9K7BKVUmEAQhq8wKB4taPnimOaTAUhFM5sM2lQ8bOO-pw5KI0tC8UMEDuvAI1b3Ztx62bKJqeQI2fM6VmRJzDarsLBAbYHHOWB-Z7MqJGKA3Uz1KOKBxpHn_GsKcZU_FM7znDWQSMXiLaDk3bg3a44hgpr2trtoJeHlsFfFN-7OIaft_0',
    },
    {
      name: 'Sarah Thompson',
      role: 'Director of Global Supply',
      quote: 'Bridging the gap between complex engineering and global logistics.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBuIFhCOXoIoMlSmSEfJfgV1XIkLoumwdikOqRYM4pcf12cbI6Q7scY5BbY-CvftZPtpqsv1wKLCBWQUzodJ8j4XdJ9fL9AMNf3d9jmi_4f-UP7c9fn9Pgz2SivcDtA3LZgCQrSYrWLtcZDu7k0PYul6dpTGziPco9qBiHAey3SX6Z5Hs97RkkPVxGDA4--yQKD10_wz-Q5u-yiCAXbtVIogFWhztRSt40PwubCeQfs0r0GORtzwaVBm0nhX-hcajy-PmsCxR2z28o',
    },
    {
      name: 'Marcus Liang',
      role: 'Head of Quality Assurance',
      quote: "We don't settle for 'good enough'. We settle for perfect.",
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDS4fuaRe8Ptpe887o1HjtrwW2TRbp_JfJ6L4TEB6aFE54pGJuJxGZttCcqDW28weeYW9XQoGhJiQikxNaVW91bpBcjwEsMXMBfBWTKK_EpB0y8vvwHUG4yiQ88iVAoWGr7nqQVP7PIKrY6f1hJ2TIaFLLUGCm-TNAXiG9444Wy-Nu3V5gSz9yUIma-zCpiW1M-L08xcT6fiE8ZJyiUc67la6-duBs5BkmZKcpRhk8VPbrjmyJIRF-0SmpkzfP6YX94fbsjk8zlukU',
    },
  ],
}

export const solutionFixture = {
  slug: 'commercial-wholesale-oem',
  heroEyebrow: 'Wholesale & OEM Partners',
  primaryCtaLabel: 'Partner With Us',
  primaryCtaHref: ROUTES.contact,
  secondaryCtaLabel: 'View Factory Capacity',
  secondaryCtaHref: ROUTES.company,
  overviewTitle: 'Commercial, Wholesale & OEM',
  overviewDescription:
    'Scalable production units designed for high-volume manufacturing and private label consistency.',
  overviewImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAB8v_4nM0DJiwanRyFvW-Zs3dwRa_pl6xUGw7qvbnkxoAB2vTGZTDlPIMOI8zoIoev6wK1MKiCAyQ7n-fiBGLtF2Dh2bhl5k7FqAmNXGKiYp4fNUoXej2j7iGQb7W9cMkD27BIvqVr37WJXTBnVvK6WK7XHQ--LtiJOb0i9VhipYtIhDeRGY6C4EM4LGiNiEudqnre-3lHYDcCbn-TXDGEeWo7n2gkJu7RGSK3XKENihcEgbbIOUVYFoyZ-YBApTK8BnvRFlnITa8',
  title: "Scale your Business with PRO-TAYLOR's Manufacturing Expertise",
  description:
    'Access high-precision industrial solutions designed for distributors and global OEMs. Our factory direct model ensures competitive margins without compromising on architectural-grade quality.',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDMZa0y_ELIDlEncBf5E0pQEmppgE-v_V4fMfZ6jrnAPof056J1RmxOlM7W-dR_0SpSranuqCav_mftGwS8u0B5XTbPEKJyhimX_VMXtQNjdfIZchS6rAwPS7IbAjgXGMSGyOV00NAA8wBHtmtXAfSOVM1gG-eoJf7wdXc0uorXNMfchayLWpR4zY2becbwH2kn9nk-j13cnehnzGmTpaXql_1PKw2Nr9Ri2E_ET_82UJjq72y7faWnpf3Jx6YwHGLX0qUEnyjywhg',
  heroQuote: 'Precision engineering at a scale that moves markets.',
  heroQuoteLabel: 'Global Supply Lead',
  strategicEyebrow: 'The Strategic Advantage',
  strategicTitle: 'Tailored Machine Recommendations',
  oemCard: {
    title: 'OEM Component Integration',
    copy:
      'Designed for large-scale manufacturers requiring sub-assemblies or specialized units that integrate seamlessly into larger industrial ecosystems.',
    recommendation: 'Recommended: PT-900 Series',
    icon: 'settings_input_component',
  },
  distributionCard: {
    title: 'Wholesale Distribution',
    copy:
      'Optimized for high-volume inventory turnover with localized support and plug-and-play installation for end-users.',
    buttonLabel: 'Download Catalog',
    icon: 'package_2',
  },
  privateLabelCard: {
    title: 'Private Label Services',
    copy:
      "Customize chassis colors, branding, and software interfaces to maintain your brand's identity while leveraging our hardware.",
    icon: 'branding_watermark',
  },
  benchmarksCard: {
    title: 'Standard Spec Benchmarks',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxzWAys1ZICGs2Vbz69FboeT6a_hj1gzVbjGR5wUGwmQFIQ4gxCr6ypYJUhoQsfI_UGoEUFbpVeNhV_PxPDAaM9tmuxAUI2Z63Ai0BzmXY3DrajwebI6RdWm7PdZIcriFT-jLJ7aoDDjUF1Um5vck3t6qhvCjusGvwOlK5Yv6W5wexK94zM_cW0QskdzLetJvuVH-v25BZ2Zrp4XW9H5WQ47mw6ukna32RGeRoOvB7H-R4avslOHCNs8t2ny_40i1rAoeuGTllv2E',
    rows: [
      ['Tolerance', '±0.005mm'],
      ['Throughput', '240 units/hr'],
      ['Power', 'Industrial 480V'],
    ],
  },
  workflowEyebrow: 'Manufacturing Logic',
  workflowTitle: 'A Seamless Integration for Business Growth',
  workflowImages: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAOMZEjRI9w_QURME6v2LX34yLnMOVvFVDFy_IYRxX7wrbyEX9lwCIIOwq69-azqVSQty0qKZHO5u9aRjqMeQ61tfFoOftHrRyfGxNDQ0VH93zuKVoZvj012HcrTOfIMz6WV-EB9EYvw1MDQrl3y30EDlDGHWH8afw7YZk9R_zBh8Kus4T0CPilgWRcazTA-NF3AJ2EzGsBh-ma1xXoL-tNZotStGf1ZJYth-b5AGQIRsQfQNe9_5R7rtL1_CaNuET0NfbCyd2-W7w',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAjMnJgb31tGYhLxLY3eF1rSYflN-KkEd2mURkMSu049WPXTx_Ek8z9qbvDc7vtinUTY-shYoPOaJDPrEd8uhu1yfNrNHZbwzU0nzYuqeJptMVzwGE-dTb6Av5MHcv4MeR-Bu9g_6UofiA3H6UaNFpl8mUzY8nD1s50fET90pZVamtCcu7itzlHwmRLl2u1divONodeDh8pTS3lLhQvLHrfw14KOcL_ZhbNTpOrTbHMBW0vB0rtGb-QEj6rj13dZoKQuvWslyf_LD4',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBNc9lkE-bKlvyvsXph0BoynrDLkEcgx0h-iWqtRggYmUeOmOoDiPRyCj1oaJFs8-2ZzHdP1tIgJ53WNKkQ23QDxn80cvA7JDrl5a3hJ8UVgVACzXlV-Z0OpPzMO6O4jQvCBN75on8ck1Rj07dP4q_k2wO-5bIunSz70rmK4-aYDbRh1Cb7TQpq7GKjgAgraqk7JSyQay1tq6oPFAhKTP1klHAuMjkYeLgVlyeYr2rbJtTX8MukOKxYZseUMqtNSrTKWuznU4wq2Bs',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD5kj7PUrjxaFfAVTIypL2qfGzmqI-YJkJE-PlF2IaBsSctgODfXVGzCyfB75nbpg-mGzPa-fOfYyr43str0v7MsfycnoRm5LmepG94rGB5Ll9d7y2YFHAKNfl_fuNDP8BAqNVyxhu65B8gak8fv76BBu_JJb88JCGTAsrnC8Uumu6TafQQq_8-Xm7ZeFSI7TgYs-WU_w3EXYD3QVsitFDUIQ1VqmBs42vf1-J9C-IOuyoH_U5eH7MylxYutiFBqZ_os9m68NQF9vU',
  ],
  workflowSteps: [
    [
      '01',
      'Technical Consultation',
      'We evaluate your production requirements to recommend a hardware stack that aligns with your operational scale.',
    ],
    [
      '02',
      'OEM Customization',
      'Integration of proprietary software, custom voltage configurations, and brand-specific structural adjustments.',
    ],
    [
      '03',
      'Volume Logistics',
      'End-to-end export management, CE/UL certification compliance, and global maritime insurance coverage.',
    ],
  ],
  comparison: {
    eyebrow: 'Strategic Choice',
    title: 'Service Level Comparison',
    columns: ['Feature', 'Wholesale Distribution', 'OEM Partner', 'Project Managed'],
    rows: [
      ['Min. Order Volume', '5 Units', '20 Units / Quarter', 'Case-by-Case'],
      ['Customization', 'Standard Product', 'Full Hardware & Logo', 'Custom Engineering'],
      ['Pricing Structure', 'Tiered Wholesale', 'Contract Manufacturing', 'Milestone-Based'],
      ['Technical Support', 'Tier 1 Remote', 'Dedicated Engineer', 'On-Site Commissioning'],
    ],
  },
  stats: [
    ['12k', 'Sq Meters Facility'],
    ['450', 'Monthly Output'],
    ['84', 'Countries Served'],
    ['24h', 'Partner Support'],
  ],
  cta: {
    eyebrow: 'Initiate Partnership',
    title: 'Secure your production line for the upcoming quarter.',
    copy:
      'Speak with our industrial solutions lead to discuss high-volume pricing and OEM integration timelines.',
    buttonLabel: 'Contact Wholesale Desk',
  },
}

export const cafeSolutionFixture = {
  ...solutionFixture,
  slug: 'shop-cafe-dessert-business',
  heroEyebrow: 'Retail & Boutique Operations',
  primaryCtaLabel: 'Plan Your Store Setup',
  overviewTitle: 'Shop, Cafe & Dessert Business',
  overviewDescription:
    'Countertop and floor-standing solutions optimized for small footprints and rapid service.',
  overviewImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCtaCdHvBlXulqxgOoWuY8ybh23M46B4yeieuLPDNMgWemS5r1kaa60otHMJxvuPi6nuc70ginZ3usfFbJs7iy5gc7APqSSww8xOWJFYHtw9ruGj7Bshl3AAFG-Zarw97I7PncZ3n7xLH2XexB4TsQkEbb8jQbE6cbZ1omqMThwPXVL-05LFk1mnZYBWaCyalRkw-lzDgmYbK3QBItX5CnKZHwWXKqqq88cAte-cvan7bnvsl-OhtsKho9JPwxP5JtSE4BhxRGZ2UU',
  title: 'Compact Systems for Boutique Dessert Operations',
  description:
    'Curated equipment stacks for cafes, dessert bars, and compact hospitality counters where frontage, consistency, and service rhythm matter equally.',
  strategicTitle: 'Tailored Storefront Recommendations',
  oemCard: {
    ...solutionFixture.oemCard,
    title: 'Compact Countertop Selection',
    copy:
      'Optimized for artisan storefronts that need compact service footprints, easy operator training, and premium texture control.',
    recommendation: 'Recommended: C-Compact Series',
  },
  distributionCard: {
    ...solutionFixture.distributionCard,
    title: 'Retail Launch Packages',
    copy:
      'Curated machine bundles, startup documentation, and merchandising guidance for boutique dessert businesses.',
    buttonLabel: 'Download Startup Kit',
  },
  privateLabelCard: {
    ...solutionFixture.privateLabelCard,
    title: 'Store Branding Support',
    copy:
      "Tailor fascia accents, menu UI language, and visible finish details so the equipment feels native to your brand environment.",
  },
  workflowTitle: 'A Dessert Counter Built for Repeatable Service',
  comparison: {
    ...solutionFixture.comparison,
    columns: ['Feature', 'Starter Shop', 'Flagship Cafe', 'Dessert Chain'],
    rows: [
      ['Footprint', 'Countertop', 'Counter + Back Prep', 'Mixed Store Formats'],
      ['Throughput Need', 'Low / Medium', 'Medium / High', 'High / Peak Rush'],
      ['Recommended Cooling', 'Air Cooled', 'Air or Water', 'Hybrid / High Output'],
      ['Support Level', 'Remote Setup', 'Operator Training', 'Fleet Planning'],
    ],
  },
  stats: [
    ['18+', 'Store Formats'],
    ['3m', 'Typical Counter Width'],
    ['48h', 'Launch Support'],
    ['24/7', 'Video Guidance'],
  ],
  cta: {
    ...solutionFixture.cta,
    title: 'Launch your next dessert counter with confidence.',
    buttonLabel: 'Talk to a Retail Specialist',
  },
} as const

export const hospitalitySolutionFixture = {
  ...solutionFixture,
  slug: 'hospitality-buffet',
  heroEyebrow: 'Hospitality Service Programs',
  primaryCtaLabel: 'Discuss Hospitality Deployment',
  overviewTitle: 'Hospitality & Buffet',
  overviewDescription:
    'Self-service interfaces and high-durability systems for hotels, resorts, and corporate dining.',
  overviewImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC1yavR6vuTbNPunOTuJaGpSAwtrCm_3kj2B6kUrfbg0B-Mblca_3f1hUs8bhN6Hkfcr6MkttktMPWqU4qBvNxJSj4gN4v2K0vR9MXw_HKVS05JPc36n15Un7jie5guSSKKhmo0XeC-zi0Xpn4TPFQya3rOthvekSj87lcHqIXj2qlq4DgstXnEhYfbjxyDMKLkw1QIoOooI1YBcbYXdiCzXvWfrb7KOpPxPc6jhpgkAO58Y6Z0htMWHmAF34CqXmDg_kblu-1KRw0',
  title: 'Front-of-House Hospitality Systems with Silent Precision',
  description:
    'Refined buffet and hospitality deployments designed for visible service environments, breakfast corridors, and premium guest-facing installations.',
  strategicTitle: 'Hospitality-Grade System Recommendations',
  oemCard: {
    ...solutionFixture.oemCard,
    title: 'Guest-Facing Service Units',
    copy:
      'Quiet mechanical performance, hygienic detailing, and visible stainless execution built for premium hospitality experiences.',
    recommendation: 'Recommended: H-Series Buffet Line',
  },
  distributionCard: {
    ...solutionFixture.distributionCard,
    title: 'Multi-Site Hotel Rollouts',
    copy:
      'Deployment planning for resort groups and hotel operators requiring standardized guest experience across properties.',
    buttonLabel: 'Download Hospitality Pack',
  },
  workflowTitle: 'A Buffet Workflow That Protects Guest Experience',
  stats: [
    ['85dB-', 'Noise Discipline'],
    ['120+', 'Hotels Served'],
    ['3', 'Installation Modes'],
    ['24h', 'Spare Parts Response'],
  ],
  cta: {
    ...solutionFixture.cta,
    title: 'Secure hospitality-ready equipment for your next opening.',
    buttonLabel: 'Contact Hospitality Desk',
  },
} as const

export const distributorSolutionFixture = {
  ...solutionFixture,
  slug: 'distributor-import-program',
  heroEyebrow: 'Global Distribution Programs',
  primaryCtaLabel: 'Open Distributor Discussion',
  overviewTitle: 'Distributor / Import Program',
  overviewDescription:
    'Comprehensive support including technical documentation, spares, and priority shipping for global partners.',
  overviewImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD2uZD5G61-FAdaj7XqT33jIvicGoXqvVICJxNdaTz2Ogy0ypgAyOAk0unfpq-zyUksTH-PTjtXBtaAE-bYaniO4bDCCJfGSquGE6op67P_Y28hl4eH9_m2yVn8EBxTIyC8lCGFEVEowfa8O2470BU2x6bVMNDyW3Pi3CR8UyD9MdVBz7XLHwDOrrVfcfA-TwuNz6gdKiC-dQIHQNobH_kxa3RK5wmDgInpsU9g1SfXskLS_zFVZwQYHfRiKav0VuwG3i5zA-CLdSA',
  title: 'Import Programs Built for Regional Equipment Distribution',
  description:
    'A factory-direct distribution model that combines export logistics, localized spares, and technical documentation for regional partners.',
  strategicTitle: 'Distribution-Focused Equipment Paths',
  oemCard: {
    ...solutionFixture.oemCard,
    title: 'Inventory-Ready Core Series',
    copy:
      'Balanced model families engineered to simplify stocking strategy, spare-parts planning, and distributor onboarding.',
    recommendation: 'Recommended: D-Line Portfolio',
  },
  distributionCard: {
    ...solutionFixture.distributionCard,
    title: 'Import Margin Planning',
    copy:
      'Commercial structures designed around stocking efficiency, freight consolidation, and regional aftersales readiness.',
    buttonLabel: 'Download Distributor Deck',
  },
  workflowTitle: 'A Distribution Pipeline Optimized for Margin and Uptime',
  stats: [
    ['84', 'Countries Served'],
    ['12', 'Regional Hubs'],
    ['2%', 'Spare Parts Buffer'],
    ['24h', 'Quote Turnaround'],
  ],
  cta: {
    ...solutionFixture.cta,
    title: 'Secure your next container program with factory-direct support.',
    buttonLabel: 'Contact Import Desk',
  },
} as const

export const solutionFixtures = [
  solutionFixture,
  cafeSolutionFixture,
  hospitalitySolutionFixture,
  distributorSolutionFixture,
] as const

export type SolutionFixture = (typeof solutionFixtures)[number]

export function getSolutionFixtureBySlug(slug: string) {
  return solutionFixtures.find((solution) => solution.slug === slug)
}

export const solutionsOverviewFixture = {
  hero: {
    eyebrow: 'Precision Engineering',
    title: 'Industrial Solutions for Every Commercial Scale',
    copy:
      'PRO-TAYLOR serves as the mechanical foundation for global beverage and dessert brands. We provide the high-performance hardware that transforms vision into repeatable excellence, from artisan cafes to massive OEM production lines.',
    primaryCtaLabel: 'Discuss Your Project',
    primaryCtaHref: ROUTES.contact,
    secondaryCtaLabel: 'Explore Product Categories',
    secondaryCtaHref: ROUTES.products,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCijGJFXKrbiwtCsDUhW4kqW5FUGeyNdUjoTO6NYszV3uUevOc-PzTKUUxVBy8xknc524DnsEqi7q6iq-cVhYi0_wNOh_ymOMdRJcd-NG3LNVU6s06RDh-7Ij8BCTptAg15t1fvxdIKoKp45yYnmeFbB2ZlsWBsqRqQLIB8PGi0iVST9JujmktY27aItGyYJ21_aFtWDPsFK3sTYIUIpIVxpP5zyqxO3lZjvt7bzeszp9T9wD34mmS1BgbJMppbBubU9WXEXrl2xZA',
    alt: 'Industrial kitchen overview',
  },
  entryTitle: 'Select Your Industry Path',
  entryCopy: 'Tailored engineering clusters for specific business objectives.',
  entryCards: solutionFixtures.map((solution) => ({
    title: solution.overviewTitle,
    copy: solution.overviewDescription,
    image: solution.overviewImage,
    href: `/solutions/${solution.slug}`,
  })),
  matrix: {
    title: 'The PRO-TAYLOR Matrix',
    copy:
      'Our equipment selection is guided by four strategic pillars, ensuring your investment aligns with operational reality.',
    items: [
      {
        eyebrow: 'Buyer Profile',
        title: 'Targeted Engineering',
        copy:
          'We differentiate between end-users seeking ease of use and OEM buyers requiring mechanical modularity for proprietary integration.',
      },
      {
        eyebrow: 'Environment',
        title: 'Countertop vs Floor',
        copy:
          'Spatial constraints define our cooling system choices, from compact urban counters to water-cooled industrial lines.',
      },
      {
        eyebrow: 'Output',
        title: 'Capacity Targets',
        copy:
          'From 18L/h boutique service to 60L/h+ continuous-flow systems for high-traffic environments.',
      },
      {
        eyebrow: 'Integration',
        title: 'Equipment Synergy',
        copy:
          'Machine families share internal components to simplify maintenance and parts inventory across fleets.',
      },
    ],
  },
  ecosystems: [
    {
      icon: 'icecream',
      title: 'Soft Serve',
      copy: 'High-overrun air pumps for creamy texture and rapid recovery.',
      href: ROUTES.category,
    },
    {
      icon: 'kitchen',
      title: 'Gelato',
      copy: 'Low-speed batch freezers for dense, artisanal flavor profiles.',
      href: ROUTES.categoryGelato,
    },
    {
      icon: 'liquor',
      title: 'Slush & Beverage',
      copy: 'Durable auger systems designed for high-sugar beverage programs.',
      href: ROUTES.categorySlush,
    },
    {
      icon: 'ac_unit',
      title: 'Ice Lolly',
      copy: 'Immersion brine systems for high-speed frozen novelty production.',
      href: ROUTES.categoryIceLolly,
    },
  ],
  oemSupport: {
    eyebrow: 'Factory-Direct Advantage',
    title: 'Your Brand, Our Foundation.',
    copy:
      "We don't just sell machines; we manufacture competitive advantages. Our OEM program allows beverage distributors and appliance brands to launch high-performance frozen equipment without the capital risk of R&D.",
    linkLabel: 'View OEM Technical Capabilities',
    linkHref: ROUTES.solution,
    points: [
      {
        icon: 'architecture',
        title: 'Custom Housing & Controls',
        copy:
          "Modify aesthetics and UI to match your brand's existing equipment ecosystem.",
      },
      {
        icon: 'history_edu',
        title: 'White Label Documentation',
        copy:
          "Custom-printed manuals and safety technical sheets in your brand's identity.",
      },
      {
        icon: 'verified',
        title: 'Compliance Readiness',
        copy:
          'Factory assistance with ETL, CE, and SASO certification pathing for large orders.',
      },
    ],
  },
  trustStrip: [
    { icon: 'public', label: 'Global Logistics' },
    { icon: 'verified_user', label: 'ISO 9001 Certified' },
    { icon: 'local_shipping', label: 'Sea & Air Export' },
    { icon: 'engineering', label: 'In-House R&D' },
  ],
  resources: [
    {
      title: 'Selection Guide 2024',
      copy: 'A technical framework for choosing capacity vs footprint.',
      href: ROUTES.resources,
    },
    {
      title: 'Import Logistics FAQ',
      copy: 'Understand shipping terms, duties, and container optimization.',
      href: ROUTES.resources,
    },
  ],
  faqs: [
    {
      question: 'What is the typical lead time for a standard container order?',
      answer:
        'Standard factory lead times range from 21 to 35 days depending on machine complexity and order volume. OEM customizations can add an additional 14 days for sampling and approval.',
      defaultOpen: true,
    },
    {
      question: 'Do you provide on-site technical training?',
      answer:
        'We offer digital masterclasses and live video support as standard. For regional distributors ordering 50+ units annually, we can arrange advanced technician certification.',
    },
    {
      question: 'Are components compatible with European voltage standards?',
      answer:
        'Yes, machines can be built with 220V/50Hz, 110V/60Hz, or 220V/60Hz configurations upon request.',
    },
  ],
  cta: {
    title: 'Secure your production line',
    copy:
      'Speak with a solution engineer to map our equipment to your business objectives. Global shipping quotes provided within 24 hours.',
    form: {
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Business Email',
      submitLabel: 'Initiate Consultation',
      note: 'Average response time: 4 business hours.',
    },
  },
} as const

export const resourcesFixture = {
  title: 'PRO-TAYLOR | Journal & Resources',
  featured: {
    title: "The Architect's Guide to Industrial Precision.",
    copy:
      'In an era of rapid commoditization, the difference lies in the micron. We explore how to evaluate manufacturing partners for high-stakes aerospace projects.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBTtWjEWUIKWG20i-Iat4VcG0---H4tZSmZQ9o8Zsk6CjqZbdHLpc9QLvu91kz1PrIzB0WabRrVkNiT1JF-vk3B0-r-UXtmkr8-iSQNkrgmvQSf99imRI4IfyM7tAgbphhbWRz7bu-ycq1t1f_9nsMzgGbO6qM0onsJ134urkSi4_jJmBDvhG1CH4nejC57fkHqm7a8v0YH4vji6QX8Jz82F0OLolIANFcfVSQmYZKyx9TFLXccbFgS7Rf8esey6GnslzVOfoEKFhs',
    href: ROUTES.article,
    publishedAt: 'Jan 24, 2024',
    readTime: '12 Min Read',
  },
  filters: ['All Articles', 'Buying Guides', 'Comparisons', 'Maintenance', 'Industry Articles'],
  resultsLabel: 'Displaying 24 Editorial Pieces',
  cards: [
    {
      category: 'Comparisons',
      title: 'Vertical vs Horizontal Machining: A Efficiency Audit',
      publishedAt: 'Mar 12, 2024',
      readTime: '8 Min Read',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA-pcLVLn97tHogmx1fqbpccrt3BJDM-hDhrDHTYav_CxztUnPyDVGZpWvbywjo3xpgENVnyrb87W9IcaMtulZ9T1ysxQezwMnXWjN91WZe62fx0W_5VVQLBX4oddIuTuUa_QNFtEfUGM3gPRou_KbyC0NNcKiYEb1KZqsh3RMFwIu4agO8t8db1A0nZbHKCCG6lgTYE6AObMqH0WOu5xaTuH3CpbORQinLOB1sXFhJf3aKRoke1WYBHCfpTM7IRV9suN0R4YhpjiI',
      href: ROUTES.article,
    },
    {
      category: 'Maintenance',
      title: 'The Longevity Blueprint: Preventive Maintenance for 2024',
      publishedAt: 'Feb 28, 2024',
      readTime: '15 Min Read',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCHcxBZHlryzaRjDHXLd5dJlCyYnrifnDDMcfJMWzFT6uqKHTcn9AORcVK5_IogyYOXIAhksRgK6-848-V2MZVOc_Lgy2rs474PK8skwjyI1M3hUNcN2wkKwSgdxuz8VrHI9FUeNj2l6P_1vUC7p3kRKIycl3lKNoIQD7YvoaiwVQFlyKL3609fDBWsJ4fd47PbFYa1QKHUi6iJzPHTn4qB-9DTqRuN7gS9-Bw0CYQ3JHByK0kuon5TDKSqQFBQuJW5NeN4U6XlwCE',
      href: ROUTES.article,
      stagger: true,
    },
    {
      category: 'Industry Articles',
      title: 'Global Supply Chains: Reshoring vs. Nearshoring',
      publishedAt: 'Feb 15, 2024',
      readTime: '10 Min Read',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBxGqRYe48NNGJB_j1MpLblRStBaXdLlbENa-DX2y0yERedXkNL37udFNNSX2au-2-PI57bwR9dDhOEazwkWGyKwEOCKyK1hcnIIo0nccvGP8j2o6a0JfLgloyK5Dvdyne5jVh_zDAXv-LdQ2FoXiLnJNnDx7_si0rISe0o3frEpPR-2Qajy5MCdKkIR3VfbvdSaVls0pc2HIi0HzCGIDIykbRiJq2n0qi0iiKdJxMD9oxv-QAQ1X87JrfAdfzXY3PdhBysPqPTmAw',
      href: ROUTES.article,
    },
    {
      kind: 'editorial',
      category: 'Editorial Choice',
      title: 'Sustainable Casting: Moving Towards Zero-Waste Production Lines.',
      copy:
        'How PRO-TAYLOR is implementing closed-loop aluminum recycling in our secondary smelting facility.',
      publishedAt: 'Feb 10, 2024',
      readTime: '6 Min Read',
      ctaLabel: 'Read Perspective',
      href: ROUTES.article,
    },
    {
      category: 'Buying Guides',
      title: 'Digital Twins: Is Your Facility Ready for Industry 4.0?',
      publishedAt: 'Jan 30, 2024',
      readTime: '18 Min Read',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBKcr3ca-ewQsftNSxR9vFEuEupY-rcoeyc22fOoeeKOKI0_Ak_AJ3E7gCELEQVkdlfEVqXitl_6UXzbDlvJ1AwGWiTEM_YiZDM-NQbVddkZ3zUIUn5wCb4-6INwc57mM7aLQeGt5NOKQkkJI5gOS4l04GmqO_3yKXX9IsijDxoeXn8dDbTrrWxxgxf-cx5w6QAl7LgNEP_DwYq4zuwicLdiPt5X_dwLF-gGvvZwBs4IUqNqH6ClG7WcGcIoaG3QSo0-w68mO4Wgw8',
      href: ROUTES.article,
      stagger: true,
    },
    {
      category: 'Industry Articles',
      title: 'The Future of QC: AI-Integrated Visual Inspections',
      publishedAt: 'Jan 15, 2024',
      readTime: '5 Min Read',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDMq9zqnlAjt1lhk95wRHmkJ1MHrBijxMvWkNh-u5Gbv9TpFgQa5w5jiRKZw187V-RYs6tq-QeXFEnA9fpj_3SRAty8gnk6pu1SwzjcujuQjuWJ6dHYKtsDVuCesEVI2VB7TDGw8C-diOV3PAEYCI_peqt-VlgBSbeIh1w7GDhH-05JjorwLAGMkzHf0sRJO4gzb71uhKLAvoopnMNNAgVv5MxkY9rgGCZ3O0NYEAKC7HyoyYgjBgEw9td_o67XcwroJIdjFwBXk5g',
      href: ROUTES.article,
    },
  ],
  cta: {
    eyebrow: 'Technical Literature',
    title: 'Get the Full 2024 Equipment Catalog.',
    copy:
      'Over 400 pages of technical specifications, material performance charts, and manufacturing tolerances for our entire production line.',
    fieldPlaceholder: 'Professional Email Address',
    buttonLabel: 'Download PDF',
    legal:
      'By downloading, you agree to our privacy policy and industrial compliance standards.',
  },
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
