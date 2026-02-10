import type { Metadata } from 'next'
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
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Services | Martinez Mowing & More LLC',
  description:
    'Fences, landscaping, property maintenance, retaining walls, outdoor structures, and irrigation services for Desert Aire and Mattawa, WA.',
}

export default function Services() {
  const services = [
    {
      title: 'Fences',
      description:
        'Custom wood, vinyl, and composite fencing designed specifically for Desert Aire\'s wind, sun, and HOA standards. Average investment: $8,000.',
      icon: HiOutlineViewGrid,
      href: '/services/fences',
      price: 'Avg. $8,000 | 3-5 days',
    },
    {
      title: 'Plants & Sod',
      description:
        'Lush, green landscapes that thrive in the Columbia Basin. We know which sod varieties handle the heat and which plants survive the wind. Average investment: $6,000.',
      icon: HiOutlineColorSwatch,
      href: '/services/plants-sod',
      price: 'Avg. $6,000 | 1-3 days',
    },
    {
      title: 'Property Maintenance',
      description:
        'Year-round mowing, edging, trimming, spring cleanup, fall leaf removal, and sprinkler winterization. Enjoy your weekends again.',
      icon: HiOutlineCog,
      href: '/services/maintenance',
      price: '$300-700/month',
    },
    {
      title: 'Retaining Walls',
      description:
        'Structural solutions for sloped yards, erosion control, and creating usable outdoor space. Allan Block, natural stone, and timber options.',
      icon: HiOutlineCube,
      href: '/services/retaining-walls',
    },
    {
      title: 'Decks, Pergolas & Outdoor Structures',
      description:
        'Custom decks (cedar, composite, Trex), pergolas, patio covers, and gazebos that extend your living space and make your backyard a destination.',
      icon: HiOutlineHome,
      href: '/services/outdoor-structures',
    },
    {
      title: 'Irrigation & Drainage',
      description:
        'New system design and installation, repairs, seasonal blowouts, French drains, and drainage solutions to keep everything green.',
      icon: HiOutlineBeaker,
      href: '/services/irrigation',
    },
  ]

  return (
    <>
      <HeroSection
        title="Premium Services for Desert Aire Living"
        subtitle="From fences to full landscapes, we bring 20+ years of Columbia Basin expertise to every project."
        compact
      />

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every service is backed by our commitment to quality, clear
              communication, and the kind of craftsmanship that makes your
              neighbors ask who did the work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Service You Need?"
        subtitle="Let's talk about your project. We'll walk you through options, provide honest recommendations, and give you a clear quote."
      />
    </>
  )
}
