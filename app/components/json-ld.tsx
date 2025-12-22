'use client'

import { useEffect } from 'react'

interface JsonLdProps {
  data: Record<string, any>
}

export function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    script.id = 'json-ld-schema'
    
    // Remove existing script if present
    const existing = document.getElementById('json-ld-schema')
    if (existing) {
      existing.remove()
    }
    
    // Append to document head
    document.head.appendChild(script)
    
    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById('json-ld-schema')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [data])

  return null
}

