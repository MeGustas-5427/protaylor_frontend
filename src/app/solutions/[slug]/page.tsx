import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SolutionPage } from '@/components/solution/solution-page'
import { solutionFixture } from '@/fixtures/stitch/content'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  if (slug !== solutionFixture.slug) {
    return {}
  }

  return {
    title: 'Commercial, Wholesale & OEM',
    description: solutionFixture.description,
  }
}

export function generateStaticParams() {
  return [{ slug: solutionFixture.slug }]
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  if (slug !== solutionFixture.slug) {
    notFound()
  }

  return <SolutionPage />
}
