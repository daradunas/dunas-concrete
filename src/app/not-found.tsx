"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { H2 } from "@/components/typography"
import Navbar from "@/app/(home)/_components/layout/navbar"
import { Footer } from "@/app/(home)/_components/layout/footer"
import { navItemsContent } from "@/config/navitagion"

export default function GlobalNotFound() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "/"
    return (
        <>
            <Navbar navItems={navItemsContent} />
            <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 px-4">
                <div className="max-w-md mx-auto">
                    <H2 className="text-6xl font-bold text-[var(--yellow-500)] mb-4">404</H2>
                    <H2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">Page not found</H2>
                    <p className="text-[var(--text-secundary)] mb-10">Sorry, we couldn’t find the content you’re looking for.</p>
                    <Link href={`${baseUrl}/`}>
                        <Button className="px-6 py-3 text-lg shadow-lg hover:scale-105 transition-transform bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)]">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}