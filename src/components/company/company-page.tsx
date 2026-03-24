/* eslint-disable @next/next/no-img-element */

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { MaterialIcon } from '@/components/ui/material-icon'
import { companyFixture } from '@/fixtures/stitch/content'

export function CompanyPage() {
  return (
    <>
      <SiteHeader
        activeSection="company"
        navTone="serif"
        searchMode="pill"
        searchPlaceholder="Search PRO-TAYLOR"
      />
      <TrustRibbon highlight="factory" topClassName="top-16" />
      <main className="pt-32">
        <section className="mx-auto max-w-[1440px] px-8 py-20 lg:py-32">
          <div className="editorial-grid">
            <div className="col-span-12 lg:col-span-7">
              <span className="mb-6 block font-label text-xs uppercase tracking-[0.2em] text-secondary">
                Legacy of Excellence
              </span>
              <h1 className="mb-12 font-headline text-6xl leading-none tracking-tighter text-on-background md:text-8xl lg:text-9xl">
                The Art of <br />
                <span className="serif-italic font-normal">Precision Cooling.</span>
              </h1>
              <p className="max-w-xl text-xl leading-relaxed text-on-surface-variant">
                {companyFixture.description}
              </p>
            </div>
            <div className="col-span-12 flex items-end lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface-container shadow-2xl">
                <img
                  src={companyFixture.heroImage}
                  alt="Industrial Precision"
                  className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
                <div className="absolute bottom-8 left-8 text-on-primary">
                  <span className="block font-headline text-3xl italic">Est. 1994</span>
                  <span className="font-label text-[10px] uppercase tracking-widest opacity-70">
                    Guangdong Manufacturing Hub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32">
          <div className="mx-auto max-w-[1440px] px-8">
            <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-baseline">
              <h2 className="font-headline text-5xl italic tracking-tight">
                {companyFixture.scaleHeading[0]} <br />
                <span className="not-italic font-bold">{companyFixture.scaleHeading[1]}</span>
              </h2>
              <div className="flex gap-12">
                {companyFixture.scaleStats.map(([value, label]) => (
                  <div key={label} className="text-center">
                    <span className="block font-headline text-4xl font-bold text-primary">
                      {value}
                    </span>
                    <span className="font-label text-[10px] uppercase tracking-widest text-secondary">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {companyFixture.capabilityCards.map((card) => (
                <div
                  key={card.title}
                  className={`group cursor-crosshair ${card.stagger ? 'pt-12' : ''}`}
                >
                  <div className="mb-6 aspect-[3/4] overflow-hidden rounded-lg">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mb-2 font-headline text-2xl">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{card.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-32">
          <div className="editorial-grid items-center">
            <div className="order-2 col-span-12 lg:order-1 lg:col-span-5">
              <div className="space-y-12">
                {companyFixture.qcStages.map(([stage, title, copy], index) => (
                  <div
                    key={stage}
                    className={`border-l-2 pl-6 ${
                      index === 0 ? 'border-secondary' : 'border-outline-variant'
                    }`}
                  >
                    <h4
                      className={`mb-2 font-label text-xs uppercase tracking-widest ${
                        index === 0 ? 'text-secondary' : 'text-stone-400'
                      }`}
                    >
                      {stage}
                    </h4>
                    <h3 className="mb-4 font-headline text-3xl italic">{title}</h3>
                    <p className="text-sm text-on-surface-variant">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 col-span-12 mb-12 lg:order-2 lg:col-span-7 lg:mb-0">
              <div className="rounded-2xl bg-surface-container-high p-8 lg:p-16">
                <span className="mb-8 block font-headline text-5xl leading-tight">
                  Zero-Defect <br />
                  <span className="serif-italic font-normal">Methodology.</span>
                </span>
                <div className="grid grid-cols-2 gap-8">
                  {companyFixture.methodologyTags.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg bg-white/40 p-6 backdrop-blur"
                    >
                      <MaterialIcon name={item.icon} className="mb-4 text-primary" />
                      <p className="font-label text-xs uppercase tracking-widest">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-on-background py-32 text-surface">
          <div className="mx-auto max-w-[1440px] px-8">
            <div className="mb-24 text-center">
              <h2 className="mb-6 font-headline text-5xl md:text-6xl">
                Global Standard, <span className="italic text-surface-variant">Uncompromised.</span>
              </h2>
              <p className="mx-auto max-w-2xl font-body text-xs uppercase tracking-[0.1em] text-surface-dim opacity-70">
                {companyFixture.complianceSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 items-center justify-items-center gap-12 opacity-80 md:grid-cols-4">
              {companyFixture.complianceItems.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-surface/10 bg-surface-container-low/10">
                    <MaterialIcon name={item.icon} className="text-4xl" />
                  </div>
                  <span className="font-label text-xs uppercase tracking-widest">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-32">
          <h2 className="mb-20 font-headline text-5xl">
            The Journey of <span className="italic">Trust.</span>
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {companyFixture.journeyCards.map(([number, title, copy]) => (
              <div
                key={number}
                className="group rounded-xl bg-surface-container-low p-8 transition-colors duration-500 hover:bg-primary"
              >
                <span className="mb-8 block font-headline text-6xl text-outline-variant/30 group-hover:text-surface-container-low">
                  {number}
                </span>
                <h4 className="mb-4 font-label text-xs uppercase tracking-widest text-secondary group-hover:text-surface-variant">
                  {title}
                </h4>
                <p className="text-sm leading-relaxed group-hover:text-surface">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-[1440px] px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary p-12 text-surface lg:p-24">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-10">
              <MaterialIcon
                name="handshake"
                className="absolute -right-32 -top-32"
                style={{ fontSize: '30rem', lineHeight: '1' }}
              />
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="mb-6 block font-label text-xs uppercase tracking-widest text-primary-fixed">
                {companyFixture.supportEyebrow}
              </span>
              <h2 className="mb-8 font-headline text-5xl md:text-6xl">
                Beyond the <span className="italic">Transaction.</span>
              </h2>
              <p className="mb-12 text-xl leading-relaxed opacity-90">
                {companyFixture.supportDescription}
              </p>
              <div className="grid grid-cols-1 gap-8 border-t border-surface/20 pt-12 sm:grid-cols-2">
                {companyFixture.supportHighlights.map(([title, copy]) => (
                  <div key={title}>
                    <span className="mb-2 block font-bold">{title}</span>
                    <p className="text-sm opacity-70">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-32">
          <div className="mb-24 text-center">
            <h2 className="font-headline text-5xl italic">The Human Precision.</h2>
            <p className="mt-4 font-label text-xs uppercase tracking-widest text-secondary">
              {companyFixture.leadershipEyebrow}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            {companyFixture.leaders.map((leader) => (
              <div key={leader.name} className="text-center">
                <div className="mx-auto mb-8 h-48 w-48 grayscale transition-all duration-500 hover:grayscale-0">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <h5 className="font-headline text-2xl">{leader.name}</h5>
                <p className="mb-4 font-label text-[10px] uppercase tracking-widest text-secondary">
                  {leader.role}
                </p>
                <p className="text-sm italic text-on-surface-variant">
                  &quot;{leader.quote}&quot;
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
