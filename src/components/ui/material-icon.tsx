import type { CSSProperties } from 'react'

type MaterialIconProps = {
  name?: string
  icon?: string
  className?: string
  style?: CSSProperties
  size?: number
  lineHeight?: number
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
      {glyph}
    </span>
  )
}
