import type { Metadata } from 'next'
import { ProductsOverviewPage } from '@/components/product/products-overview-page'
import { fetchProductsOverviewData } from '@/lib/catalog/products-overview'

export const metadata: Metadata = {
  title: 'Products Overview',
  description:
    'Browse PRO-TAYLOR product categories, buyer paths, machine ecosystems, and sourcing guidance for global dessert equipment programs.',
}

export default async function Page() {
  const overviewData = await fetchProductsOverviewData()

  return (
    <ProductsOverviewPage
      categories={overviewData.categories}
      totalProductCount={overviewData.totalProductCount}
    />
  )
}
