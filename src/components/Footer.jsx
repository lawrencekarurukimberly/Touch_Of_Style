import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Touch of Style
            </h2>
            <p className="text-neutral-300 mb-6 max-w-md">
              Discover unique, high-quality clothing that expresses your individual style. 
              Our curated collections blend timeless elegance with contemporary fashion.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/touchofstylefashion/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@wairati1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.317 0 2.55-.281 3.666-.784.572-.25 1.065-.59 1.465-1.02.404-.433.72-.925.94-1.46.224-.534.34-1.12.402-1.735.062-.615.04-1.242.04-1.874 0-1.632 0-3.263.002-4.895-.003-.615-.04-1.242-.04-1.874-.038-.615.22-1.202.402-1.735.22-.535.536-1.027.94-1.46.4-.433.893-.77 1.465-1.02 1.115-.503 2.35-.784 3.666-.784zm-3.597 2.268c-.331 0-.6-.268-.6-.6s.269-.6.6-.6h1.8c.331 0 .6.268.6.6s-.269.6-.6.6zm5.754 0c-.331 0-.6-.268-.6-.6s.269-.6.6-.6h1.8c.331 0 .6.268.6.6s-.269.6-.6.6z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/store" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">
                  Westlands Shopping District<br />
                  Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">+254 795 947 566</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">touchofstyle27@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Touch of Style. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
