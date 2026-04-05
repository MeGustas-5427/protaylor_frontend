import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ProductDetailPage } from '@/components/product/product-detail-page'
import {
  fetchCatalogProductDetailPayload,
  fetchProductDetail,
  fetchProductPaths,
} from '@/lib/catalog/product-detail'

type PageProps = {
  params: Promise<{ categorySlug: string; productSlug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug, productSlug } = await params
  const product = await fetchCatalogProductDetailPayload(categorySlug, productSlug)

  if (!product) {
    return {}
  }

  return {
    title: product.seo_title,
    description: product.meta_description,
  }
}

export async function generateStaticParams() {
  const productPaths = await fetchProductPaths()

  return productPaths.map((product) => ({
    categorySlug: product.category_slug,
    productSlug: product.product_slug,
  }))
}

export default async function Page({ params }: PageProps) {
  const { categorySlug, productSlug } = await params
  const product = await fetchProductDetail(categorySlug, productSlug)

  if (!product) {
    notFound()
  }

  return <ProductDetailPage product={product} />
}
