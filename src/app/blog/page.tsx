import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Glass Repair Blog | FastFix Glass & Door Repair',
  description: 'Expert tips, guides, and information about glass repair, door repair, and emergency services in the DMV area.',
  keywords: [
    'glass repair tips',
    'door repair guide',
    'emergency glass repair',
    'glass maintenance',
    'door maintenance',
    'glass repair blog',
    'door repair blog',
    'DMV glass repair',
    'Washington DC glass repair',
    'Montgomery County glass repair',
    'Prince George\'s County glass repair',
    'Northern Virginia glass repair'
  ],
}

const blogPosts = [
  {
    id: 1,
    title: 'Emergency Glass Repair: What to Do When Your Window Breaks',
    slug: 'emergency-glass-repair-what-to-do',
    excerpt: 'Learn what steps to take when you experience a broken window emergency, and how to find reliable 24/7 glass repair services in the DMV area.',
    date: '2023-06-15',
    author: 'FastFix Team',
    category: 'Emergency Services',
    image: '/images/blog/emergency-glass-repair.jpg',
    locationTags: ['Washington DC', 'Montgomery County MD', 'Prince George\'s County MD', 'Northern Virginia']
  },
  {
    id: 2,
    title: 'How to Choose the Right Glass Repair Company in Washington DC',
    slug: 'how-to-choose-glass-repair-company-dc',
    excerpt: 'A comprehensive guide to selecting a reliable glass repair company in Washington DC, including what to look for and questions to ask.',
    date: '2023-06-10',
    author: 'FastFix Team',
    category: 'Tips & Guides',
    image: '/images/blog/choose-glass-repair-company.jpg',
    locationTags: ['Washington DC']
  },
  {
    id: 3,
    title: 'Commercial Storefront Glass Repair: Common Issues and Solutions',
    slug: 'commercial-storefront-glass-repair',
    excerpt: 'Discover the most common issues with commercial storefront glass and how professional repair services can address them quickly and effectively.',
    date: '2023-06-05',
    author: 'FastFix Team',
    category: 'Commercial Services',
    image: '/images/blog/commercial-storefront-repair.jpg',
    locationTags: ['Washington DC', 'Montgomery County MD', 'Prince George\'s County MD', 'Northern Virginia']
  },
  {
    id: 4,
    title: 'Residential Glass Door Repair: DIY vs. Professional Service',
    slug: 'residential-glass-door-repair-diy-vs-professional',
    excerpt: 'Learn when you can tackle glass door repairs yourself and when it\'s best to call in the professionals for your home in the DMV area.',
    date: '2023-05-28',
    author: 'FastFix Team',
    category: 'Residential Services',
    image: '/images/blog/residential-glass-door-repair.jpg',
    locationTags: ['Washington DC', 'Montgomery County MD', 'Prince George\'s County MD', 'Northern Virginia']
  },
  {
    id: 5,
    title: 'Glass Repair Insurance Claims: A Complete Guide for DMV Residents',
    slug: 'glass-repair-insurance-claims-guide',
    excerpt: 'Everything you need to know about filing insurance claims for glass repair in Washington DC, Maryland, and Northern Virginia.',
    date: '2023-05-20',
    author: 'FastFix Team',
    category: 'Insurance',
    image: '/images/blog/insurance-claims-guide.jpg',
    locationTags: ['Washington DC', 'Montgomery County MD', 'Prince George\'s County MD', 'Northern Virginia']
  },
  {
    id: 6,
    title: 'Shower Door Repair: Common Problems and Professional Solutions',
    slug: 'shower-door-repair-common-problems',
    excerpt: 'Explore the most common issues with shower doors and how professional repair services can restore functionality and appearance.',
    date: '2023-05-15',
    author: 'FastFix Team',
    category: 'Residential Services',
    image: '/images/blog/shower-door-repair.jpg',
    locationTags: ['Washington DC', 'Montgomery County MD', 'Prince George\'s County MD', 'Northern Virginia']
  }
]

export default function BlogPage() {
  // Create blog schema
  const blogSchema = {
    '@type': 'Blog',
    name: 'FastFix Glass & Door Repair Blog',
    description: 'Expert tips, guides, and information about glass repair, door repair, and emergency services in the DMV area.',
    url: 'https://fastfix.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'FastFix Glass & Door Repair',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fastfix.com/images/logo.png'
      }
    },
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: `https://fastfix.com${post.image}`,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author
      },
      publisher: {
        '@type': 'Organization',
        name: 'FastFix Glass & Door Repair',
        logo: {
          '@type': 'ImageObject',
          url: 'https://fastfix.com/images/logo.png'
        }
      }
    }))
  }

  return (
    <>
      <SchemaMarkup type="Organization" data={blogSchema} />
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Glass Repair Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Expert tips, guides, and information about glass repair, door repair, and emergency services in the DMV area.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.locationTags.map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
} 