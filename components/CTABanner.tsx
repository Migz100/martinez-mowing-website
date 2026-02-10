import Link from 'next/link'

interface CTABannerProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}

export default function CTABanner({
  title = 'Ready to Get Started?',
  subtitle = "Let's transform your outdoor space. Request a free quote today—no pressure, no pushy sales tactics.",
  ctaText = 'Request Your Free Quote',
  ctaLink = '/contact',
}: CTABannerProps) {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={ctaLink}
            className="bg-accent text-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
          >
            {ctaText}
          </Link>
          <a
            href="tel:5099321924"
            className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
          >
            Call (509) 932-1924
          </a>
        </div>
      </div>
    </section>
  )
}
