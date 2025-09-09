"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { H2 } from "@/components/typography"

interface ColorsHeaderProps {
  title: string
  description: string
  colors: ColorItem[]
  alternativeLink: string
  alternativeText: string
}

export function ColorsHeader({ title, description, alternativeLink, alternativeText }: ColorsHeaderProps) {
  const buttonClasses =
    "border-2 border-[var(--yellow-500)] text-[var(--text-primary)] hover:bg-[var(--bg-gray-100)] hover:border-[var(--orange-light)]"

  return (
    <div className="flex flex-col-reverse gap-6 mb-8 md:flex-row md:items-center md:justify-between" data-aos="fade-up">
      <div className="text-left max-w-xl">
        <H2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-left">
          <span className="text-[var(--text-primary)]">Explore </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)]">
            {title}
          </span>
        </H2>
        <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secundary)]">{description}</p>
      </div>

      <div className="flex md:justify-end gap-3">
        <Link href={alternativeLink}>
          <Button variant="outline" className={buttonClasses}>
            {alternativeText}
          </Button>
        </Link>

        <a
          href="#preview-section"
          className="lg:hidden"
        >
          <Button variant="outline" className={buttonClasses}>
            Go to Preview
          </Button>
        </a>
      </div>
    </div>
  )
}