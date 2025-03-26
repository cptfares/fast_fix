import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'FastFix Glass & Door Repair | Professional Services in DMV',
    template: '%s | FastFix Glass & Door Repair'
  },
  description: 'Professional glass and door repair services in Washington DC, Montgomery County MD, Prince George\'s County MD, and Northern Virginia. 24/7 emergency service, expert technicians, and guaranteed workmanship.',
  keywords: [
    'glass repair',
    'door repair',
    'emergency service',
    'DMV area',
    'commercial glass',
    'residential glass',
    'glass repair near me',
    'door repair near me',
    'emergency glass repair',
    'Washington DC glass repair',
    'Montgomery County glass repair',
    'Prince George\'s County glass repair',
    'Northern Virginia glass repair',
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
  authors: [{ name: 'FastFix Glass & Door Repair' }],
  creator: 'FastFix Glass & Door Repair',
  publisher: 'FastFix Glass & Door Repair',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fastfix.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fastfix.com',
    siteName: 'FastFix Glass & Door Repair',
    title: 'FastFix Glass & Door Repair | Professional Services in DMV',
    description: 'Professional glass and door repair services in Washington DC, Montgomery County MD, Prince George\'s County MD, and Northern Virginia. 24/7 emergency service, expert technicians, and guaranteed workmanship.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FastFix Glass & Door Repair - Professional Services in DMV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FastFix Glass & Door Repair | Professional Services in DMV',
    description: 'Professional glass and door repair services in Washington DC, Montgomery County MD, Prince George\'s County MD, and Northern Virginia. 24/7 emergency service, expert technicians, and guaranteed workmanship.',
    images: ['/images/twitter-image.jpg'],
    creator: '@fastfix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
} 