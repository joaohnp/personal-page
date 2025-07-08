"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

export default function CV() {
  const [expandedEducation, setExpandedEducation] = useState<string | null>(null)

  const toggleEducation = (id: string) => {
    setExpandedEducation(expandedEducation === id ? null : id)
  }

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
          <div className="space-y-4">
            {/* PhD */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleEducation("phd")}
                      className="flex items-center gap-1 hover:text-gray-600 transition-colors"
                    >
                      {expandedEducation === "phd" ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      <h3 className="font-medium">phd in [your field]</h3>
                    </button>
                  </div>
                  <p className="text-gray-600 ml-6">university name</p>
                </div>
                <span className="text-sm text-gray-500">year - year</span>
              </div>
              {expandedEducation === "phd" && (
                <div className="ml-6 text-gray-700 text-sm space-y-2">
                  <p>dissertation: [title of your dissertation]</p>
                  <p>research focus: [brief description of your research area]</p>
                  <p>key achievements: [publications, awards, etc.]</p>
                </div>
              )}
            </div>

            {/* Masters */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleEducation("masters")}
                      className="flex items-center gap-1 hover:text-gray-600 transition-colors"
                    >
                      {expandedEducation === "masters" ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      <h3 className="font-medium">masters in [your field]</h3>
                    </button>
                  </div>
                  <p className="text-gray-600 ml-6">university name</p>
                </div>
                <span className="text-sm text-gray-500">year - year</span>
              </div>
              {expandedEducation === "masters" && (
                <div className="ml-6 text-gray-700 text-sm space-y-2">
                  <p>thesis: [title of your thesis]</p>
                  <p>coursework: [relevant courses or specializations]</p>
                  <p>projects: [key projects or research work]</p>
                </div>
              )}
            </div>

            {/* Bachelor's */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleEducation("bachelor")}
                      className="flex items-center gap-1 hover:text-gray-600 transition-colors"
                    >
                      {expandedEducation === "bachelor" ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      <h3 className="font-medium">science and technology</h3>
                    </button>
                  </div>
                  <p className="text-gray-600 ml-6">universidade federal do rio grande do norte</p>
                </div>
                <span className="text-sm text-gray-500">2013 - 2016</span>
              </div>
              <p className="text-gray-700 text-sm ml-6">bachelor's degree</p>
              {expandedEducation === "bachelor" && (
                <div className="ml-6 text-gray-700 text-sm space-y-2 mt-2">
                  <p>
                    <strong>core subjects:</strong> linear algebra, calculus, c++, matlab
                  </p>
                  <p>
                    <strong>focus areas:</strong> mathematical modeling, computational methods, programming fundamentals
                  </p>
                  <p>
                    <strong>projects:</strong> [any significant projects or research during bachelor's]
                  </p>
                  <p>
                    <strong>achievements:</strong> [any honors, awards, or notable accomplishments]
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">skills</h2>
          <div className="flex flex-wrap gap-2">
            {["python", "langchain", "open router", "sql", "mlops", "llmops"].map((skill) => (
              <span key={skill} className="px-2 py-1 bg-gray-100 text-sm rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
