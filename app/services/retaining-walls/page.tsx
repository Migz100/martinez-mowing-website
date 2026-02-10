import type { Metadata } from 'next'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Retaining Walls | Martinez Mowing & More LLC',
  description:
    'Professional retaining wall construction for sloped yards and erosion control. Allan Block, natural stone, and timber options. Licensed GC #MARTIMM744B1.',
}

export default function RetainingWalls() {
  const deliver = [
    'Structural engineering (walls over 4\')',
    'Proper drainage',
    'Material options (Allan Block, natural stone, timber)',
    'Grading and backfill',
    'Permit coordination',
  ]

  return (
    <>
      <HeroSection
        title="Retaining Walls That Solve Problems and Add Value"
        subtitle="Sloped yards, erosion issues, and unusable spaces—retaining walls fix them all while adding structure and beauty to your landscape."
        compact
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
                the engineering, permits, and construction so you get a wall
                that's built to last.
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

              <ImagePlaceholder
                text="[Completed retaining wall with landscaping]"
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
              Material Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From classic Allan Block to natural stone and timber, we'll help
              you choose the right material for your budget, style, and site
              conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ImagePlaceholder
              text="[Allan Block retaining wall]"
              height="h-64"
              className="rounded-xl"
            />
            <ImagePlaceholder
              text="[Natural stone wall]"
              height="h-64"
              className="rounded-xl"
            />
            <ImagePlaceholder
              text="[Timber retaining wall]"
              height="h-64"
              className="rounded-xl"
            />
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
