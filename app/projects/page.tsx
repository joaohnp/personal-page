import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "personal website",
      description: "minimalist portfolio built with next.js and tailwind",
      tech: ["next.js", "tailwind", "typescript"],
      year: "2024",
      status: "active",
    },
    {
      title: "task manager app",
      description: "clean and simple task management with drag & drop",
      tech: ["react", "node.js", "mongodb"],
      year: "2023",
      status: "completed",
    },
    {
      title: "weather dashboard",
      description: "real-time weather data visualization",
      tech: ["vue.js", "d3.js", "api integration"],
      year: "2023",
      status: "completed",
    },
    {
      title: "code snippet manager",
      description: "organize and share code snippets with syntax highlighting",
      tech: ["react", "firebase", "prism.js"],
      year: "2022",
      status: "archived",
    },
  ]

  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="hover:underline">
          ← back
        </Link>
      </div>

      <h1 className="text-2xl mb-8">projects</h1>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">{project.title}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{project.year}</span>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    project.status === "active"
                      ? "bg-green-100 text-green-800"
                      : project.status === "completed"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
