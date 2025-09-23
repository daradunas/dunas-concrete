"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { H3 } from "@/components/typography"

interface TeamCardProps {
  name: string
  role: string
  email: string
  tel: string
  image: string
  onHoverChange?: (isHovering: boolean) => void
}

export default function TeamCard({ name, role, email, tel, image, onHoverChange }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex-shrink-0 mx-4"
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <div className="relative w-96 max-xl:w-80">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 z-30">
          <div className="rounded-full shadow-xl border-4" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
            <div
              className="w-40 h-40 rounded-full overflow-hidden"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <Card
          className="pt-24 pb-8 px-6 min-h-64 flex flex-col justify-center rounded-2xl text-center group transition-all duration-500"
          style={{
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "linear-gradient(to bottom right, rgba(30,41,59,0.9), rgba(15,23,42,0.9))",
          }}
        >
          <H3 className="font-bold text-2xl mb-1 transition-colors duration-300 group-hover:text-[var(--brand-primary)] text-[var(--text-white)]">
            {name}
          </H3>

          <p className="text-lg font-medium mb-4 uppercase tracking-wide transition-colors duration-300 text-[var(--brand-primary-light)] group-hover:text-[var(--text-white)]">
            {role}
          </p>

          <div className="flex flex-col items-center gap-3 mt-4">
            <Link
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-[var(--text-white)] hover:text-[var(--brand-primary)] transition-colors"
              title={email}
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">{email}</span>
            </Link>

            {tel && (
              <Link
                href={`tel:${tel}`}
                className="flex items-center gap-2 text-[var(--text-white)] hover:text-[var(--brand-primary)] transition-colors"
                title={tel}
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">{tel}</span>
              </Link>
            )}
          </div>
        </Card>
      </div>
    </motion.div>
  )
}