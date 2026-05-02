import { ROUTES } from '@/fixtures/stitch/site'
import {
  buildCategoryGuideHref,
  type ProductCategoryRecord,
  type ProductListingCard,
  type ProductPagination,
} from '@/fixtures/stitch/product-catalog'

const CATALOG_API_BASE_URL = 'http://127.0.0.1:8000/api/v1/catalog'
const CATALOG_REVALIDATE_SECONDS = 3600

class CatalogApiError extends Error {
  status: number

  constructor(status: number, statusText: string) {
    super(`Catalog API request failed: ${status} ${statusText}`)
    this.status = status
  }
}

type CatalogPaginationPayload = {
  requested_page: number
  current_page: number
  page_size: number
  total_items: number
  total_pages: number
  start_item: number
  end_item: number
}

type CatalogListingItemPayload = {
  name: string
  url_path: string
  summary: string
  subcategory_name: string
  card_image_url: string
  card_image_alt: string
  series_label: string | null
  metrics: Array<{
    label: string
    value: string
  }>
}

type CatalogOperationalItemPayload = {
  section_code: 'operational_fit' | 'buyer_review_focus'
  title: string
  body: string
  icon: string
  sort_order: number
}

type CatalogFaqItemPayload = {
  question: string
  answer: string
}

type CatalogComparisonSubjectPayload = {
  subject_key: string
  label: string
  route_category_slug: string
  sort_order: number
}

type CatalogComparisonCellPayload = {
  subject_key: string
  body: string
}

type CatalogComparisonRowPayload = {
  row_key: string
  label: string
  sort_order: number
  cells: CatalogComparisonCellPayload[]
}

type CatalogComparisonOverviewPayload = {
  title: string
  intro: string
  dimension_heading: string
  subjects: CatalogComparisonSubjectPayload[]
  rows: CatalogComparisonRowPayload[]
}

export type CatalogCategoryListingPayload = {
  slug: string
  name: string
  url_path: string
  h1: string
  lead_text: string
  seo_title: string
  meta_description: string
  summary: string
  comparison_overview: CatalogComparisonOverviewPayload | null
  operational_fit_title: string
  operational_fit_items: CatalogOperationalItemPayload[]
  buyer_review_focus_title: string
  buyer_review_focus_items: CatalogOperationalItemPayload[]
  sourcing_faq_title: string
  sourcing_faq_items: CatalogFaqItemPayload[]
  active_subcategory_slug: string | null
  subcategory_tabs: Array<{
    slug: string
    name: string
    product_count: number
  }>
  pagination: CatalogPaginationPayload
  items: CatalogListingItemPayload[]
}

async function fetchCatalogJson<T>(path: string): Promise<T | null> {
  const response = await fetch(
    `${CATALOG_API_BASE_URL}${path}`,
    process.env.NODE_ENV === 'development'
      ? {
          cache: 'no-store',
        }
      : {
          next: { revalidate: CATALOG_REVALIDATE_SECONDS },
        },
  )

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new CatalogApiError(response.status, response.statusText)
  }

  return (await response.json()) as T
}

function normalizeOrderBy(orderBy: string | string[] | undefined) {
  const value = Array.isArray(orderBy) ? orderBy[0] : orderBy
  if (value === 'name_desc' || value === 'newest') {
    return value
  }
  return 'name'
}

function normalizeSubcategorySlug(subcategorySlug: string | string[] | undefined) {
  const value = Array.isArray(subcategorySlug) ? subcategorySlug[0] : subcategorySlug
  return value?.trim() || undefined
}

function getSortLabel(orderBy: string) {
  if (orderBy === 'name_desc') {
    return 'NAME (Z TO A)'
  }
  if (orderBy === 'newest') {
    return 'NEWEST FIRST'
  }
  return 'NAME (A TO Z)'
}

function buildPaginationHref(
  categorySlug: string,
  options: {
    page?: number
    orderBy?: string | string[] | undefined
    subcategorySlug?: string | string[] | undefined
    includeSubcategory?: boolean
  },
) {
  const params = new URLSearchParams()
  const orderBy = normalizeOrderBy(options.orderBy)
  const subcategorySlug = normalizeSubcategorySlug(options.subcategorySlug)
  const includeSubcategory = options.includeSubcategory ?? true

  if (options.page && options.page > 1) {
    params.set('page', String(options.page))
  }
  if (orderBy !== 'name') {
    params.set('order_by', orderBy)
  }
  if (includeSubcategory && subcategorySlug) {
    params.set('subcategory_slug', subcategorySlug)
  }

  const query = params.toString()
  return query ? `/products/${categorySlug}?${query}` : `/products/${categorySlug}`
}

