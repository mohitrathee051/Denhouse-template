import type { PGListing } from "@/types";

export const pgListings: PGListing[] = [
  {
    id: "pg-001",
    name: "Denhouse Residency - Sector 44",
    location: "Sector 44",
    city: "Gurugram",
    gender: "Co-living",
    roomType: "Single Sharing",
    rent: 14500,
    amenities: ["WiFi", "AC", "Meals Included", "Laundry", "Housekeeping", "Power Backup"],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    featured: true,
    slug: "denhouse-residency-sector-44",
  },
  {
    id: "pg-002",
    name: "Denhouse Nest - Koramangala",
    location: "Koramangala",
    city: "Bengaluru",
    gender: "Female",
    roomType: "Double Sharing",
    rent: 11500,
    amenities: ["WiFi", "AC", "Meals Included", "CCTV", "Housekeeping"],
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    featured: true,
    slug: "denhouse-nest-koramangala",
  },
  {
    id: "pg-003",
    name: "Denhouse Heights - Andheri East",
    location: "Andheri East",
    city: "Mumbai",
    gender: "Male",
    roomType: "Triple Sharing",
    rent: 9800,
    amenities: ["WiFi", "Meals Included", "Laundry", "Power Backup", "Gym"],
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    rating: 4.4,
    featured: true,
    slug: "denhouse-heights-andheri-east",
  },
  {
    id: "pg-004",
    name: "Denhouse Meadows - Hinjewadi",
    location: "Hinjewadi Phase 2",
    city: "Pune",
    gender: "Co-living",
    roomType: "Single Sharing",
    rent: 13200,
    amenities: ["WiFi", "AC", "Meals Included", "Housekeeping", "Parking"],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    featured: true,
    slug: "denhouse-meadows-hinjewadi",
  },
  {
    id: "pg-005",
    name: "Denhouse Prime - HSR Layout",
    location: "HSR Layout",
    city: "Bengaluru",
    gender: "Male",
    roomType: "Double Sharing",
    rent: 12800,
    amenities: ["WiFi", "AC", "Meals Included", "CCTV", "Laundry"],
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    rating: 4.5,
    featured: false,
    slug: "denhouse-prime-hsr-layout",
  },
  {
    id: "pg-006",
    name: "Denhouse Willows - Gachibowli",
    location: "Gachibowli",
    city: "Hyderabad",
    gender: "Female",
    roomType: "Single Sharing",
    rent: 13900,
    amenities: ["WiFi", "AC", "Meals Included", "Housekeeping", "Gym"],
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    featured: false,
    slug: "denhouse-willows-gachibowli",
  },
];

export const pgAmenitiesIcons: Record<string, string> = {
  WiFi: "Wifi",
  AC: "AirVent",
  "Meals Included": "UtensilsCrossed",
  Laundry: "WashingMachine",
  Housekeeping: "Sparkles",
  "Power Backup": "BatteryCharging",
  CCTV: "Camera",
  Gym: "Dumbbell",
  Parking: "ParkingCircle",
};

export const pgFaqs = [
  {
    question: "What is included in the monthly rent?",
    answer:
      "Rent covers the room, WiFi, housekeeping, and three meals a day at most Denhouse PG locations. AC and laundry availability vary by property and are listed on each listing.",
  },
  {
    question: "Is there a security deposit?",
    answer:
      "Yes, a refundable deposit equal to one month's rent is collected at move-in and returned within 7 working days of checkout, subject to a standard damage inspection.",
  },
  {
    question: "Can I schedule a visit before booking?",
    answer:
      "Absolutely. You can book a free visit slot from any PG listing page or call our team directly to arrange a walkthrough at your convenience.",
  },
  {
    question: "What is the minimum stay duration?",
    answer:
      "Most Denhouse PGs require a minimum 3-month stay. Shorter stays may be available on select properties — ask your relationship manager for details.",
  },
];
