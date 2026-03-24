import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticlePage } from '@/components/resource/article-page'
import { articleFixture } from '@/fixtures/stitch/content'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  if (slug !== articleFixture.slug) {
    return {}
  }

  return {
    title: articleFixture.title,
    description: articleFixture.summary,
  }
}

export function generateStaticParams() {
  return [{ slug: articleFixture.slug }]
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  if (slug !== articleFixture.slug) {
    notFound()
  }

  return <ArticlePage />
}
