"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const [defaultOpen, setDefaultOpen] = useState(false);
  const pathname = usePathname();

  const hideWhastapp = pathname.startsWith("/products");

  const url = `https://wa.me/18184382654?text=${encodeURIComponent(
    "Hello! I'm interested in your concrete services."
  )}`;

  useEffect(() => {
    setDefaultOpen(true);

    const timer = setTimeout(() => {
      setDefaultOpen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (hideWhastapp) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen={defaultOpen}>
          <TooltipTrigger asChild>
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-14 h-14 
                         bg-[var(--whatsapp-green)] 
                         hover:bg-[var(--whatsapp-green-hover)] 
                         text-[var(--text-white)] 
                         rounded-full shadow-lg 
                         focus:outline-none focus:ring-2 
                         focus:ring-[var(--whatsapp-green-ring)] 
                         cursor-pointer"
              style={{
                boxShadow: "0 0 18px rgba(37, 211, 102, 0.6)",
              }}
            >
              <FaWhatsapp className="w-7 h-7" />
            </motion.a>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            className="max-w-[220px] text-center text-sm leading-snug 
                       bg-[var(--background-blue)] 
                       text-[var(--text-white)] 
                       shadow-lg px-3 py-2 rounded-lg"
          >
            Do you want to contact us? <br /> 👉 Write us on WhatsApp
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}