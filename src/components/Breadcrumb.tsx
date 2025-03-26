import Link from 'next/link'
import SchemaMarkup, { breadcrumbSchema } from './SchemaMarkup'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <>
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema(items)} />
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            {items.map((item, index) => (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {index === items.length - 1 ? (
                  <span className="text-gray-500">{item.name}</span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-[#39A9DC] hover:text-opacity-80 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
} 