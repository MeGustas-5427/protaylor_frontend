/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { resourcesFixture } from '@/fixtures/stitch/content'

export function ResourcesIndexPage() {
  return (
    <>
      <SiteHeader
        activeSection="resources"
        navTone="serif"
        searchMode="pill"
        searchPlaceholder="Search PRO-TAYLOR"
      />
      <TrustRibbon highlight="oem" topClassName="top-16" />
      <main className="mx-auto max-w-[1440px] px-8 pb-20 pt-32">
        <section className="mb-24">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="group relative w-full overflow-hidden rounded-xl bg-surface-container-low lg:w-2/3">
              <img
                src={resourcesFixture.featured.image}
                alt="Precision industrial machinery close-up"
                className="h-[600px] w-full object-cover grayscale-[30%] transition-all duration-700 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="flex w-full flex-col gap-6 lg:w-1/3">
              <span className="font-label text-xs font-bold uppercase tracking-[0.1em] text-secondary">
                Featured / Buying Guide
              </span>
              <h1 className="font-headline text-5xl italic leading-tight tracking-[-0.02em] text-on-background lg:text-6xl">
                {resourcesFixture.featured.title}
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-on-surface-variant">
                {resourcesFixture.featured.copy}
              </p>
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.1em] text-outline">
                <span>{resourcesFixture.featured.publishedAt}</span>
                <span className="h-1 w-1 rounded-full bg-outline-variant" />
                <span>{resourcesFixture.featured.readTime}</span>
              </div>
              <Link href={resourcesFixture.featured.href} className="group inline-flex items-center gap-2 font-bold text-primary">
                <span className="border-b-2 border-primary/20 transition-all group-hover:border-primary">
                  Read Journal Entry
                </span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16 flex flex-col items-end justify-between gap-8 border-b border-outline-variant/20 pb-8 md:flex-row">
          <div className="flex flex-wrap gap-8">
            {resourcesFixture.filters.map((filter, index) => (
              <button
                key={filter}
                className={`pb-2 font-label text-xs font-bold uppercase tracking-[0.1em] transition-colors ${
                  index === 0
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-stone-400 hover:text-primary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-outline">
            <span>{resourcesFixture.resultsLabel}</span>
            <span className="material-symbols-outlined">filter_list</span>
          </div>
        </section>

        <section className="mb-24 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {resourcesFixture.cards.map((card) =>
            card.kind === 'editorial' ? (
              <div
                key={card.title}
                className="flex flex-col justify-center gap-6 rounded-xl bg-surface-container-low p-12"
              >
                <span className="font-label text-[10px] font-bold italic uppercase tracking-[0.1em] text-secondary">
                  {card.category}
                </span>
                <h2 className="font-headline text-3xl italic leading-snug text-on-background">
                  {card.title}
                </h2>
                <p className="text-sm leading-relaxed text-on-surface-variant">{card.copy}</p>
                <div className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.1em] text-outline-variant">
                  <span>{card.publishedAt}</span>
                  <span className="h-1 w-1 rounded-full bg-outline-variant/40" />
                  <span>{card.readTime}</span>
                </div>
                <Link
                  href={card.href}
                  className="mt-4 w-fit border-b border-primary text-xs font-bold uppercase tracking-[0.2em] text-primary"
                >
                  {card.ctaLabel}
                </Link>
              </div>
            ) : (
              <Link
                key={card.title}
                href={card.href}
                className={`group flex flex-col gap-6 ${card.stagger ? 'lg:mt-12' : ''}`}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-label text-[10px] font-bold uppercase tracking-[0.1em] text-secondary">
                    {card.category}
                  </span>
                  <h2 className="font-headline text-2xl italic leading-snug text-on-background transition-colors group-hover:text-primary">
                    {card.title}
                  </h2>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.1em] text-outline-variant">
                    <span>{card.publishedAt}</span>
                    <span className="h-1 w-1 rounded-full bg-outline-variant/40" />
                    <span>{card.readTime}</span>
                  </div>
                </div>
              </Link>
            ),
          )}
        </section>

        <section className="relative overflow-hidden rounded-2xl bg-primary px-12 py-24 text-on-primary md:px-24">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 bg-white blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 bg-secondary-container blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
            <span className="font-label text-xs uppercase tracking-[0.1em] text-secondary-fixed">
              {resourcesFixture.cta.eyebrow}
            </span>
            <h2 className="font-headline text-4xl italic leading-tight lg:text-5xl">
              {resourcesFixture.cta.title}
            </h2>
            <p className="text-lg leading-relaxed text-primary-fixed/80">
              {resourcesFixture.cta.copy}
            </p>
            <form className="mt-4 flex w-full flex-col gap-4 sm:flex-row">
              <input
                className="flex-grow rounded-md border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-white/50"
                placeholder={resourcesFixture.cta.fieldPlaceholder}
                type="email"
              />
              <button className="rounded-md bg-surface-container-lowest px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-all hover:bg-secondary-container">
                {resourcesFixture.cta.buttonLabel}
              </button>
            </form>
            <p className="text-[10px] uppercase tracking-[0.1em] text-white/40">
              {resourcesFixture.cta.legal}
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
