"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ColorsGridProps {
  colors: ColorItem[]
  selectedColor: ColorItem
  onSelect: (color: ColorItem) => void
}

export function ColorsGrid({ colors, selectedColor, onSelect }: ColorsGridProps) {
  const hoverClasses = "hover:border-[var(--yellow-500)]/60"

  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {colors.map((color, index) => (
          <Card
            key={index}
            className={`group hover:shadow-xl transition-all duration-300 border-[var(--slate-200)] ${hoverClasses} hover:scale-105 overflow-hidden p-0 cursor-pointer ${
              selectedColor.hex === color.hex ? "ring-2 ring-[var(--yellow-500)]" : ""
            }`}
            onClick={() => onSelect(color)}
          >
            <CardHeader className="p-0">
              <div
                className="w-full h-36 sm:h-20 md:h-30"
                style={{ backgroundColor: color.hex }}
                aria-label={`${color.name} color swatch`}
              />
            </CardHeader>
            <CardContent className="p-4 text-center">
              <CardTitle className="text-lg font-semibold text-[var(--text-primary)]">{color.name}</CardTitle>
              <p className="text-sm text-[var(--text-secondary)]">{color.hex}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}