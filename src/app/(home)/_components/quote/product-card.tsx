"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Minus, Palette, Check } from "lucide-react"

interface ProductCardProps {
  product: Product
  selectedProducts: CartItem[]
  onAddToCart: (product: Product, quantity: number, psi: string, color?: { name: string; hex: string }) => void
  onUpdateQuantity: (productId: string, psi: string, newQuantity: number) => void
  onRemoveFromCart: (productId: string, psi: string) => void
  onUpdateColor: (productId: string, psi: string, color: { name: string; hex: string }) => void
  generateQuantityOptions: () => number[]
  sikaColors: ColorItem[]
  davisColors: ColorItem[]
}

export function ProductCard({
  product,
  selectedProducts,
  onAddToCart,
  onRemoveFromCart,
  onUpdateColor,
  generateQuantityOptions,
  sikaColors,
  davisColors,
}: ProductCardProps) {
  const [selectedPsi, setSelectedPsi] = useState<string>(product.psiOptions[0])
  const [colorDialogOpen, setColorDialogOpen] = useState(false)
  const [localColor, setLocalColor] = useState<{ name: string; hex: string } | undefined>(undefined)

  const cartItem = selectedProducts.find(
    (item) => item.id === product.id && item.psi === selectedPsi
  )
  const currentQuantity = cartItem?.quantity ?? 0
  const currentColor =
    cartItem?.colorHex && cartItem?.colorName ? { name: cartItem.colorName, hex: cartItem.colorHex } : localColor

  const handleQuantityChange = (quantity: number) => {
    if (quantity > 0) {
      onAddToCart(product, quantity, selectedPsi, currentColor)
    } else if (cartItem) {
      onRemoveFromCart(product.id, selectedPsi)
      setLocalColor(undefined)
    }
  }

  const handlePsiChange = (psi: string) => {
    setSelectedPsi(psi)
    if (currentQuantity > 0) {
      onAddToCart(product, currentQuantity, psi, currentColor)
      const oldCartItem = selectedProducts.find(
        (item) => item.id === product.id && item.psi !== psi
      )
      if (oldCartItem) {
        onRemoveFromCart(product.id, oldCartItem.psi)
      }
    }
  }

  const handleSelectColor = (color: { name: string; hex: string }) => {
    setLocalColor(color)
    if (cartItem) {
      onUpdateColor(product.id, selectedPsi, color)
    }
    setColorDialogOpen(false)
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-[var(--bg-light)] hover:border-[var(--yellow-500)] p-0">
      <div className="relative">
        <Image
          src={product.image || "/placeholder.svg?height=300&width=400&query=product"}
          alt={product.name}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{product.name}</h3>
        <p className="text-sm text-[var(--text-secundary)] mb-4">{product.description}</p>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label className="text-sm font-medium">PSI Strength</Label>
            </div>
            <Select value={selectedPsi} onValueChange={handlePsiChange}>
              <SelectTrigger className="w-full cursor-pointer" translate="no">
                <SelectValue placeholder="Select PSI Strength" />
              </SelectTrigger>
              <SelectContent>
                {product.psiOptions.map((psi, idx) => (
                  <SelectItem key={idx} value={psi.toString()}>
                    {psi.toLocaleString()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <Label className="text-sm font-medium">Color</Label>
              {currentColor && (
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex h-3 w-3 rounded-full border"
                    style={{ backgroundColor: currentColor.hex }}
                  />
                  <span className="text-xs text-slate-600">{currentColor.name}</span>
                </div>
              )}
            </div>

            <Dialog open={colorDialogOpen} onOpenChange={setColorDialogOpen}>
              <DialogTrigger className="w-full cursor-pointer" asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Palette className="w-4 h-4" />
                  Choose color
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Select a concrete color</DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="sika" className="w-full">
                  <TabsList className="mb-4 grid grid-cols-2 w-full">
                    <TabsTrigger value="sika">Sika Colors</TabsTrigger>
                    <TabsTrigger value="davis">Davis Colors</TabsTrigger>
                  </TabsList>

                  <TabsContent value="sika">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[400px] overflow-y-auto">
                      {sikaColors.map((color, idx) => {
                        const isSelected = currentColor?.hex === color.hex
                        return (
                          <button
                            key={idx}
                            onClick={() => handleSelectColor({ name: color.name, hex: color.hex })}
                            className={`relative flex flex-col h-full min-h-[160px] overflow-hidden rounded-lg border transition cursor-pointer ${isSelected
                              ? "border-[var(--yellow-500)] scale-[1.01]"
                              : "border-0 "
                              }`}
                          >
                            <div className="w-full h-20 rounded-t-lg" style={{ backgroundColor: color.hex }} />
                            <div className="p-3 text-center flex-1 flex flex-col items-center justify-center">
                              <div className="text-sm font-medium text-slate-800">{color.name}</div>
                              <div className="text-xs text-slate-600">{color.hex}</div>
                            </div>
                            {isSelected && (
                              <span className="absolute top-2 right-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white shadow ring-1 ring-slate-200">
                                <Check className="w-4 h-4 text-green-600" />
                              </span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </TabsContent>

                  <TabsContent value="davis">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[400px] overflow-y-auto">
                      {davisColors.map((color, idx) => {
                        const isSelected = currentColor?.hex === color.hex
                        return (
                          <button
                            key={idx}
                            onClick={() => handleSelectColor({ name: color.name, hex: color.hex })}
                            className={`relative flex flex-col h-full min-h-[160px] overflow-hidden rounded-lg border transition cursor-pointer ${isSelected
                              ? "border-[var(--yellow-500)] scale-[1.01]"
                              : "border-0"
                              }`}
                          >
                            <div className="w-full h-20 rounded-t-lg" style={{ backgroundColor: color.hex }} />
                            <div className="p-3 text-center flex-1 flex flex-col items-center justify-center">
                              <div className="text-sm font-medium text-[var(--text-primary)]">{color.name}</div>
                              <div className="text-xs text-[var(--text-secundary)]">{color.hex}</div>
                            </div>
                            {isSelected && (
                              <span className="absolute top-2 right-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white shadow ring-1 ring-slate-200">
                                <Check className="w-4 h-4 text-green-600" />
                              </span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <Label className="text-sm font-medium">Quantity (cubic yards)</Label>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuantityChange(Math.max(0, currentQuantity - 0.5))}
                disabled={currentQuantity === 0}
                className="h-8 w-8 p-0 cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </Button>

              <Select
                value={currentQuantity.toString()}
                onValueChange={(value) => handleQuantityChange(Number.parseFloat(value))}
              >
                <SelectTrigger className="w-full cursor-pointer" translate="no">
                  <SelectValue placeholder="0" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  {generateQuantityOptions().map((qty) => (
                    <SelectItem key={qty} value={qty.toString()}>
                      {qty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuantityChange(Math.min(10, currentQuantity + 0.5))}
                disabled={currentQuantity >= 10}
                className="h-8 w-8 p-0 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {currentQuantity > 0 && (
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <span className="text-sm font-medium text-green-800">
                {currentQuantity} {product.unit}s × {selectedPsi} PSI
                {currentColor ? ` • ${currentColor.name}` : ""}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}