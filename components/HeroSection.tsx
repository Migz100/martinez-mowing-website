import Link from 'next/link'
import { ReactNode } from 'react'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  secondaryCta?: ReactNode
  compact?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = 'Request Your Free Quote',
  ctaLink = '/contact',
  secondaryCta,
  compact = false,
}: HeroSectionProps) {
  return (
    <section className="relative w-full">
      {/* Background Placeholder with Gradient Overlay */}
      <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 image-placeholder-gradient flex items-center justify-center">
          <p className="text-white/40 text-sm md:text-base font-medium text-center px-4">
            [Hero Background Image - Full Width Landscape]
          </p>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`${
              compact ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl lg:text-6xl'
            } font-bold text-white mb-6 leading-tight`}
          >
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
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
