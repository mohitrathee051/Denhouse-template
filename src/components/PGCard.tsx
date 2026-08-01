"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MapPin, Users } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { formatRent } from "@/lib/helpers";
import type { PGListing } from "@/types";

export default function PGCard({ pg, index = 0 }: { pg: PGListing; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
    >
      <Link href={`/pg/${pg.slug}`}>
        <Card className="group h-full">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={pg.image}
              alt={pg.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute left-3 top-3">
              <Badge variant="white">{pg.gender}</Badge>
            </div>
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-primary">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              {pg.rating}
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-heading text-base font-semibold text-primary line-clamp-1">
              {pg.name}
            </h3>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin size={14} />
              {pg.location}, {pg.city}
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
              <Users size={14} />
              {pg.roomType}
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="font-heading text-lg font-semibold text-primary">
                {formatRent(pg.rent)}
              </span>
              <span className="text-sm font-medium text-accent">View Details →</span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
