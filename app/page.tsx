import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParkGallery } from "@/components/park-gallery"
import { Facebook } from "lucide-react"
import {
  ADDRESS_SHORT,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  FACEBOOK_URL,
  SITE_NAME,
  SITE_URL,
  TAGLINE,
  TIKTOK_URL,
  WHATSAPP_URL,
} from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: DEFAULT_TITLE,
  },
  description:
    "හරිත සවිය — Haritha Saviya Agro Park in Bandarawela. Nursery plants, seeds, and greenhouse gardening at Wavegodawaththa, Mirahawaththa. Visit or WhatsApp to arrange.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description:
      "Nursery plants, seeds, and greenhouse gardening in Bandarawela. Visitors welcome at Haritha Saviya Agro Park.",
    url: SITE_URL,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description:
      "Nursery plants, seeds, and greenhouse gardening in Bandarawela. Visitors welcome at Haritha Saviya Agro Park.",
    images: [DEFAULT_OG_IMAGE.url],
  },
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.83 2.83 0 0 1-2.83 2.83 2.83 2.83 0 0 1-2.83-2.83 2.83 2.83 0 0 1 2.83-2.83c.2 0 .39.02.57.06V9.4a6.27 6.27 0 0 0-.57-.03 6.28 6.28 0 0 0-6.28 6.28 6.28 6.28 0 0 0 6.28 6.28 6.28 6.28 0 0 0 6.28-6.28V8.7a8.27 8.27 0 0 0 4.77 1.52V6.77a4.85 4.85 0 0 1-1-.08z" />
    </svg>
  )
}

export default function HomePage() {
  return (
    <div>
      <section className="hero-shell">
        <Image
          src="/home/home_img.jpg"
          alt="Nursery plants and greenhouse at Haritha Saviya Agro Park, Bandarawela"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-fade-in"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden />
        <div className="hero-grain absolute inset-0" aria-hidden />
        <div className="hero-content">
          <div className="max-w-2xl">
            <h1 className="animate-rise font-display text-[2rem] font-semibold leading-[1.15] text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              {SITE_NAME} Agro Park
            </h1>
            <p className="animate-rise-delay mt-3 max-w-xl text-base text-white/90 sm:mt-4 sm:text-lg md:text-xl">
              Nursery plants, seeds, and greenhouse gardening in the Bandarawela highlands. Visitors welcome.
            </p>
            <p className="animate-rise-delay mt-2 text-xs font-medium uppercase tracking-[0.14em] text-sun sm:text-sm sm:tracking-[0.2em]">
              {TAGLINE}
            </p>
            <div className="animate-rise-delay mt-6 sm:mt-8">
              <Button
                asChild
                size="lg"
                className="btn-mobile-block h-12 bg-sun text-accent-foreground shadow-md shadow-sun/30 hover:bg-sun/90"
              >
                <Link href="/contact">Visit / get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-mint">
        <div className="section-container reveal-section">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">Welcome</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">
              At the park
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
              A working farm you can visit today. Official tours and a catalog are on the way.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-2 lg:items-center lg:gap-16">
            <ParkGallery />
            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                  Nursery &amp; greenhouse
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Nursery plants, seeds, and protected growing — including about 50,000 sq ft of polytunnels and
                  greenhouses, with around 10 acres of upcountry vegetables.
                </p>
              </div>
              <div className="border-l-4 border-sun pl-4">
                <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">Visit us</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Call or WhatsApp to arrange a visit — we are in Mirahawaththa, Bandarawela.
                </p>
              </div>
              <div className="border-l-4 border-sage pl-4">
                <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">Coming soon</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Guided farm tours and an on-site catalog. Details and prices will be shared when they are ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden cta-band text-primary-foreground">
        <div className="section-container section-pad relative text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl md:text-4xl">Come and see the farm</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/85 sm:mt-4 sm:text-lg">
            {ADDRESS_SHORT}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button
              asChild
              size="lg"
              className="btn-mobile-block h-12 bg-sun text-accent-foreground shadow-md shadow-sun/25 hover:bg-sun/90"
            >
              <Link href="/contact">Contact us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-mobile-block h-12 border-sun/50 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-sun/90 sm:mt-10 sm:gap-6">
            <span className="w-full text-primary-foreground/80 sm:w-auto">Follow us</span>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 px-2 transition-colors hover:text-sun"
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 px-2 transition-colors hover:text-sun"
            >
              <TikTokIcon className="h-4 w-4" />
              TikTok
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