function extractSlugFromUrlPath(urlPath: string) {
  const normalized = urlPath.endsWith('/') ? urlPath.slice(0, -1) : urlPath
  const segments = normalized.split('/')
  return segments.at(-1) || normalized
}

function resolveCardBadge(
  item: CatalogListingItemPayload,
  payload: CatalogCategoryListingPayload,
): ProductListingCard['badge'] {
  if (!payload.active_subcategory_slug && payload.subcategory_tabs.length > 1) {
    return item.subcategory_name
  }

  return item.series_label || undefined
}

function getVisibleActiveSubcategorySlug(payload: CatalogCategoryListingPayload) {
  const activeSlug = payload.active_subcategory_slug
  if (!activeSlug) {
    return null
  }

  return payload.subcategory_tabs.some((tab) => tab.slug === activeSlug) ? activeSlug : null
}

function buildComparisonSection(
  payload: CatalogCategoryListingPayload,
): Pick<
  ProductCategoryRecord['listing'],
  | 'comparisonTitle'
  | 'comparisonCopy'
  | 'comparisonCtaLabel'
  | 'comparisonCtaHref'
  | 'comparisonColumns'
  | 'comparisonRows'
> | null {
  const overview = payload.comparison_overview
  if (!overview || overview.subjects.length === 0 || overview.rows.length === 0) {
    return null
  }

  const columns = [overview.dimension_heading, ...overview.subjects.map((subject) => subject.label)]
  const rows = overview.rows.map((row) => {
    const cellMap = new Map(row.cells.map((cell) => [cell.subject_key, cell.body]))

    return {
      feature: row.label,
      values: overview.subjects.map((subject) => cellMap.get(subject.subject_key) || ''),
    }
  })

  return {
    comparisonTitle: overview.title,
    comparisonCopy: overview.intro,
    comparisonCtaLabel: 'REQUEST COMPARISON HELP',
    comparisonCtaHref: ROUTES.contact,
    comparisonColumns: columns,
    comparisonRows: rows,
  }
}

function mapOperationalItems(
  items: CatalogOperationalItemPayload[],
  fallback: Array<{
    title: string
    copy: string
    icon?: string
  }>,
) {
  if (items.length === 0) {
    return fallback
  }

  return items.map((item) => ({
    title: item.title,
    copy: item.body,
    icon: item.icon || undefined,
  }))
}

function mapFaqItems(
  items: CatalogFaqItemPayload[],
  fallback: Array<{
    question: string
    answer: string
  }>,
) {
  if (items.length === 0) {
    return fallback
  }

  return items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }))
}

