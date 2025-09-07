"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-[var(--text-primary)] hover:bg-[var(--brand-primary)] text-white p-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 cursor-pointer border border-white"
        aria-label="Volver al inicio"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    )
  );
}