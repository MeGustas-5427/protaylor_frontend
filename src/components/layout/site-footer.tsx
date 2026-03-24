import Link from 'next/link'
import { footerGroups, ROUTES } from '@/fixtures/stitch/site'

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-stone-200 bg-[#fafaf5]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-8 py-16 md:grid-cols-4 lg:grid-cols-6 lg:px-12 lg:py-20">
        <div className="col-span-2">
          <Link href={ROUTES.home} className="mb-6 block font-serif text-xl italic text-primary">
            PRO-TAYLOR
          </Link>
          <p className="pr-8 text-sm leading-relaxed text-stone-500">
            Precision manufacturing for the global dessert industry. From boutique
            cafes to industrial factories.
          </p>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h5 className="mb-6 text-xs font-bold uppercase tracking-widest">
              {group.title}
            </h5>
            <ul className="space-y-4 text-sm text-stone-500">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="decoration-primary/30 underline-offset-4 transition-all hover:text-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 border-t border-stone-100 px-8 py-8 text-xs text-stone-400 md:flex-row lg:px-12">
        <p>© 2024 PRO-TAYLOR Manufacturing. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link href={ROUTES.contact} className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link href={ROUTES.company} className="hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
