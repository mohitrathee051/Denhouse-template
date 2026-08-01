import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/ui/Card";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Denhouse Group's story, mission, and the team building trusted PG and real estate services across India.",
  alternates: { canonical: "/about" },
};

const timeline = [
  { year: "2017", title: "Founded in Gurugram", text: "Started with a single PG property and a promise: no hidden charges." },
  { year: "2019", title: "Entered Real Estate", text: "Launched our residential and commercial property vertical." },
  { year: "2021", title: "Crossed 1,000 Residents", text: "Expanded PG operations to Bengaluru, Pune, and Mumbai." },
  { year: "2023", title: "12 Cities, 3,000+ Residents", text: "Grew into one of India's fastest-scaling PG and real estate brands." },
  { year: "2026", title: "Building What's Next", text: "Investing in technology to make finding a home effortless." },
];

const team = [
  { name: "Arjun Deshmukh", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
  { name: "Meera Kapoor", role: "Head of Real Estate", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
  { name: "Vikram Chauhan", role: "Head of PG Operations", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=400&q=80" },
  { name: "Isha Reddy", role: "Head of Customer Success", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
];

export default function AboutPage() {
  return (
    <>
      <Section tone="primary" className="pt-32">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            eyebrow="Our Story"
            title="Built by people tired of bad rental experiences"
            description="Denhouse Group started in 2017 when our founder couldn't find a PG in Gurugram that matched its listing photos. Today we manage verified PG homes and real estate across 12 Indian cities — still holding to that same standard."
            align="center"
            light
          />
        </Container>
      </Section>

      <Section tone="white">
        <Container className="grid gap-6 sm:grid-cols-3">
          <Card className="p-7" hoverLift={false}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Target size={20} />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-primary">Our Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Make finding a verified place to live or invest in as simple as booking a hotel room.
            </p>
          </Card>
          <Card className="p-7" hoverLift={false}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Eye size={20} />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-primary">Our Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              To be the most trusted name in Indian housing — for renters, residents, and investors alike.
            </p>
          </Card>
          <Card className="p-7" hoverLift={false}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Users size={20} />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-primary">Our Values</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Transparency, verified listings, and fast, honest support — in that order, every time.
            </p>
          </Card>
        </Container>
      </Section>

      <Section tone="offwhite">
        <Container>
          <SectionHeading eyebrow="Timeline" title="How we got here" align="center" />
          <div className="mx-auto mt-12 max-w-2xl space-y-8 border-l border-slate-200 pl-8">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute -left-[38px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-offwhite" />
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">{item.year}</p>
                <h4 className="mt-1 font-heading text-base font-semibold text-primary">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white" id="team">
        <Container>
          <SectionHeading eyebrow="Our Team" title="The people behind Denhouse" align="center" />
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[160px] overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h4 className="mt-4 text-sm font-semibold text-primary">{member.name}</h4>
                <p className="text-xs text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
