"use client"

import { getCalApi } from "@calcom/embed-react"
import { useEffect, useState } from "react"

export function CalFloatingButton() {
  const [colors, setColors] = useState({
    foreground: "15, 23, 42",
    background: "255, 255, 255",
    primary: "245, 158, 11"
  })

  useEffect(() => {
    // Function to get current CSS variable values
    const updateColors = () => {
      if (typeof window !== 'undefined') {
        const root = document.documentElement
        const style = getComputedStyle(root)

        setColors({
          foreground: style.getPropertyValue('--foreground').trim(),
          background: style.getPropertyValue('--background').trim(),
          primary: style.getPropertyValue('--primary').trim()
        })
      }
    }

    // Update colors initially
    updateColors()

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          updateColors()
        }
      })
    })

    if (typeof document !== 'undefined') {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
      })
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "problem-ranter" })

      // Custom styles to match your theme
      cal("floatingButton", {
        calLink: "createclub/problem-ranter",
        config: {
          layout: "month_view"
        },
        buttonText: "Let's talk",
        buttonColor: `rgb(${colors.foreground})`,
        buttonTextColor: `rgb(${colors.background})`,
      })

      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: {
          branding: {
            brandColor: `rgb(${colors.primary})`
          }
        },
        cssVarsPerTheme: {
          light: {
            "cal-brand": `rgb(${colors.primary})`,
            "cal-bg": `rgb(${colors.background})`,
            "cal-text": `rgb(${colors.foreground})`,
          },
          dark: {
            "cal-brand": `rgb(${colors.primary})`,
            "cal-bg": `rgb(${colors.background})`,
            "cal-text": `rgb(${colors.foreground})`,
          }
        }
      })
    })()
  }, [colors])

  return null
}


