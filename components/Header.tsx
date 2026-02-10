'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'
import MobileNav from './MobileNav'
import TrustBadgeRow from './TrustBadgeRow'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
    { href: '/es', label: 'Español' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <TrustBadgeRow />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                Martinez Mowing & More
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-charcoal hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:5099321924"
                className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                <FaPhone className="text-sm" />
                (509) 932-1924
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal hover:text-primary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  )
}
