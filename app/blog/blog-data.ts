// Static blog data - bundled with the Worker at build time
// This file replaces file system operations that don't work in Cloudflare Workers

export const blogPosts = [
  {
    slug: 'building-for-humans',
    metadata: {
      title: 'Building Product for Humans, Not Metrics',
      publishedAt: '2025-01-15',
      summary: 'The best products measure success by whether people grew, not just whether numbers went up.',
    },
    content: `I measure success by whether people grew. Not by DAU, retention curves, or conversion rates—though those matter. The real question: did this product make someone's life better?

## The Metrics Trap

It's easy to optimize for numbers. A/B test button colors, gamify engagement, push notifications. But when metrics become the goal, you lose sight of the human on the other side.

## What Humans Actually Want

People want to feel capable. They want to connect. They want experiences that surprise and delight. At ARK Experiences, we didn't measure success by bookings alone—we measured it by whether people left with stories they'd tell for years.

## The Framework

Before building, ask:
1. What problem are we actually solving?
2. How will this make someone feel?
3. What's the human outcome we're optimizing for?

If you can't answer these, you're building for metrics, not humans. And metrics don't remember your product. Humans do.`,
  },
  {
    slug: 'generalism-future',
    metadata: {
      title: 'Why Generalism is the Future',
      publishedAt: '2025-02-10',
      summary: 'As AI commoditizes specialists, generalists who can think across domains become the premium asset.',
    },
    content: `The future belongs to generalists. While AI tools can now write code, design interfaces, and analyze data, they struggle to connect dots across disciplines. That's where generalists thrive.

## The Specialist Trap

Specialization made sense when knowledge was scarce. But in 2025, AI can generate boilerplate, debug common issues, and follow established patterns. The specialist who only knows React or only designs UIs is competing with tools that do their job faster and cheaper. PS: of course it makes sense, 

## The Generalist Advantage

Generalists see systems, not silos. When building ARK Adventures, I didn't just code—I understood user psychology, business economics, and physical experience design. That cross-domain thinking is what creates breakthrough products.

## What This Means

By 2030, the premium will shift from "knowing React" to "understanding how React fits into a product strategy that serves humans." Generalists who can architect experiences, not just implement features, will command the highest value.

The question isn't whether you're a specialist or generalist. It's whether you can think beyond your domain and build for humans, not just metrics.`,
  },
  {
    slug: 'physical-digital-tension',
    metadata: {
      title: 'The Tension Between Physical & Digital',
      publishedAt: '2025-03-05',
      summary: 'Building ARK Adventures taught me that the best experiences bridge the gap between what happens on screen and what happens in real life.',
    },
    content: `There's a gap between digital products and lived experiences. Most builders live in one world or the other. The magic happens in the bridge.

## Two Worlds

Digital products scale infinitely. Physical experiences create memories. Most companies pick one: either you're a software company or an experience company. But the future belongs to those who merge both.

## What I Learned at ARK

Building ARK Adventures forced me to think about both sides. The booking flow had to be frictionless (digital), but the actual adventure had to be unforgettable (physical). The product wasn't the app—it was the entire journey from discovery to memory.

## The Bridge

The best products don't just live on your phone. They enhance what happens when you put it down. Whether it's a travel app that makes you want to explore, or a fitness tracker that changes how you move, the goal is the same: make the digital serve the physical.

That's where the real innovation happens—not in pixels, but in the moments between.`,
  },
] as const

