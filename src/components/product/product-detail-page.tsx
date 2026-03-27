import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TrustRibbon } from "@/components/layout/trust-ribbon";
import { MaterialIcon } from "@/components/ui/material-icon";

const heroMetrics = [
  { label: "PRODUCTION CAPACITY", value: "36-40 L/Hour" },
  { label: "HOPPER VOLUME", value: "2 x 6.5 Liters" },
  { label: "COOLING SYSTEM", value: "Air + Pre-cooling" },
  { label: "COMPRESSOR TYPE", value: "Embraco Aspera" },
] as const;

const scenarios = [
  {
    icon: "restaurant",
    title: "High-Volume QSR",
    description:
      "Engineered for quick-service restaurants requiring consistent delivery of 400+ servings per peak window without recovery delay.",
  },
  {
    icon: "hotel",
    title: "Hospitality & Buffet",
    description:
      "Silent operation and elegant stainless finish make it ideal for front-of-house placement in 5-star hotel breakfast corridors.",
  },
  {
    icon: "icecream",
    title: "Artisan Dessert Bars",
    description:
      "Precise air-incorporation (overrun) controls allow for premium, dense gelato-style soft serve or light, airy yogurt.",
  },
] as const;

const engineeringSpecs = [
  { label: "ELECTRICAL RATING", value: "220V/50Hz (Optional 110V/60Hz)" },
  { label: "RATED OUTPUT", value: "2.8 kW" },
  { label: "REFRIGERANT GAS", value: "R404a (Main) / R134a (Pre-cool)" },
  { label: "CYLINDER VOLUME", value: "2.0 Liters x 2" },
  { label: "DIMENSIONS (WXDXH)", value: "540 x 780 x 1435 mm" },
  { label: "NET WEIGHT", value: "165 kg" },
  { label: "EXTERNAL FINISH", value: "Food-Grade 304 Stainless Steel" },
  { label: "BEATER TYPE", value: "High-Efficiency POM Scrapers" },
  { label: "AIR PUMP", value: "Standard (Integrated)" },
  { label: "NOISE EMISSION", value: "< 55 dB(A)" },
] as const;

const oemBullets = [
  { icon: "palette", label: "Custom RAL Colors" },
  { icon: "branding_watermark", label: "Brand Etching" },
  { icon: "terminal", label: "Custom UI/UX" },
] as const;

const exportSupportBullets = [
  "Seaworthy Plywood Crating",
  "Customs Documentation",
  "Multi-Currency Invoicing",
] as const;

const relatedCards = [
  {
    href: "/products/soft-serve-machines/icm-s120-single-flavor",
    image: "/product-detail-similar-1.png",
    eyebrow: "COUNTERTOP SERIES",
    title: "ICM-S120 Single Flavor",
    description: "Ultra-compact footprint for convenience stores.",
  },
  {
    href: "/products/soft-serve-machines/icm-p900-triple-flavor",
    image: "/product-detail-similar-2.png",
    eyebrow: "INDUSTRIAL SERIES",
    title: "ICM-P900 Triple-Flavor",
    description: "Maximum throughput for stadiums and parks.",
  },
  {
    href: "/resources/maintenance-guides",
    image: "/product-detail-similar-3.png",
    eyebrow: "RESOURCE CENTER",
    title: "Maintenance Guides",
    description: "Full library of CAD files and service manuals.",
  },
] as const;

const faqs = [
  {
    question: "What is the required voltage for international installation?",
    answer:
      "The standard configuration is 220V/50Hz. However, our manufacturing line can customize units for 110V/60Hz (North America) or 220V/60Hz (Middle East/South America) upon request during the order phase.",
    defaultOpen: true,
  },
  {
    question: "Does the machine include a self-cleaning cycle?",
    answer:
      "Yes, the ICM-T836 features a one-touch automated wash cycle. While daily sanitization is required for food safety, the automated cycle significantly reduces labor time and ensures thorough flushing of internal components.",
    defaultOpen: false,
  },
  {
    question: "What is the warranty period for the compressor?",
    answer:
      "We provide a 1-year full parts warranty and a 3-year limited warranty on the Embraco compressor unit. Spare parts kits are included with every international shipment to ensure zero downtime.",
    defaultOpen: false,
  },
] as const;

