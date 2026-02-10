import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Martinez Mowing & More LLC | Desert Aire Premier Landscaping',
  description: 'Premium fences, professional landscaping, and worry-free maintenance for Desert Aire & Mattawa, WA. Licensed GC #MARTIMM744B1. Over 20 years experience.',
  keywords: 'landscaping Desert Aire, fences Mattawa WA, property maintenance, irrigation, retaining walls, custom decks, HOA landscaping',
  openGraph: {
    title: 'Martinez Mowing & More LLC | Desert Aire Premier Landscaping',
    description: 'Premium fences, professional landscaping, and worry-free maintenance for golf course living.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
