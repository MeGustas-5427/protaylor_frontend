/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { MaterialIcon } from '@/components/ui/material-icon'
import type { ProductCategoryRecord } from '@/fixtures/stitch/product-catalog'

type CategoryListingPageProps = {
  category: ProductCategoryRecord
}

function cardCtaLabel(href: string) {
  return href.startsWith('/products/') ? 'View Details' : 'Request Quote'
}

export function CategoryListingPage({ category }: CategoryListingPageProps) {
  const listing = category.listing

  return (
    <>
      <SiteHeader
        activeSection="products"
        navTone="serif"
        searchMode="pill"
        searchPlaceholder={`Search ${category.name}`}
      />
      <TrustRibbon highlight="oem" topClassName="top-16" />

      <main className="bg-[#fafaf5] pb-24 pt-36">
        <section className="mx-auto max-w-[1440px] px-8 py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_390px]">
            <div className="max-w-4xl">
              <p className="font-label text-xs font-bold uppercase tracking-[0.2em] text-[#77584e]">
                {listing.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl font-headline text-5xl font-bold italic leading-[1.02] tracking-tight text-[#2e342d] md:text-6xl">
                {listing.title}
              </h1>
              <p className="mt-8 max-w-3xl font-sans text-[18px] leading-[29px] text-[#5b6159]">
                {listing.description}
              </p>
              <p className="mt-6 max-w-2xl font-sans text-sm leading-6 text-[#767c74]">
                {listing.trustLine}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={listing.primaryCtaHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#4e616e] px-6 py-3 font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#f2f8ff]"
                >
                  {listing.primaryCtaLabel}
                </Link>
                <Link
                  href={listing.secondaryCtaHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#d9dbd0] px-6 py-3 font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#4e616e]"
                >
                  {listing.secondaryCtaLabel}
                </Link>
              </div>
            </div>

            <aside className="rounded-[14px] bg-[#f3f4ee] p-8 shadow-[0_18px_48px_rgba(46,52,45,0.06)]">
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  className="h-[220px] w-full object-cover"
                />
              </div>
              <div className="mt-6 rounded-[10px] border border-[#e3e4d9] bg-[#fafaf5] p-5">
                <p className="font-headline text-xl italic text-[#2e342d]">
                  {listing.countSummary}
                </p>
                <p className="mt-2 font-sans text-sm leading-6 text-[#767c74]">
                  {listing.controlSummary}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8">
          <div className="rounded-[14px] border border-[#e3e4d9] bg-[#f8f8f2] p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-headline text-xl italic text-[#2e342d]">
                  {listing.countSummary}
                </span>
                <span className="font-sans text-sm text-[#767c74]">
                  {listing.controlSummary}
                </span>
              </div>

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                <div className="flex flex-wrap gap-2">
                  {listing.filters.map((filter, index) => (
                    <button
                      key={filter}
                      type="button"
                      className={`rounded-full border px-4 py-2 font-sans text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                        index === 0
                          ? 'border-[#4e616e] bg-[#4e616e] text-[#f2f8ff]'
                          : 'border-[#d9dbd0] text-[#4e616e]'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex min-h-12 min-w-[260px] items-center rounded-md border border-[#d9dbd0] bg-white px-4">
                    <MaterialIcon icon="search" className="text-[#4e616e]" size={18} lineHeight={18} />
                    <span className="ml-3 font-sans text-sm text-[#8f968e]">
                      Search model series
                    </span>
                  </div>
                  <div className="flex min-h-12 items-center gap-3 rounded-md border border-[#d9dbd0] bg-white px-4">
                    <span className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-[#767c74]">
                      Sort By
                    </span>
                    <select className="border-none bg-transparent font-sans text-sm text-[#2e342d] outline-none">
                      {listing.sortOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-14">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {listing.products.map((product, index) => (
              <article
                key={product.name}
                className={`overflow-hidden rounded-[14px] border border-[#e3e4d9] ${
                  product.tone === 'technical' ? 'bg-[#f3f4ee]' : 'bg-white'
                } shadow-[0_18px_48px_rgba(46,52,45,0.04)]`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#eef1e8]">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-headline text-[28px] font-bold leading-8 text-[#2e342d]">
                      {product.name}
                    </h2>
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#4e616e]">
                      {index < 3 ? `Series ${index + 1}` : 'Tech'}
                    </span>
                  </div>
                  <p className="mt-4 font-sans text-base leading-[26px] text-[#5b6159]">
                    {product.subtitle}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <li
                        key={spec}
                        className="rounded-full bg-[#f3f4ee] px-3 py-1.5 font-sans text-xs font-medium text-[#4e616e]"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 font-sans text-sm font-medium text-[#77584e]">
                    {product.bestFor}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-[#ecefe7] pt-5">
                    <Link
                      href={product.href}
                      className="font-sans text-base font-bold text-[#4e616e]"
                    >
                      {cardCtaLabel(product.href)}
                    </Link>
                    <Link
                      href={product.href}
                      className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#d9dbd0] bg-[#fafaf5]"
                      aria-label={cardCtaLabel(product.href)}
                    >
                      <MaterialIcon icon="arrow_forward" className="text-[#2e342d]" size={14} lineHeight={20} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-12">
          <div className="rounded-[18px] border border-[#e3e4d9] bg-[#fafaf5] p-10">
            <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="font-headline text-4xl font-bold text-[#2e342d]">
                  {listing.comparisonTitle}
                </h2>
                <p className="mt-3 font-sans text-sm tracking-[0.02em] text-[#767c74]">
                  Select the right series tier before moving into product detail pages.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#d9dbd0]">
                    <th className="py-4 text-left font-label text-[11px] font-bold uppercase tracking-[0.18em] text-[#77584e]">
                      Model Series
                    </th>
                    <th className="py-4 text-left font-label text-[11px] font-bold uppercase tracking-[0.18em] text-[#77584e]">
                      Output
                    </th>
                    <th className="py-4 text-left font-label text-[11px] font-bold uppercase tracking-[0.18em] text-[#77584e]">
                      Cooling
                    </th>
                    <th className="py-4 text-left font-label text-[11px] font-bold uppercase tracking-[0.18em] text-[#77584e]">
                      Footprint
                    </th>
                    <th className="py-4 text-left font-label text-[11px] font-bold uppercase tracking-[0.18em] text-[#77584e]">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listing.comparisonRows.map((row, index) => (
                    <tr
                      key={row.series}
                      className={`border-b border-[#ecefe7] ${index % 2 === 1 ? 'bg-[#f7f8f2]' : ''}`}
                    >
                      <td className="py-5 pr-4 font-headline text-[26px] font-bold text-[#4e616e]">
                        {row.series}
                      </td>
                      <td className="py-5 pr-4 font-sans text-base text-[#2e342d]">{row.output}</td>
                      <td className="py-5 pr-4 font-sans text-base text-[#2e342d]">{row.cooling}</td>
                      <td className="py-5 pr-4 font-sans text-base text-[#2e342d]">{row.footprint}</td>
                      <td className="py-5 font-sans text-base text-[#5b6159]">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-12">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <article className="rounded-[18px] bg-[#4e616e] p-10 text-[#f2f8ff]">
              <p className="font-label text-xs font-bold uppercase tracking-[0.2em] text-[#d7e0e7]">
                {listing.supportEyebrow}
              </p>
              <h2 className="mt-4 max-w-2xl font-headline text-4xl font-bold italic leading-tight">
                {listing.supportTitle}
              </h2>
              <p className="mt-6 max-w-2xl font-sans text-lg leading-[29px] text-[#f2f8ffcc]">
                {listing.supportCopy}
              </p>
              <ul className="mt-8 space-y-3">
                {listing.supportBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 font-sans text-sm leading-6 text-[#f2f8ff]">
                    <MaterialIcon icon="check_circle" className="mt-0.5 text-[#f2f8ff]" size={16} lineHeight={16} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[18px] bg-[#eef1e8] p-10">
              <h3 className="font-headline text-3xl font-bold italic text-[#2e342d]">
                {listing.insightsTitle}
              </h3>
              <div className="mt-8 space-y-6">
                {listing.insightCards.map((card) => (
                  <div key={card.title} className="border-t border-[#d9dbd0] pt-5 first:border-t-0 first:pt-0">
                    <h4 className="font-sans text-base font-bold uppercase tracking-[0.08em] text-[#77584e]">
                      {card.title}
                    </h4>
                    <p className="mt-3 font-sans text-sm leading-6 text-[#5b6159]">
                      {card.copy}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-3">
                <Link
                  href={listing.supportPrimaryHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#fafaf5] px-5 py-3 font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#4e616e]"
                >
                  {listing.supportPrimaryLabel}
                </Link>
                <Link
                  href={listing.supportSecondaryHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#cfd5cb] px-5 py-3 font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#4e616e]"
                >
                  {listing.supportSecondaryLabel}
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-12">
          <div className="rounded-[22px] bg-[#eef1e8] p-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <h2 className="font-headline text-5xl font-bold italic leading-tight text-[#2e342d]">
                {listing.ctaTitle}
              </h2>
              <p className="mt-6 font-sans text-lg leading-[29px] text-[#5b6159]">
                {listing.ctaCopy}
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-[280px]">
              <Link
                href={listing.ctaPrimaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#4e616e] px-6 py-3 font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#f2f8ff]"
              >
                {listing.ctaPrimaryLabel}
              </Link>
              <Link
                href={listing.ctaSecondaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#cfd5cb] px-6 py-3 font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#4e616e]"
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
