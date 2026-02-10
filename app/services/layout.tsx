import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landscaping & Outdoor Services Desert Aire WA',
  description:
    'Premium landscaping services for Desert Aire & Mattawa: custom fences, sod installation, property maintenance, retaining walls, decks, irrigation. Licensed GC #MARTIMM744B1. Free quotes (509) 932-1924.',
  keywords: [
    'landscaping services Desert Aire',
    'outdoor services Mattawa WA',
    'fence installation Columbia Basin',
    'lawn maintenance Desert Aire',
    'irrigation services Mattawa',
    'retaining wall contractor',
  ],
  openGraph: {
    title: 'Landscaping & Outdoor Services | Martinez Mowing & More LLC',
    description:
      'Premium fences, landscaping, maintenance & outdoor construction for Desert Aire & Mattawa. Licensed GC. 20+ years experience.',
    url: 'https://martinezmowingandmore.com/services',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landscaping & Outdoor Services Desert Aire WA',
    description:
      'Premium fences, landscaping, maintenance & outdoor construction. Licensed GC. Free quotes.',
  },
  alternates: {
    canonical: 'https://martinezmowingandmore.com/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
