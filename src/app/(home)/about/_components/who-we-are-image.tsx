"use client"

import type React from "react"
import Image from "next/image"
import { useState, useRef } from "react"
import { Star } from "lucide-react"

interface WhoWeAreImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  withReview?: boolean
}

export default function WhoWeAreImage({
  src,
  alt,
  className = "",
  width = 400,
  height = 300,
  withReview = false,
}: WhoWeAreImageProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const rotateY = ((e.clientX - centerX) / width) * 8
    const rotateX = ((centerY - e.clientY) / height) * 8

    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div
      ref={containerRef}
      className={`relative cursor-pointer w-full max-w-2xl mx-auto ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "300px",
        willChange: "transform",
      }}
    >
      <div
        className="relative transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(300px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          willChange: "transform",
          animationName: "none",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-50" />

        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-black)]/10 via-transparent to-transparent" />
        </div>

        {withReview && (
          <div className="absolute -bottom-8 -right-8 bg-[var(--brand)]/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-[var(--brand)]/30 max-w-xs transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[var(--yellow-400)] fill-current" />
              ))}
            </div>

            <p className="text-sm text-[var(--text-primary)] italic leading-relaxed mb-3">
              &quot;Exceptional quality and service. Always on time!&quot;
            </p>

            <p className="text-xs text-[var(--text-secundary)] font-medium">- Construction Partner</p>
          </div>
        )}
      </div>
    </div>
  )
}