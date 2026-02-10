'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'
import MobileNav from './MobileNav'
import TrustBadgeRow from './TrustBadgeRow'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  // Detect if we're on Spanish version
  const isSpanish = pathname?.startsWith('/es')
  
  // Get the alternate language URL
  const getLanguageToggleUrl = () => {
    if (isSpanish) {
      // Remove /es prefix
      return pathname.replace('/es', '') || '/'
    } else {
      // Add /es prefix
      return `/es${pathname === '/' ? '' : pathname}`
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = isSpanish
    ? [
        { href: '/es', label: 'Inicio' },
        { href: '/es/sobre', label: 'Sobre Nosotros' },
        { href: '/es/servicios', label: 'Servicios' },
        { href: '/es/galeria', label: 'Galería' },
        { href: '/es/contacto', label: 'Contacto' },
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/contact', label: 'Contact' },
      ]

  return (
    <>
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
        {/* Trust Badge Row - Hidden on scroll */}
        <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'}`}>
          <TrustBadgeRow />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href={isSpanish ? '/es' : '/'} className="flex-shrink-0">
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                Martinez Mowing & More
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-charcoal hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Language Toggle - Prominent */}
              <Link
                href={getLanguageToggleUrl()}
                className="px-3 py-1.5 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-all"
              >
                {isSpanish ? 'EN' : 'ES'}
              </Link>
              
              <a
                href="tel:5099321924"
                className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 hover:scale-105 transition-all font-semibold shadow-md"
              >
                <FaPhone className="text-sm" />
                (509) 932-1924
              </a>
            </nav>

            {/* Mobile Menu Button & Language Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <Link
                href={getLanguageToggleUrl()}
                className="px-3 py-1.5 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-all text-sm"
              >
                {isSpanish ? 'EN' : 'ES'}
              </Link>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-charcoal hover:text-primary transition-colors"
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
