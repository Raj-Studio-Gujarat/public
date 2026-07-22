"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { Lightbox } from "@/components/sections/Lightbox";
import {
  categoryLabels,
  portfolioItems,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/content/portfolio";
import { cn } from "@/lib/utils";

type Filter = PortfolioCategory | "all";

type PortfolioGridProps = {
  items?: PortfolioItem[];
  limit?: number;
  heading?: string;
  eyebrow?: string;
  showFilters?: boolean;
  initialCategory?: Filter;
  asSection?: boolean;
};

export function PortfolioGrid({
  items = portfolioItems,
  limit,
  heading = "Selected work",
  eyebrow = "03 — Portfolio",
  showFilters = true,
  initialCategory = "all",
  asSection = true,
}: PortfolioGridProps) {
  const [filter, setFilter] = useState<Filter>(initialCategory);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const shots = useMemo(() => {
    const list =
      filter === "all" ? items : items.filter((shot) => shot.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, items, limit]);

  const filters: Filter[] = [
    "all",
    "wedding",
    "pre-wedding",
    "studio",
    "events",
    "video",
  ];

  const content = (
    <Container>
      <div className="flex flex-col gap-6 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">{heading}</h2>
        </div>
        {showFilters ? (
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Portfolio categories">
            {filters.map((value) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={filter === value}
                onClick={() => setFilter(value)}
                className={cn(
                  "border px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] transition-colors",
                  filter === value
                    ? "border-ink bg-ink text-background"
                    : "border-line text-ink-soft hover:border-ink hover:text-ink"
                )}
              >
                {categoryLabels[value]}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {shots.map((shot, index) => {
          const wide = index % 7 === 3;
          return (
            <button
              key={shot.id}
              type="button"
              onClick={() => setOpenIdx(index)}
              className={cn(
                "group relative overflow-hidden bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                wide ? "aspect-[4/3] md:col-span-2" : "aspect-[3/4]"
              )}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute left-3 top-3">
                <FrameLabel variant="overlay">{shot.frameLabel}</FrameLabel>
              </div>
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
            </button>
          );
        })}
      </div>
    </Container>
  );

  return (
    <>
      {asSection ? (
        <section className="bg-bg-alt py-24 md:py-32">{content}</section>
      ) : (
        <div className="bg-bg-alt py-16 md:py-24">{content}</div>
      )}

      {openIdx !== null ? (
        <Lightbox
          items={shots}
          index={openIdx}
          onClose={() => setOpenIdx(null)}
          onChange={setOpenIdx}
        />
      ) : null}
    </>
  );
}
