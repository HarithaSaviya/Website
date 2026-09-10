export const SITE_URL = "https://harithasaviya.lk"

export const SITE_NAME = "Haritha Saviya"
export const SITE_NAME_SI = "හරිත සවිය"
export const TAGLINE = "Growing Smart, Growing Green"

export const PHONE_DISPLAY = "+94 77 069 1990"
export const PHONE_E164 = "+94770691990"
export const PHONE_TEL = "tel:+94770691990"
export const EMAIL = "harithasaviya.org@gmail.com"
export const EMAIL_MAILTO = "mailto:harithasaviya.org@gmail.com"

export const WHATSAPP_URL = "https://wa.me/94770691990"
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61577944934212"
export const TIKTOK_URL = "https://www.tiktok.com/@haritha.saviya"

export const ADDRESS_LINES = [
  "Haritha Saviya Agro Park",
  "Wavegodawaththa",
  "Mirahawaththa",
  "Bandarawela, Sri Lanka",
] as const

export const ADDRESS_SHORT = "Wavegodawaththa, Mirahawaththa, Bandarawela"

export const GEO = {
  latitude: 6.860501801480223,
  longitude: 80.93594578376342,
} as const

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.250922701186!2d80.93594578376342!3d6.860501801480223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae47b2927e605cb%3A0x30c275fe2e8713e3!2sHaritha%20Saviya%20Agro%20Park!5e0!3m2!1sen!2slk!4v1751636891400!5m2!1sen!2slk"

/** Public marketing navigation. */
export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const

/** Routes included in sitemap (live marketing pages only). */
export const INDEXABLE_ROUTES = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.9 },
] as const

export const DEFAULT_OG_IMAGE = {
  url: "/home/home_img.jpg",
  width: 1200,
  height: 630,
  alt: "Haritha Saviya Agro Park greenhouse in Bandarawela",
} as const

export const DEFAULT_DESCRIPTION =
  "හරිත සවිය — Haritha Saviya Agro Park in Bandarawela. Nursery plants, seeds, and home and greenhouse gardening in Mirahawaththa. Visitors welcome."

export const DEFAULT_TITLE = "Haritha Saviya Agro Park Bandarawela | Nursery Plants & Greenhouse"

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}
