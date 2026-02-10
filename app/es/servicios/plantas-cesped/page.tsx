import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import FAQAccordion from '@/components/FAQAccordion'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Instalación de Plantas y Césped Desert Aire | Martinez Mowing',
  description: 'Instalación profesional de césped y jardinería en Desert Aire y Mattawa. Resultados de calidad resort que prosperan en el clima de la Cuenca de Columbia.',
  alternates: { canonical: 'https://martinezmowingandmore.com/es/servicios/plantas-cesped' },
}

export default function PlantasCespedES() {
  const breadcrumbItems = [
    { name: 'Servicios', url: '/es/servicios' },
    { name: 'Plantas y Césped' },
  ]

  const faqs = [
    {
      question: '¿Qué tipo de césped recomiendan para Desert Aire?',
      answer: 'Recomendamos variedades resistentes a la sequía que prosperan en el clima cálido y seco de la Cuenca de Columbia. Durante tu consulta gratuita, evaluaremos tu suelo, exposición al sol y uso para recomendar la mejor opción.',
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
        title="Paisajes Exuberantes Que Prosperan en el Clima de Desert Aire"
        subtitle="Césped verde y vibrante, jardines que florecen durante todo el verano, y plantaciones que se ven hermosas año tras año."
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
                Nos especializamos en crear paisajes que prosperan en el clima único de Desert Aire: veranos calurosos, vientos fuertes y suelo desafiante. Cada proyecto comienza con análisis de suelo, nivelación adecuada y plantas seleccionadas específicamente para prosperar aquí.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ya sea que estés comenzando desde cero, renovando un césped existente, o agregando plantaciones coloridas, creamos espacios al aire libre que se ven increíbles durante décadas, no solo temporadas.
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
        title="Deja de Mirar el Césped Marrón de Tu Vecino con Envidia"
        subtitle="Cada temporada sin un césped adecuado es una oportunidad perdida de disfrutar tu propiedad. Creemos el oasis verde que mereces."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
