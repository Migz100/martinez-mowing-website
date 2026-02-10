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
  title: 'Irrigation Installation & Repair Desert Aire WA',
  description:
    'Professional irrigation systems for Desert Aire & Mattawa. New installation, repairs, seasonal blowouts, French drains. Licensed GC #MARTIMM744B1. Free quotes.',
  keywords: [
    'irrigation installation Desert Aire',
    'irrigation repair Mattawa WA',
    'sprinkler system Columbia Basin',
    'French drain installation',
    'drainage solutions',
  ],
  openGraph: {
    title: 'Irrigation Installation & Repair | Martinez Mowing & More LLC',
    description:
      'Smart irrigation systems, repairs, seasonal blowouts, and drainage solutions for Desert Aire properties.',
    url: 'https://martinezmowingandmore.com/services/irrigation',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irrigation Installation & Repair Desert Aire WA',
    description:
      'Smart irrigation systems, repairs, French drains, drainage solutions. Licensed GC.',
  },
  alternates: {
    canonical: 'https://martinezmowingandmore.com/services/irrigation',
  },
}

export default function Irrigation() {
  const breadcrumbItems = [
    { name: 'Services', url: '/services' },
    { name: 'Irrigation' },
  ]

  const services = [
    'New System Design & Installation',
    'System Repairs',
    'Seasonal Blowouts',
    'French Drains',
    'Gravel & Rock Work',
  ]

  return (
    <>
      <StructuredData
        data={[
          createServiceSchema(
            'Irrigation & Drainage Solutions',
            'Smart irrigation systems, repairs, seasonal blowouts, French drains, and drainage solutions for Desert Aire properties.',
            'irrigation'
          ),
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://martinezmowingandmore.com' },
            { name: 'Services', url: 'https://martinezmowingandmore.com/services' },
            { name: 'Irrigation' },
          ]),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Smart Irrigation That Saves Water and Keeps Everything Green"
        subtitle="Desert Aire's climate means irrigation isn't optional—it's essential."
        compact
        backgroundImage="/images/irrigation.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Essential for Desert Aire Living
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Desert Aire's climate means irrigation isn't optional—it's
                essential.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether you need a new system designed from scratch, repairs to
                an existing setup, or seasonal maintenance to protect your
                investment, we know how to keep water flowing efficiently and
                your landscape thriving.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Water Efficiency Matters
                </h3>
                <p className="text-gray-700">
                  We design systems that deliver water where it's needed—saving
                  you money on water bills while keeping your lawn green.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">
                Our Services
              </h3>
              <ul className="space-y-4 mb-8">
                {services.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <ImagePlaceholder
                text="[Irrigation system installation or sprinklers running]"
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
              Drainage Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Standing water, erosion, and soggy lawns don't just look bad—they
              damage your property. We install French drains and grading
              solutions that keep water flowing where it should.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ImagePlaceholder
              text="[Irrigation system closeup]"
              height="h-64"
              className="rounded-xl"
            />
            <ImagePlaceholder
              text="[French drain installation]"
              height="h-64"
              className="rounded-xl"
            />
            <ImagePlaceholder
              text="[Drainage with decorative rock]"
              height="h-64"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Irrigation or Drainage Help?"
        subtitle="Let's assess your property and design a system that keeps everything green without wasting water."
      />
    </>
  )
}
