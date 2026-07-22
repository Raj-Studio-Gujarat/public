import { CTASection } from "@/components/sections/CTASection";
import { CTALink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { serviceSections } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Services & Packages",
  description:
    "Wedding, pre-wedding, studio portrait, event and video packages from Raj Studio. Transparent pricing ranges, WhatsApp to confirm.",
  path: "/services",
});

const sectionIds = ["studio", "weddings", "events", "video"] as const;

export default function ServicesPage() {
  return (
    <>
      <Container className="py-16 md:py-24">
        <Eyebrow>02 — Services</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
          Packages priced honestly,{" "}
          <span className="italic text-accent">so you can plan.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-ink-soft">
          Indicative ranges below. Final quote depends on dates, hours and
          travel. Tap any package to WhatsApp us with it pre-filled — we&apos;ll
          confirm within business hours.
        </p>
      </Container>

      {serviceSections.map((section, index) => (
        <section
          key={section.title}
          id={sectionIds[index]}
          className={
            index % 2 === 0
              ? "scroll-mt-24 border-t border-line py-20"
              : "scroll-mt-24 border-t border-line bg-bg-alt py-20"
          }
        >
          <Container>
            <div className="flex items-end justify-between border-b border-line pb-6">
              <div>
                <Eyebrow>
                  {String(index + 1).padStart(2, "0")} — {section.frame}
                </Eyebrow>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">
                  {section.title}
                </h2>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-ink-soft">{section.blurb}</p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {section.packages.map((pkg) => (
                <article
                  key={pkg.frame}
                  className="flex flex-col border border-line bg-background p-6 transition-colors hover:border-ink"
                >
                  <FrameLabel>{pkg.frame}</FrameLabel>
                  <h3 className="mt-3 font-display text-2xl">{pkg.name}</h3>
                  <div className="mt-2 font-mono text-sm text-accent">
                    {pkg.price}
                  </div>
                  <ul className="mt-6 flex-1 space-y-2 text-sm text-ink-soft">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-px w-3 flex-shrink-0 bg-ink-soft" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <CTALink
                    href={getWhatsAppUrl(
                      `Hi Raj Studio, I'd like to book the "${pkg.name}" (${section.title}) package. Please share availability.`
                    )}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="outline"
                    className="mt-6 w-full"
                  >
                    Enquire — WhatsApp
                  </CTALink>
                </article>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <CTASection />
    </>
  );
}
