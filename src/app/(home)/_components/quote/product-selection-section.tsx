"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ProductCard } from "@/app/(home)/_components/quote/product-card"
import { Truck } from "lucide-react"
import { products } from "@/data/products-data"
import { sikaColors, davisColors } from "@/data/colors-data"

interface ProductSelectionSectionProps {
  selectedProducts: CartItem[]
  onAddToCart: (
    product: Product,
    quantity: number,
    psi: string,
    color?: { name: string; hex: string }
  ) => void
  onUpdateQuantity: (productId: string, psi: string, newQuantity: number) => void
  onRemoveFromCart: (productId: string, psi: string) => void
  onUpdateColor: (productId: string, psi: string, color: { name: string; hex: string }) => void
  generateQuantityOptions: () => number[]
}

export function ProductSelectionSection({
  selectedProducts,
  onAddToCart,
  onUpdateQuantity,
  onRemoveFromCart,
  onUpdateColor,
  generateQuantityOptions,
}: ProductSelectionSectionProps) {
  return (
    <Card className="bg-[var(--bg-light)]/70 backdrop-blur-sm border-0 shadow-xl" data-aos="fade-up">
      <CardHeader>
        <CardTitle className="text-2xl text-[var(--text-primary)] flex items-center">
          <Truck className="w-6 h-6 mr-3 text-[var(--orange-light)]" />
          Select Products
        </CardTitle>
        <CardDescription>
          Choose your concrete products and specify quantities and PSI strength. You can also select a color.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selectedProducts={selectedProducts}
              onAddToCart={onAddToCart}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveFromCart={onRemoveFromCart}
              onUpdateColor={onUpdateColor}
              generateQuantityOptions={generateQuantityOptions}
              sikaColors={sikaColors}
              davisColors={davisColors}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}