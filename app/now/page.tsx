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
        <a href="https://www.newgate.pro">newgate</a>
        <p>the iliad</p>
        <p>based in amsterdam</p>
      </div>
    </div>
  )
}
