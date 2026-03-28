import { ROUTES } from '@/fixtures/stitch/site'

export type ProductListingCard = {
  name: string
  subtitle: string
  specs: string[]
  bestFor: string
  href: string
  image: string
  imageAlt: string
  tone?: 'default' | 'technical'
}

export type ProductCategoryRecord = {
  slug: string
  name: string
  shortLabel: string
  countLabel: string
  overviewBlurb: string
  image: string
  imageAlt: string
  listing: {
    eyebrow: string
    title: string
    description: string
    trustLine: string
    primaryCtaLabel: string
    primaryCtaHref: string
    secondaryCtaLabel: string
    secondaryCtaHref: string
    countSummary: string
    controlSummary: string
    filters: string[]
    sortOptions: string[]
    products: ProductListingCard[]
    comparisonTitle: string
    comparisonRows: Array<{
      series: string
      output: string
      cooling: string
      footprint: string
      bestFor: string
    }>
    supportEyebrow: string
    supportTitle: string
    supportCopy: string
    supportBullets: string[]
    supportPrimaryLabel: string
    supportPrimaryHref: string
    supportSecondaryLabel: string
    supportSecondaryHref: string
    insightsTitle: string
    insightCards: Array<{
      title: string
      copy: string
    }>
    ctaTitle: string
    ctaCopy: string
    ctaPrimaryLabel: string
    ctaPrimaryHref: string
    ctaSecondaryLabel: string
    ctaSecondaryHref: string
  }
  guide: {
    eyebrow: string
    title: string
    description: string
    primaryCtaLabel: string
    primaryCtaHref: string
    secondaryCtaLabel: string
    secondaryCtaHref: string
    heroImage: string
    heroImageAlt: string
    heroNoteTitle: string
    heroNoteCopy: string
    heroNoteQuote?: string
    heroNoteAttribution?: string
    definitionTitle: string
    definitionCopy: string
    definitionParagraphs?: string[]
    definitionCards: Array<{
      title: string
      copy: string
      icon?: string
    }>
    contextsTitle: string
    contexts: Array<{
      title: string
      copy: string
      image: string
      imageAlt: string
    }>
    matrixTitle: string
    matrixEyebrow?: string
    matrixCards: Array<{
      title: string
      copy: string
      icon?: string
    }>
    pathsTitle: string
    pathsEyebrow?: string
    paths: Array<{
      step?: string
      title: string
      copy: string
      highlight?: string
      bullets?: string[]
    }>
    metrics: Array<{
      label: string
      value: string
    }>
    standardsTitle?: string
    standardsCopy?: string
    standardsStats?: Array<{
      value: string
      label: string
    }>
    faqTitle: string
    faqs: Array<{
      question: string
      answer: string
    }>
    resourcesTitle?: string
    resources?: Array<{
      label: string
      title: string
      href: string
    }>
    ctaTitle: string
    ctaCopy: string
    ctaPrimaryLabel: string
    ctaPrimaryHref: string
    ctaSecondaryLabel: string
    ctaSecondaryHref: string
  }
}

export function buildCategoryHref(slug: string) {
  return `/products/${slug}`
}

export function buildCategoryGuideHref(slug: string) {
  return `/products/${slug}/guide`
}

const softServeCards: ProductListingCard[] = [
  {
    name: 'ICM-T836 Twin-System',
    subtitle: 'Dual-hopper flagship for high-throughput dessert bars.',
    specs: ['36-40 L/H', 'Air + Pre-cooling', '2 x 6.5 L'],
    bestFor: 'Best for high-traffic QSR',
    href: ROUTES.product,
    image: '/product-detail-main.png',
    imageAlt: 'ICM-T836 twin-system soft serve machine',
  },
  {
    name: 'ICM-T520 Compact',
    subtitle: 'Compact footprint with quick recovery for boutique counters.',
    specs: ['18-24 L/H', 'Air Cooled', 'Single Flavor'],
    bestFor: 'Best for boutiques and kiosks',
    href: ROUTES.contact,
    image: '/product-detail-detail-1.png',
    imageAlt: 'Compact countertop soft serve machine',
  },
  {
    name: 'ICM-T930 Triple Output',
    subtitle: 'Premium three-flavor architecture for premium hospitality service.',
    specs: ['55-70 L/H', 'Water Hybrid', '3 Flavor'],
    bestFor: 'Best for hotels and buffet service',
    href: ROUTES.contact,
    image: '/product-detail-detail-2.png',
    imageAlt: 'Three-flavor soft serve machine',
  },
  {
    name: 'ICM-S Pasteurizing Series',
    subtitle: 'Integrated sanitation cycle for lower manual cleaning load.',
    specs: ['Pasteurizing', 'Heat Treatment', 'Night Mode'],
    bestFor: 'Best for chain operators',
    href: ROUTES.contact,
    image: '/product-detail-similar-1.png',
    imageAlt: 'Pasteurizing soft serve series',
    tone: 'technical',
  },
  {
    name: 'ICM-X Industrial Series',
    subtitle: 'Heavy-duty frame and export-ready voltage packages.',
    specs: ['Industrial 380V', 'High Output', 'OEM Ready'],
    bestFor: 'Best for distributors and OEM',
    href: ROUTES.contact,
    image: '/product-detail-similar-2.png',
    imageAlt: 'Industrial soft serve series',
    tone: 'technical',
  },
  {
    name: 'ICM-C Counter Series',
    subtitle: 'Elegant front-of-house soft serve for premium dessert concepts.',
    specs: ['Countertop', 'Quiet Operation', 'Compact Body'],
    bestFor: 'Best for front counter deployment',
    href: ROUTES.contact,
    image: '/product-detail-similar-3.png',
    imageAlt: 'Countertop soft serve series',
    tone: 'technical',
  },
]

