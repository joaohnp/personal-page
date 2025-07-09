import Link from "next/link"

interface Props {
  params: { slug: string }
}

// Sample blog content
const blogPosts: Record<string, { title: string; date: string; content: string }> = {
  "who-and-why": {
    title: "who and why",
    date: "2024-03-15",
    content: `hi all, i'm joão patriota, on the verge of defending my phd thesis at the universiteit van amsterdam (oct 2nd!) i realized its important to have a page where people could at least get a gist of who i am and what i am doing. 
    for this reason i condensed a lot of the main points people ask me about, job status projects and so on. however, in a very tired millenial way, i grew more and more annoyed with social media. this means that sometimes there are some thoughts or pictures (i photograph mostly 35mm and develop/scan/print at home) i would like to share, and thinking about medium/substack/instagram for this feels a bit pointless as im not really interested in farming views. 
    currently im building newgate, a b2b saas company (yes) together with two of my closest friends. a challenging process, nevertheless, but also an interesting spot to be at. what drew me to academia, to an extent, was also figuring hard problems and building what i thought was needed at that moment. 
    its hard to navigate, but definetely quite interesting to work on. naturally, some of my thoughts in this regard maybe shared within this page. 
    i hope this is useful or interesting. if anything just send a message -- a reply is guaranteed`,
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
