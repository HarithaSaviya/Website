"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import { NAV_LINKS, SITE_NAME, SITE_NAME_SI } from "@/lib/site"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className="nav-blur sticky top-0 z-50 pt-[env(safe-area-inset-top,0px)]"
      data-scrolled={scrolled}
      aria-label="Primary"
    >
      <div className="section-container">
        <div className="flex h-14 items-center justify-between gap-3 sm:h-16 md:h-[4.25rem]">
          <Link href="/" className="flex min-w-0 items-center gap-2 group sm:gap-2.5">
            <Image
              src="/logo2.png"
              alt={`${SITE_NAME} Logo`}
              width={80}
              height={40}
              className="h-8 w-auto sm:h-9 md:h-10 transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
            <span className="hidden min-w-0 flex-col leading-tight sm:flex">
              <span className="font-sinhala truncate text-sm font-semibold text-primary">{SITE_NAME_SI}</span>
              <span className="font-display text-xs tracking-wide text-muted-foreground">{SITE_NAME}</span>
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex lg:gap-7">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Button
              asChild
              size="sm"
              className="hidden bg-primary text-primary-foreground shadow-sm shadow-primary/25 hover:bg-primary/90 sm:inline-flex"
            >
              <Link href="/contact">Visit</Link>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="h-11 w-11" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(100vw-1.5rem,20rem)] max-w-[100vw] px-5">
                <div className="mt-10 flex flex-col gap-1">
                  <p className="font-sinhala mb-4 text-lg font-semibold text-primary">{SITE_NAME_SI}</p>
                  {NAV_LINKS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="rounded-md px-3 py-3 text-base text-foreground transition-colors hover:bg-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="mt-6 h-11 w-full bg-primary shadow-sm shadow-primary/25">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Visit / get in touch
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
