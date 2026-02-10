import { FaClipboardList, FaHome, FaHammer } from 'react-icons/fa'

export default function HowItWorks() {
  const steps = [
    {
      icon: FaClipboardList,
      number: '1',
      title: 'Request Quote',
      description:
        'Fill out our quick form or call us. Tell us about your project vision.',
    },
    {
      icon: FaHome,
      number: '2',
      title: 'We Visit Your Property',
      description:
        'Daniel personally visits your property for a free, no-pressure estimate.',
    },
    {
      icon: FaHammer,
      number: '3',
      title: 'We Build Your Vision',
      description:
        'Transparent timeline, clear communication, quality work. You\'ll love coming home.',
    },
  ]

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From first contact to final walkthrough, we make the process simple,
            transparent, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connecting Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary/20 z-0" />
              )}

              {/* Step Content */}
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center relative">
                  <step.icon className="text-4xl text-white" />
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center border-4 border-white">
                    <span className="text-charcoal font-bold text-lg">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Don't let another season pass with an unfinished yard.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  )
}
