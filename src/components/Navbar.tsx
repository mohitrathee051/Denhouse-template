"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Home as HomeIcon, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useScroll } from "@/hooks/useScroll";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { cn } from "@/lib/helpers";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(30);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "bg-white shadow-card" : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white",
            )}
          >
            <HomeIcon size={18} />
          </span>
          <span
            className={cn(
              "font-heading text-lg font-semibold tracking-tight",
              scrolled || open ? "text-primary" : "text-white"
            )}
          >
            Denhouse Group
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  scrolled ? "text-primary/80 hover:text-primary" : "text-white/90 hover:text-white",
                  active && (scrolled ? "text-accent" : "text-white")
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-accent"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              scrolled ? "text-primary" : "text-white"
            )}
          >
            <Phone size={16} />
            {CONTACT.phone}
          </a>
          <Button href="/contact" size="sm">
            Enquire Now
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
            scrolled || open ? "text-primary" : "text-white"
          )}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 pb-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm font-medium text-primary/80 hover:bg-offwhite hover:text-primary",
                    pathname === link.href && "text-accent"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-2 w-full justify-center">
                Enquire Now
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
