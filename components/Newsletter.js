'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log('Subscribing email:', email)
    setStatus('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <section className="bg-pink-100 py-12 px-4 md:px-6">
      <motion.div 
        className="container mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-playfair text-center mb-6">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 text-center mb-8">Stay updated with our latest offers and wellness tips.</p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-grow px-4 py-2 rounded-full border-2 border-coral-pink focus:outline-none focus:border-coral-pink/70"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-coral-pink text-white rounded-full hover:bg-coral-pink/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
        {status && <p className="mt-4 text-center text-green-600">{status}</p>}
      </motion.div>
    </section>
  )
}

