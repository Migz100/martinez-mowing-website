'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    projectDescription: '',
    contactMethod: 'phone',
  })

  const services = [
    'Fences',
    'Plants & Sod',
    'Property Maintenance',
    'Retaining Walls',
    'Decks/Pergolas/Outdoor Structures',
    'Irrigation & Drainage',
    'Other',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(
      `Quote Request: ${formData.service || 'General Inquiry'}`
    )
    const body = encodeURIComponent(`
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Preferred Contact Method: ${formData.contactMethod}

Project Description:
${formData.projectDescription}
    `)

    window.location.href = `mailto:Martinezmowingandmorellc@gmail.com?subject=${subject}&body=${body}`
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-charcoal mb-2"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-charcoal mb-2"
        >
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-charcoal mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-charcoal mb-2"
        >
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
        >
          <option value="">Select a service...</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Project Description */}
      <div>
        <label
          htmlFor="projectDescription"
          className="block text-sm font-semibold text-charcoal mb-2"
        >
          Project Description *
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          required
          rows={5}
          value={formData.projectDescription}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y"
          placeholder="Tell us about your project..."
        />
      </div>

      {/* Contact Method */}
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-3">
          Preferred Contact Method *
        </label>
        <div className="flex flex-wrap gap-4">
          {['phone', 'email', 'text'].map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={formData.contactMethod === method}
                onChange={handleChange}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-charcoal capitalize">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg"
      >
        Send Quote Request
      </button>

      <p className="text-sm text-gray-600 text-center">
        We typically respond within 24 hours. All quotes are free with no obligation.
      </p>
    </form>
  )
}
