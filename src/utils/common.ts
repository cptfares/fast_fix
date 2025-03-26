export const formatPhoneNumber = (phone: string) => {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return phone
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

type FunctionType = (...args: unknown[]) => unknown

export const debounce = <T extends FunctionType>(
  func: T,
  wait: number
) => {
  let timeout: NodeJS.Timeout

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

export const getServiceCategory = (path: string) => {
  const categories = {
    '/residential-services': 'Residential Services',
    '/commercial-services': 'Commercial Services',
    '/emergency-services': 'Emergency Services',
  }
  return categories[path as keyof typeof categories] || 'Services'
}

export const generateMetaDescription = (service: string, location: string = 'DMV') => {
  return `Professional ${service} services in the ${location} area. 24/7 emergency service, expert technicians, and guaranteed workmanship.`
} 