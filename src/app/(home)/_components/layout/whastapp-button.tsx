"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WhatsAppButton() {
  const [defaultOpen, setDefaultOpen] = useState(false);

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

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen={defaultOpen}>
          <TooltipTrigger asChild>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 
                         bg-[var(--whatsapp-green)] 
                         hover:bg-[var(--whatsapp-green-hover)] 
                         text-[var(--text-white)] 
                         rounded-full shadow-lg 
                         transition-all duration-300 hover:scale-110 
                         focus:outline-none focus:ring-2 
                         focus:ring-[var(--whatsapp-green-ring)] 
                         cursor-pointer"
              aria-label="Contact via WhatsApp"
            >
              <FaWhatsapp className="w-7 h-7" />
            </a>
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