import React from 'react'

interface StructuredDataProps {
  data: Record<string, any> | Record<string, any>[]
}

/**
 * Renders JSON-LD structured data in a script tag for SEO
 * Supports single schema objects or arrays of schemas
 */
export default function StructuredData({ data }: StructuredDataProps) {
  const schemaArray = Array.isArray(data) ? data : [data]

  return (
    <>
      {schemaArray.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

/**
 * LocalBusiness schema for Martinez Mowing & More LLC
 * Use this site-wide in layout.tsx
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Martinez Mowing & More LLC',
  description:
    'Premium landscaping, fences, property maintenance, and outdoor construction for Desert Aire and Mattawa, WA. Licensed General Contractor #MARTIMM744B1.',
  url: 'https://martinezmowingandmore.com',
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
  ],
  foundingDate: '2021',
  founder: {
    '@type': 'Person',
    name: 'Daniel Martinez',
  },
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
  image: 'https://martinezmowingandmore.com/og-image.jpg',
  knowsLanguage: ['en', 'es'],
}

/**
 * WebSite schema - use on homepage only
 */
export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Martinez Mowing & More LLC',
  url: 'https://martinezmowingandmore.com',
}

/**
 * Generate Service schema for service pages
 */
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
    },
    areaServed: 'Desert Aire, Mattawa, WA',
    serviceType,
  }
}

/**
 * Generate FAQPage schema
 */
export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
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

/**
 * Generate BreadcrumbList schema
 */
export function createBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  }
}
