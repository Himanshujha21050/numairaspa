'use client'

import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { useState, useRef } from 'react'

export default function PitchSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative min-h-screen bg-black responsive-padding">
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        playsInline
        muted={isMuted}
      >
        <source 
          src="https://cdn.coverr.co/videos/coverr-massage-therapy-5741/1080p.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-20 container mx-auto responsive-padding min-h-screen flex flex-col items-center justify-center text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-playfair">
            Experience Ultimate Relaxation
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-200">
            At Numaira SPA, we blend ancient techniques with modern practices to provide you with an unforgettable spa experience. Let our expert therapists guide you on a journey of relaxation and rejuvenation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-coral-pink px-6 py-2 md:px-8 md:py-3 rounded-full flex items-center gap-2 text-sm md:text-base"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <>
                  <Pause size={20} />
                  Pause Video
                </>
              ) : (
                <>
                  <Play size={20} />
                  Watch Video
                </>
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 px-8 py-3 rounded-full flex items-center gap-2 backdrop-blur-sm"
              onClick={handleMute}
            >
              {isMuted ? (
                <>
                  <VolumeX size={20} />
                  Unmute
                </>
              ) : (
                <>
                  <Volume2 size={20} />
                  Mute
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center"
        >
          {[
            { number: '5+', text: 'Years of Experience' },
            { number: '1000+', text: 'Happy Clients' },
            { number: '100%', text: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</h3>
              <p className="text-sm md:text-base text-gray-200">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

