"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { H2 } from "@/components/typography"
import sikaColors from "@/assets/img/sikaColors.jpeg"
import davisColors from "@/assets/img/DavisColors.jpeg"
import Image from "next/image"

export default function ColorsCta() {
    return (
        <section className="py-20 relative" data-aos="fade-up">
            <div className="container mx-auto px-4 relative text-center mb-4">
                <span className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-[var(--yellow-light)] text-[var(--text-primary)] shadow">
                    {"🎨 Customization"}
                </span>

                <H2 className="text-4xl lg:text-6xl font-bold mb-4">
                    <span className="text-[var(--text-primary)]">Available </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)]">
                        Colors
                    </span>
                </H2>

                <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-10">
                    {"Customize your concrete with our wide range of professional colors"}
                </p>

                <div className="bg-gradient-to-br from-[var(--brand)] to-[var(--brand)] rounded-3xl p-8 border border-[var(--brand)]/20 shadow-xl">
                    <div className="grid min-lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                            <Image
                                src={sikaColors}
                                alt="Sika Colors"
                                className="w-full max-w-[150px] h-auto rounded-xl object-contain"
                            />
                            <div>
                                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                                    {"SIKA powder colors for concrete customization"}
                                </p>
                                <Link href="/colors/sika">
                                    <Button
                                        variant="outline"
                                        className="border-2 border-[var(--brand-primary)] text-[var(--text-primary)] hover:border-[var(--orange-light)] transition-all duration-300"
                                    >
                                        {"See More Sika Colors"} <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                            <Image
                                src={davisColors}
                                alt="Davis Colors"
                                className="w-full max-w-[150px] h-auto rounded-xl object-contain"
                            />
                            <div>
                                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                                    {"High-quality pigments for vibrant and durable concrete finishes."}
                                </p>
                                <Link href="/colors/davis">
                                    <Button
                                        variant="outline"
                                        className="border-2 border-[var(--brand-primary)] text-[var(--text-primary)] hover:border-[var(--orange-light)] transition-all duration-300"
                                    >
                                        {"See More Davis Colors"} <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}