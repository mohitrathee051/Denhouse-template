export type PropertyType = "Apartment" | "Villa" | "Plot" | "Commercial";
export type ListingPurpose = "Buy" | "Rent";

export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  priceLabel: string;
  purpose: ListingPurpose;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  areaSqft: number;
  image: string;
  featured: boolean;
  slug: string;
}

export type PGType = "Single Sharing" | "Double Sharing" | "Triple Sharing";
export type PGGender = "Male" | "Female" | "Co-living";

export interface PGListing {
  id: string;
  name: string;
  location: string;
  city: string;
  gender: PGGender;
  roomType: PGType;
  rent: number;
  amenities: string[];
  image: string;
  rating: number;
  featured: boolean;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "PG" | "Real Estate" | "Events" | "Team";
  width: number;
  height: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
