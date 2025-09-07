"use client"

import ProductCarousel from "@/app/(home)/_components/section/product-carousel"
import StrengthsSection from "@/app/(home)/_components/section/strengths-section"
import { H2 } from "@/components/typography"

export default function ProductSectionPreview() {
    return (
        <section id="products" className="py-20 relative" data-aos="fade-up">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-slate-800/20 pointer-events-none" />

            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <span className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-gradient-to-r bg-[var(--yellow-light)] text-[var(--text-primary)] shadow">
                        {"🧱 Premium Products"}
                    </span>
                    <H2 className="text-4xl lg:text-6xl font-bold mb-4">
                        <span className="text-[var(--text-primary)]">Our Specialized</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)]">
                            Products
                        </span>
                    </H2>
                    <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                        {"We offer a comprehensive range of high-quality concrete products to meet all construction needs"}
                    </p>
                </div>

                <ProductCarousel />
                <StrengthsSection />
            </div>
        </section>
    )
}