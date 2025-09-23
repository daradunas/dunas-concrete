"use client"

import { H2 } from "@/components/typography"

export default function ContactHeader() {
  return (
    <section id="contact" className="px-4 sm:px-8 md:px-12 lg:px-20 pt-16 relative">
      <div className="container mx-auto px-4 relative text-center mb-12 mt-12" data-aos="fade-up">
        <span className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-[var(--yellow-light)] text-[var(--text-primary)] shadow">
          {"📞 Contact Us"}
        </span>

        <H2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto mt-6">
          <span className="text-[var(--text-primary)]">Contact Us </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)]">
            Today
          </span>
        </H2>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-[var(--text-secondary)]">
          We&apos;re ready to help you with your next construction project
        </p>
      </div>
    </section>
  )
}