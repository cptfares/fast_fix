import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fastfix.com'

  // Define your static routes
  const routes = [
    '',
    '/services',
    '/about',
    '/contact',
    '/areas-we-serve',
    '/glass-repair',
    '/door-repair',
    '/emergency-services',
    '/commercial-services',
    '/residential-services',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
} 