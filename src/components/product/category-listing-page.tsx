/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { JsonLdScript } from '@/components/seo/json-ld-script'
import { MaterialIcon } from '@/components/ui/material-icon'
import {
  buildCategoryHref,
  type ProductCategoryRecord,
  type ProductListingCard,
  type ProductPagination,
} from '@/fixtures/stitch/product-catalog'
import { buildCategoryListingJsonLd } from '@/lib/seo/category-listing-jsonld'

type CategoryListingPageProps = {
  category: ProductCategoryRecord
  pagination: ProductPagination
}

type PaginationToken = number | 'ellipsis-left' | 'ellipsis-right'

function badgeClasses(tone: ProductListingCard['badgeTone']) {
  if (tone === 'primary') {
    return 'bg-[#4e616e] text-[#f2f8ff]'
  }

  if (tone === 'surface') {
    return 'bg-[#dee4da] text-[#4e616e]'
  }

  return 'bg-[#77584e] text-[#fff7f5]'
}

function buildListingPageHref(
  categorySlug: string,
  pageNumber: number,
  listing: ProductCategoryRecord['listing'],
) {
  const params = new URLSearchParams()

  if (pageNumber > 1) {
    params.set('page', String(pageNumber))
  }
  if (listing.currentOrderBy && listing.currentOrderBy !== 'name') {
    params.set('order_by', listing.currentOrderBy)
  }
  if (listing.activeSubcategorySlug) {
    params.set('subcategory_slug', listing.activeSubcategorySlug)
  }

  const query = params.toString()
  return query ? `${buildCategoryHref(categorySlug)}?${query}` : buildCategoryHref(categorySlug)
}

function buildPaginationTokens(currentPage: number, totalPages: number): PaginationToken[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, 'ellipsis-right', totalPages]
  }

  if (currentPage >= totalPages - 2) {
    return [1, 'ellipsis-left', totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
  }

  return [1, 'ellipsis-left', currentPage - 1, currentPage, currentPage + 1, 'ellipsis-right', totalPages]
}

