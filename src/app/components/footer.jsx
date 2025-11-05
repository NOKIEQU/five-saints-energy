import React from 'react'
import { Sun, Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

const AppFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {/* <Image
                    src="/logo.png"
                    alt="Five Saints Energy logo"
                    className="w-6 h-6 object-contain"
                    layout='fill'
                  /> */}
              <span className="font-bold text-2xl text-white">Five Saints Energy</span>
            </div>
            <p className="max-w-md text-gray-400">
              We help homeowners switch to clean, affordable solar power through our collaboration with Emerald Green Energy.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              The lease agreement will be provided by HTG Finance Limited (Home Tree Finance), Authorised and regulated by the Financial Conduct Authority. FCA Register No 825534.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#partnership" className="hover:text-white transition-colors">Our Partnership</a></li>
              {/* <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li> */}
              {/* <li><Link href="/tos" className="hover:text-white transition-colors">Terms of Service</Link></li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="/services/insulation" className="hover:text-white transition-colors">Insulation Services</a></li>
              <li><a href="/services/heating" className="hover:text-white transition-colors">Heating Services</a></li>
              <li><a href="/services/renewable" className="hover:text-white transition-colors">Renewable Energy Solutions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>0333 339 4847</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>grants@fivesaintsenergy.co.uk</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Zenith House, Highlands Road, Solihull, B90 4PD</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Five Saints Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
