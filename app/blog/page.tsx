import Link from "next/link"

export default function Blog() {
  const posts = [
    { slug: "on-minimalism", title: "on minimalism", date: "2024-03-15" },
    { slug: "building-personal-websites", title: "building personal websites", date: "2024-02-28" },
    { slug: "thoughts-on-design", title: "thoughts on design", date: "2024-01-20" },
    { slug: "learning-in-public", title: "learning in public", date: "2024-01-05" },
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
