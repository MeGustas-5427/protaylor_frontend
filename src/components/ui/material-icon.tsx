import type { CSSProperties } from 'react'

type MaterialIconProps = {
  name: string
  className?: string
  style?: CSSProperties
}

export function MaterialIcon({ name, className, style }: MaterialIconProps) {
  return (
    <span
      aria-hidden="true"
      data-icon={name}
      className={`material-symbols-outlined ${className ?? ''}`}
      style={style}
    >
      {name}
    </span>
  )
}
