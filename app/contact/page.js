'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-playfair text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-playfair mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-pink"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-pink"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-pink"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-coral-pink text-white py-2 px-4 rounded-md hover:bg-coral-pink/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-playfair mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-coral-pink mr-2 mt-1" />
                  <p>Shop No B002, B Block, Ground Floor, Babylon Tower, VIP Chowk, Raipur, Chhattisgarh, 492001</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-coral-pink mr-2" />
                  <p>+91 84203 50771</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-coral-pink mr-2" />
                  <p>info@numairaspa.com</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-playfair mb-4">Opening Hours</h3>
                <p className="mb-2">Monday - Sunday: 10:00 AM - 9:00 PM</p>
                <p>We're open 7 days a week to serve you better!</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

