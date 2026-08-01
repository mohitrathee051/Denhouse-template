"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryImages, galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/helpers";
import type { GalleryImage } from "@/types";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof galleryCategories)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered: GalleryImage[] =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === cat
                ? "bg-primary text-white"
                : "bg-offwhite text-primary/70 hover:bg-slate-200"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((img, i) => (
          <motion.button
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
            onClick={() => setLightboxIndex(i)}
            className="group relative block w-full overflow-hidden rounded-2xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/60 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-sm font-medium text-white">{img.category}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={filtered.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </div>
  );
}
