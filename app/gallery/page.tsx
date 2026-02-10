import type { Metadata } from 'next'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import CTABanner from '@/components/CTABanner'
import StructuredData, { createBreadcrumbSchema } from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Our Work - Landscaping Projects Desert Aire | Martinez Mowing & More',
  description:
    'View our portfolio of completed landscaping, fencing, and outdoor structure projects in Desert Aire & Mattawa, WA. Licensed GC #MARTIMM744B1. See what we can do for you.',
  keywords: [
    'landscaping portfolio Desert Aire',
    'fence projects Mattawa WA',
    'outdoor projects Columbia Basin',
    'landscaping photos Desert Aire',
    'contractor gallery',
  ],
  openGraph: {
    title: 'Our Work - Landscaping Projects | Martinez Mowing & More LLC',
    description:
      'View our portfolio of completed landscaping, fencing, and outdoor projects in Desert Aire & Mattawa.',
    url: 'https://martinezmowingandmore.com/gallery',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work - Landscaping Projects Desert Aire',
    description:
      'View our portfolio of completed projects in Desert Aire & Mattawa. Licensed GC.',
  },
  alternates: {
    canonical: 'https://martinezmowingandmore.com/gallery',
  },
}

export default function Gallery() {
  const breadcrumbItems = [{ name: 'Gallery' }]

  // Create 12 placeholder grid items
  const placeholders = [
    'Completed fence project',
    'Before/After lawn transformation',
    'Custom deck installation',
    'Retaining wall construction',
    'Landscape with new plants',
    'Pergola with outdoor seating',
    'Irrigation system installation',
    'Property maintenance results',
    'Stone retaining wall detail',
    'Sod installation progress',
    'Patio cover project',
    'French drain with decorative rock',
  ]

  return (
    <>
      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://martinezmowingandmore.com' },
          { name: 'Gallery' },
        ])}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Our Work Speaks for Itself"
        subtitle="See the quality and craftsmanship that makes Desert Aire homeowners trust us with their outdoor spaces."
        compact
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Project Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Project photos coming soon! In the meantime, check out our work on
              Instagram.
            </p>
            <a
              href="https://www.instagram.com/martinezmowing_morellc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              <FaInstagram className="text-2xl" />
              Follow Us on Instagram
            </a>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholders.map((text, index) => (
              <ImagePlaceholder
                key={index}
                text={`[${text}]`}
                height="h-64"
                className="rounded-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">
            See Our Latest Work
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Follow us on Instagram for real-time project updates, before &
            after transformations, and landscaping tips for Desert Aire living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/martinezmowing_morellc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              <FaInstagram className="text-2xl" />
              @martinezmowing_morellc
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg"
            >
              Request Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Create Your Own Before & After?"
        subtitle="Let's transform your outdoor space into something you'll be proud to show off."
      />
    </>
  )
}
