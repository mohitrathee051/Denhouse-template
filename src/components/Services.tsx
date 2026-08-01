import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <Section tone="offwhite">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need, under one roof"
          description="From your first PG room to your first property purchase, Denhouse Group supports every stage of where you live and invest."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
