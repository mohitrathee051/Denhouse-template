"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, BedDouble, Bath, Ruler } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Property } from "@/types";

export default function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
    >
      <Link href={`/real-estate/${property.slug}`}>
        <Card className="group h-full">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute left-3 top-3 flex gap-2">
              <Badge variant="white">{property.purpose}</Badge>
              <Badge variant="accent">{property.type}</Badge>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-heading text-base font-semibold text-primary line-clamp-1">
              {property.title}
            </h3>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin size={14} />
              {property.location}, {property.city}
            </p>
            <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
              {property.bedrooms > 0 && (
                <span className="flex items-center gap-1.5">
                  <BedDouble size={14} />
                  {property.bedrooms} Bed
                </span>
              )}
              {property.bathrooms > 0 && (
                <span className="flex items-center gap-1.5">
                  <Bath size={14} />
                  {property.bathrooms} Bath
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Ruler size={14} />
                {property.areaSqft} sqft
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="font-heading text-lg font-semibold text-primary">
                {property.priceLabel}
              </span>
              <span className="text-sm font-medium text-accent">View Details →</span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
