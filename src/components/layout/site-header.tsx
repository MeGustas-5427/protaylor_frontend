import Link from 'next/link'
import { navItems, ROUTES } from '@/fixtures/stitch/site'
import { MaterialIcon } from '@/components/ui/material-icon'

type ActiveSection = (typeof navItems)[number]['key'] | null
type NavTone = 'plain' | 'serif' | 'label'
type SearchMode = 'icons' | 'pill'

type SiteHeaderProps = {
  activeSection?: ActiveSection
  navTone?: NavTone
  searchMode?: SearchMode
  searchPlaceholder?: string
  topClassName?: string
  ctaLabel?: string
  ctaTone?: 'default' | 'sentence'
  showLanguageIcon?: boolean
}

function navClasses(
  active: boolean,
  navTone: NavTone,
) {
  if (navTone === 'serif') {
    return active
      ? 'text-primary border-b-2 border-primary pb-1 font-bold font-serif italic tracking-tight text-lg'
      : 'text-stone-500 font-medium hover:text-primary transition-colors duration-300 font-serif italic tracking-tight text-lg'
  }

  if (navTone === 'label') {
    return active
      ? 'text-primary border-b-2 border-primary pb-1 font-bold font-label text-xs uppercase tracking-[0.1em]'
      : 'text-stone-500 font-medium hover:text-primary transition-colors duration-300 font-label text-xs uppercase tracking-[0.1em]'
  }

  return active
    ? 'text-primary border-b-2 border-primary pb-1 font-bold'
    : 'text-stone-500 font-medium hover:text-primary transition-colors duration-300'
}

export function SiteHeader({
  activeSection = null,
  navTone = 'plain',
  searchMode = 'icons',
  searchPlaceholder = 'Search the Journal',
  topClassName = 'top-0',
  ctaLabel = 'Request Quote',
  ctaTone = 'default',
  showLanguageIcon = true,
}: SiteHeaderProps) {
  const ctaClasses =
    ctaTone === 'sentence'
      ? 'bg-primary text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-primary-dim transition-all active:scale-[0.98]'
      : 'bg-primary text-white px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-primary-dim transition-all active:scale-[0.98] md:px-6 md:py-2.5'

  return (
    <header
      className={`fixed ${topClassName} z-50 w-full bg-[#fafaf5]/80 backdrop-blur-xl shadow-sm`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-8 py-4">
        <Link
          href={ROUTES.home}
          className="font-serif text-2xl font-bold tracking-tighter text-[#4e616e]"
        >
          PRO-TAYLOR
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={navClasses(item.key === activeSection, navTone)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {searchMode === 'pill' ? (
            <div className="hidden items-center rounded-full bg-surface-container px-4 py-1.5 lg:flex">
              <MaterialIcon name="search" className="text-primary text-xl" />
              <span className="ml-2 text-sm text-outline">{searchPlaceholder}</span>
            </div>
          ) : (
            <>
              <div className="flex items-center text-primary md:hidden">
                <MaterialIcon name="search" className="cursor-pointer" />
              </div>
              <div className="hidden items-center gap-4 text-[#4e616e] lg:flex">
                {showLanguageIcon ? <MaterialIcon name="language" className="cursor-pointer" /> : null}
                <MaterialIcon name="search" className="cursor-pointer" />
              </div>
            </>
          )}
          <Link
            href={ROUTES.contact}
            className={ctaClasses}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </header>
  )
}
