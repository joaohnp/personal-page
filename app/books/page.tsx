import Link from "next/link"

export default function Books() {
  const books = [
    { title: "why greatness cannot be planned", author: "kenneth stanley", year: "2025" },
    { title: "the creative act", author: "rick rubin", year: "2025" },
    { title: "zero to one", author: "peter thiel", year: "2025" },
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
