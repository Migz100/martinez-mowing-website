import type { Metadata } from 'next'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Custom Fences | Martinez Mowing & More LLC',
  description:
    'Custom wood, vinyl, and composite fencing designed for Desert Aire\'s wind, sun, and HOA standards. Average $8,000, completed in 3-5 days.',
}

export default function Fences() {
  const included = [
    'Custom design consultation',
    'HOA compliance review',
    'Professional-grade materials (cedar, vinyl, composite)',
    'Concrete footings for wind resistance',
    'Post-installation cleanup',
    'Workmanship warranty',
  ]

  return (
    <>
      <HeroSection
        title="Custom Fences That Frame Your Desert Aire Property Perfectly"
        subtitle="Your fence is more than a boundary—it's the first thing guests notice, the backdrop to every backyard gathering, and the foundation of your outdoor privacy."
        compact
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Built for Desert Aire
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your fence is more than a boundary—it's the first thing guests
                notice, the backdrop to every backyard gathering, and the
                foundation of your outdoor privacy. We specialize in custom wood,
                vinyl, and composite fencing designed specifically for Desert
                Aire's wind, sun, and HOA standards.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-6">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Average Investment
                </h3>
                <p className="text-2xl font-bold text-primary mb-1">$8,000</p>
                <p className="text-gray-600">Most fences completed in 3-5 days</p>
              </div>

              <ImagePlaceholder
                text="[Completed fence installation - side view]"
                height="h-64"
              />
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

              <ImagePlaceholder
                text="[Close-up of fence construction detail]"
                height="h-64"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <ImagePlaceholder
              text="[Wood fence example]"
              height="h-64"
              className="rounded-xl"
            />
            <ImagePlaceholder
              text="[Vinyl fence example]"
              height="h-64"
              className="rounded-xl"
            />
            <ImagePlaceholder
              text="[Composite fence example]"
              height="h-64"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready for a Fence That Lasts?"
        subtitle="Let's discuss your vision, measure your property, and give you a detailed quote. No pressure, no pushy sales."
      />
    </>
  )
}
