import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Denhouse Group for PG bookings, property enquiries, or partnership opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section tone="white" className="pt-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's find your next home"
          description="Reach out with any question about our PG homes or property listings — our team typically responds within a few hours."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <InfoCard icon={<MapPin size={18} />} title="Address" text={CONTACT.address} />
            <InfoCard
              icon={<Phone size={18} />}
              title="Phone"
              text={CONTACT.phone}
              href={`tel:${CONTACT.phoneRaw}`}
            />
            <InfoCard
              icon={<Mail size={18} />}
              title="Email"
              text={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
            />
            <InfoCard icon={<Clock size={18} />} title="Business Hours" text={CONTACT.hours} />
            <InfoCard
              icon={<MessageCircle size={18} />}
              title="WhatsApp"
              text={CONTACT.whatsapp}
              href={`https://wa.me/${CONTACT.whatsapp.replace("+", "")}`}
            />

            <div className="overflow-hidden rounded-2xl shadow-card">
              <iframe
                src={CONTACT.mapEmbed}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Denhouse Group office location"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-offwhite p-6 sm:p-8 lg:col-span-3">
            <h3 className="font-heading text-lg font-semibold text-primary">Send us a message</h3>
            <p className="mt-1 text-sm text-slate-500">
              Fill out the form and our team will get back to you shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function InfoCard({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3.5 rounded-2xl bg-white p-5 shadow-card">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{title}</p>
        <p className="mt-0.5 text-sm font-medium text-primary">{text}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
