import type { Property } from "@/types";
import { formatPrice } from "@/lib/helpers";

const raw: Omit<Property, "priceLabel">[] = [
  {
    id: "prop-001",
    title: "3BHK Skyline Apartment",
    location: "DLF Phase 5",
    city: "Gurugram",
    price: 18500000,
    purpose: "Buy",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 1850,
    image:
      "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    slug: "3bhk-skyline-apartment-dlf-phase-5",
  },
  {
    id: "prop-002",
    title: "Independent Villa with Garden",
    location: "Whitefield",
    city: "Bengaluru",
    price: 32000000,
    purpose: "Buy",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3200,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    slug: "independent-villa-whitefield",
  },
  {
    id: "prop-003",
    title: "2BHK Riverside Residency",
    location: "Baner",
    city: "Pune",
    price: 45000,
    purpose: "Rent",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    areaSqft: 1100,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    slug: "2bhk-riverside-residency-baner",
  },
  {
    id: "prop-004",
    title: "Premium Office Floor",
    location: "BKC",
    city: "Mumbai",
    price: 250000,
    purpose: "Rent",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 2,
    areaSqft: 4500,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    slug: "premium-office-floor-bkc",
  },
  {
    id: "prop-005",
    title: "Residential Plot - Corner Facing",
    location: "Shamshabad",
    city: "Hyderabad",
    price: 8500000,
    purpose: "Buy",
    type: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    areaSqft: 2400,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    slug: "residential-plot-shamshabad",
  },
  {
    id: "prop-006",
    title: "1BHK Compact Home",
    location: "Kothrud",
    city: "Pune",
    price: 22000,
    purpose: "Rent",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    areaSqft: 620,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    slug: "1bhk-compact-home-kothrud",
  },
  {
    id: "prop-007",
    title: "Retail Showroom Space",
    location: "MG Road",
    city: "Bengaluru",
    price: 180000,
    purpose: "Rent",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 1,
    areaSqft: 1600,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    slug: "retail-showroom-mg-road",
  },
  {
    id: "prop-008",
    title: "4BHK Penthouse with Terrace",
    location: "Golf Course Road",
    city: "Gurugram",
    price: 42000000,
    purpose: "Buy",
    type: "Apartment",
    bedrooms: 4,
    bathrooms: 5,
    areaSqft: 4100,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    slug: "4bhk-penthouse-golf-course-road",
  },
];

export const properties: Property[] = raw.map((p) => ({
  ...p,
  priceLabel:
    p.purpose === "Rent" ? `₹${p.price.toLocaleString("en-IN")}/mo` : formatPrice(p.price),
}));

export const propertyCities = Array.from(new Set(properties.map((p) => p.city)));
export const propertyTypes: Property["type"][] = ["Apartment", "Villa", "Plot", "Commercial"];
