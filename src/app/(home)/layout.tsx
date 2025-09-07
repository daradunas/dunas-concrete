"use client";

import AOS from "aos"
import "aos/dist/aos.css"
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { unstable_ViewTransition as ViewTransition } from "react";
import { navItemsContent } from "@/config/navitagion"
import WhatsAppButton from "@//app/(home)/_components/layout/whastapp-button";
import { Footer } from "@/app/(home)/_components/layout/footer";
import Navbar from "@/app/(home)/_components/layout/navbar";
import ScrollToTopButton from "@/app/(home)/_components/layout/scroll-to-top-button";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  const pathname = usePathname()
  const hideFooterRoutes = ["/products"]

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Navbar navItems={navItemsContent} />
      <ViewTransition>
        <main>
          {children}
        </main>
        <WhatsAppButton />
        <ScrollToTopButton />
      </ViewTransition>
      {!hideFooterRoutes.includes(pathname) && <Footer />}
    </div>
  );
}