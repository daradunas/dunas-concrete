"use client"

import { useEffect, useState } from "react"
import { useQuoteForm } from "@/app/(home)/quote/hooks/use-quote-form"
import { useProductCart } from "@/app/(home)/quote/hooks/use-product-cart"
import { DeliveryLocationSection } from "@/app/(home)/_components/quote/delivery-location-section"
import { ProductSelectionSection } from "@/app/(home)/_components/quote/product-selection-section"
import { OrderSummarySection } from "@/app/(home)/_components/quote/order-summary-section"
import { ContactFormSection } from "@/app/(home)/_components/quote/contact-form-section"
import LoadingScreen from "@/app/(home)/loading-screen"
import SuccessScreen from "@/app/(home)/quote/_components/success-screen"

export default function QuotePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const {
    form,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    selectedProducts: quoteSelectedProducts,
    setSelectedProducts: setQuoteSelectedProducts,
    deliveryCity,
    setDeliveryCity,
    deliveryDistance,
    cities,
    handleSubmit,
  } = useQuoteForm(setStatus)

  const { selectedProducts, addToCart, removeFromCart, updateQuantity, updateItemColor, generateQuantityOptions } =
    useProductCart()

  useEffect(() => {
    setQuoteSelectedProducts(selectedProducts)
  }, [selectedProducts, setQuoteSelectedProducts])

  useEffect(() => {
    if (status === "loading" || status === "success") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [status])

  const isFormValid = selectedProducts.length > 0 && Boolean(form.watch("city"))

  const scrollToContactForm = () => {
    const contactForm = document.querySelector("[data-contact-form]")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      {status === "loading" && <LoadingScreen />}
      {status === "success" && <SuccessScreen />}

      {status === "idle" && (
        <div className="min-h-screen bg-gradient-to-br pt-24">
          <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <DeliveryLocationSection
                  form={form}
                  deliveryDistance={deliveryDistance}
                  cities={cities}
                  onCityChange={setDeliveryCity}
                />

                <ProductSelectionSection
                  selectedProducts={selectedProducts}
                  onAddToCart={addToCart}
                  onUpdateQuantity={updateQuantity}
                  onRemoveFromCart={removeFromCart}
                  onUpdateColor={updateItemColor}
                  generateQuantityOptions={generateQuantityOptions}
                />

                <ContactFormSection form={form} onSubmit={handleSubmit} />
              </div>

              <div className="space-y-6">
                <OrderSummarySection
                  selectedProducts={selectedProducts}
                  deliveryCity={deliveryCity}
                  deliveryDistance={deliveryDistance}
                  onSubmit={scrollToContactForm}
                  isFormValid={isFormValid}
                  onRemoveFromCart={removeFromCart}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}