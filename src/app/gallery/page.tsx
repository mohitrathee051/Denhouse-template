import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore photos from Denhouse Group's PG homes, real estate listings, resident events, and team.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <Section tone="white" className="pt-32">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="A closer look at Denhouse living"
          description="Browse real photos from our PG homes, property listings, and community moments."
          align="center"
        />
        <div className="mt-12">
          <GalleryGrid />
        </div>
      </Container>
    </Section>
  );
}
