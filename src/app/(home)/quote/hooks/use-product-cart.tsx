"use client"

import { useState } from "react"

export function useProductCart() {
  const [selectedProducts, setSelectedProducts] = useState<CartItem[]>([])

  const addToCart = (product: Product, quantity: number, psi = "3000", color?: { name: string; hex: string }) => {
    const existingItem = selectedProducts.find((item) => item.id === product.id && item.psi === psi)

    if (existingItem) {
      setSelectedProducts((prev) =>
        prev.map((item) =>
          item.id === product.id && item.psi === psi
            ? { ...item, quantity, ...(color ? { colorName: color.name, colorHex: color.hex } : {}) }
            : item,
        ),
      )
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image,
        unit: product.unit,
        quantity,
        psi,
        colorName: color?.name,
        colorHex: color?.hex,
      }
      setSelectedProducts((prev) => [...prev, newItem])
    }
  }

  const removeFromCart = (productId: string, psi: string) => {
    setSelectedProducts((prev) => prev.filter((item) => !(item.id === productId && item.psi === psi)))
  }

  const updateQuantity = (productId: string, psi: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId, psi)
      return
    }

    setSelectedProducts((prev) =>
      prev.map((item) => (item.id === productId && item.psi === psi ? { ...item, quantity: newQuantity } : item)),
    )
  }

  const updateItemColor = (productId: string, psi: string, color: { name: string; hex: string }) => {
    setSelectedProducts((prev) =>
      prev.map((item) =>
        item.id === productId && item.psi === psi ? { ...item, colorName: color.name, colorHex: color.hex } : item,
      ),
    )
  }

  const generateQuantityOptions = () => {
    const options = []
    for (let i = 0.5; i <= 10; i += 0.5) {
      options.push(i)
    }
    return options
  }

  return {
    selectedProducts,
    setSelectedProducts,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateItemColor,
    generateQuantityOptions,
  }
}