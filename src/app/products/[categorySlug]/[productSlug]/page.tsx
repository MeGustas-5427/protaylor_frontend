import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductDetailPage } from '@/components/product/product-detail-page'
import { categoryFixture, productFixture } from '@/fixtures/stitch/catalog'

type PageProps = {
  params: Promise<{ categorySlug: string; productSlug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug, productSlug } = await params

  if (
    categorySlug !== categoryFixture.slug ||
    productSlug !== productFixture.slug
  ) {
    return {}
  }

  return {
    title: productFixture.title,
    description: productFixture.description,
  }
}

export function generateStaticParams() {
  return [
    {
      categorySlug: categoryFixture.slug,
      productSlug: productFixture.slug,
    },
  ]
}

export default async function Page({ params }: PageProps) {
  const { categorySlug, productSlug } = await params

  if (
    categorySlug !== categoryFixture.slug ||
    productSlug !== productFixture.slug
  ) {
    notFound()
  }

  return <ProductDetailPage />
}
