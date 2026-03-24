import { trustItems } from '@/fixtures/stitch/site'
import { MaterialIcon } from '@/components/ui/material-icon'

type TrustRibbonProps = {
  highlight?: (typeof trustItems)[number]['key'] | null
  topClassName?: string
  fixed?: boolean
  neutralDesktop?: boolean
}

export function TrustRibbon({
  highlight = 'oem',
  topClassName = 'top-16',
  fixed = true,
  neutralDesktop = false,
}: TrustRibbonProps) {
  const Wrapper = fixed ? 'fixed' : 'relative'

  return (
    <div
      className={`${Wrapper} ${topClassName} z-[60] flex h-10 w-full items-center justify-center gap-12 overflow-x-auto bg-[#ecefe7] py-2 hide-scrollbar`}
    >
      <div className="mx-auto flex items-center gap-8 whitespace-nowrap px-6 md:gap-12">
        {trustItems.map((item) => {
          const active = item.key === highlight
          const itemClass = neutralDesktop
            ? 'text-stone-400'
            : active
              ? 'text-primary'
              : 'text-stone-400'

          return (
            <div
              key={item.key}
              className={`flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest ${itemClass}`}
            >
              <MaterialIcon name={item.icon} className="text-sm" />
              <span>{item.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
