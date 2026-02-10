'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navLinks: { href: string; label: string }[]
}

export default function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />

          {/* Slide-out Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col p-6 space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-xl font-bold text-primary">Menu</h2>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="text-lg font-medium text-charcoal hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <a
                  href="tel:5099321924"
                  className="flex items-center gap-3 text-primary font-semibold text-lg"
                >
                  <FaPhone />
                  (509) 932-1924
                </a>
                <a
                  href="mailto:Martinezmowingandmorellc@gmail.com"
                  className="flex items-center gap-3 text-primary font-medium text-sm break-all"
                >
                  <FaEnvelope />
                  Email Us
                </a>
              </div>

              <Link
                href="/contact"
                onClick={onClose}
                className="mt-4 bg-primary text-white text-center px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Request Free Quote
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
