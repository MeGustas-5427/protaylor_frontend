/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { MaterialIcon } from '@/components/ui/material-icon'
import { solutionsOverviewFixture } from '@/fixtures/stitch/content'

export function SolutionsOverviewPage() {
  const overview = solutionsOverviewFixture

  return (
    <>
      <SiteHeader
        activeSection="solutions"
        navTone="serif"
        searchMode="pill"
        searchPlaceholder="Search PRO-TAYLOR"
      />

      <main className="bg-background pt-24">
        <section className="relative overflow-hidden px-8 py-24 md:px-20">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="block font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                {overview.hero.eyebrow}
              </span>
              <h1 className="mt-6 font-headline text-6xl italic leading-tight tracking-tight text-on-background md:text-7xl">
                {overview.hero.title}
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-on-surface-variant">
                {overview.hero.copy}
              </p>
              <div className="mt-12 flex flex-wrap gap-6">
                <Link
                  href={overview.hero.primaryCtaHref}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-medium text-on-primary transition-opacity hover:opacity-90"
                >
                  {overview.hero.primaryCtaLabel}
                  <MaterialIcon name="arrow_forward" className="text-sm" />
                </Link>
                <Link
                  href={overview.hero.secondaryCtaHref}
                  className="rounded-md border border-outline-variant px-8 py-4 font-medium text-primary transition-colors hover:bg-surface-container"
                >
                  {overview.hero.secondaryCtaLabel}
                </Link>
              </div>
            </div>

            <div className="h-[500px] overflow-hidden rounded-xl shadow-2xl lg:h-[600px]">
              <img
                src={overview.hero.image}
                alt={overview.hero.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-8 py-24 md:px-20">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-headline text-4xl italic text-on-background">
              {overview.entryTitle}
            </h2>
            <p className="mt-4 text-on-surface-variant">{overview.entryCopy}</p>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {overview.entryCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex h-full flex-col rounded-xl bg-surface-container-lowest p-6 shadow-[0_24px_48px_-12px_rgba(46,52,45,0.08)] transition-transform hover:-translate-y-2"
                >
                  <div className="mb-8 aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="font-headline text-2xl italic text-on-background transition-colors group-hover:text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-4 flex-grow text-sm leading-7 text-on-surface-variant">
                    {card.copy}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-label uppercase tracking-[0.18em] text-secondary">
                    Learn More
                    <MaterialIcon name="north_east" className="text-xs" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-24 md:px-20">
          <div className="mx-auto max-w-[1440px] border-t border-outline-variant/30 pt-20">
            <div className="grid gap-12 lg:grid-cols-4">
              <div>
                <h2 className="font-headline text-3xl italic text-on-background">
                  {overview.matrix.title}
                </h2>
                <p className="mt-6 text-sm leading-7 text-on-surface-variant">
                  {overview.matrix.copy}
                </p>
              </div>

              <div className="lg:col-span-3">
                <div className="grid gap-px bg-outline-variant/10 md:grid-cols-2">
                  {overview.matrix.items.map((item) => (
                    <article key={item.title} className="bg-background p-8">
                      <span className="block text-[10px] font-label uppercase tracking-[0.18em] text-secondary">
                        {item.eyebrow}
                      </span>
                      <h3 className="mt-4 font-headline text-xl text-on-background">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-on-surface-variant">{item.copy}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container px-8 py-24 md:px-20">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="mb-16 text-center font-headline text-4xl italic text-on-background">
              Machine Ecosystems
            </h2>
            <div className="grid gap-12 md:grid-cols-4">
              {overview.ecosystems.map((item) => (
                <Link key={item.title} href={item.href} className="group text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-lowest transition-transform group-hover:scale-110">
                    <MaterialIcon name={item.icon} className="text-3xl text-primary" />
                  </div>
                  <h3 className="font-headline text-xl text-on-background">{item.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-on-surface-variant">{item.copy}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest px-8 py-24 md:px-20">
          <div className="mx-auto grid max-w-[1440px] items-center gap-20 lg:grid-cols-2">
            <div className="order-2 rounded-2xl bg-surface-container-low p-12 lg:order-1">
              <h3 className="font-headline text-3xl italic text-on-background">
                Beyond the Badge: OEM Partnership
              </h3>
              <div className="mt-8 space-y-8">
                {overview.oemSupport.points.map((point) => (
                  <div key={point.title} className="flex gap-6">
                    <MaterialIcon name={point.icon} className="text-secondary" />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-tight text-on-background">
                        {point.title}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                        {point.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="block font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                {overview.oemSupport.eyebrow}
              </span>
              <h2 className="mt-6 font-headline text-5xl italic text-on-background">
                {overview.oemSupport.title}
              </h2>
              <p className="mt-8 text-lg leading-8 text-on-surface-variant">
                {overview.oemSupport.copy}
              </p>
              <Link
                href={overview.oemSupport.linkHref}
                className="mt-8 inline-flex items-center gap-2 font-bold text-primary underline decoration-outline-variant underline-offset-8"
              >
                <span>{overview.oemSupport.linkLabel}</span>
                <MaterialIcon name="arrow_right_alt" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface-dim/30 px-8 py-24 md:px-20">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-12 opacity-60 md:gap-24">
            {overview.trustStrip.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <MaterialIcon name={item.icon} className="text-4xl" />
                <span className="font-label text-xs uppercase tracking-[0.18em]">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="px-8 py-24 md:px-20">
          <div className="mx-auto grid max-w-[1440px] gap-20 lg:grid-cols-3">
            <div>
              <h2 className="font-headline text-4xl italic text-on-background">Decision Resources</h2>
              <div className="mt-8 space-y-8">
                {overview.resources.map((resource) => (
                  <Link
                    key={resource.title}
                    href={resource.href}
                    className="block rounded-lg bg-surface-container-low p-6 transition-colors hover:bg-surface-container"
                  >
                    <h3 className="font-headline text-xl text-on-background">{resource.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-on-surface-variant">{resource.copy}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-headline text-4xl italic text-on-background">Expert Guidance</h2>
              <div className="mt-8 divide-y divide-outline-variant/30">
                {overview.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group py-6"
                    open={'defaultOpen' in faq ? faq.defaultOpen : false}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between">
                      <span className="font-headline text-2xl transition-colors group-hover:text-primary">
                        {faq.question}
                      </span>
                      <MaterialIcon
                        name="expand_more"
                        className="transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <p className="mt-6 leading-7 text-on-surface-variant">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary px-8 py-32 text-on-primary md:px-20">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="font-headline text-5xl italic md:text-6xl">{overview.cta.title}</h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-primary-fixed-dim">
              {overview.cta.copy}
            </p>
            <form className="mt-16 grid gap-6 md:grid-cols-3">
              <input
                className="rounded-lg border border-white/20 bg-white/10 p-4 text-white placeholder:text-white/40"
                placeholder={overview.cta.form.namePlaceholder}
                type="text"
              />
              <input
                className="rounded-lg border border-white/20 bg-white/10 p-4 text-white placeholder:text-white/40"
                placeholder={overview.cta.form.emailPlaceholder}
                type="email"
              />
              <button
                className="rounded-lg bg-surface-bright py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-white"
                type="button"
              >
                {overview.cta.form.submitLabel}
              </button>
            </form>
            <p className="mt-8 text-sm text-primary-fixed-dim/60">{overview.cta.form.note}</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
