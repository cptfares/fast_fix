import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fastfix.com'
  const locations = [
    'washington-dc',
    'montgomery-county-md',
    'prince-georges-county-md',
    'northern-virginia'
  ]

  // Main pages
  const mainRoutes = [
    '',
    '/about',
    '/contact',
    '/residential-services/glass-repair-replacement',
    '/residential-services/glass-door-repair',
    '/residential-services/shower-door-repair',
    '/residential-services/sliding-door-repair',
    '/residential-services/patio-door-repair',
    '/residential-services/door-repair',
    '/residential-services/door-frame-repair',
    '/commercial-services/storefront',
    '/commercial-services/automatic-doors',
    '/commercial-services/security-glass',
    '/emergency-services/24-7',
    '/emergency-services/response-time',
    '/emergency-services/insurance'
  ]

  // Generate location-specific routes
  const locationRoutes = locations.flatMap(location => 
    mainRoutes.map(route => ({
      url: `${baseUrl}/${location}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 0.9 : 0.7,
    }))
  )

  // Generate main routes
  const routes = mainRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes, ...locationRoutes]
} 