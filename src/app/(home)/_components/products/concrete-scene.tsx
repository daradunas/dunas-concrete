"use client"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { Suspense, useRef, useState, useEffect } from "react"
import { TextureLoader, Group, Mesh } from "three"

export function ConcreteScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}

function Scene() {
  const concreteTexture = useLoader(TextureLoader, "/products/background/concrete-wall-background.jpg")
  const sceneRef = useRef<Group>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useFrame(() => {
    if (sceneRef.current) {
      sceneRef.current.rotation.y = mouse.x * 0.2
      sceneRef.current.rotation.x = mouse.y * 0.2
    }
  })

  return (
    <group ref={sceneRef}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
      <directionalLight position={[-5, 8, 3]} intensity={0.3} color="#FFA500" />
      <Environment preset="warehouse" />

      <mesh scale={[50, 50, 50]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={concreteTexture} side={2} />
      </mesh>

      <FloatingObjects />
    </group>
  )
}

function FloatingObjects() {
  const concreteTexturev2 = useLoader(TextureLoader, "/products/background/concrete-3d.jpg")
  const obj1 = useRef<Mesh>(null)
  const obj2 = useRef<Mesh>(null)
  const obj3 = useRef<Mesh>(null)
  const obj4 = useRef<Mesh>(null)
  const obj5 = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (obj1.current) {
      obj1.current.position.x = Math.cos(t * 0.5) * 4
      obj1.current.position.y = Math.sin(t * 0.7) * 2
      obj1.current.position.z = Math.sin(t * 0.5) * 4
      obj1.current.rotation.y += 0.01
    }

    if (obj2.current) {
      obj2.current.position.x = Math.sin(t * 0.3) * 5
      obj2.current.position.y = Math.cos(t * 0.6) * 3
      obj2.current.position.z = Math.cos(t * 0.3) * 5
      obj2.current.rotation.x += 0.008
    }

    if (obj3.current) {
      obj3.current.position.x = Math.cos(t * 0.4) * 3
      obj3.current.position.y = Math.sin(t * 0.5) * 2.5
      obj3.current.position.z = Math.sin(t * 0.4) * 3
      obj3.current.rotation.z += 0.006
    }

    if (obj4.current) {
      obj4.current.position.x = Math.cos(t * 0.8) * 6
      obj4.current.position.y = Math.sin(t * 0.6) * 3
      obj4.current.position.z = Math.sin(t * 0.8) * 6
      obj4.current.rotation.x += 0.01           
      obj4.current.rotation.y += 0.007         
    }

    if (obj5.current) {
      obj5.current.position.x = Math.sin(t * 0.2) * 6
      obj5.current.position.y = Math.cos(t * 0.3) * 2
      obj5.current.position.z = Math.sin(t * 0.2) * 6
      obj5.current.rotation.x += 0.009
      obj5.current.rotation.y += 0.004
    }
  })

  return (
    <>
      <mesh ref={obj1}>
        <boxGeometry args={[1, 0.4, 1.5]} />
        <meshStandardMaterial map={concreteTexturev2} roughness={0.9} />
      </mesh>

      <mesh ref={obj2}>
        <boxGeometry args={[1.5, 0.3, 1]} />
        <meshStandardMaterial map={concreteTexturev2} roughness={0.9} color="#F5F5F5" />
      </mesh>

      <mesh ref={obj3}>
        <cylinderGeometry args={[0.2, 0.2, 2]} />
        <meshStandardMaterial color="#8B4513" metalness={0.8} roughness={0.3} />
      </mesh>

      <mesh ref={obj4}>
        <cylinderGeometry args={[0.2, 0.2, 2]} />
        <meshStandardMaterial color="#8B4513" metalness={0.8} roughness={0.3} />
      </mesh>

      <mesh ref={obj5}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial map={concreteTexturev2} roughness={0.7} metalness={0.2} />
      </mesh>
    </>
  )
}