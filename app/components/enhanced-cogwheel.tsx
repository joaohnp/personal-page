"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import type * as THREE from "three"

function EnhancedCogwheelSystem() {
  const outerCogRef = useRef<THREE.Group>(null)
  const innerCogRef = useRef<THREE.Group>(null)
  const centerRef = useRef<THREE.Group>(null)

  // Outer cogwheel
  const outerTeeth = []
  const outerRadius = 1.2
  const outerTeethCount = 12

  for (let i = 0; i < outerTeethCount; i++) {
    const angle = (i / outerTeethCount) * Math.PI * 2
    const x = Math.cos(angle) * outerRadius
    const y = Math.sin(angle) * outerRadius
    outerTeeth.push({ x, y, char: i % 2 === 0 ? "▲" : "▼" })
  }

  // Inner cogwheel
  const innerTeeth = []
  const innerRadius = 0.7
  const innerTeethCount = 8

  for (let i = 0; i < innerTeethCount; i++) {
    const angle = (i / innerTeethCount) * Math.PI * 2
    const x = Math.cos(angle) * innerRadius
    const y = Math.sin(angle) * innerRadius
    innerTeeth.push({ x, y, char: "◆" })
  }

  // Center elements
  const centerElements = []
  const centerRadius = 0.3
  const centerCount = 6

  for (let i = 0; i < centerCount; i++) {
    const angle = (i / centerCount) * Math.PI * 2
    const x = Math.cos(angle) * centerRadius
    const y = Math.sin(angle) * centerRadius
    centerElements.push({ x, y, char: "●" })
  }

  useFrame((state) => {
    if (outerCogRef.current) {
      outerCogRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
    if (innerCogRef.current) {
      innerCogRef.current.rotation.z = -state.clock.elapsedTime * 0.5
    }
    if (centerRef.current) {
      centerRef.current.rotation.z = state.clock.elapsedTime * 0.8
    }
  })

  return (
    <group>
      {/* Outer cogwheel */}
      <group ref={outerCogRef}>
        {outerTeeth.map((tooth, index) => (
          <Text
            key={`outer-${index}`}
            position={[tooth.x, tooth.y, 0]}
            fontSize={0.15}
            color="#000000"
            anchorX="center"
            anchorY="middle"
            font="/fonts/GeistMono-Regular.ttf"
          >
            {tooth.char}
          </Text>
        ))}
      </group>

      {/* Inner cogwheel */}
      <group ref={innerCogRef}>
        {innerTeeth.map((tooth, index) => (
          <Text
            key={`inner-${index}`}
            position={[tooth.x, tooth.y, 0]}
            fontSize={0.12}
            color="#356aff"
            anchorX="center"
            anchorY="middle"
            font="/fonts/GeistMono-Regular.ttf"
          >
            {tooth.char}
          </Text>
        ))}
      </group>

      {/* Center rotating elements */}
      <group ref={centerRef}>
        {centerElements.map((element, index) => (
          <Text
            key={`center-${index}`}
            position={[element.x, element.y, 0]}
            fontSize={0.08}
            color="#000000"
            anchorX="center"
            anchorY="middle"
            font="/fonts/GeistMono-Regular.ttf"
          >
            {element.char}
          </Text>
        ))}
      </group>

      {/* Center core */}
      <Text
        position={[0, 0, 0]}
        fontSize={0.12}
        color="#356aff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/GeistMono-Regular.ttf"
      >
        ■
      </Text>
    </group>
  )
}

export function EnhancedCogwheel() {
  return (
    <div className="w-32 h-32">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={1} />
        <EnhancedCogwheelSystem />
      </Canvas>
    </div>
  )
}
