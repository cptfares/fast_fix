import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Glass and Door Repair Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Professional Glass & Door Repair Services in DMV
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Fast, reliable, and professional repair services for your home and business. Available 24/7 for emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1234567890"
                className="bg-[#39A9DC] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Call Now
              </a>
              <Link
                href="/contact"
                className="bg-white text-[#39A9DC] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#39A9DC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#39A9DC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#000000]">24/7 Emergency Service</h3>
              <p className="text-gray-600">Available around the clock for all your emergency repair needs.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#39A9DC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#39A9DC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#000000]">Licensed & Insured</h3>
              <p className="text-gray-600">Professional technicians with proper licensing and insurance.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#39A9DC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#39A9DC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#000000]">Fast Response Time</h3>
              <p className="text-gray-600">Quick response and efficient service delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#000000]">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive glass and door repair solutions for both residential and commercial properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#39A9DC]/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#39A9DC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#000000]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#000000]">
              Areas We Serve
            </h2>
            <p className="text-gray-600 text-lg">
              Providing professional glass and door repair services throughout the DMV area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-[#39A9DC]/5 transition-colors"
              >
                <h3 className="font-semibold text-[#000000]">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#39A9DC]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today for a free quote or emergency service.
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
    </>
  )
}

const services = [
  {
    title: 'Glass Repair',
    description: 'Professional repair services for broken, cracked, or damaged glass in windows, doors, and more.',
  },
  {
    title: 'Door Repair',
    description: 'Expert repair and maintenance for all types of doors, including commercial and residential.',
  },
  {
    title: 'Emergency Services',
    description: '24/7 emergency response for urgent glass and door repair needs throughout the DMV area.',
  },
  {
    title: 'Commercial Services',
    description: 'Specialized glass and door repair services for businesses and commercial properties.',
  },
  {
    title: 'Residential Services',
    description: 'Comprehensive repair solutions for homeowners, including windows, doors, and glass fixtures.',
  },
  {
    title: 'Maintenance',
    description: 'Regular maintenance and inspection services to prevent future issues and ensure longevity.',
  },
]

const areas = [
  'Washington, DC',
  'Northern Virginia',
  'Maryland',
  'Montgomery County',
  'Prince George\'s County',
  'Fairfax County',
  'Arlington County',
  'Alexandria',
]
