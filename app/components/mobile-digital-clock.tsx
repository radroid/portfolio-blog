'use client'

import { useEffect, useState } from 'react'
import { Diagnostics } from './diagnostics'

export function MobileDigitalClock() {
  const [city, setCity] = useState<string>('Loading...')
  const [localTime, setLocalTime] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [showDiagnostics, setShowDiagnostics] = useState(false)

  useEffect(() => {
    // Fetch city location
    const fetchLocation = async () => {
      try {
        const ipResponse = await fetch('https://ipapi.co/json/')
        const ipData = await ipResponse.json()
        if (ipData.city) {
          setCity(ipData.city)
        } else {
          // Fallback to another IP service
          try {
            const fallbackResponse = await fetch('https://ip-api.com/json/')
            const fallbackData = await fallbackResponse.json()
            if (fallbackData.city) {
              setCity(fallbackData.city)
            } else {
              setCity('Unknown')
            }
          } catch {
            setCity('Unknown')
          }
        }
      } catch {
        setCity('Unknown')
      }
    }

    fetchLocation()

    // Update time and date function
    const updateTimeAndDate = () => {
      const now = new Date()
      
      // Format local time as HH:MM:SS
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      setLocalTime(`${hours}:${minutes}:${seconds}`)
      
      // Format date (e.g., "Jan 15, 2025")
      const dateStr = now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
      setDate(dateStr)
    }

    // Initialize time and date
    updateTimeAndDate()

    // Update time every second
    const interval = setInterval(updateTimeAndDate, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <button
        onClick={() => setShowDiagnostics(!showDiagnostics)}
        className="fixed top-4 right-4 z-40 bg-white dark:bg-black rounded-lg p-3 text-xs font-mono text-right transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="flex flex-col items-end space-y-1">
          <div className="text-[10px] text-neutral-600 dark:text-neutral-400 font-semibold">
            {city}
          </div>
          <div className="text-neutral-900 dark:text-neutral-100 text-base font-bold">
            {localTime}
          </div>
          <div className="text-[10px] text-neutral-500 dark:text-neutral-500">
            {date}
          </div>
        </div>
      </button>

      {showDiagnostics && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black"
          onClick={() => setShowDiagnostics(false)}
        >
          <div 
            className="relative w-full max-w-md max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDiagnostics(false)}
              className="absolute top-2 right-2 z-10 text-neutral-400 hover:text-neutral-100 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              aria-label="Close diagnostics"
            >
              ×
            </button>
            <Diagnostics showButton={false} />
          </div>
        </div>
      )}
    </>
  )
}

