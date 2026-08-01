import type { NavLink, StatItem, ServiceItem } from "@/types";

export const SITE_NAME = "Denhouse Group";
export const SITE_URL = "https://www.denhousegroup.com";
export const SITE_DESCRIPTION =
  "Denhouse Group offers premium PG accommodations and trusted real estate services across India. Find your next home or investment with confidence.";

export const CONTACT = {
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "+919876543210",
  email: "hello@denhousegroup.com",
  address: "4th Floor, Denhouse Towers, Sector 44, Gurugram, Haryana 122003",
  hours: "Mon - Sat: 9:00 AM - 7:00 PM",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5!2d77.0688!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjIiTiA3N8KwMDQnMDcuNyJF!5e0!3m2!1sen!2sin!4v1234567890",
};

export const SOCIALS = {
  instagram: "https://instagram.com/denhousegroup",
  facebook: "https://facebook.com/denhousegroup",
  linkedin: "https://linkedin.com/company/denhousegroup",
  twitter: "https://twitter.com/denhousegroup",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "PG", href: "/pg" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/about#team" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "PG Accommodation", href: "/pg" },
    { label: "Buy Property", href: "/real-estate" },
    { label: "Rent Property", href: "/real-estate" },
    { label: "Sell With Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export const STATS: StatItem[] = [
  { label: "Happy Residents", value: 3200, suffix: "+" },
  { label: "Properties Sold", value: 850, suffix: "+" },
  { label: "PG Locations", value: 45, suffix: "+" },
  { label: "Cities Served", value: 12, suffix: "" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Premium PG Accommodation",
    description:
      "Fully furnished, verified paying-guest homes with housekeeping, meals, and Wi-Fi included — built for working professionals and students.",
    icon: "BedDouble",
    href: "/pg",
  },
  {
    title: "Residential Real Estate",
    description:
      "Buy or rent apartments and villas across prime neighborhoods with transparent pricing and zero brokerage games.",
    icon: "Home",
    href: "/real-estate",
  },
  {
    title: "Commercial Spaces",
    description:
      "Office floors, retail units, and co-working spaces matched to your business needs and budget.",
    icon: "Building2",
    href: "/real-estate",
  },
  {
    title: "Property Management",
    description:
      "End-to-end management for owners — tenant screening, maintenance, rent collection, and legal support.",
    icon: "ClipboardCheck",
    href: "/contact",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Verified Listings",
    description: "Every property and PG is physically inspected before it goes live.",
    icon: "ShieldCheck",
  },
  {
    title: "Zero Hidden Charges",
    description: "Transparent pricing with no surprise brokerage or maintenance fees.",
    icon: "ReceiptText",
  },
  {
    title: "12+ Cities",
    description: "A growing footprint across India's major residential and business hubs.",
    icon: "MapPinned",
  },
  {
    title: "24/7 Support",
    description: "Dedicated relationship managers available on call and WhatsApp.",
    icon: "Headphones",
  },
];
