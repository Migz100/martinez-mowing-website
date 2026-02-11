import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landscaping & Outdoor Services Columbia Basin WA | Desert Aire, Tri-Cities, Moses Lake',
  description:
    'Premium landscaping services across the Columbia Basin: custom fences, sod installation, property maintenance, retaining walls, decks, irrigation. Serving Desert Aire, Tri-Cities, Moses Lake & Othello. Licensed GC #MARTIMM744B1. (509) 932-1924.',
  keywords: [
    'landscaping services Columbia Basin',
    'outdoor services Mattawa WA',
    'fence installation Tri-Cities',
    'lawn maintenance Desert Aire',
    'irrigation services Moses Lake',
    'retaining wall contractor Pasco',
    'landscaping Kennewick',
    'Richland outdoor contractor',
  ],
  openGraph: {
    title: 'Landscaping & Outdoor Services | Martinez Mowing & More LLC',
    description:
      'Premium fences, landscaping, maintenance & outdoor construction across the Columbia Basin. Licensed GC. 8+ years experience.',
    url: 'https://martinez-mowing-website.vercel.app/services',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landscaping & Outdoor Services Columbia Basin WA',
    description:
      'Premium fences, landscaping, maintenance & outdoor construction. Serving Desert Aire to Tri-Cities. Licensed GC.',
  },
  alternates: {
    canonical: 'https://martinez-mowing-website.vercel.app/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
