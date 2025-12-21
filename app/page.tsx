'use client'

import { PortfolioCarousel } from 'app/components/portfolio-carousel'

const portfolioProjects = [
  {
    id: 'ark-experience',
    title: 'ARK Experience',
    url: 'https://www.funwithark.ca/',
    description: 'A race through Toronto\'s downtown where teams compete to complete challenges and unlock clues across 5 secret locations. Perfect blend of adventure, challenge, and fun.',
  },
  {
    id: 'bridger',
    title: 'Bridger',
    url: 'https://bridger.atawalk.ca/',
    description: 'Generate beautiful covered bridge images with AI. Customize every aspect of your bridge design with AI.',
  },
  {
    id: 'stella56',
    title: 'Stella 56 Diamonds',
    url: 'https://www.stella56diamonds.com/',
    description: 'Manufacturer-direct lab-grown diamonds. IGI/GIA-certified, ethically sourced, carbon neutral.',
  },
  {
    id: 'playground',
    title: 'Playground',
    url: 'https://playground.createplus.club/',
    description: 'Design, tweak, and copy Shadcn components. Browse the full component library, edit with instant previews, and copy production-ready code.',
  },
  {
    id: 'penguin-mail',
    title: 'Penguin Mail',
    url: 'https://www.penguinmail.app/',
    description: 'A modern email client designed to revolutionize email usage in 2025. AI-driven filtering and enhanced user experience.',
  },
]

export default function Page() {
  return (
    <>
      <section className="w-full">
        <div className="mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tighter mb-4">
            I build experiences—both digital and physical—for people who appreciate quality.
          </h1>
          <p className="mb-4" style={{ color: 'rgb(var(--muted-foreground))' }}>
            Engineering background. Founder at ARK Experiences. Developer, Entrepreneur and Human.
          </p>
          <p style={{ color: 'rgb(var(--muted-foreground))' }}>
            I'm a generalist builder who bridges the gap between physical experiences and digital infrastructure. My foundation is in rigorous engineering, but my passion is human-centric product design. I don't just build software—I architect experiences that feel human.
          </p>
        </div>
        <PortfolioCarousel projects={portfolioProjects} />
      </section>
    </>
  )
}
