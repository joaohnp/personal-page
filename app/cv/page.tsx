import Link from "next/link"

export default function CV() {
  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="hover:underline">
          ← back
        </Link>
      </div>

      <div className="space-y-8">
        <div>
          <h1 className="text-2xl mb-4">cv</h1>
          <p className="text-gray-600">software engineer & creative technologist</p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">experience</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">senior software engineer</h3>
                  <p className="text-gray-600">
                    <a
                      href="https://newgate.io"
                      className="hover:text-[#356aff] hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      newgate
                    </a>
                  </p>
                </div>
                <span className="text-sm text-gray-500">2023 - present</span>
              </div>
              <p className="text-gray-700 text-sm">
                developing scalable web applications and leading technical initiatives
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">full-stack developer</h3>
                  <p className="text-gray-600">tech startup</p>
                </div>
                <span className="text-sm text-gray-500">2021 - 2023</span>
              </div>
              <p className="text-gray-700 text-sm">
                built and maintained multiple client projects using modern web technologies
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">junior developer</h3>
                  <p className="text-gray-600">digital agency</p>
                </div>
                <span className="text-sm text-gray-500">2020 - 2021</span>
              </div>
              <p className="text-gray-700 text-sm">
                contributed to various web development projects and learned industry best practices
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">education</h2>
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">science and technology</h3>
                <p className="text-gray-600">universidadde federal do rio grande do norte</p>
              </div>
              <span className="text-sm text-gray-500">2013 - 2016</span>
            </div>
            <p className="text-gray-700 text-sm">linear algebra, calculus, c++, matlab; bachelor's degree</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">skills</h2>
          <div className="flex flex-wrap gap-2">
            {["python", "langchain", "open router", "sql", "mlops", "llmops"].map(
              (skill) => (
                <span key={skill} className="px-2 py-1 bg-gray-100 text-sm rounded">
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
