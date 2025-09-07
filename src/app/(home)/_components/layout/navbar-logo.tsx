"use client"

import { H2 } from "@/components/typography"
import Link from "next/link"

interface NavbarLogoProps {
  href?: string
}

export const NavbarLogo = ({ href = "/" }: NavbarLogoProps) => {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform duration-300"
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[var(--brand-primary)] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0" translate="no">
        <span className="text-[var(--text-primary)] font-bold text-sm sm:text-lg md:text-xl notranslate">DC</span>
      </div>

      <div className="min-w-0 flex-1">
        <H2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[var(--brand-primary)] truncate text-left">
          Las Dunas Concrete
        </H2>
        <p className="hidden sm:block text-xs md:text-sm text-gray-600 truncate">Quality & Trust from Sun Valley</p>
      </div>
    </Link>
  )
}