function genericCards(
  prefix: string,
  image: string,
  imageAlt: string,
  bestFor: string,
): ProductListingCard[] {
  return [
    {
      name: `${prefix}-120 Core`,
      subtitle: 'Entry platform for compact commercial deployment.',
      specs: ['Entry Tier', 'Compact Footprint', '220V Ready'],
      bestFor,
      href: ROUTES.contact,
      image,
      imageAlt,
    },
    {
      name: `${prefix}-320 Flex`,
      subtitle: 'Balanced throughput and footprint for mixed-service programs.',
      specs: ['Mid Volume', 'Flexible Output', 'Export Ready'],
      bestFor: `Best for growing ${bestFor.toLowerCase()}`,
      href: ROUTES.contact,
      image,
      imageAlt,
    },
    {
      name: `${prefix}-680 Pro`,
      subtitle: 'High-output commercial unit for extended operating windows.',
      specs: ['High Output', 'Industrial Controls', '380V Option'],
      bestFor: 'Best for volume-driven operations',
      href: ROUTES.contact,
      image,
      imageAlt,
    },
    {
      name: `${prefix} OEM Platform`,
      subtitle: 'Configurable architecture for private-label or distributor supply.',
      specs: ['OEM Ready', 'Custom Voltage', 'Brand Integration'],
      bestFor: 'Best for OEM programs',
      href: ROUTES.contact,
      image,
      imageAlt,
      tone: 'technical',
    },
    {
      name: `${prefix} Export Series`,
      subtitle: 'Built for containerized shipment and distributor rollout.',
      specs: ['Seaworthy Pack', 'CE Support', 'Docs Included'],
      bestFor: 'Best for global importers',
      href: ROUTES.contact,
      image,
      imageAlt,
      tone: 'technical',
    },
    {
      name: `${prefix} Signature Line`,
      subtitle: 'Premium finish and customer-facing deployment quality.',
      specs: ['Quiet Operation', 'Premium Finish', 'Retail Ready'],
      bestFor: 'Best for front-of-house placement',
      href: ROUTES.contact,
      image,
      imageAlt,
      tone: 'technical',
    },
  ]
}

