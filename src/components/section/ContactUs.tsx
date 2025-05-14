import { outfit } from '@/lib/fonts';
import React from 'react'

const ContactUs = () => {
  return (
    <section id='contactus' className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-3xl w-9/10 mx-auto text-center">
        <span className={`bg-[#03045e] ${outfit.className} font-bold text-[#48cae4] px-4 py-1 rounded-full text-sm inline-block mb-4`}>
          Contact Us
        </span>
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-400 mt-2 mb-10">
          Ready to convert your unused licenses into cash? Fill out the form below and our team will provide you with a no-obligation quote.
        </p>
        <form className="bg-gray-800 p-6 rounded-xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 '>
            <div>
                <label className="block mb-1 text-sm font-medium">Company Name</label>
                <input
                type="text"
                placeholder="Acme Inc."
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                />
            </div>
            <div>
                <label className="block mb-1 text-sm font-medium">License Type</label>
                <select className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white">
                <option>Select license type</option>
                <option>Enterprise Software</option>
                <option>Productivity Suite</option>
                <option>Security Software</option>
                <option>Development Tools</option>
                <option>Other</option>
                </select>
            </div>
            
            
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              placeholder="Tell us about the licenses you want to sell..."
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-all"
          >
            Get Your Quote ✈️
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs
