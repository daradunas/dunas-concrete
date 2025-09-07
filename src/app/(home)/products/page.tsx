"use client"

import { useState } from "react"
import { products } from "@/data/products-data"
import { ConcreteScene } from "@/app/(home)/_components/products/concrete-scene"
import { ProductDisplay } from "@/app/(home)/_components/products/products-display"
import { ProductsGallery } from "@/app/(home)/_components/products/products-gallery"

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0])

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product)
  }

  return (
    <div className="min-h-screen pt-24 overflow-hidden relative">
      <ConcreteScene />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <ProductDisplay product={selectedProduct} />
        <ProductsGallery selectedProduct={selectedProduct} onProductSelect={handleProductSelect} />
      </div>
    </div>
  )
}