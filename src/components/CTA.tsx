"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <Container className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            Ready to find your next home?
          </h2>
          <p className="mt-3 text-white/70">
            Talk to a Denhouse relationship manager today — no obligation, no pressure.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button href="/contact" size="lg" icon={<ArrowRight size={18} />}>
            Get In Touch
          </Button>
          <Button href="/pg" variant="outline" size="lg">
            Explore Listings
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
