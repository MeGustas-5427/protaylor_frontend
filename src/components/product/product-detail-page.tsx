/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { QuoteForm } from '@/components/forms/quote-form'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { MaterialIcon } from '@/components/ui/material-icon'
import { productFixture } from '@/fixtures/stitch/catalog'

export function ProductDetailPage() {
  return (
    <>
      <SiteHeader
        activeSection="products"
        navTone="serif"
        searchMode="pill"
        searchPlaceholder="Search PRO-TAYLOR"
      />
      <TrustRibbon highlight="oem" topClassName="top-16" />
      <main className="mx-auto max-w-[1440px] px-6 pb-20 pt-32 md:px-8">
        <section className="mb-24 grid gap-12 lg:grid-cols-12">
          <div className="grid h-[600px] grid-cols-4 gap-4 lg:col-span-7">
            <div className="relative col-span-4 row-span-3 overflow-hidden rounded-xl bg-surface-container-low">
              <img
                src={productFixture.gallery[0]}
                alt={`${productFixture.title} main view`}
                className="h-full w-full object-cover"
              />
            </div>
            {productFixture.gallery.slice(1).map((image, index) => (
              <div key={image} className="overflow-hidden rounded-lg bg-surface-container">
                <img
                  src={image}
                  alt={`${productFixture.title} detail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            <div className="flex items-center justify-center rounded-lg bg-surface-container text-sm font-bold uppercase tracking-widest text-primary">
              +8 View
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-8 lg:col-span-5">
            <div>
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                {productFixture.series}
              </span>
              <h1 className="mb-6 font-headline text-5xl font-bold italic tracking-tight text-on-background">
                {productFixture.title}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
                {productFixture.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 border-y border-outline-variant/20 py-8">
              {productFixture.metrics.map((metric) => (
                <div key={metric.label}>
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-secondary">
                    {metric.label}
                  </span>
                  <span className="font-headline text-2xl font-bold italic text-primary">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="flex-1 rounded-md bg-primary py-4 text-center text-sm font-bold uppercase tracking-widest text-on-primary shadow-lg shadow-primary/20"
              >
                Request Factory Quote
              </Link>
              <button className="rounded-md border border-outline-variant p-4 transition-colors hover:bg-surface-container">
                <MaterialIcon name="download" className="text-primary" />
              </button>
            </div>
            <p className="text-center text-xs italic text-outline">
              Average lead time: 14-21 business days for global shipping.
            </p>
          </div>
        </section>

        <section className="mb-20 py-20">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Operational Context
            </span>
            <h2 className="mt-2 font-headline text-4xl font-bold italic">
              Optimal Deployment Scenarios
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {productFixture.useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-surface-container-low p-8 transition-colors duration-500 hover:bg-surface-container"
              >
                <MaterialIcon name={item.icon} className="mb-6 text-4xl text-primary" />
                <h3 className="mb-4 font-headline text-2xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-on-surface-variant">{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-outline-variant" />
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">
              Engineering Specifications
            </h2>
            <div className="h-px flex-1 bg-outline-variant" />
          </div>
          <div className="overflow-hidden rounded-xl border border-outline-variant/10">
            <div className="flex items-center justify-between border-b-2 border-secondary/20 bg-surface-container px-8 py-4 text-secondary">
              <span className="text-xs font-bold uppercase tracking-widest">Property</span>
              <span className="text-xs font-bold uppercase tracking-widest">Standard Value</span>
            </div>
            <div className="grid grid-cols-1">
              {productFixture.specRows.map(([label, value], index) => (
                <div
                  key={label}
                  className={`flex items-center justify-between px-8 py-5 ${
                    index % 2 === 1 ? 'bg-surface-container-low' : 'bg-transparent'
                  }`}
                >
                  <span className="text-sm text-secondary">{label}</span>
                  <span className="text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-surface-container-low p-10">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Customization
            </span>
            <h2 className="mb-6 font-headline text-4xl font-bold text-primary">OEM & Cosmetic Control</h2>
            <ul className="space-y-4 text-on-surface-variant">
              {productFixture.customization.map((item) => (
                <li key={item} className="flex gap-3">
                  <MaterialIcon name="check" className="mt-1 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-primary p-10 text-on-primary">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
              Service Support
            </span>
            <h2 className="mb-6 font-headline text-4xl font-bold">Factory Direct Continuity</h2>
            <ul className="space-y-4 text-on-primary/80">
              {productFixture.support.map((item) => (
                <li key={item} className="flex gap-3">
                  <MaterialIcon name="done" className="mt-1 text-primary-fixed-dim" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-surface-container-lowest p-10 shadow-sm">
            <h2 className="mb-6 font-headline text-3xl font-bold text-primary">Related Machines</h2>
            <div className="space-y-4">
              {productFixture.relatedProducts.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg bg-surface-container-low px-5 py-4 text-sm font-bold text-primary"
                >
                  <span>{item.name}</span>
                  <MaterialIcon name="arrow_forward" className="text-sm" />
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-surface-container-low p-10">
            <h2 className="mb-6 font-headline text-3xl font-bold text-primary">Related Resources</h2>
            <div className="space-y-4">
              {productFixture.relatedResources.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg border border-outline-variant/20 px-5 py-4 text-sm font-bold text-primary transition-colors hover:bg-surface-container"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <h2 className="font-headline text-4xl font-bold text-primary">Technical FAQ</h2>
            {productFixture.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg bg-surface-container-low p-6">
                <summary className="flex list-none items-center justify-between text-lg font-bold">
                  {faq.question}
                  <MaterialIcon name="expand_more" className="transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 leading-relaxed text-on-surface-variant">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="rounded-2xl bg-surface-container-lowest p-10 shadow-sm">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Quote Form Context
            </span>
            <h2 className="mb-6 font-headline text-4xl font-bold text-primary">
              Ready to Configure the T836?
            </h2>
            <p className="mb-8 max-w-xl leading-relaxed text-on-surface-variant">
              Share your target output, deployment scenario, and market destination. We&apos;ll align
              the correct configuration and export package.
            </p>
            <QuoteForm variant="compact" buttonLabel="Request Factory Quote" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
