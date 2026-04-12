import { cache } from 'react'

const CATALOG_API_BASE_URL = 'http://127.0.0.1:8000/api/v1/catalog'
const CATALOG_REVALIDATE_SECONDS = 3600

type CatalogCategoryOverviewCardPayload = {
  name: string
  slug: string
  url_path: string
  summary: string
  product_count: number
}

type CatalogCategoryListingPreviewPayload = {
  items: Array<{
    card_image_url: string
    card_image_alt: string
  }>
}

export type ProductsOverviewCategoryCard = {
  name: string
  countLabel: string
  blurb: string
  href: string
  imageUrl: string | null
  imageAlt: string | null
}

export type ProductsOverviewData = {
  totalProductCount: number
  categories: ProductsOverviewCategoryCard[]
}

async function fetchCatalogJson<T>(path: string): Promise<T> {
  const response = await fetch(
    `${CATALOG_API_BASE_URL}${path}`,
    process.env.NODE_ENV === 'development'
      ? {
          cache: 'no-store',
        }
      : {
          next: { revalidate: CATALOG_REVALIDATE_SECONDS },
        },
  )

  if (!response.ok) {
    throw new Error(`Catalog API request failed: ${response.status} ${response.statusText}`)
  }

  return (await response.json()) as T
}

async function fetchCategoryPreviewImage(slug: string) {
  try {
    const payload = await fetchCatalogJson<CatalogCategoryListingPreviewPayload>(
      `/categories/${slug}/products?page=1&page_size=1`,
    )
    const firstItem = payload.items[0]

    if (!firstItem?.card_image_url) {
      return null
    }

    return {
      imageUrl: firstItem.card_image_url,
      imageAlt: firstItem.card_image_alt || null,
    }
  } catch {
    return null
  }
}

export const fetchProductsOverviewData = cache(async (): Promise<ProductsOverviewData> => {
  const categories = await fetchCatalogJson<CatalogCategoryOverviewCardPayload[]>('/categories')
  const categoryCards = await Promise.all(
    categories.map(async (category) => {
      const previewImage = await fetchCategoryPreviewImage(category.slug)

      return {
        name: category.name,
        countLabel: `${category.product_count} Models`,
        blurb: category.summary,
        href: category.url_path,
        imageUrl: previewImage?.imageUrl ?? null,
        imageAlt: previewImage?.imageAlt ?? category.name,
      }
    }),
  )

  return {
    totalProductCount: categories.reduce((sum, category) => sum + category.product_count, 0),
    categories: categoryCards,
  }
})
