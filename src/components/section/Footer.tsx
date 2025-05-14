import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl w-9/10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl text-center sm:text-left font-bold text-blue-500">SoftSell</h2>
          <p className="text-gray-400 text-center sm:text-left mt-2">
            SoftSell helps businesses recover value from their unused software licenses through our fast, secure, and profitable reselling platform.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-center sm:text-left mb-2">Quick Links</h3>
          <ul className="text-gray-400 text-center sm:text-left space-y-1">
            <li><a href="#process" className="hover:text-white">How It Works</a></li>
            <li><a href="#benefits" className="hover:text-white">Why Choose Us</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#contactus" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-center sm:text-left mb-2">Contact</h3>
          <p className="text-gray-400 text-center sm:text-left">123 Software Ave</p>
          <p className="text-gray-400 text-center sm:text-left">San Francisco, CA 94107</p>
          <p className="text-gray-400 text-center sm:text-left">contact@softsell.com</p>
          <p className="text-gray-400 text-center sm:text-left">(555) 123-4567</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <p>© 2025 SoftSell. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
