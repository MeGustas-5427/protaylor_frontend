import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { CategoryListingPage } from '@/components/product/category-listing-page'
import {
  buildCatalogListingMetadata,
  buildCatalogListingPageHref,
  fetchCatalogCategoryListingPayload,
  mapCatalogListingToPageModel,
} from '@/lib/catalog/category-listing'
import { fetchCategoryPaths } from '@/lib/catalog/product-detail'
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

function normalizeSubcategoryParam(subcategoryParam: string | string[] | undefined) {
  const rawValue = Array.isArray(subcategoryParam) ? subcategoryParam[0] : subcategoryParam
  return rawValue?.trim() || undefined
}

function shouldRedirectInvalidSubcategory(
  requestedSubcategorySlug: string | undefined,
  payload: Awaited<ReturnType<typeof fetchCatalogCategoryListingPayload>>,
) {
  if (!requestedSubcategorySlug || !payload) {
    return false
  }

  if (payload.active_subcategory_slug === requestedSubcategorySlug) {
    return false
  }

  return !payload.subcategory_tabs.some((tab) => tab.slug === requestedSubcategorySlug)
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { categorySlug } = await params
  const { page, order_by: orderBy, subcategory_slug: subcategorySlug } = await searchParams
  const currentPage = normalizePageParam(page)
  const currentSubcategorySlug = normalizeSubcategoryParam(subcategorySlug)
  const payload = await fetchCatalogCategoryListingPayload(categorySlug, {
    page: currentPage,
    orderBy,
    subcategorySlug: currentSubcategorySlug,
  })

  if (payload) {
    const metadata = buildCatalogListingMetadata(payload, { orderBy })

    return {
      title: metadata.title,
      description: metadata.description,
      alternates: {
        canonical: metadata.canonical,
      },
    }
  }

  const category = getProductCategoryBySlug(categorySlug)

  if (!category) {
    return {}
  }

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

export async function generateStaticParams() {
  const categoryPaths = await fetchCategoryPaths()
  const realSlugs = categoryPaths.map((category) => category.slug)
  const fixtureSlugs = productCategories.map((category) => category.slug)
  const allSlugs = Array.from(new Set([...realSlugs, ...fixtureSlugs]))

  return allSlugs.map((categorySlug) => ({ categorySlug }))
}

export default async function Page({ params, searchParams }: PageProps) {
  const { categorySlug } = await params
  const { page, order_by: orderBy, subcategory_slug: subcategorySlug } = await searchParams
  const currentPage = normalizePageParam(page)
  const currentSubcategorySlug = normalizeSubcategoryParam(subcategorySlug)
  const payload = await fetchCatalogCategoryListingPayload(categorySlug, {
    page: currentPage,
    orderBy,
    subcategorySlug: currentSubcategorySlug,
  })

  if (payload) {
    if (shouldRedirectInvalidSubcategory(currentSubcategorySlug, payload)) {
      redirect(
        buildCatalogListingPageHref(categorySlug, payload.pagination.current_page, {
          orderBy,
          includeSubcategory: false,
        }),
      )
    }

    const pageModel = mapCatalogListingToPageModel(payload, { orderBy })
    return <CategoryListingPage category={pageModel.category} pagination={pageModel.pagination} />
  }

  const category = getProductCategoryBySlug(categorySlug)
  if (!category) {
    notFound()
  }

  const pagination = getCategoryListingPagination(category, currentPage)

  if (currentPage > pagination.totalPages) {
    notFound()
  }

  return <CategoryListingPage category={category} pagination={pagination} />
}
