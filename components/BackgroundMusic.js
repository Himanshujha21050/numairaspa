'use client'

import { useState, useEffect, useRef } from 'react'
import { Music, MicOffIcon as MusicOff } from 'lucide-react'

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio('/soothing-background.mp3')
    audioRef.current.loop = true
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-4 left-4 z-50 bg-coral-pink text-white p-3 rounded-full shadow-lg hover:bg-coral-pink/90 transition-colors"
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
    >
      {isPlaying ? <MusicOff size={24} /> : <Music size={24} />}
    </button>
  )
}

