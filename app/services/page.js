'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ServiceCard from '../../components/ServiceCard'

export default function Services() {
  const services = [
    {
      title: "Hot Stone Massage",
      price: "2400",
      duration: "60 Minute Session",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Experience deep relaxation with our hot stone massage, perfect for releasing tension and improving circulation."
    },
    {
      title: "Aromatherapy Massage",
      price: "2200",
      duration: "50 Minute Session", 
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Indulge your senses with our aromatherapy massage, using essential oils to promote relaxation and well-being."
    },
    {
      title: "Deep Tissue Massage",
      price: "2500",
      duration: "60 Minute Session",
      image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Target chronic muscle tension with our deep tissue massage, ideal for those seeking relief from persistent discomfort."
    },
    {
      title: "Facial Treatment",
      price: "2000",
      duration: "45 Minute Session",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      description: "Revitalize your skin with our luxurious facial treatment, customized to meet your unique skincare needs."
    },
    {
      title: "Swedish Massage",
      price: "2100",
      duration: "55 Minute Session",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Enjoy a classic Swedish massage to relax your muscles, improve circulation, and promote overall well-being."
    },
    {
      title: "Couples Massage",
      price: "4500",
      duration: "60 Minute Session",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Share a relaxing experience with your partner in our tranquil couples massage room."
    }
  ]

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
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our range of luxurious spa treatments designed to relax, rejuvenate, and restore your body and mind.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

