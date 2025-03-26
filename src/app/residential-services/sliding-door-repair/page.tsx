import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Sliding Door Repair & Installation | FastFix',
  description: 'Expert sliding door repair and installation services across the DMV region. Available 24/7.',
}

const features = [
  'Patio Sliding Doors',
  'Glass Track Repairs',
  'Roller Replacement',
  'Custom Door Solutions',
  'Emergency Repairs',
  '24/7 Service Available'
]

export default function SlidingDoorRepair() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="/images/IMG_4335.jpg"
          alt="Professional sliding door repair"
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
                Sliding Door Repair & Installation
              </h1>
              <p className="text-lg text-white/90 mb-6 max-w-xl">
                Expert sliding door solutions for your home. Fast, reliable service across the DMV area.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+15715239063"
                  className="inline-block bg-white text-[#39A9DC] px-6 py-3 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold"
                >
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className="inline-block bg-transparent text-white border-2 border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#39A9DC] transition-all transform hover:scale-105 font-semibold"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Main Content */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-[#000000]">Expert Sliding Door Solutions</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              FastFix specializes in all types of sliding door repairs and installations. From track repairs 
              to complete replacements, our certified technicians ensure smooth operation and security.
            </p>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-[#39A9DC] text-2xl">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#39A9DC] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold shadow-lg"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+15715239063"
                className="inline-block bg-white text-[#39A9DC] border-2 border-[#39A9DC] px-8 py-4 rounded-md hover:bg-[#39A9DC]/5 transition-all transform hover:scale-105 font-semibold"
              >
                +1 240-968-5060
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/IMG_4335.jpg"
              alt="Professional sliding door repair service"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xl text-white/90">
                Professional repairs by certified technicians
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 