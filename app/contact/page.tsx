import type { Metadata } from 'next'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClipboardCheck, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Contact Us | Martinez Mowing & More LLC',
  description:
    'Get a free quote for your landscaping project in Desert Aire or Mattawa, WA. Call (509) 932-1924 or email for fast response.',
}

export default function Contact() {
  return (
    <>
      <HeroSection
        title="Ready to Get Started?"
        subtitle="Tell us about your project and we'll send you a detailed quote—usually within 24 hours. No pressure, no pushy sales tactics."
        compact
        ctaText="Call Us Now"
        ctaLink="tel:5099321924"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <ImagePlaceholder
                  text="[Photo: Daniel Martinez headshot]"
                  height="h-24"
                  className="w-24 rounded-full flex-shrink-0"
                />
                <div>
                  <h2 className="text-3xl font-bold text-charcoal mb-2">
                    Request Your Free Quote
                  </h2>
                  <p className="text-gray-600">
                    Daniel personally responds to every request
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-lg mb-6">
                <p className="text-sm text-charcoal font-semibold">
                  ✓ No spam. No pressure. No pushy sales tactics.
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Just a straightforward conversation about your project.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Contact Info & Map */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-8">
                <a
                  href="tel:5099321924"
                  className="flex items-start gap-4 p-4 bg-cream rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FaPhone className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Phone</h3>
                    <p className="text-lg text-primary font-semibold">
                      (509) 932-1924
                    </p>
                    <p className="text-sm text-gray-600">
                      Call or text anytime
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:Martinezmowingandmorellc@gmail.com"
                  className="flex items-start gap-4 p-4 bg-cream rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FaEnvelope className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Email</h3>
                    <p className="text-primary font-medium break-all">
                      Martinezmowingandmorellc@gmail.com
                    </p>
                    <p className="text-sm text-gray-600">
                      We respond within 24 hours
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-cream rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">
                      Service Area
                    </h3>
                    <p className="text-gray-700">
                      Desert Aire, Mattawa, WA
                      <br />
                      and surrounding areas
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <ImagePlaceholder
                text="[Google Maps Embed - Desert Aire/Mattawa service area]"
                height="h-80"
                className="rounded-xl"
              />

              <div className="mt-6 p-4 bg-accent/10 border-l-4 border-accent rounded-lg">
                <h3 className="font-bold text-charcoal mb-2">
                  Licensed & Insured
                </h3>
                <p className="text-gray-700">
                  General Contractor #MARTIMM744B1
                  <br />
                  Fully insured for your peace of mind
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-12">
            What Happens After You Submit
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClipboardCheck className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                1. We Review Your Details
              </h3>
              <p className="text-gray-600">
                Daniel personally reviews your project information and
                considers the best approach for your specific needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhoneAlt className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                2. Daniel Calls You Within 24 Hours
              </h3>
              <p className="text-gray-600">
                No automated responses. You'll get a personal call from Daniel
                to discuss your vision and answer any questions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarCheck className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                3. We Schedule Your Free On-Site Estimate
              </h3>
              <p className="text-gray-600">
                We'll visit your property, take measurements, and provide a
                detailed, transparent quote. No pressure to decide on the spot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-charcoal mb-4">
            Business Hours
          </h3>
          <p className="text-lg text-gray-700 mb-2">
            Monday - Saturday: 7:00 AM - 6:00 PM
          </p>
          <p className="text-lg text-gray-700">
            Sunday: By appointment
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Emergency services available for existing maintenance clients
          </p>
        </div>
      </section>
    </>
  )
}
