"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/lib/constants";

export default function FloatingWhatsapp() {
  return (
    <motion.a
      href={`https://wa.me/${CONTACT.whatsapp.replace("+", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-cardHover"
    >
      <FaWhatsapp size={24} />
    </motion.a>
  );
}
