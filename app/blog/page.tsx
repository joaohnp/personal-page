import Link from "next/link"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Blog() {
  const postsDir = path.join(process.cwd(), 'app/blog/posts')
  const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'))
  const posts = files.map(file => {
    const slug = file.replace('.md', '')
    const filePath = path.join(postsDir, file)
    const content = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(content)
    return { slug, title: data.title, date: data.date }
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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
