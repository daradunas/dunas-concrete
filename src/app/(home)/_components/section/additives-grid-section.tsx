"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { additives } from "@/data/additives-data"
import { H2 } from "@/components/typography"

export default function AdditivesGridSection() {
  return (
    <section className="pl-20 pr-20 relative overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto px-4 relative text-center mb-16">
        <span className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-[var(--yellow-light)] text-[var(--text-primary)] shadow" data-aos="fade-up">
          {"⚗️ Specialized Additives"}
        </span>
        <H2 className="text-4xl lg:text-6xl font-bold mb-4" data-aos="fade-up">
          <span className="text-[var(--text-primary)]">Premium </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)]">Additives</span>
          <br />
          <span className="text-[var(--text-primary)]">& Admixtures</span>
        </H2>
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed pb-10" data-aos="fade-up">
          {"Enhance your concrete properties with our latest generation additives"}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additives.map((additive, i) => {
            const Icon = additive.icon
            return (
              <Card
                key={i}
                className="h-full bg-[var(--bg-light)]/70 backdrop-blur-sm border-2 border-[var(--yellow-200)]/50 
                hover:border-[var(--yellow-500)]/60 shadow-md hover:shadow-xl 
                transition-[border,shadow] duration-300 group overflow-hidden relative cursor-pointer transform-gpu p-0 subtle-bounce"
              >
                <div className="overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={additive.image || "/placeholder.svg"}
                      alt={`${additive.name} image`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="/placeholder.svg"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </AspectRatio>
                </div>
                <CardHeader className="pb-3 relative">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[var(--yellow-400)] to-[var(--yellow-500)] flex items-center justify-center text-[var(--text-white)] shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg text-[var(--text-primary)] group-hover:text-[var(--yellow-500)] transition-all duration-300">
                      {additive.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative px-6 pb-6">
                  <CardDescription className="text-[var(--text-secondary)] leading-relaxed">
                    {additive.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}