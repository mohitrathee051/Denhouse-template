"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SearchBar from "@/components/SearchBar";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary pt-20">
      <Image
        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
        alt="Modern residential skyline representing Denhouse Group properties"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/20 to-transparent" />

      <Container className="relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge variant="white">Trusted by 3,200+ residents across India</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-6 max-w-2xl font-heading text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        >
          Two ways home. <span className="text-accent-light">One trusted name.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Whether you need a verified PG this month or your next home to buy, Denhouse Group
          brings premium accommodation and real estate under one transparent roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button href="/pg" size="lg" icon={<ArrowRight size={18} />}>
            Explore PG Homes
          </Button>
          <Button href="/real-estate" variant="outline" size="lg" icon={<PlayCircle size={18} />}>
            Browse Properties
          </Button>
        </motion.div>

        <div className="mt-12">
          <SearchBar />
        </div>
      </Container>
    </section>
  );
}
