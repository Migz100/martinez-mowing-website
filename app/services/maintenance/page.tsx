import type { Metadata } from 'next'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Property Maintenance | Martinez Mowing & More LLC',
  description:
    'Year-round lawn and property maintenance for Desert Aire. Weekly/bi-weekly mowing, spring cleanup, fall leaf removal, and HOA compliance. $300-700/month.',
}

export default function Maintenance() {
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
      <HeroSection
        title="Year-Round Maintenance So You Can Actually Enjoy Your Property"
        subtitle="You bought in Desert Aire to enjoy the lifestyle—not to spend your weekends edging, blowing, and trimming."
        compact
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

              <ImagePlaceholder
                text="[Lawn mowing in progress]"
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
                text="[Perfectly maintained property]"
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
              Maintenance Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need weekly visits during peak season or year-round
              comprehensive care, we'll customize a plan that fits your property
              and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ImagePlaceholder
              text="[Spring cleanup work]"
              height="h-64"
              className="rounded-xl"
            />
            <ImagePlaceholder
              text="[Summer lawn maintenance]"
              height="h-64"
              className="rounded-xl"
            />
            <ImagePlaceholder
              text="[Fall leaf removal]"
              height="h-64"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Reclaim Your Weekends?"
        subtitle="Let's create a maintenance plan that keeps your property pristine without the hassle."
      />
    </>
  )
}
