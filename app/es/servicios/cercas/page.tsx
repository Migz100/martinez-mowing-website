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
  title: 'Instalación de Cercas - Desert Aire, Tri-Cities, Moses Lake WA',
  description:
    'Cercas profesionales de cedro, vinilo y compuesto en la Cuenca de Columbia. Servimos Desert Aire, Pasco, Kennewick, Richland, Moses Lake y Othello. GC Licenciado #MARTIMM744B1. (509) 932-1924.',
  alternates: {
    canonical: 'https://martinez-mowing-website.vercel.app/es/servicios/cercas',
  },
}

export default function CercasES() {
  const breadcrumbItems = [
    { name: 'Servicios', url: '/es/servicios' },
    { name: 'Cercas' },
  ]

  const faqs = [
    {
      question: '¿Qué materiales de cerca recomiendan para la Cuenca de Columbia?',
      answer:
        'Para el viento y sol de esta región, típicamente recomendamos compuesto o vinilo para durabilidad con mínimo mantenimiento, o cedro para un aspecto natural. Las condiciones varían — en Desert Aire el viento es más fuerte, en Tri-Cities el sol es intenso. Evaluamos tu situación específica en la estimación gratuita.',
    },
    {
      question: '¿Manejan aprobaciones de HOA?',
      answer:
        'Sí. Conocemos los requisitos de la HOA de Desert Aire al derecho y al revés, y también trabajamos con regulaciones de comunidades en Pasco, Kennewick y otras áreas. Te guiamos en todo el proceso de aprobación.',
    },
    {
      question: '¿Cuánto durará mi cerca?',
      answer:
        'Con instalación adecuada y nuestras bases de concreto, las cercas de vinilo y compuesto duran 20-30+ años con mínimo mantenimiento. Las cercas de cedro duran 15-20 años con sellado adecuado.',
    },
    {
      question: '¿Pueden igualar el estilo de mi cerca existente?',
      answer:
        'Claro que sí. Podemos igualar estilos, colores y alturas para que se integren con cercas existentes o crear un diseño completamente personalizado.',
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
            'Cercado profesional de madera, vinilo y compuesto para la Cuenca de Columbia. Servimos Desert Aire, Tri-Cities, Moses Lake y Othello. Promedio $8,000, completado en 3-5 días.',
            'fencing'
          ),
          createBreadcrumbSchema([
            { name: 'Inicio', url: 'https://martinez-mowing-website.vercel.app/es' },
            { name: 'Servicios', url: 'https://martinez-mowing-website.vercel.app/es/servicios' },
            { name: 'Cercas' },
          ]),
          createFAQSchema(faqs),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Cercas Personalizadas Para Toda la Cuenca de Columbia"
        subtitle="Desde Desert Aire hasta Tri-Cities y Moses Lake — construimos cercas que resisten el viento, el sol y el paso del tiempo. Tu límite, tu privacidad, tu estilo."
        compact
        backgroundImage="/images/hero-fence.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Construido Para las Condiciones de la Cuenca de Columbia
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tu cerca es más que un límite — es lo primero que los invitados notan, el telón de fondo de cada reunión en el patio, y la base de tu privacidad al aire libre.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nos especializamos en cercas de madera, vinilo y compuesto diseñadas para las condiciones de la Cuenca de Columbia — el viento fuerte, el sol intenso y los estándares de HOA de cada comunidad. Ya sea en Desert Aire, Pasco, Kennewick o Moses Lake, cada poste va asegurado con concreto, cada panel perfectamente nivelado.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ¿Necesitas privacidad total? ¿Una cerca decorativa para enmarcar tu jardín? ¿Algo funcional para las mascotas? Construimos cercas que duran décadas y se ven increíbles durante todo ese tiempo.
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
        title="No Dejes Que Otro Verano Pase Sin Tu Cerca"
        subtitle="Tu privacidad, tus mascotas, tus hijos — cada día sin una cerca adecuada los pone en riesgo. Ya sea en Desert Aire, Pasco o Moses Lake — construyamos una cerca que dure décadas."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
