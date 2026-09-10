import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import { SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site"

const title = "About Haritha Saviya (හරිත සවිය) — Agro Park in Mirahawaththa"
const description =
  "Learn about Haritha Saviya Agro Park in Mirahawaththa, Bandarawela — nursery plants, seeds, greenhouse gardening, ~10 acres of upcountry vegetables and ~50,000 sq ft of polytunnels."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title,
    description:
      "Nursery plants, seeds, and greenhouse gardening at Haritha Saviya Agro Park in Bandarawela. Visitors welcome.",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: "/about/img_01.jpg",
        width: 1200,
        height: 630,
        alt: "Greenhouse at Haritha Saviya Agro Park in Mirahawaththa, Bandarawela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Nursery plants, seeds, and greenhouse gardening at Haritha Saviya Agro Park in Bandarawela. Visitors welcome.",
    images: ["/about/img_01.jpg"],
  },
}

export default function AboutPage() {
  return (
    <div>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <section className="hero-shell-short">
        <Image
          src="/about/img_01.jpg"
          alt="Greenhouse and nursery growing at Haritha Saviya Agro Park, Mirahawaththa, Bandarawela"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-fade-in"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden />
        <div className="hero-grain absolute inset-0" aria-hidden />
        <div className="hero-content">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-rise font-display text-[2rem] font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
              {SITE_NAME}
            </h1>
            <p className="animate-rise-delay mx-auto mt-3 max-w-2xl text-base text-white/90 sm:mt-4 sm:text-lg">
              An agro park in Mirahawaththa, Bandarawela — nursery plants, seeds, and greenhouse gardening in the
              highlands.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad section-mint">
        <div className="section-container reveal-section">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">Our story</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">
              Growing in the highlands
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              <p>
                Haritha Saviya Agro Park sits at Wavegodawaththa, Mirahawaththa, in Bandarawela. It is a working farm
                focused on nursery plants, seeds, and home and greenhouse gardening — the same work we share on
                Facebook and TikTok.
              </p>
              <p>
                The park covers around 10 acres of upcountry vegetables, with about 50,000 square feet of polytunnels
                and greenhouses for protected growing.
              </p>
              <p>
                Visitors are welcome today. Call or WhatsApp before you come so we can receive you. Official guided
                tours and an on-site catalog are coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-secondary">
        <div className="section-container section-pad">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-16">
            <div className="reveal-section rounded-lg border border-primary/20 bg-card p-5 shadow-sm sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Land</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">Sustainability</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We grow in the Bandarawela highlands with care for the land, using protected agriculture alongside
                open-field crops.
              </p>
            </div>
            <div className="reveal-section rounded-lg border border-sun/30 bg-card p-5 shadow-sm sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground/70">Craft</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">Quality</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Plants, seeds, and greenhouse growing are the heart of the park. We keep that work simple, honest, and
                close to the soil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band text-primary-foreground">
        <div className="section-container section-pad text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl md:text-4xl">Plan a visit</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/85 sm:mt-4 sm:text-lg">
            We would like to show you the park. Get in touch to arrange a time.
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
        </div>
      </section>
    </div>
  )
}
