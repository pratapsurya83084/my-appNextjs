'use client'

import { Meteors } from '@/components/ui/meteors'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen pt-36 bg-black text-white">
      <div className="relative w-full px-4">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl opacity-30 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold">Contact Us</h2>
          <p className="text-lg font-medium text-gray-300">
            We're here to help with any questions about our courses, programs, or events.
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-2xl flex flex-col justify-center overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-6 py-8 shadow-xl">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              // Handle submit logic here
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"required
              className="w-full p-3 rounded-md border border-gray-700 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Your message"required
              className="w-full h-32 p-3 rounded-md border border-gray-700 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-md transition"
            >
           Send Message
            </button>
          </form>

          {/* Render animations only on client */}
          {isClient && <Meteors number={20} />}
        </div>
      </div>
    </div>
  )
}

export default Page
