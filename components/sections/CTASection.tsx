import { Reveal } from "@/components/sections/Reveal";
import { CTALink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { bookWhatsAppMessage } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function CTASection() {
  return (
    <section className="border-y border-line bg-ink text-background">
      <Container className="grid gap-8 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-7">
          <Eyebrow className="text-background/60">05 — Book a shoot</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
            Have a date in mind?{" "}
            <span className="italic text-accent-soft">
              Let&apos;s talk about the frame.
            </span>
          </h2>
          <p className="mt-6 max-w-lg text-background/70">
            Tell us the event, the date and the vibe. We&apos;ll reply on
            WhatsApp within business hours with availability and a package that
            fits.
          </p>
        </Reveal>
        <Reveal
          delay={0.08}
          className="flex flex-col justify-end gap-3 md:col-span-5 md:items-end"
        >
          <CTALink
            href={getWhatsAppUrl(bookWhatsAppMessage)}
            target="_blank"
            rel="noreferrer noopener"
            variant="accent"
          >
            Send on WhatsApp
          </CTALink>
          <CTALink
            href="/contact"
            variant="outline"
            className="border-background text-background hover:bg-background hover:text-ink"
          >
            Fill enquiry form
          </CTALink>
        </Reveal>
      </Container>
    </section>
  );
}
