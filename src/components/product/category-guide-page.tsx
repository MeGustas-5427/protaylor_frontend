/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { TrustRibbon } from '@/components/layout/trust-ribbon'
import { MaterialIcon } from '@/components/ui/material-icon'
import type { CategoryGuideRecord } from '@/lib/catalog/category-guide'

type CategoryGuidePageProps = {
  category: CategoryGuideRecord
}

function renderDefinitionParagraph(text: string) {
  const [prefix, ...rest] = text.split(': ')

  if (rest.length === 0) {
    return text
  }

  return (
    <>
      <strong>{prefix}:</strong> {rest.join(': ')}
    </>
  )
}

export function CategoryGuidePage({ category }: CategoryGuidePageProps) {
  const guide = category.guide
  const definitionParagraphs = guide.definitionParagraphs?.length
    ? guide.definitionParagraphs
    : [guide.definitionCopy]
  const standardsStats = guide.standardsStats?.length ? guide.standardsStats : guide.metrics
  const relatedResources = guide.resources ?? []
  const hasDefinitionCards = guide.definitionCards.length > 0
  const hasContexts = guide.contexts.length > 0
  const hasMatrixCards = guide.matrixCards.length > 0
  const hasPaths = guide.paths.length > 0
  const hasStandards = standardsStats.length > 0
  const hasFaqs = guide.faqs.length > 0
  const hasResources = relatedResources.length > 0

  return (
    <>
      <SiteHeader
        activeSection="products"
        navTone="serif"
        searchMode="icons"
        ctaTone="sentence"
        showLanguageIcon={false}
      />
      <TrustRibbon highlight="oem" topClassName="top-16" />

      <main className="bg-[#fafaf5] pt-32">
        <header className="relative mx-auto max-w-[1536px] overflow-hidden px-8 pb-24 pt-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="z-10 lg:col-span-7">
              <p className="font-label mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#77584e]">
                {guide.eyebrow}
              </p>
              <h1 className="font-headline mb-8 max-w-[760px] text-[clamp(2.5rem,10vw,4.5rem)] font-bold italic leading-[1.05] tracking-[-0.04em] text-[#2e342d] lg:text-8xl">
                {guide.title}
              </h1>
              <p className="font-body mb-10 max-w-xl text-xl leading-relaxed text-[#5b6159]">
                {guide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={guide.primaryCtaHref}
                  className="inline-flex items-center rounded-md bg-[#4e616e] px-8 py-4 font-body font-medium text-[#f2f8ff] transition-all active:scale-[0.99]"
                >
                  {guide.primaryCtaLabel}
                  <MaterialIcon icon="arrow_forward" className="ml-2" size={24} lineHeight={24} />
                </Link>
                <Link
                  href={guide.secondaryCtaHref}
                  className="inline-flex items-center rounded-md border border-[#767c74] px-8 py-4 font-body font-medium text-[#2e342d] transition-colors hover:bg-[#f3f4ee]"
                >
                  {guide.secondaryCtaLabel}
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={guide.heroImage}
                  alt={guide.heroImageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-lg border border-[#aeb4aa]/10 bg-white p-8 shadow-xl lg:block">
                <p className="font-headline text-lg italic text-[#77584e]">
                  {guide.heroNoteQuote ?? guide.heroNoteTitle}
                </p>
                <p className="font-label mt-2 text-xs uppercase tracking-wider text-[#5b6159]">
                  {guide.heroNoteAttribution ?? guide.heroNoteCopy}
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-[#f3f4ee] py-24">
          <div className="mx-auto max-w-[1536px] px-8">
            <div className={`grid grid-cols-1 items-start gap-20 ${hasDefinitionCards ? 'lg:grid-cols-2' : ''}`}>
              <div>
                <h2 className="font-headline mb-8 text-4xl font-bold leading-tight text-[#2e342d] tracking-[0.01em]">
                  {guide.definitionTitle}
                </h2>
                <div className="space-y-6 font-body text-lg leading-relaxed text-[#5b6159]">
                  {definitionParagraphs.map((paragraph) => (
                    <p key={paragraph}>{renderDefinitionParagraph(paragraph)}</p>
                  ))}
                </div>
              </div>

              {hasDefinitionCards ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {guide.definitionCards.map((card) => (
                    <article
                      key={card.title}
                      className="flex min-h-[18rem] flex-col rounded-lg bg-white p-8"
                    >
                      <MaterialIcon
                        icon={card.icon ?? 'widgets'}
                        className="mb-4 text-[#77584e]"
                        size={40}
                        lineHeight={40}
                      />
                      <h3 className="font-body mb-2 text-xl font-bold text-[#2e342d]">
                        {card.title}
                      </h3>
                      <p className="font-body text-sm leading-6 text-[#5b6159]">{card.copy}</p>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {hasContexts ? (
          <section className="mx-auto max-w-[1536px] px-8 py-24">
            <h2 className="font-headline mb-16 text-center text-5xl font-bold italic text-[#2e342d]">
              {guide.contextsTitle}
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {guide.contexts.map((context) => (
                <article key={context.title}>
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
                    <img
                      src={context.image}
                      alt={context.imageAlt}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <h3 className="font-body mb-3 text-2xl font-bold text-[#2e342d]">
                    {context.title}
                  </h3>
                  <p className="font-body leading-relaxed text-[#5b6159]">{context.copy}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {hasMatrixCards ? (
          <section className="bg-[#ecefe7] py-24">
            <div className="mx-auto max-w-[1536px] px-8">
              <h2 className="font-headline mb-4 text-[39px] font-bold text-[#2e342d]">
                {guide.matrixTitle}
              </h2>
              {guide.matrixEyebrow ? (
                <p className="font-body mb-16 text-sm uppercase tracking-[0.1em] text-[#5b6159]">
                  {guide.matrixEyebrow}
                </p>
              ) : null}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {guide.matrixCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-xl border border-[#aeb4aa]/5 bg-white p-10 transition-all hover:shadow-xl"
                  >
                    <MaterialIcon
                      icon={card.icon ?? 'widgets'}
                      className="mb-6 text-[#77584e]"
                      size={30}
                      lineHeight={30}
                    />
                    <h3 className="font-body mb-4 text-lg font-bold text-[#2e342d]">
                      {card.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-[#5b6159]">
                      {card.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {hasPaths ? (
          <section className="mx-auto max-w-[1536px] px-8 py-24">
            <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <h2 className="font-headline text-5xl font-bold leading-tight text-[#2e342d]">
                {guide.pathsTitle}
              </h2>
              {guide.pathsEyebrow ? (
                <p className="font-body border-b border-[#77584e] pb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#77584e]">
                  {guide.pathsEyebrow}
                </p>
              ) : null}
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-4">
              {guide.paths.map((path) => (
                <article
                  key={path.title}
                  className="border-l border-[#aeb4aa]/30 pl-8 pt-4 lg:grid lg:row-span-6 lg:grid-rows-subgrid"
                >
                  <span className="font-headline mb-6 block text-4xl italic text-[#aeb4aa] lg:mb-0">
                    {path.step ?? '01'}
                  </span>
                  <h3 className="font-body mb-4 text-2xl font-bold text-[#2e342d] lg:mb-0">
                    {path.title}
                  </h3>
                  <p className="font-body mb-8 leading-relaxed text-[#5b6159] lg:mb-0">
                    {path.copy}
                  </p>
                  {path.bullets?.length ? (
                    <ul className="space-y-3 text-sm font-medium text-[#2e342d] lg:contents lg:space-y-0">
                      {path.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <MaterialIcon
                            icon="check_circle"
                            className="text-[#4e616e]"
                            size={16}
                            lineHeight={16}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {hasStandards ? (
          <section className="relative overflow-hidden bg-[#2e342d] py-20 text-[#fafaf5]">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
            </div>
            <div className="relative z-10 mx-auto max-w-[1536px] px-8">
              <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
                <div className="max-w-md">
                  <h2 className="font-headline mb-4 text-[32px] font-bold italic tracking-[0.01em]">
                    {guide.standardsTitle}
                  </h2>
                  <p className="font-body text-[#d5dcd0]/80">{guide.standardsCopy}</p>
                </div>
                <div className="grid w-full grid-cols-2 gap-8 md:w-auto lg:grid-cols-4">
                  {standardsStats.map((stat) => (
                    <div key={stat.value} className="text-center">
                      <span className="font-headline mb-1 block text-4xl font-bold">
                        {stat.value}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#d5dcd0]/60">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {hasFaqs || hasResources ? (
          <section className="mx-auto max-w-[1536px] px-8 py-24">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
              {hasFaqs ? (
                <div className={hasResources ? 'lg:col-span-8' : 'lg:col-span-12'}>
                  <h2 className="font-headline mb-12 text-[36px] font-bold italic text-[#2e342d] tracking-[0.02em]">
                    {guide.faqTitle}
                  </h2>
                  <div className="space-y-10">
                    {guide.faqs.map((faq) => (
                      <article key={faq.question}>
                        <h3 className="font-body mb-4 text-xl font-bold text-[#2e342d]">
                          {faq.question}
                        </h3>
                        <p className="font-body leading-relaxed text-[#5b6159]">{faq.answer}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}

              {hasResources ? (
                <aside className={`h-fit rounded-xl bg-[#f3f4ee] p-10 ${hasFaqs ? 'lg:col-span-4' : 'lg:col-span-12'}`}>
                  <h2 className="font-headline mb-8 text-2xl font-bold text-[#2e342d]">
                    {guide.resourcesTitle}
                  </h2>
                  <ul className="space-y-6">
                    {relatedResources.map((resource) => (
                      <li key={resource.title}>
                        <Link href={resource.href} className="group flex flex-col gap-1">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#77584e]">
                            {resource.label}
                          </span>
                          <span className="font-body font-bold text-[#2e342d] underline decoration-[#aeb4aa]/30 underline-offset-4 transition-colors group-hover:text-[#77584e]">
                            {resource.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </aside>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-[1536px] px-8 pb-32">
          <div className="relative overflow-hidden rounded-xl bg-[#4e616e] px-8 py-16 text-center text-[#f2f8ff] md:px-16 md:py-24">
            <div className="relative z-10">
              <h2 className="font-headline mb-8 text-5xl font-bold italic tracking-[0.04em] md:text-7xl">
                {guide.ctaTitle}
              </h2>
              <p className="font-body mx-auto mb-12 max-w-2xl text-xl opacity-90">
                {guide.ctaCopy}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href={guide.ctaPrimaryHref}
                  className="inline-flex items-center rounded-md bg-white px-10 py-5 text-lg font-bold text-[#2e342d] transition-colors hover:bg-[#dee4da]"
                >
                  {guide.ctaPrimaryLabel}
                </Link>
                <Link
                  href={guide.ctaSecondaryHref}
                  className="inline-flex items-center rounded-md border-2 border-[#f2f8ff] px-10 py-5 text-lg font-bold text-[#f2f8ff] transition-all hover:bg-[#f2f8ff] hover:text-[#4e616e]"
                >
                  {guide.ctaSecondaryLabel}
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
