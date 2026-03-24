import type { Metadata } from 'next'
import { CompanyPage } from '@/components/company/company-page'

export const metadata: Metadata = {
  title: 'Factory & Quality Control',
  description:
    'Explore the PRO-TAYLOR factory, quality control process, export readiness, and after-sales support model.',
}

export default function Page() {
  return <CompanyPage />
}
