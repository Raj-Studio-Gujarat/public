import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Reveal } from "@/components/sections/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  categoryLabels,
  categoryMeta,
  getByCategory,
  isPortfolioCategory,
} from "@/content/portfolio";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return Object.keys(categoryLabels)
    .filter((key) => key !== "all")
    .map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  if (!isPortfolioCategory(category)) {
    return buildMetadata({
      title: "Portfolio",
      description: "Raj Studio portfolio",
      path: "/portfolio",
    });
  }
  const meta = categoryMeta[category];
  return buildMetadata({
    title: meta.title.replace(" — Raj Studio Gujarat", ""),
    description: meta.description,
    path: `/portfolio/${category}`,
  });
}

export default async function PortfolioCategoryPage({ params }: PageProps) {
  const { category } = await params;
  if (!isPortfolioCategory(category)) notFound();

  const items = getByCategory(category);

  return (
    <>
      <Container className="pt-16 md:pt-24">
        <Reveal immediate>
          <Eyebrow>Portfolio / {categoryLabels[category]}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
            {categoryLabels[category]}
          </h1>
          <p className="mt-6 max-w-2xl text-ink-soft">
            {categoryMeta[category].description}
          </p>
          <p className="mt-6">
            <Link
              href="/portfolio"
              className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft hover:text-accent"
            >
              ← All categories
            </Link>
          </p>
        </Reveal>
      </Container>
      <div className="mt-16">
        <PortfolioGrid
          items={items}
          heading={categoryLabels[category]}
          eyebrow={`Category — ${categoryLabels[category]}`}
          showFilters={false}
          asSection={false}
        />
      </div>
      <CTASection />
    </>
  );
}
