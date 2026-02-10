import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import FAQAccordion from '@/components/FAQAccordion'
import StructuredData, {
  createServiceSchema,
  createBreadcrumbSchema,
  createFAQSchema,
} from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Instalación de Cercas Personalizadas Desert Aire y Mattawa WA',
  description:
    'Instalación profesional de cercas en Desert Aire y Mattawa. Cedro, vinilo y compuesto. Cumple con HOA. GC Licenciado #MARTIMM744B1. Cotizaciones gratuitas. (509) 932-1924.',
  alternates: {
    canonical: 'https://martinezmowingandmore.com/es/servicios/cercas',
  },
}

export default function CercasES() {
  const breadcrumbItems = [
    { name: 'Servicios', url: '/es/servicios' },
    { name: 'Cercas' },
  ]

  const faqs = [
    {
      question: '¿Qué materiales de cerca recomiendan para Desert Aire?',
      answer:
        'Para la exposición al viento y al sol de Desert Aire, típicamente recomendamos compuesto o vinilo para durabilidad con mínimo mantenimiento, o cedro para un aspecto natural. Evaluaremos tus necesidades específicas durante la estimación gratuita.',
    },
    {
      question: '¿Manejan la aprobación de la HOA?',
      answer:
        'Sí. Conocemos los requisitos de cercas de la HOA de Desert Aire y podemos ayudarte a navegar el proceso de aprobación para asegurar que tu cerca cumpla con los estándares de la comunidad.',
    },
    {
      question: '¿Cuánto durará mi cerca?',
      answer:
        'Con instalación adecuada y nuestras bases de concreto, las cercas de vinilo y compuesto duran 20-30+ años con mínimo mantenimiento. Las cercas de cedro duran 15-20 años con sellado adecuado.',
    },
    {
      question: '¿Pueden igualar el estilo de mi cerca existente?',
      answer:
        'Absolutamente. Podemos igualar estilos, colores y alturas para que se integren perfectamente con cercas existentes o crear un diseño completamente personalizado.',
    },
    {
      question: '¿Ofrecen garantía?',
      answer:
        'Sí. Todos nuestros proyectos de cercas vienen con garantía de mano de obra. Los materiales también están respaldados por las garantías del fabricante.',
    },
  ]

  const incluido = [
    'Consulta de diseño personalizado',
    'Revisión de cumplimiento con HOA',
    'Materiales de grado profesional (cedro, vinilo, compuesto)',
    'Bases de concreto para resistencia al viento',
    'Limpieza después de la instalación',
    'Garantía de mano de obra',
  ]

  return (
    <>
      <StructuredData
        data={[
          createServiceSchema(
            'Instalación de Cercas Personalizadas',
            'Cercado profesional de madera, vinilo y compuesto diseñado para el viento, sol y estándares de HOA de Desert Aire. Promedio $8,000, completado en 3-5 días.',
            'fencing'
          ),
          createBreadcrumbSchema([
            { name: 'Inicio', url: 'https://martinezmowingandmore.com/es' },
            { name: 'Servicios', url: 'https://martinezmowingandmore.com/es/servicios' },
            { name: 'Cercas' },
          ]),
          createFAQSchema(faqs),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Cercas Personalizadas Que Enmarcan Tu Propiedad de Desert Aire Perfectamente"
        subtitle="Tu cerca es más que un límite—es lo primero que los invitados notan, el telón de fondo de cada reunión en el patio trasero, y la base de tu privacidad al aire libre."
        compact
        backgroundImage="/images/hero-fence.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Construido para Desert Aire
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tu cerca es más que un límite—es lo primero que los invitados notan, el telón de fondo de cada reunión en el patio trasero, y la base de tu privacidad al aire libre.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nos especializamos en cercas personalizadas de madera, vinilo y compuesto diseñadas específicamente para el viento, sol y estándares de HOA de Desert Aire. Cada poste está asegurado con concreto, cada panel está perfectamente nivelado, y cada puerta funciona sin problemas durante años.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ya sea que necesites privacidad total, una cerca decorativa para enmarcar tu jardín, o algo funcional para mantener a las mascotas seguras, construimos cercas que duran décadas y se ven hermosas durante todo ese tiempo.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-6">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Inversión Promedio
                </h3>
                <p className="text-2xl font-bold text-primary mb-1">$8,000</p>
                <p className="text-gray-600">La mayoría de las cercas se completan en 3-5 días</p>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  Plazo Típico
                </h3>
                <p className="text-gray-600">
                  <strong>Día 1:</strong> Marcado y excavación de postes<br />
                  <strong>Día 2:</strong> Instalación de postes y concreto<br />
                  <strong>Día 3-4:</strong> Instalación de paneles y puertas<br />
                  <strong>Día 5:</strong> Toques finales y limpieza
                </p>
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
                  src="/images/fences.jpg"
                  alt="Instalación profesional de cerca"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero-fence.jpg"
                  alt="Cerca de madera de cedro en patio trasero"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-12">
            Opciones de Materiales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-charcoal mb-3">Cedro</h3>
              <p className="text-gray-600 mb-4">Belleza natural, aroma agradable, puede ser teñido o sellado. Dura 15-20 años.</p>
              <p className="font-semibold text-primary">Mejor para: Aspecto clásico y natural</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-charcoal mb-3">Vinilo</h3>
              <p className="text-gray-600 mb-4">Cero mantenimiento, nunca necesita pintura, resistente al sol. Dura 20-30+ años.</p>
              <p className="font-semibold text-primary">Mejor para: Bajo mantenimiento y durabilidad</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-charcoal mb-3">Compuesto</h3>
              <p className="text-gray-600 mb-4">Aspecto de madera sin mantenimiento, resistente a deformación y grietas. Dura 25-30+ años.</p>
              <p className="font-semibold text-primary">Mejor para: Máxima longevidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion faqs={faqs} title="Preguntas Comunes Sobre Cercas" />

      {/* Related Services */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center text-charcoal mb-8">
            Servicios Relacionados
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/es/servicios/muros-retencion"
              className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 font-semibold text-primary"
            >
              Muros de Retención
            </Link>
            <Link
              href="/es/servicios/estructuras-exteriores"
              className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 font-semibold text-primary"
            >
              Terrazas y Pérgolas
            </Link>
            <Link
              href="/es/servicios/plantas-cesped"
              className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 font-semibold text-primary"
            >
              Jardinería
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="No Dejes Que Otro Verano Pase Sin Una Cerca Completa"
        subtitle="Tu privacidad, tus mascotas, tus hijos—cada día sin una cerca adecuada los pone en riesgo. Deja de posponerlo. Construyamos una cerca que dure décadas."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
