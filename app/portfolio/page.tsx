import { CTASection } from "@/components/sections/CTASection";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Reveal } from "@/components/sections/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio — Weddings, Studio, Events",
  description:
    "Selected wedding, studio, event and video work by Raj Studio across Ahmedabad and Gujarat. Filter by category.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Container className="pt-16 md:pt-24">
        <Reveal immediate>
          <Eyebrow>Contact Sheet — 24 frames</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
            Every frame we keep, filed like a{" "}
            <span className="italic text-accent">contact sheet</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-ink-soft">
            Browse recent work from weddings, studio sessions, events and
            cinematic video. Tap a frame to see it larger.
          </p>
        </Reveal>
      </Container>
      <div className="mt-16">
        <PortfolioGrid
          heading="All work"
          eyebrow="Frames 01 — 24"
          showFilters
          asSection={false}
        />
      </div>
      <CTASection />
    </>
  );
}
