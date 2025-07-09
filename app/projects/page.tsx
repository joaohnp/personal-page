import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: <a              href="https://app.new-chat.ai"
                      className="hover:text-[#356aff] hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      newchat
                    </a>,
      description: "all in one chat app to connect with main llm providers (openai, google, anthropic and so on)",
      tech: ["python", "langchain", "open router"],
      year: "2025",
      status: "active",
    },
    {
        title: <a              href="https://app.newfeed.ai"
                      className="hover:text-[#356aff] hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      newfeed
                    </a>,
        description: "news parser, feed aggregator and fully functioning agentic news room and AI powered clipping",
        tech: ["python", "langchain", "open router"],
        year: "2025",
        status: "active",
      },
      {
        title: <a              href="https://app.newmeet.ai"
                      className="hover:text-[#356aff] hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      newfeed
                    </a>,
        description: "complete video conferencing app connecte to AI agents to provide summaries specific to your workflow",
        tech: ["python", "langchain"],
        year: "2025",
        status: "active",
      },
      {
        title: "energy estimation algorithm",
        description: (
  <span>
    sleep/HR/HRV algorithm based on wearables data to provide energy-levels
    estimation to consumer. at{" "}
    <a
      href="https://www.eon2life.com" // Replace with the actual URL for eon2life
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#356aff] hover:underline transition-colors" // You can retain your existing link styling
    >
      eon2life
    </a>
  </span>
),
        tech: ["python", "fastapi"],
        year: "2024",
        status: "active",
      },

    {
      title: "healthcare journey classifier",
      description: "developed a machine learning model to determine if the patient should go to the emergency room or to a video consultation. end product reached 97% accuracy and is currently deployed in production. this took place at unimed-bh in a partnership with indigo hive",
      tech: ["python", "pycaret", "scikit-learn"],
      year: "2024",
      status: "completed",
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
