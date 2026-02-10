import type { Metadata } from 'next'
import Link from 'next/link'
import { FaPhone, FaCheckCircle } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import StructuredData, { createBreadcrumbSchema } from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Jardinería y Cercas en Desert Aire y Mattawa WA | Martinez Mowing & More',
  description:
    'Cercas premium, jardinería profesional, y mantenimiento de propiedades en Desert Aire y Mattawa, WA. Contratista General Licenciado #MARTIMM744B1. Servicio bilingüe. Llame (509) 932-1924.',
  keywords: [
    'jardinería Desert Aire',
    'cercas Mattawa WA',
    'mantenimiento de propiedades',
    'contratista bilingüe',
    'servicio en español',
  ],
  openGraph: {
    title: 'Jardinería y Cercas en Español | Martinez Mowing & More LLC',
    description:
      'Cercas premium, jardinería profesional, y mantenimiento de propiedades. Servicio bilingüe en Desert Aire y Mattawa.',
    url: 'https://martinezmowingandmore.com/es',
    siteName: 'Martinez Mowing & More LLC',
    type: 'website',
    locale: 'es_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jardinería y Cercas en Desert Aire y Mattawa WA',
    description:
      'Cercas premium, jardinería profesional. Contratista General Licenciado. Servicio bilingüe.',
  },
  alternates: {
    canonical: 'https://martinezmowingandmore.com/es',
  },
}

export default function Spanish() {
  const breadcrumbItems = [{ name: 'Español' }]

  const servicios = [
    {
      titulo: 'Cercas',
      descripcion:
        'Cercas personalizadas de madera, vinilo y compuesto diseñadas para el clima y los estándares de HOA de Desert Aire.',
      precio: 'Desde $8,000',
    },
    {
      titulo: 'Plantas y Césped',
      descripcion:
        'Paisajes verdes y exuberantes que prosperan en el clima de Columbia Basin. Diseños de calidad resort.',
      precio: 'Desde $6,000',
    },
    {
      titulo: 'Mantenimiento de Propiedad',
      descripcion:
        'Mantenimiento durante todo el año: corte de césped, limpieza de primavera/otoño, cumplimiento de HOA.',
      precio: '$300-700/mes',
    },
    {
      titulo: 'Muros de Contención',
      descripcion:
        'Soluciones estructurales para terrenos inclinados y control de erosión. Allan Block, piedra natural, madera.',
    },
    {
      titulo: 'Terrazas y Estructuras',
      descripcion:
        'Terrazas personalizadas, pérgolas, cubiertas de patio y gazebos que extienden su espacio de vida.',
    },
    {
      titulo: 'Irrigación y Drenaje',
      descripcion:
        'Sistemas de riego inteligentes, reparaciones, drenaje francés, y soluciones de drenaje profesionales.',
    },
  ]

  const diferenciadores = [
    'Contratista General Licenciado #MARTIMM744B1',
    'Más de 20 años de experiencia',
    'Especialistas en Desert Aire',
    'Precios claros sin sorpresas',
  ]

  return (
    <>
      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://martinezmowingandmore.com' },
          { name: 'Español' },
        ])}
      />
      <Breadcrumbs items={breadcrumbItems} />
      {/* Hero en Español */}
      <section className="relative w-full">
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 image-placeholder-gradient flex items-center justify-center">
            <p className="text-white/40 text-sm md:text-base font-medium text-center px-4">
              [Hero Background Image - Full Width Landscape]
            </p>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              El Contratista en Quien Tus Vecinos de Desert Aire Ya Confían
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
              Cercas premium, jardinería profesional, y mantenimiento sin
              preocupaciones para vivir cerca del campo de golf.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-accent text-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
              >
                Solicita Tu Cotización Gratis
              </Link>
              <a
                href="tel:5099321924"
                className="flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
              >
                <FaPhone />
                Llama (509) 932-1924
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Acerca de */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ImagePlaceholder
              text="[Foto de Daniel Martinez en el trabajo]"
              height="h-96"
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Construido en Reputación, Impulsado por la Artesanía
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hola, soy Daniel Martinez, y he estado construyendo espacios al
                aire libre en Columbia Basin durante más de 20 años.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Comencé Martinez Mowing & More en 2021 porque vi a demasiados
                propietarios—especialmente aquí en Desert Aire—siendo
                defraudados por contratistas que prometían demasiado, entregaban
                poco, o desaparecían a mitad del trabajo.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Quería construir algo diferente. Una empresa donde su proyecto
                se hace bien, a tiempo, y con el tipo de atención al detalle que
                le hace emocionarse de mostrarlo a sus vecinos.
              </p>
              <Link
                href="/about"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Más Sobre Nosotros (English)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            Nuestros Servicios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
                {servicio.precio && (
                  <p className="text-sm font-semibold text-accent">
                    {servicio.precio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            Por Qué Elegirnos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciadores.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-2xl text-primary" />
                </div>
                <p className="text-gray-700 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo Para Comenzar?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transformemos su espacio al aire libre. Solicite una cotización
            gratis hoy—sin presión, sin tácticas de venta agresivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-accent text-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
            >
              Solicita Tu Cotización
            </Link>
            <a
              href="tel:5099321924"
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
            >
              Llama (509) 932-1924
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
