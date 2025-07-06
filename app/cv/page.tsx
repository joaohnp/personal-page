import Link from "next/link"

export default function CV() {
  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="hover:underline">
          ← back
        </Link>
      </div>

      <h1 className="text-2xl mb-8">cv</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-lg mb-4">experience</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between">
                <span>senior software engineer</span>
                <span>2022-present</span>
              </div>
              <div className="text-sm opacity-70">tech company</div>
            </div>
            <div>
              <div className="flex justify-between">
                <span>software engineer</span>
                <span>2020-2022</span>
              </div>
              <div className="text-sm opacity-70">startup</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg mb-4">education</h2>
          <div>
            <div className="flex justify-between">
              <span>computer science</span>
              <span>2016-2020</span>
            </div>
            <div className="text-sm opacity-70">university</div>
          </div>
        </section>
      </div>
    </div>
  )
}
