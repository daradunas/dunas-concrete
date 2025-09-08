"use client"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { Suspense, useRef, useState, useEffect, useCallback } from "react"
import { TextureLoader, type Group, type Mesh, type PerspectiveCamera, MathUtils, ClampToEdgeWrapping, LinearFilter } from "three"

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

function BackgroundImage({ url, depth = -20, parallax = 0.015 }: { url: string; depth?: number; parallax?: number }) {
  const texture = useLoader(TextureLoader, url)
  const meshRef = useRef<Mesh>(null)
  const { camera, size } = useThree()

  const updateScale = useCallback(() => {
    const cam = camera as PerspectiveCamera
    const fov = MathUtils.degToRad(cam.fov)
    const dist = cam.position.z - depth
    const viewportHeight = 2 * Math.tan(fov / 2) * dist
    const viewportWidth = viewportHeight * (size.width / size.height)

    const imageAspect = texture.image.width / texture.image.height
    const viewportAspect = viewportWidth / viewportHeight

    let scaleX = viewportWidth
    let scaleY = viewportHeight

    if (viewportAspect > imageAspect) {
      scaleY = viewportWidth / imageAspect
    } else {
      scaleX = viewportHeight * imageAspect
    }

    meshRef.current?.scale.set(scaleX, scaleY, 1)
  }, [camera, size, depth, texture])


  useEffect(() => {
    texture.wrapS = ClampToEdgeWrapping
    texture.wrapT = ClampToEdgeWrapping
    texture.minFilter = LinearFilter
    texture.magFilter = LinearFilter
    texture.needsUpdate = true
    updateScale()
  }, [texture, updateScale])


  useEffect(() => {
    const onResize = () => updateScale()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [updateScale])

  useFrame((state) => {
    if (!meshRef.current) return
    const mx = (state.pointer.x || 0) * parallax
    const my = (state.pointer.y || 0) * parallax
    meshRef.current.position.set(camera.position.x + mx, camera.position.y - my, depth)
  })

  return (
    <mesh ref={meshRef} renderOrder={-1000}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} depthWrite={false} />
    </mesh>
  )
}

function Scene() {
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
    <>
      <BackgroundImage url="/products/background/background-3d-2.png" depth={-20} parallax={0.015} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
      <directionalLight position={[-5, 8, 3]} intensity={0.3} color="#FFA500" />
      <Environment preset="warehouse" />
    </>
  )
}