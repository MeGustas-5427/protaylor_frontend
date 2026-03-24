/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { MaterialIcon } from '@/components/ui/material-icon'
import { solutionFixture } from '@/fixtures/stitch/content'

export function SolutionPage() {
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
        <section className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center md:px-8 lg:py-32">
          <div className="space-y-8">
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Wholesale & OEM Partners
            </span>
            <h1 className="font-headline text-6xl italic leading-tight tracking-tight text-primary lg:text-8xl">
              Scale your Business with PRO-TAYLOR&apos;s <span className="not-italic text-on-surface">Manufacturing Expertise</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
              {solutionFixture.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="rounded-md bg-primary px-10 py-4 text-sm font-bold uppercase tracking-widest text-on-primary shadow-lg">
                Partner With Us
              </Link>
              <Link href="/company/factory-and-quality-control" className="rounded-md border border-outline-variant px-10 py-4 text-sm font-bold uppercase tracking-widest text-on-surface hover:bg-surface-container-low">
                View Factory Capacity
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container shadow-2xl">
              <img src={solutionFixture.heroImage} alt="Industrial manufacturing plant" className="h-full w-full object-cover grayscale contrast-125" />
            </div>
            <div className="absolute -bottom-8 -left-8 max-w-xs rounded-lg border border-surface-container bg-surface-container-lowest p-8 shadow-2xl">
              <p className="font-headline text-2xl italic text-primary">“Precision engineering at a scale that moves markets.”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px w-10 bg-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Global Supply Lead
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-[1440px] px-6 md:px-8">
            <div className="mb-16">
              <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                The Strategic Advantage
              </span>
              <h2 className="mt-4 font-headline text-4xl italic text-primary">Tailored Machine Recommendations</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {solutionFixture.recommendationCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`${index === 0 ? 'md:col-span-2' : ''} rounded-xl p-10 ${
                    card.tone === 'primary' ? 'bg-primary text-on-primary shadow-xl' : 'bg-surface-container-lowest shadow-sm'
                  }`}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <MaterialIcon
                        name={card.icon}
                        className={`mb-6 text-4xl ${card.tone === 'primary' ? 'text-primary-fixed-dim' : 'text-secondary'}`}
                      />
                      <h3 className="mb-4 font-headline text-3xl">{card.title}</h3>
                      <p className={card.tone === 'primary' ? 'text-on-primary/80' : 'text-on-surface-variant'}>
                        {card.copy}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-surface-container-low pt-6 text-xs font-bold uppercase tracking-widest">
                      <span>{card.recommendation}</span>
                      <MaterialIcon name="arrow_forward" className={card.tone === 'primary' ? 'text-primary-fixed-dim' : 'text-primary'} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] md:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl bg-surface-container">
              <img src={solutionFixture.heroImage} alt="Workflow image one" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl bg-surface-container-low">
              <img src={solutionFixture.heroImage} alt="Workflow image two" className="h-full w-full object-cover grayscale" />
            </div>
            <div className="overflow-hidden rounded-xl bg-surface-container-high">
              <img src={solutionFixture.heroImage} alt="Workflow image three" className="h-full w-full object-cover brightness-95" />
            </div>
            <div className="overflow-hidden rounded-xl bg-surface-container">
              <img src={solutionFixture.heroImage} alt="Workflow image four" className="h-full w-full object-cover contrast-110" />
            </div>
          </div>
          <div className="space-y-6">
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Operational Workflow
            </span>
            <h2 className="font-headline text-4xl font-bold text-primary">From Brief to Market Launch</h2>
            {solutionFixture.workflowSteps.map(([step, title, copy]) => (
              <div key={step} className="flex gap-5 rounded-xl bg-surface-container-low p-6">
                <span className="font-headline text-2xl font-bold text-primary">{step}</span>
                <div>
                  <h3 className="font-bold text-on-surface">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-8">
          <div className="overflow-hidden rounded-xl border border-outline-variant/10">
            <div className="grid grid-cols-3 bg-surface-container px-6 py-4 text-xs font-bold uppercase tracking-widest text-secondary">
              <span>Program</span>
              <span>Model</span>
              <span>Best For</span>
            </div>
            {solutionFixture.comparisonRows.map(([program, model, bestFor], index) => (
              <div
                key={program}
                className={`grid grid-cols-1 gap-3 px-6 py-5 md:grid-cols-3 ${
                  index % 2 === 1 ? 'bg-surface-container-low' : 'bg-transparent'
                }`}
              >
                <span className="font-bold text-primary">{program}</span>
                <span>{model}</span>
                <span>{bestFor}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary py-20 text-on-primary">
          <div className="mx-auto grid max-w-[1440px] gap-6 px-6 text-center md:grid-cols-4 md:px-8">
            {solutionFixture.stats.map(([value, label]) => (
              <div key={label}>
                <p className="font-headline text-5xl font-bold">{value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-on-primary/70">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24 text-center md:px-8">
          <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Partnership CTA
          </span>
          <h2 className="mb-6 font-headline text-5xl font-bold text-primary">
            Build your next wholesale or OEM line with factory-direct clarity.
          </h2>
          <p className="mb-10 text-on-surface-variant">
            Let&apos;s define the right machine family, cosmetic program, and export package for your channel.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-10 py-4 text-sm font-bold uppercase tracking-widest text-on-primary">
            Request a Partner Call
            <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
