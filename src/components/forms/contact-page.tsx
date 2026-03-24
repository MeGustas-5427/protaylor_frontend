/* eslint-disable @next/next/no-img-element */

import { QuoteForm } from '@/components/forms/quote-form'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { MaterialIcon } from '@/components/ui/material-icon'
import { contactFixture } from '@/fixtures/stitch/content'

export function ContactPage() {
  return (
    <>
      <SiteHeader navTone="serif" searchMode="pill" searchPlaceholder="Search PRO-TAYLOR" />
      <TrustRibbon highlight="oem" topClassName="top-16" />
      <main className="mx-auto max-w-[1440px] px-6 py-20 pt-32 md:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="space-y-12 lg:col-span-5">
            <div className="space-y-4">
              <span className="label-caps text-secondary">Connect With Us</span>
              <h1 className="font-headline text-5xl font-bold leading-none tracking-tight text-on-background md:text-6xl">
                Refined <span className="serif-italic font-normal">Precision</span> <br />
                at Your Scale.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-on-surface-variant">
                {contactFixture.description}
              </p>
            </div>
            <div className="grid gap-6">
              {contactFixture.contactCards.map((card) => (
                <div
                  key={card.eyebrow}
                  className="group flex cursor-pointer items-center rounded-xl bg-surface-container-low p-6 transition-all hover:border-outline-variant/20"
                >
                  <div
                    className={`mr-5 flex h-12 w-12 items-center justify-center rounded-lg ${
                      card.tone === 'primary'
                        ? 'bg-primary-container text-primary'
                        : card.tone === 'secondary'
                          ? 'bg-secondary-container text-secondary'
                          : 'bg-[#e1ebe1] text-[#25d366]'
                    }`}
                  >
                    <MaterialIcon name={card.icon} />
                  </div>
                  <div>
                    <p className="label-caps mb-1 text-xs text-on-surface-variant">{card.eyebrow}</p>
                    <p className="text-lg font-bold text-primary">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6 rounded-xl bg-surface-container p-8">
              <h2 className="font-headline text-2xl font-bold">What happens next?</h2>
              <div className="space-y-4">
                {contactFixture.steps.map(([number, title, copy]) => (
                  <div key={number} className="flex gap-4">
                    <span className="font-headline text-xl font-bold text-primary">{number}</span>
                    <div>
                      <p className="font-bold text-on-surface">{title}</p>
                      <p className="text-sm text-on-surface-variant">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-10 shadow-sm lg:p-14">
              <QuoteForm variant="contact" buttonLabel="Request Formal Quote" />
            </div>
          </div>
        </div>

        <section className="mt-24 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Visit the Facility
            </span>
            <h2 className="mb-6 font-headline text-4xl font-bold text-primary">
              Guangdong Manufacturing Hub
            </h2>
            <p className="mb-6 max-w-xl leading-relaxed text-on-surface-variant">
              28 Henglong Industrial Avenue, Jiangmen, Guangdong. Guided factory visits and QA
              walkthroughs are available for qualified wholesale and OEM projects.
            </p>
            <div className="space-y-2 text-sm text-on-surface-variant">
              <p>Factory Hours: Monday to Saturday / 08:30 - 18:00 CST</p>
              <p>Nearest Port: Shenzhen / Guangzhou Export Routing</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface-container-low">
            <img src={contactFixture.facilityImage} alt="Factory facility" className="h-[400px] w-full object-cover" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
