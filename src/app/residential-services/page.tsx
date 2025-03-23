import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 'glass-repair-replacement',
    title: 'Residential Glass Repair and Replacement',
    description: 'Expert repair and replacement services for all types of residential glass, including windows, tabletops, and mirrors.',
    image: '/images/services/residential-glass-repair.jpg',
  },
  {
    id: 'glass-door-repair',
    title: 'Glass Door Repair & Replacement',
    description: 'Professional repair and replacement services for glass doors, ensuring smooth operation and enhanced security.',
    image: '/images/services/glass-door-repair.jpg',
  },
  {
    id: 'shower-door-repair',
    title: 'Glass Shower Door Repair & Installation',
    description: 'Specialized services for shower door repair, replacement, and new installations, including frameless options.',
    image: '/images/services/shower-door-repair.jpg',
  },
  {
    id: 'sliding-door-repair',
    title: 'Sliding Door Repair & Installation',
    description: 'Comprehensive repair and installation services for sliding doors, improving functionality and energy efficiency.',
    image: '/images/services/sliding-door-repair.jpg',
  },
  {
    id: 'patio-door-repair',
    title: 'Patio Door Repair & Replacement',
    description: 'Expert repair and replacement services for patio doors, enhancing your outdoor living space access.',
    image: '/images/services/patio-door-repair.jpg',
  },
  {
    id: 'door-repair',
    title: 'Door Repair & Replacement (Non-Glass)',
    description: 'Professional repair and replacement services for all types of non-glass doors.',
    image: '/images/services/door-repair.jpg',
  },
  {
    id: 'door-frame-repair',
    title: 'Door Frame Repair & Installation (Non-Glass)',
    description: 'Expert door frame repair and installation services, ensuring proper door alignment and security.',
    image: '/images/services/door-frame-repair.jpg',
  },
]

export const metadata = {
  title: 'Residential Services | FastFix Glass & Door Repair',
  description: 'Professional residential glass and door repair services in the DMV area. Expert technicians, 24/7 emergency service, and guaranteed workmanship.',
}

export default function ResidentialServices() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#000000]">
              Residential Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional glass and door repair services for your home. Expert technicians, quality materials, and guaranteed workmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/residential-services/${service.id}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#000000] group-hover:text-[#39A9DC] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-[#39A9DC] font-medium">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#39A9DC]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Need Help With Your Home?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our expert technicians are ready to help with any glass or door repair needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="bg-white text-[#39A9DC] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 