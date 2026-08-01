import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, BedDouble, Bath, Ruler, ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) return {};
  return {
    title: property.title,
    description: `${property.title} in ${property.location}, ${property.city} — ${property.areaSqft} sqft, ${property.priceLabel}.`,
    alternates: { canonical: `/real-estate/${property.slug}` },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) notFound();

  const related = properties
    .filter((p) => p.id !== property.id && p.city === property.city)
    .slice(0, 3);

  return (
    <>
      <div className="relative h-[50vh] min-h-[360px] w-full pt-20">
        <Image
          src={property.image}
          alt={property.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <Container className="relative z-10 flex h-full flex-col justify-end pb-10">
          <Link
            href="/real-estate"
            className="mb-4 flex w-fit items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to all properties
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="white">{property.purpose}</Badge>
            <Badge variant="accent">{property.type}</Badge>
          </div>
          <h1 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">
            {property.title}
          </h1>
          <p className="mt-2 flex items-center gap-2 text-white/70">
            <MapPin size={16} />
            {property.location}, {property.city}
          </p>
        </Container>
      </div>

      <Section tone="white">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-xl font-semibold text-primary">Overview</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              This {property.type.toLowerCase()} in {property.location}, {property.city} spans{" "}
              {property.areaSqft} sqft{property.bedrooms > 0 ? ` across ${property.bedrooms} bedrooms and ${property.bathrooms} bathrooms` : ""}.
              Verified by our on-ground team, it&apos;s available to {property.purpose.toLowerCase()}{" "}
              with full documentation support from Denhouse Group.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {property.bedrooms > 0 && (
                <Stat icon={<BedDouble size={18} />} label="Bedrooms" value={property.bedrooms} />
              )}
              {property.bathrooms > 0 && (
                <Stat icon={<Bath size={18} />} label="Bathrooms" value={property.bathrooms} />
              )}
              <Stat icon={<Ruler size={18} />} label="Area (sqft)" value={property.areaSqft} />
            </div>
          </div>

          <div className="h-fit rounded-2xl bg-offwhite p-6 shadow-card lg:sticky lg:top-28">
            <p className="text-sm text-slate-500">
              {property.purpose === "Rent" ? "Monthly rent" : "Price"}
            </p>
            <p className="font-heading text-3xl font-semibold text-primary">
              {property.priceLabel}
            </p>
            <Button href="/contact" className="mt-6 w-full justify-center">
              Enquire About This Property
            </Button>
            <a
              href="tel:+919876543210"
              className="mt-3 block text-center text-sm font-medium text-primary hover:text-accent"
            >
              Or call us directly
            </a>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section tone="offwhite">
          <Container>
            <h2 className="font-heading text-2xl font-semibold text-primary">
              More properties in {property.city}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="rounded-xl bg-offwhite p-4 text-center">
      <div className="flex justify-center text-accent">{icon}</div>
      <p className="mt-2 font-heading text-lg font-semibold text-primary">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}
