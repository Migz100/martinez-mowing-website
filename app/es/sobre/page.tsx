import type { Metadata } from 'next'
import Image from 'next/image'
import { FaCertificate, FaMapMarkerAlt, FaUsers, FaHandshake } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import StructuredData, { createBreadcrumbSchema } from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Sobre Daniel Martinez - Contratista Licenciado Cuenca de Columbia WA',
  description:
    'Conoce a Daniel Martinez, contratista general licenciado (GC #MARTIMM744B1) con 8+ años de experiencia. Sirviendo Desert Aire, Mattawa, Tri-Cities, Moses Lake y Othello. El contratista bilingüe más confiable de la Cuenca de Columbia.',
  alternates: {
    canonical: 'https://martinez-mowing-website.vercel.app/es/sobre',
  },
}

export default function SobreNosotros() {
  const breadcrumbItems = [{ name: 'Sobre Nosotros' }]

  const diferenciadores = [
    {
      icon: FaCertificate,
      title: 'Licenciados y Asegurados',
      description:
        'GC #MARTIMM744B1. Obtenemos permisos, seguimos códigos y respaldamos cada proyecto.',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Toda la Cuenca de Columbia',
      description:
        'Base en Desert Aire, sirviendo desde Mattawa hasta Tri-Cities, Moses Lake y Othello. Conocemos los requisitos de HOA, el suelo y qué prospera en cada zona.',
    },
    {
      icon: FaUsers,
      title: 'Un Equipo, Un Estándar',
      description:
        'Daniel está en cada trabajo. El mismo equipo con el que hemos trabajado durante años.',
    },
    {
      icon: FaHandshake,
      title: 'Sin Sorpresas',
      description:
        'Cotizaciones claras, plazos realistas y comunicación honesta de principio a fin.',
    },
  ]

  return (
    <>
      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Inicio', url: 'https://martinez-mowing-website.vercel.app/es' },
          { name: 'Sobre Nosotros' },
        ])}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="De Desert Aire Para Toda la Cuenca de Columbia"
        subtitle="8+ años transformando propiedades en Desert Aire, Tri-Cities, Moses Lake y más — retiros al aire libre que los propietarios están orgullosos de mostrar."
        compact
        backgroundImage="/images/team-work.jpg"
      />

      {/* Main Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <div className="relative h-96 mb-8 overflow-hidden shadow-lg">
                <Image
                  src="/images/team-work.jpg"
                  alt="Retrato de Daniel Martinez"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Hola, soy Daniel Martinez. Llevo 8 años trabajando en jardinería y construcción exterior por toda la Cuenca de Columbia — desde Desert Aire hasta Tri-Cities y Moses Lake.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fundé Martinez Mowing & More en 2021 porque vi a demasiados propietarios siendo estafados por contratistas que prometían mucho y entregaban poco, o simplemente desaparecían a mitad de un trabajo. Lo vi en Desert Aire, en Pasco, en Othello — el mismo problema en todos lados.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Quería construir algo diferente. Una compañía donde tu proyecto se hace bien, a tiempo, y con la atención al detalle que te emociona mostrar a tus vecinos — sin importar en qué parte de la Cuenca de Columbia vivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            Lo Que Nos Hace Diferentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diferenciadores.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative h-80 mb-8 overflow-hidden shadow-lg">
                <Image
                  src="/images/team-work.jpg"
                  alt="Foto de proyecto completado o equipo trabajando"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Ya sea una cerca en Kennewick, un sistema de riego en Desert Aire, césped nuevo en Pasco, o mantenimiento mensual en Moses Lake — tratamos cada propiedad como si fuera nuestra. Ese es nuestro estándar en toda la Cuenca de Columbia.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            Construyamos algo que amarás al llegar a casa.
          </p>
          <p className="text-lg text-gray-600 italic">
            — Daniel Martinez, Propietario
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="¿Listo para Trabajar con un Contratista en Quien Puedes Confiar?"
        subtitle="Hablemos sobre tu proyecto. Cotizaciones gratuitas, plazos honestos y calidad en la que puedes confiar."
        ctaText="Solicita Tu Cotización"
        ctaLink="/es/contacto"
      />
    </>
  )
}
