"use client"

import { H3 } from "@/components/typography"
import { Badge } from "@/components/ui/badge"
import { strengthOptions } from "@/data/strengths-data"

export default function StrengthsSection() {
  return (
    <div className="mt-20 bg-gradient-to-br from-[var(--brand)] to-[var(--brand)] backdrop-blur-sm rounded-3xl p-8 mb-16 border border-white/20 shadow-xl relative overflow-hidden" data-aos="fade-up">
      <div className="relative">
        <H3 className="text-3xl font-bold text-center mb-8">
          <span className="text-[var(--text-primary)]">💪 Available </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)]">
            Strengths (PSI)
          </span>
        </H3>
        <div className="flex flex-wrap justify-center gap-4">
          {strengthOptions.map((strength, i) => (
            <div key={i} className="hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <Badge className="text-lg py-3 px-6 bg-white/80 backdrop-blur-sm border-2 border-[var(--yellow-200)] text-[var(--text-primary)] hover:border-[var(--orange-light)] shadow-lg transition-all duration-300 cursor-pointer">
                {strength}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
