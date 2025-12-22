'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function NatureFooter() {
    const [isVisible, setIsVisible] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Fade in on mount with slight delay for smooth entrance
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 300)

        // Parallax effect on scroll - only activate when element is in viewport
        const handleScroll = () => {
            if (!containerRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0

            if (isInViewport) {
                // Calculate scroll position relative to when element enters viewport
                const elementTop = rect.top
                const viewportHeight = window.innerHeight
                const scrollProgress = Math.max(0, (viewportHeight - elementTop) / viewportHeight)
                setScrollY(scrollProgress * 100)
            }
        }

        // Throttle scroll for performance
        let ticking = false
        const throttledHandleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
                ticking = true
            }
        }

        // Initial check
        handleScroll()

        window.addEventListener('scroll', throttledHandleScroll, { passive: true })
        window.addEventListener('resize', handleScroll, { passive: true })

        return () => {
            clearTimeout(timer)
            window.removeEventListener('scroll', throttledHandleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [])

    // Calculate parallax offset (subtle movement - max 30px)
    const parallaxOffset = Math.min(scrollY * 0.3, 30)

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden -mt-4 sm:-mt-6 md:-mt-8"
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            aria-hidden="true"
        >

            {/* Nature image with subtle parallax effect */}
            <div
                ref={imageRef}
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
                style={{
                    transform: `translateY(${parallaxOffset}px)`,
                    willChange: 'transform',
                }}
            >
                <Image
                    src="/trees-background.svg"
                    alt=""
                    fill
                    className="object-cover object-bottom"
                    priority={false}
                    quality={90}
                    sizes="100vw"
                    style={{
                        objectPosition: 'center bottom',
                    }}
                />
            </div>
        </div>
    )
}

