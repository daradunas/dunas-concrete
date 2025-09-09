"use client"

import { Award, Shield } from "lucide-react"
import WhoWeAreImage from "@/app/(home)/about/_components/who-we-are-image"
import { H2 } from "@/components/typography"

const features = [
  { icon: Shield, title: "Guaranteed Quality", desc: "Certified products" },
  { icon: Award, title: "Experience", desc: "Years in the market" },
]

export function TrustedFamilySection() {
  return (
    <div className="container mx-auto px-4" data-aos="fade-up">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        <div className="space-y-8">
          <H2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-[var(--text-primary)]">Trusted </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow-400)] to-[var(--yellow-500)]">
              Family
            </span>
            <br />
            <span className="text-[var(--text-primary)]">Business</span>
          </H2>

          <div className="space-y-6 text-lg text-[var(--text-secundary)] leading-relaxed">
            <p>
              Founded in Sun Valley by brothers Eduardo and Carlos Rodríguez, Las Dunas Concrete focuses on product
              quality and customer service.
            </p>
            <p>Punctual delivery and personalized consulting make us a preferred choice across the region.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 p-6 bg-[var(--text-white)]/80 backdrop-blur-sm rounded-2xl border border-[var(--text-white)]/20 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)] rounded-xl shadow-lg flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[var(--text-white)]" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-primary)] text-lg">{item.title}</div>
                  <div className="text-sm text-[var(--text-secundary)]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <WhoWeAreImage src="/products/background/background-3d-2.png" alt="Equipo Las Dunas" withReview />
        </div>
      </div>
    </div>
  )
}