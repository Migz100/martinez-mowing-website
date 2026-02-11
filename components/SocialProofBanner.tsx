'use client'

import { usePathname } from 'next/navigation'
import { FaStar, FaCheckCircle } from 'react-icons/fa'
import StatCounter from './StatCounter'

export default function SocialProofBanner() {
  const pathname = usePathname()
  const isSpanish = pathname.startsWith('/es')

  return (
    <div className="bg-white border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
          {/* Years Experience */}
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-3xl text-primary flex-shrink-0" />
            <div>
              <p className="text-2xl font-bold text-primary">
                <StatCounter end={8} suffix="+" />
              </p>
              <p className="text-sm text-gray-600">
                {isSpanish ? 'Años de Experiencia' : 'Years Experience'}
              </p>
            </div>
          </div>

          {/* Community Badge */}
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-3xl text-primary flex-shrink-0" />
            <div>
              <p className="text-lg font-bold text-charcoal">
                {isSpanish
                  ? 'Confianza en Toda la Cuenca de Columbia'
                  : 'Trusted Across the Columbia Basin'}
              </p>
              <p className="text-sm text-gray-600">
                {isSpanish ? 'Desde 2021' : 'Since 2021'}
              </p>
            </div>
          </div>

          {/* Review Stars Placeholder */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-xl text-accent" />
              ))}
            </div>
            <div>
              <p className="text-sm text-gray-600">
                {isSpanish
                  ? '[Reseñas de Google Próximamente]'
                  : '[Google Reviews Coming Soon]'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
