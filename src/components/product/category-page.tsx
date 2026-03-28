/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { MaterialIcon } from '@/components/ui/material-icon'
import type { CategoryFixture } from '@/fixtures/stitch/catalog'
import { ROUTES } from '@/fixtures/stitch/site'

type CategoryPageProps = {
  category: CategoryFixture
}

export function CategoryPage({ category }: CategoryPageProps) {
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
        <section className="mx-auto mb-24 grid max-w-[1440px] gap-12 px-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {category.heroEyebrow}
            </span>
            <h1 className="mb-6 font-headline text-6xl font-bold leading-tight tracking-tight text-primary md:text-7xl">
              {category.heroLineOne} <br />
              <span className="serif-italic font-normal">{category.heroLineTwo}</span>
            </h1>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-on-surface-variant">
              {category.description}
            </p>
            <div className="flex gap-4">
              <Link
                href={category.heroPrimaryHref}
                className="rounded-lg bg-primary px-8 py-4 font-medium text-on-primary shadow-lg shadow-primary/10"
              >
                {category.heroPrimaryLabel}
              </Link>
              <Link
                href={category.heroSecondaryHref}
                className="rounded-lg border border-outline-variant px-8 py-4 font-medium text-primary transition-colors hover:bg-surface-container"
              >
                {category.heroSecondaryLabel}
              </Link>
            </div>
          </div>
          <div className="relative h-[600px] overflow-hidden rounded-2xl bg-surface-container-low shadow-2xl lg:col-span-7">
            <img
              src={category.heroImage}
              alt={category.title}
              className="absolute inset-0 h-full w-full object-cover opacity-90 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-[1440px] px-8">
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
              {category.audienceCards.map((card) => (
                <div
                  key={card.title}
                  className={`min-h-[260px] rounded-lg p-10 ${
                    card.tone === 'primary'
                      ? 'z-10 bg-primary text-on-primary shadow-2xl md:[transform:scale(1.05)]'
                      : 'bg-surface-container-lowest'
                  }`}
                >
                  <MaterialIcon
                    name={card.icon}
                    className={`mb-6 block ${card.tone === 'primary' ? 'text-on-primary' : 'text-secondary'}`}
                    style={{ fontSize: '36px', lineHeight: '36px' }}
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

        <section className="mx-auto max-w-[1440px] px-8 py-24">
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
              <button className="flex h-12 min-w-[41px] items-center justify-center rounded-xl border border-outline-variant px-2 text-primary hover:bg-surface-container">
                <MaterialIcon
                  name="west"
                  style={{
                    fontSize: '24px',
                    lineHeight: '24px',
                    fontVariationSettings: '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24',
                  }}
                />
              </button>
              <button className="flex h-12 min-w-[41px] items-center justify-center rounded-xl border border-outline-variant px-2 text-primary hover:bg-surface-container">
                <MaterialIcon
                  name="east"
                  style={{
                    fontSize: '24px',
                    lineHeight: '24px',
                    fontVariationSettings: '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24',
                  }}
                />
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
                {category.comparisonRows.map((row, index) => (
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
                      <Link
                        href={category.heroPrimaryHref}
                        className="text-sm font-bold text-primary underline underline-offset-4"
                      >
                        Spec Sheet
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-surface py-24">
          <div className="mx-auto max-w-[1440px] px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-2 font-headline text-4xl font-bold text-primary">
                Available Configurations
              </h2>
              <div className="mx-auto mt-4 h-1 w-12 bg-secondary" />
            </div>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {category.configurations.map((product) => (
                <div key={product.name} className="group">
                  <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low">
                    <Link href={product.href}>
                      <img
                        src={product.image}
                        alt={product.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>
                    {'badge' in product && product.badge ? (
                      <div
                        className={`absolute left-4 top-4 rounded px-3 py-1 text-[10px] uppercase tracking-widest ${
                          product.badgeTone === 'primary'
                            ? 'bg-primary text-on-primary'
                            : 'bg-secondary text-on-secondary'
                        }`}
                      >
                        {product.badge}
                      </div>
                    ) : null}
                  </div>
                  <h3 className="mb-2 font-headline text-xl font-bold text-primary">
                    <Link href={product.href}>{product.name}</Link>
                  </h3>
                  <p className="mb-6 text-sm text-on-surface-variant">{product.copy}</p>
                  <div className="flex items-center justify-between">
                    <Link href={product.href} className="font-bold text-primary">
                      Request Quote
                    </Link>
                    <Link
                      href={product.href}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-outline-variant transition-all hover:bg-primary hover:text-white"
                    >
                      <MaterialIcon
                        name="arrow_forward"
                        style={{
                          fontSize: '14px',
                          lineHeight: '20px',
                          width: '14px',
                          height: '20px',
                          fontVariationSettings: '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24',
                        }}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container py-24">
          <div className="mx-auto grid max-w-[1440px] items-center gap-20 px-8 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-surface-container-highest shadow-2xl">
                <img
                  src={category.buyingGuide.image}
                  alt="Technical Engineering"
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 max-w-[280px] rounded-xl bg-secondary p-8 text-on-secondary shadow-xl">
                <p className="mb-2 font-headline text-xl italic">{category.buyingGuide.quote}</p>
                <p className="text-[10px] uppercase tracking-widest opacity-80">
                  {category.buyingGuide.quoteBy}
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-8 font-headline text-4xl font-bold text-primary">
                What to Look For: <br />
                <span className="serif-italic font-normal">Buying Guide</span>
              </h2>
              <div className="space-y-10">
                {category.buyingGuide.factors.map((factor) => (
                  <div key={factor.number} className="flex gap-6">
                    <span className="font-headline text-3xl font-bold text-secondary">
                      {factor.number}
                    </span>
                    <div>
                      <h4 className="mb-2 text-lg font-bold text-primary">{factor.title}</h4>
                      <p className="text-sm leading-relaxed text-on-surface-variant">
                        {factor.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-24">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="mb-6 font-headline text-3xl font-bold text-primary">
                Expert Resources
              </h2>
              <div className="space-y-4">
                {category.expertResources.map((resource) => (
                  <Link
                    key={resource.title}
                    href={resource.href}
                    className="group block rounded-lg bg-surface-container-low p-6 transition-all hover:bg-surface-container"
                  >
                    <h4 className="mb-1 font-bold text-primary">{resource.title}</h4>
                    <p className="text-xs text-on-surface-variant">{resource.copy}</p>
                    <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-secondary transition-transform group-hover:translate-x-1">
                      {resource.cta}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="mb-6 font-headline text-3xl font-bold text-primary">
                Common Inquiries
              </h2>
              <div className="space-y-6">
                {category.commonInquiries.map((faq) => (
                  <div key={faq.question} className="border-b border-outline-variant/20 pb-6">
                    <h4 className="mb-2 font-bold text-primary">{faq.question}</h4>
                    <p className="text-sm text-on-surface-variant">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <div className="fixed bottom-8 right-8 z-[60] hidden md:block">
        <Link
          href={ROUTES.contact}
            className="group flex items-center gap-3 rounded-full bg-secondary px-8 py-4 text-on-secondary shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            <MaterialIcon name="mail" className="transition-transform group-hover:rotate-12" />
          <span className="font-bold tracking-tight">{category.floatingCta}</span>
        </Link>
      </div>
    </>
  )
}
