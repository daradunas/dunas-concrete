"use client"

import { NavItem } from "@/app/(home)/_components/layout/nav-item"

interface NavbarDesktopMenuProps {
  navItems: Array<{
    content: string
    href: string
    links: Array<{ href: string; text: string }>
  }>
  headerVisible: boolean
}

export const NavbarDesktopMenu = ({ navItems, headerVisible }: NavbarDesktopMenuProps) => {
  return (
    <nav className="hidden lg:flex space-x-8 pr-6 pl-2">
      {navItems.map((navItem, index) => (
        <NavItem
          key={navItem.content}
          content={navItem.content}
          href={navItem.href}
          index={index}
          headerVisible={headerVisible}
        />
      ))}
    </nav>
  )
}