export { }

declare global {
  type CartItem = {
    id: string
    name: string
    description: string
    image: string
    unit: string
    quantity: number
    psi: string
    colorName?: string
    colorHex?: string
  }

  type CityDistance = {
    name: string
    distanceMiles: number
  }

  type ContactFormData = {
    name: string
    email: string
    phone: string
    company: string
    address: string
    city: string
    projectType: string
    deliveryDate: string
    notes: string
  }

  type Product = {
    id: string
    name: string
    description: string
    image: string | StaticImageData
    unit: string
    features: string[]
    badges: string[]
    psiOptions: string[]
  }

  type ColorItem = {
    name: string
    hex: string
    type: "SikaColor" | "Davis Colors"
  }

  type Additive = {
    name: string
    description: string
    icon: LucideIcon
    image: string
  }

  type QuoteData = {
    contactInformation: ContactFormData
    selectedProducts: Array<{
      name: string
      quantity: number
      unit: string
      psi: number
      colorName?: string
      colorHex?: string
    }>
    deliveryDetails: {
      city: string
      distanceFromLA: number
    }
  }

  // Email types
  type QuoteEmailBody = {
    contactInformation: {
      name: string
      email: string
      phone: string
      company?: string
      address?: string
      city: string
      projectType?: string
      deliveryDate?: string
      notes?: string
    }
    selectedProducts: CartItem[]
    deliveryDetails: {
      city: string
      distanceFromLA: number
    }
    lang?: string
  }
}