"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Shield, Wrench, Palette, Layers, Timer, Truck, Droplets } from "lucide-react"
import Link from "next/link"
import { useGTranslate } from "@/hook/useTransale"

export function ProductsAdvantages() {
  const [openQuality, setOpenQuality] = useState(false)
  const [openAdditives, setOpenAdditives] = useState(false)
  const [openColors, setOpenColors] = useState(false)

  useGTranslate(openQuality)
  useGTranslate(openAdditives)
  useGTranslate(openColors)

  return (
    <section className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="relative overflow-hidden border-0 bg-[var(--bg-light)]/80 backdrop-blur shadow-xl">
          <CardContent className="relative p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-[var(--brand-primary)]" strokeWidth={3}/>
              <div className="font-semibold text-[var(--text-primary)]">Quality & Consistency</div>
            </div>
            <p className="text-sm text-[var(--text-secundary)]">
              Controlled mix designs and batch precision for repeatable results.
            </p>
            <Dialog open={openQuality} onOpenChange={setOpenQuality}>
              <DialogTrigger asChild>
                <Button variant="outline" className="mt-4 border-[var(--orange-light)] text-[var(--text-primary)] bg-transparent cursor-pointer hover:scale-105">
                  Learn more
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Why choose our mixes</DialogTitle>
                  <DialogDescription>Advantages without the fluff.</DialogDescription>
                </DialogHeader>
                <ul className="space-y-2 text-[var(--text-primary)] text-sm">
                  <li className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[var(--brand-redish)]" />
                    Strength options from 2,500 to 5,000 PSI
                  </li>
                  <li className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-[var(--brand-redish)]" />
                    Consistent set times and placement windows
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[var(--brand-redish)]" />
                    Tight QC for slump, air, and temperature
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[var(--brand-redish)]" />
                    Reliable dispatch and delivery coordination
                  </li>
                </ul>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 bg-[var(--bg-light)]/80 backdrop-blur shadow-xl">
          <CardContent className="relative p-6">
            <div className="flex items-center gap-3 mb-3">
              <Wrench className="w-5 h-5 text-[var(--brand-primary)]" strokeWidth={3} />
              <div className="font-semibold text-[var(--text-primary)]">Additives that adapt</div>
            </div>
            <p className="text-sm text-[var(--text-secundary)]">
              From set accelerators to waterproofing solutions for project needs.
            </p>
            <Dialog open={openAdditives} onOpenChange={setOpenAdditives}>
              <DialogTrigger asChild>
                <Button variant="outline" className="mt-4 border-[var(--orange-light)] text-[var(--text-primary)] bg-transparent cursor-pointer hover:scale-105">
                  Learn more
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Available additives</DialogTitle>
                  <DialogDescription>Selected options for better performance.</DialogDescription>
                </DialogHeader>
                <ul className="space-y-2 text-[var(--text-primary)] text-sm">
                  <li className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-[var(--brand-redishv2)]" />
                    Water reducers and plasticizers
                  </li>
                  <li className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-[var(--brand-redishv2)]" />
                    Set accelerators and retarders
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[var(--brand-redishv2)]" />
                    Fibers (micro) and crystalline waterproofing
                  </li>
                  <li className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-[var(--brand-redishv2)]" />
                    Color-compatible for uniform finishes
                  </li>
                </ul>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 bg-[var(--bg-light)]/80 backdrop-blur shadow-xl">
          <CardContent className="relative p-6">
            <div className="flex items-center gap-3 mb-3">
              <Palette className="w-5 h-5 text-[var(--brand-primary)]" strokeWidth={3} />
              <div className="font-semibold text-[var(--text-primary)]">Professional colors</div>
            </div>
            <p className="text-sm text-[var(--text-secundary)]">
              SikaColor and Davis Colors available for durable, vibrant finishes.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Dialog open={openColors} onOpenChange={setOpenColors}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-[var(--orange-light)] text-[var(--text-primary)] bg-transparent cursor-pointer hover:scale-105">
                    Learn more
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Color options</DialogTitle>
                    <DialogDescription>Reliable pigments, consistent results.</DialogDescription>
                  </DialogHeader>
                  <ul className="space-y-2 text-[var(--text-primary)] text-sm">
                    <li className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-[var(--brand-redishv3)]" />
                      SikaColor-120G powders for robust tones
                    </li>
                    <li className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-[var(--brand-redishv3)]" />
                      Davis Colors for vibrant and durable finishes
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[var(--brand-redishv3)]" />
                      Batch control for color uniformity across pours
                    </li>
                  </ul>
                </DialogContent>
              </Dialog>
              <Link href="/colors/sika">
                <Button variant="outline" className="border-[var(--orange-light)] text-[var(--text-primary)] bg-transparent cursor-pointer hover:scale-105">
                  Sika
                </Button>
              </Link>
              <Link href="/colors/davis">
                <Button variant="outline" className="border-[var(--orange-light)] text-[var(--text-primary)] bg-transparent cursor-pointer hover:scale-105">
                  Davis
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
