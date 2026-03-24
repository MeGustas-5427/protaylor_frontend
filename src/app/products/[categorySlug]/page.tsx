import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CategoryPage } from '@/components/product/category-page'
import { categoryFixture } from '@/fixtures/stitch/catalog'

type PageProps = {
  params: Promise<{ categorySlug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug } = await params

  if (categorySlug !== categoryFixture.slug) {
    return {}
  }

  return {
    title: categoryFixture.title,
    description: categoryFixture.description,
  }
}

export function generateStaticParams() {
  return [{ categorySlug: categoryFixture.slug }]
}

export default async function Page({ params }: PageProps) {
  const { categorySlug } = await params

  if (categorySlug !== categoryFixture.slug) {
    notFound()
  }

  return <CategoryPage />
}
