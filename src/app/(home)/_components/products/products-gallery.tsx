"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/data/products-data"
import { H3 } from "@/components/typography"

interface ProductsGalleryProps {
  selectedProduct: Product
  onProductSelect: (product: Product) => void
}

export function ProductsGallery({ selectedProduct, onProductSelect }: ProductsGalleryProps) {
  return (
    <div className="relative transition-all duration-1000 delay-500">
      <Card className="bg-[var(--brand)]/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-8">
        <CardContent className=" text-center mb-8">
          <H3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Explore Our Products</H3>
          <p className="text-center text-[var(--text-secondary)] mb-8">
            Click on any product to explore
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => onProductSelect(product)}
                className={`group relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${selectedProduct.id === product.id
                  ? "ring-4 ring-[var(--yellow-400)] shadow-xl" : "hover:shadow-lg"
                  }`}
              >
                <Image
                  src={product.image || "/placeholder.svg?height=256&width=256&query=product"}
                  alt={product.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 transition-all duration-300 ${selectedProduct === product
                    ? "bg-gradient-to-t from-[var(--yellow-500)]/60 to-transparent"
                    : "bg-gradient-to-t from-[var(--background-black)]/40 to-transparent group-hover:from-[var(--yellow-500)]/40"
                    }`}
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-[var(--text-white)] text-xs font-medium truncate">{product.name}</p>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}