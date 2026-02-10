import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SeasonalBanner from '@/components/SeasonalBanner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import { LocalBusinessSchema, WebSiteSchema } from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://martinezmowingandmore.vercel.app'),
  title: {
    default: 'Desert Aire Premier Landscaping & Outdoor Contractor | Martinez Mowing & More',
    template: '%s | Martinez Mowing & More',
  },
  description:
    'Premium landscaping, fences, property maintenance, and outdoor construction for Desert Aire and Mattawa, WA. Licensed General Contractor #MARTIMM744B1. Over 20 years experience. Bilingual service.',
  keywords: [
    'landscaping Desert Aire',
    'fences Mattawa WA',
    'property maintenance Columbia Basin',
    'irrigation Desert Aire',
    'retaining walls Mattawa',
    'custom decks Washington',
    'HOA landscaping',
    'bilingual contractor',
    'licensed general contractor WA',
  ],
  openGraph: {
    title: 'Martinez Mowing & More LLC | Desert Aire Premier Landscaping',
    description:
      'Premium fences, professional landscaping, and worry-free maintenance for Desert Aire & Mattawa homeowners. Licensed GC #MARTIMM744B1.',
    url: 'https://martinezmowingandmore.com',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Martinez Mowing & More - Premium Landscaping Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martinez Mowing & More LLC | Desert Aire Premier Landscaping',
    description:
      'Premium landscaping, fences & property maintenance for Desert Aire & Mattawa. Licensed GC. 20+ years experience.',
  },
  alternates: {
    canonical: 'https://martinezmowingandmore.com',
    languages: {
      'en-US': 'https://martinezmowingandmore.com',
      'es-US': 'https://martinezmowingandmore.com/es',
    },
  },
  other: {
    'google-site-verification': 'PLACEHOLDER',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2D5016" />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://martinezmowingandmore.com/es"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://martinezmowingandmore.com"
        />
        <LocalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body className={inter.className}>
        <SeasonalBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}
