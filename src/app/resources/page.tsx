import type { Metadata } from 'next'
import { ResourcesIndexPage } from '@/components/resource/resources-index-page'

export const metadata: Metadata = {
  title: 'Journal & Resources',
  description:
    'Editorial buying guides, factory notes, and OEM strategy resources for PRO-TAYLOR commercial equipment buyers.',
}

export default function Page() {
  return <ResourcesIndexPage />
}
