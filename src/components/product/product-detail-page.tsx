/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { ProductHeroGallery } from '@/components/product/product-hero-gallery'
import { JsonLdScript } from '@/components/seo/json-ld-script'
import { MaterialIcon } from '@/components/ui/material-icon'
import { PRODUCT_DETAIL_STATIC_CONTENT } from '@/components/product/product-detail-page.config'
import type { ProductDetailViewModel } from '@/lib/catalog/product-detail'
import { buildProductFaqJsonLd } from '@/lib/seo/product-faq-jsonld'

type ProductDetailPageProps = {
  product: ProductDetailViewModel
}

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  const faqJsonLd = buildProductFaqJsonLd(product.faqItems)
  const scenarioCards = product.scenarios.map((scenario, index) => ({
    ...scenario,
    // 后端现在已经返回 use case icon；这里只保留静态兜底，避免旧数据未补 icon 时页面塌掉。
    icon:
      scenario.icon ||
      PRODUCT_DETAIL_STATIC_CONTENT.scenarios.icons[index] ||
      PRODUCT_DETAIL_STATIC_CONTENT.scenarios.icons[0],
  }))
  const specificationSplitIndex = Math.ceil(product.specifications.rows.length / 2)
  const specificationColumns = [
    product.specifications.rows.slice(0, specificationSplitIndex),
    product.specifications.rows.slice(specificationSplitIndex),
  ].filter((column) => column.length > 0)

  return (
    <>
      {faqJsonLd ? <JsonLdScript data={faqJsonLd} /> : null}
      <SiteHeader />
      <TrustRibbon />

      <main className="bg-[#fafaf5] pb-24">
        <section className="mx-auto max-w-[1376px] px-8 pt-[128px] xl:px-0">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <ProductHeroGallery
              primaryImage={product.hero.primaryImage}
              galleryImages={product.hero.galleryImages}
            />

            <div className="pt-[2px] lg:col-span-5 xl:pl-1">
              <div className="space-y-8">
                <div>
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#77584e]">
                    {product.hero.eyebrow}
                  </p>
                  <h1 className="mt-3 font-headline text-[48px] font-bold leading-[48px] tracking-[-0.025em] text-[#2e342d]">
                    {product.hero.title}
                  </h1>
                  <p className="mt-10 font-sans text-[18px] leading-[29.25px] text-[#5b6159]">
                    {product.hero.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-14 gap-y-10 border-y border-[#e3e4d9] py-10">
                  {product.hero.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#77584e]">
                        {metric.label}
                      </p>
                      <p className="mt-2 font-headline text-[24px] font-bold italic leading-7 text-[#4e616e]">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-[18px]">
                    <Link
                      href="/contact"
                      className="flex h-[64px] flex-1 items-center justify-center rounded-[8px] bg-[#5c7282] px-8 font-sans text-[14px] font-bold uppercase tracking-[0.14em] text-[#f2f8ff]"
                    >
                      {PRODUCT_DETAIL_STATIC_CONTENT.hero.primaryCtaLabel}
                    </Link>
                    <button
                      type="button"
                      aria-label="download"
                      className="flex h-[64px] w-[58px] items-center justify-center rounded-[8px] border border-[#d9dbd0] bg-[#fafaf5]"
                    >
                      <MaterialIcon
                        icon="download"
                        className="text-[#4e616e]"
                        size={24}
                        lineHeight={24}
                      />
                    </button>
                  </div>

                  <p className="mt-8 text-center font-sans text-[12px] italic leading-4 text-[#767c74]">
                    {product.hero.leadTimeNote ||
                      PRODUCT_DETAIL_STATIC_CONTENT.hero.averageLeadTimeFallback}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-[84px] max-w-[1376px] px-8 py-20 xl:px-0">
          <div className="mb-16 text-center">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#77584e]">
              {PRODUCT_DETAIL_STATIC_CONTENT.scenarios.eyebrow}
            </p>
            <h2 className="mt-2 font-headline text-4xl font-bold italic leading-[40px] text-[#2e342d]">
              {PRODUCT_DETAIL_STATIC_CONTENT.scenarios.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {scenarioCards.map((scenario) => (
              <article key={scenario.title} className="rounded-[8px] bg-[#f3f4ee] p-8">
                <MaterialIcon
                  icon={scenario.icon}
                  className="mb-6 text-[#77584e]"
                  size={36}
                  lineHeight={40}
                />
                <h3 className="mb-4 font-headline text-2xl font-bold leading-8 text-[#2e342d]">
                  {scenario.title}
                </h3>
                <p className="font-sans text-[16px] leading-[26px] text-[#5b6159]">
                  {scenario.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-32 mt-[36px] max-w-[1376px] px-8 xl:px-0">
          <div className="mb-12 flex items-end justify-between border-b-2 border-[#4e616e1a] pb-4">
            <h2 className="font-headline text-4xl font-bold italic text-[#2e342d]">
              {PRODUCT_DETAIL_STATIC_CONTENT.specs.title}
            </h2>
            <div className="font-label text-xs font-bold uppercase tracking-[0.1em] text-[#4e616e]">
              Model ID: {product.specifications.modelCode || 'N/A'}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-20 gap-y-2 lg:grid-cols-2">
            {specificationColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="divide-y divide-[#aeb4aa1a]">
                {column.map((spec, rowIndex) => (
                  <div
                    key={`${spec.label}-${rowIndex}`}
                    className={`flex items-center justify-between py-4 ${rowIndex % 2 === 1 ? 'bg-[#f3f4ee] px-2' : ''}`}
                  >
                    <span className="font-label text-xs font-bold uppercase tracking-[0.1em] text-[#77584e]">
                      {spec.label}
                    </span>
                    <span className="font-sans text-base leading-6 text-[#2e342d]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-[1376px] px-8 xl:px-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
            <article className="rounded-xl bg-[#4e616e] p-12 text-[#f2f8ff] lg:col-span-2">
              <div className="flex flex-col gap-12">
              <div>
                <h2 className="mb-6 font-headline text-4xl font-bold italic">
                  {PRODUCT_DETAIL_STATIC_CONTENT.oem.title}
                </h2>
                <p className="max-w-xl font-sans text-lg leading-[29px] text-[#f2f8ffcc]">
                  {PRODUCT_DETAIL_STATIC_CONTENT.oem.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 border-t border-[#ffffff1a] pt-8">
                {PRODUCT_DETAIL_STATIC_CONTENT.oem.bullets.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-full bg-[#ffffff1a] px-4 py-2 font-sans text-sm text-[#f2f8ff]"
                  >
                    <MaterialIcon
                      icon={item.icon}
                      className="text-[#f2f8ff]"
                      size={14}
                      lineHeight={20}
                    />
                    {item.label}
                  </div>
                ))}
              </div>
              </div>
            </article>

            <article className="flex flex-col justify-center rounded-xl bg-[#dee4da] p-6 text-center lg:self-start">
              <MaterialIcon icon="public" className="mb-4 text-[#4e616e]" size={48} lineHeight={48} />
              <h3 className="font-headline text-2xl font-bold text-[#2e342d]">
                {PRODUCT_DETAIL_STATIC_CONTENT.exportSupport.title}
              </h3>
              <p className="mb-6 mt-4 font-sans text-sm italic leading-5 text-[#5b6159]">
                {PRODUCT_DETAIL_STATIC_CONTENT.exportSupport.description}
              </p>
              <ul className="space-y-3 border-t border-[#aeb4aa4d] pt-6 text-left font-sans text-sm leading-5 text-[#2e342d]">
                {PRODUCT_DETAIL_STATIC_CONTENT.exportSupport.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <MaterialIcon
                      icon="check_circle"
                      className="text-[#77584e]"
                      size={16}
                      lineHeight={16}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-[1376px] px-8 xl:px-0">
          <h2 className="mb-10 font-headline text-3xl font-bold italic leading-9 text-[#2e342d]">
            {PRODUCT_DETAIL_STATIC_CONTENT.related.title}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {product.relatedCards.map((card) => (
              <Link key={`${card.href}-${card.title}`} href={card.href} className="group cursor-pointer">
                <article>
                  <div className="mb-6 aspect-video overflow-hidden rounded-lg bg-[#ecefe7]">
                    {card.imageUrl ? (
                      <img
                        src={card.imageUrl}
                        alt={card.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#eef1e8] px-6 text-center">
                        <span className="font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-[#4e616e]">
                          {card.title}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="font-label text-[10px] font-bold uppercase tracking-[0.1em] text-[#77584e]">
                    {card.eyebrow}
                  </span>
                  <h3 className="mt-2 font-headline text-xl font-bold text-[#2e342d]">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-5 text-[#5b6159]">
                    {card.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-4xl px-8 xl:px-0">
          <h2 className="mb-10 text-center font-headline text-3xl font-bold italic leading-9 text-[#2e342d]">
            {PRODUCT_DETAIL_STATIC_CONTENT.faq.title}
          </h2>
          <div className="space-y-4">
            {product.faqItems.map((faq, index) => (
              <details
                key={faq.question}
                className="group cursor-pointer rounded-lg bg-[#f3f4ee] p-6"
                open={index === 0}
              >
                <summary className="flex list-none items-center justify-between font-sans text-lg font-bold leading-7 text-[#2e342d]">
                  {faq.question}
                  <MaterialIcon
                    icon="expand_more"
                    className="text-[#2e342d]"
                    size={24}
                    lineHeight={24}
                  />
                </summary>
                <p className="mt-4 font-sans leading-[26px] text-[#5b6159]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-[1376px] overflow-hidden rounded-2xl bg-[#ecefe7] p-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-6 font-headline text-4xl font-bold italic leading-[40px] text-[#2e342d]">
              {PRODUCT_DETAIL_STATIC_CONTENT.finalCta.title}
            </h2>
            <p className="mb-8 font-sans text-lg leading-7 text-[#5b6159]">
              {PRODUCT_DETAIL_STATIC_CONTENT.finalCta.description}
            </p>
            <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="email"
                placeholder={PRODUCT_DETAIL_STATIC_CONTENT.finalCta.emailPlaceholder}
                className="rounded-md border border-[#aeb4aa] bg-white px-4 py-3 font-sans text-base text-[#2e342d] placeholder:text-[#8f968e] focus:border-[#4e616e] focus:ring-[#4e616e]"
              />
              <button
                type="button"
                className="rounded-md bg-[#4e616e] px-8 py-3 font-sans text-xs font-bold uppercase tracking-[0.1em] text-[#f2f8ff]"
              >
                {PRODUCT_DETAIL_STATIC_CONTENT.finalCta.buttonLabel}
              </button>
            </form>
          </div>
          <MaterialIcon
            icon="precision_manufacturing"
            className="pointer-events-none absolute -bottom-10 -right-10 select-none text-[#4e616e0d]"
            size={300}
            lineHeight={300}
          />
        </section>
      </main>

      <Link
        href={PRODUCT_DETAIL_STATIC_CONTENT.floatingCta.href}
        className="group fixed bottom-8 right-8 z-40 h-[70px] w-[70px] overflow-hidden rounded-[18px] bg-[#77584e] shadow-[0_14px_36px_rgba(73,44,34,0.24)] transition-[width,box-shadow] duration-300 hover:w-[318px] hover:shadow-[0_18px_42px_rgba(73,44,34,0.28)]"
      >
        <span className="flex h-full items-center">
          <span className="flex h-[70px] w-[70px] shrink-0 items-center justify-center">
            <MaterialIcon icon="chat_bubble" className="text-white" size={24} lineHeight={24} />
          </span>
          <span className="whitespace-nowrap pr-8 font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-white opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            {PRODUCT_DETAIL_STATIC_CONTENT.floatingCta.label}
          </span>
        </span>
      </Link>

      <SiteFooter />
    </>
  )
}

export default ProductDetailPage
