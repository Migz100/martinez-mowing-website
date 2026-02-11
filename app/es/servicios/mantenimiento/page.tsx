import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import FAQAccordion from '@/components/FAQAccordion'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Mantenimiento de Propiedad - Desert Aire, Tri-Cities, Moses Lake WA | Martinez Mowing',
  description: 'Mantenimiento profesional de propiedad todo el año en la Cuenca de Columbia. Servimos Desert Aire, Pasco, Kennewick, Moses Lake y Othello. Corte, recorte, fertilización y más.',
  alternates: { canonical: 'https://martinez-mowing-website.vercel.app/es/servicios/mantenimiento' },
}

export default function MantenimientoES() {
  const breadcrumbItems = [
    { name: 'Servicios', url: '/es/servicios' },
    { name: 'Mantenimiento' },
  ]

  const faqs = [
    {
      question: '¿Con qué frecuencia cortarán mi césped?',
      answer: 'Típicamente cada 7-10 días durante la temporada de crecimiento, ajustado según las condiciones climáticas y el crecimiento del césped. Tú eliges la frecuencia que funcione mejor para tu propiedad.',
    },
    {
      question: '¿Qué pasa si estoy fuera de la ciudad?',
      answer: 'Ese es exactamente nuestro punto fuerte. Cuidamos tu propiedad mientras estás fuera, para que regreses a un césped perfecto, no a una jungla.',
    },
    {
      question: '¿Ofrecen servicios de nieve en invierno?',
      answer: 'Sí. Ofrecemos limpieza de nieve y mantenimiento de invierno para mantener tu propiedad segura y accesible durante todo el año.',
    },
  ]

  const incluido = [
    'Corte y recorte profesional de césped',
    'Orillado de caminos y camas',
    'Soplado y limpieza de escombros',
    'Inspección regular de riego',
    'Fertilización estacional',
    'Comunicación de problemas detectados',
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Mantenimiento Sin Preocupaciones en Toda la Cuenca de Columbia"
        subtitle="Deja de perder fines de semana cortando, recortando y arrastrándote por el calor. Ya sea en Desert Aire, Tri-Cities o Moses Lake — nosotros nos encargamos."
        compact
        backgroundImage="/images/maintenance.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Tu Tiempo Vale Más
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Imagina regresar a casa después de una semana larga y ver tu césped perfectamente cortado, bordes limpios, todo se ve de revista—sin que hayas levantado un dedo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro servicio de mantenimiento es tu opción de "configúralo y olvídalo" para mantener tu propiedad luciendo impecable todo el año. Ya sea en Desert Aire, Pasco, Kennewick o Moses Lake — mismo equipo, misma calidad, cada semana.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-6">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Inversión Mensual
                </h3>
                <p className="text-2xl font-bold text-primary mb-1">$300 - $700/mes</p>
                <p className="text-gray-600">Basado en el tamaño de la propiedad y servicios seleccionados</p>
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
                  src="/images/maintenance.jpg"
                  alt="Mantenimiento profesional de propiedad"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={faqs} title="Preguntas Comunes Sobre Mantenimiento" />

      <CTABanner
        title="Recupera Tus Fines de Semana"
        subtitle="Deja de perder sábados sudando bajo el sol de la Cuenca de Columbia. Déjanos manejar el mantenimiento mientras tú disfrutas tu propiedad."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
