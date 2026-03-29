import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CategoryListingPage } from '@/components/product/category-listing-page'
import {
  buildCategoryHref,
  getCategoryListingPagination,
  getProductCategoryBySlug,
  productCategories,
} from '@/fixtures/stitch/product-catalog'

type PageProps = {
  params: Promise<{ categorySlug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const dynamicParams = false

function normalizePageParam(pageParam: string | string[] | undefined) {
  const rawValue = Array.isArray(pageParam) ? pageParam[0] : pageParam
  const parsedPage = Number.parseInt(rawValue ?? '1', 10)

  if (!Number.isFinite(parsedPage) || parsedPage < 1) {
    return 1
  }

  return parsedPage
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { categorySlug } = await params
  const { page } = await searchParams
  const category = getProductCategoryBySlug(categorySlug)

  if (!category) {
    return {}
  }

  const currentPage = normalizePageParam(page)
  const pagination = getCategoryListingPagination(category, currentPage)

  if (currentPage > pagination.totalPages) {
    notFound()
  }

  const canonicalPath =
    currentPage === 1
      ? buildCategoryHref(categorySlug)
      : `${buildCategoryHref(categorySlug)}?page=${currentPage}`

  return {
    title: `${category.name} | PRO-TAYLOR`,
    description: category.listing.description,
    alternates: {
      canonical: canonicalPath,
    },
  }
}

export function generateStaticParams() {
  return productCategories.map((category) => ({ categorySlug: category.slug }))
}

export default async function Page({ params, searchParams }: PageProps) {
  const { categorySlug } = await params
  const { page } = await searchParams
  const category = getProductCategoryBySlug(categorySlug)

  if (!category) {
    notFound()
  }

  const currentPage = normalizePageParam(page)
  const pagination = getCategoryListingPagination(category, currentPage)

  if (currentPage > pagination.totalPages) {
    notFound()
  }

  return <CategoryListingPage category={category} pagination={pagination} />
}
