import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import PGCard from "@/components/PGCard";
import Button from "@/components/ui/Button";
import { pgListings } from "@/data/pg";

export default function FeaturedPG() {
  const featured = pgListings.filter((pg) => pg.featured).slice(0, 3);

  return (
    <Section tone="white">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured PG Homes"
            title="Move-in ready rooms, verified by our team"
            description="Fully furnished PG accommodation with meals, housekeeping, and Wi-Fi included."
          />
          <Button href="/pg" variant="ghost" className="border border-slate-200">
            View All PG Listings
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((pg, i) => (
            <PGCard key={pg.id} pg={pg} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
