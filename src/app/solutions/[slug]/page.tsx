import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SolutionPage } from '@/components/solution/solution-page'
import { getSolutionFixtureBySlug, solutionFixtures } from '@/fixtures/stitch/content'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolutionFixtureBySlug(slug)

  if (!solution) {
    return {}
  }

  return {
    title: solution.overviewTitle,
    description: solution.description,
  }
}

export function generateStaticParams() {
  return solutionFixtures.map((solution) => ({ slug: solution.slug }))
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const solution = getSolutionFixtureBySlug(slug)

  if (!solution) {
    notFound()
  }

  return <SolutionPage solution={solution} />
}
