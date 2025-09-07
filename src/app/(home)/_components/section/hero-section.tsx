"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Builder from "@/assets/img/builder.png"
import Truck from "@/assets/img/truck.png"
import Sika from "@/assets/img/sika.png"
import { H1 } from "@/components/typography"

type TriangleProps = {
  z: number
  delay?: number
  clip: string
  gradient: string
  width: string
}

function Triangle({ z, delay = 0, clip, gradient, width }: TriangleProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`absolute top-0 right-0 h-full w-full transition-all duration-1000 ease-out ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      style={{
        zIndex: z,
        transitionDelay: `${delay}ms`,
        clipPath: clip,
        background: gradient,
        width,
      }}
    />
  )
}

export default function HeroSection() {
  const [showWorker, setShowWorker] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowWorker(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const baseImg = "absolute z-10 h-auto transition-transform duration-300 ease-in-out hover:scale-105"

  return (
    <section className="relative h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 -top-16 md:-top-20">
        <Triangle
          z={10}
          clip="polygon(100% 0%, 100% 100%, 0% 100%)"
          gradient="linear-gradient(to bottom left, var(--yellow-300), var(--yellow-400), var(--yellow-500))"
          width="100%"
        />
        <Triangle
          z={30}
          delay={300}
          clip="polygon(100% 0%, 100% 100%, 20% 100%)"
          gradient="linear-gradient(to bottom left, var(--yellow-200), var(--yellow-300), var(--yellow-400))"
          width="75%"
        />
        <Triangle
          z={40}
          delay={500}
          clip="polygon(100% 0%, 100% 100%, 40% 100%)"
          gradient="linear-gradient(to bottom left, var(--yellow-100), var(--yellow-200), var(--yellow-300))"
          width="50%"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex min-h-[70vh]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <div className="space-y-6 lg:space-y-8 text-left max-lg:w-[250px]">
            <div className="space-y-4">
              <H1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-sm sm:max-w-md">
                <span className="text-[var(--text-primary)] block font-bold">START</span>
                <span className="text-[var(--text-primary)] font-bold">NEW</span>
                <span className="text-[var(--brand-primary)] block font-bold">PROJECTS</span>
              </H1>

              <p className="text-lg sm:text-xl text-[var(--text-secundary)] leading-relaxed font-bold max-w-md">
                Your go-to destination for top-quality concrete.
              </p>

            </div>
          </div>

          <div
            className={`relative flex justify-center items-center mt-8 lg:mt-0 transition-all duration-1000 ease-out transform ${showWorker ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95"
              }`}
          >
            <div className="relative w-full max-w-[400px] h-[400px] flex items-center justify-center">
              <Image
                src={Truck || "/placeholder.svg"}
                alt="Truck"
                width={300}
                height={200}
                priority
                className={`${baseImg} w-[250px] sm:w-[300px] left-[20px] sm:left-[40px] bottom-[260px] rotate-[15deg]`}
              />

              <Image
                src={Builder || "/placeholder.svg"}
                alt="Builder"
                width={400}
                height={300}
                priority
                className={`${baseImg} w-[280px] sm:w-[320px] left-[-80px] max-sm:w-0 bottom-[-100px]`}
              />

              <Image
                src={Sika || "/placeholder.svg"}
                alt="Sika"
                width={160}
                height={100}
                className={`${baseImg} z-20 w-[160px] right-[500px] top-[280px] rotate-[-10deg] max-xl:w-0 `}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />          
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-800/20 pointer-events-none z-50" />
    </section>
  )
}