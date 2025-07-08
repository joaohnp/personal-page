import Link from "next/link"

export default function Now() {
  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="hover:underline">
          ← back
        </Link>
      </div>

      <h1 className="text-2xl mb-8">now</h1>

      <div className="space-y-4 leading-relaxed">
      <a              href="https://newgate.pro"
                      className="hover:text-[#356aff] hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      newgate
                    </a>
        <p>the iliad</p>
        <p>running 6k</p>
        <p>amsterdam</p>
      </div>
    </div>
  )
}
