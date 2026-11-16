"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Lightbox } from "@/components/sections/Lightbox";
import { Reveal, REVEAL_STAGGER } from "@/components/sections/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { LazyImage } from "@/components/ui/LazyImage";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import { portfolioItems, type PortfolioItem } from "@/content/portfolio";
import { cn } from "@/lib/utils";

type PortfolioGridProps = {
  items?: PortfolioItem[];
  limit?: number;
  heading?: string;
  eyebrow?: string;
  asSection?: boolean;
};

export function PortfolioGrid({
  items = portfolioItems,
  limit,
  heading = "Selected work",
  eyebrow = "03 — Portfolio",
  asSection = true,
}: PortfolioGridProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const shots = useMemo(
    () => (limit ? items.slice(0, limit) : items),
    [items, limit]
  );

  const content = (
    <Container>
      <Reveal>
        <div className="border-b border-line pb-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">{heading}</h2>
        </div>
      </Reveal>

      <div className="mt-10 [&>div]:grid [&>div]:grid-cols-2 [&>div]:gap-3 md:[&>div]:grid-cols-3 md:[&>div]:gap-5 lg:[&>div]:grid-cols-4 md:[&>div>div:nth-child(7n+4)]:col-span-2">
        <StaggerGrid>
          {shots.map((shot, index) => {
            const wide = index % 7 === 3;
            return (
              <StaggerItem key={shot.id}>
                <Reveal delay={Math.min(index, 8) * REVEAL_STAGGER}>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(index)}
                    className={cn(
                      "group relative w-full overflow-hidden bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      wide ? "aspect-[4/3]" : "aspect-[3/4]"
                    )}
                  >
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <LazyImage
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-[250ms] ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    </motion.div>
                    <div className="absolute left-3 top-3">
                      <FrameLabel variant="overlay">{shot.frameLabel}</FrameLabel>
                    </div>
                    <div className="absolute inset-0 bg-ink/0 transition-colors duration-[250ms] group-hover:bg-ink/10" />
                  </button>
                </Reveal>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
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
