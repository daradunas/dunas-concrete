"use client"

import { CheckCircle, Contact, Handshake, Users } from "lucide-react"
import WhoWeAreImage from "@/app/(home)/about/_components/who-we-are-image"
import { H3 } from "@/components/typography"

export default function WhoAreWeSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start" data-aos="fade-up">
            <div className="relative order-2 lg:order-1">
              <WhoWeAreImage
                src="/about/construction.png"
                alt="Construction professionals reviewing plans"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
              />
            </div>

            <div className="space-y-8 lg:space-y-12 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)] rounded-lg flex-shrink-0">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-white)]" />
                  </div>
                  <H3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--text-primary)]">
                    Commitment to Quality
                  </H3>
                </div>
                <p className="text-[var(--text-secunday)] leading-relaxed text-sm sm:text-base">
                  At Dunas Concrete, we take pride in providing only the highest quality cement products. With years of
                  experience and expertise in the industry, we ensure that every batch of cement meets the strictest
                  standards of excellence. Whether you&apos;re working on a small DIY project or a large-scale
                  construction endeavor, you can trust Dunas Concrete to deliver the superior quality cement you need.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)] rounded-lg flex-shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-white)]" />
                  </div>
                  <H3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--text-primary)]">
                    Exceptional Service
                  </H3>
                </div>
                <p className="text-[var(--text-secunday)] leading-relaxed text-sm sm:text-base">
                  Customer satisfaction is at the heart of everything we do. From assisting you in selecting the right
                  cement for your project to ensuring timely delivery, our team is committed to providing you with a
                  seamless and hassle-free experience. We understand the importance of reliability and efficiency, and
                  we go above and beyond to exceed your expectations every step of the way.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mt-12 lg:mt-16" data-aos="fade-up">
            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)] rounded-lg flex-shrink-0">
                    <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-white)]" />
                  </div>
                  <H3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--text-primary)]">Our Promise</H3>
                </div>
                <p className="text-[var(--text-secunday)] leading-relaxed text-sm sm:text-base">
                  When you choose Dunas Concrete, you&apos;re not just getting top-notch cement – you&apos;re partnering
                  with a company that genuinely cares about your success. We believe in building long-lasting
                  relationships with our customers, based on trust, integrity, and mutual respect. With Dunas Concrete,
                  you can have confidence knowing that you&apos;re getting the best quality cement and service
                  available.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)] rounded-lg flex-shrink-0">
                    <Contact className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-white)]" />
                  </div>
                  <H3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--text-primary)]">Contact Us</H3>
                </div>
                <p className="text-[var(--text-secunday)] leading-relaxed text-sm sm:text-base">
                  Experience the Dunas Concrete difference for yourself. Get in touch with us today to learn more about
                  our products and services, or to place an order. We look forward to serving you!
                </p>
              </div>
            </div>

            <div className="relative order-2 lg:order-1">
              <WhoWeAreImage
                src="/about/constructionv2.png"
                alt="Dunas Concrete team working together"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}