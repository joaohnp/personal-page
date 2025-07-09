import Link from "next/link"

export default function Blog() {
  const posts = [
    { slug: "who-and-why", title: "who and why", date: "2025-07-09" },
  ]

  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="hover:underline">
          ← back
        </Link>
      </div>

      <h1 className="text-2xl mb-8">blog</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.slug} className="flex justify-between items-start">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
            <span className="text-sm opacity-70 ml-4">{post.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
