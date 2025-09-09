"use client"

import { H2 } from "@/components/typography"
import Image from "next/image"
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
      <Image
        src="/logo.svg"
        width={60}
        height={60}
        alt="Logo"
      />
      <div className="min-w-0 flex-1">
        <H2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[var(--brand-primary)] truncate text-left">
          Las Dunas Concrete
        </H2>
        <p className="hidden sm:block text-xs md:text-sm text-[var(--text-secondary)] truncate">Quality & Trust from Sun Valley</p>
      </div>
    </Link>
  )
}