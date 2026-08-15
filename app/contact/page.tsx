import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/sections/Reveal";
import { CTALink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { branches } from "@/content/locations";
import { getLocalBusinessJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { defaultWhatsAppMessage, siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Enquire with Raj Studio for weddings, studio portraits and events. WhatsApp us or send the form — we reply within business hours.",
  path: "/contact",
});

export default function ContactPage() {
  const jsonLd = getLocalBusinessJsonLd();
  const labelCls =
    "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal immediate className="md:col-span-5">
            <Eyebrow>Contact — Raj Studio</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] md:text-5xl">
              Send a note.{" "}
              <span className="italic text-accent">
                We&apos;ll reply on WhatsApp.
              </span>
            </h1>
            <p className="mt-6 text-ink-soft">
              The fastest way to reach us is WhatsApp. The form below composes
              the same message for you and opens it directly in WhatsApp.
            </p>

            <div className="mt-10">
              <CTALink
                href={getWhatsAppUrl(defaultWhatsAppMessage)}
                target="_blank"
                rel="noreferrer noopener"
                variant="accent"
              >
                Chat on WhatsApp
              </CTALink>
            </div>

            <div className="mt-12 space-y-6">
              <div>
                <FrameLabel>Call us</FrameLabel>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="mt-2 block font-display text-2xl hover:text-accent"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div>
                <FrameLabel>Visit</FrameLabel>
                <ul className="mt-3 space-y-3 text-sm text-ink-soft">
                  {branches.map((branch) => (
                    <li key={branch.id}>
                      <span className={labelCls}>
                        {String(branch.id).padStart(2, "0")} — {branch.label}
                      </span>
                      <div className="mt-1">{branch.address}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </>
  );
}
