/* eslint-disable @next/next/no-img-element */

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
      <main className="mx-auto max-w-[1440px] px-8 pb-20 pt-[184px]">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="space-y-12 lg:col-span-5">
            <div className="space-y-4">
              <span className="label-caps text-secondary">Connect With Us</span>
              <h1 className="mt-4 font-headline text-5xl font-bold leading-none tracking-[-0.05em] text-on-background md:text-6xl">
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
                    <p className="mb-1 font-label text-xs font-normal uppercase tracking-[0.1em] text-on-surface-variant">
                      {card.eyebrow}
                    </p>
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
              <form className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="font-label text-[10px] font-bold uppercase leading-[15px] tracking-[0.1em] text-secondary"
                      htmlFor="contact-name"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      className="w-full rounded-lg border-none bg-surface-container-low p-4 text-on-surface placeholder:text-stone-400 focus:ring-2 focus:ring-primary/20"
                      placeholder="Johnathan Sterling"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="font-label text-[10px] font-bold uppercase leading-[15px] tracking-[0.1em] text-secondary"
                      htmlFor="contact-company"
                    >
                      Company
                    </label>
                    <input
                      id="contact-company"
                      className="w-full rounded-lg border-none bg-surface-container-low p-4 text-on-surface placeholder:text-stone-400 focus:ring-2 focus:ring-primary/20"
                      placeholder="Precision Industries Ltd."
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="font-label text-[10px] font-bold uppercase leading-[15px] tracking-[0.1em] text-secondary"
                      htmlFor="contact-email"
                    >
                      Business Email
                    </label>
                    <input
                      id="contact-email"
                      className="w-full rounded-lg border-none bg-surface-container-low p-4 text-on-surface placeholder:text-stone-400 focus:ring-2 focus:ring-primary/20"
                      placeholder="j.sterling@company.com"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="font-label text-[10px] font-bold uppercase leading-[15px] tracking-[0.1em] text-secondary"
                      htmlFor="contact-phone"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      className="w-full rounded-lg border-none bg-surface-container-low p-4 text-on-surface placeholder:text-stone-400 focus:ring-2 focus:ring-primary/20"
                      placeholder="+1 (000) 000-0000"
                      type="tel"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="font-label text-[10px] font-bold uppercase leading-[15px] tracking-[0.1em] text-secondary"
                    htmlFor="contact-machine-type"
                  >
                    Machine Type Interest
                  </label>
                  <select
                    id="contact-machine-type"
                    className="w-full appearance-none rounded-lg border-none bg-surface-container-low p-4 text-on-surface focus:ring-2 focus:ring-primary/20"
                    defaultValue={contactFixture.form.machineOptions[0]}
                  >
                    {contactFixture.form.machineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-4 rounded-lg bg-surface-container p-6">
                  <div className="flex-1">
                    <p className="font-bold text-on-surface">{contactFixture.form.checkboxTitle}</p>
                    <p className="text-xs text-on-surface-variant">{contactFixture.form.checkboxCopy}</p>
                  </div>
                  <input
                    className="h-6 w-6 rounded border-outline-variant text-primary focus:ring-primary/30"
                    type="checkbox"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="font-label text-[10px] font-bold uppercase leading-[15px] tracking-[0.1em] text-secondary"
                    htmlFor="contact-requirements"
                  >
                    Requirements / Message
                  </label>
                  <textarea
                    id="contact-requirements"
                    className="w-full resize-none rounded-lg border-none bg-surface-container-low p-4 text-on-surface placeholder:text-stone-400 focus:ring-2 focus:ring-primary/20"
                    placeholder={contactFixture.form.messagePlaceholder}
                    rows={4}
                  />
                </div>

                <div className="pt-4">
                  <button
                    className="flex w-full items-center justify-center gap-3 rounded-lg bg-primary py-5 text-lg font-bold text-on-primary shadow-lg shadow-primary/10 transition-all hover:-translate-y-0.5 hover:bg-primary-dim"
                    type="button"
                  >
                    {contactFixture.form.buttonLabel}
                    <MaterialIcon name="arrow_forward" />
                  </button>
                  <p className="mt-4 text-center text-xs text-on-surface-variant opacity-60">
                    {contactFixture.form.legal}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <section className="w-full bg-surface-container-low px-8 py-20">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="label-caps font-bold text-secondary">
              {contactFixture.locationSection.eyebrow}
            </span>
            <h2 className="font-headline text-4xl font-bold tracking-tight">
              {contactFixture.locationSection.title}
            </h2>
            <p className="max-w-lg leading-relaxed text-on-surface-variant">
              {contactFixture.locationSection.copy}
            </p>
            <div className="space-y-4">
              {contactFixture.locationSection.locations.map(([name, address]) => (
                <div key={name} className="flex items-start gap-4">
                  <MaterialIcon name="location_on" className="text-primary" />
                  <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-sm text-on-surface-variant">{address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="group relative h-[400px] overflow-hidden rounded-2xl shadow-xl grayscale transition-all duration-700 hover:grayscale-0">
            <img
              src={contactFixture.facilityImage}
              alt="Factory facility"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-transparent" />
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}
