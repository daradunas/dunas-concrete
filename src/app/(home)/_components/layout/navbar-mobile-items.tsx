"use client"

import { AlignJustifyIcon, Truck } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { H4 } from "@/components/typography"
import { useState } from "react"

interface NavbarMobileItemsProps {
  navItems: Array<{
    content: string
    href: string
    links: Array<{ href: string; text: string }>
  }>
}

const NavbarMobileItems = ({ navItems }: NavbarMobileItemsProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="-mr-2 hover:bg-transparent lg:hidden" size="icon" variant="ghost">
          <span className="sr-only">Open menu</span>
          <AlignJustifyIcon className="size-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white/95 backdrop-blur-xl border-l border-[var(--brand-primary)]/50 shadow-2xl">
        <VisuallyHidden>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden>

        <H4 className="p-2.5 text-[var(--text-primary)]">Menu</H4>
        <div className="flex flex-col h-full pt-2">
          <nav className="flex flex-col space-y-1 flex-1">
            {navItems.map((navItem) => (
              <Link
                key={navItem.content}
                href={navItem.href}
                onClick={handleLinkClick}
                className="text-[var(--text-primary)] hover:text-[var(--brand-primary)] font-medium transition-all duration-300 py-4 px-2 rounded-lg hover:bg-[var(--brand-primary)]/10 border-b border-[var(--brand-primary)]/30 last:border-b-0"
              >
                {navItem.content}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pb-10 flex justify-center items-center">
            <Link href="/quote" className="w-full flex justify-center" onClick={handleLinkClick}>
              <Button className="w-[80%] bg-gradient-to-r bg-[var(--yellow-500)] hover:bg-[var(--orange-light)] text-[var(--text-primary)] border-0 py-2 font-semibold flex items-center justify-center">
                <Truck className="w-4 h-4 mr-2" />
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavbarMobileItems