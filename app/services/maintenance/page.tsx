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
  title: 'Property Maintenance & Lawn Care Desert Aire WA',
  description:
    'Year-round property maintenance for Desert Aire & Mattawa. Weekly mowing, spring cleanup, fall leaf removal, HOA compliance. Licensed GC #MARTIMM744B1. $300-700/mo.',
  keywords: [
    'property maintenance Desert Aire',
    'lawn care Mattawa WA',
    'lawn mowing service Columbia Basin',
    'HOA lawn maintenance',
    'yard maintenance near me',
  ],
  openGraph: {
    title: 'Property Maintenance & Lawn Care | Martinez Mowing & More LLC',
    description:
      'Year-round lawn and property maintenance for Desert Aire homeowners. Weekly mowing, cleanup, HOA compliance.',
    url: 'https://martinezmowingandmore.com/services/maintenance',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Maintenance & Lawn Care Desert Aire WA',
    description:
      'Year-round maintenance for Desert Aire homeowners. Weekly mowing, cleanup, HOA compliance.',
  },
  alternates: {
    canonical: 'https://martinezmowingandmore.com/services/maintenance',
  },
}

export default function Maintenance() {
  const breadcrumbItems = [
    { name: 'Services', url: '/services' },
    { name: 'Maintenance' },
  ]

  const included = [
    'Weekly/bi-weekly mowing',
    'Edging/trimming/blowing',
    'Spring cleanup',
    'Fall leaf removal',
    'Sprinkler winterization',
    'On-call for HOA compliance',
  ]

  return (
    <>
      <StructuredData
        data={[
          createServiceSchema(
            'Property Maintenance & Lawn Care',
            'Year-round lawn and property maintenance for Desert Aire. Weekly/bi-weekly mowing, spring cleanup, fall leaf removal, and HOA compliance. $300-700/month.',
            'maintenance'
          ),
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://martinezmowingandmore.com' },
            { name: 'Services', url: 'https://martinezmowingandmore.com/services' },
            { name: 'Maintenance' },
          ]),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Year-Round Maintenance So You Can Actually Enjoy Your Property"
        subtitle="You bought in Desert Aire to enjoy the lifestyle—not to spend your weekends edging, blowing, and trimming."
        compact
        backgroundImage="/images/maintenance.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Enjoy Your Weekends Again
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You bought in Desert Aire to enjoy the lifestyle—not to spend
                your weekends edging, blowing, and trimming.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our maintenance plans keep your property looking sharp
                year-round, stay on top of HOA requirements, and give you back
                your free time.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-6">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Monthly Investment
                </h3>
                <p className="text-2xl font-bold text-primary mb-1">
                  $300-700/month
                </p>
                <p className="text-gray-600">
                  Flexible schedules to fit your needs
                </p>
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/maintenance.jpg"
                alt="Lawn mowing in progress"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">
                What's Included
              </h3>
              <ul className="space-y-4 mb-8">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/maintenance.jpg"
                alt="Perfectly maintained property"
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
              Maintenance Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need weekly visits during peak season or year-round
              comprehensive care, we'll customize a plan that fits your property
              and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/maintenance.jpg"
                alt="Spring cleanup work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/maintenance.jpg"
                alt="Summer lawn maintenance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/maintenance.jpg"
                alt="Fall leaf removal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Stop Spending Your Weekends on Yard Work"
        subtitle="Every Saturday spent mowing, edging, and blowing is a Saturday you could be on the golf course, at the marina, or with your family. Reclaim your time. Let us handle the yard."
      />
    </>
  )
}
