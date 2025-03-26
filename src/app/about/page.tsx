import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About FastFix Glass Repair | Professional Glass Services',
  description: 'Learn about FastFix Glass Repair, your trusted partner for professional glass repair and replacement services in the DMV region.',
}

const values = [
  {
    title: 'Professional Excellence',
    description: 'Our team of certified technicians delivers the highest quality workmanship in every project.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: '24/7 Emergency Service',
    description: 'Available around the clock to handle any glass repair emergency when you need us most.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Customer Satisfaction',
    description: 'We prioritize your satisfaction with transparent communication and guaranteed work.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="/images/IMG_4284.jpg"
          alt="About FastFix Glass Repair"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(135deg, rgba(57, 169, 220, 0.95), rgba(57, 169, 220, 0.7))`,
          backgroundBlendMode: 'overlay'
        }} />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 text-white">
                About FastFix Glass Repair
              </h1>
              <p className="text-lg text-white/90 mb-6 max-w-xl">
                Your trusted partner for professional glass repair and replacement services in the DMV region.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-[#000000]">Our Story</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              FastFix Glass Repair was founded with a simple mission: to provide exceptional glass repair and 
              replacement services with unmatched reliability and professionalism. Since our establishment, we&apos;ve 
              been serving the DMV region with pride and dedication.
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our commitment to quality workmanship, customer satisfaction, and 24/7 emergency service has made 
              us the preferred choice for both residential and commercial clients throughout the area.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#39A9DC] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold shadow-lg"
              >
                Get in Touch
              </Link>
              <a
                href="tel:tel:+15715239063"
                className="inline-block bg-white text-[#39A9DC] border-2 border-[#39A9DC] px-8 py-4 rounded-md hover:bg-[#39A9DC]/5 transition-all transform hover:scale-105 font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/IMG_4284.jpg"
              alt="FastFix Glass Repair Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#000000]">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-[#39A9DC] mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#000000]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Area Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#000000]">Our Service Area</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We proudly serve the entire DMV region, providing professional glass repair and replacement 
            services to both residential and commercial clients.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-[#000000]">Washington, DC</h3>
              <p className="text-gray-600">All neighborhoods</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-[#000000]">Montgomery County</h3>
              <p className="text-gray-600">All areas</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-[#000000]">Prince George&apos;s County</h3>
              <p className="text-gray-600">All areas</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-[#000000]">Northern Virginia</h3>
              <p className="text-gray-600">All areas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 