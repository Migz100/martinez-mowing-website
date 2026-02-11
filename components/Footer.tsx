'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaTiktok, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const isSpanish = pathname?.startsWith('/es')

  const serviceLinks = isSpanish
    ? [
        { href: '/es/servicios/cercas', label: 'Cercas' },
        { href: '/es/servicios/plantas-cesped', label: 'Plantas y Césped' },
        { href: '/es/servicios/mantenimiento', label: 'Mantenimiento' },
        { href: '/es/servicios/muros-retencion', label: 'Muros de Retención' },
        { href: '/es/servicios/estructuras-exteriores', label: 'Estructuras Exteriores' },
        { href: '/es/servicios/irrigacion', label: 'Irrigación y Drenaje' },
      ]
    : [
        { href: '/services/fences', label: 'Fences' },
        { href: '/services/plants-sod', label: 'Plants & Sod' },
        { href: '/services/maintenance', label: 'Property Maintenance' },
        { href: '/services/retaining-walls', label: 'Retaining Walls' },
        { href: '/services/outdoor-structures', label: 'Outdoor Structures' },
        { href: '/services/irrigation', label: 'Irrigation & Drainage' },
      ]

  const quickLinks = isSpanish
    ? [
        { href: '/es', label: 'Inicio' },
        { href: '/es/sobre', label: 'Sobre Nosotros' },
        { href: '/es/servicios', label: 'Servicios' },
        { href: '/es/galeria', label: 'Galería' },
        { href: '/es/contacto', label: 'Contacto' },
        { href: '/', label: 'English' },
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/contact', label: 'Contact' },
        { href: '/es', label: 'Español' },
      ]

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">
              Martinez Mowing & More
            </h3>
            <div className="space-y-3 text-gray-300">
              <a
                href="tel:5099321924"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FaPhone className="flex-shrink-0" />
                <span>(509) 932-1924</span>
              </a>
              <a
                href="mailto:Martinezmowingandmorellc@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors break-all"
              >
                <FaEnvelope className="flex-shrink-0" />
                <span className="text-sm">Martinezmowingandmorellc@gmail.com</span>
              </a>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="flex-shrink-0 mt-1" />
                <span>{isSpanish ? 'Sirviendo la Cuenca de Columbia — Desert Aire, Tri-Cities, Moses Lake, Othello' : 'Serving the Columbia Basin — Desert Aire, Tri-Cities, Moses Lake, Othello'}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">{isSpanish ? 'Servicios' : 'Services'}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{isSpanish ? 'Enlaces Rápidos' : 'Quick Links'}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & License */}
          <div>
            <h3 className="text-lg font-bold mb-4">{isSpanish ? 'Conéctate Con Nosotros' : 'Connect With Us'}</h3>
            <div className="flex gap-4 mb-6">
              {/* Facebook link TBD - commented out per requirements */}
              {/* <a
                href="https://www.facebook.com/martinezmowing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a> */}
              
              <a
                href="https://www.instagram.com/martinezmowing_morellc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              
              <a
                href="https://www.tiktok.com/@martinezmowing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-accent transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
            <div className="text-gray-300 space-y-2">
              <p className="font-semibold text-accent">
                {isSpanish ? 'Licenciado y Asegurado' : 'Licensed & Insured'}
              </p>
              <p className="text-sm">GC #MARTIMM744B1</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} Martinez Mowing & More LLC. {isSpanish ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
          <p className="mt-2">
            {isSpanish ? 'Construido por' : 'Built by'}{' '}
            <a
              href="https://fadegrowthpartner.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Fade Growth Partner
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
