/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { MaterialIcon } from '@/components/ui/material-icon'
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
      <main className="mx-auto max-w-[1440px] px-6 pb-20 pt-32 md:px-8">
        <section className="mb-24 flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="relative w-full overflow-hidden rounded-xl bg-surface-container-low lg:w-2/3">
            <img
              src={resourcesFixture.featured.image}
              alt={resourcesFixture.featured.title}
              className="h-[600px] w-full object-cover grayscale-[30%] transition-all duration-700 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity hover:opacity-100" />
          </div>
          <div className="flex w-full flex-col gap-6 lg:w-1/3">
            <span className="font-label text-xs font-bold uppercase tracking-[0.1em] text-secondary">
              Featured / Buying Guide
            </span>
            <h1 className="font-headline text-5xl italic leading-tight tracking-tight text-on-background lg:text-6xl">
              {resourcesFixture.featured.title}
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-on-surface-variant">
              {resourcesFixture.featured.copy}
            </p>
            <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-outline">
              <span>Jan 24, 2024</span>
              <span className="h-1 w-1 rounded-full bg-outline-variant" />
              <span>12 Min Read</span>
            </div>
            <Link href={resourcesFixture.featured.href} className="inline-flex items-center gap-2 font-bold text-primary">
              <span className="border-b-2 border-primary/20 transition-all hover:border-primary">
                Read Journal Entry
              </span>
              <MaterialIcon name="arrow_forward" className="transition-transform hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <section className="mb-16 flex flex-wrap items-center gap-3">
          {resourcesFixture.filters.map((filter, index) => (
            <button
              key={filter}
              className={`rounded-full px-5 py-3 text-xs font-bold uppercase tracking-widest ${
                index === 0
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface-variant'
              }`}
            >
              {filter}
            </button>
          ))}
        </section>

        <section className="mb-24 grid gap-6 lg:grid-cols-3">
          {resourcesFixture.cards.map((card, index) => (
            <Link
              key={card.title}
              href={card.href}
              className={`group rounded-xl bg-surface-container-lowest p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                index === 1 ? 'lg:translate-y-10' : ''
              }`}
            >
              <div className="mb-6 aspect-[4/5] overflow-hidden rounded-xl bg-surface-container">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="mb-3 font-headline text-3xl font-bold text-primary">{card.title}</h2>
              <p className="text-sm leading-relaxed text-on-surface-variant">{card.copy}</p>
            </Link>
          ))}
          <div className="flex min-h-[560px] flex-col justify-between rounded-xl bg-surface-container p-10 lg:translate-y-10">
            <div>
              <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Editorial Break
              </span>
              <h2 className="font-headline text-4xl italic leading-tight text-primary">
                The journal exists to sharpen industrial judgement, not fill a content calendar.
              </h2>
            </div>
            <Link href="/solutions/commercial-wholesale-oem" className="border-b border-primary pb-1 text-sm font-bold uppercase tracking-widest text-primary">
              Explore Solution Logic
            </Link>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl bg-primary px-8 py-12 text-on-primary md:px-12 md:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
                Catalog Access
              </span>
              <h2 className="mb-4 font-headline text-4xl font-bold">Download the PRO-TAYLOR Journal Index</h2>
              <p className="max-w-2xl text-on-primary/80">
                Receive a concise PDF of our buying guides, machine briefs, and factory notes for wholesale and OEM evaluation.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                className="min-w-72 rounded-md border-none bg-surface-container-lowest px-5 py-4 text-on-surface"
                placeholder="Business email"
                type="email"
              />
              <button className="rounded-md bg-surface-container-highest px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary">
                Send Index
              </button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
