import type { Metadata } from 'next'
import { SolutionsOverviewPage } from '@/components/solution/solutions-overview-page'

export const metadata: Metadata = {
  title: 'Solutions Overview | PRO-TAYLOR',
  description:
    'Explore PRO-TAYLOR solution paths for OEM programs, distributors, hospitality deployments, and boutique dessert businesses.',
}

export default function Page() {
  return <SolutionsOverviewPage />
}
