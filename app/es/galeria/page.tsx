import type { Metadata } from 'next'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Galería de Proyectos - Jardinería y Cercas Cuenca de Columbia WA',
  description: 'Proyectos completados de jardinería, cercas y construcción exterior en Desert Aire, Tri-Cities, Moses Lake y toda la Cuenca de Columbia, WA.',
  alternates: { canonical: 'https://martinez-mowing-website.vercel.app/es/galeria' },
}

export default function GaleriaES() {
  const breadcrumbItems = [{ name: 'Galería' }]

  const projectCategories = [
    { name: 'Cercas', image: '/images/fences.jpg' },
    { name: 'Jardinería', image: '/images/plants-sod.jpg' },
    { name: 'Mantenimiento', image: '/images/maintenance.jpg' },
    { name: 'Muros de Retención', image: '/images/retaining-walls.jpg' },
    { name: 'Estructuras Exteriores', image: '/images/outdoor-structures.jpg' },
    { name: 'Irrigación', image: '/images/irrigation.jpg' },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="Nuestro Trabajo Habla Por Sí Mismo"
        subtitle="Transformaciones reales para propietarios en Desert Aire, Tri-Cities, Moses Lake y toda la Cuenca de Columbia."
        compact
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Proyectos Recientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada proyecto es una oportunidad para superar expectativas. Aquí tienes algunos trabajos recientes desde Desert Aire hasta Pasco y Moses Lake.
            </p>
          </div>

          {projectCategories.map((category, index) => (
            <div key={category.name} className="mb-12">
              <h3 className="text-2xl font-bold text-charcoal mb-6">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((num) => (
                  <div key={`${category.name}-${num}`} className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src={category.image}
                      alt={`${category.name} - Proyecto ${num}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="¿Listo para Tu Propia Transformación?"
        subtitle="Ya sea en Desert Aire, Kennewick o Moses Lake — creemos algo increíble para tu propiedad. Cotizaciones gratuitas, sin presión."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
