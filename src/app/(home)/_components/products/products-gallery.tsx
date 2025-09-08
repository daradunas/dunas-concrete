"use client"

import Image from "next/image"
import { products } from "@/data/products-data"

interface ProductsGalleryProps {
  selectedProduct: Product
  onProductSelect: (product: Product) => void
}

export function ProductsGallery({ selectedProduct, onProductSelect }: ProductsGalleryProps) {
  return (
    <div
      className="bg-[var(--brand)]/60 backdrop-blur-md shadow-lg rounded-2xl p-2 xl:p-3 h-full flex flex-row xl:flex-col items-center justify-center gap-3 xl:gap-4
             overflow-x-auto xl:overflow-x-hidden xl:overflow-y-auto scrollbar-hide"
    >

      {products.map((product) => (
        <button
          key={product.id}
          onClick={() => onProductSelect(product)}
          className={`group relative flex-shrink-0 
                  w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${selectedProduct.id === product.id
              ? "ring-2 ring-[var(--yellow-400)] shadow-lg"
              : "hover:shadow-md"
            }`}
        >
          <Image
            src={product.image || "/placeholder.svg?height=128&width=128"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[var(--background-black)]/40 py-1">
            <p className="text-[9px] md:text-xs font-medium text-[var(--text-white)] truncate text-center">
              {product.name}
            </p>
          </div>
        </button>
      ))}
    </div>
  )
}