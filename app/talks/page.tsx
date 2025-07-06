import Link from "next/link"

export default function Talks() {
  const talks = [
    { title: "building scalable web applications", event: "tech conference 2024", date: "march 2024" },
    { title: "machine learning in production", event: "ai summit", date: "january 2024" },
    { title: "the future of web development", event: "dev meetup", date: "november 2023" },
  ]

  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="hover:underline">
          ← back
        </Link>
      </div>

      <h1 className="text-2xl mb-8">talks</h1>

      <div className="space-y-4">
        {talks.map((talk, index) => (
          <div key={index} className="space-y-1">
            <div className="font-medium">{talk.title}</div>
            <div className="text-sm opacity-70">
              {talk.event} - {talk.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