function buildFallbackListing(
  payload: CatalogCategoryListingPayload,
  options: {
    orderBy: string
  },
): ProductCategoryRecord['listing'] {
  const comparisonSection = buildComparisonSection(payload)
  const activeSubcategorySlug = getVisibleActiveSubcategorySlug(payload)

  return {
    eyebrow: 'PRECISION ENGINEERED',
    title: payload.h1,
    description: payload.lead_text || payload.summary,
    badgeLabel: `${payload.pagination.total_items} MODELS IN THIS CATEGORY`,
    primaryCtaLabel: 'REQUEST QUOTE',
    primaryCtaHref: ROUTES.contact,
    secondaryCtaLabel: 'DOWNLOAD CATEGORY CATALOG',
    secondaryCtaHref: ROUTES.contact,
    controlLabel: 'CATALOG RANGE',
    countSummary: `${payload.pagination.total_items} Models Available`,
    machineTypeLabel: payload.subcategory_tabs.length > 0 ? 'MACHINE TYPE' : undefined,
    machineTypeTabs:
      payload.subcategory_tabs.length > 0
        ? [
            {
              label: 'All',
              href: buildPaginationHref(payload.slug, {
                orderBy: options.orderBy,
                includeSubcategory: false,
              }),
              isActive: !payload.active_subcategory_slug,
            },
            ...payload.subcategory_tabs.map((tab) => ({
              label: tab.name,
              href: buildPaginationHref(payload.slug, {
                orderBy: options.orderBy,
                subcategorySlug: tab.slug,
              }),
              isActive: payload.active_subcategory_slug === tab.slug,
            })),
          ]
        : undefined,
    currentOrderBy: options.orderBy,
    activeSubcategorySlug,
    filters: ['OUTPUT CAPACITY', 'COOLING SYSTEM', 'FOOTPRINT', 'BUYER TYPE'],
    sortLabel: 'Sort By:',
    sortOptions: [getSortLabel(options.orderBy)],
    products: payload.items.map(
      (item): ProductListingCard => ({
        slug: extractSlugFromUrlPath(item.url_path),
        href: item.url_path,
        badge: resolveCardBadge(item, payload),
        badgeTone: 'surface',
        name: item.name,
        seriesLabel: item.series_label || undefined,
        description: item.summary,
        metrics: item.metrics,
        image: item.card_image_url,
        imageAlt: item.card_image_alt,
      }),
    ),
    ...comparisonSection,
    operationalTitle: payload.operational_fit_title,
    operationalSegments: mapOperationalItems(payload.operational_fit_items, [
      {
        title: 'Application Matching',
        copy: `Review ${payload.h1.toLowerCase()} options against expected throughput, service format, and daily operating rhythm.`,
        icon: 'storefront',
      },
      {
        title: 'Utility Planning',
        copy: 'Confirm voltage, cooling method, and placement conditions before narrowing to final models.',
        icon: 'bolt',
      },
      {
        title: 'Quote Preparation',
        copy: 'Bring shortlist, output target, and installation constraints into the inquiry so technical confirmation is faster.',
        icon: 'handshake',
      },
    ]),
    buyingFactorsTitle: payload.buyer_review_focus_title,
    buyingFactors: mapOperationalItems(payload.buyer_review_focus_items, [
      {
        title: 'Capacity vs. Actual Demand',
        copy: 'Avoid sizing only by headline output. Match peak-hour demand to labor plan, recovery expectations, and product mix.',
        icon: 'speed',
      },
      {
        title: 'Utilities and Footprint',
        copy: 'Check electrical spec, cooling environment, drainage, and available working space before locking a model.',
        icon: 'home_work',
      },
      {
        title: 'Procurement Readiness',
        copy: 'A better inquiry includes target market, quantity, preferred spec, and any OEM or compliance requirement.',
        icon: 'fact_check',
      },
    ]),
    insightsTitle: payload.sourcing_faq_title,
    insightFaqs: mapFaqItems(payload.sourcing_faq_items, [
      {
        question: `How should buyers compare ${payload.h1.toLowerCase()} models?`,
        answer:
          'Start with application fit, output target, utility constraints, and space limits. Then narrow to a shortlist before requesting final technical confirmation.',
      },
      {
        question: 'What information should be prepared before requesting a quote?',
        answer:
          'Prepare target models, intended use case, preferred voltage, destination market, quantity, and any OEM or certification requirements.',
      },
      {
        question: 'Why use the category page before going to individual product pages?',
        answer:
          'The category page helps buyers compare the published range faster, identify likely-fit models, and reduce back-and-forth during inquiry.',
      },
    ]),
    resourceCards: [
      {
        icon: 'description',
        title: 'Explore Technical Guides',
        copy: 'Browse sourcing and selection articles that support shortlist decisions before inquiry.',
        ctaLabel: 'VIEW RESOURCES',
        ctaHref: ROUTES.resources,
        ctaIcon: 'arrow_forward',
      },
      {
        icon: 'support_agent',
        title: 'Talk to the Sales Team',
        copy: 'If you already know your target application, contact the team for technical confirmation and quote guidance.',
        ctaLabel: 'REQUEST SUPPORT',
        ctaHref: ROUTES.contact,
        ctaIcon: 'arrow_forward',
      },
    ],
    ctaTitle: 'Move from Shortlist to Technical Inquiry',
    ctaCopy:
      'Share your target output, placement limits, voltage, and order expectations so the team can recommend the right model range faster.',
    ctaPrimaryLabel: 'REQUEST QUOTE',
    ctaPrimaryHref: ROUTES.contact,
    ctaSecondaryLabel: 'CONTACT SALES',
    ctaSecondaryHref: ROUTES.contact,
  }
}

