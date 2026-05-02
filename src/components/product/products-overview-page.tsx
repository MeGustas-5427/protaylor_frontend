/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { ProductsOverviewCategoryCard } from '@/components/product/products-overview-category-card'
import { JsonLdScript } from '@/components/seo/json-ld-script'
import { MaterialIcon } from '@/components/ui/material-icon'
import { productsOverviewFixture } from '@/fixtures/stitch/product-catalog'
import type { ProductsOverviewCategoryCard as ProductsOverviewCategoryCardData } from '@/lib/catalog/products-overview'
import { buildProductsOverviewJsonLd } from '@/lib/seo/products-overview-jsonld'

type ProductsOverviewPageProps = {
  categories: ProductsOverviewCategoryCardData[]
  totalProductCount: number
}

export function ProductsOverviewPage({
  categories,
  totalProductCount,
}: ProductsOverviewPageProps) {
  const overview = productsOverviewFixture
  const productsOverviewJsonLd = buildProductsOverviewJsonLd({
    categories,
    faqs: overview.faqs,
    pageDescription: overview.description,
  })

  return (
    <>
      <JsonLdScript data={productsOverviewJsonLd} />
      <TrustRibbon highlight="oem" topClassName="top-16" />
      <SiteHeader
        activeSection="products"
        navTone="serif"
        searchMode="pill"
        searchPlaceholder="Search PRO-TAYLOR"
      />

      <main className="bg-background pt-32">
        <section className="mx-auto flex max-w-[1440px] flex-col gap-16 px-8 py-16 lg:flex-row lg:items-center lg:py-24">
          <div className="w-full lg:w-1/2">
            <span className="block font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {overview.eyebrow}
            </span>
            <h1 className="mt-6 font-headline text-6xl italic leading-[1.08] tracking-tight text-on-surface md:text-7xl">
              {overview.title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-[1.75] text-on-surface-variant">
              {overview.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={overview.primaryCtaHref}
                className="rounded-md bg-primary px-8 py-4 font-medium text-on-primary shadow-sm transition-transform hover:-translate-y-0.5"
              >
                {overview.primaryCtaLabel}
              </Link>
              <Link
                href={overview.secondaryCtaHref}
                className="rounded-md border border-outline-variant px-8 py-4 font-medium text-primary transition-colors hover:bg-surface-container-low"
              >
                {overview.secondaryCtaLabel}
              </Link>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2">
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container">
              <img
                src={overview.heroImage}
                alt={overview.heroAlt}
                className="h-full w-full object-cover grayscale-[12%]"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <p className="text-sm font-label uppercase tracking-[0.18em] text-white/80">
                {overview.featuredLabel}
              </p>
              <p className="mt-1 font-headline text-xl italic text-white">
                {overview.featuredTitle}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-8 py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                  The Portfolio
                </span>
                <h2 className="mt-4 font-headline text-4xl italic text-on-background md:text-5xl">
                  Category Master Index
                </h2>
              </div>
              <div className="text-sm text-on-surface-variant">
                <p>{totalProductCount} Total Models</p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {categories.map((category) => (
                <ProductsOverviewCategoryCard
                  key={category.href}
                  category={category}
                  fallbackImageUrl={overview.heroImage}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-dim px-8 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Guidance
              </span>
              <h2 className="mt-4 font-headline text-4xl italic text-on-background">
                How to Choose the Right System
              </h2>
            </div>

            <div className="overflow-x-auto rounded-xl border border-outline-variant/20 bg-surface-container-lowest shadow-lg">
              <table className="w-full border-collapse text-left">
                <thead className="bg-surface-container">
                  <tr>
                    {overview.selectionGuide.columns.map((column) => (
                      <th
                        key={column}
                        className="border-b-2 border-secondary/20 p-6 text-sm font-label uppercase tracking-[0.18em] text-secondary"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {overview.selectionGuide.rows.map((row, index) => (
                    <tr
                      key={row[0]}
                      className={index % 2 === 1 ? 'bg-surface-container-low' : undefined}
                    >
                      <td className="p-6 font-semibold text-secondary">{row[0]}</td>
                      <td className="p-6">{row[1]}</td>
                      <td className="p-6">{row[2]}</td>
                      <td className="p-6">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-[720px] items-center">
          <img
            src={overview.spotlight.image}
            alt={overview.spotlight.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative mx-auto w-full max-w-[1440px] px-8 text-white">
            <div className="max-w-2xl">
              <span className="text-xs font-label uppercase tracking-[0.3em] text-white/70">
                {overview.spotlight.eyebrow}
              </span>
              <h2 className="mt-6 font-headline text-6xl italic leading-[1.08]">
                {overview.spotlight.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/80">
                {overview.spotlight.copy}
              </p>
              <Link
                href={overview.spotlight.href}
                className="mt-8 inline-flex items-center gap-4 rounded bg-white px-8 py-4 font-medium text-on-surface transition-colors hover:bg-surface-container-low"
              >
                <span>{overview.spotlight.ctaLabel}</span>
                <MaterialIcon name="arrow_forward" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-24">
          <div className="mb-12 flex flex-col gap-4 border-b border-outline-variant/30 pb-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-headline text-4xl italic text-on-background">Journal &amp; Resources</h2>
            <Link href="/resources" className="font-medium text-primary hover:underline">
              View All Insights
            </Link>
          </div>
          <div className="grid gap-16 md:grid-cols-2">
            {overview.resources.map((item) => (
              <Link key={item.title} href={item.href} className="space-y-4">
                <span className="text-xs font-label uppercase tracking-[0.18em] text-secondary">
                  {item.eyebrow}
                </span>
                <h3 className="font-headline text-3xl italic leading-tight text-on-background">
                  {item.title}
                </h3>
                <p className="line-clamp-2 text-on-surface-variant">{item.copy}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-low px-8 py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-16 text-center font-headline text-4xl italic text-on-background">
              Sourcing FAQ
            </h2>
            <div className="space-y-8">
              {overview.faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b border-outline-variant/30 pb-6"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-headline text-xl italic text-on-background">
                    {faq.question}
                    <MaterialIcon
                      name="expand_more"
                      className="transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-4 leading-7 text-on-surface-variant">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-24">
          <div className="overflow-hidden rounded-2xl bg-surface-container-highest lg:flex">
            <div className="bg-white/50 p-12 backdrop-blur-sm lg:w-1/2 lg:p-20">
              <h2 className="font-headline text-5xl italic leading-tight text-on-background">
                {overview.cta.title}
              </h2>
              <p className="mt-8 text-lg leading-8 text-on-surface-variant">
                {overview.cta.copy}
              </p>
              <div className="mt-10 flex flex-col gap-6 sm:flex-row">
                {overview.cta.contactOptions.map((option) => (
                  <Link
                    key={option.label}
                    href={option.href}
                    className="flex items-center justify-center gap-3 rounded-lg border border-primary/20 px-6 py-4 text-primary transition-colors hover:bg-white"
                  >
                    <MaterialIcon name={option.icon} />
                    <span className="font-medium">{option.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-surface-container p-12 lg:w-1/2 lg:p-20">
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-label uppercase tracking-[0.18em] text-secondary">
                      Company Name
                    </label>
                    <input
                      className="w-full rounded border-none bg-white p-4 focus:ring-2 focus:ring-primary/20"
                      placeholder={overview.cta.form.companyPlaceholder}
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-label uppercase tracking-[0.18em] text-secondary">
                      Business Type
                    </label>
                    <select className="w-full rounded border-none bg-white p-4 focus:ring-2 focus:ring-primary/20">
                      {overview.cta.form.businessTypeOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-label uppercase tracking-[0.18em] text-secondary">
                    Estimated Monthly Volume
                  </label>
                  <input
                    className="w-full rounded border-none bg-white p-4 focus:ring-2 focus:ring-primary/20"
                    placeholder={overview.cta.form.volumePlaceholder}
                    type="text"
                  />
                </div>
                <button
                  className="w-full rounded bg-primary py-5 font-medium text-white shadow-lg transition-colors hover:bg-primary-dim"
                  type="button"
                >
                  {overview.cta.form.submitLabel}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
