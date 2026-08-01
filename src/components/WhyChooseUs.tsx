"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <Section tone="white">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80"
            alt="Denhouse Group relationship manager assisting a client"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="Why Denhouse"
            title="Real estate and PG living, without the guesswork"
            description="We built Denhouse Group to fix what frustrated us most about renting and buying in India — vague listings, hidden charges, and slow support."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon =
                (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon] ?? Icons.Check;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-3.5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-semibold text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
