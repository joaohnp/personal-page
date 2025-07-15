import Link from "next/link"

export default function Books() {
  const books = [
    { title: "why greatness cannot be planned", author: "kenneth stanley", year: "2025" },
    { title: "the creative act", author: "rick rubin", year: "2025" },
    { title: "the magic lantern", author: "ingmar bergman", year: "2023" },
    { title: "ghosts of my life", author: "mark fisher", year: "2023" },
    { title: "crisis zone", author: "simon hanselmann", year: "2022" },
    { title: "becoming aboliotionists", author: "derecka purnell", year: "2022" },
    { title: "the age of insight", author: "eric kandel", year: "2022" },
    { title: "megg and mogg in amsterdam", author: "simon hanselmann", year: "2021" },
    { title: "the end of the end of history", author: "alex hochuli", year: "2021" },
    { title: "the peoples republic of walmart", author: "leigh phillips", year: "2021" },
    { title: "kill all normies", author: "angela nagle", year: "2021" },
    { title: "la peste", author: "albert camus", year: "2021" },
    { title: "the jakartha method", author: "vincent bevins", year: "2021" },
    { title: "the metarmophosis", author: "franz kafka", year: "2021" },
    { title: "torto arado", author: "itamar vieira junior", year: "2021" },
    { title: "capitalist realism", author: "mark fisher", year: "2021" },
    { title: "o oráculo da noite", author: "sidarta ribeiro", year: "2021" },
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
