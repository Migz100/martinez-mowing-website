import type { Metadata } from 'next'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import CTABanner from '@/components/CTABanner'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Plants & Sod | Martinez Mowing & More LLC',
  description:
    'Lush, green landscapes that thrive in the Columbia Basin. Expert plant selection and premium sod installation. Average $6,000, completed in 1-3 days.',
}

export default function PlantsSod() {
  const faqs = [
    {
      question: 'What type of sod works best in Desert Aire?',
      answer:
        'For Desert Aire\'s hot summers and cold winters, we typically recommend Kentucky bluegrass blends or tall fescue. Both handle the climate well with proper irrigation. We\'ll assess your sun exposure and water access to recommend the best fit.',
    },
    {
      question: 'When is the best time to install sod?',
      answer:
        'Spring (April-May) and fall (September-October) are ideal for sod installation in the Columbia Basin. We can install year-round, but these seasons give new sod the best chance to establish before temperature extremes.',
    },
    {
      question: 'How long before I can use my new lawn?',
      answer:
        'You can walk on new sod after 2 weeks. Light use (kids playing) is fine after 3-4 weeks. Full use (sports, heavy traffic) should wait 6-8 weeks until roots are fully established.',
    },
  ]

  const approach = [
    'Site Analysis',
    'Smart Plant Selection',
    'Premium Sod',
    'Irrigation Integration',
    'Seasonal Timing',
  ]

  return (
    <>
      <HeroSection
        title="Lush, Green Landscapes That Thrive in the Columbia Basin"
        subtitle="Desert Aire's climate is beautiful—but it's tough on lawns and plants. We've spent two decades figuring out exactly what works here."
        compact
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Built to Thrive Here
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Desert Aire's climate is beautiful—but it's tough on lawns and
                plants. We've spent two decades figuring out exactly what works
                here: which sod varieties handle the heat, which plants survive
                the wind, and how to design landscapes that look resort-quality
                without needing resort-level maintenance.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-6">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Average Investment
                </h3>
                <p className="text-2xl font-bold text-primary mb-1">$6,000</p>
                <p className="text-gray-600">Most installs completed in 1-3 days</p>
              </div>

              <ImagePlaceholder
                text="[Fresh sod installation in progress]"
                height="h-64"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">
                Our Approach
              </h3>
              <ul className="space-y-4 mb-8">
                {approach.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <ImagePlaceholder
                text="[Completed landscaping with plants and sod]"
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
              text="[Before: bare yard]"
              height="h-64"
              className="rounded-xl"
            />
            <ImagePlaceholder
              text="[During: sod being laid]"
              height="h-64"
              className="rounded-xl"
            />
            <ImagePlaceholder
              text="[After: lush green lawn]"
              height="h-64"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion faqs={faqs} title="Landscaping Questions" />

      {/* Related Services */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center text-charcoal mb-8">
            Complete Your Outdoor Transformation
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services/irrigation"
              className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow font-semibold text-primary"
            >
              Irrigation Systems
            </Link>
            <Link
              href="/services/maintenance"
              className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow font-semibold text-primary"
            >
              Maintenance Plans
            </Link>
            <Link
              href="/services/fences"
              className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow font-semibold text-primary"
            >
              Fencing
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Stop Wasting Money on a Lawn That Won't Grow"
        subtitle="Every summer you spend fighting brown patches and bare spots is money and time down the drain. Let's install a lawn that actually thrives in Desert Aire's climate."
      />
    </>
  )
}
