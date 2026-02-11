'use client'

import Link from 'next/link'
import Image from 'next/image'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  icon: IconType
  href: string
  price?: string
  image?: string
  learnMoreText?: string
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  price,
  image,
  learnMoreText = 'Learn More',
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-100 hover:border-primary/30"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          {image ? (
            <>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </>
          ) : (
            <div className="h-full image-placeholder-gradient flex items-center justify-center">
              <Icon className="text-5xl text-white/80 group-hover:scale-110 transition-transform duration-300" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
          {price && (
            <p className="text-sm font-semibold text-accent mb-3">{price}</p>
          )}
          <span className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
            {learnMoreText}
            <span className="inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </span>
        </div>
      </motion.div>
    </Link>
  )
}
