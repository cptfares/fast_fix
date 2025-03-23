'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Glass Repair & Replacement',
    href: '/residential-services/glass-repair-replacement',
  },
  {
    title: 'Glass Door Repair',
    href: '/residential-services/glass-door-repair',
  },
  {
    title: 'Shower Door Repair',
    href: '/residential-services/shower-door-repair',
  },
  {
    title: 'Sliding Door Repair',
    href: '/residential-services/sliding-door-repair',
  },
  {
    title: 'Patio Door Repair',
    href: '/residential-services/patio-door-repair',
  },
  {
    title: 'Door Repair (Non-Glass)',
    href: '/residential-services/door-repair',
  },
  {
    title: 'Door Frame Repair',
    href: '/residential-services/door-frame-repair',
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setActiveDropdown(null)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="FastFix Glass Repair"
              width={180}
              height={60}
              className="h-[60px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#39A9DC] transition-colors">
              Home
            </Link>
            
            {/* Residential Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('residential')}
                className="text-gray-700 hover:text-[#39A9DC] transition-colors flex items-center"
              >
                Residential Services
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'residential' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 mt-2 transition-all duration-300 ${
                activeDropdown === 'residential' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-[#39A9DC]/10 hover:text-[#39A9DC]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Commercial Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('commercial')}
                className="text-gray-700 hover:text-[#39A9DC] transition-colors flex items-center"
              >
                Commercial Services
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'commercial' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 mt-2 transition-all duration-300 ${
                activeDropdown === 'commercial' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <Link
                  href="/commercial-services/storefront"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#39A9DC]/10 hover:text-[#39A9DC]"
                >
                  Storefront Glass
                </Link>
                <Link
                  href="/commercial-services/automatic-doors"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#39A9DC]/10 hover:text-[#39A9DC]"
                >
                  Automatic Doors
                </Link>
                <Link
                  href="/commercial-services/security-glass"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#39A9DC]/10 hover:text-[#39A9DC]"
                >
                  Security Glass
                </Link>
              </div>
            </div>

            {/* Emergency Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('emergency')}
                className="text-gray-700 hover:text-[#39A9DC] transition-colors flex items-center"
              >
                Emergency Services
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'emergency' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 mt-2 transition-all duration-300 ${
                activeDropdown === 'emergency' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <Link
                  href="/emergency-services/24-7"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#39A9DC]/10 hover:text-[#39A9DC]"
                >
                  24/7 Emergency Service
                </Link>
                <Link
                  href="/emergency-services/response-time"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#39A9DC]/10 hover:text-[#39A9DC]"
                >
                  Fast Response Time
                </Link>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-[#39A9DC] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#39A9DC] transition-colors">
              Contact
            </Link>
            <a
              href="tel:+12409685060"
              className="bg-[#39A9DC] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-4 md:hidden">
            <a
              href="tel:+12409685060"
              className="bg-[#39A9DC] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold text-sm"
            >
              Call Now
            </a>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#39A9DC] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-[#39A9DC] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Residential Services Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('residential')}
                className="w-full text-left text-gray-700 hover:text-[#39A9DC] transition-colors flex items-center justify-between"
              >
                Residential Services
                <svg
                  className={`w-4 h-4 transition-transform ${activeDropdown === 'residential' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`pl-4 mt-2 space-y-2 transition-all duration-300 ${
                activeDropdown === 'residential' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="block text-gray-700 hover:text-[#39A9DC] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Commercial Services Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('commercial')}
                className="w-full text-left text-gray-700 hover:text-[#39A9DC] transition-colors flex items-center justify-between"
              >
                Commercial Services
                <svg
                  className={`w-4 h-4 transition-transform ${activeDropdown === 'commercial' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`pl-4 mt-2 space-y-2 transition-all duration-300 ${
                activeDropdown === 'commercial' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <Link
                  href="/commercial-services/storefront"
                  className="block text-gray-700 hover:text-[#39A9DC] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Storefront Glass
                </Link>
                <Link
                  href="/commercial-services/automatic-doors"
                  className="block text-gray-700 hover:text-[#39A9DC] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Automatic Doors
                </Link>
                <Link
                  href="/commercial-services/security-glass"
                  className="block text-gray-700 hover:text-[#39A9DC] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Security Glass
                </Link>
              </div>
            </div>

            {/* Emergency Services Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('emergency')}
                className="w-full text-left text-gray-700 hover:text-[#39A9DC] transition-colors flex items-center justify-between"
              >
                Emergency Services
                <svg
                  className={`w-4 h-4 transition-transform ${activeDropdown === 'emergency' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`pl-4 mt-2 space-y-2 transition-all duration-300 ${
                activeDropdown === 'emergency' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <Link
                  href="/emergency-services/24-7"
                  className="block text-gray-700 hover:text-[#39A9DC] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  24/7 Emergency Service
                </Link>
                <Link
                  href="/emergency-services/response-time"
                  className="block text-gray-700 hover:text-[#39A9DC] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Fast Response Time
                </Link>
                <Link
                  href="/emergency-services/insurance"
                  className="block text-gray-700 hover:text-[#39A9DC] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Insurance Claims
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className="block text-gray-700 hover:text-[#39A9DC] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-[#39A9DC] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}