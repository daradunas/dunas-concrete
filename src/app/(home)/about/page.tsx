"use client"

import { H2 } from "@/components/typography"
import { TrustedFamilySection } from "@/app/(home)/about/_components/trusted-family-section"
import WhoAreWeSection from "@/app/(home)/about/_components/who-are-we-section"

export default function AboutPage() {
  return (
    <section
      id="about"
      className="px-4 sm:px-8 md:px-12 lg:px-20 pt-20 sm:pt-24 lg:pt-30 pb-12 sm:pb-16 lg:pb-20 relative"
    >
      <div className="container mx-auto px-4">
        <H2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-center max-w-3xl mx-auto" data-aos="fade-up">
          <span className="text-[var(--text-primary)]">Who are </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)]">
            We
          </span>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)] mx-auto rounded-full mt-3 sm:mt-4 lg:mt-5 mb-6 sm:mb-8 lg:mb-10"></div>
        </H2>
        <TrustedFamilySection />
        <WhoAreWeSection />
      </div>
    </section>
  )
}
