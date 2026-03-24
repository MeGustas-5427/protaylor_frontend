/* eslint-disable @next/next/no-img-element */

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { companyFixture } from '@/fixtures/stitch/content'

export function CompanyPage() {
  return (
    <>
      <SiteHeader
        activeSection="company"
        navTone="label"
        searchMode="pill"
        searchPlaceholder="Search Facility"
      />
      <TrustRibbon highlight="factory" topClassName="top-16" />
      <main className="pt-32">
        <section className="mx-auto max-w-[1440px] px-6 py-20 lg:py-32 md:px-8">
          <div className="editorial-grid">
            <div className="col-span-12 lg:col-span-7">
              <span className="mb-6 block font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Legacy of Excellence
              </span>
              <h1 className="mb-12 font-headline text-6xl leading-[0.9] tracking-tighter text-on-background md:text-8xl lg:text-9xl">
                The Art of <br />
                <span className="serif-italic font-normal">Precision Cooling.</span>
              </h1>
              <p className="max-w-xl text-xl leading-relaxed text-on-surface-variant">
                {companyFixture.description}
              </p>
            </div>
            <div className="col-span-12 flex items-end lg:col-span-5">
              <div className="relative w-full overflow-hidden rounded-xl bg-surface-container shadow-2xl">
                <img src={companyFixture.heroImage} alt="Industrial precision" className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" />
                <div className="absolute bottom-8 left-8 text-on-primary">
                  <span className="block font-headline text-3xl italic">Est. 1994</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-70">
                    Guangdong Manufacturing Hub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-[1440px] px-6 md:px-8">
            <div className="mb-12 flex flex-wrap gap-10">
              {companyFixture.stats.map(([value, label]) => (
                <div key={label}>
                  <p className="font-headline text-5xl font-bold text-primary">{value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-on-surface-variant">{label}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {companyFixture.capabilityCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`rounded-xl bg-surface-container-lowest p-8 shadow-sm ${
                    index === 1 ? 'md:translate-y-8' : ''
                  }`}
                >
                  <h2 className="mb-4 font-headline text-3xl font-bold text-primary">{card.title}</h2>
                  <p className="leading-relaxed text-on-surface-variant">{card.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] md:px-8">
          <div className="space-y-4">
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Quality Control
            </span>
            <h2 className="font-headline text-4xl font-bold text-primary">Zero-defect methodology</h2>
            {companyFixture.qcSteps.map(([step, title, copy]) => (
              <div key={step} className="rounded-xl bg-surface-container-low p-6">
                <div className="mb-3 flex items-center gap-4">
                  <span className="font-headline text-2xl font-bold text-primary">{step}</span>
                  <h3 className="font-bold text-on-surface">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-on-surface-variant">{copy}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-primary p-10 text-on-primary">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
              Compliance
            </span>
            <h2 className="mb-6 font-headline text-4xl font-bold">Export-grade reliability</h2>
            <p className="mb-8 max-w-xl text-on-primary/80">
              Every premium shipment is supported by process documentation, packaging discipline, and certification visibility from line to loading dock.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {companyFixture.complianceItems.map((item) => (
                <div key={item} className="rounded-lg bg-on-primary/10 px-5 py-4 text-sm font-bold uppercase tracking-widest">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#294f53] py-20 text-white">
          <div className="mx-auto max-w-[1440px] px-6 md:px-8">
            <h2 className="mb-10 text-center font-headline text-4xl font-bold">The Trust Journey</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {companyFixture.journeyCards.map((item, index) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                  <p className="mb-3 font-headline text-2xl font-bold">{`0${index + 1}`}</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-8">
          <div className="rounded-3xl bg-surface-container p-12 text-center">
            <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              After-sales Continuity
            </span>
            <h2 className="mb-6 font-headline text-5xl font-bold text-primary">
              Support that outlives the shipment.
            </h2>
            <p className="mx-auto max-w-3xl text-on-surface-variant">
              PRO-TAYLOR pairs every factory release with spare-parts planning, commissioning guidance, and a support rhythm tuned for distributor and hospitality timelines.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {companyFixture.leaders.map((leader) => (
              <div key={leader.name} className="rounded-xl bg-surface-container-lowest p-8 shadow-sm">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-on-primary">
                  {leader.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <h3 className="font-headline text-3xl font-bold text-primary">{leader.name}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">{leader.role}</p>
                <p className="mt-6 font-headline text-2xl italic text-on-surface-variant">
                  “{leader.quote}”
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
