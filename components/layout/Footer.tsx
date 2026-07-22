import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { branches } from "@/content/locations";
import { defaultWhatsAppMessage, navLinks, siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-bg-alt">
      <Container className="grid gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl">{siteConfig.name}</div>
          <p className="mt-3 max-w-xs text-sm text-ink-soft">
            {siteConfig.tagline}
          </p>
          <Eyebrow className="mt-6 block">Frame 24 / 24</Eyebrow>
        </div>

        <div>
          <Eyebrow>Explore</Eyebrow>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <Eyebrow>Branches — Ahmedabad</Eyebrow>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            {branches.map((branch) => (
              <li key={branch.id}>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink">
                  {String(branch.id).padStart(2, "0")} — {branch.label}
                </span>
                <div className="mt-1">{branch.address}</div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-accent">
              {siteConfig.phoneDisplay}
            </a>
            <span className="text-line">/</span>
            <a
              href={getWhatsAppUrl(defaultWhatsAppMessage)}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-accent"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="flex flex-col items-start justify-between gap-2 py-6 text-xs text-ink-soft md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}, Gujarat. All rights
            reserved.
          </span>
          <span className="font-mono uppercase tracking-[0.2em]">
            Shot in Ahmedabad
          </span>
        </Container>
      </div>
    </footer>
  );
}
