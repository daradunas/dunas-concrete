"use client"

import Link from "next/link"
import Lottie from "lottie-react"
import successAnimation from "@/assets/lottie/Succes.json"
import { H2 } from "@/components/typography"

export default function SuccessScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg-light)] text-[var(--text-primary)]">
      <Lottie animationData={successAnimation} loop={false} className="w-64 h-64" />
      <H2 className="mt-6 text-2xl font-bold text-[var(--text-primary)]">Email sent successfully!</H2>
      <p className="mt-2 text-sm opacity-80">Thank you for your request. We will contact you soon.</p>

      <Link
        href="/"
        className="mt-6 px-6 py-2 rounded-2xl bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)] hover:opacity-90 transition-all"
      >
        Back to Home
      </Link>
    </div>
  )
}