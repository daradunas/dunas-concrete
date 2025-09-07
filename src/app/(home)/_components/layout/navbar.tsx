"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavbarDesktopMenu } from "@/app/(home)/_components/layout/navbar-desktop-menu"
import NavbarMobileItems from "@/app/(home)/_components/layout/navbar-mobile-items"
import { NavbarLogo } from "@/app/(home)/_components/layout/navbar-logo"
import GTranslateWidget from "@/components/gtranslate-widget"

interface NavbarProps {
  navItems: Array<{
    content: string
    href: string
    links: Array<{ href: string; text: string }>
  }>
}

const Navbar = ({ navItems }: NavbarProps) => {
  const [headerVisible, setHeaderVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="absolute top-0 w-full z-50 bg-transparent transition-all duration-1000">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavbarLogo />
          <NavbarDesktopMenu navItems={navItems} headerVisible={headerVisible} />
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className={`hidden lg:block transition-all duration-700 ${headerVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              style={{ transitionDelay: "800ms" }}
            >
              <Link href="/quote">
                <Button className="bg-[var(--yellow-500)] hover:bg-[var(--orange-light)] text-[var(--text-primary)] font-semibold shadow-lg shadow-yellow-600/25 border-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Truck className="w-4 h-4 mr-2" />
                  Request Quote
                </Button>
              </Link>
            </div>
            <div className="scale-75 sm:scale-100 origin-right">
              <GTranslateWidget />
            </div>
          </div>
          <NavbarMobileItems navItems={navItems} />
        </div>
      </div>
    </header>
  )
}

export default Navbar
