import Link from "next/link"

interface Props {
  params: { slug: string }
}

// Sample blog content
const blogPosts: Record<string, { title: string; date: string; content: string }> = {
  "who-and-why": {
    title: "who and why",
    date: "2025-07-09",
    content: `hi all, i'm joão patriota, on the verge of defending my phd thesis at the universiteit van amsterdam (oct 2nd!) i realized its important to have a page where people could at least get a gist of who i am and what i am doing.

for this reason i condensed a lot of the main points people mostly ask me about (job status, current projects and so on). however, in a very tired millenial way, i grew more and more annoyed with social media. this means that sometimes there are some thoughts or pictures (i photograph mostly 35mm and develop/scan/print at home) i would like to share, and thinking about medium/substack/instagram for this feels a bit pointless as im not really interested in farming views. not to mention how terrible linkedin is.

currently im building newgate, a b2b saas company (yes) together with two of my closest friends. a challenging process, nevertheless, but also an interesting spot to be at. what drew me to academia, to an extent, was also figuring hard problems and building what i thought was needed at that moment, somethin the industry also offers. daily im mostly into ml/llm ops, as well as working on training of new hires, project/product design and all other founder obligations

its hard to navigate, but definetely quite interesting to work on. naturally, some of my thoughts in this regard maybe shared within this page.

i hope this is useful or interesting. if anything just send a message -- a reply is guaranteed`,
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
