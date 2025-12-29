import { Timeline } from 'app/components/timeline'

const timelineData = [
  {
    year: '2026',
    title: 'Building Multiple Ventures',
    description: 'Launched Create Club, Stella 56 Diamonds, and ARK Experiences. Each venture represents different lessons and growth. Focused on building experiences—both digital and physical—for people who appreciate quality.',
    emoji: '✨',
  },
  {
    year: '2025',
    title: 'Learning from Failure',
    description: 'Pinhous didn\'t work out. Learned that failure is just data. Took the lessons, experience, and resilience forward.',
    emoji: '💪',
  },
  {
    year: '2024',
    title: 'First Startup: Pinhous',
    description: 'Founded my first startup, Pinhous. Took the leap into entrepreneurship and learned the realities of building a business.',
    emoji: '🚀',
  },
  {
    year: '2023',
    title: 'First Official Job',
    description: 'Landed my first role in software. Started applying engineering rigor to building digital products.',
    emoji: '💼',
  },
  {
    year: '2021-2022',
    title: 'Graduate Certificates',
    description: 'Deepened expertise at Durham College, Canada: Data Analytics for Business Decision Making, and AI Design, Implementation and Architecture.',
    emoji: '📊',
  },
  {
    year: '2020',
    title: 'Machine Learning',
    description: 'Completed Machine Learning Nanodegree at Udacity. Discovered a passion for building digital products and AI systems.',
    emoji: '🤖',
  },
  {
    year: 'March 2020',
    title: 'The Pivot',
    description: 'COVID changed the world, and I changed direction. Shifted to software development, diving into Python for data science and algorithmic trading.',
    emoji: '🔄',
  },
  {
    year: 'October 2019 - March 2020',
    title: 'GATE Preparation',
    description: 'Prepared for the Graduate Aptitude Test in Engineering, aiming for a PSU role in India. Then COVID hit, and everything changed.',
    emoji: '📝',
  },
  {
    year: '2016 - 2019',
    title: 'University',
    description: 'Mechanical Engineering + Nuclear Engineering at the University of Manchester, UK. Built expertise in complex systems, precision, and safety-first thinking.',
    emoji: '🎓',
  },
  {
    year: '2014 - 2016',
    title: 'High School',
    description: 'International Baccalaureate studies. Laid the foundation with rigorous academics and a global perspective.',
    emoji: '📚',
  },
]

export default function HistoryPage() {
  return (
    <section className="w-full">
      <div className="mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tighter mb-4">
          History
        </h1>
        <p className="mb-6" style={{ color: 'rgb(var(--muted-foreground))' }}>
          My journey from engineering student to builder—through education, pivots, and growth.
        </p>
      </div>

      <Timeline items={timelineData} />
    </section>
  )
}

