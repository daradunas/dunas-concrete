"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CheckCircle, Layers, Palette, Droplets, Timer, Wrench, Truck, ArrowRight } from "lucide-react"
import { useGTranslate } from "@/hook/useTransale"

interface ProductDialogProps {
  product: Product
  isOpen?: boolean
}

export function ProductDialog({ product, isOpen }: ProductDialogProps) {
  useGTranslate(!!isOpen)

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-[var(--text-primary)]">{product.name}</DialogTitle>
        <DialogDescription className="text-[var(--text-secundary)]">
          A concise overview with practical guidance for better decisions.
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-4">
        <div className="rounded-xl border bg-[var(--bg-light)] p-4">
          <div className="text-sm font-semibold text-[var(--text-primary)] mb-2">Recommended uses</div>
          <ul className="text-sm text-[var(--text-secundary)] grid gap-2">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--brand-primary)]" strokeWidth={2} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-[var(--bg-light)] p-4">
            <div className="text-sm font-semibold text-[var(--text-primary)] mb-2">Quick specs</div>
            <ul className="text-sm text-[var(--text-primary)] grid gap-2">
              <li className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[var(--brand-redishv2)]" strokeWidth={2} />
                PSI: {product.badges[0]}
              </li>
              <li className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-[var(--brand-redish)]" strokeWidth={2} />
                Colors: SikaColor & Davis Colors
              </li>
              <li className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-[var(--brand-redishv3)]" strokeWidth={2} />
                Additives: accelerators, retarders, fibers, waterproofing
              </li>
            </ul>
          </div>

          <div className="rounded-xl border bg-[var(--bg-light)] p-4">
            <div className="text-sm font-semibold text-[var(--text-primary)] mb-2">Pro tips</div>
            <ul className="text-sm text-[var(--text-secundary)] grid gap-2">
              <li className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-[var(--brand-redish)]" strokeWidth={2} />
                Schedule pours to match setting windows
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[var(--brand-redishv2)]" strokeWidth={2} />
                Consider reducers for tight forms and finishes
              </li>
              <li className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-[var(--brand-redishv3)]" strokeWidth={2} />
                Coordinate site access and hose lengths (if required)
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/quote">
            <Button className="bg-gradient-to-r bg-[var(--yellow-500)] hover:bg-[var(--orange-light)] text-[var(--text-primary)] border-0 shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
              Request Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="/colors/sika">
            <Button variant="outline" className="border-[var(--orange-light)] text-[var(--text-primary)] bg-transparent cursor-pointer hover:scale-105">
              See colors
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
