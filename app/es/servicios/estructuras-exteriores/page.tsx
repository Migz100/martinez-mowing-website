import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import FAQAccordion from '@/components/FAQAccordion'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Terrazas, Pérgolas y Estructuras - Desert Aire, Tri-Cities, Moses Lake WA | Martinez Mowing',
  description: 'Terrazas, pérgolas y estructuras exteriores en la Cuenca de Columbia. Servimos Desert Aire, Pasco, Kennewick, Richland, Moses Lake y Othello. GC Licenciado. Cotización gratis.',
  alternates: { canonical: 'https://martinez-mowing-website.vercel.app/es/servicios/estructuras-exteriores' },
}

export default function EstructurasExterioresES() {
  const breadcrumbItems = [
    { name: 'Servicios', url: '/es/servicios' },
    { name: 'Estructuras Exteriores' },
  ]

  const faqs = [
    {
      question: '¿Qué materiales recomiendan?',
      answer: 'Para el clima de la Cuenca de Columbia, típicamente recomendamos madera tratada a presión, cedro o materiales compuestos para durabilidad con mínimo mantenimiento. Las condiciones específicas de tu zona (Desert Aire, Tri-Cities, Moses Lake) influyen en la recomendación.',
    },
    {
      question: '¿Necesito aprobación de la HOA?',
      answer: 'Depende de tu comunidad. Conocemos los requisitos de HOA de Desert Aire y también trabajamos con regulaciones en Pasco, Kennewick y otras áreas. Te guiamos en todo el proceso.',
    },
  ]

  const incluido = [
    'Consulta de diseño personalizado',
    'Planos de ingeniería y permisos',
    'Materiales de grado profesional',
    'Construcción experta',
    'Acabado y sellado',
    'Garantía de mano de obra',
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Estructuras Exteriores Que Extienden Tu Espacio de Vida"
        subtitle="Terrazas donde entretienes, pérgolas que dan sombra, cocinas al aire libre — construimos los espacios donde la vida sucede. De Desert Aire a Tri-Cities y toda la Cuenca de Columbia."
        compact
        backgroundImage="/images/outdoor-structures.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Más Que Solo Construcción
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tu patio trasero debería ser tu lugar favorito en casa. Construimos terrazas, pérgolas, gazebos, cocinas al aire libre y más — para convertir tu espacio exterior en un verdadero retiro. Ya sea en Desert Aire, Pasco, Kennewick o Moses Lake, diseñamos para las condiciones locales.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-6">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Rango de Inversión
                </h3>
                <p className="text-2xl font-bold text-primary mb-1">$8,000 - $40,000+</p>
                <p className="text-gray-600">Basado en el tamaño y características del proyecto</p>
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
                  src="/images/outdoor-structures.jpg"
                  alt="Terraza de madera y pérgola"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={faqs} title="Preguntas Comunes Sobre Estructuras Exteriores" />

      <CTABanner
        title="Deja de Soñar Con Tu Oasis en el Patio Trasero"
        subtitle="Ya sea en Desert Aire, Richland o Othello — construyamos el espacio al aire libre que has estado planeando. Consulta gratuita en toda la Cuenca de Columbia."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
