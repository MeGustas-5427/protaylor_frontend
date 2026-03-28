import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CategoryGuidePage } from '@/components/product/category-guide-page'
import { getProductCategoryBySlug, productCategories } from '@/fixtures/stitch/product-catalog'

type PageProps = {
  params: Promise<{ categorySlug: string }>
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug } = await params
  const category = getProductCategoryBySlug(categorySlug)

  if (!category) {
    return {}
  }

  return {
    title: `${category.name} Guide | PRO-TAYLOR`,
    description: category.guide.description,
  }
}

export function generateStaticParams() {
  return productCategories.map((category) => ({ categorySlug: category.slug }))
}

export default async function Page({ params }: PageProps) {
  const { categorySlug } = await params
  const category = getProductCategoryBySlug(categorySlug)

  if (!category) {
    notFound()
  }

  return <CategoryGuidePage category={category} />
}
