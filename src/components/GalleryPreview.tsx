import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/ui/Button";
import { galleryImages } from "@/data/gallery";

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <Section tone="white">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Gallery"
            title="A look inside Denhouse living"
            description="Real spaces from our PG homes, property listings, and community moments."
          />
          <Button href="/gallery" variant="ghost" className="border border-slate-200">
            View Full Gallery
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {preview.map((img, i) => (
            <div
              key={img.id}
              className={`relative overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 16vw"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
