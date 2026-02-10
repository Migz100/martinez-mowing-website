'use client'

import Link from 'next/link'
import {
  HiOutlineViewGrid,
  HiOutlineColorSwatch,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineHome,
  HiOutlineBeaker,
} from 'react-icons/hi'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import CTABanner from '@/components/CTABanner'

export default function ServiciosES() {
  const services = [
    {
      title: 'Cercas',
      description:
        'Cercas personalizadas de madera, vinilo y compuesto diseñadas para los estándares de viento, sol y HOA de Desert Aire.',
      icon: HiOutlineViewGrid,
      href: '/es/servicios/cercas',
      price: 'Desde $8,000',
    },
    {
      title: 'Plantas y Césped',
      description:
        'Paisajes verdes y exuberantes que prosperan en el clima de la Cuenca de Columbia con resultados de calidad resort.',
      icon: HiOutlineColorSwatch,
      href: '/es/servicios/plantas-cesped',
      price: 'Desde $6,000',
    },
    {
      title: 'Mantenimiento de Propiedad',
      description:
        'Mantenimiento durante todo el año para que puedas disfrutar de tu propiedad sin pasar los fines de semana trabajando en el jardín.',
      icon: HiOutlineCog,
      href: '/es/servicios/mantenimiento',
      price: '$300-700/mes',
    },
    {
      title: 'Muros de Retención',
      description:
        'Soluciones estructurales que resuelven problemas de erosión mientras agregan belleza y valor a tu paisaje.',
      icon: HiOutlineCube,
      href: '/es/servicios/muros-retencion',
    },
    {
      title: 'Terrazas/Pérgolas/Estructuras',
      description:
        'Estructuras al aire libre personalizadas que extienden tu espacio de vida y hacen de tu patio trasero un destino.',
      icon: HiOutlineHome,
      href: '/es/servicios/estructuras-exteriores',
    },
    {
      title: 'Irrigación y Drenaje',
      description:
        'Sistemas de riego inteligentes que ahorran agua y mantienen todo verde durante los veranos de Desert Aire.',
      icon: HiOutlineBeaker,
      href: '/es/servicios/irrigacion',
    },
  ]

  return (
    <>
      <HeroSection
        title="Servicios Completos de Jardinería y Construcción"
        subtitle="Desde cercas personalizadas hasta transformaciones completas de paisajismo. Más de 20 años de experiencia en cada proyecto de Desert Aire."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
        compact
        backgroundImage="/images/hero-landscaping.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Martinez Mowing & More es tu contratista general de servicio completo para todo lo relacionado con el aire libre. Licenciado, asegurado y respaldado por más de 20 años de experiencia en la Cuenca de Columbia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">
            ¿Por Qué Elegir Martinez Mowing & More?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl text-charcoal mb-3">Licenciado y Asegurado</h3>
              <p className="text-gray-600">GC #MARTIMM744B1. Manejamos permisos, cumplimos códigos y respaldamos cada proyecto.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl text-charcoal mb-3">Experiencia Local</h3>
              <p className="text-gray-600">Conocemos los requisitos de HOA de Desert Aire, las condiciones del suelo y qué prospera aquí.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl text-charcoal mb-3">Servicio Bilingüe</h3>
              <p className="text-gray-600">Hablamos español e inglés. Comunicación clara en tu idioma preferido.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl text-charcoal mb-3">Sin Sorpresas</h3>
              <p className="text-gray-600">Cotizaciones claras, plazos realistas y comunicación honesta de principio a fin.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Listo para Empezar?"
        subtitle="Cuéntanos sobre tu proyecto y te enviaremos una cotización detallada—generalmente dentro de 24 horas."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
