import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import { SITE_URL, WHATSAPP_URL } from "@/lib/site"

const title = "Smart Agriculture & Greenhouse Automation"
const description =
  "IoT-powered irrigation, climate control, and remote monitoring for greenhouses — solutions from Haritha Saviya Agro Park, Bandarawela."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/automation" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/automation`,
    images: [
      {
        url: "/automation/img_01.jpg",
        width: 1200,
        height: 630,
        alt: "Smart greenhouse automation at Haritha Saviya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/automation/img_01.jpg"],
  },
}

const features = [
  {
    title: "Smart irrigation",
    description: "Automated watering based on soil moisture and weather conditions.",
  },
  {
    title: "Climate control",
    description: "Maintain optimal temperature and humidity for your crops.",
  },
  {
    title: "Ventilation",
    description: "Automatic fan control for proper air circulation.",
  },
  {
    title: "Remote monitoring",
    description: "Control and monitor your greenhouse from anywhere.",
  },
  {
    title: "Data analytics",
    description: "Track growth patterns and optimize farming decisions.",
  },
  {
    title: "Custom automation",
    description: "Set personalized schedules and thresholds for your zones.",
  },
]

const packages = [
  {
    name: "Basic IoT",
    features: [
      "Soil moisture sensors (4×)",
      "Temperature & humidity sensor",
      "Basic irrigation control",
      "Mobile app access",
      "Email alerts",
    ],
    popular: false,
  },
  {
    name: "Advanced IoT",
    features: [
      "All Basic features",
      "Weather station integration",
      "Advanced climate control",
      "Automated ventilation",
      "Data analytics dashboard",
      "24/7 support",
    ],
    popular: true,
  },
  {
    name: "Professional IoT",
    features: [
      "All Advanced features",
      "AI-powered recommendations",
      "Multi-zone control",
      "Integration with existing systems",
      "Custom automation rules",
      "On-site installation & training",
    ],
    popular: false,
  },
]

const steps = [
  { title: "Installation", body: "Sensors and control systems installed in your greenhouse." },
  { title: "Configuration", body: "Automation rules and thresholds tuned for your crops." },
  { title: "Monitor", body: "Real-time data through the mobile app and web dashboard." },
  { title: "Optimize", body: "Data-driven decisions to improve yield and quality." },
]

export default function AutomationPage() {
  return (
    <div>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Automation", path: "/automation" },
        ]}
      />

      <section className="relative isolate min-h-[min(75vh,40rem)] overflow-hidden text-white">
        <Image
          src="/automation/img_01.jpg"
          alt="IoT agriculture monitoring for greenhouse growing"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-fade-in"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden />
        <div className="hero-grain absolute inset-0" aria-hidden />
        <div className="section-container relative flex min-h-[min(75vh,40rem)] flex-col justify-end pb-14 pt-28 md:pb-20">
          <div className="max-w-2xl">
            <h1 className="animate-rise font-display text-4xl font-semibold md:text-5xl lg:text-6xl">
              Smart agriculture solutions
            </h1>
            <p className="animate-rise-delay mt-4 max-w-xl text-lg text-white/85">
              Monitor, control, and optimize greenhouse operations with IoT-powered automation.
            </p>
            <div className="animate-rise-delay mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-forest hover:bg-white/90">
                <Link href="#packages">View packages</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/contact">Get consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="section-container reveal-section">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">System features</h2>
            <p className="mt-4 text-lg text-muted-foreground">Comprehensive automation for modern farming.</p>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title}>
                <h3 className="font-display text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="section-container section-pad">
          <h2 className="text-center font-display text-3xl font-semibold md:text-4xl">How it works</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="text-center md:text-left">
                <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="packages" className="section-pad bg-background scroll-mt-24">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">IoT packages</h2>
            <p className="mt-4 text-lg text-muted-foreground">Choose the solution that fits your farm.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col rounded-lg border bg-card p-6 ${
                  pkg.popular ? "border-primary shadow-md ring-1 ring-primary/20" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <span className="mb-3 w-fit rounded-md bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold">{pkg.name}</h3>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm text-muted-foreground">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/contact">Get quote</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest text-primary-foreground">
        <div className="section-container section-pad text-center">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Ready to modernize your farm?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Get a free consultation and see how IoT can transform your agriculture.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-forest hover:bg-white/90">
              <Link href="/contact">Schedule consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
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
