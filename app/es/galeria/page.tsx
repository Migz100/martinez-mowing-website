import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import CTABanner from '@/components/CTABanner'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Galería de Proyectos - Martinez Mowing & More',
  description: 'Mira nuestros proyectos completados de jardinería, cercas y construcción en Desert Aire y Mattawa, WA.',
  alternates: { canonical: 'https://martinezmowingandmore.com/es/galeria' },
}

export default function GaleriaES() {
  const breadcrumbItems = [{ name: 'Galería' }]

  const projectCategories = [
    'Cercas',
    'Jardinería',
    'Mantenimiento',
    'Muros de Retención',
    'Estructuras Exteriores',
    'Irrigación',
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Nuestro Trabajo Habla Por Sí Mismo"
        subtitle="Mira las transformaciones que hemos creado para propietarios de Desert Aire y Mattawa."
        compact
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Proyectos Recientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada proyecto es una oportunidad para superar expectativas. Aquí hay algunos de nuestros trabajos recientes en la comunidad.
            </p>
          </div>

          {projectCategories.map((category, index) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold text-charcoal mb-6">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((num) => (
                  <ImagePlaceholder
                    key={`${category}-${num}`}
                    text={`[${category} - Proyecto ${num}]`}
                    height="h-64"
                    className="rounded-xl"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="¿Listo para Tu Propia Transformación?"
        subtitle="Creemos algo hermoso para tu propiedad. Cotizaciones gratuitas, sin presión."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
