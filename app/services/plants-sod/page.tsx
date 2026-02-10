import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import FAQAccordion from '@/components/FAQAccordion'
import StructuredData, {
  createServiceSchema,
  createBreadcrumbSchema,
  createFAQSchema,
} from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Sod Installation & Landscaping Desert Aire WA',
  description:
    'Professional sod installation & landscape design for Desert Aire & Mattawa. Climate-adapted plants, premium sod. Licensed GC #MARTIMM744B1. Free quotes (509) 932-1924.',
  keywords: [
    'sod installation Desert Aire',
    'landscaping Mattawa WA',
    'lawn installation Columbia Basin',
    'landscape design Desert Aire',
    'sod contractor near me',
  ],
  openGraph: {
    title: 'Sod Installation & Landscaping | Martinez Mowing & More LLC',
    description:
      'Lush, green landscapes that thrive in the Columbia Basin. Expert sod installation & plant selection.',
    url: 'https://martinezmowingandmore.com/services/plants-sod',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sod Installation & Landscaping Desert Aire WA',
    description:
      'Professional sod installation & landscaping. Climate-adapted plants. Licensed GC.',
  },
  alternates: {
    canonical: 'https://martinezmowingandmore.com/services/plants-sod',
  },
}

export default function PlantsSod() {
  const breadcrumbItems = [
    { name: 'Services', url: '/services' },
    { name: 'Plants & Sod' },
  ]

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
      <StructuredData
        data={[
          createServiceSchema(
            'Sod Installation & Landscaping',
            'Professional sod installation and landscape design for Desert Aire and Mattawa. Climate-adapted plants and premium sod varieties that thrive in the Columbia Basin.',
            'landscaping'
          ),
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://martinezmowingandmore.com' },
            { name: 'Services', url: 'https://martinezmowingandmore.com/services' },
            { name: 'Plants & Sod' },
          ]),
          createFAQSchema(faqs),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Lush, Green Landscapes That Thrive in the Columbia Basin"
        subtitle="Desert Aire's climate is beautiful—but it's tough on lawns and plants. We've spent two decades figuring out exactly what works here."
        compact
        backgroundImage="/images/plants-sod.jpg"
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

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/plants-sod.jpg"
                  alt="Fresh sod installation in progress"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
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

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/backyard.jpg"
                  alt="Completed landscaping with plants and sod"
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/desert-landscape.jpg"
                alt="Before: bare yard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/plants-sod.jpg"
                alt="During: sod being laid"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/backyard.jpg"
                alt="After: lush green lawn"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
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
