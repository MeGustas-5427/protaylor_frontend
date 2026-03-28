/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { MaterialIcon } from '@/components/ui/material-icon'
import type { SolutionFixture } from '@/fixtures/stitch/content'

type SolutionPageProps = {
  solution: SolutionFixture
}

export function SolutionPage({ solution }: SolutionPageProps) {
  return (
    <>
      <SiteHeader
        activeSection="solutions"
        navTone="serif"
        searchMode="pill"
        searchPlaceholder="Search PRO-TAYLOR"
      />
      <TrustRibbon highlight="ce" topClassName="top-16" />
      <main className="pt-12">
        <section className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 md:px-8 lg:grid-cols-2 lg:items-center lg:py-32">
          <div className="space-y-8">
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {solution.heroEyebrow}
            </span>
            <h1 className="mt-2 font-headline text-6xl italic leading-tight tracking-tight text-primary lg:text-7xl">
              {solution.title}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
              {solution.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={solution.primaryCtaHref}
                className="rounded-md bg-primary px-10 py-4 text-sm font-bold uppercase tracking-widest text-on-primary shadow-lg transition-all hover:shadow-xl"
              >
                {solution.primaryCtaLabel}
              </Link>
              <Link
                href={solution.secondaryCtaHref}
                className="rounded-md border border-outline-variant px-10 py-4 text-sm font-bold uppercase tracking-widest text-on-surface transition-all hover:bg-surface-container-low"
              >
                {solution.secondaryCtaLabel}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container shadow-2xl">
              <img
                src={solution.heroImage}
                alt="Industrial manufacturing plant"
                className="h-full w-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 max-w-xs rounded-lg border border-surface-container bg-surface-container-lowest p-8 shadow-2xl">
              <p className="font-headline text-2xl italic text-primary">
                &quot;{solution.heroQuote}&quot;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px w-10 bg-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  {solution.heroQuoteLabel}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-[1440px] px-6 md:px-8">
            <div className="mb-16">
              <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                {solution.strategicEyebrow}
              </span>
              <h2 className="mt-4 font-headline text-4xl italic text-primary">
                {solution.strategicTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-surface-container-lowest p-10 shadow-sm transition-shadow hover:shadow-md md:col-span-2">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <MaterialIcon
                      name={solution.oemCard.icon}
                      className="mb-6 text-secondary"
                      style={{
                        fontSize: '36px',
                        lineHeight: '40px',
                        fontVariationSettings: '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24',
                      }}
                    />
                    <h3 className="mb-4 font-headline text-3xl">
                      {solution.oemCard.title}
                    </h3>
                    <p className="mb-8 max-w-md leading-relaxed text-on-surface-variant">
                      {solution.oemCard.copy}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-surface-container-low pt-6">
                    <span className="font-label text-xs font-bold uppercase tracking-widest">
                      {solution.oemCard.recommendation}
                    </span>
                    <MaterialIcon name="arrow_forward" className="text-primary" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-xl bg-primary p-10 text-on-primary shadow-xl">
                <div>
                  <MaterialIcon
                    name={solution.distributionCard.icon}
                    className="mb-6 text-primary-fixed"
                    style={{
                      fontSize: '36px',
                      lineHeight: '40px',
                      fontVariationSettings: '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24',
                    }}
                  />
                  <h3 className="mb-4 font-headline text-3xl italic">
                    {solution.distributionCard.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-primary-fixed/80">
                    {solution.distributionCard.copy}
                  </p>
                </div>
                <button className="w-full rounded bg-surface-container-lowest py-3 font-label text-xs font-bold uppercase tracking-widest text-primary">
                  {solution.distributionCard.buttonLabel}
                </button>
              </div>

              <div className="rounded-xl bg-surface-container-highest p-10 shadow-sm">
                <MaterialIcon
                  name={solution.privateLabelCard.icon}
                  className="mb-6 text-secondary"
                  style={{
                    fontSize: '36px',
                    lineHeight: '40px',
                    fontVariationSettings: '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24',
                  }}
                />
                <h3 className="mb-4 font-headline text-2xl">
                  {solution.privateLabelCard.title}
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {solution.privateLabelCard.copy}
                </p>
              </div>

              <div className="flex flex-col gap-10 rounded-xl bg-surface-container-lowest p-10 shadow-sm md:col-span-2 md:flex-row md:items-center">
                <div className="w-full md:w-1/2">
                  <img
                    src={solution.benchmarksCard.image}
                    alt="Machine detail"
                    className="w-full rounded-lg grayscale"
                  />
                </div>
                <div className="w-full space-y-4 md:w-1/2">
                  <h4 className="font-label text-xs font-bold uppercase tracking-widest text-secondary">
                    {solution.benchmarksCard.title}
                  </h4>
                  <div className="space-y-2">
                    {solution.benchmarksCard.rows.map(([label, value]) => (
                      <div key={label} className="flex justify-between border-b border-surface-container py-2">
                        <span className="text-xs font-bold uppercase text-stone-400">{label}</span>
                        <span className="text-sm font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-8">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-12 space-y-4">
                  <div className="aspect-square overflow-hidden rounded-lg bg-surface-container">
                    <img
                      src={solution.workflowImages[0]}
                      alt="Factory floor"
                      className="h-full w-full object-cover grayscale"
                    />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden rounded-lg bg-surface-container">
                    <img
                      src={solution.workflowImages[1]}
                      alt="R&D Lab"
                      className="h-full w-full object-cover grayscale"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg bg-surface-container">
                    <img
                      src={solution.workflowImages[2]}
                      alt="Shipping containers"
                      className="h-full w-full object-cover grayscale"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg bg-surface-container">
                    <img
                      src={solution.workflowImages[3]}
                      alt="Quality control"
                      className="h-full w-full object-cover grayscale"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 space-y-10 lg:order-2">
              <div>
                <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                  {solution.workflowEyebrow}
                </span>
                <h2 className="mt-4 font-headline text-5xl italic leading-tight text-primary">
                  {solution.workflowTitle}
                </h2>
              </div>
              <div className="space-y-8">
                {solution.workflowSteps.map(([step, title, copy]) => (
                  <div key={step} className="flex gap-6">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-secondary/30 font-headline text-xl italic text-secondary">
                      {step}
                    </div>
                    <div>
                      <h4 className="mb-2 font-label text-sm font-bold uppercase tracking-widest">
                        {title}
                      </h4>
                      <p className="text-sm leading-relaxed text-on-surface-variant">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-surface-container bg-surface py-24">
          <div className="mx-auto max-w-[1440px] px-6 md:px-8">
            <div className="mb-16 text-center">
              <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                {solution.comparison.eyebrow}
              </span>
              <h2 className="mt-4 font-headline text-4xl italic text-primary">
                {solution.comparison.title}
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="px-4 py-6 font-label text-xs uppercase tracking-widest text-stone-400">
                      {solution.comparison.columns[0]}
                    </th>
                    <th className="border-b-2 border-secondary px-4 py-6 font-headline text-2xl italic text-primary">
                      {solution.comparison.columns[1]}
                    </th>
                    <th className="px-4 py-6 font-headline text-2xl italic text-primary">
                      {solution.comparison.columns[2]}
                    </th>
                    <th className="px-4 py-6 font-headline text-2xl italic text-primary">
                      {solution.comparison.columns[3]}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {solution.comparison.rows.map((row, index) => (
                    <tr
                      key={row[0]}
                      className={`border-b border-surface-container-low ${
                        index % 2 === 1 ? 'bg-surface-container-low/50' : ''
                      }`}
                    >
                      <td className="px-4 py-8 text-[10px] font-bold uppercase tracking-widest text-secondary">
                        {row[0]}
                      </td>
                      <td className="px-4 py-8">{row[1]}</td>
                      <td className="px-4 py-8">{row[2]}</td>
                      <td className="px-4 py-8">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-primary py-24 text-on-primary">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-6 text-center md:grid-cols-4 md:px-8">
            {solution.stats.map(([value, label]) => (
              <div key={label} className="space-y-2">
                <div className="font-headline text-5xl italic text-primary-fixed">{value}</div>
                <div className="font-label text-[10px] font-bold uppercase tracking-widest text-primary-fixed/60">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden py-32">
          <div className="absolute inset-0 bg-surface-container-high opacity-50" />
          <div className="relative mx-auto max-w-4xl space-y-8 px-6 text-center md:px-8">
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {solution.cta.eyebrow}
            </span>
            <h2 className="mt-8 font-headline text-5xl italic text-primary lg:text-7xl">
              {solution.cta.title}
            </h2>
            <p className="text-lg text-on-surface-variant">{solution.cta.copy}</p>
            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary px-16 py-5 font-label text-sm font-bold uppercase tracking-widest text-on-primary shadow-2xl transition-all hover:bg-primary-dim active:scale-[0.98]"
              >
                {solution.cta.buttonLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
