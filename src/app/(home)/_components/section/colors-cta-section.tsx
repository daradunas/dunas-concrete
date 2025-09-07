"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { H2, H3 } from "@/components/typography"

export default function ColorsCta() {
    return (
        <section className="py-20 relative" data-aos="fade-up">
            <div className="container mx-auto px-4 relative text-center mb-4">
                <span className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-[var(--yellow-light)] text-[var(--text-primary)] shadow" data-aos="fade-up">
                    {"🎨 Customization"}
                </span>
                <H2 className="text-4xl lg:text-6xl font-bold mb-4" data-aos="fade-up">
                    <span className="text-[var(--text-primary)]">Available </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)]">Colors</span>
                </H2>
                <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed" data-aos="fade-up">
                    {"Customize your concrete with our wide range of professional colors"}
                </p>

                <div className="bg-gradient-to-br from-[var(--brand)] to-[var(--brand)] backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl relative overflow-hidden" data-aos="fade-up">
                    <div className="grid md:grid-cols-2 gap-12 relative">
                        <div className="space-y-6" data-aos="fade-up">
                            <H3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 flex items-center">
                                <span className="w-3 h-3 bg-gradient-to-r from-[var(--yellow-500)] to-[var(--brand-redish)] rounded-full mr-3 animate-pulse" />
                                {"SikaColor-120G"}
                            </H3>
                            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{"SIKA powder colors for concrete customization"}</p>
                            <Link href="/colors/sika">
                                <Button
                                    variant="outline"
                                    className="border-2 border-[var(--brand-primary)] text-[var(--text-primary)] hover:border-[var(--orange-light)] transition-all duration-300 bg-transparent cursor-pointer"
                                >
                                    {"See More Sika Colors"} <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>

                        <div className="space-y-6" data-aos="fade-up">
                            <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 flex items-center">
                                <span className="w-3 h-3 bg-gradient-to-r from-[var(--grad-1-from)] to-[var(--brand-redish)] rounded-full mr-3 animate-pulse" />
                                {"Davis Colors"}
                            </h3>
                            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                                {"High-quality pigments for vibrant and durable concrete finishes."}
                            </p>
                            <Link href="/colors/davis">
                                <Button
                                    variant="outline"
                                    className="border-2 border-[var(--brand-primary)] text-[var(--text-primary)] hover:border-[var(--orange-light)] transition-all duration-300 bg-transparent cursor-pointer"
                                >
                                    {"See More Davis Colors"} <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}