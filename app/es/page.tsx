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
        '¡Sí! Somos un Contratista General totalmente licenciado (GC #MARTIMM744B1) con seguro de responsabilidad civil integral. Manejamos todos los permisos y nos aseguramos de que cada proyecto cumpla con los códigos locales y requisitos de HOA — ya sea en Desert Aire, Pasco, o Moses Lake.',
    },
    {
      question: '¿Qué áreas atienden?',
      answer:
        'Nuestra base está en Desert Aire y Mattawa, pero servimos toda la Cuenca de Columbia: Tri-Cities (Pasco, Kennewick, Richland), Moses Lake, Othello y comunidades alrededor. 8+ años trabajando en esta región — conocemos el clima, el suelo y los requisitos de cada área.',
    },
    {
      question: '¿Cuánto tiempo toman los proyectos?',
      answer:
        'Depende del trabajo. La mayoría de las cercas se completan en 3-5 días. Instalaciones de césped y jardinería toman 1-3 días. Proyectos más grandes como terrazas o muros de retención se estiman durante tu consulta gratuita. Siempre damos plazos realistas por adelantado.',
    },
    {
      question: '¿Manejan aprobaciones de HOA?',
      answer:
        'Claro que sí. Conocemos los requisitos de HOA de Desert Aire al derecho y al revés, y también trabajamos con regulaciones de comunidades en Pasco, Kennewick y otras áreas de la Cuenca de Columbia.',
    },
    {
      question: '¿Qué pasa después de que envío mi solicitud?',
      answer:
        'Daniel revisa personalmente cada solicitud y te llama dentro de 24 horas. Programamos una visita gratuita a tu propiedad para ver el espacio, platicar tu visión y darte una cotización detallada — sin presión.',
    },
    {
      question: '¿Ofrecen planes de pago?',
      answer:
        'Trabajamos contigo para crear una estructura de pago que se ajuste a tu presupuesto. Los detalles se platican durante la estimación. Queremos que tu proyecto sea realidad sin estrés financiero.',
    },
  ]

  const services = [
    {
      title: 'Cercas',
      description:
        'Cercas personalizadas de madera, vinilo y compuesto — construidas para el viento, el sol y los estándares de HOA de la Cuenca de Columbia.',
      icon: HiOutlineViewGrid,
      href: '/es/servicios/cercas',
      image: '/images/fences.jpg',
      price: 'Desde $8,000',
    },
    {
      title: 'Plantas y Césped',
      description:
        'Paisajes verdes y exuberantes que prosperan en el clima de la Cuenca de Columbia. Desde patios en Pasco hasta jardines en Desert Aire.',
      icon: HiOutlineColorSwatch,
      href: '/es/servicios/plantas-cesped',
      image: '/images/plants-sod.jpg',
      price: 'Desde $6,000',
    },
    {
      title: 'Mantenimiento de Propiedad',
      description:
        'Mantenimiento todo el año para que disfrutes tu propiedad sin perder los fines de semana en el jardín.',
      icon: HiOutlineCog,
      href: '/es/servicios/mantenimiento',
      image: '/images/maintenance.jpg',
      price: '$300-700/mes',
    },
    {
      title: 'Muros de Retención',
      description:
        'Soluciones estructurales que resuelven erosión y agregan belleza a tu paisaje — en cualquier terreno de la Cuenca de Columbia.',
      icon: HiOutlineCube,
      href: '/es/servicios/muros-retencion',
      image: '/images/retaining-walls.jpg',
    },
    {
      title: 'Terrazas/Pérgolas/Estructuras',
      description:
        'Estructuras al aire libre que extienden tu espacio de vida. Tu patio trasero se convierte en tu lugar favorito.',
      icon: HiOutlineHome,
      href: '/es/servicios/estructuras-exteriores',
      image: '/images/outdoor-structures.jpg',
    },
    {
      title: 'Irrigación y Drenaje',
      description:
        'Sistemas de riego inteligentes que ahorran agua y mantienen todo verde durante los veranos secos de la Cuenca de Columbia.',
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
        title="El Equipo de Jardinería Más Confiable de la Cuenca de Columbia"
        subtitle="Cercas premium, jardinería profesional y mantenimiento sin preocupaciones — de Desert Aire a Tri-Cities. 8+ años de experiencia, licencia de contratista general y servicio completamente bilingüe."
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
              Desde cercas en Kennewick hasta jardines completos en Desert Aire — 8+ años de experiencia en cada proyecto de la Cuenca de Columbia.
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
                De Desert Aire Para Toda la Cuenca de Columbia
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hola, soy Daniel Martinez. Llevo 8 años trabajando en jardinería y construcción exterior por toda la Cuenca de Columbia.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Fundé Martinez Mowing & More en 2021 porque vi a demasiados propietarios — en Desert Aire, en Pasco, en Moses Lake — siendo estafados por contratistas que prometían mucho y entregaban poco, o desaparecían a mitad de un trabajo.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Quería algo diferente. Una compañía donde tu proyecto se hace bien, a tiempo, y con la atención al detalle que te emociona mostrar a tus vecinos. Eso es lo que hacemos todos los días.
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
        title="No Dejes Que Tu Propiedad Pierda Valor"
        subtitle="Cada temporada sin mantenimiento adecuado te cuesta dinero. Cada mejora que pospones es una oportunidad perdida. Ya sea en Desert Aire, Tri-Cities o Moses Lake — transformemos tu espacio exterior antes de que pase otro verano."
        ctaText="Solicita Tu Cotización Gratis"
        ctaLink="/es/contacto"
      />
    </>
  )
}
