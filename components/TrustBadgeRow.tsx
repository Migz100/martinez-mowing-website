import { FaCertificate, FaShieldAlt, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'

export default function TrustBadgeRow() {
  const badges = [
    { icon: FaCertificate, text: 'Licensed GC' },
    { icon: FaShieldAlt, text: 'Fully Insured' },
    { icon: FaMapMarkerAlt, text: 'Local to WA' },
    { icon: FaCalendarAlt, text: 'Est. 2021' },
  ]

  return (
    <div className="bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-primary font-semibold"
            >
              <badge.icon className="text-base" />
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
