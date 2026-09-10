import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Shop — Catalog expanding",
  description: "Browse nursery plants and produce from Haritha Saviya. Catalog expanding — inquire via WhatsApp.",
  robots: { index: false, follow: false },
}

export default function ShopLayout({ children }: { children: ReactNode }) {
  return children
}
