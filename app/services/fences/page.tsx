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
  title: 'Custom Fence Installation Columbia Basin WA | Desert Aire, Tri-Cities, Moses Lake',
  description:
    'Professional fence installation across the Columbia Basin — Desert Aire, Pasco, Kennewick, Moses Lake. Cedar, vinyl & composite. HOA-compliant. Licensed GC #MARTIMM744B1. (509) 932-1924.',
  keywords: [
    'fence installation Columbia Basin',
    'fence contractor Mattawa WA',
    'custom fences Tri-Cities',
    'HOA fence Desert Aire',
    'vinyl fence installer Pasco',
    'cedar fence contractor Kennewick',
    'fence installation Moses Lake',
  ],
  openGraph: {
    title: 'Custom Fence Installation Columbia Basin | Martinez Mowing & More LLC',
    description:
      'Professional fence installation for Columbia Basin homeowners — Desert Aire, Tri-Cities, Moses Lake. Cedar, vinyl & composite. Licensed GC.',
    url: 'https://martinez-mowing-website.vercel.app/services/fences',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Fence Installation | Columbia Basin WA',
    description:
      'Professional fence installation — Desert Aire to Tri-Cities. Cedar, vinyl & composite. Licensed GC.',
  },
  alternates: {
    canonical: 'https://martinez-mowing-website.vercel.app/services/fences',
  },
}

export default function Fences() {
  const breadcrumbItems = [
    { name: 'Services', url: '/services' },
    { name: 'Fences' },
  ]

  const faqs = [
    {
      question: 'What fence materials do you recommend for the Columbia Basin?',
      answer:
        'For the wind and sun exposure we get here, we typically recommend composite or vinyl for durability with minimal maintenance, or cedar for a natural look. Material choice depends on your property, whether you\'re in Desert Aire, Kennewick, or Moses Lake — we\'ll assess during your free estimate.',
    },
    {
      question: 'Do you handle HOA approval?',
      answer:
        'Yes. We know Desert Aire\'s HOA fence requirements inside and out, and we work with HOA boards across the Columbia Basin. We handle the approval process so your fence meets all community standards.',
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
            'Professional wood, vinyl, and composite fencing built for Columbia Basin wind and sun. Serving Desert Aire, Tri-Cities, and Moses Lake. Average $8,000, completed in 3-5 days.',
            'fencing'
          ),
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://martinez-mowing-website.vercel.app' },
            { name: 'Services', url: 'https://martinez-mowing-website.vercel.app/services' },
            { name: 'Fences' },
          ]),
          createFAQSchema(faqs),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Custom Fences Built for Columbia Basin Properties"
        subtitle="From Kennewick backyards to Desert Aire HOA communities — your fence is more than a boundary. It's privacy, security, and the backdrop to every gathering."
        compact
        backgroundImage="/images/hero-fence.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Built for Columbia Basin Conditions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We specialize in custom wood, vinyl, and composite fencing
                engineered for Columbia Basin conditions — the wind, the intense
                sun, and the soil. Whether you're in Desert Aire with HOA
                requirements or a Pasco homeowner who wants privacy, we build
                fences that hold up for decades.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-6">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Average Investment
                </h3>
                <p className="text-2xl font-bold text-primary mb-1">$8,000</p>
                <p className="text-gray-600">Most fences completed in 3-5 days</p>
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/fences.jpg"
                  alt="Completed fence installation"
                  fill
                  className="object-cover"
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
                  src="/images/fences.jpg"
                  alt="Close-up of fence construction detail"
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
                src="/images/fences.jpg"
                alt="Wood fence example"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/fences.jpg"
                alt="Vinyl fence example"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/fences.jpg"
                alt="Composite fence example"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
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
