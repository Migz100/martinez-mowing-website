import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import StructuredData, { createBreadcrumbSchema } from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Our Work - Landscaping & Fencing Projects Columbia Basin WA',
  description:
    'View our portfolio of completed landscaping, fencing, and outdoor projects across the Columbia Basin — Desert Aire, Tri-Cities, Moses Lake & Mattawa. Licensed GC #MARTIMM744B1.',
  keywords: [
    'landscaping portfolio Columbia Basin',
    'fence projects Mattawa WA',
    'outdoor projects Tri-Cities',
    'landscaping photos Desert Aire',
    'contractor gallery Moses Lake',
    'Pasco landscaping projects',
  ],
  openGraph: {
    title: 'Our Work - Landscaping Projects | Martinez Mowing & More LLC',
    description:
      'View our portfolio of completed landscaping, fencing, and outdoor projects across the Columbia Basin.',
    url: 'https://martinez-mowing-website.vercel.app/gallery',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work - Landscaping Projects Columbia Basin WA',
    description:
      'View our portfolio of completed projects across the Columbia Basin. Licensed GC.',
  },
  alternates: {
    canonical: 'https://martinez-mowing-website.vercel.app/gallery',
  },
}

export default function Gallery() {
  const breadcrumbItems = [{ name: 'Gallery' }]

  // Gallery images
  const galleryImages = [
    { src: '/images/fences.jpg', alt: 'Completed fence project' },
    { src: '/images/backyard.jpg', alt: 'Beautiful landscaped backyard' },
    { src: '/images/outdoor-structures.jpg', alt: 'Custom deck installation' },
    { src: '/images/retaining-walls.jpg', alt: 'Retaining wall construction' },
    { src: '/images/plants-sod.jpg', alt: 'Landscape with new plants' },
    { src: '/images/outdoor-structures.jpg', alt: 'Pergola with outdoor seating' },
    { src: '/images/irrigation.jpg', alt: 'Irrigation system installation' },
    { src: '/images/maintenance.jpg', alt: 'Property maintenance results' },
    { src: '/images/retaining-walls.jpg', alt: 'Stone retaining wall detail' },
    { src: '/images/plants-sod.jpg', alt: 'Sod installation progress' },
    { src: '/images/outdoor-structures.jpg', alt: 'Patio cover project' },
    { src: '/images/irrigation.jpg', alt: 'Drainage system with decorative rock' },
  ]

  return (
    <>
      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://martinez-mowing-website.vercel.app' },
          { name: 'Gallery' },
        ])}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Our Work Speaks for Itself"
        subtitle="See the quality and craftsmanship that homeowners trust across the Columbia Basin — from Desert Aire to Tri-Cities."
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
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
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
            after transformations, and landscaping tips for Columbia Basin living.
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
