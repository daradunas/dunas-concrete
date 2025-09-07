"use client"

import Link from "next/link"

type NavItemProps = {
  content: string
  href: string
  index: number
  headerVisible: boolean
}

export const NavItem = ({ content, href, index, headerVisible }: NavItemProps) => {
  return(
  <div
    className={`transition-all duration-500 ${
      headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
    }`}
    style={{ transitionDelay: `${index * 100 + 500}ms` }}
  >
    <Link
      href={href}
      className="text-[var(--text-primary)] hover:text-[var(--brand-primary)] font-medium transition-all duration-300 relative group"
    >
      {content}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary)] group-hover:w-full transition-all duration-300"></span>
    </Link>
  </div>
  )
}