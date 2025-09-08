"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Info } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ProductDialog } from "@/app/(home)/_components/products/product-dialog"
import Link from "next/link"
import { H2 } from "@/components/typography"

interface ProductDisplayProps {
  product: Product
}

export function ProductDisplay({ product }: ProductDisplayProps) {
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8"
    >
      <div className="relative flex justify-center">
        <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
          <Image
            src={product.image || "/placeholder.svg?height=500&width=500"}
            alt={product.name}
            width={450}
            height={345}
            className="w-full h-auto max-h-[72vh] object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center lg:justify-end w-full"
      >
        <Card className="bg-[var(--brand)]/70 backdrop-blur-md border-0 shadow-2xl 
                w-full max-w-3xl xl:translate-x-8">
          <CardContent className="p-6 sm:p-10">
            <div className="flex items-center gap-4 mb-4">
              {product.badges.map((badge, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-[var(--yellow-100)] text-[var(--amber-800)]"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            <H2 className="text-4xl font-bold text-[var(--text-primary)] mb-4 text-left">
              {product.name}
            </H2>

            <p className="text-[var(--text-secundary)] text-lg leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <div className="w-2 h-2 bg-[var(--yellow-400)] rounded-full"></div>
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-[var(--orange-light)] text-[var(--text-primary)] bg-transparent cursor-pointer hover:scale-105"
                  >
                    <Info className="w-4 h-4 mr-2 text-[var(--orange-light)]" />
                    Learn more
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] sm:max-h-[800px]">
                  <ProductDialog product={product} isOpen />
                </DialogContent>
              </Dialog>
              <Link href="/quote">
                <Button className="bg-gradient-to-r bg-[var(--yellow-500)] hover:bg-[var(--orange-light)] text-[var(--text-primary)] border-0 shadow-md cursor-pointer hover:scale-105">
                  Request Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}