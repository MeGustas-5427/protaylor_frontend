import { ROUTES } from '@/fixtures/stitch/site'

export type ProductListingCard = {
  badge?: string
  badgeTone?: 'secondary' | 'surface' | 'primary'
  name: string
  seriesLabel?: string
  description: string
  metrics?: Array<{
    label: string
    value: string
  }>
  href: string
  image: string
  imageAlt: string
  slug: string
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
    badgeLabel: string
    primaryCtaLabel: string
    primaryCtaHref: string
    secondaryCtaLabel: string
    secondaryCtaHref: string
    controlLabel: string
    countSummary: string
    machineTypeLabel?: string
    machineTypeTabs?: Array<{
      label: string
      href: string
      isActive: boolean
    }>
    currentOrderBy?: string
    activeSubcategorySlug?: string | null
    filters: string[]
    sortLabel: string
    sortOptions: string[]
    products: ProductListingCard[]
    comparisonTitle?: string
    comparisonCopy?: string
    comparisonCtaLabel?: string
    comparisonCtaHref?: string
    comparisonColumns?: string[]
    comparisonRows?: Array<{
      feature: string
      values: string[]
    }>
    operationalTitle: string
    operationalSegments: Array<{
      title: string
      copy: string
      icon?: string
    }>
    buyingFactorsTitle: string
    buyingFactors: Array<{
      title: string
      copy: string
      icon?: string
    }>
    insightsTitle: string
    insightFaqs: Array<{
      question: string
      answer: string
    }>
    resourceCards: Array<{
      icon?: string
      title: string
      copy: string
      ctaLabel: string
      ctaHref: string
      ctaIcon?: string
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

export const CATEGORY_PRODUCTS_PER_PAGE = 12

type ProductCardSeed = Omit<ProductListingCard, 'href' | 'slug'> & {
  slug?: string
}

export type ProductPagination = {
  currentPage: number
  totalPages: number
  totalProducts: number
  pageSize: number
  startItem: number
  endItem: number
  products: ProductListingCard[]
}

export type ProductFixture = {
  categorySlug: string
  slug: string
  title: string
  series: string
  description: string
}

export function buildProductHref(categorySlug: string, productSlug: string) {
  return `/products/${categorySlug}/${productSlug}`
}

function slugifyProductName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function createProductCard(categorySlug: string, seed: ProductCardSeed): ProductListingCard {
  const slug = seed.slug ?? slugifyProductName(seed.name)

  return {
    ...seed,
    slug,
    href: buildProductHref(categorySlug, slug),
  }
}

function createProductCards(categorySlug: string, seeds: ProductCardSeed[]) {
  return seeds.map((seed) => createProductCard(categorySlug, seed))
}

const softServeImages = {
  flagship:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBn01u7n-hnusZbMt0058n-QmYYrHNsdXMjJwsp7FJHcMxMm8i7J5OL956WzazEW8-mYpn3erGOHtR0pJrhulnchsDzwb9ak6sB17ZfogrUo1lj5RXT-rUUSkExr37jUJpZRfq1i0XAxWBbD933t0_ZaPoYxapeehAdFwVjUw3bI4UEc3_FNnWl8nQjbiwcmf9hz8_8pd2xIualZIvf4uzBNHiUb_AUCOPOlZGG6dfB5HgJ2T6qMKgNbb24VGEvl0xyRqCRom7hnNI',
  compact:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC7znYWwophyTS_og3tDDvjCxzaYeatnVu_yauCitp-WwNg2b3TqrDXnuIinyv1pD-yKKjinLI9bK6IjVEE5e-QDClmz1-XbuEVIKBbGGhU5zHiYTv-Drr-23xPUqSrN9V0tt0AwnyRPmzPXxSqFdq4P7skuqG_cvPTR5ItWMT-J5T_OG2nU9iyNxt5-XHOHf1LS2sa88LJsSJmY5OwkqtzfRNFS2v8C7PmX_1VePoNO7-NjuwNMqOkogXrGihbCBYDpfd7xhBtUgE',
  industrial:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAc0-KsreTc_wGen3WGxABWKA1spfY90ZeYAjI6BwVADevGkdxqvOec89W1ZW8H3nf_5PJaK_e5oYxL0CaFk3WXuPrKoJMUyqCvF6CzdlsYL61Js9O1VvnZz1scPWY6vQMPri5fvhHjyo5w576ex4NDV6CSHUtB8HdTSdqRcVuoYKEeO8HmP0oFKU-NlXg7_DQ_z5agPRiw-6rQekHyvSOKWt95JYjQqaaGyiqQsa8_N1Ej-fkq2ecCC3GbUJwWMxhajy75sfsfLhE',
  versatile:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB4PylyQ9zQKPExrw2j00GLpkPhTy2WoHHA7KoDd-nJcqTTNn2rwt2bvEXOGer1LcOZjzM7zKMUo-rBQeVPpcLJEYPrIb-GFa-dzgIRfatSoJSBg_UkaDqaRbhFASKrSK4pIwvovl3NwJlD3IzfAjvawD_jaFPF71QDTg0RJvFDJOr5e07GlpkIWOiMpYhZQwj09W6VNKZLFQyvYcC9csSHwKI1W7qKa0LUo7OsgGT8pekgvO7iil0I2z-ejrG-cD4C9b3BWkyTljc',
  vertical:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCfPzDN_pcoalFJeCD7Ebn-6yXtn3OpxHppQ05v0_Kat8v-uVUgEPWvnrD9RZsvaC41FKMfcDUo4QirCn7BtjQfEoFBRB3OpQjPOH5dLH7CKv9UEmoQczI5P_n5zF4CuGjNR6TB3E3IU91TyM1MbXpaV5iJkC3oUWpnSDt0fm34-dyI_nzvJ_EGxROKYXEwVuHoGOJR1ADLf1EDF8WKrS5MJD3l_QGvW3n11lAdhrvPMXgOf-bz-oAQ2JhhEQXgZTYDy94W-ot4K6U',
  gravity:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAyyZnrR6pJnrlAiVa2hyUW1HZpcypJNPmmtko46AHRpkzJ1PFDabJbXeOaEBL-Ku8d4wjBy7LL32wdkf8XjQJoT-2vkEYGwvp_QEvaBAoj9FNb2KkLrX30jJa3FJpxGqEybd95JTOIjagyDpT_cAdM4FHbwtX2ISO8rnev8ItarwOSJjdMhG3QFzp4_TSkkWbrY5bJ2AgYFk7QKPpEfkuBzb2qpfdYDSZRy-uom9lO2U8IZgw3uIbuwS4_bMqsFdM7kFX9vZhiaW8',
} as const

const softServeCards = createProductCards('soft-serve-machines', [
  {
    slug: 'icm-t836-twin-system-soft-serve-machine',
    badge: 'High-Traffic QSR',
    badgeTone: 'secondary',
    name: 'ICM-T836 Twin Twist',
    seriesLabel: 'Series 8',
    description: 'High-volume production for QSR and flagship franchises. Advanced dual-system isolation.',
    metrics: [
      { label: 'Output', value: '45 L/hr' },
      { label: 'Hopper', value: '2 x 6.5L' },
      { label: 'Cooling', value: 'Air + Pre' },
    ],
    image: softServeImages.flagship,
    imageAlt: 'Industrial soft serve machine',
  },
  {
    badge: 'Boutique',
    badgeTone: 'surface',
    name: 'ICM-C12 Compact Single',
    seriesLabel: 'Series 1',
    description: 'Precision-tuned for small batches. Low-noise operation for curated cafe environments.',
    metrics: [
      { label: 'Output', value: '18 L/hr' },
      { label: 'Hopper', value: '1 x 8.0L' },
      { label: 'Cooling', value: 'Air Only' },
    ],
    image: softServeImages.compact,
    imageAlt: 'Compact countertop soft serve machine',
  },
  {
    badge: 'Industrial',
    badgeTone: 'primary',
    name: 'ICM-X900 Turbo Series',
    seriesLabel: 'Series X',
    description: 'Continuous production capacity for amusement parks and industrial food courts.',
    metrics: [
      { label: 'Output', value: '95 L/hr' },
      { label: 'Hopper', value: '2 x 15L' },
      { label: 'Cooling', value: 'Water/Air' },
    ],
    image: softServeImages.industrial,
    imageAlt: 'High-output industrial soft serve machine',
  },
  {
    badge: 'Best Margin',
    badgeTone: 'surface',
    name: 'ICM-T500 Pro',
    seriesLabel: 'Series 5',
    description: 'Balanced twin-twist platform for regional chains needing faster recovery without industrial utilities.',
    metrics: [
      { label: 'Output', value: '30 L/hr' },
      { label: 'Hopper', value: '2 x 5.5L' },
      { label: 'Cooling', value: 'Air' },
    ],
    image: softServeImages.versatile,
    imageAlt: 'Mid-volume soft serve machine',
  },
  {
    badge: 'Energy Smart',
    badgeTone: 'surface',
    name: 'ICM-S100 Eco',
    seriesLabel: 'Series S',
    description: 'Single-flavor energy-saving unit for compact service counters and low-labor dessert concepts.',
    metrics: [
      { label: 'Output', value: '16 L/hr' },
      { label: 'Hopper', value: '1 x 7.0L' },
      { label: 'Cooling', value: 'Air' },
    ],
    image: softServeImages.vertical,
    imageAlt: 'Energy efficient soft serve machine',
  },
  {
    badge: 'Dense Texture',
    badgeTone: 'surface',
    name: 'ICM-V Series',
    seriesLabel: 'Series V',
    description: 'Vertical gravity-fed architecture for premium dense texture and simplified operator training.',
    metrics: [
      { label: 'Output', value: '24 L/hr' },
      { label: 'Hopper', value: '1 x 10L' },
      { label: 'Cooling', value: 'Air' },
    ],
    image: softServeImages.gravity,
    imageAlt: 'Gravity-fed soft serve machine',
  },
  {
    name: 'ICM-D420 Duo Air',
    seriesLabel: 'Series 4',
    description: 'Dual-flavor air-pump unit for dessert kiosks balancing overrun control and compact footprint.',
    metrics: [
      { label: 'Output', value: '26 L/hr' },
      { label: 'Hopper', value: '2 x 4.5L' },
      { label: 'Cooling', value: 'Air' },
    ],
    image: softServeImages.compact,
    imageAlt: 'Dual-flavor air-pump soft serve machine',
  },
  {
    name: 'ICM-P280 Pump Craft',
    seriesLabel: 'Series P',
    description: 'Pump-fed countertop machine tuned for premium swirl texture in boutique concept stores.',
    metrics: [
      { label: 'Output', value: '20 L/hr' },
      { label: 'Hopper', value: '1 x 8.5L' },
      { label: 'Cooling', value: 'Air' },
    ],
    image: softServeImages.compact,
    imageAlt: 'Pump-fed countertop soft serve machine',
  },
  {
    name: 'ICM-H560 Heat Treat',
    seriesLabel: 'Series H',
    description: 'Heat-treatment cleaning cycle reduces manual wash labor for busy franchised dessert programs.',
    metrics: [
      { label: 'Output', value: '38 L/hr' },
      { label: 'Hopper', value: '2 x 6.0L' },
      { label: 'Cooling', value: 'Air + Pre' },
    ],
    image: softServeImages.flagship,
    imageAlt: 'Heat-treatment soft serve machine',
  },
  {
    name: 'ICM-W700 Water Quiet',
    seriesLabel: 'Series W',
    description: 'Water-cooled chassis for premium hospitality counters where acoustic comfort matters.',
    metrics: [
      { label: 'Output', value: '42 L/hr' },
      { label: 'Hopper', value: '2 x 6.5L' },
      { label: 'Cooling', value: 'Water' },
    ],
    image: softServeImages.industrial,
    imageAlt: 'Water-cooled soft serve machine',
  },
  {
    name: 'ICM-K240 Kiosk Duo',
    seriesLabel: 'Series K',
    description: 'Narrow-depth dual-flavor configuration for island kiosks and mall concession footprints.',
    metrics: [
      { label: 'Output', value: '24 L/hr' },
      { label: 'Hopper', value: '2 x 4.2L' },
      { label: 'Cooling', value: 'Air' },
    ],
    image: softServeImages.versatile,
    imageAlt: 'Kiosk soft serve machine',
  },
  {
    name: 'ICM-F680 Franchise Max',
    seriesLabel: 'Series F',
    description: 'Standardized twin-twist package created for multi-store franchise rollouts and operator handoff.',
    metrics: [
      { label: 'Output', value: '48 L/hr' },
      { label: 'Hopper', value: '2 x 8.0L' },
      { label: 'Cooling', value: 'Air + Pre' },
    ],
    image: softServeImages.flagship,
    imageAlt: 'Franchise-grade soft serve machine',
  },
  {
    name: 'ICM-L210 Lab Counter',
    seriesLabel: 'Series L',
    description: 'R&D-friendly platform for test kitchens and premium labs validating new mix recipes.',
    metrics: [
      { label: 'Output', value: '12 L/hr' },
      { label: 'Hopper', value: '1 x 6.0L' },
      { label: 'Cooling', value: 'Air' },
    ],
    image: softServeImages.compact,
    imageAlt: 'Laboratory countertop soft serve machine',
  },
  {
    name: 'ICM-M320 Multi Twist',
    seriesLabel: 'Series M',
    description: 'Mid-volume platform with quick flavor transition routines and stable texture for dessert bars.',
    metrics: [
      { label: 'Output', value: '28 L/hr' },
      { label: 'Hopper', value: '2 x 5.0L' },
      { label: 'Cooling', value: 'Air' },
    ],
    image: softServeImages.versatile,
    imageAlt: 'Multi-twist soft serve machine',
  },
  {
    name: 'ICM-R800 Resort Twin',
    seriesLabel: 'Series R',
    description: 'Front-of-house ready stainless finish tailored to hotels, buffets, and leisure destinations.',
    metrics: [
      { label: 'Output', value: '44 L/hr' },
      { label: 'Hopper', value: '2 x 7.5L' },
      { label: 'Cooling', value: 'Water' },
    ],
    image: softServeImages.flagship,
    imageAlt: 'Hospitality soft serve machine',
  },
  {
    name: 'ICM-Q360 Queue Breaker',
    seriesLabel: 'Series Q',
    description: 'Fast-recovery system tuned for lunch-rush windows and short-queue retail operations.',
    metrics: [
      { label: 'Output', value: '32 L/hr' },
      { label: 'Hopper', value: '2 x 5.5L' },
      { label: 'Cooling', value: 'Air + Pre' },
    ],
    image: softServeImages.versatile,
    imageAlt: 'Fast-recovery soft serve machine',
  },
  {
    name: 'ICM-N180 Niche Single',
    seriesLabel: 'Series N',
    description: 'Entry single-flavor machine for specialty yogurt, trial menus, and compact seasonal programs.',
    metrics: [
      { label: 'Output', value: '14 L/hr' },
      { label: 'Hopper', value: '1 x 6.5L' },
      { label: 'Cooling', value: 'Air' },
    ],
    image: softServeImages.vertical,
    imageAlt: 'Single-flavor seasonal soft serve machine',
  },
  {
    name: 'ICM-A600 Auto Clean',
    seriesLabel: 'Series A',
    description: 'Pasteurizing auto-clean system for sites minimizing sanitation labor and overnight downtime.',
    metrics: [
      { label: 'Output', value: '40 L/hr' },
      { label: 'Hopper', value: '2 x 7.0L' },
      { label: 'Cooling', value: 'Air + Pre' },
    ],
    image: softServeImages.flagship,
    imageAlt: 'Auto-clean soft serve machine',
  },
  {
    name: 'ICM-G260 Gravity Craft',
    seriesLabel: 'Series G',
    description: 'Gravity-fed flavor density specialist for premium yogurt and gelato-style soft serve.',
    metrics: [
      { label: 'Output', value: '22 L/hr' },
      { label: 'Hopper', value: '1 x 8.0L' },
      { label: 'Cooling', value: 'Air' },
    ],
    image: softServeImages.gravity,
    imageAlt: 'Gravity craft soft serve machine',
  },
  {
    name: 'ICM-Z980 Stadium Force',
    seriesLabel: 'Series Z',
    description: 'Extreme-output twin system for arenas, food courts, and distributor-driven fleet deployments.',
    metrics: [
      { label: 'Output', value: '108 L/hr' },
      { label: 'Hopper', value: '2 x 16L' },
      { label: 'Cooling', value: 'Water/Air' },
    ],
    image: softServeImages.industrial,
    imageAlt: 'Stadium-grade soft serve machine',
  },
  {
    name: 'ICM-E220 Eco Counter',
    seriesLabel: 'Series E',
    description: 'Low-consumption countertop chassis for operators prioritizing utility efficiency and simplicity.',
    metrics: [
      { label: 'Output', value: '15 L/hr' },
      { label: 'Hopper', value: '1 x 7.0L' },
      { label: 'Cooling', value: 'Air' },
    ],
    image: softServeImages.compact,
    imageAlt: 'Eco countertop soft serve machine',
  },
  {
    name: 'ICM-U740 Utility Twin',
    seriesLabel: 'Series U',
    description: 'Robust export-ready twin system with simplified maintenance access for distributor service teams.',
    metrics: [
      { label: 'Output', value: '46 L/hr' },
      { label: 'Hopper', value: '2 x 6.8L' },
      { label: 'Cooling', value: 'Air + Pre' },
    ],
    image: softServeImages.versatile,
    imageAlt: 'Utility twin soft serve machine',
  },
  {
    name: 'ICM-B340 Buffet Prime',
    seriesLabel: 'Series B',
    description: 'Quiet buffet-oriented configuration with stainless presentation and clean front-facing service.',
    metrics: [
      { label: 'Output', value: '29 L/hr' },
      { label: 'Hopper', value: '2 x 4.8L' },
      { label: 'Cooling', value: 'Water' },
    ],
    image: softServeImages.flagship,
    imageAlt: 'Buffet soft serve machine',
  },
  {
    name: 'ICM-O500 OEM Frame',
    seriesLabel: 'Series O',
    description: 'Chassis-first OEM platform optimized for private-label control panels and export voltage packages.',
    metrics: [
      { label: 'Output', value: '34 L/hr' },
      { label: 'Hopper', value: '2 x 6.0L' },
      { label: 'Cooling', value: 'Hybrid' },
    ],
    image: softServeImages.vertical,
    imageAlt: 'OEM frame soft serve machine',
  },
])

function genericCards(
  categorySlug: string,
  prefix: string,
  image: string,
  imageAlt: string,
  bestFor: string,
  count: number,
): ProductListingCard[] {
  const descriptors = [
    { name: 'Core', output: 'Entry', format: 'Compact', power: 'Air', copy: 'Entry platform for compact commercial deployment.' },
    { name: 'Flex', output: 'Mid Volume', format: 'Flexible', power: 'Hybrid', copy: 'Balanced throughput and footprint for mixed-service programs.' },
    { name: 'Pro', output: 'High Output', format: 'Large', power: 'Water/Air', copy: 'High-output commercial unit for extended operating windows.' },
    { name: 'Select', output: 'Service', format: 'Retail', power: 'Air', copy: 'Service-oriented model for operator-friendly daily production.' },
    { name: 'Export', output: 'Export', format: 'Factory', power: 'Hybrid', copy: 'Built for containerized shipment and distributor rollout.' },
    { name: 'Signature', output: 'Premium', format: 'Showroom', power: 'Air', copy: `Premium finish tuned for ${bestFor.toLowerCase()}.` },
  ]

  return createProductCards(
    categorySlug,
    Array.from({ length: count }, (_, index) => {
      const descriptor = descriptors[index % descriptors.length]
      const modelCode = 120 + index * 40
      const tier = Math.floor(index / descriptors.length) + 1

      return {
        badge:
          index === 0 ? 'Core' : index === 1 ? 'Flexible' : index === 2 ? 'Industrial' : undefined,
        badgeTone: index === 2 ? 'primary' : 'surface',
        name: `${prefix}-${modelCode} ${descriptor.name}`,
        seriesLabel: `Series ${tier}`,
        description: descriptor.copy,
        metrics: [
          { label: 'Output', value: descriptor.output },
          { label: 'Format', value: descriptor.format },
          { label: 'Power', value: descriptor.power },
        ],
        image,
        imageAlt,
      }
    }),
  )
}

export function getCategoryListingPagination(
  category: ProductCategoryRecord,
  currentPage: number,
  pageSize = CATEGORY_PRODUCTS_PER_PAGE,
): ProductPagination {
  const totalProducts = category.listing.products.length
  const totalPages = Math.max(1, Math.ceil(totalProducts / pageSize))
  const normalizedPage = Math.min(Math.max(currentPage, 1), totalPages)
  const startIndex = (normalizedPage - 1) * pageSize
  const endIndexExclusive = Math.min(startIndex + pageSize, totalProducts)

  return {
    currentPage: normalizedPage,
    totalPages,
    totalProducts,
    pageSize,
    startItem: totalProducts === 0 ? 0 : startIndex + 1,
    endItem: endIndexExclusive,
    products: category.listing.products.slice(startIndex, endIndexExclusive),
  }
}

function createCategoryRecord(options: {
  slug: string
  name: string
  shortLabel: string
  countLabel: string
  productCount: number
  overviewBlurb: string
  image: string
  imageAlt: string
  listingDescription: string
  guideTitle: string
  guideDescription: string
  bestFor: string
  cards?: ProductListingCard[]
  listingOverrides?: Partial<ProductCategoryRecord['listing']>
  guideOverrides?: Partial<ProductCategoryRecord['guide']>
}) {
  const href = buildCategoryHref(options.slug)
  const cards =
    options.cards ??
    genericCards(
      options.slug,
      options.shortLabel,
      options.image,
      options.imageAlt,
      options.bestFor,
      options.productCount,
    )

  return {
    slug: options.slug,
    name: options.name,
    shortLabel: options.shortLabel,
    countLabel: options.countLabel,
    overviewBlurb: options.overviewBlurb,
    image: options.image,
    imageAlt: options.imageAlt,
    listing: {
      eyebrow: 'PRECISION ENGINEERED',
      title: options.name,
      description: options.listingDescription,
      badgeLabel: '50+ Models for Every Scale',
      primaryCtaLabel: 'Request Quote',
      primaryCtaHref: ROUTES.contact,
      secondaryCtaLabel: 'Download Category Catalog',
      secondaryCtaHref: ROUTES.resources,
      controlLabel: 'Catalog Range',
      countSummary: `${cards.length} Models Available`,
      filters: ['Output Capacity', 'Cooling System', 'Footprint', 'Buyer Type'],
      sortLabel: 'Sort By:',
      sortOptions: ['Performance (High to Low)', 'Compactness', 'Newest Series'],
      products: cards,
      comparisonTitle: 'Technical Comparison',
      comparisonCopy: 'Select up to 4 models to compare electrical and physical footprints.',
      comparisonCtaLabel: 'Open Full Comparison Matrix',
      comparisonCtaHref: ROUTES.contact,
      comparisonColumns: ['Feature / Specs', 'Compact Series', `${options.shortLabel} Mainline`, 'Turbo Industrial'],
      comparisonRows: [
        {
          feature: 'Cleaning Interval',
          values: ['Daily', '3-Day Cycle', '14-Day (Heat Treat)'],
        },
        {
          feature: 'Electrical Requirement',
          values: ['220V Single Phase', '220V Three Phase', '380V Industrial'],
        },
        {
          feature: 'Refrigerant Type',
          values: ['R404A', 'R448A High-Eff', 'R452A Multi-Zone'],
        },
      ],
      operationalTitle: 'Tailored for Operational Excellence',
      operationalSegments: [
        {
          title: 'Boutique & Specialty',
          copy: 'Lower volume requirements focused on artisanal texture and recipe flexibility. Ideal for independent operators.',
          icon: 'storefront',
        },
        {
          title: 'Franchise & QSR',
          copy: 'High-uptime, consistent output, and simplified cleaning protocols for multi-unit operators requiring standardization.',
          icon: 'restaurant_menu',
        },
      ],
      buyingFactorsTitle: 'Key Buying Factors',
      buyingFactors: [
        {
          title: 'Energy Optimization',
          copy: 'Inverter compressors reduce idle-state consumption while keeping recovery performance stable.',
          icon: 'bolt',
        },
        {
          title: 'Global Compliance',
          copy: 'CE-ready documentation and export packaging are aligned before you finalize the shortlist.',
          icon: 'security',
        },
      ],
      insightsTitle: 'Operator Insights',
      insightFaqs: [
        {
          question: 'How is output recovery measured?',
          answer:
            'Recovery is measured by the machine’s ability to return the product to serving temperature after a high-draw period.',
        },
        {
          question: 'Warranty & Global Support',
          answer:
            'Standard compressor and parts coverage are backed by a distributor-oriented global support network.',
        },
      ],
      resourceCards: [
        {
          icon: 'description',
          title: '2024 Pricing Guide',
          copy: 'A comprehensive look at operational costs and ROI projections.',
          ctaLabel: 'Download PDF',
          ctaHref: ROUTES.resources,
          ctaIcon: 'download',
        },
        {
          icon: 'precision_manufacturing',
          title: 'Installation Specs',
          copy: 'Pre-installation checklist for electrical and plumbing planning.',
          ctaLabel: 'Technical Portal',
          ctaHref: ROUTES.resources,
          ctaIcon: 'open_in_new',
        },
      ],
      ctaTitle: 'Partner with Precision',
      ctaCopy:
        'Every operation has unique variables. Our engineering team provides complimentary technical consultations to ensure your equipment selection matches your output reality.',
      ctaPrimaryLabel: 'Request Technical Consultation',
      ctaPrimaryHref: ROUTES.contact,
      ctaSecondaryLabel: 'Chat with Sales Engineering',
      ctaSecondaryHref: ROUTES.contact,
      ...options.listingOverrides,
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
    productCount: 24,
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
    listingOverrides: {
      eyebrow: 'Precision Engineered',
      title: 'Soft Serve Machinery',
      description:
        'High-performance production systems engineered for consistency, rapid recovery, and modular scalability. Our technical series defines the standard for modern frozen dessert operations.',
      badgeLabel: '50+ Models for Every Scale',
      primaryCtaLabel: 'Request Quote',
      primaryCtaHref: ROUTES.contact,
      secondaryCtaLabel: 'Download Category Catalog',
      secondaryCtaHref: ROUTES.resources,
      controlLabel: 'Catalog Range',
      countSummary: '24 Models Available',
      filters: ['Output Capacity', 'Cooling System', 'Footprint', 'Buyer Type'],
      sortLabel: 'Sort By:',
      sortOptions: ['Performance (High to Low)', 'Compactness', 'Newest Series'],
      comparisonTitle: 'Technical Comparison',
      comparisonCopy: 'Select up to 4 models to compare electrical and physical footprints.',
      comparisonCtaLabel: 'Open Full Comparison Matrix',
      comparisonCtaHref: ROUTES.contact,
      comparisonColumns: ['Feature / Specs', 'Compact Series', 'Twin Twist', 'Turbo Industrial'],
      comparisonRows: [
        {
          feature: 'Cleaning Interval',
          values: ['Daily', '3-Day Cycle', '14-Day (Heat Treat)'],
        },
        {
          feature: 'Electrical Requirement',
          values: ['220V Single Phase', '220V Three Phase', '380V Industrial'],
        },
        {
          feature: 'Refrigerant Type',
          values: ['R404A', 'R448A High-Eff', 'R452A Multi-Zone'],
        },
      ],
      operationalTitle: 'Tailored for Operational Excellence',
      operationalSegments: [
        {
          title: 'Boutique & Specialty',
          copy: 'Lower volume requirements focused on artisanal texture and recipe flexibility. Ideal for gelato shops and independent bakeries.',
          icon: 'storefront',
        },
        {
          title: 'Franchise & QSR',
          copy: 'High-uptime, consistent output, and simplified cleaning protocols for multi-unit operators requiring standardization.',
          icon: 'restaurant_menu',
        },
      ],
      buyingFactorsTitle: 'Key Buying Factors',
      buyingFactors: [
        {
          title: 'Energy Optimization',
          copy: 'Pro-Taylor machines utilize inverter compressors reducing power consumption by 30% during idle states.',
          icon: 'bolt',
        },
        {
          title: 'Global Compliance',
          copy: 'NSF, ETL, and CE certified components for seamless integration into international food safety frameworks.',
          icon: 'security',
        },
      ],
      insightsTitle: 'Operator Insights',
      insightFaqs: [
        {
          question: 'How is output recovery measured?',
          answer:
            "Recovery is measured by the machine's ability to return the product to serving temperature after a high-draw period. Our Series 8 machines feature a 2.5-minute recovery window.",
        },
        {
          question: 'Warranty & Global Support',
          answer:
            'Standard 3-year compressor warranty and 1-year parts coverage, supported by our global network of certified technicians.',
        },
      ],
      resourceCards: [
        {
          icon: 'description',
          title: '2024 Pricing Guide',
          copy: 'A comprehensive look at operational costs and ROI projections.',
          ctaLabel: 'Download PDF',
          ctaHref: ROUTES.resources,
          ctaIcon: 'download',
        },
        {
          icon: 'precision_manufacturing',
          title: 'Installation Specs',
          copy: 'Pre-installation checklist for electrical and plumbing plumbing.',
          ctaLabel: 'Technical Portal',
          ctaHref: ROUTES.resources,
          ctaIcon: 'open_in_new',
        },
      ],
      ctaTitle: 'Partner with Precision',
      ctaCopy:
        'Every operation has unique variables. Our engineering team provides complimentary technical consultations to ensure your equipment selection matches your output reality.',
      ctaPrimaryLabel: 'Request Technical Consultation',
      ctaPrimaryHref: ROUTES.contact,
      ctaSecondaryLabel: 'Chat with Sales Engineering',
      ctaSecondaryHref: ROUTES.contact,
    },
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
    productCount: 18,
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
    productCount: 15,
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
    productCount: 12,
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
    productCount: 14,
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
    productCount: 10,
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

export const productFixtures: ProductFixture[] = productCategories.flatMap((category) =>
  category.listing.products.map((product) => ({
    categorySlug: category.slug,
    slug: product.slug,
    title: product.name,
    series: `${category.shortLabel} Series`,
    description: product.description,
  })),
)

export function getProductFixtureBySlug(categorySlug: string, productSlug: string) {
  return productFixtures.find(
    (product) => product.categorySlug === categorySlug && product.slug === productSlug,
  )
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
