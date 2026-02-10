import type { Metadata } from 'next'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import CTABanner from '@/components/CTABanner'
import StructuredData, {
  createServiceSchema,
  createBreadcrumbSchema,
} from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Custom Decks & Pergolas Desert Aire WA',
  description:
    'Custom outdoor structures for Desert Aire & Mattawa: decks, pergolas, patio covers, gazebos. Cedar, composite, Trex. Licensed GC #MARTIMM744B1. Free quotes.',
  keywords: [
    'custom deck builder Desert Aire',
    'pergola installation Mattawa WA',
    'patio cover contractor Columbia Basin',
    'gazebo builder',
    'outdoor structure contractor',
  ],
  openGraph: {
    title: 'Custom Decks & Outdoor Structures | Martinez Mowing & More LLC',
    description:
      'Custom decks, pergolas, and outdoor structures that extend your living space. Licensed GC. Free estimates.',
    url: 'https://martinezmowingandmore.com/services/outdoor-structures',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Decks & Pergolas Desert Aire WA',
    description:
      'Custom outdoor structures: decks, pergolas, patio covers. Cedar, composite, Trex. Licensed GC.',
  },
  alternates: {
    canonical: 'https://martinezmowingandmore.com/services/outdoor-structures',
  },
}

export default function OutdoorStructures() {
  const breadcrumbItems = [
    { name: 'Services', url: '/services' },
    { name: 'Outdoor Structures' },
  ]

  const specialties = [
    'Custom Decks (cedar, composite, Trex)',
    'Pergolas',
    'Patio Covers',
    'Gazebos',
  ]

  return (
    <>
      <StructuredData
        data={[
          createServiceSchema(
            'Custom Outdoor Structures',
            'Custom decks, pergolas, patio covers, and gazebos that extend your living space. Cedar, composite, and Trex options.',
            'construction'
          ),
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://martinezmowingandmore.com' },
            { name: 'Services', url: 'https://martinezmowingandmore.com/services' },
            { name: 'Outdoor Structures' },
          ]),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Custom Outdoor Structures That Extend Your Living Space"
        subtitle="Your backyard should feel like a destination—not an afterthought."
        compact
        backgroundImage="/images/outdoor-structures.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Make Your Backyard a Destination
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your backyard should feel like a destination—not an afterthought.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether it's a custom deck for entertaining, a pergola to frame
                your outdoor dining area, or a gazebo to create shade by the
                pool, we build outdoor structures that are as functional as they
                are beautiful.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Built to Code, Built to Last
                </h3>
                <p className="text-gray-700">
                  Every structure is engineered, permitted, and constructed to
                  exceed local building codes and HOA requirements.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">
                Our Specialties
              </h3>
              <ul className="space-y-4 mb-8">
                {specialties.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <ImagePlaceholder
                text="[Custom deck with pergola]"
                height="h-64"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Design Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From simple shade structures to complete outdoor living spaces, we
              bring your vision to life with quality materials and expert
              craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ImagePlaceholder
              text="[Deck example - cedar or composite]"
              height="h-64"
              className="rounded-xl"
            />
            <ImagePlaceholder
              text="[Pergola example]"
              height="h-64"
              className="rounded-xl"
            />
            <ImagePlaceholder
              text="[Patio cover or gazebo]"
              height="h-64"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Extend Your Living Space?"
        subtitle="Let's design an outdoor structure that fits your lifestyle, your property, and your vision."
      />
    </>
  )
}
