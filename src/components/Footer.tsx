import Link from "next/link";
import { Home as HomeIcon, MapPin, Mail, Phone, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import Container from "@/components/ui/Container";
import { CONTACT, SOCIALS, FOOTER_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
              <HomeIcon size={18} />
            </span>
            <span className="font-heading text-lg font-semibold">{SITE_NAME}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Premium PG accommodations and trusted real estate services across India — built on
            verified listings and transparent pricing.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Instagram, href: SOCIALS.instagram, label: "Instagram" },
              { icon: Facebook, href: SOCIALS.facebook, label: "Facebook" },
              { icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
              { icon: Twitter, href: SOCIALS.twitter, label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Company" links={FOOTER_LINKS.company} />
        <FooterColumn title="Services" links={FOOTER_LINKS.services} />

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/80">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent-light" />
              {CONTACT.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-accent-light" />
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-accent-light" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/80">
        {title}
      </h4>
      <ul className="mt-4 space-y-3 text-sm text-white/60">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
