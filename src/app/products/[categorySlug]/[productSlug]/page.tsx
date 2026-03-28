import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductDetailPage } from '@/components/product/product-detail-page'
import { getProductFixtureBySlug, productFixtures } from '@/fixtures/stitch/catalog'

type PageProps = {
  params: Promise<{ categorySlug: string; productSlug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug, productSlug } = await params
  const product = getProductFixtureBySlug(categorySlug, productSlug)

  if (!product) {
    return {}
  }

  return {
    title: product.title,
    description: product.description,
  }
}

export function generateStaticParams() {
  return productFixtures.map((product) => ({
    categorySlug: product.categorySlug,
    productSlug: product.slug,
  }))
}

export default async function Page({ params }: PageProps) {
  const { categorySlug, productSlug } = await params
  const product = getProductFixtureBySlug(categorySlug, productSlug)

  if (!product) {
    notFound()
  }

  return <ProductDetailPage />
}
