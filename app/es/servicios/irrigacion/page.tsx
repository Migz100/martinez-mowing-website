import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import FAQAccordion from '@/components/FAQAccordion'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Sistemas de Irrigación y Drenaje Desert Aire | Martinez Mowing',
  description: 'Instalación profesional de sistemas de riego y soluciones de drenaje en Desert Aire y Mattawa, WA.',
  alternates: { canonical: 'https://martinezmowingandmore.com/es/servicios/irrigacion' },
}

export default function IrrigacionES() {
  const breadcrumbItems = [
    { name: 'Servicios', url: '/es/servicios' },
    { name: 'Irrigación y Drenaje' },
  ]

  const faqs = [
    {
      question: '¿Qué tipo de sistema de riego recomiendan?',
      answer: 'Para el clima de Desert Aire, típicamente recomendamos sistemas de rociadores automáticos con zonas separadas para céspedes, jardines y camas de plantas para máxima eficiencia.',
    },
    {
      question: '¿Pueden reparar mi sistema existente?',
      answer: 'Absolutamente. Diagnosticamos problemas, reemplazamos componentes rotos y actualizamos sistemas antiguos.',
    },
  ]

  const incluido = [
    'Diseño de sistema personalizado',
    'Controlador de riego inteligente',
    'Zonificación para máxima eficiencia',
    'Rociadores y goteo de grado profesional',
    'Válvulas de apagado de emergencia',
    'Servicio de inicio y apagado estacional',
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Sistemas de Riego Inteligentes Que Mantienen Todo Verde"
        subtitle="Ahorra agua, ahorra tiempo y mantén tu paisaje exuberante durante todo el verano con un sistema de riego diseñado para el clima de Desert Aire."
        compact
        backgroundImage="/images/irrigation.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Riega Inteligentemente, No Más
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Un sistema de riego adecuado paga por sí mismo en agua ahorrada, tiempo ahorrado y un césped que se ve verde todo el verano sin que tengas que mover un aspersor manualmente.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Diseñamos sistemas personalizados con zonas separadas para diferentes áreas de tu propiedad, controladores inteligentes que ajustan automáticamente según el clima, y componentes de calidad que duran años.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-6">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Inversión Promedio
                </h3>
                <p className="text-2xl font-bold text-primary mb-1">$3,000 - $8,000</p>
                <p className="text-gray-600">Basado en el tamaño de la propiedad y zonas</p>
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
                  src="/images/irrigation.jpg"
                  alt="Sistema de riego profesional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={faqs} title="Preguntas Comunes Sobre Irrigación" />

      <CTABanner
        title="Deja de Desperdiciar Agua en Riego Ineficiente"
        subtitle="Un sistema adecuado ahorra dinero cada mes y mantiene tu paisaje perfecto. Hablemos sobre tu propiedad."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
