import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Thinking',
  description: 'Insights on generalism, product thinking, and building for humans.',
}

export default function Page() {
  return (
    <section>
      <h1 
        className="font-semibold text-2xl mb-8 tracking-tighter transition-colors duration-300"
        style={{ color: 'rgb(var(--foreground))' }}
      >
        Thinking
      </h1>
      <p 
        className="mb-4 transition-colors duration-300"
        style={{ color: 'rgb(var(--muted-foreground))' }}
      >
        Thoughts on generalism, product design, and the intersection of physical and digital experiences.
      </p>
      <BlogPosts />
    </section>
  )
}
