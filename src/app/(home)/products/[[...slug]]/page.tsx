"use client"

import { use, useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { products } from "@/data/products-data"
import { ConcreteScene } from "@/app/(home)/_components/products/concrete-scene"
import { ProductDisplay } from "@/app/(home)/_components/products/products-display"
import { ProductsGallery } from "@/app/(home)/_components/products/products-gallery"

interface ProductsPageProps {
  params: Promise<{ slug?: string[] }>
}

export default function ProductsPage({ params }: ProductsPageProps) {
  const { slug } = use(params)

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    const initial =
      slug && slug.length > 0
        ? products.find((p) => p.slug === slug[0])
        : products[0]

    if (!initial) {
      notFound()
    }

    setSelectedProduct(initial)
  }, [slug])

  const handleProductSelect = (newProduct: Product) => {
    setSelectedProduct(newProduct)
    window.history.pushState(null, "", `/products/${newProduct.slug}`)
  }

  if (!selectedProduct) {
    return null
  }

  return (
    <div className="min-h-screen pt-20 relative flex flex-col bg-cover bg-center bg-no-repeat">
      <ConcreteScene />

      <div className="relative z-10 flex-1 flex items-center justify-center px-4 lg:px-6">
        <div className="w-full max-w-6xl 2xl:max-w-7xl">
          <ProductDisplay product={selectedProduct} />
        </div>

      </div>

      <div className="relative xl:absolute xl:top-1/2 xl:left-6 xl:-translate-y-1/2 z-20 w-full xl:w-24 h-28 xl:h-[55%] mx-auto xl:mx-0">
        <ProductsGallery
          selectedProduct={selectedProduct}
          onProductSelect={handleProductSelect}
        />
      </div>
    </div>
  )
}