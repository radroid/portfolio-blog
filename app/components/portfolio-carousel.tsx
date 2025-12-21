'use client'

import { useState } from 'react'

interface PortfolioProject {
  id: string
  title: string
  url: string
  description?: string
}

interface PortfolioCarouselProps {
  projects: PortfolioProject[]
}

export function PortfolioCarousel({ projects }: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (projects.length === 0) {
    return (
      <div className="w-full h-[70vh] sm:h-[85vh] flex items-center justify-center text-neutral-500">
        <p>No projects to display</p>
      </div>
    )
  }

  return (
    <div className="w-full h-[70vh] sm:h-[85vh] flex flex-col relative">
      {/* Previous Button - Outside the carousel */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-12 z-10 p-2 rounded-full backdrop-blur-sm transition-colors shadow-lg"
        style={{
          backgroundColor: 'rgba(var(--card), 0.9)',
          color: 'rgb(var(--foreground))',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(var(--card), 1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(var(--card), 0.9)'
        }}
        aria-label="Previous project"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button - Outside the carousel */}
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-12 z-10 p-2 rounded-full backdrop-blur-sm transition-colors shadow-lg"
        style={{
          backgroundColor: 'rgba(var(--card), 0.9)',
          color: 'rgb(var(--foreground))',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(var(--card), 1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(var(--card), 0.9)'
        }}
        aria-label="Next project"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Main Carousel Container */}
      <div 
        className="flex-1 relative overflow-hidden rounded-lg transition-colors duration-300 shadow-lg"
        style={{
          backgroundColor: 'rgb(var(--muted))',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* Slides Container */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-full h-full flex flex-col"
            >
              {/* Project Title Bar */}
              <div 
                className="px-4 sm:px-6 py-3 sm:py-4 transition-colors duration-300"
                style={{
                  backgroundColor: 'rgb(var(--card))',
                }}
              >
                <h3 
                  className="text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300"
                  style={{ color: 'rgb(var(--card-foreground))' }}
                >
                  {project.title}
                </h3>
                {project.description && (
                  <p 
                    className="text-xs sm:text-sm mt-1 transition-colors duration-300"
                    style={{ color: 'rgb(var(--muted-foreground))' }}
                  >
                    {project.description}
                  </p>
                )}
              </div>

              {/* Iframe Container */}
              <div 
                className="flex-1 relative transition-colors duration-300"
                style={{ backgroundColor: 'rgb(var(--card))' }}
              >
                <iframe
                  src={project.url}
                  className="w-full h-full border-0"
                  title={project.title}
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-4 sm:mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="rounded-full transition-all duration-300"
            style={{
              width: index === currentIndex ? '2rem' : '0.5rem',
              height: '0.5rem',
              backgroundColor: index === currentIndex 
                ? `rgb(var(--primary))` 
                : `rgb(var(--muted-foreground))`,
              opacity: index === currentIndex ? 1 : 0.3,
            }}
            onMouseEnter={(e) => {
              if (index !== currentIndex) {
                e.currentTarget.style.opacity = '0.5'
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentIndex) {
                e.currentTarget.style.opacity = '0.3'
              }
            }}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

