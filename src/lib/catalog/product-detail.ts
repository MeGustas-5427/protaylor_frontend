// 这轮先把本地联调地址集中写在一个地方，避免散落在多个 page.tsx。
// 等后端服务地址稳定后，再统一替换成环境变量。
const CATALOG_API_BASE_URL = 'http://127.0.0.1:8000/api/v1/catalog'
const CATALOG_REVALIDATE_SECONDS = 3600

type CatalogMetricRow = {
  label: string
  value: string
  unit: string
  is_highlight: boolean
}

type CatalogSpecGroup = {
  title: string
  group_kind_code: string
  rows: CatalogMetricRow[]
}

type CatalogMediaItem = {
  id: number
  media_kind: string
  is_primary: boolean
  alt_override: string
  asset: {
    title: string
    file_url: string
    alt_text: string
  } | null
}

type CatalogRelatedProductCard = {
  name: string
  url_path: string
  summary: string
  eyebrow: string
  image_url: string
  image_alt: string
}

type CatalogRelatedResourceCard = {
  title: string
  url_path: string
  summary: string
  eyebrow: string
  image_url: string
  image_alt: string
}

type CatalogFaqItem = {
  question: string
  answer: string
}

export type CatalogProductPath = {
  category_slug: string
  product_slug: string
}

export type CatalogCategoryPath = {
  slug: string
  url_path: string
}

export type CatalogProductDetailPayload = {
  h1: string
  hero_eyebrow: string
  lead_text: string
  seo_title: string
  meta_description: string
  model_code: string
  packing_shipping: string
  quick_facts: CatalogMetricRow[]
  spec_groups: CatalogSpecGroup[]
  use_cases: Array<{
    title: string
    summary: string
  }>
  media_items: CatalogMediaItem[]
  related_products: CatalogRelatedProductCard[]
  related_resources: CatalogRelatedResourceCard[]
  faq_items: CatalogFaqItem[]
  downloads: Array<{
    title: string
  }>
}

export type ProductDetailViewModel = {
  hero: {
    eyebrow: string
    title: string
    description: string
    leadTimeNote: string
    metrics: Array<{
      label: string
      value: string
    }>
    primaryImage: {
      url: string
      alt: string
    } | null
    galleryImages: Array<{
      id: number
      url: string
      alt: string
    }>
    hasDownloads: boolean
  }
  scenarios: Array<{
    title: string
    description: string
  }>
  specifications: {
    modelCode: string
    rows: Array<{
      label: string
      value: string
    }>
  }
  relatedCards: Array<{
    href: string
    eyebrow: string
    title: string
    description: string
    imageUrl: string
    imageAlt: string
  }>
  faqItems: Array<{
    question: string
    answer: string
  }>
}

async function fetchCatalogJson<T>(path: string): Promise<T | null> {
  const response = await fetch(`${CATALOG_API_BASE_URL}${path}`, {
    next: { revalidate: CATALOG_REVALIDATE_SECONDS },
  })

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error(`Catalog API request failed: ${response.status} ${response.statusText}`)
  }

  return (await response.json()) as T
}

function formatMetricValue(metric: CatalogMetricRow) {
  return [metric.value, metric.unit].filter(Boolean).join(' ')
}

function resolveMediaAlt(item: CatalogMediaItem, fallback: string) {
  return item.alt_override || item.asset?.alt_text || fallback
}

function pickPrimaryMedia(mediaItems: CatalogMediaItem[], fallbackAlt: string) {
  const primary = mediaItems.find((item) => item.is_primary && item.asset) ?? mediaItems.find((item) => item.asset)

  if (!primary?.asset) {
    return null
  }

  return {
    id: primary.id,
    url: primary.asset.file_url,
    alt: resolveMediaAlt(primary, fallbackAlt),
  }
}

export function mapProductDetailResponseToViewModel(
  payload: CatalogProductDetailPayload,
): ProductDetailViewModel {
  // 详情页只消费“核心可对接区”。
  // 仍保持前端写死的 OEM / Export / Final CTA 等模块，不把整页重新揉成一个超大后端契约。
  const primaryMedia = pickPrimaryMedia(payload.media_items, payload.h1)
  const galleryImages = payload.media_items
    .filter((item) => item.asset && item.id !== primaryMedia?.id)
    .map((item) => ({
      id: item.id,
      url: item.asset!.file_url,
      alt: resolveMediaAlt(item, payload.h1),
    }))
  const specificationRows = payload.spec_groups
    .filter((group) => group.group_kind_code !== 'quick_facts')
    .flatMap((group) => group.rows)
    .map((row) => ({
      label: row.label,
      value: formatMetricValue(row),
    }))

  return {
    hero: {
      eyebrow: payload.hero_eyebrow,
      title: payload.h1,
      description: payload.lead_text,
      leadTimeNote: payload.packing_shipping,
      metrics: payload.quick_facts.slice(0, 4).map((metric) => ({
        label: metric.label,
        value: formatMetricValue(metric),
      })),
      primaryImage: primaryMedia
        ? {
            url: primaryMedia.url,
            alt: primaryMedia.alt,
          }
        : null,
      galleryImages,
      hasDownloads: payload.downloads.length > 0,
    },
    scenarios: payload.use_cases.slice(0, 3).map((item) => ({
      title: item.title,
      description: item.summary,
    })),
    specifications: {
      modelCode: payload.model_code,
      rows: specificationRows,
    },
    relatedCards: [
      ...payload.related_products.map((item) => ({
        href: item.url_path,
        eyebrow: item.eyebrow,
        title: item.name,
        description: item.summary,
        imageUrl: item.image_url,
        imageAlt: item.image_alt,
      })),
      ...payload.related_resources.map((item) => ({
        href: item.url_path,
        eyebrow: item.eyebrow,
        title: item.title,
        description: item.summary,
        imageUrl: item.image_url,
        imageAlt: item.image_alt,
      })),
    ],
    faqItems: payload.faq_items.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  }
}

export async function fetchCatalogProductDetailPayload(
  categorySlug: string,
  productSlug: string,
): Promise<CatalogProductDetailPayload | null> {
  return fetchCatalogJson<CatalogProductDetailPayload>(
    `/products/${categorySlug}/${productSlug}`,
  )
}

export async function fetchProductDetail(
  categorySlug: string,
  productSlug: string,
): Promise<ProductDetailViewModel | null> {
  const payload = await fetchCatalogProductDetailPayload(categorySlug, productSlug)
  return payload ? mapProductDetailResponseToViewModel(payload) : null
}

export async function fetchProductPaths(): Promise<CatalogProductPath[]> {
  try {
    return (await fetchCatalogJson<CatalogProductPath[]>('/products/paths')) ?? []
  } catch {
    // 构建阶段如果后端暂时不可达，返回空数组可以避免前端直接 build 失败。
    // 页面主体仍会在真实请求时走详情接口，不会把 fixture 再带回来。
    return []
  }
}

export async function fetchCategoryPaths(): Promise<CatalogCategoryPath[]> {
  try {
    return (await fetchCatalogJson<CatalogCategoryPath[]>('/categories/paths')) ?? []
  } catch {
    return []
  }
}
