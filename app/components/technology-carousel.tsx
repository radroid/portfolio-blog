"use client"

import AutoScroll from "embla-carousel-auto-scroll"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel"
import { 
  NextJSIcon, 
  ReactIcon, 
  TypeScriptIcon, 
  TailwindIcon,
  NodeJSIcon,
  PostgreSQLIcon,
  ExpressIcon,
  ConvexIcon,
  ClerkIcon,
  StripeIcon,
  FramerMotionIcon,
  ThreeJSIcon,
  AFrameIcon,
  SandpackIcon,
  ShadcnIcon,
  RadixUIIcon,
} from "./technology-badges"

interface Technology {
  id: string
  name: string
  Icon: React.ComponentType<{ className?: string }>
}

interface TechnologyCarouselProps {
  technologies?: Technology[]
  heading?: string
  className?: string
}

// Normalize technology names to base names for deduplication
const normalizeTechName = (name: string): string => {
  const normalized = name
    .replace(/\s+v?\d+(\.\d+)?(\.\d+)?/gi, '') // Remove version numbers
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim()
  
  // Handle specific cases
  if (normalized.includes('Next.js')) return 'Next.js'
  if (normalized.includes('React')) return 'React'
  if (normalized.includes('TypeScript')) return 'TypeScript'
  if (normalized.includes('Tailwind')) return 'Tailwind CSS'
  if (normalized.includes('shadcn') || normalized.includes('Shadcn')) return 'Shadcn UI'
  if (normalized.includes('Framer Motion') || normalized.includes('Motion')) return 'Framer Motion'
  if (normalized.includes('Radix')) return 'Radix UI'
  
  return normalized
}

// Get icon for a technology name
const getTechnologyIcon = (name: string): React.ComponentType<{ className?: string }> | null => {
  const normalized = normalizeTechName(name)
  
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'Next.js': NextJSIcon,
    'React': ReactIcon,
    'TypeScript': TypeScriptIcon,
    'Tailwind CSS': TailwindIcon,
    'Node.js': NodeJSIcon,
    'PostgreSQL': PostgreSQLIcon,
    'Express.js': ExpressIcon,
    'Express': ExpressIcon,
    'Convex': ConvexIcon,
    'Clerk': ClerkIcon,
    'Stripe': StripeIcon,
    'Framer Motion': FramerMotionIcon,
    'Motion': FramerMotionIcon,
    'Three.js': ThreeJSIcon,
    'A-Frame': AFrameIcon,
    'AR.js': AFrameIcon,
    'Sandpack': SandpackIcon,
    'Shadcn UI': ShadcnIcon,
    'shadcn/ui': ShadcnIcon,
    'Radix UI': RadixUIIcon,
  }
  
  return iconMap[normalized] || null
}

// Extract unique technologies from all projects
export function extractUniqueTechnologies(projects: Array<{ technologies?: string[] }>): Technology[] {
  const techSet = new Set<string>()
  
  projects.forEach(project => {
    project.technologies?.forEach(tech => {
      const normalized = normalizeTechName(tech)
      techSet.add(normalized)
    })
  })
  
  const technologies: Technology[] = []
  
  techSet.forEach(name => {
    const Icon = getTechnologyIcon(name)
    if (Icon) {
      technologies.push({
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        Icon,
      })
    }
  })
  
  // Sort by name
  return technologies.sort((a, b) => a.name.localeCompare(b.name))
}

export function TechnologyCarousel({ 
  technologies = [],
  heading,
  className 
}: TechnologyCarouselProps) {
  if (technologies.length === 0) {
    return null
  }

  return (
    <section className={`py-4 md:py-6 ${className || ''}`}>
      {heading && (
        <div className="mb-6 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: 'rgb(var(--foreground))' }}>
            {heading}
          </h2>
        </div>
      )}
      <div className="pt-2">
        <div className="relative mx-auto flex items-center justify-center">
          {/* Left fade gradient */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, rgb(var(--background)) 0%, rgba(var(--background), 0.95) 20%, rgba(var(--background), 0.8) 40%, rgba(var(--background), 0.4) 70%, transparent 100%)`,
            }}
          />
          {/* Right fade gradient */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, rgb(var(--background)) 0%, rgba(var(--background), 0.95) 20%, rgba(var(--background), 0.8) 40%, rgba(var(--background), 0.4) 70%, transparent 100%)`,
            }}
          />
          <Carousel
            opts={{ 
              loop: true,
              align: 'start',
            }}
            plugins={[
              AutoScroll({ 
                speed: 0.5,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                stopOnFocusIn: false,
              })
            ]}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {technologies.map((tech) => (
                <CarouselItem
                  key={tech.id}
                  className="flex basis-1/4 justify-center pl-0 sm:basis-1/5 md:basis-1/6 lg:basis-1/8"
                >
                  <div className="mx-2 flex shrink-0 items-center justify-center">
                    <div 
                      className="flex flex-col items-center gap-1.5 p-2 rounded-lg transition-all hover:opacity-80 hover:scale-105"
                      style={{
                        backgroundColor: 'rgba(var(--muted), 0.4)',
                        border: '1px solid rgba(var(--border), 0.3)',
                      }}
                      title={tech.name}
                    >
                      <tech.Icon 
                        className="w-6 h-6 sm:w-7 sm:h-7"
                        style={{ color: 'rgb(var(--foreground))' }}
                      />
                      <span 
                        className="text-[10px] font-medium text-center max-w-[60px] truncate"
                        style={{ color: 'rgb(var(--muted-foreground))' }}
                      >
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

