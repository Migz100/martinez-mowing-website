import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  secondaryCta?: ReactNode
  compact?: boolean
  backgroundImage?: string
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = 'Request Your Free Quote',
  ctaLink = '/contact',
  secondaryCta,
  compact = false,
  backgroundImage = '/images/hero-landscaping.jpg',
}: HeroSectionProps) {
  return (
    <section className="relative w-full">
      {/* Background Image with Dark Overlay */}
      <div className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Martinez Mowing & More - Professional Landscaping"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`${
              compact ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl lg:text-6xl'
            } font-bold text-white mb-8 leading-tight`}
          >
            {title}
          </h1>
          
          {/* Improved subtitle spacing */}
          <p className="text-base md:text-lg text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={ctaLink}
              className="bg-accent text-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
            >
              {ctaText}
            </Link>
            {secondaryCta && secondaryCta}
          </div>
        </div>
      </div>
    </section>
  )
}
