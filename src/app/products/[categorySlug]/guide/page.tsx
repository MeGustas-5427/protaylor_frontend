import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CategoryGuidePage } from '@/components/product/category-guide-page'
import {
  buildCategoryGuideHref,
  getProductCategoryBySlug,
  productCategories,
} from '@/fixtures/stitch/product-catalog'
import {
  buildCatalogGuideMetadata,
  mapCatalogListingToGuideModel,
  type CategoryGuideRecord,
} from '@/lib/catalog/category-guide'
import { fetchCatalogCategoryListingPayload } from '@/lib/catalog/category-listing'
import { fetchCategoryPaths } from '@/lib/catalog/product-detail'

type PageProps = {
  params: Promise<{ categorySlug: string }>
}

export const dynamicParams = false

async function resolveCategoryGuide(categorySlug: string): Promise<{
  category: CategoryGuideRecord
  canonical: string
} | null> {
  const fixtureCategory = getProductCategoryBySlug(categorySlug)

  if (fixtureCategory) {
    return {
      category: fixtureCategory,
      canonical: buildCategoryGuideHref(categorySlug),
    }
  }

  const payload = await fetchCatalogCategoryListingPayload(categorySlug)
  if (!payload) {
    return null
  }

  return {
    category: mapCatalogListingToGuideModel(payload),
    canonical: buildCatalogGuideMetadata(payload).canonical,
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug } = await params
  const fixtureCategory = getProductCategoryBySlug(categorySlug)

  if (fixtureCategory) {
    return {
      title: fixtureCategory.guide.title,
      description: fixtureCategory.guide.description,
      alternates: {
        canonical: buildCategoryGuideHref(categorySlug),
      },
    }
  }

  const payload = await fetchCatalogCategoryListingPayload(categorySlug)
  if (!payload) {
    return {}
  }

  const metadata = buildCatalogGuideMetadata(payload)

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: metadata.canonical,
    },
  }
}

export async function generateStaticParams() {
  const categoryPaths = await fetchCategoryPaths()
  const realSlugs = categoryPaths.map((category) => category.slug)
  const fixtureSlugs = productCategories.map((category) => category.slug)
  const allSlugs = Array.from(new Set([...realSlugs, ...fixtureSlugs]))

  return allSlugs.map((categorySlug) => ({ categorySlug }))
}

export default async function Page({ params }: PageProps) {
  const { categorySlug } = await params
  const resolvedCategoryGuide = await resolveCategoryGuide(categorySlug)

  if (!resolvedCategoryGuide) {
    notFound()
  }

  return <CategoryGuidePage category={resolvedCategoryGuide.category} />
}
