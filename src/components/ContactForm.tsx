"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, XCircle, Send } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import type { ContactFormData } from "@/types";

type SubmitStatus = "idle" | "loading" | "success" | "error";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    setStatus("loading");
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="name"
          label="Full Name"
          placeholder="Your name"
          error={errors.name?.message}
          {...register("name", { required: "Name is required" })}
        />
        <Input
          id="phone"
          label="Phone Number"
          placeholder="+91 98765 43210"
          error={errors.phone?.message}
          {...register("phone", {
            required: "Phone number is required",
            minLength: { value: 10, message: "Enter a valid phone number" },
            maxLength: { value: 15, message: "Enter a valid phone number" },
          })}
        />
      </div>

      <Input
        id="email"
        type="email"
        label="Email Address"
        placeholder="you@example.com"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        })}
      />

      <Input
        id="subject"
        label="Subject"
        placeholder="What is this about?"
        error={errors.subject?.message}
        {...register("subject", { required: "Subject is required" })}
      />

      <Textarea
        id="message"
        label="Message"
        placeholder="Tell us a bit more..."
        error={errors.message?.message}
        {...register("message", {
          required: "Message is required",
          minLength: { value: 10, message: "Message should be at least 10 characters" },
        })}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent-dark disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-3 text-sm text-accent-dark"
          >
            <CheckCircle2 size={18} />
            Thanks — your message has been sent. We&apos;ll get back to you shortly.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600"
          >
            <XCircle size={18} />
            Something went wrong. Please try again or call us directly.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
