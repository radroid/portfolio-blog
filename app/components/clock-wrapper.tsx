'use client'

import { OrbitalClock } from './ui/orbital-clock'
import { useEffect, useState } from 'react'

export function ClockWrapper() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Hide clock when scrolled down more than 100px
      setIsVisible(currentScrollY < 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={`fixed top-4 right-2 sm:top-8 sm:right-4 md:right-8 z-40 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <OrbitalClock />
    </div>
  )
}

