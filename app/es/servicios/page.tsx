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
        'Cercas personalizadas de madera, vinilo y compuesto — construidas para el viento, el sol y los estándares de HOA de la Cuenca de Columbia.',
      icon: HiOutlineViewGrid,
      href: '/es/servicios/cercas',
      image: '/images/fences.jpg',
      price: 'Desde $8,000',
    },
    {
      title: 'Plantas y Césped',
      description:
        'Paisajes verdes y exuberantes que prosperan en el clima de la Cuenca de Columbia. Desde patios en Pasco hasta jardines en Desert Aire.',
      icon: HiOutlineColorSwatch,
      href: '/es/servicios/plantas-cesped',
      image: '/images/plants-sod.jpg',
      price: 'Desde $6,000',
    },
    {
      title: 'Mantenimiento de Propiedad',
      description:
        'Mantenimiento todo el año para que disfrutes tu propiedad sin perder los fines de semana en el jardín.',
      icon: HiOutlineCog,
      href: '/es/servicios/mantenimiento',
      image: '/images/maintenance.jpg',
      price: '$300-700/mes',
    },
    {
      title: 'Muros de Retención',
      description:
        'Soluciones estructurales que resuelven erosión y agregan belleza a tu paisaje — en cualquier terreno de la Cuenca de Columbia.',
      icon: HiOutlineCube,
      href: '/es/servicios/muros-retencion',
      image: '/images/retaining-walls.jpg',
    },
    {
      title: 'Terrazas/Pérgolas/Estructuras',
      description:
        'Estructuras al aire libre que extienden tu espacio de vida. Tu patio trasero se convierte en tu lugar favorito.',
      icon: HiOutlineHome,
      href: '/es/servicios/estructuras-exteriores',
      image: '/images/outdoor-structures.jpg',
    },
    {
      title: 'Irrigación y Drenaje',
      description:
        'Sistemas de riego inteligentes que ahorran agua y mantienen todo verde durante los veranos secos de la Cuenca de Columbia.',
      icon: HiOutlineBeaker,
      href: '/es/servicios/irrigacion',
      image: '/images/irrigation.jpg',
    },
  ]

  return (
    <>
      <HeroSection
        title="Servicios de Jardinería y Construcción en la Cuenca de Columbia"
        subtitle="Desde cercas en Kennewick hasta jardines completos en Desert Aire — 8+ años de experiencia y servicio bilingüe en toda la región."
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
              Martinez Mowing & More es tu contratista general de servicio completo para todo lo exterior. Licenciado, asegurado y respaldado por 8+ años de experiencia — de Desert Aire a Tri-Cities, Moses Lake y Othello.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} learnMoreText="Ver Más" />
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
              <h3 className="font-bold text-xl text-charcoal mb-3">Experiencia Regional</h3>
              <p className="text-gray-600">Conocemos la Cuenca de Columbia — requisitos de HOA en Desert Aire, condiciones de suelo en Tri-Cities, qué prospera en cada zona.</p>
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
        subtitle="Cuéntanos sobre tu proyecto y te enviamos una cotización detallada — generalmente dentro de 24 horas. Servimos toda la Cuenca de Columbia."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
