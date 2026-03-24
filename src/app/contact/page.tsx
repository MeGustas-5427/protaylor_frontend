import type { Metadata } from 'next'
import { ContactPage } from '@/components/forms/contact-page'

export const metadata: Metadata = {
  title: 'Contact & Quote',
  description:
    'Request a formal quote, technical consultation, or factory-direct support from the PRO-TAYLOR team.',
}

export default function Page() {
  return <ContactPage />
}
