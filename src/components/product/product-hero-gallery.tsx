'use client'
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react'

import { MaterialIcon } from '@/components/ui/material-icon'

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
  const hiddenGalleryPreviewImage = galleryImages[heroGalleryPreview.length] ?? null
  const hiddenGalleryCount = Math.max(galleryImages.length - heroGalleryPreview.length, 0)
  const [activeImage, setActiveImage] = useState<HeroImage | null>(primaryImage)
  const [isGalleryDialogOpen, setIsGalleryDialogOpen] = useState(false)
  const activeGalleryIndex = galleryImages.findIndex((image) => image.url === activeImage?.url)
  const isHiddenGalleryImageActive =
    activeGalleryIndex >= heroGalleryPreview.length && activeGalleryIndex !== -1

  useEffect(() => {
    if (!isGalleryDialogOpen) {
      return
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsGalleryDialogOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isGalleryDialogOpen])

  function handleGallerySelection(image: GalleryImage) {
    setActiveImage(image)
    setIsGalleryDialogOpen(false)
  }

  return (
    <>
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
              className={`overflow-hidden rounded-lg border-2 bg-[#ecefe7] text-left transition-colors duration-200 ${
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
          <button
            type="button"
            aria-label={`Open ${hiddenGalleryCount} more gallery images`}
            aria-haspopup="dialog"
            aria-expanded={isGalleryDialogOpen}
            onClick={() => setIsGalleryDialogOpen(true)}
            className={`relative overflow-hidden rounded-lg border-2 px-4 text-center transition-colors duration-200 ${
              isHiddenGalleryImageActive
                ? 'border-[#4e616e] bg-[#e6ebe3] shadow-[0_0_0_1px_rgba(78,97,110,0.24)]'
                : 'border-transparent bg-[#ecefe7] hover:border-[#2e342d]'
            }`}
          >
            {hiddenGalleryPreviewImage ? (
              <img
                src={hiddenGalleryPreviewImage.url}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />
            ) : null}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,245,0.72)_0%,rgba(238,241,232,0.88)_100%)]"
            />
            <span className="relative z-10 flex h-full min-h-[140px] items-center justify-center font-sans text-[18px] font-bold uppercase tracking-[0.16em] text-[#4e616e] sm:min-h-[153px]">
              +{hiddenGalleryCount} View
            </span>
          </button>
        ) : (
          null
        )}
      </div>

      {isGalleryDialogOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f2626]/60 px-4 py-8 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-gallery-dialog-title"
          onClick={() => setIsGalleryDialogOpen(false)}
        >
          <div
            className="w-full max-w-[1040px] overflow-hidden rounded-[24px] bg-[#fafaf5] shadow-[0_24px_80px_rgba(20,29,28,0.24)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#dde2d8] px-6 py-5 sm:px-8">
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#77584e]">
                  Product gallery
                </p>
                <h3
                  id="product-gallery-dialog-title"
                  className="mt-2 font-headline text-[30px] font-bold italic leading-[32px] text-[#2e342d]"
                >
                  Select another view
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close gallery"
                onClick={() => setIsGalleryDialogOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9dbd0] bg-white text-[#4e616e] transition-colors duration-200 hover:border-[#4e616e] hover:text-[#2e342d]"
              >
                <MaterialIcon icon="close" size={20} lineHeight={20} />
              </button>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
              {galleryImages.map((image, index) => {
                const isActive = activeImage?.url === image.url
                return (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => handleGallerySelection(image)}
                    className={`overflow-hidden rounded-[18px] border bg-[#ecefe7] text-left transition-colors duration-200 ${
                      isActive
                        ? 'border-[#4e616e] shadow-[0_0_0_1px_rgba(78,97,110,0.24)]'
                        : 'border-transparent hover:border-[#2e342d]'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="flex items-center justify-between px-4 py-3">
                      <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#77584e]">
                        Gallery {index + 1}
                      </span>
                      {isActive ? (
                        <span className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#4e616e]">
                          Active
                        </span>
                      ) : null}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
