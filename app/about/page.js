'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function About() {
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
            About Numaira SPA
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Numaira SPA Interior"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-gray-600">
                Numaira SPA was founded in 2013 with a vision to create a sanctuary of relaxation and rejuvenation in the heart of Raipur. Our name, Numaira, means "small light" in Arabic, symbolizing our commitment to being a beacon of wellness in our community.
              </p>
              <p className="text-lg text-gray-600">
                At Numaira SPA, we believe in the power of touch and the healing properties of natural ingredients. Our treatments combine ancient wisdom with modern techniques to provide a holistic approach to wellness.
              </p>
              <p className="text-lg text-gray-600">
                Our team of experienced therapists is dedicated to providing personalized care and ensuring that each visit to Numaira SPA is a memorable experience of relaxation and renewal.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-playfair mb-6 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Quality", description: "We use only the finest products and techniques in our treatments." },
                { title: "Personalization", description: "Every treatment is tailored to meet your individual needs." },
                { title: "Tranquility", description: "We provide a peaceful environment for complete relaxation." }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

