import Script from 'next/script'

type SchemaData = {
  name?: string
  url?: string
  logo?: string
  description?: string
  address?: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  contactPoint?: {
    '@type': string
    telephone: string
    contactType: string
    areaServed: string[]
    availableLanguage: string[]
  }
  sameAs?: string[]
  openingHoursSpecification?: Array<{
    '@type': string
    dayOfWeek: string[]
    opens: string
    closes: string
  }>
  priceRange?: string
  areaServed?: string[]
  hasMap?: string
  geo?: {
    '@type': string
    latitude: string
    longitude: string
  }
  aggregateRating?: {
    '@type': string
    ratingValue: string
    reviewCount: string
  }
  provider?: {
    '@type': string
    name: string
  }
  availableAtOrFrom?: {
    '@type': string
    address: {
      '@type': string
      streetAddress: string
      addressLocality: string
      addressRegion: string
      postalCode: string
      addressCountry: string
    }
  }
  itemListElement?: Array<{
    '@type': string
    position: number
    name: string
    item: string
  }>
}

interface SchemaMarkupProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'BreadcrumbList'
  data: SchemaData
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const organizationSchema = {
  name: 'FastFix Glass & Door Repair',
  url: 'https://fastfix.com',
  logo: 'https://fastfix.com/images/logo.png',
  description: 'Professional glass and door repair services in the DMV area',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main St',
    addressLocality: 'Washington',
    addressRegion: 'DC',
    postalCode: '20001',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-555-5555',
    contactType: 'customer service',
    areaServed: ['Washington DC', 'Montgomery County MD', 'Prince George\'s County MD', 'Northern Virginia'],
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://facebook.com/fastfix',
    'https://instagram.com/fastfix',
    'https://twitter.com/fastfix',
    'https://linkedin.com/company/fastfix'
  ]
}

export const localBusinessSchema = {
  ...organizationSchema,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  priceRange: '$$',
  areaServed: ['Washington DC', 'Montgomery County MD', 'Prince George\'s County MD', 'Northern Virginia'],
  hasMap: 'https://www.google.com/maps?cid=YOUR_CID',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '38.8951',
    longitude: '-77.0364'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150'
  }
}

export const serviceSchema = (serviceName: string, description: string) => ({
  name: serviceName,
  description,
  provider: {
    '@type': 'LocalBusiness',
    name: 'FastFix Glass & Door Repair',
  },
  areaServed: ['Washington DC', 'Montgomery County MD', 'Prince George\'s County MD', 'Northern Virginia'],
  availableAtOrFrom: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main St',
      addressLocality: 'Washington',
      addressRegion: 'DC',
      postalCode: '20001',
      addressCountry: 'US',
    },
  },
})

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  const baseUrl = 'https://fastfix.com'
  return {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`
    }))
  }
} 