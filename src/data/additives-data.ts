import { Clock, Zap, Link, Snowflake, Droplets, Shield } from "lucide-react"

export const additives: Additive[] = [
  {
    name: "Retardant",
    description: "Controls setting time for extended workability",
    icon: Clock,
    image: "/additatives/retardant-sika.png",
  },
  {
    name: "SikaSet®",
    description: "Accelerates initial hardening process",
    icon: Zap,
    image: "/additatives/sikaset.png",
  },
  {
    name: "Micro Fiber",
    description: "Reinforces and improves overall resistance",
    icon: Link,
    image: "/additatives/micro-fiber-sika.png",
  },
  {
    name: "Sika® Air",
    description: "Air-entrained for cold and salt resistance",
    icon: Snowflake,
    image: "/additatives/sika-air.png",
  },
  {
    name: "Waterproof",
    description: "Crystalline waterproofing seals internal pores",
    icon: Droplets,
    image: "/additatives/waterproof.png",
  },
  {
    name: "Sikagard® FlexCoat",
    description: "Cementitious-polymeric, waterproof and breathable coating",
    icon: Shield,
    image: "/additatives/sikagard-flexcoat.png",
  },
]