export function CategoryListingPage({ category, pagination }: CategoryListingPageProps) {
  const listing = category.listing
  const pageTokens = buildPaginationTokens(pagination.currentPage, pagination.totalPages)
  const categoryListingJsonLd = buildCategoryListingJsonLd({ category, pagination })
  const hasComparison = Boolean(
    listing.comparisonTitle &&
      listing.comparisonColumns?.length &&
      listing.comparisonRows?.length,
  )

  return (
    <>
      <JsonLdScript data={categoryListingJsonLd} />
      <SiteHeader
        activeSection="products"
        navTone="serif"
        searchMode="pill"
        searchPlaceholder="Search PRO-TAYLOR"
      />
      <TrustRibbon highlight="oem" topClassName="top-16" neutralDesktop />

      <main className="bg-[#fafaf5] pb-24 pt-36">
        <header className="mx-auto max-w-[1440px] px-8 pt-12 xl:px-12">
          <div className="mb-16 grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.2em] text-[#77584e]">
                {listing.eyebrow}
              </span>
              <h1 className="font-headline text-5xl font-extrabold italic leading-[1.02] tracking-tight text-[#2e342d] md:text-6xl">
                {listing.title}
              </h1>
              <p className="mt-6 max-w-xl font-body text-lg leading-relaxed font-light text-[#5b6159]">
                {listing.description}
              </p>
            </div>

            <div className="flex flex-col items-start gap-6 lg:col-span-5 lg:items-end">
              <div className="flex items-center gap-3 rounded-lg bg-[#ffffff] px-4 py-2 shadow-sm">
                <MaterialIcon
                  icon="verified"
                  className="text-[#4e616e]"
                  size={22}
                  lineHeight={22}
                  style={{ fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }}
                />
                <span className="font-body text-sm font-medium uppercase tracking-[0.08em] text-[#4e616e]">
                  {listing.badgeLabel}
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={listing.primaryCtaHref}
                  className="inline-flex min-h-14 items-center justify-center rounded-sm bg-[#4e616e] px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#f2f8ff] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {listing.primaryCtaLabel}
                </Link>
                <Link
                  href={listing.secondaryCtaHref}
                  className="inline-flex min-h-14 items-center justify-center rounded-sm border border-[#767c74] px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#4e616e] transition-colors duration-200 hover:bg-[#f3f4ee]"
                >
                  {listing.secondaryCtaLabel}
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section className="sticky top-[104px] z-30 mb-8 border-y border-[#ecefe7] bg-[#fafaf5]/95 backdrop-blur-md">
          <div className="mx-auto max-w-[1440px] px-8 xl:px-12">
            {listing.machineTypeTabs?.length ? (
              <div className="flex flex-col gap-3 border-b border-[#ecefe7] py-4 lg:flex-row lg:items-center lg:gap-4">
                <div className="w-[123px] shrink-0">
                  <span className="shrink-0 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#77584e]">
                    {listing.machineTypeLabel ?? 'MACHINE TYPE'}
                  </span>
                </div>
                <div className="hidden h-8 w-px bg-[#dee4da] lg:block" />
                <div className="flex flex-wrap gap-2.5 pl-2">
                  {listing.machineTypeTabs.map((tab) => (
                    <Link
                      key={tab.label}
                      href={tab.href}
                      aria-current={tab.isActive ? 'page' : undefined}
                      className={`inline-flex min-h-10 items-center justify-center rounded-sm border px-5 py-2.5 font-body text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
                        tab.isActive
                          ? 'border-[#b9c3ba] bg-[#eef1ea] text-[#36434d]'
                          : 'border-[#d6dbd1] bg-[#fffdf8] text-[#4e616e] hover:border-[#b9c3ba] hover:bg-[#f3f4ee]'
                      }`}
                    >
                      {tab.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="flex flex-wrap items-center justify-between gap-6 py-4">
              <div className="flex items-center gap-6">
                <div className="w-[115px] shrink-0">
                  <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#77584e]">
                    {listing.controlLabel}
                  </span>
                </div>

                <div className="hidden h-8 w-px bg-[#dee4da] lg:block" />

                <div className="flex gap-4 overflow-x-auto py-2 hide-scrollbar">
                  {listing.filters.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      disabled
                      className="flex cursor-default items-center gap-2 whitespace-nowrap font-body text-xs font-bold uppercase tracking-[0.02em] text-[#5b6159] opacity-90"
                    >
                      <span>{filter}</span>
                      <MaterialIcon icon="expand_more" className="text-[#5b6159]" size={16} lineHeight={16} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-body text-xs font-medium text-[#767c74]">{listing.sortLabel}</span>
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-default items-center gap-2 border-none bg-transparent font-body text-xs font-bold uppercase tracking-[0.14em] text-[#4e616e] opacity-90"
                >
                  <span>{listing.sortOptions[0]}</span>
                  <MaterialIcon icon="expand_more" className="text-[#4e616e]" size={16} lineHeight={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 pb-24 xl:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {pagination.products.map((product) => (
              <article
                key={product.slug}
                className="group flex h-full flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 hover:shadow-[0px_24px_48px_-12px_rgba(46,52,45,0.08)]"
              >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge ? (
                    <div className="absolute -left-1 -top-1">
                      <span className={`px-3 py-1 font-label text-[10px] font-bold uppercase tracking-[0.2em] ${badgeClasses(product.badgeTone)}`}>
                        {product.badge}
                      </span>
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 min-h-14">
                    <h2 className="h-full overflow-hidden font-headline text-2xl font-bold text-[#2e342d]">
                      {product.name}
                    </h2>
                    {/*{product.seriesLabel ? (*/}
                    {/*  <span className="font-mono text-xs font-bold text-[#4e616e]">*/}
                    {/*    {product.seriesLabel}*/}
                    {/*  </span>*/}
                    {/*) : null}*/}
                  </div>

                  <p className="mb-3 h-17 overflow-hidden font-body text-sm leading-relaxed text-[#5b6159]">
                    {product.description}
                  </p>

                  <div className="mt-auto flex min-h-5 flex-col justify-end">
                    <div className="mb-2 min-h-[3.5rem]">
                      {product.metrics ? (
                        <div className="grid grid-cols-3 gap-4">
                          {product.metrics.map((metric, index) => (
                            <div
                              key={metric.label}
                              className={`${index < (product.metrics?.length ?? 0) - 1 ? 'border-r border-[#ecefe7]' : ''} px-0 pr-4 first:pl-0`}
                            >
                              <span className="mb-1 block font-label text-[10px] font-bold uppercase tracking-[0.18em] text-[#77584e]">
                                {metric.label}
                              </span>
                              <span className="font-body text-sm font-medium text-[#2e342d]">
                                {metric.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <Link
                      href={product.href}
                      className="inline-flex h-12 w-full items-center justify-center rounded-sm bg-[#dee4da] font-body text-[11px] font-bold uppercase tracking-[0.15em] text-[#4e616e] transition-all duration-200 hover:bg-[#4e616e] hover:text-[#f2f8ff]"
                    >
                      View Technical Specs
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6 border-t border-[#ecefe7] pt-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="font-body text-sm text-[#5b6159] sm:whitespace-nowrap">
              Showing <span className="font-semibold text-[#2e342d]">{pagination.startItem}-{pagination.endItem}</span> of{' '}
              <span className="font-semibold text-[#2e342d]">{pagination.totalProducts}</span> models
              <span className="mx-2 text-[#a5aaa2]">·</span>
              <span className="font-medium uppercase tracking-[0.14em] text-[#767c74]">
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Link
                href={buildListingPageHref(category.slug, pagination.currentPage - 1, listing)}
                aria-disabled={pagination.currentPage === 1}
                className={`inline-flex h-11 items-center justify-center rounded border px-5 font-body text-xs font-bold uppercase tracking-[0.14em] ${
                  pagination.currentPage === 1
                    ? 'pointer-events-none border-[#ecefe7] text-[#a5aaa2]'
                    : 'border-[#d6dbd1] text-[#4e616e] transition-colors hover:border-[#4e616e]'
                }`}
              >
                Prev
              </Link>

              <div className="flex items-center gap-2">
                {pageTokens.map((token) =>
                  typeof token === 'number' ? (
                    <Link
                      key={token}
                      href={buildListingPageHref(category.slug, token, listing)}
                      aria-current={token === pagination.currentPage ? 'page' : undefined}
                      className={`inline-flex h-11 min-w-11 items-center justify-center rounded border px-4 font-body text-sm font-semibold ${
                        token === pagination.currentPage
                          ? 'border-[#4e616e] bg-[#4e616e] text-[#f2f8ff]'
                          : 'border-[#d6dbd1] text-[#4e616e] transition-colors hover:border-[#4e616e]'
                      }`}
                    >
                      {token}
                    </Link>
                  ) : (
                    <span
                      key={token}
                      className="inline-flex h-11 min-w-6 items-center justify-center font-body text-sm font-semibold text-[#a5aaa2]"
                    >
                      ...
                    </span>
                  ),
                )}
              </div>

              <Link
                href={buildListingPageHref(category.slug, pagination.currentPage + 1, listing)}
                aria-disabled={pagination.currentPage === pagination.totalPages}
                className={`inline-flex h-11 items-center justify-center rounded border px-5 font-body text-xs font-bold uppercase tracking-[0.14em] ${
                  pagination.currentPage === pagination.totalPages
                    ? 'pointer-events-none border-[#ecefe7] text-[#a5aaa2]'
                    : 'border-[#d6dbd1] text-[#4e616e] transition-colors hover:border-[#4e616e]'
                }`}
              >
                Next
              </Link>
            </div>
          </div>
        </section>

        {hasComparison ? (
          <section className="mx-auto mb-24 max-w-[1440px] px-8 xl:px-12">
            <div className="rounded-xl bg-[#f3f4ee] p-10 xl:p-12">
              <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="font-headline text-3xl font-bold text-[#2e342d]">
                    {listing.comparisonTitle}
                  </h2>
                  {listing.comparisonCopy ? (
                    <p className="mt-2 font-body text-sm tracking-[0.02em] text-[#5b6159]">
                      {listing.comparisonCopy}
                    </p>
                  ) : null}
                </div>

                {listing.comparisonCtaLabel && listing.comparisonCtaHref ? (
                  <Link
                    href={listing.comparisonCtaHref}
                    className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#4e616e]"
                  >
                    <span>{listing.comparisonCtaLabel}</span>
                    <MaterialIcon
                      icon="arrow_forward"
                      className="text-[#4e616e]"
                      size={20}
                      lineHeight={20}
                    />
                  </Link>
                ) : null}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b-2 border-[#77584e]/20">
                      {listing.comparisonColumns?.map((column) => (
                        <th
                          key={column}
                          className="py-4 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#77584e]"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ecefe7]">
                    {listing.comparisonRows?.map((row) => (
                      <tr key={row.feature} className="transition-colors hover:bg-[#ecefe7]">
                        <td className="py-5 font-body text-sm font-semibold text-[#2e342d]">
                          {row.feature}
                        </td>
                        {row.values.map((value) => (
                          <td key={`${row.feature}-${value}`} className="py-5 font-body text-sm text-[#5b6159]">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto mb-24 max-w-[1440px] px-8 xl:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="mb-8 font-headline text-4xl font-bold italic text-[#2e342d]">
                {listing.operationalTitle}
              </h2>
              <div className="space-y-8">
                {listing.operationalSegments.map((segment) => (
                  <div key={segment.title} className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-[#77584e]/10">
                      <MaterialIcon
                        icon={segment.icon ?? 'storefront'}
                        className="text-[#77584e]"
                        size={26}
                        lineHeight={26}
                      />
                    </div>
                    <div>
                      <h3 className="mb-2 font-body text-sm font-bold uppercase tracking-[0.18em] text-[#2e342d]">
                        {segment.title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed text-[#5b6159]">
                        {segment.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#ecefe7] p-12 lg:col-span-6 lg:border-l-4 lg:border-[#77584e]">
              <h3 className="mb-6 font-label text-xs font-bold uppercase tracking-[0.3em] text-[#77584e]">
                {listing.buyingFactorsTitle}
              </h3>
              <ul className="space-y-6">
                {listing.buyingFactors.map((factor) => (
                  <li key={factor.title} className="flex items-start gap-4">
                    <MaterialIcon
                      icon={factor.icon ?? 'bolt'}
                      className="mt-0.5 text-[#4e616e]"
                      size={24}
                      lineHeight={24}
                    />
                    <div className="text-sm">
                      <strong className="mb-1 block font-body text-sm text-[#2e342d]">
                        {factor.title}
                      </strong>
                      <span className="font-body text-sm leading-relaxed text-[#5b6159]">
                        {factor.copy}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-24 max-w-[1440px] px-8 xl:px-12">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-8 font-headline text-3xl font-bold text-[#2e342d]">
                {listing.insightsTitle}
              </h2>
              <div className="space-y-4">
                {listing.insightFaqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group cursor-pointer rounded bg-[#f3f4ee] p-4"
                  >
                    <summary className="flex list-none items-center justify-between font-body text-xs font-bold uppercase tracking-[0.18em] text-[#2e342d]">
                      <span>{faq.question}</span>
                      <MaterialIcon
                        icon="expand_more"
                        className="transition-transform duration-200 group-open:rotate-180"
                        size={20}
                        lineHeight={20}
                      />
                    </summary>
                    <p className="mt-4 font-body text-sm leading-relaxed text-[#5b6159]">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {listing.resourceCards.map((card) => (
                <article
                  key={card.title}
                  className="border border-[#ecefe7] bg-white p-6 transition-colors duration-200 hover:border-[#77584e]/30"
                >
                  <MaterialIcon
                    icon={card.icon ?? 'description'}
                    className="mb-4 text-[#77584e]"
                    size={26}
                    lineHeight={26}
                  />
                  <h3 className="mb-2 font-body text-xs font-bold uppercase tracking-[0.18em] text-[#2e342d]">
                    {card.title}
                  </h3>
                  <p className="mb-4 font-body text-[11px] leading-[1.65] text-[#5b6159]">
                    {card.copy}
                  </p>
                  <Link
                    href={card.ctaHref}
                    className="inline-flex items-center gap-1 font-body text-[10px] font-black uppercase tracking-[0.18em] text-[#4e616e]"
                  >
                    <span>{card.ctaLabel}</span>
                    {card.ctaIcon ? (
                      <MaterialIcon icon={card.ctaIcon} className="text-[#4e616e]" size={16} lineHeight={16} />
                    ) : null}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 xl:px-12">
          <div className="rounded-xl bg-[#4e616e] px-12 py-16 text-center text-[#f2f8ff]">
            <h2 className="font-headline text-4xl text-[#f2f8ff]">
              {listing.ctaTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-[#f2f8ffcc]">
              {listing.ctaCopy}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">
              <Link
                href={listing.ctaPrimaryHref}
                className="inline-flex min-h-14 items-center justify-center rounded-sm bg-[#f2f8ff] px-10 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#4e616e]"
              >
                {listing.ctaPrimaryLabel}
              </Link>
              <Link
                href={listing.ctaSecondaryHref}
                className="inline-flex min-h-14 items-center justify-center rounded-sm border border-[#f2f8ff]/30 px-10 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#f2f8ff]"
              >
                {listing.ctaSecondaryLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
