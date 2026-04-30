import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CategoryGuidePage } from '@/components/product/category-guide-page'
import {
  buildCategoryGuideMetadata,
  fetchCategoryGuide,
  fetchCategoryGuidePayload,
} from '@/lib/catalog/category-guide'
import { fetchCategoryPaths } from '@/lib/catalog/product-detail'

type PageProps = {
  params: Promise<{ categorySlug: string }>
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug } = await params
  const payload = await fetchCategoryGuidePayload(categorySlug)

  if (!payload) {
    return {}
  }

  const metadata = buildCategoryGuideMetadata(payload)

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

  return categoryPaths.map((category) => ({ categorySlug: category.slug }))
}

export default async function Page({ params }: PageProps) {
  const { categorySlug } = await params
  const resolvedCategoryGuide = await fetchCategoryGuide(categorySlug)

  if (!resolvedCategoryGuide) {
    notFound()
  }

  return <CategoryGuidePage category={resolvedCategoryGuide.category} />
}