export async function fetchCatalogCategoryListingPayload(
  categorySlug: string,
  query?: {
    page?: number
    orderBy?: string | string[] | undefined
    subcategorySlug?: string | string[] | undefined
  },
): Promise<CatalogCategoryListingPayload | null> {
  const buildPath = (subcategorySlug?: string) => {
    const params = new URLSearchParams()
    const orderBy = normalizeOrderBy(query?.orderBy)

    if (query?.page && query.page > 1) {
      params.set('page', String(query.page))
    }
    if (orderBy !== 'name') {
      params.set('order_by', orderBy)
    }
    if (subcategorySlug) {
      params.set('subcategory_slug', subcategorySlug)
    }

    return params.toString()
      ? `/categories/${categorySlug}/products?${params.toString()}`
      : `/categories/${categorySlug}/products`
  }

  const requestedSubcategorySlug = normalizeSubcategorySlug(query?.subcategorySlug)

  try {
    return await fetchCatalogJson<CatalogCategoryListingPayload>(buildPath(requestedSubcategorySlug))
  } catch (error) {
    if (error instanceof CatalogApiError && error.status === 400 && requestedSubcategorySlug) {
      return fetchCatalogJson<CatalogCategoryListingPayload>(buildPath())
    }

    throw error
  }
}

export function mapCatalogListingToPageModel(
  payload: CatalogCategoryListingPayload,
  options: {
    orderBy?: string | string[] | undefined
  },
): {
  category: ProductCategoryRecord
  pagination: ProductPagination
} {
  const orderBy = normalizeOrderBy(options.orderBy)

  return {
    category: {
      slug: payload.slug,
      name: payload.name,
      shortLabel: payload.name
        .split(/\s+/)
        .map((part) => part[0])
        .join('')
        .slice(0, 3)
        .toUpperCase(),
      countLabel: `${payload.pagination.total_items} Models`,
      overviewBlurb: payload.summary,
      image: payload.items[0]?.card_image_url || '',
      imageAlt: payload.items[0]?.card_image_alt || payload.name,
      listing: buildFallbackListing(payload, { orderBy }),
      guide: {
        eyebrow: 'CATEGORY GUIDE',
        title: `${payload.h1} Guide`,
        description: 'Guide content is not available for this category yet.',
        primaryCtaLabel: 'REQUEST QUOTE',
        primaryCtaHref: ROUTES.contact,
        secondaryCtaLabel: 'CONTACT SALES',
        secondaryCtaHref: ROUTES.contact,
        heroImage: payload.items[0]?.card_image_url || '',
        heroImageAlt: payload.items[0]?.card_image_alt || payload.name,
        heroNoteTitle: 'Guide Pending',
        heroNoteCopy: 'This category guide has not been connected to real content yet.',
        definitionTitle: 'Guide Unavailable',
        definitionCopy: 'The guide route is being kept in place, but this category does not yet have connected guide content.',
        definitionCards: [],
        contextsTitle: 'Typical Contexts',
        contexts: [],
        matrixTitle: 'Selection Matrix',
        matrixCards: [],
        pathsTitle: 'Buyer Paths',
        paths: [],
        metrics: [],
        faqTitle: 'Guide FAQ',
        faqs: [],
        ctaTitle: 'Need Technical Help?',
        ctaCopy: 'Contact the team if you want model guidance before the guide content is ready.',
        ctaPrimaryLabel: 'REQUEST QUOTE',
        ctaPrimaryHref: ROUTES.contact,
        ctaSecondaryLabel: 'CONTACT SALES',
        ctaSecondaryHref: ROUTES.contact,
      },
    },
    pagination: {
      currentPage: payload.pagination.current_page,
      totalPages: payload.pagination.total_pages,
      totalProducts: payload.pagination.total_items,
      pageSize: payload.pagination.page_size,
      startItem: payload.pagination.start_item,
      endItem: payload.pagination.end_item,
      products: buildFallbackListing(payload, { orderBy }).products,
    },
  }
}

export function buildCatalogListingMetadata(payload: CatalogCategoryListingPayload) {
  const activeSubcategorySlug = getVisibleActiveSubcategorySlug(payload)
  const canonicalPath = buildPaginationHref(payload.slug, {
    page: payload.pagination.current_page,
    subcategorySlug: activeSubcategorySlug ?? undefined,
  })

  return {
    title: payload.seo_title,
    description: payload.meta_description,
    canonical: canonicalPath,
  }
}

export function buildCatalogListingPageHref(
  categorySlug: string,
  pageNumber: number,
  options?: {
    orderBy?: string | string[] | undefined
    subcategorySlug?: string | string[] | undefined
    includeSubcategory?: boolean
  },
) {
  return buildPaginationHref(categorySlug, {
    page: pageNumber,
    orderBy: options?.orderBy,
    subcategorySlug: options?.subcategorySlug,
    includeSubcategory: options?.includeSubcategory,
  })
}

export function buildCatalogGuideHref(categorySlug: string) {
  return buildCategoryGuideHref(categorySlug)
}
