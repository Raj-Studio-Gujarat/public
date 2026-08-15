import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reveal } from "@/components/ui/Reveal";
import { getLocalBusinessJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Wedding, Studio & Event Photography in Ahmedabad`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const jsonLd = getLocalBusinessJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <ServiceCards />
      </Reveal>
      <Reveal>
        <PortfolioGrid
          heading="Selected work"
          eyebrow="03 — Portfolio"
          limit={12}
          showFilters={false}
        />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <CTASection />
      </Reveal>
    </>
  );
}
