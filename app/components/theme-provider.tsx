'use client'

import { useEffect } from 'react'

type Theme = 'morning' | 'afternoon' | 'night' | 'starry'

function getThemeForTime(): Theme {
  const now = new Date()
  const hours = now.getHours()
  
  // Morning: 6 AM - 12 PM (6:00 - 11:59)
  if (hours >= 6 && hours < 12) {
    return 'morning'
  }
  
  // Afternoon: 12 PM - 6 PM (12:00 - 17:59)
  if (hours >= 12 && hours < 18) {
    return 'afternoon'
  }
  
  // Night: 6 PM - 12 AM (18:00 - 23:59)
  if (hours >= 18 && hours < 24) {
    return 'night'
  }
  
  // Starry: 12 AM - 6 AM (0:00 - 5:59)
  return 'starry'
}

function applyTheme(theme: Theme) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme)
  }
}

export function ThemeProvider() {
  useEffect(() => {
    // Apply theme immediately
    const theme = getThemeForTime()
    applyTheme(theme)

    // Calculate time until next hour (when theme might change)
    const now = new Date()
    const currentMinutes = now.getMinutes()
    const currentSeconds = now.getSeconds()
    const currentMilliseconds = now.getMilliseconds()
    
    // Calculate milliseconds until next hour
    const msUntilNextHour = 
      (60 - currentMinutes) * 60 * 1000 - 
      currentSeconds * 1000 - 
      currentMilliseconds

    let intervalId: NodeJS.Timeout | null = null

    // Set timeout to update theme at the next hour
    const timeoutId = setTimeout(() => {
      const newTheme = getThemeForTime()
      applyTheme(newTheme)
      
      // Set up interval to check every hour after that
      intervalId = setInterval(() => {
        const currentTheme = getThemeForTime()
        applyTheme(currentTheme)
      }, 60 * 60 * 1000) // Check every hour
    }, msUntilNextHour)

    // Cleanup both timeout and interval on unmount
    return () => {
      clearTimeout(timeoutId)
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [])

  return null
}

