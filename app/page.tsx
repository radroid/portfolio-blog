'use client'

import { PortfolioCarousel } from 'app/components/portfolio-carousel'
import { TechnologyCarousel, extractUniqueTechnologies } from 'app/components/technology-carousel'

const portfolioProjects = [
  {
    id: 'ark-experience',
    title: 'ARK Experience',
    url: 'https://www.funwithark.ca/',
    description: 'A race through Toronto\'s downtown where teams compete to complete challenges and unlock clues across 5 secret locations. Perfect blend of adventure, challenge, and fun.',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript 5',
      'Convex',
      'Clerk',
      'Tailwind CSS 4',
      'shadcn/ui',
      'Framer Motion',
      'A-Frame',
      'AR.js',
      'Kibo UI',
      'Lucide React',
      'next-themes',
      'next-pwa',
      'Service Workers',
      'react-dropzone',
      'sonner',
      'cmdk',
      'class-variance-authority',
    ],
  },
  {
    id: 'bridger',
    title: 'Bridger',
    url: 'https://bridger.atawalk.ca/',
    description: 'Generate beautiful covered bridge images with AI. Customize every aspect of your bridge design with AI.',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Clerk',
      'Stripe',
      'Radix UI',
      'Framer Motion',
      'React Hook Form',
      'Zod',
      'Next Themes',
      'Leonardo AI',
      'PostHog',
      'Nodemailer',
      'Lucide React',
      'Sonner',
      'React Icons',
      'Helmet',
      'Express Rate Limiting',
      'CORS',
      'JWT',
      'Multer',
    ],
  },
  {
    id: 'stella56',
    title: 'Stella 56 Diamonds',
    url: 'https://www.stella56diamonds.com/',
    description: 'Manufacturer-direct lab-grown diamonds. IGI/GIA-certified, ethically sourced, carbon neutral.',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript 5.9',
      'Tailwind CSS 4.1',
      'Shadcn/ui',
      'Framer Motion',
      'Radix UI',
      'Motion',
      'Motion One',
      'Three.js',
      'React Hook Form',
      'Zod',
      'Hookform Resolvers',
      'Lucide React',
      'Recharts',
      'TSParticles',
      'Next Themes',
      'Sonner',
      'Vaul',
      'Biome',
    ],
  },
  {
    id: 'playground',
    title: 'Playground',
    url: 'https://playground.createplus.club/',
    description: 'Design, tweak, and copy Shadcn components. Browse the full component library, edit with instant previews, and copy production-ready code.',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Shadcn UI',
      'Sandpack',
      'Radix UI',
      'Lucide React',
      'Motion',
      'React Hook Form',
      'Zod',
      '@hookform/resolvers',
      'Recharts',
      'Embla Carousel',
      'Sonner',
      'Vaul',
      'CMDK',
      'React Resizable Panels',
      'next-themes',
      'clsx',
      'tailwind-merge',
      'class-variance-authority',
      'date-fns',
      'JSZip',
    ],
  },
  {
    id: 'penguin-mail',
    title: 'Penguin Mail',
    url: 'https://www.penguinmail.app/',
    description: 'A modern email client designed to revolutionize email usage in 2025. AI-driven filtering and enhanced user experience.',
    technologies: [],
  },
]

export default function Page() {
  const uniqueTechnologies = extractUniqueTechnologies(portfolioProjects)

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
        <TechnologyCarousel technologies={uniqueTechnologies} />
        <PortfolioCarousel projects={portfolioProjects} />
      </section>
    </>
  )
}
