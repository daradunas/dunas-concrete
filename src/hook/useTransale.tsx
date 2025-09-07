"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    doGTranslate?: (langPair: string) => void
  }
}

export function useGTranslate(active: boolean) {
  useEffect(() => {
    if (active && typeof window !== "undefined" && window.doGTranslate) {
      setTimeout(() => {
        const currentLang = document.documentElement.lang || "en"
        window.doGTranslate?.(`${currentLang}|${currentLang}`)
      }, 100)
    }
  }, [active])
}