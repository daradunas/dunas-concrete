"use client"

import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { useRef, useMemo } from "react"
import { TextureLoader, RepeatWrapping, Color } from "three"
import type { Mesh } from "three"

interface ColorPreview3DProps {
  selectedColor: ColorItem
}

function ConcreteWall({ color }: { color: string }) {
  const meshRef = useRef<Mesh>(null)

  const concreteTexture = useLoader(TextureLoader, "/products/background/concrete-wall-background.jpg")

  useMemo(() => {
    concreteTexture.wrapS = RepeatWrapping
    concreteTexture.wrapT = RepeatWrapping
    concreteTexture.repeat.set(2, 2)
  }, [concreteTexture])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[4, 3, 0.3]} />
        <meshStandardMaterial map={concreteTexture} color={new Color(color)} roughness={0.8} metalness={0.1} />
      </mesh>

      <mesh position={[-2.2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[1, 3, 0.2]} />
        <meshStandardMaterial
          map={concreteTexture}
          color={new Color(color).multiplyScalar(0.8)}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      <mesh position={[2.2, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[1, 3, 0.2]} />
        <meshStandardMaterial
          map={concreteTexture}
          color={new Color(color).multiplyScalar(0.8)}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      <mesh position={[0, -1.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 4]} />
        <meshStandardMaterial
          map={concreteTexture}
          color={new Color(color).multiplyScalar(0.7)}
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>
    </group>
  )
}

export function ColorPreview3D({ selectedColor }: ColorPreview3DProps) {
  return (
    <div className="w-full h-full bg-[var(--bg-gray-100)] relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        <ConcreteWall color={selectedColor.hex} />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.5}
        />

        <Environment preset="warehouse" />
      </Canvas>

      <div className="absolute bottom-4 left-4 bg-[var(--background-black)] text-[var(--text-white)] px-4 py-2 rounded-lg shadow-md">
        <p className="text-xs font-medium">{selectedColor.name}</p>
        <p className="text-xs opacity-80">{selectedColor.hex}</p>
      </div>
    </div>
  )
}
