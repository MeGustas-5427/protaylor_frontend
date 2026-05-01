import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.protaylor.com'

export default function robots(): MetadataRoute.Robots {
  const siteOrigin = SITE_URL.replace(/\/$/, '')

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteOrigin}/sitemap.xml`,
  }
}
