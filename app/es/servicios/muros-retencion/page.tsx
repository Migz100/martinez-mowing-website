import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import FAQAccordion from '@/components/FAQAccordion'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Muros de Retención - Desert Aire, Tri-Cities, Moses Lake WA | Martinez Mowing',
  description: 'Muros de retención profesionales en la Cuenca de Columbia. Soluciones para erosión y drenaje en Desert Aire, Pasco, Kennewick, Moses Lake y Othello. GC Licenciado.',
  alternates: { canonical: 'https://martinez-mowing-website.vercel.app/es/servicios/muros-retencion' },
}

export default function MurosRetencionES() {
  const breadcrumbItems = [
    { name: 'Servicios', url: '/es/servicios' },
    { name: 'Muros de Retención' },
  ]

  const faqs = [
    {
      question: '¿Necesito un permiso para un muro de retención?',
      answer: 'Depende de la altura y ubicación. Manejamos todas las investigaciones de permisos y presentaciones como parte de nuestro servicio.',
    },
    {
      question: '¿Cuánto durará mi muro de retención?',
      answer: 'Con drenaje e instalación adecuados, los muros de retención de bloques o piedra duran 20-50+ años.',
    },
  ]

  const incluido = [
    'Evaluación del sitio e ingeniería',
    'Investigación y presentación de permisos',
    'Excavación y preparación de base',
    'Materiales de grado profesional',
    'Sistema de drenaje adecuado',
    'Relleno y clasificación',
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Muros de Retención Para Cualquier Terreno de la Cuenca de Columbia"
        subtitle="Erosión, problemas de drenaje o terreno desnivelado — construimos muros de retención sólidos que duran décadas. De Desert Aire a Tri-Cities y Moses Lake."
        compact
        backgroundImage="/images/retaining-walls.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Ingeniería Que Funciona
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Un muro de retención no es solo una pila de bloques — es una solución estructural que necesita ingeniería, drenaje y construcción adecuados para durar. Lo hemos hecho en todo tipo de terrenos por toda la Cuenca de Columbia, desde Desert Aire hasta Richland y Othello.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-6">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Inversión Promedio
                </h3>
                <p className="text-2xl font-bold text-primary mb-1">$5,000 - $20,000</p>
                <p className="text-gray-600">Basado en altura, longitud y complejidad del sitio</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">
                Qué Está Incluido
              </h3>
              <ul className="space-y-4 mb-8">
                {incluido.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary flex-shrink-0 mt-1 text-xl" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/retaining-walls.jpg"
                  alt="Muro de retención profesional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={faqs} title="Preguntas Comunes Sobre Muros de Retención" />

      <CTABanner
        title="Deja de Perder Terreno Por Erosión"
        subtitle="Cada temporada de lluvia empeora el problema. Ya sea en Desert Aire, Kennewick o Moses Lake — arreglémoslo correctamente."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
