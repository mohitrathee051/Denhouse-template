"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Card from "@/components/ui/Card";
import type { ServiceItem } from "@/types";

export default function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Home;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link href={service.href}>
        <Card className="group h-full p-7">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
            <Icon size={22} />
          </div>
          <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
            Learn more
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </Card>
      </Link>
    </motion.div>
  );
}
