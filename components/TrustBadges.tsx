import { FaCertificate, FaAward, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa'

export default function TrustBadges() {
  const badges = [
    {
      icon: FaCertificate,
      title: 'Licensed GC',
      description: '#MARTIMM744B1',
    },
    {
      icon: FaAward,
      title: '20+ Years Experience',
      description: 'Proven expertise',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Desert Aire Specialists',
      description: 'We know the HOA',
    },
    {
      icon: FaDollarSign,
      title: 'No Surprises Pricing',
      description: 'Clear, honest quotes',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-cream hover:bg-primary/5 transition-colors"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <badge.icon className="text-3xl text-primary" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">
                {badge.title}
              </h3>
              <p className="text-gray-600 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
