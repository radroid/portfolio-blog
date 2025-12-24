'use client'

import { PortfolioCarousel } from 'app/components/portfolio-carousel'
import { TechnologyCarousel, extractUniqueTechnologies } from 'app/components/technology-carousel'
import { portfolioProjects } from '@/app/lib/projects'

export default function Page() {
  const uniqueTechnologies = extractUniqueTechnologies(portfolioProjects)

  return (
    <>
      <section className="w-full">
        <div className="mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tighter mb-4">
            I build experiences—both digital and physical—for humans.
          </h1>
          <p className="mb-4 font-semibold" style={{ color: 'rgb(var(--foreground))' }}>
            AI Product Manager & Product Engineer
          </p>
          <p className="mb-4" style={{ color: 'rgb(var(--muted-foreground))' }}>
            Building and shipping AI-native products across SaaS, tools, and real-world experiences. Open to Product Developer / AI Product Manager roles in Toronto or remote across North America.
          </p>
          <p className="mb-6" style={{ color: 'rgb(var(--muted-foreground))' }}>
            Blend of rigorous engineering and product thinking: translate fuzzy business problems into scoped bets, ship iteratively with design and engineering, and measure impact with data. Comfortable working with LLMs, AI APIs, and analytics to drive roadmap decisions.
          </p>
        </div>

        {/* What I Do Section */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight mb-4">What I do</h2>
          <ul className="space-y-2" style={{ color: 'rgb(var(--muted-foreground))' }}>
            <li>• <strong>Product discovery</strong>: Talk to users, synthesize qual & quant insights, and define clear problem statements and success metrics.</li>
            <li>• <strong>AI use-case design</strong>: Identify where AI meaningfully improves UX (automation, summarization, recommendations) and validate value vs. cost.</li>
            <li>• <strong>Specs & execution</strong>: Write product specs, prioritize roadmaps, and work closely with engineering/design to ship to production.</li>
            <li>• <strong>Data & experimentation</strong>: Define events, dashboards, and simple experiments to track adoption, accuracy, and retention.</li>
            <li>• <strong>Go-to-market</strong>: Craft narratives, onboarding flows, and feedback loops for beta/alpha launches.</li>
          </ul>
        </div>

        <TechnologyCarousel technologies={uniqueTechnologies} />
        <PortfolioCarousel projects={portfolioProjects.map(p => ({
          id: p.id,
          title: p.shortTitle,
          url: p.url,
          video: p.video,
          shortDescription: p.shortDescription,
          technologies: p.technologies,
        }))} />

        {/* Experience for AI PM Section */}
        <div className="mt-12 mb-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight mb-4">Experience relevant to AI Product roles</h2>
          <ul className="space-y-2" style={{ color: 'rgb(var(--muted-foreground))' }}>
            <li>• <strong>Cross-functional collaboration</strong>: Partnered with designers and co-founders to shape ARK's game mechanics, pricing, and onboarding flows.</li>
            <li>• <strong>End-to-end shipping</strong>: Took Bridger from idea → scoped MVP → pricing tiers → live production app with subscription plans.</li>
            <li>• <strong>AI integration</strong>: Implemented LLM-based features (email filtering logic, image generation flows), balancing cost, latency, and UX.</li>
            <li>• <strong>Analytics & iteration</strong>: Instrumented events (signups, completion, conversion) and used them to refine copy, flows, and pricing.</li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ color: 'rgb(var(--muted-foreground))' }}>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: 'rgb(var(--foreground))' }}>Product & strategy</h3>
              <ul className="space-y-1 text-sm">
                <li>• Roadmapping</li>
                <li>• PRDs/specs</li>
                <li>• User interviews</li>
                <li>• JTBD</li>
                <li>• A/B testing</li>
                <li>• KPI definition</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: 'rgb(var(--foreground))' }}>AI & data</h3>
              <ul className="space-y-1 text-sm">
                <li>• LLMs (OpenAI, Gemini)</li>
                <li>• Prompt design</li>
                <li>• Evaluation metrics</li>
                <li>• Vector search</li>
                <li>• Analytics (PostHog, GA)</li>
                <li>• SQL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: 'rgb(var(--foreground))' }}>Engineering</h3>
              <ul className="space-y-1 text-sm">
                <li>• Next.js, TypeScript</li>
                <li>• React, Node.js</li>
                <li>• Supabase/Convex/PostgreSQL</li>
                <li>• Cloudflare, Vercel</li>
                <li>• Stripe</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: 'rgb(var(--foreground))' }}>Collaboration & ops</h3>
              <ul className="space-y-1 text-sm">
                <li>• Working with founders/clients</li>
                <li>• Running experiments</li>
                <li>• Shipping on tight timelines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Currently Exploring Section */}
        <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: 'rgb(var(--card))' }}>
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight mb-3">Currently exploring</h2>
          <p className="mb-3" style={{ color: 'rgb(var(--muted-foreground))' }}>
            Product Developer / AI Product Manager / Product Engineer roles at SaaS and AI-native companies in:
          </p>
          <ul className="space-y-1 mb-4" style={{ color: 'rgb(var(--muted-foreground))' }}>
            <li>• Toronto (onsite/hybrid)</li>
            <li>• Remote across Canada & US time zones</li>
          </ul>
          <p className="text-sm" style={{ color: 'rgb(var(--muted-foreground))' }}>
            Connect on <a href="https://linkedin.com/in/raj-dholakia" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">LinkedIn</a>.
          </p>
        </div>
      </section>
    </>
  )
}
