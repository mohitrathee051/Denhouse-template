import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import PropertyCard from "@/components/PropertyCard";
import Button from "@/components/ui/Button";
import { properties } from "@/data/properties";

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <Section tone="offwhite">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Properties"
            title="Homes and commercial spaces worth a second look"
            description="Hand-picked listings across India's fastest-growing residential and business hubs."
          />
          <Button href="/real-estate" variant="ghost" className="border border-slate-200 bg-white">
            View All Properties
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
