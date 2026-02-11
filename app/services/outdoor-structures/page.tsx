import type { Metadata } from 'next'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import StructuredData, {
  createServiceSchema,
  createBreadcrumbSchema,
} from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Custom Decks & Pergolas Columbia Basin WA | Desert Aire, Tri-Cities, Moses Lake',
  description:
    'Custom outdoor structures across the Columbia Basin — Desert Aire, Pasco, Kennewick, Moses Lake. Decks, pergolas, patio covers, gazebos. Cedar, composite, Trex. Licensed GC #MARTIMM744B1.',
  keywords: [
    'custom deck builder Columbia Basin',
    'pergola installation Mattawa WA',
    'patio cover contractor Tri-Cities',
    'gazebo builder Pasco',
    'outdoor structure contractor Desert Aire',
    'deck builder Kennewick',
    'pergola Moses Lake',
  ],
  openGraph: {
    title: 'Custom Decks & Outdoor Structures | Martinez Mowing & More LLC',
    description:
      'Custom decks, pergolas, and outdoor structures across the Columbia Basin. Licensed GC. Free estimates.',
    url: 'https://martinez-mowing-website.vercel.app/services/outdoor-structures',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Decks & Pergolas Columbia Basin WA',
    description:
      'Custom outdoor structures — Desert Aire to Tri-Cities. Decks, pergolas, patio covers. Licensed GC.',
  },
  alternates: {
    canonical: 'https://martinez-mowing-website.vercel.app/services/outdoor-structures',
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
            { name: 'Home', url: 'https://martinez-mowing-website.vercel.app' },
            { name: 'Services', url: 'https://martinez-mowing-website.vercel.app/services' },
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
                Whether it's a custom deck for entertaining in Pasco, a pergola
                to frame your outdoor dining in Desert Aire, or a gazebo for
                shade in Moses Lake — we build outdoor structures that are as
                functional as they are beautiful.
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

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/outdoor-structures.jpg"
                alt="Custom deck with pergola"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
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
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/outdoor-structures.jpg"
                alt="Deck example - cedar or composite"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/outdoor-structures.jpg"
                alt="Pergola example"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/outdoor-structures.jpg"
                alt="Patio cover or gazebo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
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
