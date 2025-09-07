"use client"

import { useState, useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { toast } from "sonner"

export function useQuoteForm(setStatus?: React.Dispatch<React.SetStateAction<"idle" | "loading" | "success">>) {
  const [selectedProducts, setSelectedProducts] = useState<CartItem[]>([])
  const [deliveryDistance, setDeliveryDistance] = useState<number>(0)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      otherCity: "",
      projectType: "",
      deliveryDate: "",
      notes: "",
    },
  })

  const cities: CityDistance[] = useMemo(() => [
    { name: "Los Angeles", distanceMiles: 0 },
    { name: "Pasadena", distanceMiles: 11 },
    { name: "Santa Monica", distanceMiles: 15 },
    { name: "Long Beach", distanceMiles: 22 },
    { name: "Anaheim", distanceMiles: 26 },
    { name: "Irvine", distanceMiles: 40 },
    { name: "Riverside", distanceMiles: 55 },
    { name: "San Bernardino", distanceMiles: 60 },
    { name: "San Diego", distanceMiles: 120 },
    { name: "Bakersfield", distanceMiles: 112 },
    { name: "Other", distanceMiles: 0 },
  ], [])

  const selectedCity = form.watch("city")

  useEffect(() => {
    const selectedCityData = cities.find((cityData) => cityData.name === selectedCity)
    if (selectedCityData) {
      setDeliveryDistance(selectedCityData.distanceMiles)
    } else {
      setDeliveryDistance(0)
    }
  }, [selectedCity, cities])

  const handleSubmit = async (data: ContactFormData) => {

    const currentLang = document.documentElement.lang || "en"

    const messages = {
      en: {
        success: "Quote request submitted successfully! We will contact you soon.",
        error: "Failed to send quote request. Please try again.",
        noProducts: "Please select at least one product before submitting your quote request.",
        noCity: "Please select a delivery city before submitting your quote request.",
        OtherCity: "Please specify the delivery city"
      },
      es: {
        success: "¡Solicitud de cotización enviada con éxito! Nos pondremos en contacto contigo pronto.",
        error: "Error al enviar la solicitud de cotización. Inténtalo nuevamente.",
        noProducts: "Por favor selecciona al menos un producto antes de enviar tu solicitud de cotización.",
        noCity: "Por favor selecciona una ciudad de entrega antes de enviar tu solicitud de cotización.",
        OtherCity: "Por favor, especifique la ciudad de entrega."
      },
    }

    try {

      if (data.city === "Other" && !data.otherCity) {
        toast.error(messages[currentLang as "en" | "es"].OtherCity)
        return
      }

      if (selectedProducts.length === 0) {
        toast.error(messages[currentLang as "en" | "es"].noProducts)
        return
      }

      if (!data.city) {
        toast.error(messages[currentLang as "en" | "es"].noCity)
        return
      }

      const finalCity = data.city === "Other" ? data.otherCity : data.city

      setStatus?.("loading")

      const quoteData = {
        contactInformation: data,
        selectedProducts: selectedProducts.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          unit: item.unit,
          psi: item.psi,
          colorName: item.colorName,
          colorHex: item.colorHex,
        })),
        deliveryDetails: {
          city: finalCity,
          distanceFromLA: deliveryDistance,
        },
        lang: currentLang,
      }

      // console.log("Quote Request:", quoteData)

      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quoteData),
      })

      if (!res.ok) {
        throw new Error("Failed to send quote request")
      }

      toast.success(messages[currentLang as "en" | "es"].success)

      form.reset()
      setSelectedProducts([])

      setStatus?.("success")
    } catch (error) {
      console.error("Error submitting quote:", error)
      toast.error(messages[currentLang as "en" | "es"].error)
      setStatus?.("idle")
    }
  }

  const handleCityChange = () => {
  }

  return {
    form,
    selectedProducts,
    setSelectedProducts,
    deliveryCity: selectedCity,
    setDeliveryCity: handleCityChange,
    deliveryDistance,
    cities,
    handleSubmit,
  }
}