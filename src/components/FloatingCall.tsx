"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function FloatingCall() {
  return (
    <motion.a
      href={`tel:${CONTACT.phoneRaw}`}
      aria-label="Call Denhouse Group"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.15, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent p-3.5 text-white shadow-cardHover"
    >
      <Phone size={22} />
    </motion.a>
  );
}
