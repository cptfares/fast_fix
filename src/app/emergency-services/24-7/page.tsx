import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: '24/7 Emergency Glass Repair Service | FastFix',
  description: 'Round-the-clock emergency glass repair and replacement services across the DMV region. Available 24/7 for urgent situations.',
}

const features = [
  '24/7 Emergency Response',
  'Same-Day Service',
  'All Types of Glass',
  'Licensed & Insured',
  'Emergency Board-Up',
  'Insurance Claims Help'
]

export default function EmergencyService() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
              src="/images/IMG_4291.JPG"
         alt="24/7 Emergency Glass Repair Service"
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
                24/7 Emergency Glass Repair Service
              </h1>
              <p className="text-lg text-white/90 mb-6 max-w-xl">
                Available around the clock for all your emergency glass repair needs. Fast response times across the DMV area.
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
            <h2 className="text-4xl font-bold mb-8 text-[#000000]">Round-the-Clock Emergency Service</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              When you&apos;re facing a glass emergency, you need a reliable service provider who can respond quickly.
              FastFix Glass Repair is here for you 24/7, ready to handle any glass repair emergency in the DMV region.
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
              src="/images/IMG_4291.JPG"
              alt="24/7 Emergency Glass Service"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xl text-white/90">
                Available 24/7 for all emergency situations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}