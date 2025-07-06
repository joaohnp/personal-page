"use client"

import { useEffect, useState } from "react"

export function EnhancedCogwheel() {
  const [rotation1, setRotation1] = useState(0)
  const [rotation2, setRotation2] = useState(0)
  const [rotation3, setRotation3] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation1((prev) => prev + 0.5)
      setRotation2((prev) => prev - 0.8)
      setRotation3((prev) => prev + 1.2)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Outer cogwheel elements
  const outerElements = []
  const outerRadius = 55
  const outerCount = 11

  for (let i = 0; i < outerCount; i++) {
    const angle = (i / outerCount) * 360 + rotation1
    const x = Math.cos((angle * Math.PI) / 180) * outerRadius
    const y = Math.sin((angle * Math.PI) / 180) * outerRadius
    outerElements.push({ x, y, char: i % 2 === 0 ? "▲" : "▼", key: `outer-${i}` })
  }

  // Inner cogwheel elements
  const innerElements = []
  const innerRadius = 30
  const innerCount = 7

  for (let i = 0; i < innerCount; i++) {
    const angle = (i / innerCount) * 360 + rotation2
    const x = Math.cos((angle * Math.PI) / 180) * innerRadius
    const y = Math.sin((angle * Math.PI) / 180) * innerRadius
    innerElements.push({ x, y, char: "◆", key: `inner-${i}` })
  }

  // Center elements
  const centerElements = []
  const centerRadius = 15
  const centerCount = 5

  for (let i = 0; i < centerCount; i++) {
    const angle = (i / centerCount) * 360 + rotation3
    const x = Math.cos((angle * Math.PI) / 180) * centerRadius
    const y = Math.sin((angle * Math.PI) / 180) * centerRadius
    centerElements.push({ x, y, char: "●", key: `center-${i}` })
  }

  return (
    <div className="w-32 h-32 relative flex items-center justify-center">
      <svg width="128" height="128" viewBox="-64 -64 128 128" className="absolute">
        {/* Outer cogwheel */}
        {outerElements.map((element) => (
          <text
            key={element.key}
            x={element.x}
            y={element.y}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="8"
            fill="#1e1f21"
            fontFamily="monospace"
          >
            {element.char}
          </text>
        ))}

        {/* Inner cogwheel */}
        {innerElements.map((element) => (
          <text
            key={element.key}
            x={element.x}
            y={element.y}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="10"
            fill="#356aff"
            fontFamily="monospace"
          >
            {element.char}
          </text>
        ))}

        {/* Center elements */}
        {centerElements.map((element) => (
          <text
            key={element.key}
            x={element.x}
            y={element.y}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="5"
            fill="#000000"
            fontFamily="monospace"
          >
            {element.char}
          </text>
        ))}

        {/* Center core */}
        <text
          x="0"
          y="0"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="9"
          fill="#356aff"
          fontFamily="monospace"
        >
          ■
        </text>
      </svg>
    </div>
  )
}
