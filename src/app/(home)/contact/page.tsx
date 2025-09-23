"use client"

import { Card } from "@/components/ui/card"
import ContactHeader from "@/app/(home)/contact/_components/contact-header"
import BusinessHours from "@/app/(home)/contact/_components/business-hours"
import ContactMap from "@/app/(home)/contact/_components/contact-map"
import TeamGrid from "@/app/(home)/contact/_components/team-grid"

export default function ContactPage() {
  return (
    <>
      <ContactHeader />

      <section className="relative text-center overflow-x-hidden py-16" data-aos="fade-up">
        <TeamGrid />
      </section>

      <section className="pb-24 relative px-4 sm:px-8 md:px-12 lg:px-20" data-aos="fade-up">
        <div className="container mx-auto">
          <Card className="w-full backdrop-blur-sm border border-[var(--slate-200)]/50 shadow-xl bg-[var(--brand)]/80 rounded-3xl overflow-hidden p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              <BusinessHours />
              <ContactMap />
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}