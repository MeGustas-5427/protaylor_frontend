import { ROUTES } from '@/fixtures/stitch/site'

// Keep this local for now to match the existing catalog fetch modules.
// Once the backend URL is centralized, this module should move with them.
const CATALOG_API_BASE_URL = 'http://127.0.0.1:8000/api/v1/catalog'
const CATALOG_REVALIDATE_SECONDS = 3600

type CategoryGuideDefinitionCardPayload = {
  item_key: string
  role_code: string
  title: string
  body: string
  icon: string
  sort_order: number
}

type CategoryGuideContextPayload = {
  item_key: string
  title: string
  body: string
  image_url: string
  image_alt: string
  sort_order: number
}

type CategoryGuideDecisionFactorPayload = {
  item_key: string
  title: string
  body: string
  icon: string
  sort_order: number
}

type CategoryGuidePathPayload = {
  item_key: string
  step: string
  title: string
  body: string
  bullets: string[]
  href: string
  cta_label: string
  sort_order: number
}

type CategoryGuideTrustMetricPayload = {
  item_key: string
  value: string
  label: string
  sort_order: number
}

type CategoryGuideFaqPayload = {
  question: string
  answer: string
}

type CategoryGuideResourcePayload = {
  item_key: string
  label: string
  title: string
  href: string
  cta_label: string
  sort_order: number
}

export type CatalogCategoryGuidePayload = {
  name: string
  slug: string
  url_path: string
  h1: string
  seo_title: string
  meta_description: string
  guide: {
    hero_eyebrow: string
    hero_title: string
    answer_summary: string
    hero_primary_cta_label: string
    hero_primary_cta_href: string
    hero_secondary_cta_label: string
    hero_secondary_cta_href: string
    hero_image_url: string
    hero_image_alt: string
    hero_note_title: string
    hero_note_copy: string
    hero_note_quote: string
    hero_note_attribution: string
    definition_title: string
    definition_copy: string
    definition_paragraphs: string[]
    definition_cards: CategoryGuideDefinitionCardPayload[]
    contexts_title: string
    contexts: CategoryGuideContextPayload[]
    matrix_title: string
    matrix_eyebrow: string
    decision_factors: CategoryGuideDecisionFactorPayload[]
    paths_title: string
    paths_eyebrow: string
    paths_mode_code: 'route_guidance' | 'next_step_guidance'
    paths: CategoryGuidePathPayload[]
    standards_title: string
    standards_copy: string
    standards_mode_code: 'shared_sitewide' | 'category_curated' | 'hidden'
    standards_stats: CategoryGuideTrustMetricPayload[]
    faq_title: string
    faqs: CategoryGuideFaqPayload[]
    resources_title: string
    resources_mode_code: 'shared_default' | 'category_curated' | 'hidden'
    resources: CategoryGuideResourcePayload[]
    cta_title: string
    cta_copy: string
    cta_mode_code: 'listing_first' | 'inquiry_first'
    cta_primary_label: string
    cta_primary_href: string
    cta_secondary_label: string
    cta_secondary_href: string
  }
}

export type CategoryGuideRecord = {
  name: string
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

class CatalogGuideApiError extends Error {
  status: number

  constructor(status: number, statusText: string) {
    super(`Catalog guide API request failed: ${status} ${statusText}`)
    this.status = status
  }
}

async function fetchCatalogGuideJson<T>(path: string): Promise<T | null> {
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
    throw new CatalogGuideApiError(response.status, response.statusText)
  }

  return (await response.json()) as T
}

function optionalText(value: string) {
  return value.trim() || undefined
}

function buildCategoryGuideCanonical(payload: CatalogCategoryGuidePayload) {
  return `${payload.url_path.replace(/\/$/, '')}/guide`
}

export function buildCategoryGuideMetadata(payload: CatalogCategoryGuidePayload) {
  return {
    title: payload.guide.hero_title || `${payload.name} Buying Guide`,
    description: payload.guide.answer_summary || payload.meta_description,
    canonical: buildCategoryGuideCanonical(payload),
  }
}

