import type { Metadata } from 'next'
import { ProductsOverviewPage } from '@/components/product/products-overview-page'

export const metadata: Metadata = {
  title: 'Products Overview | PRO-TAYLOR',
  description:
    'Browse PRO-TAYLOR product categories, buyer paths, machine ecosystems, and sourcing guidance for global dessert equipment programs.',
}

export default function Page() {
  return <ProductsOverviewPage />
}
