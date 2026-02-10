'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href={ctaLink}
            className="group bg-accent text-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg active:scale-95"
          >
            <span className="inline-flex items-center gap-2">
              {ctaText}
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </Link>
          <a
            href="tel:5099321924"
            className="group bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg active:scale-95"
          >
            <span className="inline-flex items-center gap-2">
              <span>📞</span>
              Call (509) 932-1924
            </span>
          </a>
        </motion.div>
        <p className="text-sm text-white/70 mt-6">
          Prefer to text? Send us a message at (509) 932-1924
        </p>
      </div>
    </section>
  )
}