export function mapCategoryGuidePayloadToModel(
  payload: CatalogCategoryGuidePayload,
): CategoryGuideRecord {
  const guide = payload.guide
  const standardsStats =
    guide.standards_mode_code === 'hidden'
      ? []
      : guide.standards_stats.map((item) => ({
          value: item.value,
          label: item.label,
        }))
  const resources =
    guide.resources_mode_code === 'hidden'
      ? []
      : guide.resources.map((item) => ({
          label: item.label,
          title: item.title,
          href: item.href,
        }))

  return {
    name: payload.name,
    guide: {
      eyebrow: guide.hero_eyebrow,
      title: guide.hero_title || payload.h1 || payload.name,
      description: guide.answer_summary || payload.meta_description,
      primaryCtaLabel: guide.hero_primary_cta_label || 'View Models in This Category',
      primaryCtaHref: guide.hero_primary_cta_href || payload.url_path,
      secondaryCtaLabel: guide.hero_secondary_cta_label || 'Request Quote',
      secondaryCtaHref: guide.hero_secondary_cta_href || ROUTES.contact,
      heroImage: guide.hero_image_url,
      heroImageAlt: guide.hero_image_alt || payload.name,
      heroNoteTitle: guide.hero_note_title,
      heroNoteCopy: guide.hero_note_copy,
      heroNoteQuote: optionalText(guide.hero_note_quote),
      heroNoteAttribution: optionalText(guide.hero_note_attribution),
      definitionTitle: guide.definition_title,
      definitionCopy: guide.definition_copy,
      definitionParagraphs: guide.definition_paragraphs,
      definitionCards: guide.definition_cards.map((item) => ({
        title: item.title,
        copy: item.body,
        icon: item.icon || undefined,
      })),
      contextsTitle: guide.contexts_title,
      contexts: guide.contexts.map((item) => ({
        title: item.title,
        copy: item.body,
        image: item.image_url,
        imageAlt: item.image_alt || item.title,
      })),
      matrixTitle: guide.matrix_title,
      matrixEyebrow: optionalText(guide.matrix_eyebrow),
      matrixCards: guide.decision_factors.map((item) => ({
        title: item.title,
        copy: item.body,
        icon: item.icon || undefined,
      })),
      pathsTitle: guide.paths_title,
      pathsEyebrow: optionalText(guide.paths_eyebrow),
      paths: guide.paths.map((item) => ({
        step: optionalText(item.step),
        title: item.title,
        copy: item.body,
        bullets: item.bullets,
      })),
      metrics: standardsStats.map((item) => ({
        value: item.value,
        label: item.label,
      })),
      standardsTitle: optionalText(guide.standards_title),
      standardsCopy: optionalText(guide.standards_copy),
      standardsStats,
      faqTitle: guide.faq_title,
      faqs: guide.faqs.map((item) => ({
        question: item.question,
        answer: item.answer,
      })),
      resourcesTitle: optionalText(guide.resources_title),
      resources,
      ctaTitle: guide.cta_title,
      ctaCopy: guide.cta_copy,
      ctaPrimaryLabel: guide.cta_primary_label || 'Browse Current Models',
      ctaPrimaryHref: guide.cta_primary_href || payload.url_path,
      ctaSecondaryLabel: guide.cta_secondary_label || 'Request Quote',
      ctaSecondaryHref: guide.cta_secondary_href || ROUTES.contact,
    },
  }
}

export async function fetchCategoryGuidePayload(
  categorySlug: string,
): Promise<CatalogCategoryGuidePayload | null> {
  return fetchCatalogGuideJson<CatalogCategoryGuidePayload>(`/categories/${categorySlug}/guide`)
}

export async function fetchCategoryGuide(categorySlug: string): Promise<{
  category: CategoryGuideRecord
  canonical: string
} | null> {
  const payload = await fetchCategoryGuidePayload(categorySlug)

  if (!payload) {
    return null
  }

  return {
    category: mapCategoryGuidePayloadToModel(payload),
    canonical: buildCategoryGuideCanonical(payload),
  }
}
