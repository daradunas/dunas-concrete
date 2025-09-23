"use client"

import { MapPin } from "lucide-react"
import GoogleMap from "@/app/(home)/contact/_components/google-map"

export default function ContactMap() {
  return (
    <div className="relative overflow-hidden rounded-r-3xl lg:rounded-l-none rounded-l-3xl">
      <div className="absolute top-4 right-4 z-10">
        <div
          className="backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border"
          style={{
            background: "rgba(255,255,255,0.9)",
            borderColor: "var(--brand-footer-border)",
          }}
        >
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-[var(--text-secondary)]" />
            <span className="text-sm font-medium text-[var(--text-primary)]">Our Location</span>
          </div>
        </div>
      </div>

      <GoogleMap />
    </div>
  )
}