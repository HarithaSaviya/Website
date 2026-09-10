import {
  DEFAULT_DESCRIPTION,
  EMAIL,
  FACEBOOK_URL,
  GEO,
  PHONE_E164,
  SITE_NAME,
  SITE_NAME_SI,
  SITE_URL,
  TIKTOK_URL,
} from "@/lib/site"

const farmSchema = {
  "@context": "https://schema.org",
  "@type": "Farm",
  name: SITE_NAME,
  alternateName: SITE_NAME_SI,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  telephone: PHONE_E164,
  email: EMAIL,
  image: [`${SITE_URL}/home/home_img.jpg`, `${SITE_URL}/about/img_01.jpg`, `${SITE_URL}/logo2.png`],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wavegodawaththa, Mirahawaththa",
    addressLocality: "Bandarawela",
    addressRegion: "Uva",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  sameAs: [FACEBOOK_URL, TIKTOK_URL],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: SITE_NAME_SI,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
}

export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [farmSchema, websiteSchema],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  )
}

type Crumb = { name: string; path: string }

export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path}`,
    })),
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}
