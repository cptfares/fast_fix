interface LocalSEOProps {
  service: string
  location: string
}

export default function LocalSEO({ service, location }: LocalSEOProps) {
  const locations = [
    'Washington DC',
    'Montgomery County MD',
    'Prince George\'s County MD',
    'Northern Virginia'
  ]

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {service} Services in {location}
          </h2>
          <p className="text-gray-600 mb-6">
            FastFix provides professional {service.toLowerCase()} services throughout the DMV area.
            Available 24/7 for emergency repairs and replacements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <div
                key={loc}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900">{loc}</h3>
                <p className="text-sm text-gray-600">Same day service available</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 