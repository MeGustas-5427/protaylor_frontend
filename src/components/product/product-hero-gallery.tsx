'use client'
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'

type HeroImage = {
  url: string
  alt: string
}

type GalleryImage = HeroImage & {
  id: number
}

type ProductHeroGalleryProps = {
  primaryImage: HeroImage | null
  galleryImages: GalleryImage[]
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#eef1e8] px-6 text-center">
      <span className="font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-[#4e616e]">
        {label}
      </span>
    </div>
  )
}

export function ProductHeroGallery({
  primaryImage,
  galleryImages,
}: ProductHeroGalleryProps) {
  const heroGalleryPreview = galleryImages.slice(0, 3)
  const hiddenGalleryCount = Math.max(galleryImages.length - heroGalleryPreview.length, 0)
  const [activeImage, setActiveImage] = useState<HeroImage | null>(primaryImage)

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-7 lg:h-[600px]">
      <div className="group relative col-span-2 overflow-hidden rounded-xl bg-[#f3f4ee] sm:col-span-4 lg:row-span-3">
        {activeImage ? (
          <img
            src={activeImage.url}
            alt={activeImage.alt}
            className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[431px] lg:h-full"
          />
        ) : (
          <div className="h-[360px] sm:h-[431px] lg:h-full">
            <ImagePlaceholder label="Primary product image" />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {heroGalleryPreview.map((image) => {
        const isActive = activeImage?.url === image.url
        return (
          <button
            key={image.id}
            type="button"
            aria-label={`Show gallery image ${image.id}`}
            onClick={() => setActiveImage(image)}
            className={`overflow-hidden rounded-lg border bg-[#ecefe7] text-left transition-colors duration-200 ${
              isActive
                ? 'border-[#4e616e] shadow-[0_0_0_1px_rgba(78,97,110,0.24)]'
                : 'border-transparent hover:border-[#2e342d]'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="h-[140px] w-full object-cover sm:h-[153px]"
            />
          </button>
        )
      })}

      {hiddenGalleryCount > 0 ? (
        <div className="flex items-center justify-center rounded-lg bg-[#ecefe7] px-4 text-center">
          <span className="font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-[#4e616e]">
            +{hiddenGalleryCount} View
          </span>
        </div>
      ) : null}
    </div>
  )
}
