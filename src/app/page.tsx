import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedPG from "@/components/FeaturedPG";
import FeaturedProperties from "@/components/FeaturedProperties";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import GalleryPreview from "@/components/GalleryPreview";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Premium PG & Real Estate in India",
  description:
    "Find verified PG accommodation or your next property to buy or rent, all managed by one trusted team at Denhouse Group.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedPG />
      <FeaturedProperties />
      <Stats />
      <Testimonials />
      <GalleryPreview />
      <CTA />
    </>
  );
}