function createCategoryRecord(options: {
  slug: string
  name: string
  shortLabel: string
  countLabel: string
  overviewBlurb: string
  image: string
  imageAlt: string
  listingDescription: string
  guideTitle: string
  guideDescription: string
  bestFor: string
  cards?: ProductListingCard[]
  guideOverrides?: Partial<ProductCategoryRecord['guide']>
}) {
  const href = buildCategoryHref(options.slug)
  const guideHref = buildCategoryGuideHref(options.slug)
  const cards = options.cards ?? genericCards(options.shortLabel, options.image, options.imageAlt, options.bestFor)

  return {
    slug: options.slug,
    name: options.name,
    shortLabel: options.shortLabel,
    countLabel: options.countLabel,
    overviewBlurb: options.overviewBlurb,
    image: options.image,
    imageAlt: options.imageAlt,
    listing: {
      eyebrow: 'MODEL SERIES INDEX',
      title: options.name,
      description: options.listingDescription,
      trustLine: `Factory-direct sourcing support for ${options.countLabel.toLowerCase()} within this category.`,
      primaryCtaLabel: 'Request Quote',
      primaryCtaHref: ROUTES.contact,
      secondaryCtaLabel: 'Download Category Catalog',
      secondaryCtaHref: ROUTES.resources,
      countSummary: options.countLabel,
      controlSummary: 'Filter by output, footprint, cooling, and buyer fit.',
      filters: ['All Models', 'Compact', 'High Output', 'OEM Ready', 'Export Fit'],
      sortOptions: ['Featured', 'Output Capacity', 'Footprint', 'Best for Buyer Type'],
      products: cards,
      comparisonTitle: 'Technical Comparison',
      comparisonRows: [
        {
          series: `${options.shortLabel}-120`,
          output: 'Entry / Compact',
          cooling: 'Air Cooled',
          footprint: 'Counter / Small Footprint',
          bestFor: 'Boutique operations',
        },
        {
          series: `${options.shortLabel}-320`,
          output: 'Mid-Volume',
          cooling: 'Hybrid',
          footprint: 'Floor / Flexible',
          bestFor: 'General commercial service',
        },
        {
          series: `${options.shortLabel}-680`,
          output: 'High-Output',
          cooling: 'Water / Hybrid',
          footprint: 'Industrial Floor',
          bestFor: 'Chains and distributors',
        },
      ],
      supportEyebrow: 'Tailored for Operational Excellence',
      supportTitle: `Beyond the Spec Sheet for ${options.name}`,
      supportCopy:
        'Use this layer to narrow product families quickly, then move into the guide or detail pages for deeper technical evaluation.',
      supportBullets: [
        'Factory-direct lead time planning and export paperwork support',
        'OEM and voltage customization handled at quotation stage',
        'Application-first guidance for distributors, chains, and hospitality buyers',
      ],
      supportPrimaryLabel: 'Open Category Guide',
      supportPrimaryHref: guideHref,
      supportSecondaryLabel: 'Talk to Sales',
      supportSecondaryHref: ROUTES.contact,
      insightsTitle: 'Operator Insights',
      insightCards: [
        {
          title: 'Throughput First',
          copy: 'Start by identifying how many servings or units your peak window must sustain without quality drop-off.',
        },
        {
          title: 'Export Fit',
          copy: 'Voltage, cooling, and crate dimensions should be screened before you shortlist final models.',
        },
        {
          title: 'Support Layer',
          copy: 'Choose between an immediate quote path and a guide path depending on how much education your buyer still needs.',
        },
      ],
      ctaTitle: 'Partner with Precision',
      ctaCopy:
        'Need a shortlist, distributor quote, or OEM consultation? Our team can match the right series to your operating reality.',
      ctaPrimaryLabel: 'Request Category Quote',
      ctaPrimaryHref: ROUTES.contact,
      ctaSecondaryLabel: 'View Category Guide',
      ctaSecondaryHref: guideHref,
    },
    guide: {
      eyebrow: 'CATEGORY GUIDE',
      title: options.guideTitle,
      description: options.guideDescription,
      primaryCtaLabel: 'View Models in This Category',
      primaryCtaHref: href,
      secondaryCtaLabel: 'Request Quote',
      secondaryCtaHref: ROUTES.contact,
      heroImage: options.image,
      heroImageAlt: options.imageAlt,
      heroNoteTitle: 'Selection Support',
      heroNoteCopy: 'Built to bridge buyer intent with the right model family and quote path.',
      heroNoteQuote: '"Precision in temperature control defines the soul of the texture."',
      heroNoteAttribution: '— Engineering Lead',
      definitionTitle: `Defining ${options.name}`,
      definitionCopy:
        'This guide explains what this category is, where it performs best, and how commercial buyers should narrow their choices before comparing individual models.',
      definitionParagraphs: [
        'This guide explains what this category is, where it performs best, and how commercial buyers should narrow their choices before comparing individual models.',
      ],
      definitionCards: [
        {
          title: 'Who It Serves',
          copy: `${options.bestFor}, distributor programs, and operations that need commercial-grade reliability.`,
          icon: 'storefront',
        },
        {
          title: 'Why It Matters',
          copy: 'It separates high-level category education from the actual model-browsing layer, so buyers can either learn first or shortlist immediately.',
          icon: 'factory',
        },
      ],
      contextsTitle: 'Operational Contexts',
      contexts: [
        {
          title: 'Deployment by Throughput',
          copy: 'Use this category when output range and peak-window recovery are the first decision criteria.',
          image: options.image,
          imageAlt: options.imageAlt,
        },
        {
          title: 'Deployment by Format',
          copy: 'Use this category when space, service style, and front-of-house presentation are as important as the machine spec.',
          image: options.image,
          imageAlt: options.imageAlt,
        },
      ],
      matrixTitle: 'Engineering Matrix',
      matrixEyebrow: 'Factors that determine ROI',
      matrixCards: [
        {
          title: 'Output Capacity',
          copy: 'Shortlist by realistic peak-hour demand, not nominal daily totals.',
          icon: 'speed',
        },
        {
          title: 'Footprint & Layout',
          copy: 'Counter space, ventilation clearance, and operator movement all affect the right series choice.',
          icon: 'aspect_ratio',
        },
        {
          title: 'Cooling & Utilities',
          copy: 'Air, water, and hybrid options should be matched to the site and export environment.',
          icon: 'ac_unit',
        },
        {
          title: 'Cleaning Complexity',
          copy: 'Labor profile and sanitation routine often decide the better commercial fit.',
          icon: 'sanitizer',
        },
        {
          title: 'Voltage & Export',
          copy: 'Global configurations and documentation packages should be screened before the final shortlist.',
          icon: 'bolt',
        },
        {
          title: 'Texture Control',
          copy: 'Pump-fed and gravity-fed systems create very different mouthfeel and profitability profiles.',
          icon: 'texture',
        },
      ],
      pathsTitle: 'Recommended Paths',
      pathsEyebrow: 'Tailored for your scale',
      paths: [
        {
          step: '01',
          title: 'Entry / Compact',
          copy: 'For boutique operations and lower-volume launch environments.',
          highlight: 'Low footprint, fast onboarding',
          bullets: ['Countertop Models', 'Single Flavor Options', 'Gravity-Fed Simplicity'],
        },
        {
          step: '02',
          title: 'Mid-Volume / Flexible',
          copy: 'For mixed-format service where throughput and flexibility must stay balanced.',
          highlight: 'General commercial sweet spot',
          bullets: ['Dual Flavor + Twist', 'Integrated Air-Pumps', 'Stand-by Energy Mode'],
        },
        {
          step: '03',
          title: 'High-Output / Industrial',
          copy: 'For chains, distributors, and long operating windows where capacity is decisive.',
          highlight: 'Distributor and OEM ready',
          bullets: ['Heat-Treatment (Auto-Clean)', 'Remote Cloud Monitoring', '3-Phase Power Stability'],
        },
      ],
      metrics: [
        { label: 'Buyer Types', value: '4+' },
        { label: 'Model Families', value: options.countLabel },
        { label: 'Export Variants', value: 'Multi-Voltage' },
        { label: 'Quote Path', value: 'Factory Direct' },
      ],
      standardsTitle: 'Global Engineering Standards',
      standardsCopy:
        'Every PRO-TAYLOR unit undergoes a 72-hour stress test before export, ensuring zero-defect arrival in over 140 countries.',
      standardsStats: [
        { value: 'CE/UL', label: 'Certified Compliance' },
        { value: 'OEM', label: 'Ready Integration' },
        { value: '100%', label: 'Factory QA' },
        { value: '24/7', label: 'Global Support' },
      ],
      faqTitle: 'Category FAQ',
      faqs: [
        {
          question: `How should buyers compare ${options.name.toLowerCase()}?`,
          answer:
            'Start with throughput tier, then narrow by footprint, utility requirements, and the level of operator simplicity your site requires.',
        },
        {
          question: 'When should I open the guide instead of going directly to models?',
          answer:
            'Use the guide when the buyer still needs category education, use-case framing, or procurement reassurance before shortlisting specific models.',
        },
        {
          question: 'Can PRO-TAYLOR customize this category for OEM or export requirements?',
          answer:
            'Yes. Voltage, branding, finish details, and export packaging can all be discussed during the quotation process for qualified programs.',
        },
      ],
      resourcesTitle: 'Related Resources',
      resources: [
        { label: 'Tech Sheet', title: 'Voltage Customization Guide', href: ROUTES.resources },
        { label: 'Profitability', title: 'Soft Serve Margin Calculator', href: ROUTES.resources },
        { label: 'Operation', title: 'Daily Maintenance Checklists', href: ROUTES.resources },
      ],
      ctaTitle: 'Ready to Configure Your System?',
      ctaCopy:
        'Move from category understanding into model comparison, or talk directly with our commercial team about sourcing scope, OEM needs, and export handling.',
      ctaPrimaryLabel: 'Browse All Models',
      ctaPrimaryHref: href,
      ctaSecondaryLabel: 'Talk to Sales',
      ctaSecondaryHref: ROUTES.contact,
      ...options.guideOverrides,
    },
  } satisfies ProductCategoryRecord
}

