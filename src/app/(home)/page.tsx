"use client"

import ConcreteSection from "@/app/(home)/_components/section/concrete-section";
import HeroSection from "@/app/(home)/_components/section/hero-section";
import ProductSectionPreview from "@/app/(home)/_components/section/product-section";
import AdditivesGridSection from "@/app/(home)/_components/section/additives-grid-section";
import ColorsCta from "@/app/(home)/_components/section/colors-cta-section";

export default function HomePage() {
  return (
    <div className="font-sans">
      <HeroSection />
      <ConcreteSection />
      <ProductSectionPreview />
      <AdditivesGridSection />
      <ColorsCta />
    </div>
  );
}
