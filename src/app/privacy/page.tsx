import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { SITE_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read ${SITE_NAME}'s privacy policy to understand how we collect, use, and protect your data.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section tone="white" className="pt-32">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: January 1, 2026</p>

        <div className="prose-sm mt-10 space-y-8 text-slate-600">
          <PolicySection title="1. Information We Collect">
            We collect information you provide directly to us, including your name, phone
            number, email address, and any details submitted through our contact and enquiry
            forms. We also automatically collect limited technical data such as browser type
            and pages visited, to help us improve the site.
          </PolicySection>

          <PolicySection title="2. How We Use Your Information">
            We use the information we collect to respond to enquiries, schedule property or PG
            visits, send relevant updates about listings, and improve our services. We do not
            sell your personal information to third parties.
          </PolicySection>

          <PolicySection title="3. Information Sharing">
            We may share your information with property owners, PG operators, or partners
            directly involved in fulfilling your request, and with service providers who help
            us operate our business, under confidentiality obligations.
          </PolicySection>

          <PolicySection title="4. Data Security">
            We use reasonable administrative and technical safeguards to protect your personal
            information. However, no method of transmission over the internet is completely
            secure, and we cannot guarantee absolute security.
          </PolicySection>

          <PolicySection title="5. Your Choices">
            You may request access to, correction of, or deletion of your personal information
            at any time by contacting us at {CONTACT.email}. You may also opt out of marketing
            communications through the unsubscribe link in any email we send.
          </PolicySection>

          <PolicySection title="6. Cookies">
            Our website may use cookies to remember your preferences and understand how visitors
            use our site. You can disable cookies through your browser settings, though some
            features may not function as intended.
          </PolicySection>

          <PolicySection title="7. Changes to This Policy">
            We may update this Privacy Policy from time to time. Material changes will be
            reflected by updating the Last updated date at the top of this page.
          </PolicySection>

          <PolicySection title="8. Contact Us">
            For questions about this Privacy Policy, reach out to us at {CONTACT.email} or{" "}
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
