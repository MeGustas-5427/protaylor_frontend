import type { ProductCategoryRecord } from '@/fixtures/stitch/product-catalog'
import { ROUTES } from '@/fixtures/stitch/site'
import type { CatalogCategoryListingPayload } from '@/lib/catalog/category-listing'

export type CategoryGuideRecord = Pick<ProductCategoryRecord, 'name' | 'guide'>

const DEFAULT_GUIDE_QUOTE = '"Start with operating fit before comparing individual models."'
const DEFAULT_GUIDE_ATTRIBUTION = 'PRO-TAYLOR Category Review'
const DEFAULT_STANDARDS_TITLE = 'Global Engineering Standards'
const DEFAULT_STANDARDS_COPY =
  'Every PRO-TAYLOR unit undergoes a 72-hour stress test before export, ensuring zero-defect arrival across global distributor and end-user programs.'
const DEFAULT_STANDARDS_STATS = [
  { value: 'CE/UL', label: 'Certified Compliance' },
  { value: 'OEM', label: 'Ready Integration' },
  { value: '100%', label: 'Factory QA' },
  { value: '24/7', label: 'Global Support' },
] as const

function uniqueParagraphs(values: Array<string | null | undefined>) {
  return Array.from(
    new Set(
      values
        .map((value) => value?.trim())
        .filter((value): value is string => Boolean(value)),
    ),
  )
}

function buildGuideTitle(payload: CatalogCategoryListingPayload) {
  return `A Professional Guide to ${payload.name}`
}

function buildGuideDescription(payload: CatalogCategoryListingPayload) {
  return (
    payload.lead_text ||
    payload.summary ||
    `Use this guide to understand category fit, shortlist current ${payload.name.toLowerCase()} models, and move into a quote-ready inquiry.`
  )
}

function buildDefinitionCards(payload: CatalogCategoryListingPayload) {
  const reviewCards = [...payload.operational_fit_items, ...payload.buyer_review_focus_items]
    .slice(0, 2)
    .map((item) => ({
      title: item.title,
      copy: item.body,
      icon: item.icon || 'widgets',
    }))

  if (reviewCards.length > 0) {
    return reviewCards
  }

  return payload.subcategory_tabs.slice(0, 2).map((tab) => ({
    title: tab.name,
    copy: `${tab.product_count} published models in this route.`,
    icon: 'category',
  }))
}

function buildContexts(payload: CatalogCategoryListingPayload) {
  return payload.items.slice(0, 2).map((item) => ({
    title:
      payload.subcategory_tabs.length > 1 && item.subcategory_name
        ? item.subcategory_name
        : item.name,
    copy: item.summary,
    image: item.card_image_url,
    imageAlt: item.card_image_alt || item.name,
  }))
}

function buildMatrixCards(payload: CatalogCategoryListingPayload) {
  const source =
    payload.buyer_review_focus_items.length > 0
      ? payload.buyer_review_focus_items
      : payload.operational_fit_items

  if (source.length > 0) {
    return source.slice(0, 6).map((item) => ({
      title: item.title,
      copy: item.body,
      icon: item.icon || 'widgets',
    }))
  }

  return [
    {
      title: 'Application Fit',
      copy:
        'Validate the service format, output target, and operating rhythm before comparing individual published models.',
      icon: 'storefront',
    },
    {
      title: 'Utilities & Placement',
      copy:
        'Confirm voltage, cooling environment, and footprint constraints so shortlist decisions stay technically valid.',
      icon: 'bolt',
    },
    {
      title: 'Quote Readiness',
      copy:
        'Bring target models, destination market, quantity, and compliance requirements into the final inquiry.',
      icon: 'fact_check',
    },
  ]
}

function buildPaths(payload: CatalogCategoryListingPayload) {
  if (payload.subcategory_tabs.length > 0) {
    return payload.subcategory_tabs.slice(0, 3).map((tab, index) => ({
      step: String(index + 1).padStart(2, '0'),
      title: tab.name,
      copy: `${tab.product_count} published models currently sit in this route. Use the listing view to compare available options before moving into technical confirmation.`,
      bullets: ['Open the route-specific listing', 'Compare current model cards', 'Move to quote-ready inquiry'],
    }))
  }

  return [
    {
      step: '01',
      title: 'Review Application Fit',
      copy:
        'Start by checking whether the category matches your service format, output target, and daily operating rhythm.',
      bullets: ['Map the operating scenario', 'Confirm usage intensity', 'Set shortlist boundaries'],
    },
    {
      step: '02',
      title: 'Narrow by Utilities & Footprint',
      copy:
        'Reduce options using voltage, cooling method, installation conditions, and available working space.',
      bullets: ['Check utility limits', 'Verify placement logic', 'Remove invalid options'],
    },
    {
      step: '03',
      title: 'Prepare the Inquiry',
      copy:
        'Once the shortlist is clear, bring target models and sourcing requirements into a technical quote request.',
      bullets: ['Share target models', 'Add market and quantity', 'Confirm compliance needs'],
    },
  ]
}

