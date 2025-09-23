"use client"

import Link from "next/link"
import { Phone, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const hours = [
  { days: "Monday - Thursday:", hours: "5:00 AM - 3:00 PM" },
  { days: "Friday - Saturday:", hours: "5:00 AM - 1:00 PM" },
  { days: "Sunday:", hours: "Closed", closed: true },
]

export default function BusinessHours() {
  return (
    <div className="p-8 lg:p-12 flex flex-col justify-center rounded-l-3xl lg:rounded-r-none rounded-r-3xl text-[var(--text-white)] bg-[var(--background-blue)]">
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-2xl shadow-lg bg-gradient-to-r from-[var(--yellow-400)] to-[var(--yellow-500)]">
            <Clock className="w-7 h-7 text-[var(--brand-dark-text)]" />
          </div>
          <h3 className="font-bold text-3xl">Business Hours</h3>
        </div>

        <div className="space-y-4">
          {hours.map((h, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span className="font-medium text-lg text-[var(--slate-200)]">{h.days}</span>
              <span
                className="font-bold text-lg"
                style={{ color: h.closed ? "var(--brand-redish)" : "var(--yellow-300)" }}
              >
                {h.hours}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-sm text-[var(--slate-200)] flex items-center space-x-3">
          <Phone className="w-4 h-4 text-[var(--yellow-300)]" />
          <span>
            If you wish to know information about your accounts, please contact{" "}<br></br>
            <span className="font-semibold text-[var(--text-white)]">Jesus Ramirez</span> at{" "}
            <span className="font-semibold text-[var(--text-white)]">+1 (818) 438-2654</span>
          </span>
        </div>


        <Link href="/quote" className="block">
          <Button className="w-full font-bold py-4 px-6 text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl flex justify-center items-center bg-[var(--yellow-500)] hover:bg-[var(--orange-light)] text-[var(--text-primary)] cursor-pointer">
            <Phone className="w-5 h-5 mr-3" />
            Request Immediate Quote
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </Link>
      </div>
    </div>
  )
}