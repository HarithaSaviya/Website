import Link from "next/link"
import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="text-lg font-bold">Haritha Saviya</span>
            </div>
            <p className="text-green-100 mb-4">
              Growing smart, growing green. Your trusted partner for fresh produce and smart farming solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-green-300 cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-green-300 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-green-300 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-green-100 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/automation" className="text-green-100 hover:text-white">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-green-100 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-green-100">Greenhouse Vegetables</span>
              </li>
              <li>
                <span className="text-green-100">Outdoor Crops</span>
              </li>
              <li>
                <span className="text-green-100">Nursery Plants</span>
              </li>
              <li>
                <span className="text-green-100">IoT Systems</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-green-100">+94 70 742 0147</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-green-100">info@harithasaviya.lk</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-green-100">Bandarawela, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-100">© {new Date().getFullYear()} Haritha Saviya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