function buildFaqs(payload: CatalogCategoryListingPayload) {
  if (payload.sourcing_faq_items.length > 0) {
    return payload.sourcing_faq_items
  }

  return [
    {
      question: `How should buyers review ${payload.name.toLowerCase()} options?`,
      answer:
        'Start with operating fit, utilities, placement, and quote-readiness instead of comparing only headline output or price.',
    },
    {
      question: 'What should be prepared before requesting a quote?',
      answer:
        'Prepare target models, intended application, destination market, quantity, and any OEM or certification requirement.',
    },
    {
      question: 'Why open the guide before going deeper into model pages?',
      answer:
        'The guide helps buyers understand category logic first, so the later shortlist and inquiry are faster and cleaner.',
    },
  ]
}

function buildResources(payload: CatalogCategoryListingPayload) {
  return [
    {
      label: 'Category Listing',
      title: `Browse ${payload.name} Models`,
      href: payload.url_path,
    },
    {
      label: 'Resources',
      title: 'Open Technical Resources',
      href: ROUTES.resources,
    },
    {
      label: 'Inquiry',
      title: 'Request Technical Support',
      href: ROUTES.contact,
    },
  ]
}

export function buildCatalogGuideMetadata(payload: CatalogCategoryListingPayload) {
  return {
    title: buildGuideTitle(payload),
    description: buildGuideDescription(payload),
    canonical: `${payload.url_path.replace(/\/$/, '')}/guide`,
  }
}

export function mapCatalogListingToGuideModel(
  payload: CatalogCategoryListingPayload,
): CategoryGuideRecord {
  const description = buildGuideDescription(payload)
  const definitionParagraphs = uniqueParagraphs([
    description,
    payload.comparison_overview?.intro,
    payload.subcategory_tabs.length > 0
      ? `Current published range covers ${payload.pagination.total_items} models across ${payload.subcategory_tabs.length} route tabs.`
      : `Current published range covers ${payload.pagination.total_items} models in this category.`,
  ])

  return {
    name: payload.name,
    guide: {
      eyebrow: 'Editorial Buying Guide',
      title: buildGuideTitle(payload),
      description,
      primaryCtaLabel: 'View Models in This Category',
      primaryCtaHref: payload.url_path,
      secondaryCtaLabel: 'Request Quote',
      secondaryCtaHref: ROUTES.contact,
      heroImage: payload.items[0]?.card_image_url || '',
      heroImageAlt: payload.items[0]?.card_image_alt || payload.name,
      heroNoteTitle: 'Category Review',
      heroNoteCopy: 'Use the guide layer to shortlist first, then move into model-level technical confirmation.',
      heroNoteQuote: DEFAULT_GUIDE_QUOTE,
      heroNoteAttribution: DEFAULT_GUIDE_ATTRIBUTION,
      definitionTitle: 'Defining Your Review Scope',
      definitionCopy: description,
      definitionParagraphs,
      definitionCards: buildDefinitionCards(payload),
      contextsTitle: 'Operational Contexts',
      contexts: buildContexts(payload),
      matrixTitle: payload.buyer_review_focus_title || 'Engineering Matrix',
      matrixEyebrow: 'Factors that determine shortlist quality',
      matrixCards: buildMatrixCards(payload),
      pathsTitle: 'Recommended Paths',
      pathsEyebrow: payload.subcategory_tabs.length > 0 ? 'Tailored for your range' : 'Tailored for your shortlist',
      paths: buildPaths(payload),
      metrics: DEFAULT_STANDARDS_STATS.map((item) => ({
        label: item.label,
        value: item.value,
      })),
      standardsTitle: DEFAULT_STANDARDS_TITLE,
      standardsCopy: DEFAULT_STANDARDS_COPY,
      standardsStats: [...DEFAULT_STANDARDS_STATS],
      faqTitle: payload.sourcing_faq_title || 'Category FAQ',
      faqs: buildFaqs(payload),
      resourcesTitle: 'Related Resources',
      resources: buildResources(payload),
      ctaTitle: 'Ready to Configure Your System?',
      ctaCopy:
        'Browse the current published range or contact the PRO-TAYLOR team for technical confirmation before final quoting.',
      ctaPrimaryLabel: 'Browse Current Models',
      ctaPrimaryHref: payload.url_path,
      ctaSecondaryLabel: 'Request Quote',
      ctaSecondaryHref: ROUTES.contact,
    },
  }
}
