"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CTALink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { heroImages } from "@/content/portfolio";
import { bookWhatsAppMessage } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIdx((i) => (i + 1) % heroImages.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const current = heroImages[idx] ?? heroImages[0];

  return (
    <section className="relative overflow-hidden border-b border-line">
      <Container className="grid gap-10 py-16 md:grid-cols-12 md:gap-8 md:py-24 lg:py-32">
        <div className="flex flex-col justify-center md:col-span-6 lg:col-span-5">
          <Eyebrow>01 — Raj Studio, Gujarat</Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Photographs that hold up on the wall,
            <span className="italic text-accent"> not just the feed.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-ink-soft">
            Weddings, studio portraits, events and video across Ahmedabad and
            greater Gujarat. Three branches, one team, decades behind the lens.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CTALink href="/contact" variant="primary">
              Enquire Now
            </CTALink>
            <CTALink
              href={getWhatsAppUrl(bookWhatsAppMessage)}
              target="_blank"
              rel="noreferrer noopener"
              variant="outline"
            >
              Send on WhatsApp
            </CTALink>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <FrameLabel>Frame 01/24</FrameLabel>
            <div className="h-px flex-1 bg-line" />
            <FrameLabel>Est. Ahmedabad</FrameLabel>
          </div>
        </div>

        <div className="relative md:col-span-6 lg:col-span-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-bg-alt md:aspect-[3/4]">
            {heroImages.map((image, i) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover transition-opacity duration-1000"
                style={{ opacity: i === idx ? 1 : 0 }}
              />
            ))}
            <div className="absolute left-4 top-4">
              <FrameLabel variant="overlay">
                {`0${idx + 1}/${heroImages.length} — Selected`}
              </FrameLabel>
            </div>
            <div className="absolute bottom-4 right-4">
              <FrameLabel variant="overlay">Raj Studio · GJ</FrameLabel>
            </div>
          </div>
          <span className="sr-only">{current.alt}</span>
        </div>
      </Container>
    </section>
  );
}
