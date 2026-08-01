"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import * as Icons from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/SectionHeading";
import PGCard from "@/components/PGCard";
import { pgListings, pgAmenitiesIcons, pgFaqs } from "@/data/pg";
import { cn } from "@/lib/helpers";

const cities = Array.from(new Set(pgListings.map((p) => p.city)));
const genders = ["Male", "Female", "Co-living"] as const;
const roomTypes = ["Single Sharing", "Double Sharing", "Triple Sharing"] as const;

export default function PGPageClient() {
  const searchParams = useSearchParams();
  const [city, setCity] = useState(searchParams.get("city") ?? "");
  const [gender, setGender] = useState("");
  const [roomType, setRoomType] = useState("");

  const filtered = useMemo(() => {
    return pgListings.filter((pg) => {
      if (city && pg.city !== city) return false;
      if (gender && pg.gender !== gender) return false;
      if (roomType && pg.roomType !== roomType) return false;
      return true;
    });
  }, [city, gender, roomType]);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-primary pt-20">
        <Image
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2000&q=80"
          alt="Denhouse PG common area"
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
            PG Homes, minus the guesswork
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-lg text-white/70"
          >
            {pgListings.length} verified PG accommodations across {cities.length} cities — fully
            furnished, meals included, zero surprises.
          </motion.p>
        </Container>
      </section>

      {/* Filters */}
      <Section tone="offwhite" className="!py-8">
        <Container>
          <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-white p-4 shadow-card">
            <span className="flex items-center gap-2 text-sm font-medium text-primary/70">
              <SlidersHorizontal size={16} />
              Filter
            </span>
            <FilterSelect label="City" value={city} onChange={setCity} options={cities} />
            <FilterSelect label="Gender" value={gender} onChange={setGender} options={[...genders]} />
            <FilterSelect
              label="Room Type"
              value={roomType}
              onChange={setRoomType}
              options={[...roomTypes]}
            />
            {(city || gender || roomType) && (
              <button
                onClick={() => {
                  setCity("");
                  setGender("");
                  setRoomType("");
                }}
                className="ml-auto text-sm font-medium text-accent hover:underline"
              >
                Clear all
              </button>
            )}
          </div>
        </Container>
      </Section>

      {/* Grid */}
      <Section tone="white" className="!pt-0">
        <Container>
          <p className="mb-6 text-sm text-slate-500">
            Showing {filtered.length} of {pgListings.length} listings
          </p>
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((pg, i) => (
                <PGCard key={pg.id} pg={pg} index={i} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl bg-offwhite p-12 text-center text-slate-500">
              No PG listings match your filters. Try clearing a filter.
            </p>
          )}
        </Container>
      </Section>

      {/* Amenities */}
      <Section tone="offwhite">
        <Container>
          <SectionHeading
            eyebrow="Amenities"
            title="What comes with every Denhouse PG"
            align="center"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {Object.entries(pgAmenitiesIcons).map(([label, iconName]) => {
              const Icon =
                (Icons as unknown as Record<string, Icons.LucideIcon>)[iconName] ?? Icons.Check;
              return (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-card"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-primary">{label}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" />
          <div className="mt-10 space-y-3">
            {pgFaqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Container>
      </Section>
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-medium text-primary">{question}</span>
        <ChevronDown
          size={18}
          className={cn("shrink-0 text-slate-400 transition-transform", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
