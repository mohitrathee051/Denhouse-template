import type { Metadata } from "next";
import { Suspense } from "react";
import PGPageClient from "./PGPageClient";

export const metadata: Metadata = {
  title: "Premium PG Accommodation",
  description:
    "Browse verified PG accommodation across India — fully furnished rooms with meals, housekeeping, and Wi-Fi included.",
  alternates: { canonical: "/pg" },
};

export default function PGPage() {
  return (
    <Suspense fallback={null}>
      <PGPageClient />
    </Suspense>
  );
}
