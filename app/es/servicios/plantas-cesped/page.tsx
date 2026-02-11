import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import FAQAccordion from '@/components/FAQAccordion'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Plantas y Césped - Desert Aire, Tri-Cities, Moses Lake WA | Martinez Mowing',
  description: 'Instalación profesional de césped y jardinería en la Cuenca de Columbia. Servimos Desert Aire, Pasco, Kennewick, Richland, Moses Lake y Othello. Resultados de calidad resort.',
  alternates: { canonical: 'https://martinez-mowing-website.vercel.app/es/servicios/plantas-cesped' },
}

export default function PlantasCespedES() {
  const breadcrumbItems = [
    { name: 'Servicios', url: '/es/servicios' },
    { name: 'Plantas y Césped' },
  ]

  const faqs = [
    {
      question: '¿Qué tipo de césped recomiendan para esta zona?',
      answer: 'Recomendamos variedades resistentes a la sequía que prosperan en el clima cálido y seco de la Cuenca de Columbia. Las condiciones varían entre Desert Aire, Tri-Cities y Moses Lake — durante tu consulta gratuita evaluamos tu suelo, exposición al sol y uso para recomendar la mejor opción.',
    },
    {
      question: '¿Cuánto tiempo tarda en establecerse el nuevo césped?',
      answer: 'El césped nuevo típicamente se arraiga en 2-3 semanas con riego adecuado. Puedes caminar sobre él ligeramente después de 2 semanas, y está completamente establecido en 4-6 semanas.',
    },
    {
      question: '¿Incluyen el sistema de riego?',
      answer: 'Podemos incluir instalación o actualización de riego como parte de tu proyecto de jardinería. Te proporcionaremos opciones durante tu estimación gratuita.',
    },
    {
      question: '¿Ofrecen garantía en las plantas?',
      answer: 'Sí. Todas las plantas vienen con garantía de supervivencia inicial cuando sigues nuestras instrucciones de cuidado recomendadas.',
    },
  ]

  const incluido = [
    'Análisis de suelo y preparación del sitio',
    'Nivelación y clasificación profesional',
    'Césped o semilla de grado premium',
    'Instalación de plantas nativas y adaptadas al clima',
    'Fertilización inicial y acondicionamiento del suelo',
    'Plan de cuidado y cronograma de riego',
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Paisajes Verdes Que Prosperan en la Cuenca de Columbia"
        subtitle="Césped vibrante, jardines que florecen todo el verano y plantaciones que lucen increíbles año tras año — de Desert Aire a Tri-Cities y Moses Lake."
        compact
        backgroundImage="/images/plants-sod.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Resultados de Calidad Resort
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tu césped debería ser el tipo de verde que hace que los vecinos se detengan. El tipo de exuberante que hace que los niños quieran jugar descalzos. El tipo de perfecto que hace que organizar una barbacoa sea algo que esperas con ansias, no temes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nos especializamos en paisajes que prosperan en la Cuenca de Columbia: veranos calurosos, vientos fuertes y suelo desafiante. Ya sea en Desert Aire, Pasco, Kennewick o Moses Lake, cada proyecto comienza con análisis de suelo, nivelación adecuada y plantas seleccionadas para prosperar en tu zona específica.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ¿Empezando desde cero? ¿Renovando un césped existente? ¿Agregando color con plantaciones nuevas? Creamos espacios al aire libre que lucen increíbles por décadas, no solo temporadas.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-6">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Inversión Promedio
                </h3>
                <p className="text-2xl font-bold text-primary mb-1">$6,000 - $15,000</p>
                <p className="text-gray-600">La mayoría de proyectos completados en 1-3 días</p>
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

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/plants-sod.jpg"
                  alt="Instalación de césped fresco y verde"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={faqs} title="Preguntas Comunes Sobre Plantas y Césped" />

      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center text-charcoal mb-8">
            Servicios Relacionados
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/es/servicios/irrigacion" className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 font-semibold text-primary">
              Irrigación y Drenaje
            </Link>
            <Link href="/es/servicios/mantenimiento" className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 font-semibold text-primary">
              Mantenimiento de Propiedad
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Deja de Ver Pasar los Veranos con un Césped Café"
        subtitle="Cada temporada sin un paisaje adecuado es una oportunidad perdida. Ya sea en Desert Aire, Richland o Othello — creemos el oasis verde que tu propiedad merece."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
