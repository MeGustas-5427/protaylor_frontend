import type { CSSProperties } from 'react'
import type { ReactNode } from 'react'

type MaterialIconProps = {
  name?: string
  icon?: string
  className?: string
  style?: CSSProperties
  size?: number
  lineHeight?: number
}

const iconDefinitions: Record<string, ReactNode> = {
  ac_unit: (
    <>
      <path d="M12 3v18" />
      <path d="m8 5 4 4 4-4" />
      <path d="m8 19 4-4 4 4" />
      <path d="M3 12h18" />
      <path d="m5 8 4 4-4 4" />
      <path d="m19 8-4 4 4 4" />
    </>
  ),
  analytics: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 16v-5" />
      <path d="M12 16V8" />
      <path d="M16 16v-7" />
    </>
  ),
  architecture: (
    <>
      <path d="M4 20 14 4l6 16" />
      <path d="M9 12h7" />
      <path d="M7 16h10" />
    </>
  ),
  arrow_forward: (
    <>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </>
  ),
  arrow_right_alt: (
    <>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </>
  ),
  aspect_ratio: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 9h3" />
      <path d="M8 9v3" />
      <path d="M16 15h-3" />
      <path d="M16 15v-3" />
    </>
  ),
  biotech: (
    <>
      <path d="M10 4v7" />
      <path d="M14 4v7" />
      <path d="M8 4h8" />
      <path d="M9 11 5 20h14l-4-9" />
      <path d="M8 16h8" />
    </>
  ),
  block: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M7 17 17 7" />
    </>
  ),
  bolt: <path d="M13 2 5 13h6l-1 9 8-12h-6l1-8Z" />,
  branding_watermark: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M7 15h4" />
      <path d="M14 10h3" />
    </>
  ),
  call: (
    <path d="M7 4h3l2 5-2 1a12 12 0 0 0 4 4l1-2 5 2v3a3 3 0 0 1-3 3A13 13 0 0 1 4 7a3 3 0 0 1 3-3Z" />
  ),
  chat: (
    <>
      <path d="M5 6h14v9H9l-4 4V6Z" />
      <path d="M8 10h8" />
      <path d="M8 13h5" />
    </>
  ),
  chat_bubble: (
    <>
      <path d="M5 6h14v9H9l-4 4V6Z" />
      <path d="M8 10h8" />
      <path d="M8 13h5" />
    </>
  ),
  check_circle: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  description: (
    <>
      <path d="M7 3h7l4 4v14H7V3Z" />
      <path d="M14 3v5h5" />
      <path d="M10 12h5" />
      <path d="M10 16h5" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v10" />
      <path d="m8 10 4 4 4-4" />
      <path d="M5 20h14" />
    </>
  ),
  eco: (
    <>
      <path d="M19 5c-8 0-13 5-13 13" />
      <path d="M6 18c8 0 13-5 13-13" />
      <path d="M6 18c-2-5 1-10 7-11" />
    </>
  ),
  engineering: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6 21v-3a6 6 0 0 1 12 0v3" />
      <path d="M4 12h4" />
      <path d="M16 12h4" />
    </>
  ),
  expand_more: <path d="m6 9 6 6 6-6" />,
  fact_check: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="m8 10 2 2 3-4" />
      <path d="M14 11h3" />
      <path d="M8 16h9" />
    </>
  ),
  factory: (
    <>
      <path d="M4 20V9l5 3V9l5 3V6h4v14H4Z" />
      <path d="M7 16h2" />
      <path d="M12 16h2" />
      <path d="M17 16h1" />
    </>
  ),
  gavel: (
    <>
      <path d="m7 7 4-4 6 6-4 4-6-6Z" />
      <path d="m12 12-7 7" />
      <path d="m14 4 6 6" />
    </>
  ),
  handshake: (
    <>
      <path d="M8 12 5 9l3-3 4 4" />
      <path d="m16 12 3-3-3-3-4 4" />
      <path d="M8 12l4 4 4-4" />
      <path d="m10 14-2 2" />
      <path d="m14 14 2 2" />
    </>
  ),
  history_edu: (
    <>
      <path d="M5 19c4-2 10-2 14 0V5c-4-2-10-2-14 0v14Z" />
      <path d="M12 5v12" />
    </>
  ),
  home_work: (
    <>
      <path d="M3 20h18" />
      <path d="M5 20V9l7-5 7 5v11" />
      <path d="M9 20v-6h6v6" />
    </>
  ),
  hotel: (
    <>
      <path d="M4 20V5" />
      <path d="M20 20V9" />
      <path d="M4 12h16" />
      <path d="M7 12V8h4v4" />
    </>
  ),
  icecream: (
    <>
      <path d="M8 9a4 4 0 1 1 8 0v1H8V9Z" />
      <path d="M9 10h6l-3 11-3-11Z" />
    </>
  ),
  inventory_2: (
    <>
      <path d="M4 8h16v12H4V8Z" />
      <path d="M7 4h10l3 4H4l3-4Z" />
      <path d="M9 12h6" />
    </>
  ),
  kitchen: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 17h6" />
    </>
  ),
  language: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2 2 3 5 3 8s-1 6-3 8" />
      <path d="M12 4c-2 2-3 5-3 8s1 6 3 8" />
    </>
  ),
  liquor: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v5l-3 4v9h10v-9l-3-4V3" />
      <path d="M8 14h8" />
    </>
  ),
  local_mall: (
    <>
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </>
  ),
  local_shipping: (
    <>
      <path d="M3 7h11v9H3V7Z" />
      <path d="M14 10h4l3 3v3h-7v-6Z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  location_on: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="m4 8 8 6 8-6" />
    </>
  ),
  manufacturing: (
    <>
      <path d="M4 20V9l5 3V9l5 3V6h4v14H4Z" />
      <path d="M7 16h2" />
      <path d="M12 16h2" />
      <path d="M17 16h1" />
    </>
  ),
  north_east: (
    <>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </>
  ),
  open_in_new: (
    <>
      <path d="M14 5h5v5" />
      <path d="m10 14 9-9" />
      <path d="M19 14v5H5V5h5" />
    </>
  ),
  package_2: (
    <>
      <path d="M4 8 12 4l8 4-8 4-8-4Z" />
      <path d="M4 8v8l8 4 8-4V8" />
      <path d="M12 12v8" />
    </>
  ),
  palette: (
    <>
      <path d="M12 4a8 8 0 0 0 0 16h2a2 2 0 0 0 0-4h-1a2 2 0 0 1 0-4h2a3 3 0 0 0 0-6 8 8 0 0 0-3-2Z" />
      <circle cx="8" cy="10" r="1" />
      <circle cx="10" cy="7" r="1" />
    </>
  ),
  precision_manufacturing: (
    <>
      <path d="M4 20V9l5 3V9l5 3V6h4v14H4Z" />
      <path d="M7 16h2" />
      <path d="M12 16h2" />
      <path d="M17 16h1" />
    </>
  ),
  public: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2 2 3 5 3 8s-1 6-3 8" />
      <path d="M12 4c-2 2-3 5-3 8s1 6 3 8" />
    </>
  ),
  restaurant: (
    <>
      <path d="M7 3v8" />
      <path d="M5 3v4" />
      <path d="M9 3v4" />
      <path d="M7 11v10" />
      <path d="M17 3v18" />
      <path d="M14 3c0 5 1 8 3 8" />
    </>
  ),
  restaurant_menu: (
    <>
      <path d="M7 3v8" />
      <path d="M5 3v4" />
      <path d="M9 3v4" />
      <path d="M7 11v10" />
      <path d="M17 3v18" />
      <path d="M14 3c0 5 1 8 3 8" />
    </>
  ),
  sanitizer: (
    <>
      <path d="M9 4h6" />
      <path d="M10 4v4h4V4" />
      <path d="M8 8h8v13H8V8Z" />
      <path d="M10 14h4" />
    </>
  ),
  schedule: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
    </>
  ),
  security: (
    <>
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  sell: (
    <>
      <path d="M4 12 12 4h7v7l-8 8-7-7Z" />
      <circle cx="16" cy="8" r="1" />
    </>
  ),
  settings_input_component: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 9h8" />
      <path d="M8 15h8" />
      <circle cx="10" cy="9" r="1.5" />
      <circle cx="14" cy="15" r="1.5" />
    </>
  ),
  settings_suggest: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <path d="m5.6 5.6 2.1 2.1" />
      <path d="m16.3 16.3 2.1 2.1" />
      <path d="m18.4 5.6-2.1 2.1" />
      <path d="m7.7 16.3-2.1 2.1" />
    </>
  ),
  speed: (
    <>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="m12 15 4-5" />
      <path d="M8 17h8" />
    </>
  ),
  storefront: (
    <>
      <path d="M5 10h14l-1-5H6l-1 5Z" />
      <path d="M6 10v10h12V10" />
      <path d="M9 20v-5h6v5" />
    </>
  ),
  support_agent: (
    <>
      <circle cx="12" cy="9" r="4" />
      <path d="M5 20a7 7 0 0 1 14 0" />
      <path d="M4 12v2a2 2 0 0 0 2 2h1" />
      <path d="M20 12v2a2 2 0 0 1-2 2h-1" />
    </>
  ),
  swap_horiz: (
    <>
      <path d="M7 7h12" />
      <path d="m15 3 4 4-4 4" />
      <path d="M17 17H5" />
      <path d="m9 13-4 4 4 4" />
    </>
  ),
  terminal: (
    <>
      <path d="m5 7 5 5-5 5" />
      <path d="M12 17h7" />
    </>
  ),
  texture: (
    <>
      <path d="M4 20 20 4" />
      <path d="M4 12 12 4" />
      <path d="M12 20 20 12" />
    </>
  ),
  tune: (
    <>
      <path d="M4 7h10" />
      <path d="M18 7h2" />
      <circle cx="16" cy="7" r="2" />
      <path d="M4 17h2" />
      <path d="M10 17h10" />
      <circle cx="8" cy="17" r="2" />
    </>
  ),
  verified: (
    <>
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  verified_user: (
    <>
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  water_drop: (
    <>
      <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />
    </>
  ),
  widgets: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </>
  ),
}

const iconAliases: Record<string, string> = {
  fact_check: 'fact_check',
  home_work: 'home_work',
  inventory: 'inventory_2',
  manufacturing: 'factory',
  precision_manufacturing: 'factory',
}

export function MaterialIcon({
  name,
  icon,
  className,
  style,
  size,
  lineHeight,
}: MaterialIconProps) {
  const glyph = icon ?? name ?? ''
  const iconNode = iconDefinitions[glyph] ?? iconDefinitions[iconAliases[glyph]] ?? iconDefinitions.widgets

  return (
    <span
      aria-hidden="true"
      data-icon={glyph}
      className={`material-symbols-outlined ${className ?? ''}`.trim()}
      style={{
        ...(size ? { fontSize: `${size}px` } : null),
        ...(lineHeight ? { lineHeight: `${lineHeight}px` } : null),
        ...style,
      }}
    >
      <svg
        aria-hidden="true"
        className="material-icon-svg"
        focusable="false"
        viewBox="0 0 24 24"
      >
        {iconNode}
      </svg>
    </span>
  )
}