export const productCategories = [
  createCategoryRecord({
    slug: 'soft-serve-machines',
    name: 'Soft Serve Machinery',
    shortLabel: 'SS',
    countLabel: '24 Model Families',
    overviewBlurb: 'Soft serve systems spanning compact counters to distributor-scale output platforms.',
    image: '/product-detail-main.png',
    imageAlt: 'Soft serve machinery category overview',
    listingDescription:
      'Browse soft serve series by output tier, cooling method, footprint, and buyer fit. This is the actual model-browsing layer for the category.',
    guideTitle: 'A Professional Guide to Soft Serve Systems',
    guideDescription:
      'Understand when soft serve equipment is the right category, how to choose within it, and when to move directly into series comparison.',
    bestFor: 'dessert shops and QSR operators',
    cards: softServeCards,
    guideOverrides: {
      heroImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDb7O0FdXFsfqJX67k4v_RyThdhxQqJTaZuHx2UilSGAN8doaLLclTworQE_nfkOADjAg1eag8j8jR3CQwyYwmzFv0Jj_EymQUNrzNNgSJO5IQkhzHMw0KujW_m0Z505uTSlpfdKKDvP8ZaZg9_KCl6eFmdfkheowqPXIQeAx2Ah51W4fwDMsC8394c3TvcEu4RHGzwbNNo_pRl6BrdMXSp0lxWL4VAFHhGbL0Ke-mloDJ62CSfFYVZIubQ1UEUPsYCrQu5zUkGeQs',
      heroImageAlt: 'Professional Soft Serve Machine',
      heroNoteQuote: '"Precision in temperature control defines the soul of the texture."',
      heroNoteAttribution: '— Engineering Lead',
      definitionTitle: 'Defining Your Operational Tier',
      definitionParagraphs: [
        "Soft serve requirements aren't just about volume; they are about recovery times and texture consistency during peak flows. Our categories are designed to map directly to business scale.",
        'Boutique & Artisan: For venues where quality is the primary driver, and soft serve is a curated add-on. Requires precision over raw output.',
        'High-Volume QSR: For industrial environments where the machine never stops. Built for 24/7 reliability and rapid-fire dispensing without losing overrun control.',
      ],
      definitionCards: [
        {
          title: 'Boutique Cafes',
          copy: 'Low footprint, high-precision aesthetic integrations.',
          icon: 'storefront',
        },
        {
          title: 'Industrial QSRs',
          copy: 'Continuous duty cycle, massive hopper capacity.',
          icon: 'factory',
        },
      ],
      contexts: [
        {
          title: 'High-Volume Event Catering',
          copy: 'Portable yet powerful systems designed for rapid setup and high-burst capacity during limited-time service windows.',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBgP0vz2rho3jKWalEtZZth-A8xmp8ABHX2V-fJypK2vdX76eyMkmYzZxPzGQbBN5aja1bJhlGjzZJG6sFfCCIJczt6ptzpQRk8RbRU7Az1WYV6Dkp-6bs066qOLi3cPe6kOsNgSXdh4F92zbev5IFPsY64XoE4IUFNKCIBaMugTAq8fh3_-RobNePbpPJqZ3JdxLDGUft_WrUwUtfe48i6Frp1oMDwARV_fWLBxGQJbh2Vkw1BFiKikS27Z7G5Q3KHzp44XJxVV4o',
          imageAlt: 'Event Catering',
        },
        {
          title: 'Artisan Dessert Bar',
          copy: 'Emphasis on multi-flavor versatility and precise overrun control to maintain high-density, premium mouthfeel.',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAqY8ToRwGepFtDO_uBsESBJSBS8v5OPTt3tGgNtocbGJIqiEnjg3tGxOdTgp4G-uhIY-x0yprH4VAA1Cp2fZYQmOUFa9fA5S9IJqW8s9nEtnPdQfRBbVA4v6xDkUC2ogPfRwzJMKkkHSyfScTETrlP22WcXoGUQIm9tdwSczikmdQ-tcyu3Q-aDycAw1E9V_22a5ovhzVy0aT_xlHwHoRCOjhlu08cS3rsyKxoO6GELw7aESx3WmsSXBF596xUPOFJuUQ7X7sC-QY',
          imageAlt: 'Artisan Dessert Bar',
        },
      ],
      matrixEyebrow: 'Factors that determine ROI',
      matrixCards: [
        {
          title: 'Output Capacity',
          copy: 'Measured in liters per hour. Essential to match your highest peak hour throughput to avoid soft, un-frozen product.',
          icon: 'speed',
        },
        {
          title: 'Footprint/Space',
          copy: 'Countertop vs floor-standing. Consider 15cm ventilation clearance for air-cooled systems in tight kitchens.',
          icon: 'aspect_ratio',
        },
        {
          title: 'Cooling System',
          copy: 'Air-cooled for flexibility; Water-cooled for quiet operation and high-heat environments (requires plumbing).',
          icon: 'ac_unit',
        },
        {
          title: 'Voltage/Export Compliance',
          copy: 'Global configurations: 110V/60Hz, 220V/50Hz, or 380V 3-Phase for extreme industrial loads.',
          icon: 'bolt',
        },
        {
          title: 'Cleaning Complexity',
          copy: 'Heat-treatment (pasteurizing) systems reduce manual cleaning frequency from daily to every 14–21 days.',
          icon: 'sanitizer',
        },
        {
          title: 'Overrun Control',
          copy: 'Gravity-fed for dense product; Pump-fed for high-volume, fluffy texture and maximum profit margins.',
          icon: 'texture',
        },
      ],
      pathsEyebrow: 'Tailored for your scale',
      paths: [
        {
          step: '01',
          title: 'Entry / Compact',
          copy: 'Ideal for low-to-mid volume locations where space is a premium. Focuses on ease of operation and low maintenance overhead.',
          bullets: ['Countertop Models', 'Single Flavor Options', 'Gravity-Fed Simplicity'],
        },
        {
          step: '02',
          title: 'Mid-Volume / Flexible',
          copy: 'The "Sweet Spot" for busy cafes and standalone dessert shops. Offers the best balance of speed, variety, and energy efficiency.',
          bullets: ['Dual Flavor + Twist', 'Integrated Air-Pumps', 'Stand-by Energy Mode'],
        },
        {
          step: '03',
          title: 'High-Output / Industrial',
          copy: 'Heavy-duty hardware for franchising and stadium-level traffic. Engineered for zero downtime and massive continuous output.',
          bullets: ['Heat-Treatment (Auto-Clean)', 'Remote Cloud Monitoring', '3-Phase Power Stability'],
        },
      ],
      standardsTitle: 'Global Engineering Standards',
      standardsCopy:
        'Every PRO-TAYLOR unit undergoes a 72-hour stress test before export, ensuring zero-defect arrival in over 140 countries.',
      standardsStats: [
        { value: 'CE/UL', label: 'Certified Compliance' },
        { value: 'OEM', label: 'Ready Integration' },
        { value: '100%', label: 'Factory QA' },
        { value: '24/7', label: 'Global Support' },
      ],
      faqTitle: 'Category FAQ',
      faqs: [
        {
          question: 'How do I choose between Air-cooled and Water-cooled?',
          answer:
            'Air-cooled is simpler and more popular, requiring only power. However, it releases heat into the room. Water-cooled is more efficient and silent, but requires a water line and drain.',
        },
        {
          question: 'What is "Overrun" and why does it matter?',
          answer:
            'Overrun is the amount of air whipped into the mix. Higher overrun (60-80%) makes the product fluffier and increases profitability. Lower overrun (30-40%) creates a rich, gelato-like density.',
        },
        {
          question: 'Do your machines support plant-based or vegan mixes?',
          answer:
            'Yes, all PRO-TAYLOR pump-fed systems are designed with adjustable consistency settings to accommodate the varying viscosity of oat, almond, and soy-based mixes.',
        },
      ],
      resourcesTitle: 'Related Resources',
      resources: [
        { label: 'Tech Sheet', title: 'Voltage Customization Guide', href: ROUTES.resources },
        { label: 'Profitability', title: 'Soft Serve Margin Calculator', href: ROUTES.resources },
        { label: 'Operation', title: 'Daily Maintenance Checklists', href: ROUTES.resources },
      ],
      ctaTitle: 'Ready to Configure Your System?',
      ctaCopy:
        'Browse our complete series or use our interactive comparison tool to find the exact model for your technical requirements.',
      ctaPrimaryLabel: 'Compare All Series',
      ctaPrimaryHref: buildCategoryHref('soft-serve-machines'),
      ctaSecondaryLabel: 'Browse All Soft Serve Models',
      ctaSecondaryHref: buildCategoryHref('soft-serve-machines'),
    },
  }),
  createCategoryRecord({
    slug: 'ice-lolly-machines',
    name: 'Ice Lolly Machinery',
    shortLabel: 'IL',
    countLabel: '18 Model Families',
    overviewBlurb: 'Brine-tank and demolding systems for novelty production and frozen dessert lines.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSUa9c9h-Y-OcvxuV87ynNRYkJ4MKH14y6LmdFMxSFWVeWvVrJMoc2Tp6Yrtr8KSqhNUfHwMiLql8fIbvJRtmT-6L0SjX0SRIgnJuN8M-40ZEgPAGhAiC1LKxkhMlO2PCnQNYVIuoea8G3TIkrZdEOhJpmncNQ2wNQlw8oi6Z-J0fzz4eN61AK-v4bRG0-UtlOCXRFVOL-fmbbckY65YGWYxwkCu9y23OXj2IeLqtzY2xg5XHzL11Nl2i3ulkLbmQ96NcQ7_lgjk0',
    imageAlt: 'Ice lolly machinery category overview',
    listingDescription:
      'Review mold-based lolly systems by production rhythm, demolding workflow, and export configuration fit.',
    guideTitle: 'A Professional Guide to Ice Lolly Production Systems',
    guideDescription:
      'Use this guide to decide what production format, mold logic, and throughput level your frozen novelty business actually needs.',
    bestFor: 'frozen novelty manufacturers',
  }),
  createCategoryRecord({
    slug: 'slush-freezer-machines',
    name: 'Slush Freezer Machinery',
    shortLabel: 'SF',
    countLabel: '15 Model Families',
    overviewBlurb: 'Frozen beverage systems for convenience, leisure, hospitality, and mixed drink programs.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDR5V3LeOGZf-vy0c_RctWFWuif9npy4YlcO0mgV-ece9PwkviaIzAi4iwPWROXMKweH2QlTNW3J4suFvaOdpLfP4tphct4S-8YPx1ZqRV4H8MujP68AHt7Lt3-dinCoY-vNe7MIY3cSpa3s52c8rQCylcmYnR8-SRuWF-wrxwhykv4aBppWLKsAbjE2FSIqyaIwmAg1hxZUYvRej3dw5ghZnC8kEeqLr52qZD4Zm34-SGJWi_saaX9DqbmQYpTD2YOCVezTr9qj2o',
    imageAlt: 'Slush freezer machinery category overview',
    listingDescription:
      'Compare slush systems by bowl count, freezing speed, beverage format, and high-turnover suitability.',
    guideTitle: 'A Professional Guide to Slush Freezer Systems',
    guideDescription:
      'Understand how bowl format, cleaning workflow, and service style affect the right slush system choice.',
    bestFor: 'beverage operators and convenience retail',
  }),
  createCategoryRecord({
    slug: 'gelato-batch-freezers',
    name: 'Gelato Batch Freezers',
    shortLabel: 'GB',
    countLabel: '12 Model Families',
    overviewBlurb: 'Texture-first batch freezing systems for artisan gelato labs and premium dessert concepts.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBNLtcGo1taIKNBfav4T2IldFaXBizwMFp6rK7tjB2VymOYKHVvVUILUkVZyx1MrVe-RadcYDKJ5LwK2PU9bmVJ5Iz9SgzuwdfayvV2t2XlJ-1ZKRtXaFoUDbWFHB6xW6banPxuGE8FAzpHdbIEyHaxGmY00B8DokIoXnip1yCpmsouM-DF37OSLEMo4W8zxMefnALKPuXt5DfIiU_0Izc8CqFvgjUEKuw3JY0MeBjVMQdKHlIwLSzt-UHmcvQb0Iwt3dmpy_FG0GY',
    imageAlt: 'Gelato batch freezer category overview',
    listingDescription:
      'Browse gelato freezers by batch size, extraction style, and control level for artisanal production environments.',
    guideTitle: 'A Professional Guide to Gelato Batch Freezers',
    guideDescription:
      'This guide helps buyers align texture goals, batch rhythm, and production scale with the right gelato freezing platform.',
    bestFor: 'artisan gelato labs',
  }),
  createCategoryRecord({
    slug: 'multifunction-frozen-drink-machines',
    name: 'Multifunction Frozen Drink Systems',
    shortLabel: 'FD',
    countLabel: '14 Model Families',
    overviewBlurb: 'Hybrid systems for granita, frozen cocktails, and flexible beverage menus.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuApEAGJZuRPwAhgTwjHxGBJLx5jFpGvH_bKlnrhzmhapF4XUMyTuPkbXsSoLQyzAkgexz5tdPwU6d8u4K--kOqfzjZLDGsmKjIcl6fh1ZyfZpxTkVTwG-DOnN905UCxA76-tjGNrIOJx0JavTp9JqMTp_3BRd68ERqwQs9bU710y0tE4O9IuFJNRzJHJiVBePyc3lSTomnaAmBJxj_hrhEYnSVc8CBlwGBIfBnkK17f8KPoSvp6Z0LaZokI7jRYHxk3gmVMQXYUim4',
    imageAlt: 'Frozen drink systems category overview',
    listingDescription:
      'Choose between menu-flexible frozen drink platforms by service style, capacity, and product range.',
    guideTitle: 'A Professional Guide to Multifunction Frozen Drink Systems',
    guideDescription:
      'Use this guide when your decision depends on menu flexibility, beverage variety, and the right balance between footprint and output.',
    bestFor: 'mixed-format beverage programs',
  }),
  createCategoryRecord({
    slug: 'ice-makers-related-equipment',
    name: 'Ice Makers & Related Equipment',
    shortLabel: 'IM',
    countLabel: '10 Model Families',
    overviewBlurb: 'Support equipment for ice generation, holding, and related beverage prep infrastructure.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Xj984hT85QDHtiVVPlOE6tcNvdwe8lvnsM4GyOpFdDLQiOYe6LlAotVmIyU8pwWJri3Upzgs4L0eUK_rMznXW8Ai0ggrhpqjm7ejwx2QFx31jvW5_-Khsy4JMaSytzSPu2y1xXMqyprEoJlC8lWjNA3teB76ELdzQuD8soLt-xMX2Z40vQtrHiwlIHdGRtzMB_QPA8Aoy2l9mYAVBghD-jC495R6XnV393vPnf4ZIog2jZbK0PeBqCVScGiFyA3KF3dsr8EWXI8',
    imageAlt: 'Ice makers and related equipment category overview',
    listingDescription:
      'Review ice-making support equipment by capacity, cube type, storage, and deployment scenario.',
    guideTitle: 'A Professional Guide to Ice Makers & Related Equipment',
    guideDescription:
      'This guide helps buyers understand how supporting equipment should be selected around the main dessert or beverage production line.',
    bestFor: 'supporting beverage infrastructure',
  }),
] as const satisfies readonly ProductCategoryRecord[]

