import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">The Bakery</h3>
            <p className="text-background/70 mb-4">
              Homemade goodness and small-town charm in the heart of Radcliffe, Iowa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-background/70 hover:text-background transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-background/70 hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>213 Isabella St, Radcliffe, IA 50230</span>
              </li>
              <li>
                <a
                  href="tel:515-899-2155"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  515-899-2155
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>&copy; {currentYear} The Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
