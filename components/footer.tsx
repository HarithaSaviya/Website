import Link from "next/link"
import { Leaf, Facebook, Mail, Phone, MapPin } from "lucide-react"
import {
  ADDRESS_SHORT,
  EMAIL,
  EMAIL_MAILTO,
  FACEBOOK_URL,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
  SITE_NAME_SI,
  TAGLINE,
  TIKTOK_URL,
} from "@/lib/site"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.83 2.83 0 0 1-2.83 2.83 2.83 2.83 0 0 1-2.83-2.83 2.83 2.83 0 0 1 2.83-2.83c.2 0 .39.02.57.06V9.4a6.27 6.27 0 0 0-.57-.03 6.28 6.28 0 0 0-6.28 6.28 6.28 6.28 0 0 0 6.28 6.28 6.28 6.28 0 0 0 6.28-6.28V8.7a8.27 8.27 0 0 0 4.77 1.52V6.77a4.85 4.85 0 0 1-1-.08z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="cta-band pb-[4.5rem] text-primary-foreground sm:pb-0">
      <div className="section-container section-pad !py-14 md:!py-16">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-sun" aria-hidden />
              <span className="font-sinhala text-lg font-semibold">{SITE_NAME_SI}</span>
            </div>
            <p className="mb-2 font-display text-sm text-sun">{TAGLINE}</p>
            <p className="mb-5 text-sm leading-relaxed text-primary-foreground/75">
              Nursery plants, seeds, and greenhouse gardening in Bandarawela.
            </p>
            <div className="flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SITE_NAME} on Facebook`}
                className="rounded-md p-2 text-primary-foreground/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SITE_NAME} on TikTok`}
                className="rounded-md p-2 text-primary-foreground/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-base font-semibold">Explore</h2>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-display text-base font-semibold">At the park</h2>
            <ul className="space-y-2.5 text-sm text-primary-foreground/75">
              <li>Nursery plants &amp; seeds</li>
              <li>Greenhouse gardening</li>
              <li>Guided tours — coming soon</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-display text-base font-semibold">Contact</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-sun" aria-hidden />
                <a href={PHONE_TEL} className="text-primary-foreground/75 transition-colors hover:text-sun">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden />
                <a
                  href={EMAIL_MAILTO}
                  className="break-all text-primary-foreground/75 transition-colors hover:text-sun"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden />
                <span className="text-primary-foreground/75">{ADDRESS_SHORT}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-primary-foreground/60 sm:mt-12 sm:pt-8 pb-4 sm:pb-0">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
