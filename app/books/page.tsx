import Link from "next/link"

export default function Books() {
  const books = [
    { title: "sapiens", author: "yuval noah harari", year: "2024" },
    { title: "atomic habits", author: "james clear", year: "2024" },
    { title: "the design of everyday things", author: "don norman", year: "2023" },
    { title: "thinking, fast and slow", author: "daniel kahneman", year: "2023" },
  ]

  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="hover:underline">
          ← back
        </Link>
      </div>

      <h1 className="text-2xl mb-8">books</h1>

      <div className="space-y-2">
        {books.map((book, index) => (
          <div key={index} className="flex justify-between">
            <span>
              {book.title} - {book.author}
            </span>
            <span>{book.year}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
