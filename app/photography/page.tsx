import Link from "next/link"

export default function Photography() {
  const albums = ["kinema", "sargaço", "rome"]

  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="hover:underline">
          ← back
        </Link>
      </div>

      <h1 className="text-2xl mb-8">photography</h1>

      <div className="space-y-2">
        {albums.map((album) => (
          <div key={album}>
            <Link href={`/photography/${album}`} className="hover:underline">
              {album}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
