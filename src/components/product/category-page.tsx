/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { MaterialIcon } from '@/components/ui/material-icon'
import { categoryFixture } from '@/fixtures/stitch/catalog'
import { ROUTES } from '@/fixtures/stitch/site'

export function CategoryPage() {
  return (
    <>
      <SiteHeader
        activeSection="products"
        navTone="serif"
        searchMode="pill"
        searchPlaceholder="Search PRO-TAYLOR"
      />
      <TrustRibbon highlight="oem" topClassName="top-16" />
      <main className="pt-32">
        <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 lg:grid-cols-12 lg:items-center md:px-8 lg:py-32">
          <div className="space-y-8 lg:col-span-5">
            <span className="block font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Precision Engineering
            </span>
            <h1 className="font-headline text-5xl font-bold leading-tight tracking-tight text-primary md:text-7xl">
              Soft Serve <br />
              <span className="serif-italic font-normal">Ice Cream Machines</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-on-surface-variant">
              {categoryFixture.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={ROUTES.product}
                className="rounded-lg bg-primary px-8 py-4 font-medium text-on-primary shadow-lg shadow-primary/10"
              >
                View Series
              </Link>
              <Link
                href={ROUTES.article}
                className="rounded-lg border border-outline-variant px-8 py-4 font-medium text-primary transition-colors hover:bg-surface-container"
              >
                Technical Catalog
              </Link>
            </div>
          </div>
          <div className="relative h-[600px] overflow-hidden rounded-2xl bg-surface-container-low shadow-2xl lg:col-span-7">
            <img
              src={categoryFixture.heroImage}
              alt="Commercial Soft Serve Machine"
              className="absolute inset-0 h-full w-full object-cover opacity-90 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-[1440px] px-6 md:px-8">
            <div className="mb-16">
              <h2 className="mb-4 font-headline text-4xl font-bold text-primary">
                Engineered for Every Scale
              </h2>
              <p className="max-w-xl text-on-surface-variant">
                Whether you are a boutique cafe or a global franchise, our machinery is calibrated
                for your specific throughput needs.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {categoryFixture.audienceCards.map((card) => (
                <div
                  key={card.title}
                  className={`rounded-xl p-10 transition-all ${
                    card.tone === 'primary'
                      ? 'z-10 bg-primary text-on-primary shadow-2xl md:scale-105'
                      : 'bg-surface-container-lowest hover:shadow-xl'
                  }`}
                >
                  <MaterialIcon
                    name={card.icon}
                    className={`mb-6 block text-4xl ${card.tone === 'primary' ? 'text-primary-fixed-dim' : 'text-secondary'}`}
                  />
                  <h3 className="mb-4 font-headline text-2xl font-bold">{card.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      card.tone === 'primary' ? 'text-on-primary/80' : 'text-on-surface-variant'
                    }`}
                  >
                    {card.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-2 font-headline text-4xl font-bold text-primary">
                Technical Selection
              </h2>
              <p className="text-on-surface-variant">
                Comparative specifications for our core production units.
              </p>
            </div>
            <div className="hidden gap-2 md:flex">
              <button className="rounded-full border border-outline-variant p-2 text-primary hover:bg-surface-container">
                <MaterialIcon name="west" />
              </button>
              <button className="rounded-full border border-outline-variant p-2 text-primary hover:bg-surface-container">
                <MaterialIcon name="east" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-secondary/30">
                  <th className="py-6 font-headline text-xl font-bold text-primary">Model Series</th>
                  <th className="py-6 text-xs font-bold uppercase tracking-widest text-secondary">Production (L/H)</th>
                  <th className="py-6 text-xs font-bold uppercase tracking-widest text-secondary">Cylinder (L)</th>
                  <th className="py-6 text-xs font-bold uppercase tracking-widest text-secondary">Cooling System</th>
                  <th className="py-6 text-xs font-bold uppercase tracking-widest text-secondary">Power Phase</th>
                  <th className="py-6" />
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {categoryFixture.comparisonRows.map((row, index) => (
                  <tr
                    key={row.model}
                    className={index === 1 ? 'bg-surface-container-low/50' : 'hover:bg-surface-container-low'}
                  >
                    <td className="py-8">
                      <span className="block text-lg font-bold text-primary">{row.model}</span>
                      <span className="text-xs italic text-on-surface-variant">{row.subtitle}</span>
                    </td>
                    <td className="py-8">{row.production}</td>
                    <td className="py-8">{row.cylinder}</td>
                    <td className="py-8">{row.cooling}</td>
                    <td className="py-8">{row.phase}</td>
                    <td className="py-8 text-right">
                      <Link href={ROUTES.product} className="text-sm font-bold text-primary underline underline-offset-4">
                        Spec Sheet
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {categoryFixture.products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group rounded-xl bg-surface-container-lowest p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 aspect-[4/5] overflow-hidden rounded-xl bg-surface-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{product.tag}</p>
                <h3 className="mb-3 font-headline text-2xl font-bold text-primary">{product.name}</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">{product.copy}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-24 md:px-8 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-2xl bg-surface-container-low">
            <img src={categoryFixture.guide.image} alt="Buying guide" className="h-full w-full object-cover" />
            <div className="absolute bottom-8 left-8 max-w-xs rounded-lg bg-surface-container-lowest p-6 shadow-xl">
              <p className="font-headline text-2xl italic text-primary">
                “The best machine is the one that matches your peak hour, not your quiet day.”
              </p>
            </div>
          </div>
          <div>
            <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Buying Guide
            </span>
            <h2 className="mb-6 font-headline text-4xl font-bold text-primary">Match Throughput to Experience</h2>
            <p className="mb-8 max-w-xl leading-relaxed text-on-surface-variant">
              Evaluate output capacity, operator workflow, ambient conditions, and recovery speed
              before deciding between countertop, floor-standing, and industrial formats.
            </p>
            <ol className="space-y-6">
              <li><span className="mr-4 font-headline text-2xl font-bold text-primary">01</span><span className="text-on-surface-variant">Estimate peak-hour servings and queue pressure.</span></li>
              <li><span className="mr-4 font-headline text-2xl font-bold text-primary">02</span><span className="text-on-surface-variant">Choose cooling architecture for your environment.</span></li>
              <li><span className="mr-4 font-headline text-2xl font-bold text-primary">03</span><span className="text-on-surface-variant">Validate serviceability, spare-parts access, and export readiness.</span></li>
            </ol>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-24 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl bg-surface-container p-10">
            <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Resources
            </span>
            <h2 className="mb-6 font-headline text-4xl font-bold text-primary">Continue the Evaluation</h2>
            <p className="mb-8 max-w-xl leading-relaxed text-on-surface-variant">
              Explore our decision framework for soft serve machine selection or request a tailored
              recommendation from our engineering team.
            </p>
            <Link href={ROUTES.article} className="inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-bold uppercase tracking-widest text-primary">
              Read the Buying Guide
              <MaterialIcon name="arrow_forward" className="text-sm" />
            </Link>
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold text-primary">Frequently Asked Questions</h2>
            {categoryFixture.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg bg-surface-container-low p-6">
                <summary className="flex list-none items-center justify-between text-lg font-bold">
                  {faq.question}
                  <MaterialIcon name="expand_more" className="transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 leading-relaxed text-on-surface-variant">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
