import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().optional(),
  address: z.string().min(5, "Please enter a complete address"),
  city: z.string().min(1, "Please select a city"),
  otherCity: z.string().optional(),
  projectType: z.string().optional(),
  deliveryDate: z.string().min(1, "La fecha es obligatoria"),
  notes: z.string().optional(),
})
  .superRefine((data, ctx) => {
    if (data.city === "Other") {
      if (!data.otherCity || data.otherCity.trim().length < 4) {
        ctx.addIssue({
          path: ["otherCity"],
          code: "custom",
          message: "Please enter at least 4 characters for the city name",
        })
      }
      if (data.otherCity && data.otherCity.trim().length > 50) {
        ctx.addIssue({
          path: ["otherCity"],
          code: "custom",
          message: "City name must be less than 50 characters",
        })
      }
    }
  })

export const productSelectionSchema = z.object({
  quantity: z.number().min(0.5, "Minimum quantity is 0.5").max(10, "Maximum quantity is 10"),
  psi: z.number().min(2000).max(5000),
  colorName: z.string().optional(),
  colorHex: z.string().optional(),
})

export const quoteRequestSchema = z.object({
  contactInformation: contactFormSchema,
  selectedProducts: z
    .array(
      z.object({
        name: z.string(),
        quantity: z.number(),
        unit: z.string(),
        psi: z.number(),
        colorName: z.string().optional(),
        colorHex: z.string().optional(),
      }),
    )
    .min(1, "Please select at least one product"),
  deliveryDetails: z.object({
    city: z.string().min(1, "Please select a delivery city"),
    distanceFromLA: z.number(),
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type ProductSelection = z.infer<typeof productSelectionSchema>
export type QuoteRequest = z.infer<typeof quoteRequestSchema>