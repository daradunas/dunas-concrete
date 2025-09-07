"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Truck } from "lucide-react"
import Image from "next/image"
import ConcreteTruck from "@/assets/img/concrete-mixer-truck-hero.png"
import { H2 } from "@/components/typography"

function useCountAnimation(end: number, duration = 4000) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [shouldStart, setShouldStart] = useState(false)

  const startAnimation = () => {
    if (!hasStarted) {
      setShouldStart(true)
      setHasStarted(true)
    }
  }

  useEffect(() => {
    if (!shouldStart) return
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOutCubic * end))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, shouldStart])

  return { count, startAnimation }
}

export default function ConcreteSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { count: yearsCount, startAnimation: startYears } = useCountAnimation(9, 4000)
  const { count: projectsCount, startAnimation: startProjects } = useCountAnimation(12000, 3000)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startYears()
            startProjects()
          }
        })
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [startYears, startProjects])

  return (
    <section id="services" ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden" data-aos="fade-up">
      <Image
        src={ConcreteTruck}
        alt="Background concrete"
        fill
        className="object-cover object-center -z-10"
        priority
      />
      <div className="absolute inset-0 bg-[var(--background-blue)]/90 -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r bg-[var(--yellow-light)] text-[var(--text-primary)] border-0 shadow-lg">
                {"🏗️ Family Business from Sun Valley"}
              </Badge>

              <H2 className="text-4xl lg:text-7xl font-bold leading-tight text-left">
                <span className="text-[var(--text-white)]">Premium </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow-400)] via-[var(--orange-light)] to-[var(--yellow-500)]">
                  Concrete
                </span>
                <br />
                <span className="text-[var(--text-white)]">Solutions</span>
              </H2>

              <p className="text-xl text-[var(--text-white)] leading-relaxed max-w-2xl">
                Concrete specialists with premium quality from 2,500 to 5,000 PSI. Punctual delivery and personalized consulting for all your construction projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <Button className="bg-gradient-to-r bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)] text-lg px-8 py-6 shadow-xl 
                shadow-[var(--brand-primary)]/25 border-0 hover:scale-105 transition-transform duration-300 text-shadow-md text-[var(--text-primar)] cursor-pointer">
                  <Truck className="w-5 h-5 mr-2" />
                  {"Request Quote"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-gray-300 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50 hover:border-[var(--yellow-400)] 
                  shadow-lg hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-sm text-white hover:text-white cursor-pointer"
                >
                  {"View Products"}
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative" data-aos="zoom-in">
            <div className="relative z-10 p-8 border-white/10">
              <div className="grid grid-cols-1 gap-8">
                {[
                  { number: `${yearsCount}+`, label: "Years Experience", icon: "🏆" },
                  { number: `${projectsCount.toLocaleString()}+`, label: "Projects Completed", icon: "🚛" },
                  { number: "24/7", label: "Technical Support", icon: "📞" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 
                    shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={i * 200}
                  >
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--yellow-400)] to-[var(--yellow-400)] bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg text-[var(--text-white)] font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}