import type { MetadataRoute } from 'next'
import { ROUTES } from '@/fixtures/stitch/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return Object.values(ROUTES).map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: now,
  }))
}
