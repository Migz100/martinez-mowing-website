import Link from 'next/link'
import { FaPhone } from 'react-icons/fa'
import {
  HiOutlineViewGrid,
  HiOutlineColorSwatch,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineHome,
  HiOutlineBeaker,
} from 'react-icons/hi'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import TrustBadges from '@/components/TrustBadges'
import CTABanner from '@/components/CTABanner'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export default function Home() {
  const services = [
    {
      title: 'Fences',
      description:
        'Custom wood, vinyl, and composite fencing designed for Desert Aire\'s wind, sun, and HOA standards.',
      icon: HiOutlineViewGrid,
      href: '/services/fences',
      price: 'Starting at $8,000',
    },
    {
      title: 'Plants & Sod',
      description:
        'Lush, green landscapes that thrive in the Columbia Basin climate with resort-quality results.',
      icon: HiOutlineColorSwatch,
      href: '/services/plants-sod',
      price: 'Starting at $6,000',
    },
    {
      title: 'Property Maintenance',
      description:
        'Year-round maintenance so you can enjoy your property without spending weekends on yard work.',
      icon: HiOutlineCog,
      href: '/services/maintenance',
      price: '$300-700/month',
    },
    {
      title: 'Retaining Walls',
      description:
        'Structural solutions that solve erosion issues while adding beauty and value to your landscape.',
      icon: HiOutlineCube,
      href: '/services/retaining-walls',
    },
    {
      title: 'Decks/Pergolas/Outdoor Structures',
      description:
        'Custom outdoor structures that extend your living space and make your backyard a destination.',
      icon: HiOutlineHome,
      href: '/services/outdoor-structures',
    },
    {
      title: 'Irrigation & Drainage',
      description:
        'Smart irrigation systems that save water and keep everything green through Desert Aire summers.',
      icon: HiOutlineBeaker,
      href: '/services/irrigation',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="The Contractor Your Desert Aire Neighbors Already Trust"
        subtitle="Premium fences, professional landscaping, and worry-free maintenance for golf course living. We know the HOA standards, the soil, and exactly what thrives here."
        secondaryCta={
          <a
            href="tel:5099321924"
            className="flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
          >
            <FaPhone />
            Call (509) 932-1924
          </a>
        }
      />

      {/* Services Overview */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From custom fences to complete landscape transformations, we bring
              20+ years of expertise to every Desert Aire project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* About Preview */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ImagePlaceholder
              text="[Owner Photo - Daniel Martinez on job site]"
              height="h-96"
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Built on Reputation, Driven by Craftsmanship
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hi, I'm Daniel Martinez, and I've been building outdoor spaces in
                the Columbia Basin for over 20 years. I started Martinez Mowing &
                More in 2021 because I saw too many homeowners—especially here in
                Desert Aire—getting burned by contractors who overpromised,
                underdelivered, or disappeared halfway through a job.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I wanted to build something different. A company where your
                project gets done right, on time, and with the kind of attention
                to detail that makes you excited to show it off to your neighbors.
              </p>
              <Link
                href="/about"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  )
}
