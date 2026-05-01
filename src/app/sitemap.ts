import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.protaylor.com'
const CATALOG_API_BASE_URL =
  process.env.CATALOG_API_BASE_URL ?? 'http://127.0.0.1:8000/api/v1/catalog'
const CATALOG_REVALIDATE_SECONDS = 3600

type SitemapEntry = MetadataRoute.Sitemap[number]

type CatalogCategoryPath = {
  slug: string
  url_path: string
}

type CatalogGuidePath = CatalogCategoryPath & {
  last_modified: string
}

type CatalogProductPath = {
  category_slug: string
  product_slug: string
}

const STATIC_SITEMAP_PATHS = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/products', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/solutions', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/commercial-wholesale-oem', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/solutions/shop-cafe-dessert-business', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/solutions/hospitality-buffet', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/solutions/distributor-import-program', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/resources', changeFrequency: 'monthly', priority: 0.6 },
  {
    path: '/resources/how-to-choose-the-right-soft-serve-machine',
    changeFrequency: 'monthly',
    priority: 0.5,
  },
  { path: '/company/factory-and-quality-control', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.4 },
] satisfies Array<{
  path: string
  changeFrequency: SitemapEntry['changeFrequency']
  priority: number
}>

function getSiteOrigin() {
  return SITE_URL.replace(/\/$/, '')
}

function normalizePath(path: string) {
  const trimmedPath = path.trim()

  if (!trimmedPath) {
    return '/'
  }

  return trimmedPath.startsWith('/') ? trimmedPath : `/${trimmedPath}`
}

function withoutTrailingSlash(path: string) {
  if (path === '/') {
    return path
  }

  return path.replace(/\/$/, '')
}

function buildAbsoluteUrl(path: string) {
  return `${getSiteOrigin()}${normalizePath(path)}`
}

function buildSitemapEntry(
  path: string,
  options: Pick<SitemapEntry, 'changeFrequency' | 'priority'> & {
    lastModified: SitemapEntry['lastModified']
  },
): SitemapEntry {
  return {
    url: buildAbsoluteUrl(path),
    lastModified: options.lastModified,
    changeFrequency: options.changeFrequency,
    priority: options.priority,
  }
}

async function fetchCatalogJson<T>(path: string): Promise<T[]> {
  try {
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
      return []
    }

    return (await response.json()) as T[]
  } catch {
    return []
  }
}

function dedupeSitemap(entries: SitemapEntry[]) {
  const seen = new Set<string>()

  return entries.filter((entry) => {
    if (seen.has(entry.url)) {
      return false
    }

    seen.add(entry.url)
    return true
  })
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const [categoryPaths, productPaths, guidePaths] = await Promise.all([
    fetchCatalogJson<CatalogCategoryPath>('/categories/paths'),
    fetchCatalogJson<CatalogProductPath>('/products/paths'),
    fetchCatalogJson<CatalogGuidePath>('/categories/guide/paths'),
  ])

  return dedupeSitemap([
    ...STATIC_SITEMAP_PATHS.map((entry) =>
      buildSitemapEntry(entry.path, {
        lastModified: now,
        changeFrequency: entry.changeFrequency,
        priority: entry.priority,
      }),
    ),
    ...categoryPaths.map((category) =>
      buildSitemapEntry(category.url_path, {
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      }),
    ),
    ...productPaths.map((product) =>
      buildSitemapEntry(`/products/${product.category_slug}/${product.product_slug}`, {
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      }),
    ),
    ...guidePaths.map((guide) =>
      buildSitemapEntry(`${withoutTrailingSlash(guide.url_path)}/guide`, {
        lastModified: new Date(guide.last_modified),
        changeFrequency: 'monthly',
        priority: 0.7,
      }),
    ),
  ])
}
