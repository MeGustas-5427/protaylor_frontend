import type { BreadcrumbList, CollectionPage, FAQPage, ItemList, WithContext } from 'schema-dts'
import type {
  ProductCategoryRecord,
  ProductListingCard,
  ProductPagination,
} from '@/fixtures/stitch/product-catalog'

type CategoryListingJsonLdInput = {
  category: ProductCategoryRecord
  pagination: ProductPagination
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.protaylor.com'

function buildAbsoluteUrl(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

function getActiveMachineTypeLabel(category: ProductCategoryRecord) {
  const listing = category.listing
  if (!listing.activeSubcategorySlug) {
    return null
  }

  return listing.machineTypeTabs?.find((tab) => tab.isActive)?.label ?? listing.title
}

function buildListingPath(category: ProductCategoryRecord, pagination: ProductPagination) {
  const params = new URLSearchParams()
  const listing = category.listing

  if (pagination.currentPage > 1) {
    params.set('page', String(pagination.currentPage))
  }
  if (listing.activeSubcategorySlug) {
    params.set('subcategory_slug', listing.activeSubcategorySlug)
  }

  const query = params.toString()
  return query ? `/products/${category.slug}?${query}` : `/products/${category.slug}`
}

function buildBreadcrumbJsonLd(
  category: ProductCategoryRecord,
  pageUrl: string,
): WithContext<BreadcrumbList> {
  const activeMachineTypeLabel = getActiveMachineTypeLabel(category)

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: activeMachineTypeLabel
      ? [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Products',
            item: `${SITE_URL}/products`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: category.name,
            item: buildAbsoluteUrl(`/products/${category.slug}`),
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: activeMachineTypeLabel,
            item: pageUrl,
          },
        ]
      : [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Products',
            item: `${SITE_URL}/products`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: category.name,
            item: pageUrl,
          },
        ],
  }
}

function buildCollectionPageJsonLd(
  category: ProductCategoryRecord,
  pageUrl: string,
): WithContext<CollectionPage> {
  const listing = category.listing

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: listing.title,
    url: pageUrl,
    description: listing.description,
    isPartOf: {
      '@type': 'WebSite',
      name: 'PRO-TAYLOR',
      url: SITE_URL,
    },
  }
}

function buildProductListItem(
  product: ProductListingCard,
  position: number,
  categoryName: string,
) {
  const additionalProperty = product.metrics?.map((metric) => ({
    '@type': 'PropertyValue' as const,
    name: metric.label,
    value: metric.value,
  }))

  return {
    '@type': 'ListItem' as const,
    position,
    item: {
      '@type': 'Product' as const,
      name: product.name,
      url: buildAbsoluteUrl(product.href),
      description: product.description,
      image: buildAbsoluteUrl(product.image),
      category: categoryName,
      ...(additionalProperty?.length ? { additionalProperty } : {}),
    },
  }
}

function buildProductItemListJsonLd(
  category: ProductCategoryRecord,
  pagination: ProductPagination,
  pageUrl: string,
): WithContext<ItemList> {
  const listCategoryName = getActiveMachineTypeLabel(category) ?? category.name

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${listCategoryName} product models`,
    url: pageUrl,
    numberOfItems: pagination.totalProducts,
    itemListElement: pagination.products.map((product, index) =>
      buildProductListItem(product, pagination.startItem + index, listCategoryName),
    ),
  }
}

function buildFaqJsonLd(category: ProductCategoryRecord): WithContext<FAQPage> | null {
  const normalizedFaqs = category.listing.insightFaqs
    .map((faq) => ({
      question: faq.question.trim(),
      answer: faq.answer.trim(),
    }))
    .filter((faq) => faq.question && faq.answer)

  if (normalizedFaqs.length === 0) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: normalizedFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildCategoryListingJsonLd({
  category,
  pagination,
}: CategoryListingJsonLdInput) {
  const pageUrl = buildAbsoluteUrl(buildListingPath(category, pagination))

  return [
    buildBreadcrumbJsonLd(category, pageUrl),
    buildCollectionPageJsonLd(category, pageUrl),
    buildProductItemListJsonLd(category, pagination, pageUrl),
    buildFaqJsonLd(category),
  ].filter(Boolean)
}
