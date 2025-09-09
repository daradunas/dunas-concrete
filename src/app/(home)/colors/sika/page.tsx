"use client"

import { useState } from "react"
import { sikaColors } from "@/data/colors-data"
import { ColorsHeader } from "@/app/(home)/_components/colors/colors-header"
import { ColorPreview3D } from "@/app/(home)/_components/colors/color-preview-3d"
import { ColorsGrid } from "@/app/(home)/_components/colors/colors-grid"

export default function SikaColorsPage() {
  const [selectedColor, setSelectedColor] = useState(sikaColors[0])

  return (
    <div className="min-h-screen pt-36 pb-24">
      <div className="container mx-auto px-4">
        <ColorsHeader
          title="SikaColor - 120G"
          description="Discover our SIKA powder colors for durable concrete customization."
          colors={sikaColors}
          alternativeLink="/colors/davis"
          alternativeText="See Davis colors"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ColorsGrid
              colors={sikaColors}
              selectedColor={selectedColor}
              onSelect={setSelectedColor}
            />
          </div>

          <div id="preview-section" className="lg:col-span-1" data-aos="fade-up">
            <div className="sticky top-24">
              <div className="rounded-2xl border bg-[var(--brand)] shadow-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">Color Preview</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    See how{" "}
                    <span className="text-[var(--yellow-500)] font-medium">
                      {selectedColor.name}
                    </span>{" "}
                    looks on concrete
                  </p>
                </div>

                <div className="relative h-[28rem]">
                  <ColorPreview3D selectedColor={selectedColor} />
                </div>
              </div>
              <p className="mt-3 text-xs text-center px-3 py-2 rounded-md bg-[var(--yellow-100)] text-[var(--amber-800)] border border-[var(--yellow-300)]">
                ⚠️ Displayed color is for reference only; it may vary depending on the surface and application conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}