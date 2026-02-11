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
  title: 'Retaining Wall Contractor Columbia Basin WA | Desert Aire, Tri-Cities, Moses Lake',
  description:
    'Professional retaining wall construction across the Columbia Basin — Desert Aire, Pasco, Kennewick, Moses Lake. Erosion control, sloped yards. Allan Block, natural stone, timber. Licensed GC #MARTIMM744B1.',
  keywords: [
    'retaining wall contractor Columbia Basin',
    'retaining wall installation Mattawa WA',
    'erosion control Tri-Cities',
    'Allan Block walls Pasco',
    'landscape wall contractor Desert Aire',
    'retaining wall Moses Lake',
    'Kennewick retaining walls',
  ],
  openGraph: {
    title: 'Retaining Wall Construction | Martinez Mowing & More LLC',
    description:
      'Professional retaining wall construction across the Columbia Basin. Sloped yards, erosion control. Licensed GC. Free estimates.',
    url: 'https://martinez-mowing-website.vercel.app/services/retaining-walls',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retaining Wall Contractor Columbia Basin WA',
    description:
      'Professional retaining walls — Desert Aire to Tri-Cities. Allan Block, stone, timber. Licensed GC.',
  },
  alternates: {
    canonical: 'https://martinez-mowing-website.vercel.app/services/retaining-walls',
  },
}

export default function RetainingWalls() {
  const breadcrumbItems = [
    { name: 'Services', url: '/services' },
    { name: 'Retaining Walls' },
  ]

  const deliver = [
    'Structural engineering (walls over 4\')',
    'Proper drainage',
    'Material options (Allan Block, natural stone, timber)',
    'Grading and backfill',
    'Permit coordination',
  ]

  return (
    <>
      <StructuredData
        data={[
          createServiceSchema(
            'Retaining Wall Construction',
            'Professional retaining wall construction for sloped yards and erosion control. Allan Block, natural stone, and timber options.',
            'construction'
          ),
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://martinez-mowing-website.vercel.app' },
            { name: 'Services', url: 'https://martinez-mowing-website.vercel.app/services' },
            { name: 'Retaining Walls' },
          ]),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Retaining Walls That Solve Problems and Add Value"
        subtitle="Sloped yards, erosion issues, and unusable spaces—retaining walls fix them all while adding structure and beauty to your landscape."
        compact
        backgroundImage="/images/retaining-walls.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Function Meets Beauty
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sloped yards, erosion issues, and unusable spaces—retaining walls
                fix them all while adding structure and beauty to your landscape.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether you need a simple timber wall to create planting beds or
                an engineered block system to stabilize a steep grade, we handle
                the engineering, permits, and construction. From Desert Aire
                hillsides to Richland properties — we build walls that last.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Licensed & Engineered
                </h3>
                <p className="text-gray-700">
                  As a licensed general contractor (GC #MARTIMM744B1), we handle
                  all structural engineering for walls over 4 feet and coordinate
                  permits with local authorities.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">
                What We Deliver
              </h3>
              <ul className="space-y-4 mb-8">
                {deliver.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/retaining-walls.jpg"
                alt="Completed retaining wall with landscaping"
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
              Material Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From classic Allan Block to natural stone and timber, we'll help
              you choose the right material for your budget, style, and site
              conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/retaining-walls.jpg"
                alt="Allan Block retaining wall"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/retaining-walls.jpg"
                alt="Natural stone wall"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/retaining-walls.jpg"
                alt="Timber retaining wall"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Got a Slope or Drainage Problem?"
        subtitle="Let's assess your site and design a retaining wall solution that's engineered right and built to last."
      />
    </>
  )
}
