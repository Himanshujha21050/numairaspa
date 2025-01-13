'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
import PitchSection from '../components/PitchSection'
import BackgroundMusic from '../components/BackgroundMusic'
import Newsletter from '../components/Newsletter'

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

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
    }
  ]

  return (
    <main className="min-h-screen bg-light-pink">
      <Navigation />
      <BackgroundMusic />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 md:px-6 py-20 overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100">
        <motion.div 
          className="container mx-auto grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-6">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-6xl font-playfair"
              {...fadeIn}
            >
              Discover Tranquility at Numaira SPA
            </motion.h1>
            <motion.p 
              className="text-gray-600 text-base md:text-lg"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Immerse yourself in a world of relaxation and rejuvenation. Our expert therapists are dedicated to providing you with an unforgettable spa experience.
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <Link 
                href="#book"
                className="inline-block px-6 py-3 bg-coral-pink text-white rounded-full hover:bg-coral-pink/90 transition-colors text-sm md:text-base"
              >
                Book an Appointment
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full h-64 md:h-96"
          >
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Spa Relaxation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Pitch Section */}
      <PitchSection />

      {/* Services Section */}
      <section className="py-20 px-4 md:px-6 bg-white" id="services">
        <motion.div
          className="container mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-6 bg-pink-50" id="about">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-64 md:h-96"
          >
            <Image
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-playfair">About Numaira SPA</h2>
            <p className="text-gray-600">
              At Numaira SPA, we believe in the power of relaxation and rejuvenation. Our spa is a sanctuary where you can escape the stresses of daily life and indulge in luxurious treatments that nourish your body and soul.
            </p>
            <p className="text-gray-600">
              With a team of highly skilled therapists and state-of-the-art facilities, we offer a wide range of services designed to promote wellness and beauty. From soothing massages to revitalizing facials, each treatment is tailored to meet your unique needs.
            </p>
            <p className="text-gray-600">
              Experience the Numaira difference and embark on a journey of relaxation and self-care. Your path to wellness begins here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      <Footer />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918420350771"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="https://img.icons8.com/?size=30&id=16713&format=png&color=000000" width={30} height={30} alt="WhatsApp" />
      </a>
    </main>
  )
}

