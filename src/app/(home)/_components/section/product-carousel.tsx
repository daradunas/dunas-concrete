"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Truck } from "lucide-react"
import { products } from "@/data/products-data"
import { H3 } from "@/components/typography"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"

export default function ProductCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  )
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-2xl"
      data-aos="fade-up"
      style={{ background: "var(--brand-footer-bg)" }}
    >
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
        setApi={setApi}
      >
        <CarouselContent>
          {products.map((product, i) => (
            <CarouselItem key={i}>
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] relative">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-transparent" />
                </div>

                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center text-[var(--text-white)] relative">
                  <Badge className="bg-white/20 text-white border-white/30 mb-3 sm:mb-4">Premium Product</Badge>
                  <H3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text bg-gradient-to-r text-[var(--text-white)]">
                    {product.name}
                  </H3>
                  <p className="text-base sm:text-lg text-blue-100 mb-4 sm:mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {product.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-[var(--text-white)]">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/quote">
                    <Button className="bg-gradient-to-r bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)] shadow-[var(--brand-primary)]/25 
                      border-0 shadow-xl hover:scale-105 transition-all duration-300 text-shadow-md w-full sm:w-auto text-[var(--text-primary)] cursor-pointer">
                      <Truck className="w-4 h-4 mr-2" />
                      Request Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious iconSize="size-12" className="left-4 z-20 bg-transparent border-transparent text-[var(--text-white)] hover:bg-transparent hover:text-[var(--text-white)] cursor-pointer p-2 rounded-full shadow-lg max-lg:top-40 max-sm:top-32" />
        <CarouselNext iconSize="size-12" className="right-4 z-20 bg-transparent border-transparent text-[var(--text-white)] hover:bg-transparent hover:text-[var(--text-white)] cursor-pointer p-2 rounded-full shadow-lg max-lg:top-40 max-sm:top-32" />
      </Carousel>

      <div
        className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 
             flex gap-3 sm:gap-4 px-2"
      >
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 cursor-pointer ${i === current
              ? "bg-[var(--brand-primary)] scale-125"
              : "bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>
    </div>
  )
}