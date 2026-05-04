/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { MaterialIcon } from '@/components/ui/material-icon'
import { homePageData } from '@/fixtures/stitch/home'
import { ROUTES } from '@/fixtures/stitch/site'

export function HomePage() {
  return (
    <>
      <TrustRibbon highlight="oem" topClassName="top-16" />
      <SiteHeader navTone="serif" searchMode="pill" searchPlaceholder="Search PRO-TAYLOR" />
      <main className="pt-32 pb-20 md:pb-0">
        <section
          className="home-hero-desktop relative hidden w-full overflow-hidden bg-surface-container-low md:flex md:items-center md:px-8 lg:px-20"
          style={{ height: 'clamp(28rem, calc(100vh - 12rem), 48rem)', minHeight: 0 }}
        >
          <div className="absolute inset-0 z-0">
            <img
              src={homePageData.hero.image}
              alt="Premium gelato batch freezer in a minimal architectural dessert production showroom"
              className="home-hero-desktop__image h-full w-full object-cover brightness-[0.85] grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <p className="mb-4 font-label text-xs uppercase tracking-[0.2em] text-on-background/70">
              Established Excellence
            </p>
            <h1 className="font-headline text-5xl leading-[1.1] font-bold tracking-tight text-on-background md:text-7xl">
              PRO-TAYLOR: <span className="serif-italic font-normal">Premium Equipment</span>{' '}for the World&apos;s Best Desserts.
            </h1>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={ROUTES.contact}
                className="rounded-[0.125rem] bg-primary px-8 py-4 font-medium text-white shadow-xl shadow-primary/10 transition-all hover:bg-primary-dim"
              >
                Request Quote
              </Link>
              <Link
                href={ROUTES.category}
                className="rounded-[0.125rem] bg-surface-container-highest px-8 py-4 font-medium text-primary transition-all hover:bg-surface-variant"
              >
                Explore Product Categories
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 pb-12 pt-6 md:hidden">
          <div className="relative mb-8 h-[530px] overflow-hidden rounded-xl">
            <img
              src={homePageData.mobileHero.image}
              alt="Premium gelato batch freezer in a minimal architectural dessert production showroom"
              className="h-full w-full object-cover contrast-125 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent" />
            <div className="absolute bottom-8 left-6 right-6">
              <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-surface-container-lowest">
                {homePageData.mobileHero.eyebrow}
              </span>
              <p className="font-headline text-4xl italic leading-tight tracking-tight text-surface-container-lowest">
                PRO-TAYLOR: Premium Equipment for the World&apos;s Best Desserts.
              </p>
            </div>
          </div>
          <p className="max-w-md text-base leading-relaxed text-on-surface-variant">
            {homePageData.mobileHero.copy}
          </p>
        </section>

        <section className="px-6 pb-16 md:hidden">
          <div className="grid gap-4">
            <Link
              href={homePageData.mobileFeature.href}
              className="rounded-xl bg-surface-container-lowest p-8 shadow-sm"
            >
              <div>
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                  {homePageData.mobileFeature.eyebrow}
                </span>
                <h2 className="font-headline text-3xl italic leading-tight text-primary">
                  {homePageData.mobileFeature.title}
                </h2>
              </div>
              <img
                src={homePageData.mobileFeature.image}
                alt={homePageData.mobileFeature.title}
                className="mt-8 h-48 w-full rounded-lg object-cover grayscale"
              />
              <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                {homePageData.mobileFeature.cta}
                <MaterialIcon name="arrow_forward" className="text-sm" />
              </span>
            </Link>
            {homePageData.mobileHighlights.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-xl bg-surface-container p-6"
              >
                <div>
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant">
                    {item.eyebrow}
                  </span>
                  <h3 className="font-headline text-2xl italic text-primary">{item.title}</h3>
                </div>
                <MaterialIcon name={item.icon} className="text-3xl text-primary" />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-16 md:hidden">
          <h2 className="mb-10 text-center text-xs font-bold uppercase tracking-[0.25em] text-secondary">
            Production Standards
          </h2>
          <div className="space-y-6">
            {homePageData.mobileSpecs.map(([label, value]) => (
              <div
                key={label}
                className="flex items-baseline justify-between border-b border-outline-variant/20 pb-4"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {label}
                </span>
                <span className="font-headline text-lg italic">{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 text-center md:hidden">
          <h2 className="mb-6 font-headline text-4xl italic text-primary">
            {homePageData.mobileCta.title}
          </h2>
          <p className="mx-auto mb-10 max-w-xs text-sm leading-relaxed text-on-surface-variant">
            {homePageData.mobileCta.copy}
          </p>
          <div className="space-y-4">
            <Link
              href={ROUTES.contact}
              className="block w-full rounded-md bg-primary py-5 text-xs font-bold uppercase tracking-[0.2em] text-on-primary shadow-lg shadow-primary/20"
            >
              {homePageData.mobileCta.primary}
            </Link>
            <Link
              href={ROUTES.contact}
              className="block w-full rounded-md bg-surface-container-highest py-5 text-xs font-bold uppercase tracking-[0.2em] text-primary"
            >
              {homePageData.mobileCta.secondary}
            </Link>
          </div>
        </section>

        <section className="mx-auto hidden max-w-[1440px] px-8 pb-24 pt-8 md:block">
          <div className="grid gap-8 md:grid-cols-2">
            {homePageData.buyerPaths.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative flex aspect-[16/9] flex-col justify-end overflow-hidden rounded-[0.5rem] p-12 ${
                  item.tone
                } ${'bordered' in item && item.bordered ? 'border border-outline-variant/10' : ''}`}
              >
                <div className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-headline text-3xl font-bold">{item.title}</h3>
                <p className="mb-6 mt-2 max-w-xs text-base leading-6 text-on-background">
                  {item.copy}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  {item.cta}
                  <MaterialIcon
                    name="arrow_forward"
                    className="text-[14px] leading-5"
                    style={{ fontSize: '14px', lineHeight: '20px' }}
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="hidden bg-surface-container-low py-32 md:block">
          <div className="mx-auto max-w-[1440px] px-8">
            <div className="mx-auto mb-20 max-w-2xl text-center">
              <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                The Collection
              </span>
              <h2 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
                Precision Engineering, <span className="serif-italic font-normal">Crafted for Taste.</span>
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {homePageData.categories.map((category, index) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className={`group block ${index % 2 === 1 ? 'md:translate-y-8' : ''}`}
                >
                  <div className="mb-6 aspect-[3/4] overflow-hidden rounded-[0.25rem]">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-headline text-2xl font-bold">{category.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-on-background">
                    {category.copy}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="hidden bg-white py-32 md:block">
          <div className="mx-auto grid max-w-[1440px] gap-20 px-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-12 font-headline text-4xl font-bold md:text-5xl">
                Why Buyers Choose <span className="serif-italic font-normal">PRO-TAYLOR</span>
              </h2>
              <div className="space-y-10">
                {homePageData.valuePoints.map((point) => (
                  <div key={point.title} className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.75rem] bg-surface-container text-primary">
                      <MaterialIcon name={point.icon} />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-bold">{point.title}</h4>
                      <p className="text-sm leading-relaxed text-on-background">{point.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-[0.5rem] bg-surface-container-low p-8">
                <img
                  src={homePageData.valueImage}
                  alt="Engineering and quality control"
                  className="h-full w-full rounded-[0.25rem] object-cover shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 hidden rounded-[0.5rem] bg-primary p-8 text-on-primary md:block">
                <p className="font-headline text-3xl font-bold">15+</p>
                <p className="text-xs uppercase tracking-widest opacity-80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        <section className="hidden bg-white px-8 py-24 md:block">
          <div className="mx-auto max-w-[1373px] space-y-12">
            <div className="grid overflow-hidden rounded-[0.5rem] bg-surface-container md:min-h-96 md:grid-cols-2 xl:min-h-[28rem]">
              <div className="flex flex-col justify-center px-10 py-12 lg:px-16">
                <span className="mb-5 font-label text-xs uppercase tracking-[0.2em] text-secondary">
                  {homePageData.editorialBlocks[0].eyebrow}
                </span>
                <h2 className="mb-6 font-headline text-3xl font-bold leading-tight xl:text-4xl">
                  {homePageData.editorialBlocks[0].title.replace(homePageData.editorialBlocks[0].titleAccent, '')}
                  <span className="serif-italic font-normal">{homePageData.editorialBlocks[0].titleAccent}</span>
                </h2>
                <p className="mb-8 max-w-xl leading-relaxed text-on-background">
                  {homePageData.editorialBlocks[0].copy}
                </p>
                <Link
                  href={homePageData.editorialBlocks[0].href}
                  className="self-start border-b border-primary pb-1 text-sm font-bold uppercase tracking-widest transition-colors hover:border-secondary hover:text-secondary"
                >
                  {homePageData.editorialBlocks[0].cta}
                </Link>
              </div>
              <div className="h-80 md:h-auto">
                <img
                  src={homePageData.editorialBlocks[0].image}
                  alt={homePageData.editorialBlocks[0].title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="grid overflow-hidden rounded-[0.5rem] bg-surface-container-low md:min-h-96 md:grid-cols-2 xl:min-h-[28rem]">
              <div className="order-2 h-80 md:order-1 md:h-auto">
                <img
                  src={homePageData.editorialBlocks[1].image}
                  alt={homePageData.editorialBlocks[1].title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="order-1 flex flex-col justify-center px-10 py-12 md:order-2 lg:px-16">
                <span className="mb-5 font-label text-xs uppercase tracking-[0.2em] text-secondary">
                  {homePageData.editorialBlocks[1].eyebrow}
                </span>
                <h2 className="mb-6 font-headline text-3xl font-bold leading-tight xl:text-4xl">
                  {homePageData.editorialBlocks[1].title.replace(homePageData.editorialBlocks[1].titleAccent, '')}
                  <span className="serif-italic font-normal">{homePageData.editorialBlocks[1].titleAccent}</span>
                </h2>
                <p className="mb-8 max-w-xl leading-relaxed text-on-background">
                  {homePageData.editorialBlocks[1].copy}
                </p>
                <Link
                  href={homePageData.editorialBlocks[1].href}
                  className="self-start border-b border-primary pb-1 text-sm font-bold uppercase tracking-widest transition-colors hover:border-secondary hover:text-secondary"
                >
                  {homePageData.editorialBlocks[1].cta}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="hidden bg-surface-container px-6 py-24 md:block md:px-8 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <MaterialIcon
              name="format_quote"
              className="mb-8 text-4xl text-primary/30"
              style={{ fontSize: '36px', lineHeight: '40px' }}
            />
            <p className="mb-12 font-headline text-3xl italic leading-relaxed text-on-background md:text-4xl">
              {homePageData.testimonial.quote}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <img src={homePageData.testimonial.avatar} alt={homePageData.testimonial.name} />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">{homePageData.testimonial.name}</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant">
                  {homePageData.testimonial.title}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="hidden md:mx-auto md:block md:max-w-4xl md:px-8 md:py-32">
          <h2 className="mb-16 text-center font-headline text-4xl font-bold">
            Frequently Asked <span className="serif-italic font-normal">Questions</span>
          </h2>
          <div className="space-y-4">
            {homePageData.faqs.map((faq) => (
              <details key={faq.question} className="group cursor-pointer rounded-lg bg-surface-container-low p-6">
                <summary className="flex list-none items-center justify-between text-lg font-bold">
                  {faq.question}
                  <MaterialIcon
                    name="expand_more"
                    className="transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 leading-relaxed text-on-background">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-24 hidden max-w-[1440px] px-6 md:mb-32 md:block md:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary p-12 text-center text-on-primary md:p-24">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-surface-container-highest blur-[100px]" />
            </div>
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="mb-6 font-headline text-4xl font-bold md:text-5xl">
                Ready to Elevate Your Production?
              </h2>
              <p className="mb-12 text-on-primary/80">
                Contact our sales engineering team for a bespoke quote or factory tour.
              </p>
              <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <Link
                  href={ROUTES.contact}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-surface-container-lowest px-10 py-4 font-bold text-primary transition-all hover:bg-surface-container md:w-auto"
                >
                  <MaterialIcon name="mail" />
                  Email Inquiry
                </Link>
                <Link
                  href={ROUTES.contact}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-10 py-4 font-bold text-white transition-all hover:bg-emerald-700 md:w-auto"
                >
                  <MaterialIcon name="chat" />
                  WhatsApp Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
