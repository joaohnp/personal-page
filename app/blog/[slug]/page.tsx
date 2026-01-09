import Link from "next/link"
import ReactMarkdown from 'react-markdown'

interface Props {
  params: Promise<{ slug: string }>
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'app/blog/posts')
  const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'))
  return files.map(file => ({
    slug: file.replace('.md', '')
  }))
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'app/blog/posts', `${slug}.md`)

  let post = null
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    post = { title: data.title, date: data.date, content }
  } catch (error) {
    // file not found
  }

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
          <ReactMarkdown>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}
