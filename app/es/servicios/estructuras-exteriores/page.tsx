import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import FAQAccordion from '@/components/FAQAccordion'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Terrazas, Pérgolas y Estructuras Exteriores | Martinez Mowing',
  description: 'Construcción personalizada de terrazas, pérgolas y estructuras exteriores en Desert Aire y Mattawa, WA.',
  alternates: { canonical: 'https://martinezmowingandmore.com/es/servicios/estructuras-exteriores' },
}

export default function EstructurasExterioresES() {
  const breadcrumbItems = [
    { name: 'Servicios', url: '/es/servicios' },
    { name: 'Estructuras Exteriores' },
  ]

  const faqs = [
    {
      question: '¿Qué materiales recomiendan?',
      answer: 'Para el clima de Desert Aire, típicamente recomendamos madera tratada a presión, cedro o materiales compuestos para durabilidad con mínimo mantenimiento.',
    },
    {
      question: '¿Necesito aprobación de la HOA?',
      answer: 'Sí. Conocemos los requisitos de Desert Aire y te ayudamos con el proceso de aprobación.',
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
        title="Estructuras Exteriores Personalizadas Que Extienden Tu Espacio de Vida"
        subtitle="Terrazas donde entretienes, pérgolas que brindan sombra, cocinas al aire libre que te hacen querer estar afuera—construimos los espacios donde la vida sucede."
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
                Tu patio trasero debería ser tu lugar favorito en casa. Construimos terrazas personalizadas, pérgolas, gazebos, cocinas al aire libre y más para convertir tu espacio exterior en un verdadero retiro.
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
        subtitle="Construyamos el espacio al aire libre que has estado planeando. Comencemos con una consulta gratuita."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
