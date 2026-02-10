'use client'

import { useState, useEffect } from 'react'
import { FaPhone, FaFileAlt } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white shadow-2xl border-t-2 border-primary"
        >
          <div className="flex">
            <a
              href="tel:5099321924"
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-4 font-bold hover:bg-primary/90 transition-colors active:scale-95"
            >
              <FaPhone className="text-lg" />
              <span>Call Now</span>
            </a>
            <a
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 bg-accent text-charcoal py-4 font-bold hover:bg-accent/90 transition-colors active:scale-95 border-l-2 border-white"
            >
              <FaFileAlt className="text-lg" />
              <span>Free Quote</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
