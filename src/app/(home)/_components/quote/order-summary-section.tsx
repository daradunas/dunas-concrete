"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, CheckCircle, Truck, Phone, Mail, ArrowDown } from "lucide-react"

interface OrderSummarySectionProps {
  selectedProducts: CartItem[]
  deliveryCity: string
  deliveryDistance: number
  onSubmit: () => void
  isFormValid: boolean
  onRemoveFromCart: (productId: string, psi: string) => void
}

export function OrderSummarySection({
  selectedProducts,
  deliveryCity,
  onSubmit,
  isFormValid,
  onRemoveFromCart,
}: OrderSummarySectionProps) {
  const scrollToContactForm = () => {
    const contactForm = document.querySelector("[data-contact-form]")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleReviewAndSubmit = () => {
    scrollToContactForm()
    setTimeout(() => {
      onSubmit()
    }, 500)
  }

  const telf = process.env.NEXT_PUBLIC_CONTACT_PHONE || ""
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || ""

  return (
    <Card className="bg-gradient-to-br from-[var(--bg-light)] via-[var(--bg-light)]/80 to-[var(--bg-light)]/80 backdrop-blur-sm border-0 shadow-xl sticky top-24">
      <CardHeader>
        <CardTitle className="text-xl text-[var(--text-primary)] flex items-center">
          <Calculator className="w-5 h-5 mr-2 text-[var(--orange-light)]" strokeWidth={3}/>
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {selectedProducts.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[var(--text-white)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-[var(--text-muted)]" />
            </div>
            <p className="text-[var(--text-muted)]">No products selected</p>
            <p className="text-sm text-[var(--text-muted)]">Choose products to add to your request</p>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {selectedProducts.map((item, index) => (
                <div
                  key={`${item.id}-${item.psi}-${index}`}
                  className="flex items-start justify-between p-3 bg-[var(--bg-light)]/60 backdrop-blur-sm rounded-lg border border-[var(--bg-light)]/20"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-[var(--text-primary)] text-sm">{item.name}</h4>
                    <p className="text-xs text-[var(--text-secundary)]">
                      {item.quantity} {item.unit}s × {item.psi} PSI
                    </p>
                    {item.colorName && item.colorHex && (
                      <div className="mt-1 flex items-center gap-2">
                        <span
                          className="inline-flex h-3 w-3 rounded-full border"
                          style={{ backgroundColor: item.colorHex }}
                        />
                        <span className="text-xs text-text-[var(--text-secundary)]">{item.colorName}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right" translate="no">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveFromCart(item.id, item.psi)}
                      className="text-[var(--orange-light)] h-6 w-6 p-0 cursor-p"
                    >
                      X
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-800">Your request includes:</p>
                  <ul className="text-xs text-blue-700 mt-1 space-y-1">
                    <li>• Selected products and quantities</li>
                    <li>• Preferred PSI strength</li>
                    <li>• Optional concrete colors</li>
                    <li>• Delivery location details</li>
                    <li>• Your contact information</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        <Button
          onClick={handleReviewAndSubmit}
          disabled={!isFormValid || selectedProducts.length === 0 || !deliveryCity}
          className="w-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)] text-[var(--text-primary)] border-0 shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowDown className="w-4 h-4 mr-2" />
          Review & Submit
        </Button>

        <div className="text-center">
          <p className="text-xs text-slate-500 mb-2">Need help? Contact us directly:</p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <a href={`tel:${telf}`} className="flex items-center text-blue-600 hover:text-blue-800">
              <Phone className="w-4 h-4 mr-1" />
              {telf}
            </a>
            <a href={`mailto:${email}`} className="flex items-center text-blue-600 hover:text-blue-800">
              <Mail className="w-4 h-4 mr-1" />
              {email}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
