import type { Metadata } from "next";
import { Suspense } from "react";
import RealEstatePageClient from "./RealEstatePageClient";

export const metadata: Metadata = {
  title: "Buy & Rent Properties",
  description:
    "Search apartments, villas, plots, and commercial spaces to buy or rent across India with Denhouse Group.",
  alternates: { canonical: "/real-estate" },
};

export default function RealEstatePage() {
  return (
    <Suspense fallback={null}>
      <RealEstatePageClient />
    </Suspense>
  );
}
