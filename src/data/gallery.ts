import type { GalleryImage } from "@/types";

export const galleryImages: GalleryImage[] = [
  {
    id: "g-001",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
    alt: "Shared common area in a Denhouse PG",
    category: "PG",
    width: 1000,
    height: 1250,
  },
  {
    id: "g-002",
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
    alt: "Furnished single room at a Denhouse PG",
    category: "PG",
    width: 1000,
    height: 750,
  },
  {
    id: "g-003",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    alt: "Modern apartment living room",
    category: "Real Estate",
    width: 1000,
    height: 1250,
  },
  {
    id: "g-004",
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80",
    alt: "Independent villa exterior",
    category: "Real Estate",
    width: 1000,
    height: 700,
  },
  {
    id: "g-005",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
    alt: "Denhouse team meeting",
    category: "Team",
    width: 1000,
    height: 667,
  },
  {
    id: "g-006",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
    alt: "Denhouse annual resident meetup",
    category: "Events",
    width: 1000,
    height: 1333,
  },
  {
    id: "g-007",
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
    alt: "Riverside apartment complex",
    category: "Real Estate",
    width: 1000,
    height: 750,
  },
  {
    id: "g-008",
    src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
    alt: "Denhouse PG dining area",
    category: "PG",
    width: 1000,
    height: 1250,
  },
  {
    id: "g-009",
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
    alt: "Denhouse office team collaboration",
    category: "Team",
    width: 1000,
    height: 667,
  },
];

export const galleryCategories: Array<GalleryImage["category"] | "All"> = [
  "All",
  "PG",
  "Real Estate",
  "Events",
  "Team",
];
