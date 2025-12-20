'use client'

import { useEffect, useState } from 'react'

interface TimeData {
  utc: string
  local: string
  unix: number
  zone: string
}

export function Clock() {
  const [time, setTime] = useState<TimeData | null>(null)

  useEffect(() => {
    // Update time function
    const updateTime = () => {
      const now = new Date()
      const utcTime = now.toISOString().substring(11, 19) // HH:MM:SS
      const localTime = now.toTimeString().substring(0, 8) // HH:MM:SS
      const unixTime = Math.floor(now.getTime() / 1000)
      
      // Get timezone offset
      const offset = -now.getTimezoneOffset()
      const offsetHours = Math.floor(Math.abs(offset) / 60)
      const offsetMinutes = Math.abs(offset) % 60
      const offsetSign = offset >= 0 ? '+' : '-'
      const zone = `GMT${offsetSign}${offsetHours.toString().padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`
      
      setTime({
        utc: utcTime,
        local: localTime,
        unix: unixTime,
        zone,
      })
    }

    // Initialize time
    updateTime()

    // Update time every second
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!time) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 text-xs font-mono">
          <div className="text-neutral-500 dark:text-neutral-400">LOADING...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed top-32 right-4 z-40">
      <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 text-xs font-mono">
        <div className="text-neutral-600 dark:text-neutral-400">
          UTC: {time.utc}
        </div>
        <div className="text-neutral-600 dark:text-neutral-400">
          LOCAL: {time.local}
        </div>
        <div className="text-neutral-500 dark:text-neutral-500 mt-1">
          UNIX: {time.unix}
        </div>
        <div className="text-neutral-500 dark:text-neutral-500">
          ZONE: {time.zone} STATUS: • ON
        </div>
      </div>
    </div>
  )
}

