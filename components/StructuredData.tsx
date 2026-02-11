const BASE_URL = 'https://martinez-mowing-website.vercel.app'

// Default export: renders one or more JSON-LD schemas
export default function StructuredData({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[]
}) {
  const schemas = Array.isArray(data) ? data : [data]
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

// --- Pre-built schema objects ---

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Martinez Mowing & More LLC',
  description:
    'Premium landscaping, fences, property maintenance, and outdoor construction across the Columbia Basin — Desert Aire, Tri-Cities, Moses Lake, Othello, WA. Licensed General Contractor #MARTIMM744B1. 8+ years experience. Bilingual service.',
  url: BASE_URL,
  telephone: '+15099321924',
  email: 'Martinezmowingandmorellc@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mattawa',
    addressRegion: 'WA',
    postalCode: '99349',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.7365,
    longitude: -119.9025,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Desert Aire',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
    {
      '@type': 'City',
      name: 'Mattawa',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
    {
      '@type': 'City',
      name: 'Pasco',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
    {
      '@type': 'City',
      name: 'Kennewick',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
    {
      '@type': 'City',
      name: 'Richland',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
    {
      '@type': 'City',
      name: 'Moses Lake',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
    {
      '@type': 'City',
      name: 'Othello',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
  ],
  foundingDate: '2021',
  founder: { '@type': 'Person', name: 'Daniel Martinez' },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'General Contractor License',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Washington State Department of Labor & Industries',
    },
    name: 'GC #MARTIMM744B1',
  },
  sameAs: [
    'https://instagram.com/martinezmowing_morellc',
    'https://www.facebook.com/p/Martinez-Mowing-More-LLC-61556589667169/',
  ],
  priceRange: '$$-$$$',
  openingHours: 'Mo-Sa 07:00-18:00',
  knowsLanguage: ['en', 'es'],
}

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Martinez Mowing & More LLC',
  url: BASE_URL,
}

// --- Factory functions ---

export function createServiceSchema(
  name: string,
  description: string,
  serviceType: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'GeneralContractor',
      name: 'Martinez Mowing & More LLC',
      telephone: '+15099321924',
    },
    areaServed: [
      { '@type': 'City', name: 'Desert Aire' },
      { '@type': 'City', name: 'Mattawa' },
      { '@type': 'City', name: 'Pasco' },
      { '@type': 'City', name: 'Kennewick' },
      { '@type': 'City', name: 'Richland' },
      { '@type': 'City', name: 'Moses Lake' },
      { '@type': 'City', name: 'Othello' },
    ],
    serviceType,
  }
}

export function createFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function createBreadcrumbSchema(
  items: { name: string; url?: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  }
}

// Named component exports for layout.tsx
export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}

export function WebSiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
    />
  )
}
