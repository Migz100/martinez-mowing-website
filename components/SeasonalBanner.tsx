'use client'

import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function SeasonalBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <span className="text-xl" aria-hidden="true">
          🌱
        </span>
        <p className="text-sm md:text-base font-semibold">
          Spring 2026 Calendar Is Filling Fast — Book Your Free Estimate Today
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Dismiss banner"
        >
          <FaTimes className="text-sm" />
        </button>
      </div>
    </div>
  )
}