export function ProductDetailPage() {
  return (
    <>
      <SiteHeader />
      <TrustRibbon />

      <main className="bg-[#fafaf5] pb-24">
        <section className="mx-auto max-w-[1376px] px-8 pt-[128px] xl:px-0">
          <div className="grid grid-cols-[782.66px_545.34px] gap-12">
            <div>
              <div className="overflow-hidden rounded-[8px]">
                <Image
                  src="/product-detail-main.png"
                  alt="ICM-T836 Main View"
                  width={783}
                  height={431}
                  className="h-[431px] w-full object-cover"
                  priority
                />
              </div>

              <div className="mt-6 grid grid-cols-4 gap-5">
                <div className="overflow-hidden rounded-[8px] bg-white">
                  <Image
                    src="/product-detail-detail-1.png"
                    alt="ICM-T836 Detail 1"
                    width={184}
                    height={153}
                    className="h-[153px] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[8px] bg-white">
                  <Image
                    src="/product-detail-detail-2.png"
                    alt="ICM-T836 Detail 2"
                    width={184}
                    height={153}
                    className="h-[153px] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[8px] bg-white">
                  <Image
                    src="/product-detail-context.png"
                    alt="ICM-T836 Context"
                    width={184}
                    height={153}
                    className="h-[153px] w-full object-cover"
                  />
                </div>
                <div className="flex h-[153px] items-center justify-center rounded-[8px] bg-[#eef1e8]">
                  <span className="font-sans text-[18px] font-bold uppercase tracking-[0.16em] text-[#4e616e]">
                    +8 VIEW
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-[2px]">
              <div className="space-y-8">
                <div>
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#77584e]">
                    PRECISION MANUFACTURING SERIES
                  </p>
                  <h1 className="mt-3 font-headline text-[48px] font-bold leading-[48px] tracking-[-0.025em] text-[#2e342d]">
                    ICM-T836 Twin-System
                    <br />
                    Soft Serve Machine
                  </h1>
                  <p className="mt-10 font-sans text-[18px] leading-[29.25px] text-[#5b6159]">
                    A dual-compressor powerhouse designed for high-output commercial
                    environments. Featuring independent cylinder control, the T836 ensures
                    consistent texture and temperature even during peak operational hours.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-14 gap-y-10 border-y border-[#e3e4d9] py-10">
                  {heroMetrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#77584e]">
                        {metric.label}
                      </p>
                      <p className="mt-2 font-headline text-[24px] font-bold italic leading-7 text-[#4e616e]">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-[18px]">
                    <Link
                      href="/contact"
                      className="flex h-[64px] flex-1 items-center justify-center rounded-[8px] bg-[#5c7282] px-8 font-sans text-[14px] font-bold uppercase tracking-[0.14em] text-[#f2f8ff]"
                    >
                      REQUEST FACTORY QUOTE
                    </Link>
                    <button
                      type="button"
                      aria-label="download"
                      className="flex h-[64px] w-[58px] items-center justify-center rounded-[8px] border border-[#d9dbd0] bg-[#fafaf5]"
                    >
                      <MaterialIcon icon="download" className="text-[#4e616e]" size={24} lineHeight={24} />
                    </button>
                  </div>

                  <p className="mt-8 text-center font-sans text-[12px] italic leading-4 text-[#767c74]">
                    Average lead time: 14-21 business days for global shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-[84px] max-w-[1376px] px-8 py-20 xl:px-0">
          <div className="mb-16 text-center">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#77584e]">
              OPERATIONAL CONTEXT
            </p>
            <h2 className="mt-2 font-headline text-4xl font-bold italic leading-[40px] text-[#2e342d]">
              Optimal Deployment Scenarios
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {scenarios.map((scenario) => (
              <article key={scenario.title} className="rounded-[8px] bg-[#f3f4ee] p-8">
                <MaterialIcon
                  icon={scenario.icon}
                  className="mb-6 text-[#77584e]"
                  size={36}
                  lineHeight={40}
                />
                <h3 className="mb-4 font-headline text-2xl font-bold leading-8 text-[#2e342d]">
                  {scenario.title}
                </h3>
                <p className="font-sans text-[16px] leading-[26px] text-[#5b6159]">
                  {scenario.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-[36px] mb-32 max-w-[1376px] px-8 xl:px-0">
          <div className="mb-12 flex items-end justify-between border-b-2 border-[#4e616e1a] pb-4">
            <h2 className="font-headline text-4xl font-bold italic text-[#2e342d]">
              Engineering Specifications
            </h2>
            <div className="font-label text-xs font-bold uppercase tracking-[0.1em] text-[#4e616e]">
              Model ID: PRO-T836-24V
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-20 gap-y-2 lg:grid-cols-2">
            <div className="divide-y divide-[#aeb4aa1a]">
              {engineeringSpecs.slice(0, 5).map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between py-4 ${index % 2 === 1 ? "bg-[#f3f4ee] px-2" : ""}`}
                >
                  <span className="font-label text-xs font-bold uppercase tracking-[0.1em] text-[#77584e]">
                    {spec.label}
                  </span>
                  <span className="font-sans text-base leading-6 text-[#2e342d]">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="divide-y divide-[#aeb4aa1a]">
              {engineeringSpecs.slice(5).map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between py-4 ${index % 2 === 1 ? "bg-[#f3f4ee] px-2" : ""}`}
                >
                  <span className="font-label text-xs font-bold uppercase tracking-[0.1em] text-[#77584e]">
                    {spec.label}
                  </span>
                  <span className="font-sans text-base leading-6 text-[#2e342d]">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-[1376px] px-8 xl:px-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <article className="flex flex-col justify-between rounded-xl bg-[#4e616e] p-12 text-[#f2f8ff] lg:col-span-2">
              <div>
                <h2 className="mb-6 font-headline text-4xl font-bold italic">
                  OEM &amp; Branding Integration
                </h2>
                <p className="max-w-xl font-sans text-lg leading-[29px] text-[#f2f8ffcc]">
                  Transform the ICM-T836 into a proprietary asset for your franchise. We
                  offer comprehensive white-labeling services including custom chassis
                  colors, laser-etched branding, and localized UI software.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                {oemBullets.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-full bg-[#ffffff1a] px-4 py-2 font-sans text-sm text-[#f2f8ff]"
                  >
                    <MaterialIcon icon={item.icon} className="text-[#f2f8ff]" size={14} lineHeight={20} />
                    {item.label}
                  </div>
                ))}
              </div>
            </article>

            <article className="flex flex-col justify-center rounded-xl bg-[#dee4da] p-12 text-center">
              <MaterialIcon icon="public" className="mb-4 text-[#4e616e]" size={48} lineHeight={48} />
              <h3 className="font-headline text-2xl font-bold text-[#2e342d]">
                Global Export Support
              </h3>
              <p className="mb-6 mt-4 font-sans text-sm italic leading-5 text-[#5b6159]">
                Door-to-door logistics in 120+ countries.
              </p>
              <ul className="space-y-3 border-t border-[#aeb4aa4d] pt-6 text-left font-sans text-sm leading-5 text-[#2e342d]">
                {exportSupportBullets.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <MaterialIcon icon="check_circle" className="text-[#77584e]" size={16} lineHeight={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-[1376px] px-8 xl:px-0">
          <h2 className="mb-10 font-headline text-3xl font-bold italic leading-9 text-[#2e342d]">
            Similar Precision Equipment
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {relatedCards.map((card) => (
              <Link key={card.title} href={card.href} className="group cursor-pointer">
                <article>
                  <div className="mb-6 aspect-video overflow-hidden rounded-lg bg-[#ecefe7]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={437}
                      height={246}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="font-label text-[10px] font-bold uppercase tracking-[0.1em] text-[#77584e]">
                    {card.eyebrow}
                  </span>
                  <h3 className="mt-2 font-headline text-xl font-bold text-[#2e342d]">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-5 text-[#5b6159]">
                    {card.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-4xl px-8 xl:px-0">
          <h2 className="mb-10 text-center font-headline text-3xl font-bold italic leading-9 text-[#2e342d]">
            Technical Inquiry FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group cursor-pointer rounded-lg bg-[#f3f4ee] p-6"
                open={faq.defaultOpen}
              >
                <summary className="flex list-none items-center justify-between font-sans text-lg font-bold leading-7 text-[#2e342d]">
                  {faq.question}
                  <MaterialIcon icon="expand_more" className="text-[#2e342d]" size={24} lineHeight={24} />
                </summary>
                <p className="mt-4 font-sans leading-[26px] text-[#5b6159]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-[1376px] overflow-hidden rounded-2xl bg-[#ecefe7] p-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-6 font-headline text-4xl font-bold italic leading-[40px] text-[#2e342d]">
              Ready to integrate PRO-TAYLOR into your workflow?
            </h2>
            <p className="mb-8 font-sans text-lg leading-7 text-[#5b6159]">
              Speak with a technical specialist today for a customized quote, including
              shipping and volume discounts for fleet orders.
            </p>
            <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="email"
                placeholder="Corporate Email Address"
                className="rounded-md border border-[#aeb4aa] bg-white px-4 py-3 font-sans text-base text-[#2e342d] placeholder:text-[#8f968e] focus:border-[#4e616e] focus:ring-[#4e616e]"
              />
              <button
                type="button"
                className="rounded-md bg-[#4e616e] px-8 py-3 font-sans text-xs font-bold uppercase tracking-[0.1em] text-[#f2f8ff]"
              >
                Start Inquiry
              </button>
            </form>
          </div>
          <MaterialIcon
            icon="precision_manufacturing"
            className="pointer-events-none absolute -bottom-10 -right-10 select-none text-[#4e616e0d]"
            size={300}
            lineHeight={300}
          />
        </section>
      </main>

      <Link
        href="/contact"
        className="group fixed bottom-8 right-8 z-40 h-[70px] w-[70px] overflow-hidden rounded-[18px] bg-[#77584e] shadow-[0_14px_36px_rgba(73,44,34,0.24)] transition-[width,box-shadow] duration-300 hover:w-[318px] hover:shadow-[0_18px_42px_rgba(73,44,34,0.28)]"
      >
        <span className="flex h-full items-center">
          <span className="flex h-[70px] w-[70px] shrink-0 items-center justify-center">
            <MaterialIcon icon="chat_bubble" className="text-white" size={24} lineHeight={24} />
          </span>
          <span className="whitespace-nowrap pr-8 font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-white opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            CHAT WITH ENGINEER
          </span>
        </span>
      </Link>

      <SiteFooter />
    </>
  );
}

export default ProductDetailPage;
