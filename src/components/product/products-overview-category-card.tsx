/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { MaterialIcon } from '@/components/ui/material-icon'
import type { ProductsOverviewCategoryCard } from '@/lib/catalog/products-overview'

type ProductsOverviewCategoryCardProps = {
  category: ProductsOverviewCategoryCard
  fallbackImageUrl: string
}

const COLLAPSED_DESCRIPTION_STYLE = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical' as const,
  WebkitLineClamp: 4,
  overflow: 'hidden',
}

export function ProductsOverviewCategoryCard({
  category,
  fallbackImageUrl,
}: ProductsOverviewCategoryCardProps) {
  const descriptionRef = useRef<HTMLParagraphElement | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isExpandable, setIsExpandable] = useState(false)

  useEffect(() => {
    const node = descriptionRef.current
    if (!node || isExpanded) {
      return
    }

    const measureOverflow = () => {
      const currentNode = descriptionRef.current
      if (!currentNode) {
        return
      }

      setIsExpandable(currentNode.scrollHeight > currentNode.clientHeight + 1)
    }

    measureOverflow()

    const resizeObserver = new ResizeObserver(() => {
      measureOverflow()
    })
    resizeObserver.observe(node)

    return () => {
      resizeObserver.disconnect()
    }
  }, [category.blurb, isExpanded])

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_18px_48px_rgba(46,52,45,0.05)] md:h-[35rem]">
      <div
        className={`overflow-hidden bg-white transition-[height] duration-300 ${
          isExpanded ? 'h-[11rem] md:h-[13rem]' : 'h-[16rem] md:h-[18rem]'
        }`}
      >
        <img
          src={category.imageUrl ?? fallbackImageUrl}
          alt={category.imageAlt ?? category.name}
          className={`h-full w-full transition-transform duration-500 hover:scale-105 ${
            isExpanded
              ? 'object-contain object-top px-4 py-3 md:px-5 md:py-4'
              : 'object-contain object-center'
          }`}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-6">
          <h3 className="font-headline text-2xl italic text-on-background">
            {category.name}
          </h3>
          <span className="rounded-full bg-surface-container-highest px-3 py-1 text-xs font-label text-secondary">
            {category.countLabel}
          </span>
        </div>

        <div className="mt-4 flex-1">
          <p
            ref={descriptionRef}
            className="text-sm leading-7 text-on-surface-variant"
            style={isExpanded ? undefined : COLLAPSED_DESCRIPTION_STYLE}
          >
            {category.blurb}
          </p>

          {isExpandable ? (
            <button
              type="button"
              onClick={() => setIsExpanded((current) => !current)}
              className="mt-3 inline-flex items-center gap-1 font-body text-[11px] font-bold uppercase tracking-[0.16em] text-primary"
            >
              <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
              <MaterialIcon
                name="expand_more"
                className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                size={18}
                lineHeight={18}
              />
            </button>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={category.href}
            className="inline-flex min-h-10 items-center justify-center rounded-md bg-primary px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-on-primary"
          >
            View Models
          </Link>
          <button
            type="button"
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-outline-variant px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-primary"
            aria-disabled="true"
          >
            Open Guide
          </button>
        </div>
      </div>
    </article>
  )
}
