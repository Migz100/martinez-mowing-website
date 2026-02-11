import type { Metadata } from 'next'
import Image from 'next/image'
import { FaCertificate, FaMapMarkerAlt, FaUsers, FaHandshake } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import StructuredData, { createBreadcrumbSchema } from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About Daniel Martinez - Licensed Contractor Mattawa WA',
  description:
    'Meet Daniel Martinez, owner of Martinez Mowing & More. Licensed GC #MARTIMM744B1 with 8+ years experience serving Desert Aire, Mattawa, Tri-Cities & Moses Lake. Bilingual landscaping contractor you can trust.',
  keywords: [
    'Daniel Martinez contractor',
    'licensed contractor Mattawa WA',
    'Desert Aire landscaping company',
    'Tri-Cities landscaping contractor',
    'Moses Lake outdoor contractor',
    'bilingual contractor Washington',
    'general contractor Columbia Basin',
  ],
  openGraph: {
    title: 'About Daniel Martinez - Licensed Contractor | Martinez Mowing & More',
    description:
      'Licensed GC with 8+ years experience transforming Columbia Basin outdoor spaces. Serving Desert Aire, Mattawa, Tri-Cities & Moses Lake.',
    url: 'https://martinezmowingandmore.com/about',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Daniel Martinez - Licensed Contractor Mattawa WA',
    description:
      'Licensed GC #MARTIMM744B1 with 8+ years experience serving the Columbia Basin.',
  },
  alternates: {
    canonical: 'https://martinezmowingandmore.com/about',
  },
}

export default function About() {
  const breadcrumbItems = [{ name: 'About' }]

  const differentiators = [
    {
      icon: FaCertificate,
      title: 'Licensed & Insured',
      description:
        'GC #MARTIMM744B1. We pull permits, follow code, and stand behind every project.',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Columbia Basin Specialists',
      description:
        'Desert Aire experts serving the entire region. We know the HOA requirements, soil conditions, and exactly what plants thrive here.',
    },
    {
      icon: FaUsers,
      title: 'One Crew, One Standard',
      description:
        'Daniel is on every job. Same team we\'ve worked with for years.',
    },
    {
      icon: FaHandshake,
      title: 'No Surprises',
      description:
        'Clear quotes, realistic timelines, and honest communication from start to finish.',
    },
  ]

  return (
    <>
      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://martinezmowingandmore.com' },
          { name: 'About' },
        ])}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Built on Reputation, Driven by Craftsmanship"
        subtitle="Nearly a decade of turning Columbia Basin backyards into outdoor retreats homeowners are proud to show off."
        compact
        backgroundImage="/images/team-work.jpg"
      />

      {/* Main Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <div className="relative h-96 mb-8 overflow-hidden shadow-lg">
                <Image
                  src="/images/team-work.jpg"
                  alt="Portrait of Daniel Martinez"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Hi, I'm Daniel Martinez, and I've been working in landscaping across
                the Columbia Basin for 8 years.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I started Martinez Mowing & More in 2021 because I saw too many
                homeowners—especially here in Desert Aire—getting burned by
                contractors who overpromised, underdelivered, or disappeared
                halfway through a job.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I wanted to build something different. A company where your
                project gets done right, on time, and with the kind of attention
                to detail that makes you excited to show it off to your neighbors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative h-80 mb-8 overflow-hidden shadow-lg">
                <Image
                  src="/images/team-work.jpg"
                  alt="Photo of completed project or team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Whether it's a custom fence to frame your view, a new irrigation
            system to keep your lawn green through summer, or monthly maintenance
            so you can actually enjoy your weekends—we treat your property like
            it's our own.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            Let's build something you'll love coming home to.
          </p>
          <p className="text-lg text-gray-600 italic">
            — Daniel Martinez, Owner
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Work With a Contractor You Can Trust?"
        subtitle="Let's talk about your project. Free quotes, honest timelines, and quality you can count on."
      />
    </>
  )
}
