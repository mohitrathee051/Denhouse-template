"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Search, BedDouble, Building2 } from "lucide-react";
import { propertyCities } from "@/data/properties";
import { pgListings } from "@/data/pg";

const pgCities = Array.from(new Set(pgListings.map((p) => p.city)));

export default function SearchBar() {
  const router = useRouter();
  const [mode, setMode] = useState<"pg" | "real-estate">("pg");
  const [city, setCity] = useState("");

  const cities = mode === "pg" ? pgCities : propertyCities;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const query = city ? `?city=${encodeURIComponent(city)}` : "";
    router.push(`/${mode}${query}`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      className="w-full max-w-xl rounded-2xl bg-white/95 p-2 shadow-cardHover backdrop-blur"
    >
      <div className="flex gap-1 p-1.5">
        <ToggleTab
          active={mode === "pg"}
          onClick={() => {
            setMode("pg");
            setCity("");
          }}
          icon={<BedDouble size={16} />}
          label="Find a PG"
        />
        <ToggleTab
          active={mode === "real-estate"}
          onClick={() => {
            setMode("real-estate");
            setCity("");
          }}
          icon={<Building2 size={16} />}
          label="Buy / Rent Property"
        />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-2 sm:flex-row">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        >
          <option value="">Select a city</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
        >
          <Search size={16} />
          Search
        </button>
      </form>
    </motion.div>
  );
}

function ToggleTab({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
        active ? "text-white" : "text-primary/60 hover:text-primary"
      }`}
    >
      {active && (
        <motion.span
          layoutId="search-toggle-bg"
          className="absolute inset-0 rounded-xl bg-primary"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      <span className="relative flex items-center gap-2">
        {icon}
        {label}
      </span>
    </button>
  );
}
