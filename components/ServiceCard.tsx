import Link from 'next/link'
import { IconType } from 'react-icons'

interface ServiceCardProps {
  title: string
  description: string
  icon: IconType
  href: string
  price?: string
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  price,
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-100 hover:border-primary/30">
        {/* Image Placeholder */}
        <div className="relative h-48 image-placeholder-gradient flex items-center justify-center">
          <Icon className="text-5xl text-white/80 group-hover:scale-110 transition-transform duration-300" />
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
            Learn More
            <span className="inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  )
}
