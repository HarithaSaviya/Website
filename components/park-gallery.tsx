"use client"

import * as React from "react"
import Image from "next/image"
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const AUTOPLAY_MS = 4500

const GALLERY_IMAGES = [
  { src: "/gallery/1.webp", alt: "Haritha Saviya Agro Park — photo 1" },
  { src: "/gallery/2.webp", alt: "Haritha Saviya Agro Park — photo 2" },
  { src: "/gallery/3.webp", alt: "Haritha Saviya Agro Park — photo 3" },
  { src: "/gallery/4.webp", alt: "Haritha Saviya Agro Park — photo 4" },
  { src: "/gallery/5.webp", alt: "Haritha Saviya Agro Park — photo 5" },
  { src: "/gallery/6.webp", alt: "Haritha Saviya Agro Park — photo 6" },
] as const

export function ParkGallery() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => setCurrent(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  React.useEffect(() => {
    if (!api || paused) return

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const id = window.setInterval(() => {
      api.scrollNext()
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [api, paused, current])

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full"
        aria-label="Park photo gallery"
      >
        <div className="relative overflow-hidden bg-muted ring-2 ring-primary/15 sm:ring-4">
          <CarouselContent className="-ml-0">
            {GALLERY_IMAGES.map((image, index) => (
              <CarouselItem key={image.src} className="pl-0 basis-full">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            variant="secondary"
            className="left-2 top-1/2 h-11 w-11 -translate-y-1/2 border-0 bg-background/80 shadow-sm backdrop-blur-sm hover:bg-background/95 disabled:opacity-40"
          />
          <CarouselNext
            variant="secondary"
            className="right-2 top-1/2 h-11 w-11 -translate-y-1/2 border-0 bg-background/80 shadow-sm backdrop-blur-sm hover:bg-background/95 disabled:opacity-40"
          />
        </div>

        <div className="mt-3 flex items-center justify-center gap-2" role="tablist" aria-label="Gallery slides">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={current === index}
              aria-label={`Go to photo ${index + 1}`}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                current === index ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}
