'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa'
import {
  HiOutlineViewGrid,
  HiOutlineColorSwatch,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineHome,
  HiOutlineBeaker,
} from 'react-icons/hi'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import TrustBadges from '@/components/TrustBadges'
import CTABanner from '@/components/CTABanner'
import SocialProofBanner from '@/components/SocialProofBanner'
import HowItWorks from '@/components/HowItWorks'
import FAQAccordion from '@/components/FAQAccordion'
import StructuredData, {
  webSiteSchema,
  createFAQSchema,
} from '@/components/StructuredData'

export default function HomeES() {
  const faqs = [
    {
      question: '¿Están licenciados y asegurados?',
      answer:
        '¡Sí! Somos un Contratista General totalmente licenciado (GC #MARTIMM744B1) y contamos con un seguro de responsabilidad civil integral. Manejamos todos los permisos y nos aseguramos de que cada proyecto cumpla con los códigos de construcción locales y los requisitos de la HOA.',
    },
    {
      question: '¿Qué áreas atienden?',
      answer:
        'Atendemos principalmente Desert Aire, Mattawa y las áreas circundantes en la Cuenca de Columbia. Conocemos este clima, suelo y requisitos de HOA mejor que nadie.',
    },
    {
      question: '¿Cuánto tiempo toman típicamente los proyectos?',
      answer:
        'Depende del proyecto. La mayoría de las cercas se completan en 3-5 días. Las instalaciones de césped y jardinería toman 1-3 días. Los proyectos más grandes como terrazas o muros de retención se estiman durante su consulta gratuita. Siempre proporcionamos plazos realistas por adelantado.',
    },
    {
      question: '¿Manejan las aprobaciones de la HOA?',
      answer:
        'Absolutamente. Conocemos los requisitos de la HOA de Desert Aire al derecho y al revés. Podemos ayudarle a navegar el proceso de aprobación y asegurarnos de que su proyecto cumpla con todos los estándares de la comunidad.',
    },
    {
      question: '¿Qué pasa después de que envío una solicitud de cotización?',
      answer:
        'Daniel revisa personalmente su solicitud y lo llama dentro de las 24 horas. Programaremos una visita gratuita al lugar para ver su propiedad, discutir su visión y proporcionar una cotización detallada sin presión.',
    },
    {
      question: '¿Ofrecen planes de pago?',
      answer:
        'Trabajamos con usted para crear una estructura de pago que se ajuste a su presupuesto. Los detalles se discuten durante su estimación. Nuestro objetivo es hacer que su visión al aire libre sea asequible y sin estrés.',
    },
  ]

  const services = [
    {
      title: 'Cercas',
      description:
        'Cercas personalizadas de madera, vinilo y compuesto diseñadas para los estándares de viento, sol y HOA de Desert Aire.',
      icon: HiOutlineViewGrid,
      href: '/es/servicios/cercas',
      image: '/images/fences.jpg',
      price: 'Desde $8,000',
    },
    {
      title: 'Plantas y Césped',
      description:
        'Paisajes verdes y exuberantes que prosperan en el clima de la Cuenca de Columbia con resultados de calidad resort.',
      icon: HiOutlineColorSwatch,
      href: '/es/servicios/plantas-cesped',
      image: '/images/plants-sod.jpg',
      price: 'Desde $6,000',
    },
    {
      title: 'Mantenimiento de Propiedad',
      description:
        'Mantenimiento durante todo el año para que pueda disfrutar de su propiedad sin pasar los fines de semana trabajando en el jardín.',
      icon: HiOutlineCog,
      href: '/es/servicios/mantenimiento',
      image: '/images/maintenance.jpg',
      price: '$300-700/mes',
    },
    {
      title: 'Muros de Retención',
      description:
        'Soluciones estructurales que resuelven problemas de erosión mientras agregan belleza y valor a su paisaje.',
      icon: HiOutlineCube,
      href: '/es/servicios/muros-retencion',
      image: '/images/retaining-walls.jpg',
    },
    {
      title: 'Terrazas/Pérgolas/Estructuras',
      description:
        'Estructuras al aire libre personalizadas que extienden su espacio de vida y hacen de su patio trasero un destino.',
      icon: HiOutlineHome,
      href: '/es/servicios/estructuras-exteriores',
      image: '/images/outdoor-structures.jpg',
    },
    {
      title: 'Irrigación y Drenaje',
      description:
        'Sistemas de riego inteligentes que ahorran agua y mantienen todo verde durante los veranos de Desert Aire.',
      icon: HiOutlineBeaker,
      href: '/es/servicios/irrigacion',
      image: '/images/irrigation.jpg',
    },
  ]

  return (
    <>
      {/* Structured Data */}
      <StructuredData data={[webSiteSchema, createFAQSchema(faqs)]} />

      {/* Hero Section */}
      <HeroSection
        title="El Contratista en Quien Tus Vecinos de Desert Aire Ya Confían"
        subtitle="Cercas premium, jardinería profesional, y mantenimiento sin preocupaciones para vivir cerca del campo de golf. Conocemos los estándares de HOA, el suelo, y exactamente qué prospera aquí."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
        secondaryCta={
          <a
            href="tel:5099321924"
            className="flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
          >
            <FaPhone />
            Llama al (509) 932-1924
          </a>
        }
      />

      {/* Social Proof Banner */}
      <SocialProofBanner />

      {/* Services Overview */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Desde cercas personalizadas hasta transformaciones completas de paisajismo, aportamos más de 20 años de experiencia a cada proyecto en Desert Aire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} learnMoreText="Ver Más" />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* About Preview */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/team-work.jpg"
                  alt="Foto del propietario - Daniel Martinez en el sitio de trabajo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Construido en Reputación, Impulsado por Artesanía
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hola, soy Daniel Martinez, y he estado construyendo espacios al aire libre en la Cuenca de Columbia por más de 20 años.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Comencé Martinez Mowing & More en 2021 porque vi a demasiados propietarios—especialmente aquí en Desert Aire—siendo estafados por contratistas que prometían demasiado, entregaban poco, o desaparecían a mitad de un trabajo.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Quería construir algo diferente. Una compañía donde tu proyecto se hace bien, a tiempo, y con el tipo de atención al detalle que te emociona mostrar a tus vecinos.
              </p>
              <Link
                href="/es/sobre"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Conoce Más Sobre Nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* FAQs */}
      <FAQAccordion faqs={faqs} />

      {/* CTA Banner */}
      <CTABanner
        title="¿Listo para Empezar?"
        subtitle="Cuéntanos sobre tu proyecto y te enviaremos una cotización detallada—generalmente dentro de 24 horas. Sin presión, sin tácticas de venta agresivas. Solo un desglose claro de lo que se necesita para hacer el trabajo bien."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
