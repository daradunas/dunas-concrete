"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { H2, H3 } from "@/components/typography"
import GoogleMap from "@/app/(home)/contact/_components/google-map"

const contacts = [
  {
    icon: Phone,
    title: "Phone",
    content: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
    subtitle: "Owner: Eduardo Rodríguez",
  },
  {
    icon: Mail,
    title: "Email",
    content: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
    subtitle: "",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "9048 Bradley Ave",
    subtitle: "Sun Valley, CA 91352",
  },
]

const hours = [
  { days: "Monday - Thursday:", hours: "5:00 AM - 3:00 PM" },
  { days: "Friday - Saturday:", hours: "5:00 AM - 1:00 PM" },
  { days: "Sunday:", hours: "Closed", closed: true },
]

export default function ContactPage() {
  return (
    <>
      <section id="contact" className="px-4 sm:px-8 md:px-12 lg:px-20 pt-20 relative">
        <div className="container mx-auto px-4 relative text-center mb-16 mt-16">
          <span className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-[var(--yellow-light)] text-[var(--text-primary)] shadow">
            {"📞 Contact Us"}
          </span>
          <H2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 max-w-4xl mx-auto">
            <span className="text-[var(--text-primary)]">Contact Us </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)]">
              Today
            </span>
          </H2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            {"We're ready to help you with your next construction project"}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-10">
            <div className="space-y-6 text-left">
              {contacts.map((c, i) => (
                <Card
                  key={i}
                  className="p-4 sm:p-6 bg-gradient-to-br from-[var(--brand)] to-[var(--brand)] backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-[var(--yellow-400)] to-[var(--yellow-500)] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 text-[var(--text-white)] flex-shrink-0">
                      <c.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <H3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--yellow-500)] mb-1 group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 text-lg sm:text-xl">
                        {c.title}
                      </H3>
                      <p className="text-[var(--text-secondary)] font-medium text-sm sm:text-base break-words">
                        {c.content}
                      </p>
                      {c.subtitle ? (
                        <p className="text-xs sm:text-sm text-[var(--text-muted)] break-words">{c.subtitle}</p>
                      ) : null}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 sm:p-8 backdrop-blur-sm border-0 shadow-xl relative overflow-hidden bg-[var(--background-blue)] text-left">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5" />
              <div className="relative">
                <div className="flex items-start space-x-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-[var(--yellow-400)] to-[var(--yellow-500)] rounded-xl shadow-lg text-[var(--text-white)] flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-[var(--text-white)] mb-4 text-lg sm:text-xl">Business Hours</h3>
                    <div className="space-y-3 text-slate-600">
                      {hours.map((h, i) => (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 hover:scale-105 transition-all duration-300 gap-2 sm:gap-0"
                        >
                          <span className="font-medium text-[var(--text-white)] text-sm sm:text-base">{h.days}</span>
                          <span
                            className={`font-semibold text-sm sm:text-base ${h.closed ? "text-red-600" : "text-slate-800"}`}
                          >
                            {h.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Link href="/quote">
                    <Button
                      className="w-full bg-gradient-to-r bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)] text-base sm:text-lg py-4 sm:py-6 shadow-xl shadow-orange-500/25 
                    border-0 hover:scale-105 transition-all duration-300 text-shadow-md text-[var(--text-primar)] cursor-pointer"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Request Immediate Quote
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <div>
        <GoogleMap />
      </div>
    </>
  )
}