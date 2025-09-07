"use client"

import { useEffect } from "react"
import Lottie from "lottie-react"
import loadingAnimation from "@/assets/lottie/Loader.json"
import { H2 } from "@/components/typography"

interface LoadingScreenProps {
  onComplete?: () => void
  duration?: number
}

export default function LoadingScreen({ onComplete, duration = 3000 }: LoadingScreenProps) {
  useEffect(() => {
    if (onComplete) {
      const timer = setTimeout(() => {
        onComplete()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [onComplete, duration])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg-light)] text-[var(--text-primary)]">
      <Lottie animationData={loadingAnimation} loop={true} className="w-56 h-56" />
      <H2 className="mt-6 text-xl font-semibold">Sending your request...</H2>
      <p className="text-sm opacity-80">Please wait a few seconds</p>
    </div>
  )
}