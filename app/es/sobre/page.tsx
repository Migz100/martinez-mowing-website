import type { Metadata } from 'next'
import { FaCertificate, FaMapMarkerAlt, FaUsers, FaHandshake } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import CTABanner from '@/components/CTABanner'
import StructuredData, { createBreadcrumbSchema } from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Sobre Daniel Martinez - Contratista Licenciado Mattawa WA',
  description:
    'Conoce a Daniel Martinez, propietario de Martinez Mowing & More. GC Licenciado #MARTIMM744B1 con más de 20 años de experiencia sirviendo a Desert Aire y Mattawa. Contratista de jardinería bilingüe en quien puedes confiar.',
  alternates: {
    canonical: 'https://martinezmowingandmore.com/es/sobre',
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
      title: 'Especialistas en Desert Aire',
      description:
        'Conocemos los requisitos de la HOA, las condiciones del suelo y exactamente qué plantas prosperan aquí.',
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
          { name: 'Inicio', url: 'https://martinezmowingandmore.com/es' },
          { name: 'Sobre Nosotros' },
        ])}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Construido en Reputación, Impulsado por Artesanía"
        subtitle="Más de 20 años convirtiendo los patios traseros de Desert Aire en retiros al aire libre que los propietarios están orgullosos de mostrar."
        compact
        backgroundImage="/images/team-work.jpg"
      />

      {/* Main Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <ImagePlaceholder
                text="[Retrato de Daniel Martinez]"
                height="h-96"
                className="mb-8"
              />
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Hola, soy Daniel Martinez, y he estado construyendo espacios al aire libre en la Cuenca de Columbia por más de 20 años.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Comencé Martinez Mowing & More en 2021 porque vi a demasiados propietarios—especialmente aquí en Desert Aire—siendo estafados por contratistas que prometían demasiado, entregaban poco, o desaparecían a mitad de un trabajo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Quería construir algo diferente. Una compañía donde tu proyecto se hace bien, a tiempo, y con el tipo de atención al detalle que te emociona mostrar a tus vecinos.
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
          <ImagePlaceholder
            text="[Foto de proyecto completado o equipo trabajando]"
            height="h-80"
            className="mb-8"
          />
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Ya sea una cerca personalizada para enmarcar tu vista, un nuevo sistema de riego para mantener tu césped verde durante el verano, o mantenimiento mensual para que realmente puedas disfrutar tus fines de semana—tratamos tu propiedad como si fuera nuestra.
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
