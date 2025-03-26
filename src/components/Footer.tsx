import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#39A9DC]">FastFix</h3>
            <p className="text-gray-400">
              Professional glass and door repair services throughout the DMV area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#39A9DC]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#39A9DC] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#39A9DC] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/areas-we-serve" className="text-gray-400 hover:text-[#39A9DC] transition-colors">
                  Areas We Serve
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#39A9DC] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#39A9DC]">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/glass-repair" className="text-gray-400 hover:text-[#39A9DC] transition-colors">
                  Glass Repair
                </Link>
              </li>
              <li>
                <Link href="/door-repair" className="text-gray-400 hover:text-[#39A9DC] transition-colors">
                  Door Repair
                </Link>
              </li>
              <li>
                <Link href="/emergency-services" className="text-gray-400 hover:text-[#39A9DC] transition-colors">
                  Emergency Services
                </Link>
              </li>
              <li>
                <Link href="/commercial-services" className="text-gray-400 hover:text-[#39A9DC] transition-colors">
                  Commercial Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#39A9DC]">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="tel:tel:+15715239063"
                  className="text-white hover:text-opacity-80 transition-colors"
                >
                  +1 571-523-9063
                </a>
              </li>
              <li>
                <a href="mailto:info@fastfix.com" className="hover:text-[#39A9DC] transition-colors">
                  info@fastfix.com
                </a>
              </li>
              <li>
                <address className="not-italic">
                  123 Main Street<br />
                  Washington, DC 20001
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FastFix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 