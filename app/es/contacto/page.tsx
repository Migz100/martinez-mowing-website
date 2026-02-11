import type { Metadata } from 'next'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClipboardCheck, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Cotización Gratis - Jardinería y Cercas Cuenca de Columbia WA',
  description: 'Obtén una cotización gratuita para tu proyecto de jardinería en Desert Aire, Mattawa, Tri-Cities, Moses Lake u Othello. Respuesta rápida. GC Licenciado #MARTIMM744B1. Llama al (509) 932-1924.',
  alternates: { canonical: 'https://martinezmowingandmore.com/es/contacto' },
}

export default function ContactoES() {
  const breadcrumbItems = [{ name: 'Contacto' }]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection
        title="¿Listo para Empezar?"
        subtitle="Cuéntanos sobre tu proyecto y te enviaremos una cotización detallada—generalmente dentro de 24 horas. Sin presión, sin tácticas de venta agresivas."
        compact
        ctaText="Llámanos Ahora"
        ctaLink="tel:5099321924"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="relative h-24 w-24 rounded-full flex-shrink-0 overflow-hidden shadow-lg">
                <Image
                  src="/images/backyard.jpg"
                  alt="Foto: Daniel Martinez"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
                <div>
                  <h2 className="text-3xl font-bold text-charcoal mb-2">
                    Solicita Tu Cotización Gratis
                  </h2>
                  <p className="text-gray-600">
                    Daniel responde personalmente a cada solicitud
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-lg mb-6">
                <p className="text-sm text-charcoal font-semibold">
                  ✓ Sin spam. Sin presión. Sin tácticas de venta agresivas.
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Solo una conversación directa sobre tu proyecto.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Ponte en Contacto
              </h2>

              <div className="space-y-6 mb-8">
                <a
                  href="tel:5099321924"
                  className="flex items-start gap-4 p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors group"
                >
                  <FaPhone className="text-2xl text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors">
                      Llama o Envía Mensaje de Texto
                    </h3>
                    <p className="text-lg text-gray-700">(509) 932-1924</p>
                    <p className="text-sm text-gray-600">
                      Respuesta en 24 horas o menos
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:Martinezmowingandmorellc@gmail.com"
                  className="flex items-start gap-4 p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors group"
                >
                  <FaEnvelope className="text-2xl text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors">
                      Envíanos un Correo
                    </h3>
                    <p className="text-sm text-gray-700 break-all">
                      Martinezmowingandmorellc@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-cream rounded-lg">
                  <FaMapMarkerAlt className="text-2xl text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-charcoal">Área de Servicio</h3>
                    <p className="text-gray-700">
                      Desert Aire y Mattawa (Principal)
                      <br />
                      Tri-Cities, Moses Lake, Othello
                      <br />
                      <span className="text-sm text-gray-600">Sirviendo toda la Cuenca de Columbia</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  Qué Esperar
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <FaClipboardCheck className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal">Paso 1: Envía Tu Solicitud</p>
                      <p className="text-sm text-gray-600">Completa el formulario o llámanos</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaPhoneAlt className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal">Paso 2: Te Llamamos</p>
                      <p className="text-sm text-gray-600">Daniel te contacta dentro de 24 horas</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaCalendarCheck className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal">Paso 3: Visita al Sitio</p>
                      <p className="text-sm text-gray-600">Consulta gratuita y cotización detallada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
