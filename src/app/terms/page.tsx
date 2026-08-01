import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { SITE_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Read the terms and conditions governing use of ${SITE_NAME}'s website and services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section tone="white" className="pt-32">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: January 1, 2026</p>

        <div className="prose-sm mt-10 space-y-8 text-slate-600">
          <PolicySection title="1. Acceptance of Terms">
            By accessing or using the {SITE_NAME} website, you agree to be bound by these Terms
            & Conditions. If you do not agree, please discontinue use of the site.
          </PolicySection>

          <PolicySection title="2. Use of Our Services">
            Our website provides information about PG accommodations and real estate listings.
            Listings are updated regularly, but availability, pricing, and specifications are
            subject to change and should be confirmed directly with our team before booking.
          </PolicySection>

          <PolicySection title="3. Bookings and Payments">
            All bookings for PG accommodation or property transactions are subject to separate
            agreements executed at the time of booking. Any deposits or payments made are
            governed by the terms outlined in that specific agreement.
          </PolicySection>

          <PolicySection title="4. User Responsibilities">
            You agree to provide accurate information when submitting enquiries or booking
            requests, and not to misuse the website for fraudulent or unlawful purposes.
          </PolicySection>

          <PolicySection title="5. Intellectual Property">
            All content on this website, including text, images, and logos, is the property of
            {" "}{SITE_NAME} or its licensors and may not be reproduced without written permission.
          </PolicySection>

          <PolicySection title="6. Limitation of Liability">
            {SITE_NAME} makes reasonable efforts to verify listings but does not guarantee the
            accuracy of every detail. We are not liable for indirect or consequential losses
            arising from reliance on information provided on this site.
          </PolicySection>

          <PolicySection title="7. Governing Law">
            These Terms are governed by the laws of India, and any disputes shall be subject to
            the exclusive jurisdiction of the courts in Gurugram, Haryana.
          </PolicySection>

          <PolicySection title="8. Contact Us">
            For any questions regarding these Terms, contact us at {CONTACT.email} or{" "}
            {CONTACT.phone}.
          </PolicySection>
        </div>
      </Container>
    </Section>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-lg font-semibold text-primary">{title}</h2>
      <p className="mt-2 leading-relaxed">{children}</p>
    </div>
  );
}
