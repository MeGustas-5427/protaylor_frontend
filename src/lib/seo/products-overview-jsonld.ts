import type { BreadcrumbList, CollectionPage, FAQPage, ItemList, WithContext } from 'schema-dts'
import type { ProductsOverviewCategoryCard } from '@/lib/catalog/products-overview'

type ProductsOverviewFaq = {
  question: string
  answer: string
}

type ProductsOverviewJsonLdInput = {
  categories: ProductsOverviewCategoryCard[]
  faqs: readonly ProductsOverviewFaq[]
  pageDescription: string
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.protaylor.com'
const PRODUCTS_PATH = '/products'
const PRODUCTS_URL = `${SITE_URL}${PRODUCTS_PATH}`

function buildAbsoluteUrl(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

function buildBreadcrumbJsonLd(): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
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
        item: PRODUCTS_URL,
      },
    ],
  }
}

function buildCollectionPageJsonLd(
  pageDescription: string,
): WithContext<CollectionPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Products Overview',
    url: PRODUCTS_URL,
    description: pageDescription,
    isPartOf: {
      '@type': 'WebSite',
      name: 'PRO-TAYLOR',
      url: SITE_URL,
    },
  }
}

function buildCategoryItemListJsonLd(
  categories: ProductsOverviewCategoryCard[],
): WithContext<ItemList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'PRO-TAYLOR product categories',
    itemListElement: categories.map((category, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: category.name,
      url: buildAbsoluteUrl(category.href),
      description: category.blurb,
    })),
  }
}

function buildFaqJsonLd(faqs: readonly ProductsOverviewFaq[]): WithContext<FAQPage> | null {
  const normalizedFaqs = faqs
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

export function buildProductsOverviewJsonLd({
  categories,
  faqs,
  pageDescription,
}: ProductsOverviewJsonLdInput) {
  return [
    buildBreadcrumbJsonLd(),
    buildCollectionPageJsonLd(pageDescription),
    buildCategoryItemListJsonLd(categories),
    buildFaqJsonLd(faqs),
  ].filter(Boolean)
}
