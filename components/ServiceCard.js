'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      className="bg-pink-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48 md:h-64">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 md:p-6 space-y-3 md:space-y-4">
        <h3 className="text-xl md:text-2xl font-playfair">{service.title}</h3>
        <div className="flex justify-between items-center text-gray-600 text-sm md:text-base">
          <span>₹{service.price}</span>
          <span>{service.duration}</span>
        </div>
        <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
        <button className="w-full px-4 py-2 bg-coral-pink text-white rounded-full hover:bg-coral-pink/90 transition-colors text-sm md:text-base">
          Book Now
        </button>
      </div>
    </motion.div>
  )
}

