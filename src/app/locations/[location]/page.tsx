import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SchemaMarkup, { localBusinessSchema } from '@/components/SchemaMarkup'
import LocalSEO from '@/components/LocalSEO'
import { SERVICE_CATEGORIES } from '@/constants'

interface LocationPageProps {
  params: {
    location: string
  }
}

const locations = {
  'washington-dc': {
    name: 'Washington DC',
    description: 'Professional glass repair services in Washington DC. Fast response times and 24/7 emergency service available.',
    image: '/images/locations/washington-dc.jpg',
    address: 'Washington, DC 20001',
    coordinates: {
      latitude: '38.8951',
      longitude: '-77.0364'
    }
  },
  'montgomery-county-md': {
    name: 'Montgomery County MD',
    description: 'Expert glass repair services in Montgomery County, Maryland. Same-day service and emergency repairs available.',
    image: '/images/locations/montgomery-county.jpg',
    address: 'Montgomery County, MD',
    coordinates: {
      latitude: '39.1542',
      longitude: '-77.2405'
    }
  },
  'prince-georges-county-md': {
    name: 'Prince George&apos;s County MD',
    description: 'Professional glass repair services in Prince George&apos;s County, Maryland. 24/7 emergency service and quick response times.',
    image: '/images/locations/prince-georges-county.jpg',
    address: 'Prince George&apos;s County, MD',
    coordinates: {
      latitude: '38.8329',
      longitude: '-76.8253'
    }
  },
  'northern-virginia': {
    name: 'Northern Virginia',
    description: 'Expert glass repair services in Northern Virginia. Available 24/7 for emergency repairs and replacements.',
    image: '/images/locations/northern-virginia.jpg',
    address: 'Northern Virginia',
    coordinates: {
      latitude: '38.8048',
      longitude: '-77.0469'
    }
  }
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = locations[params.location as keyof typeof locations]
  
  if (!location) {
    return {
      title: 'Location Not Found | FastFix Glass & Door Repair'
    }
  }

  return {
    title: `Glass Repair Services in ${location.name} | FastFix`,
    description: location.description,
    keywords: [
      'glass repair',
      'door repair',
      'emergency service',
      `${location.name} glass repair`,
      'glass repair near me',
      'local glass repair',
      'same day glass repair',
      '24/7 glass repair',
      'storefront glass repair',
      'residential glass repair',
      'commercial glass repair',
      'emergency glass replacement',
      'glass door repair',
      'shower door repair',
      'sliding door repair',
      'patio door repair',
      'door frame repair',
      'automatic door repair',
      'security glass installation'
    ],
    alternates: {
      canonical: `/locations/${params.location}`,
    },
  }
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = locations[params.location as keyof typeof locations]
  
  if (!location) {
    notFound()
  }

  // Create location-specific schema
  const locationSchema = {
    ...localBusinessSchema,
    name: `FastFix Glass & Door Repair - ${location.name}`,
    description: location.description,
    address: {
      ...localBusinessSchema.address,
      addressLocality: location.name,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude
    }
  }

  return (
    <>
      <SchemaMarkup type="LocalBusiness" data={locationSchema} />
      
      <div className="relative h-[400px] w-full">
        <Image
          src={location.image}
          alt={`Glass repair services in ${location.name}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-900/80">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Glass Repair Services in {location.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {location.description}
            </p>
          </div>
        </div>
      </div>

      <LocalSEO service="Glass Repair" location={location.name} />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Glass Repair Services in {location.name}
              </h2>
              <p className="text-gray-600 mb-6">
                FastFix provides comprehensive glass repair and replacement services throughout {location.name}. 
                Our team of expert technicians is available 24/7 for emergency repairs, ensuring minimal disruption to your home or business.
              </p>
              <p className="text-gray-600 mb-6">
                We specialize in all types of glass repairs, including residential windows, commercial storefronts, 
                shower doors, sliding doors, and patio doors. Our commitment to quality materials and workmanship 
                ensures that your repairs will last for years to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Request a Quote
                </Link>
                <a 
                  href="tel:+15715239063" 
                  className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
                >
                  Call Now: (571) 523-9063
                </a>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/services/glass-repair-service.jpg"
                alt={`Glass repair technician in ${location.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Glass Repair Services in {location.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.residential.services.map((service) => (
              <Link 
                key={service.path} 
                href={`/residential-services${service.path}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">
                  Professional {service.title.toLowerCase()} services in {location.name}. 
                  Fast response times and quality workmanship.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose FastFix for Glass Repair in {location.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Available around the clock for all your emergency glass repair needs in {location.name}.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                Highly trained and certified professionals with years of experience in {location.name}.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Materials</h3>
              <p className="text-gray-600">
                Premium materials and parts for lasting repairs in {location.name}.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Guaranteed Workmanship</h3>
              <p className="text-gray-600">
                100% satisfaction guaranteed on all work performed in {location.name}.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Glass Repair in {location.name}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact FastFix today for professional glass repair services. We&apos;re available 24/7 for emergency repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <a 
              href="tel:+15715239063" 
              className="bg-transparent text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Call Now: (571) 523-9063
            </a>
          </div>
        </div>
      </div>
    </>
  )
}