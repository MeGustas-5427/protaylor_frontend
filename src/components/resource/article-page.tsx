/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { articleFixture } from '@/fixtures/stitch/content'

export function ArticlePage() {
  return (
    <>
      <SiteHeader
        activeSection="resources"
        navTone="serif"
        searchMode="pill"
        searchPlaceholder="Search PRO-TAYLOR"
      />
      <TrustRibbon highlight="factory" topClassName="top-16" />
      <main className="mx-auto max-w-[1440px] px-6 pb-20 pt-32 md:px-8">
        <header className="mx-auto mb-20 max-w-4xl text-center">
          <div className="mb-6">
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Industry Intelligence / Guide 042
            </span>
          </div>
          <h1 className="mb-8 font-headline text-5xl italic leading-[1.1] tracking-tight text-on-background md:text-7xl">
            {articleFixture.title}
          </h1>
          <p className="font-headline text-2xl italic text-on-surface-variant opacity-80">
            {articleFixture.subtitle}
          </p>
        </header>

        <details className="mb-8 rounded-xl bg-surface-container-low p-6 lg:hidden">
          <summary className="cursor-pointer list-none text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Contents
          </summary>
          <div className="mt-4 space-y-3">
            {articleFixture.toc.map(([href, label]) => (
              <a key={href} href={`#${href}`} className="block text-sm text-primary">
                {label}
              </a>
            ))}
          </div>
        </details>

        <div className="grid gap-16 lg:grid-cols-12">
          <aside className="sticky top-36 hidden h-fit lg:col-span-3 lg:block">
            <nav className="space-y-6">
              <div className="mb-4 border-b border-outline-variant/20 pb-2 text-[10px] font-bold uppercase tracking-widest text-secondary">
                Contents
              </div>
              <ul className="space-y-4">
                {articleFixture.toc.map(([href, label], index) => (
                  <li key={href}>
                    <a
                      href={`#${href}`}
                      className={index === 0 ? 'text-sm font-bold text-primary' : 'text-sm font-medium text-on-surface-variant hover:text-primary'}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-12 rounded-xl bg-surface-container-low p-6">
                <div className="mb-2 font-headline text-lg italic text-primary">Need a custom spec?</div>
                <p className="mb-4 text-xs leading-relaxed text-on-surface-variant">
                  Our engineers provide direct technical support for OEM integration and throughput planning.
                </p>
                <Link
                  href="/contact"
                  className="block rounded bg-surface-container-highest py-2 text-center text-[10px] font-bold uppercase tracking-widest text-secondary"
                >
                  Contact Factory
                </Link>
              </div>
            </nav>
          </aside>

          <article className="space-y-16 lg:col-span-9">
            <section id="summary" className="rounded-xl border border-outline-variant/5 bg-surface-container-lowest p-8 shadow-sm md:p-12">
              <div className="max-w-2xl">
                <h2 className="mb-6 font-headline text-3xl italic">The Quick Verdict</h2>
                <p className="mb-6 text-lg leading-loose text-on-background">{articleFixture.summary}</p>
                <div className="flex flex-wrap gap-4">
                  <span className="rounded-full bg-secondary-container px-4 py-2 text-xs font-bold">
                    Key Metric: Overrun %
                  </span>
                  <span className="rounded-full bg-primary-container px-4 py-2 text-xs font-bold">
                    Efficiency: Air vs Water Cooled
                  </span>
                </div>
              </div>
            </section>

            <section id="capacity" className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-px flex-grow bg-outline-variant" />
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Volume & Capacity</h3>
                <div className="h-px flex-grow bg-outline-variant" />
              </div>
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div className="overflow-hidden rounded-xl bg-surface-container-low">
                  <img src={articleFixture.capacityImage} alt="Volume and capacity" className="h-full w-full object-cover" />
                </div>
                <div className="space-y-5 text-on-surface-variant">
                  <p>
                    Capacity planning should start from the busiest hour, not the average sales day. Recovery speed, hopper reserve, and operator rhythm will determine whether the experience stays premium under pressure.
                  </p>
                  <p>
                    For boutique shops, compact countertop units often outperform oversized systems in ROI. For franchises and hospitality, twin-system floor models offer the cleanest margin between speed and consistency.
                  </p>
                </div>
              </div>
            </section>

            <section id="cooling" className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-px flex-grow bg-outline-variant" />
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Cooling Systems</h3>
                <div className="h-px flex-grow bg-outline-variant" />
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-surface-container-low p-8">
                  <h4 className="mb-3 font-headline text-2xl font-bold text-primary">Air Cooled</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Best for most retail sites when air circulation and cleaning access are well managed.
                  </p>
                </div>
                <div className="rounded-xl bg-primary p-8 text-on-primary">
                  <h4 className="mb-3 font-headline text-2xl font-bold">Water Cooled</h4>
                  <p className="text-sm leading-relaxed text-on-primary/80">
                    Preferable when ambient heat is high or the service window stays continuously active.
                  </p>
                </div>
                <div className="rounded-xl bg-surface-container-low p-8">
                  <h4 className="mb-3 font-headline text-2xl font-bold text-primary">Hybrid Strategies</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Premium projects often combine pre-cooling, upgraded compressors, and operator workflow improvements.
                  </p>
                </div>
              </div>
            </section>

            <section id="comparison" className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-px flex-grow bg-outline-variant" />
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Model Comparison</h3>
                <div className="h-px flex-grow bg-outline-variant" />
              </div>
              <div className="overflow-hidden rounded-xl border border-outline-variant/10">
                <div className="grid grid-cols-3 bg-surface-container px-6 py-4 text-xs font-bold uppercase tracking-widest text-secondary">
                  <span>System</span>
                  <span>Best For</span>
                  <span>Strength</span>
                </div>
                {articleFixture.matrixRows.map(([system, bestFor, strength], index) => (
                  <div
                    key={system}
                    className={`grid grid-cols-1 gap-3 px-6 py-5 md:grid-cols-3 ${
                      index % 2 === 1 ? 'bg-surface-container-low' : 'bg-transparent'
                    }`}
                  >
                    <span className="font-bold text-primary">{system}</span>
                    <span>{bestFor}</span>
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 rounded-2xl bg-primary p-8 text-on-primary md:grid-cols-[1fr_16rem] md:p-10">
              <div>
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
                  Next Step
                </span>
                <h2 className="mb-4 font-headline text-4xl font-bold">Need a machine recommendation?</h2>
                <p className="max-w-2xl text-on-primary/80">
                  Share your throughput goal, product style, and available footprint. We&apos;ll help align the right machine family before you request a formal quotation.
                </p>
              </div>
              <div className="rounded-xl bg-surface-container-lowest p-6 text-on-surface">
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                  Technical Tile
                </div>
                <p className="font-headline text-2xl italic text-primary">Cooling architecture + overrun control</p>
              </div>
            </section>

            <section id="faq" className="space-y-4">
              <h2 className="font-headline text-4xl font-bold text-primary">Common Queries</h2>
              {articleFixture.faqs.map(([question, answer]) => (
                <details key={question} className="group rounded-lg bg-surface-container-low p-6">
                  <summary className="flex list-none items-center justify-between text-lg font-bold">
                    {question}
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-on-surface-variant">{answer}</p>
                </details>
              ))}
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
