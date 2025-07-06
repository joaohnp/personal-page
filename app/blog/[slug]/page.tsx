import Link from "next/link"

interface Props {
  params: { slug: string }
}

// Sample blog content
const blogPosts: Record<string, { title: string; date: string; content: string }> = {
  "on-minimalism": {
    title: "on minimalism",
    date: "2024-03-15",
    content: `minimalism is not about having less for the sake of having less. it's about having exactly what you need, nothing more, nothing less.

in design, this translates to removing everything that doesn't serve a purpose. every element should have a reason to exist.

the same principle applies to code, to life, to everything we create.

when we strip away the unnecessary, what remains is pure intention.`,
  },
  "building-personal-websites": {
    title: "building personal websites",
    date: "2024-02-28",
    content: `your personal website is your digital home. it should reflect who you are, not what you think others want to see.

start simple. a single page with your name and what you do is often enough.

add complexity only when it serves a purpose. every additional page, every feature, should answer a real need.

remember: the best personal websites are the ones that feel authentic to their creators.`,
  },
  "thoughts-on-design": {
    title: "thoughts on design",
    date: "2024-01-20",
    content: `good design is invisible. when something is well-designed, you don't notice the design—you notice the content, the message, the experience.

typography matters more than you think. the right font can make or break a design.

white space is not empty space. it's breathing room for your content.

constraints breed creativity. give yourself limits and watch what happens.`,
  },
  "learning-in-public": {
    title: "learning in public",
    date: "2024-01-05",
    content: `learning in public means sharing your journey, not just your destinations.

document your process. share your failures alongside your successes.

teach what you learn. explaining concepts to others deepens your own understanding.

build a body of work that shows your growth over time.

the internet rewards consistency and authenticity.`,
  },
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen p-8 max-w-2xl mx-auto">
        <div className="mb-8">
          <Link href="/blog" className="hover:underline">
            ← back to blog
          </Link>
        </div>
        <p>post not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/blog" className="hover:underline">
          ← back to blog
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <h1 className="text-2xl mb-2">{post.title}</h1>
          <time className="text-sm opacity-70">{post.date}</time>
        </header>

        <div className="prose prose-sm max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  )
}
