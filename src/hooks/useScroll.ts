"use client";

import { useEffect, useState } from "react";

/**
 * Tracks vertical scroll position and returns whether the page
 * has been scrolled past a given threshold. Used to toggle
 * the sticky navbar background and the scroll-to-top button.
 */
export function useScroll(threshold: number = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
