'use client'

import { useEffect, useState, useRef } from 'react'

interface DiagnosticsData {
  location: string
  platform: string
  language: string
  network: string
  memory: string
  cores: string
  uptime: string
  viewport: string
  screen: string
  colorDepth: string
  pixelRatio: string
  timezone: string
  host: string
  cookies: string
  java: string
  webgl: string
  battery: string
  geolocation: string
  localStorage: string
  sessionStorage: string
  indexedDB: string
  stat: string
  userAgent: string
}

interface TimeData {
  utc: string
  local: string
  unix: number
  zone: string
}

export function Diagnostics() {
  const [data, setData] = useState<DiagnosticsData | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [time, setTime] = useState<TimeData | null>(null)
  const startTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    const fetchDiagnostics = async () => {
      const diagnostics: Partial<DiagnosticsData> = {}

      // Platform
      diagnostics.platform = navigator.platform || 'Unknown'

      // Language
      diagnostics.language = navigator.language || 'Unknown'

      // Network (using connection API if available)
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      diagnostics.network = connection?.effectiveType || 'Unknown'

      // Memory (if available)
      const memory = (performance as any).memory
      if (memory) {
        const usedMB = Math.round(memory.usedJSHeapSize / 1048576)
        const totalMB = Math.round(memory.totalJSHeapSize / 1048576)
        diagnostics.memory = `${usedMB}/${totalMB}MB`
      } else {
        diagnostics.memory = 'N/A'
      }

      // CPU Cores
      diagnostics.cores = navigator.hardwareConcurrency?.toString() || 'Unknown'

      // Uptime (time since page load)
      const uptimeSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000)
      diagnostics.uptime = `${uptimeSeconds}S`

      // Viewport
      diagnostics.viewport = `${window.innerWidth}x${window.innerHeight}`

      // Screen
      diagnostics.screen = `${window.screen.width}x${window.screen.height}`

      // Color Depth
      diagnostics.colorDepth = `${window.screen.colorDepth}BIT`

      // Pixel Ratio
      diagnostics.pixelRatio = window.devicePixelRatio?.toString() || '1'

      // Timezone
      diagnostics.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown'

      // Host
      diagnostics.host = window.location.hostname || 'Unknown'

      // Cookies
      diagnostics.cookies = navigator.cookieEnabled ? 'ENABLED' : 'DISABLED'

      // Java
      diagnostics.java = (navigator as any).javaEnabled?.() ? 'ENABLED' : 'DISABLED'

      // WebGL
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      diagnostics.webgl = gl ? 'ENABLED' : 'DISABLED'

      // Battery (if available)
      if ('getBattery' in navigator) {
        try {
          const battery = await (navigator as any).getBattery()
          const level = Math.round(battery.level * 100)
          const charging = battery.charging ? 'CHG' : ''
          diagnostics.battery = `${level}% ${charging}`.trim()
        } catch {
          diagnostics.battery = 'N/A'
        }
      } else {
        diagnostics.battery = 'N/A'
      }

      // Geolocation
      diagnostics.geolocation = 'geolocation' in navigator ? 'AVAILABLE' : 'UNAVAILABLE'

      // Local Storage
      try {
        localStorage.setItem('test', 'test')
        localStorage.removeItem('test')
        diagnostics.localStorage = 'AVAILABLE'
      } catch {
        diagnostics.localStorage = 'UNAVAILABLE'
      }

      // Session Storage
      try {
        sessionStorage.setItem('test', 'test')
        sessionStorage.removeItem('test')
        diagnostics.sessionStorage = 'AVAILABLE'
      } catch {
        diagnostics.sessionStorage = 'UNAVAILABLE'
      }

      // IndexedDB
      diagnostics.indexedDB = 'indexedDB' in window ? 'AVAILABLE' : 'UNAVAILABLE'

      // Stat (Online/Offline)
      diagnostics.stat = navigator.onLine ? '• ONLINE' : '• OFFLINE'

      // User Agent
      diagnostics.userAgent = navigator.userAgent || 'Unknown'

      // Fetch IP location
      try {
        const ipResponse = await fetch('https://ipapi.co/json/')
        const ipData = await ipResponse.json()
        if (ipData.city && ipData.region) {
          diagnostics.location = `${ipData.city}, ${ipData.region}, ${ipData.country_name}`
        } else if (ipData.country_name) {
          diagnostics.location = ipData.country_name
        } else {
          diagnostics.location = 'Unknown'
        }
      } catch (error) {
        // Fallback to another IP service
        try {
          const fallbackResponse = await fetch('https://ip-api.com/json/')
          const fallbackData = await fallbackResponse.json()
          if (fallbackData.city && fallbackData.regionName) {
            diagnostics.location = `${fallbackData.city}, ${fallbackData.regionName}, ${fallbackData.country}`
          } else if (fallbackData.country) {
            diagnostics.location = fallbackData.country
          } else {
            diagnostics.location = 'Unknown'
          }
        } catch {
          diagnostics.location = 'Unknown'
        }
      }

      setData(diagnostics as DiagnosticsData)
    }

    fetchDiagnostics()

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

    // Update uptime and time every second
    const interval = setInterval(() => {
      setData((prev) => {
        if (!prev) return prev
        const uptimeSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000)
        return { ...prev, uptime: `${uptimeSeconds}S` }
      })
      updateTime()
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!data) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 text-xs font-mono">
          <div className="text-neutral-500 dark:text-neutral-400">LOADING...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 text-xs font-mono hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
      >
        <div className="text-neutral-600 dark:text-neutral-400">
          LOCATION: {data.location}
        </div>
        <div className="text-neutral-500 dark:text-neutral-500 mt-1">
          {data.stat} • {data.platform}
        </div>
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 text-xs font-mono max-w-md max-h-[60vh] overflow-y-auto shadow-lg">
          <div className="mb-3 font-semibold text-sm border-b border-neutral-200 dark:border-neutral-800 pb-2">
            DIAGNOSTICS
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">LOCATION:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">PLATFORM:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.platform}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">LANGUAGE:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.language}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">NETWORK:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.network}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">MEMORY:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.memory}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">CORES:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.cores}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">UPTIME:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.uptime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">VIEWPORT:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.viewport}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">SCREEN:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.screen}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">COLOR DEPTH:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.colorDepth}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">PIXEL RATIO:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.pixelRatio}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">TIMEZONE:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.timezone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">HOST:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.host}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">COOKIES:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.cookies}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">JAVA:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.java}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">WEBGL:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.webgl}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">BATTERY:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.battery}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">GEOLOCATION:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.geolocation}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">LOCAL STORAGE:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.localStorage}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">SESSION STORAGE:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.sessionStorage}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">INDEXEDDB:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.indexedDB}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">STAT:</span>
              <span className="text-neutral-800 dark:text-neutral-200">{data.stat}</span>
            </div>
            <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
              <div className="text-neutral-500 dark:text-neutral-400 mb-1">USER AGENT:</div>
              <div className="text-neutral-800 dark:text-neutral-200 break-all text-[10px]">
                {data.userAgent}
              </div>
            </div>
          </div>
          
          {time && (
            <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="mb-2 font-semibold text-sm border-b border-neutral-200 dark:border-neutral-800 pb-2">
                TIME
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">UTC:</span>
                  <span className="text-neutral-800 dark:text-neutral-200">{time.utc}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">LOCAL:</span>
                  <span className="text-neutral-800 dark:text-neutral-200">{time.local}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">UNIX:</span>
                  <span className="text-neutral-800 dark:text-neutral-200">{time.unix}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">ZONE:</span>
                  <span className="text-neutral-800 dark:text-neutral-200">{time.zone}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

