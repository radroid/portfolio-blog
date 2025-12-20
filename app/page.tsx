import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        I build experiences—both digital and physical—for people who want more from life.
      </h1>
      <p className="mb-4">
        Engineering background. Founder at ARK Expereinces. Engineer, Developer and Entrepreneur. Human.
      </p>
      <p className="mb-4">
        I'm a generalist builder who bridges the gap between physical experiences and digital infrastructure. My foundation is in rigorous engineering, but my passion is human-centric product design. I don't just build software—I architect experiences that feel human.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
