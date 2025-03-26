import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FastFix Glass & Door Repair',
    short_name: 'FastFix',
    description: 'Professional glass and door repair services in the DMV area',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#39A9DC',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
} 