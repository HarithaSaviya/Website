import type { Metadata } from "next"
import { ContactForm } from "./contact-form"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import { SITE_URL } from "@/lib/site"

const title = "Contact / Visit Haritha Saviya Agro Park Bandarawela"
const description =
  "Contact Haritha Saviya Agro Park in Bandarawela. Call or WhatsApp +94 77 069 1990, email harithasaviya.org@gmail.com — Wavegodawaththa, Mirahawaththa."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title,
    description:
      "Arrange a visit to Haritha Saviya Agro Park. Phone +94 77 069 1990 — Mirahawaththa, Bandarawela.",
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: "/home/home_img.jpg",
        width: 1200,
        height: 630,
        alt: "Haritha Saviya Agro Park in Bandarawela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Arrange a visit to Haritha Saviya Agro Park. Phone +94 77 069 1990 — Mirahawaththa, Bandarawela.",
    images: ["/home/home_img.jpg"],
  },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <ContactForm />
    </>
  )
}
