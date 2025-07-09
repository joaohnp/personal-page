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
          <p className="text-gray-600">decision-maker & AI dev</p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">experience</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">co-founder</h3>
                  <p className="text-gray-600">
                    <a
                      href="https://newgate.pro"
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
                startup to bring value via data-driven decisions. there is a gap between data and decision making, which we bridge by collaborating with other businesses. here I'm responsible for AI developments, training new hires, overall high-impact decision making and other c-level attributions. 
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">phd researcher</h3>
                  <p className="text-gray-600">universiteit van amsterdam</p>
                </div>
                <span className="text-sm text-gray-500">2019 - 2025</span>
              </div>
              <p className="text-gray-700 text-sm">
                contributed to several scientific projects and published research papers; mentored undergraduation students; taught 'analysis of neural signals' and 'scientific writing' at the psychobiologie programme 
              </p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">strategic advisor</h3>
                  <p className="text-gray-600">kaizen</p>
                </div>
                <span className="text-sm text-gray-500">2021 - 2023</span>
              </div>
              <p className="text-gray-700 text-sm">
                helped kaizen, a fast-growing edutech startup, to establish data-driven processes; data curation; overall reasoning about metrics and KPIs. kaizen is one of our dearest and closest client at newgate til this date
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
                      <h3 className="font-medium">phd in cognitive and computational neuroscience</h3>
                    </button>
                  </div>
                  <p className="text-gray-600 ml-6">universiteit van amsterdam</p>
                </div>
                <span className="text-sm text-gray-500">2019 - 2025</span>
              </div>
              {expandedEducation === "phd" && (
                <div className="ml-6 text-gray-700 text-sm space-y-2">
                  <p>dissertation: the space in between: sleep, memories and dreams</p>
                  <p>research focus: performed translational work (rats and humans), researching emotional memory consolidation during sleep. stablished cutting edge neurotechnology techniques to predict and manipulate fast frequencies during rem sleep in humans, as well as in rats. also designed the experiments, built the setups (arduino, open ephys), analyzed all the data (python).</p>
                  <p>key achievements: awarded piet visser prize for best poster; list of publications: 
                    <a
                      href="https://scholar.google.com.br/citations?user=k1ZS-yIAAAAJ&hl=en"
                      className="hover:text-[#356aff] hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      google scholar
                    </a>
                  </p>
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
                      <h3 className="font-medium">masters in neuroscience</h3>
                    </button>
                  </div>
                  <p className="text-gray-600 ml-6">brain institute - ufrn</p>
                </div>
                <span className="text-sm text-gray-500">2017 - 2019</span>
              </div>
              {expandedEducation === "masters" && (
                <div className="ml-6 text-gray-700 text-sm space-y-2">
                  <p>thesis: orientation selectivity in cat and agouti primary visual cortex as reflected in firing rates, LFP gamma oscillations and phase relationships</p>
                  <p>coursework: analysis of continuous and discrete data; foundations of computational neuroscience modelling; foundations of neuroscience</p>
                  <p>projects: analyzed large datasets of spiking and lfp activity. identified key patterns in firing rate of primary visual cortex neurons and its relation to overarching columnar organization</p>
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
                      <h3 className="font-medium">bachelors in science and technology</h3>
                    </button>
                  </div>
                  <p className="text-gray-600 ml-6">universidade federal do rio grande do norte</p>
                </div>
                <span className="text-sm text-gray-500">2013 - 2016</span>
              </div>
              <p className="text-gray-700 text-sm ml-6"></p>
              {expandedEducation === "bachelor" && (
                <div className="ml-6 text-gray-700 text-sm space-y-2 mt-2">
                  <p>
                    <strong>core subjects:</strong> linear algebra, calculus, c++, matlab
                  </p>
                  <p>
                    <strong>focus areas:</strong> mathematical modeling, computational methods, programming fundamentals, probability and statistics
                  </p>
                  <p>
                    <strong>projects:</strong> data wrangling and visualization of neuronal activity (matlab) at the brain institute; 
                  </p>
                  <p>
                    <strong>achievements:</strong> awarded a scientific initiation scholarship, which led me to an intership at TU darmstadt
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
