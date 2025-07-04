import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Haritha Saviya - Growing Smart, Growing Green",
  description:
    "Premium greenhouse vegetables, outdoor crops, nursery plants, and IoT automation systems for modern agriculture.",
  keywords: "greenhouse vegetables, nursery plants, IoT agriculture, smart farming, automation systems",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