export type ProductCategory = (typeof productCategories)[number]

export function getProductCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug)
}

export const productsOverviewFixture = {
  eyebrow: 'Manufacturing Excellence',
  title: 'Precision-Engineered Frozen Dessert Systems',
  description:
    'Explore PRO-TAYLOR by product family first, then choose whether to browse models directly or open the category guide for buying logic and sourcing context.',
  primaryCtaLabel: 'Request Master Catalog',
  primaryCtaHref: ROUTES.contact,
  secondaryCtaLabel: 'View Soft Serve Models',
  secondaryCtaHref: buildCategoryHref('soft-serve-machines'),
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuApnMncHh1Oq6eRIN27y8fEGYJneuQiZlFUNH8lCOD-h_7r1lNOfUO2MyCcVBJ75H7BHTzNSnGrOt67pplbM7NYi4e-PVC8vqcg39BVW8P_YJsZsQTjyNtnF1X1B6Dp1zVgr4uO-JHhdB7uKs8iNmg6P3f77O3g0uvc-NQ3kZXHy44iFLUqLvlYplHIGwuRtb9db_K4PF8oKNxD27oDher1itUYkLQlizdx4sDdWgi5eoHKg7Sp5H23AeDCylesKLXUBdSpBfMwQIo',
  heroAlt: 'Featured PRO-TAYLOR soft serve machine',
  featuredLabel: 'Featured Model',
  featuredTitle: 'The PT-900 High-Output Series',
  categories: productCategories.map((category) => ({
    name: category.name,
    count: category.countLabel,
    image: category.image,
    alt: category.imageAlt,
    blurb: category.overviewBlurb,
    href: buildCategoryHref(category.slug),
    guideHref: buildCategoryGuideHref(category.slug),
  })),
  selectionGuide: {
    columns: ['Business Need', 'Recommended Layer', 'Primary Next Click', 'Why'],
    rows: [
      ['Need a shortlist fast', 'Category Listing', 'Browse Models', 'Best when the buyer is already category-aware'],
      ['Need education first', 'Category Guide', 'Open Guide', 'Best when the buyer still needs category logic and selection support'],
      ['Know the exact machine', 'Product Detail', 'View Product', 'Best when the buyer is ready for technical evaluation'],
    ],
  },
  spotlight: {
    eyebrow: 'Showroom Logic',
    title: 'Products First. Guides Second. Detail Pages Last.',
    copy:
      'The product IA now separates model browsing from editorial guidance, so buyers can either move fast or learn first without one page trying to do both jobs.',
    ctaLabel: 'Open Soft Serve Guide',
    href: buildCategoryGuideHref('soft-serve-machines'),
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDH748o06q9Lh-L_GmaWPkKgBehskf9IAt7ocS_vcJI7Iu34eqYBeyJae7xkokydkezqtc6M6hvaeeq1Dzke6-lQq6kRjd_wNyzJpiPDxOweeJ_3VDPg-M1f2n7f1JU-ADyuJiZ888fvLXcMMaSIyWzlifoXUMp_hWdXj-pesrZXyLWysCdsRj-hcpxo4-eQnPYx_iYIWUBnF7dVd2n510hbPHWBVjz9VMgaJdsiBhuZ9CAN6qmqE6jFrDSZ5aPinm_ncUCUBzFaNg',
  },
  resources: [
    {
      eyebrow: 'Buying Guide',
      title: 'How to Choose the Right Soft Serve Machine',
      copy: 'A practical path through throughput, overrun control, utilities, and cleaning complexity.',
      href: buildCategoryGuideHref('soft-serve-machines'),
    },
    {
      eyebrow: 'Category Listing',
      title: 'Browse Current Soft Serve Model Families',
      copy: 'Go directly into the listing layer when you already know the category and want to compare specific series.',
      href: buildCategoryHref('soft-serve-machines'),
    },
  ],
  faqs: [
    {
      question: 'Should buyers start from Products, a category listing, or a guide page?',
      answer:
        'Start from Products if the buyer still needs to choose a machine family. Start from the category listing if the family is already known. Start from the guide when the buyer needs category-level education before comparing models.',
    },
    {
      question: 'Why separate the guide page from the listing page?',
      answer:
        'Because one page should not try to be both an editorial explainer and a true PLP. The split reduces confusion and scales better across 20+ categories and 300+ products.',
    },
  ],
  cta: {
    title: 'Tell us how you want to buy',
    copy:
      'We can point you to the right listing page, the right guide page, or the right product series based on buyer type, output target, and export destination.',
    contactOptions: [
      { label: 'Distributor Inquiry', href: ROUTES.contact, icon: 'storefront' },
      { label: 'OEM Program', href: ROUTES.contact, icon: 'manufacturing' },
    ],
    form: {
      companyPlaceholder: 'Company Name',
      businessTypeOptions: ['Distributor', 'OEM / Private Label', 'Cafe / Dessert Brand', 'Hospitality Group'],
      volumePlaceholder: 'Tell us your target output or deployment plan',
      submitLabel: 'Request Guided Recommendation',
    },
  },
} as const
