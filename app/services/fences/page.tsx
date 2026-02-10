import type { Metadata } from 'next'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import CTABanner from '@/components/CTABanner'
import FAQAccordion from '@/components/FAQAccordion'
import StructuredData, {
  createServiceSchema,
  createBreadcrumbSchema,
  createFAQSchema,
} from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Custom Fence Installation Desert Aire & Mattawa WA',
  description:
    'Professional fence installation in Desert Aire & Mattawa. Cedar, vinyl & composite. HOA-compliant. Licensed GC #MARTIMM744B1. Free quotes. (509) 932-1924.',
  keywords: [
    'fence installation Desert Aire',
    'fence contractor Mattawa WA',
    'custom fences Columbia Basin',
    'HOA fence Desert Aire',
    'vinyl fence installer near me',
    'cedar fence contractor',
  ],
  openGraph: {
    title: 'Custom Fence Installation | Martinez Mowing & More LLC',
    description:
      'Professional fence installation for Desert Aire & Mattawa homeowners. Cedar, vinyl & composite. Licensed GC. Free estimates.',
    url: 'https://martinezmowingandmore.com/services/fences',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Fence Installation Desert Aire | Martinez Mowing & More',
    description:
      'Professional fence installation. Cedar, vinyl & composite. Licensed GC. Free quotes.',
  },
  alternates: {
    canonical: 'https://martinezmowingandmore.com/services/fences',
  },
}

export default function Fences() {
  const breadcrumbItems = [
    { name: 'Services', url: '/services' },
    { name: 'Fences' },
  ]

  const faqs = [
    {
      question: 'What fence materials do you recommend for Desert Aire?',
      answer:
        'For Desert Aire\'s wind and sun exposure, we typically recommend composite or vinyl for durability with minimal maintenance, or cedar for a natural look. We\'ll assess your specific needs during the free estimate.',
    },
    {
      question: 'Do you handle HOA approval?',
      answer:
        'Yes. We know Desert Aire\'s HOA fence requirements and can help you navigate the approval process to ensure your fence meets community standards.',
    },
    {
      question: 'How long will my fence last?',
      answer:
        'With proper installation and our concrete footings, vinyl and composite fences last 20-30+ years with minimal maintenance. Cedar fences last 15-20 years with proper sealing.',
    },
    {
      question: 'Can you match my existing fence style?',
      answer:
        'Absolutely. We can match styles, colors, and heights to blend seamlessly with existing fencing or create a completely custom design.',
    },
  ]

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
      <StructuredData
        data={[
          createServiceSchema(
            'Custom Fence Installation',
            'Professional wood, vinyl, and composite fencing designed for Desert Aire wind, sun, and HOA standards. Average $8,000, completed in 3-5 days.',
            'fencing'
          ),
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://martinezmowingandmore.com' },
            { name: 'Services', url: 'https://martinezmowingandmore.com/services' },
            { name: 'Fences' },
          ]),
          createFAQSchema(faqs),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />
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

      {/* FAQs */}
      <FAQAccordion faqs={faqs} title="Common Fence Questions" />

      {/* Related Services */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center text-charcoal mb-8">
            Related Services
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services/retaining-walls"
              className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow font-semibold text-primary"
            >
              Retaining Walls
            </Link>
            <Link
              href="/services/outdoor-structures"
              className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow font-semibold text-primary"
            >
              Decks & Pergolas
            </Link>
            <Link
              href="/services/plants-sod"
              className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow font-semibold text-primary"
            >
              Landscaping
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't Let Another Summer Pass With an Incomplete Fence"
        subtitle="Your privacy, your pets, your kids—every day without a proper fence puts them at risk. Stop putting it off. Let's build you a fence that lasts decades."
      />
    </>
  )
}
