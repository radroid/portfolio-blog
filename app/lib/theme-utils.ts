'use client'

import { useEffect, useState } from 'react'

type Theme = 'morning' | 'afternoon' | 'night' | 'starry'

/**
 * Hook to get the current theme from the document
 */
export function useTheme(): Theme | null {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    // Get initial theme
    const getCurrentTheme = (): Theme | null => {
      if (typeof document === 'undefined') return null
      const themeAttr = document.documentElement.getAttribute('data-theme')
      return themeAttr as Theme | null
    }

    setTheme(getCurrentTheme())

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setTheme(getCurrentTheme())
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  return theme
}

/**
 * Check if the current theme is a dark theme
 */
export function useIsDarkTheme(): boolean {
  const theme = useTheme()
  return theme === 'night' || theme === 'starry'
}

/**
 * Get theme mode (light or dark) based on theme name
 */
export function getThemeMode(theme: Theme | null): 'light' | 'dark' {
  if (!theme) return 'light'
  return theme === 'night' || theme === 'starry' ? 'dark' : 'light'
}

