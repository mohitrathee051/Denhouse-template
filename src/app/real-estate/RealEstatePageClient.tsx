"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PropertyCard from "@/components/PropertyCard";
import CTA from "@/components/CTA";
import { properties, propertyCities, propertyTypes } from "@/data/properties";
import type { ListingPurpose } from "@/types";

export default function RealEstatePageClient() {
  const searchParams = useSearchParams();
  const [city, setCity] = useState(searchParams.get("city") ?? "");
  const [purpose, setPurpose] = useState<ListingPurpose | "">("");
  const [type, setType] = useState("");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (city && p.city !== city) return false;
      if (purpose && p.purpose !== purpose) return false;
      if (type && p.type !== type) return false;
      return true;
    });
  }, [city, purpose, type]);

  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-primary pt-20">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Denhouse Group real estate listings"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/50" />
        <Container className="relative z-10 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl font-heading text-4xl font-semibold text-white sm:text-5xl"
          >
            Property, priced honestly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-lg text-white/70"
          >
            {properties.length} listings to buy or rent across {propertyCities.length} cities —
            apartments, villas, plots, and commercial spaces.
          </motion.p>
        </Container>
      </section>

      <Section tone="offwhite" className="!py-8">
        <Container>
          <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-white p-4 shadow-card">
            <span className="flex items-center gap-2 text-sm font-medium text-primary/70">
              <SlidersHorizontal size={16} />
              Filter
            </span>
            <FilterSelect label="City" value={city} onChange={setCity} options={propertyCities} />
            <FilterSelect
              label="Purpose"
              value={purpose}
              onChange={(v) => setPurpose(v as ListingPurpose | "")}
              options={["Buy", "Rent"]}
            />
            <FilterSelect label="Type" value={type} onChange={setType} options={[...propertyTypes]} />
            {(city || purpose || type) && (
              <button
                onClick={() => {
                  setCity("");
                  setPurpose("");
                  setType("");
                }}
                className="ml-auto text-sm font-medium text-accent hover:underline"
              >
                Clear all
              </button>
            )}
          </div>
        </Container>
      </Section>

      <Section tone="white" className="!pt-0">
        <Container>
          <p className="mb-6 text-sm text-slate-500">
            Showing {filtered.length} of {properties.length} listings
          </p>
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((property, i) => (
                <PropertyCard key={property.id} property={property} index={i} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl bg-offwhite p-12 text-center text-slate-500">
              No properties match your filters. Try clearing a filter.
            </p>
          )}
        </Container>
      </Section>

      <CTA />
    </>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-primary focus:border-accent focus:outline-none"
    >
      <option value="">{label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
