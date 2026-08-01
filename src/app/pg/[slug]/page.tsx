import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import { MapPin, Star, ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import PGCard from "@/components/PGCard";
import { pgListings, pgAmenitiesIcons } from "@/data/pg";
import { formatRent } from "@/lib/helpers";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return pgListings.map((pg) => ({ slug: pg.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pg = pgListings.find((p) => p.slug === slug);
  if (!pg) return {};
  return {
    title: pg.name,
    description: `${pg.name} in ${pg.location}, ${pg.city} — ${pg.roomType} starting at ${formatRent(pg.rent)}.`,
    alternates: { canonical: `/pg/${pg.slug}` },
  };
}

export default async function PGDetailPage({ params }: Props) {
  const { slug } = await params;
  const pg = pgListings.find((p) => p.slug === slug);
  if (!pg) notFound();

  const related = pgListings.filter((p) => p.id !== pg.id && p.city === pg.city).slice(0, 3);

  return (
    <>
      <div className="relative h-[50vh] min-h-[360px] w-full pt-20">
        <Image src={pg.image} alt={pg.name} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <Container className="relative z-10 flex h-full flex-col justify-end pb-10">
          <Link
            href="/pg"
            className="mb-4 flex w-fit items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to all PG listings
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="white">{pg.gender}</Badge>
            <span className="flex items-center gap-1 text-sm font-medium text-white">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              {pg.rating}
            </span>
          </div>
          <h1 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">
            {pg.name}
          </h1>
          <p className="mt-2 flex items-center gap-2 text-white/70">
            <MapPin size={16} />
            {pg.location}, {pg.city}
          </p>
        </Container>
      </div>

      <Section tone="white">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-xl font-semibold text-primary">About this PG</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              {pg.name} offers {pg.roomType.toLowerCase()} accommodation designed for{" "}
              {pg.gender === "Co-living" ? "working professionals of all backgrounds" : `${pg.gender.toLowerCase()} residents`}
              . Every room is fully furnished and inspected by our team before listing, with
              housekeeping and meals handled so you can focus on work and life.
            </p>

            <h3 className="mt-8 font-heading text-lg font-semibold text-primary">Amenities</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {pg.amenities.map((a) => {
                const iconName = pgAmenitiesIcons[a] ?? "Check";
                const Icon =
                  (Icons as unknown as Record<string, Icons.LucideIcon>)[iconName] ?? Icons.Check;
                return (
                  <div
                    key={a}
                    className="flex items-center gap-2.5 rounded-xl bg-offwhite px-4 py-3 text-sm text-primary"
                  >
                    <Icon size={16} className="text-accent" />
                    {a}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="h-fit rounded-2xl bg-offwhite p-6 shadow-card lg:sticky lg:top-28">
            <p className="text-sm text-slate-500">Starting from</p>
            <p className="font-heading text-3xl font-semibold text-primary">
              {formatRent(pg.rent)}
            </p>
            <p className="mt-1 text-xs text-slate-500">Inclusive of meals & housekeeping</p>
            <Button href="/contact" className="mt-6 w-full justify-center">
              Schedule a Visit
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
              More PG homes in {pg.city}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <PGCard key={p.id} pg={p} index={i} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
