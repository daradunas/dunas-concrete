"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Info } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ProductDialog } from "@/app/(home)/_components/products/product-dialog"
import Link from "next/link"
import { H2 } from "@/components/typography"

interface ProductDisplayProps {
  product: Product
}

export function ProductDisplay({ product }: ProductDisplayProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
      <div className="relative">
        <div className="aspect-[4/3] max-w-md mx-auto rounded-2xl overflow-hidden bg-[var(--brand)]/10 backdrop-blur-sm border border-[var(--brand)]/20 shadow-2xl animate-float">
          <Image
            src={product.image || "/placeholder.svg?height=400&width=400&query=product"}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-6">
        <Card className="bg-[var(--brand)]/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              {product.badges.map((badge, i) => (
                <Badge key={i} variant="secondary" className="bg-[var(--yellow-100)] text-[var(--amber-800)]">
                  {badge}
                </Badge>
              ))}
            </div>

            <H2 className="text-4xl font-bold text-[var(--text-primary)] mb-4 text-left">{product.name}</H2>

            <p className="text-[var(--text-secundary)] text-lg leading-relaxed mb-6">{product.description}</p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <div className="w-2 h-2 bg-[var(--yellow-400)] rounded-full"></div>
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-[var(--orange-light)] text-[var(--text-primary)] bg-transparent cursor-pointer hover:scale-105">
                    <Info className="w-4 h-4 mr-2 text-[var(--orange-light)]" />
                    Learn more
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] sm:max-h-[800px]">
                  <ProductDialog product={product} isOpen />
                </DialogContent>
              </Dialog>
              <Link href="/quote">
                <Button className="bg-gradient-to-r bg-[var(--yellow-500)] hover:bg-[var(--orange-light)] text-[var(--text-primary)] border-0 shadow-md cursor-pointer hover:scale-105">
                  Request Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}