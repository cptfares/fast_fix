export const SITE_NAME = 'FastFix Glass & Door Repair'
export const SITE_URL = 'https://fastfix.com'
export const SITE_DESCRIPTION = 'Professional glass and door repair services in the DMV area'
export const SITE_KEYWORDS = ['glass repair', 'door repair', 'emergency service', 'DMV area', 'commercial glass', 'residential glass']

export const CONTACT_INFO = {
  phone: '+1-555-555-5555',
  email: 'info@fastfix.com',
  address: '123 Main St, Washington, DC 20001',
  hours: '24/7 Emergency Service',
}

export const SERVICE_CATEGORIES = {
  residential: {
    title: 'Residential Services',
    path: '/residential-services',
    services: [
      { title: 'Glass Repair & Replacement', path: '/glass-repair-replacement' },
      { title: 'Glass Door Repair', path: '/glass-door-repair' },
      { title: 'Shower Door Repair', path: '/shower-door-repair' },
      { title: 'Sliding Door Repair', path: '/sliding-door-repair' },
      { title: 'Patio Door Repair', path: '/patio-door-repair' },
      { title: 'Door Repair', path: '/door-repair' },
      { title: 'Door Frame Repair', path: '/door-frame-repair' },
    ],
  },
  commercial: {
    title: 'Commercial Services',
    path: '/commercial-services',
    services: [
      { title: 'Storefront Glass', path: '/storefront' },
      { title: 'Automatic Doors', path: '/automatic-doors' },
      { title: 'Security Glass', path: '/security-glass' },
    ],
  },
  emergency: {
    title: 'Emergency Services',
    path: '/emergency-services',
    services: [
      { title: '24/7 Emergency Service', path: '/24-7' },
      { title: 'Fast Response Time', path: '/response-time' },
      { title: 'Insurance Claims', path: '/insurance' },
    ],
  },
}

export const BENEFITS = [
  {
    title: '24/7 Emergency Service',
    description: 'Available around the clock for all your emergency needs',
    icon: 'clock',
  },
  {
    title: 'Expert Technicians',
    description: 'Highly trained and certified professionals',
    icon: 'user',
  },
  {
    title: 'Quality Materials',
    description: 'Premium materials and parts for lasting repairs',
    icon: 'shield',
  },
  {
    title: 'Guaranteed Workmanship',
    description: '100% satisfaction guaranteed on all work',
    icon: 'check',
  },
]

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/fastfix',
  twitter: 'https://twitter.com/fastfix',
  instagram: 'https://instagram.com/fastfix',
  linkedin: 'https://linkedin.com/company/fastfix',
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const COLORS = {
  primary: '#39A9DC',
  secondary: '#2C3E50',
  accent: '#E74C3C',
  background: '#FFFFFF',
  text: '#1A1A1A',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
}

export const FONTS = {
  sans: 'Inter, system-ui, -apple-system, sans-serif',
  serif: 'Georgia, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
}

export const ANIMATIONS = {
  transition: 'all 0.3s ease-in-out',
  hover: {
    scale: 1.05,
    translateY: -2,
  },
} 