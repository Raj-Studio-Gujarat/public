"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { FrameLabel } from "@/components/ui/FrameLabel";
import type { PortfolioItem } from "@/content/portfolio";

type LightboxProps = {
  items: PortfolioItem[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];

  useEffect(() => {
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onChange((index + 1) % items.length);
      if (event.key === "ArrowLeft") {
        onChange((index - 1 + items.length) % items.length);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [index, items.length, onChange, onClose]);

  if (!item) return null;

  const largeSrc = item.src.replace("w=1200", "w=1800");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-sm p-2 text-background hover:text-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="Close"
      >
        <X size={22} />
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onChange((index - 1 + items.length) % items.length);
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-sm p-2 text-background hover:text-accent-soft md:left-6"
        aria-label="Previous image"
      >
        <ChevronLeft size={26} />
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onChange((index + 1) % items.length);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-2 text-background hover:text-accent-soft md:right-6"
        aria-label="Next image"
      >
        <ChevronRight size={26} />
      </button>

      <figure
        className="relative max-h-[85vh] max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative mx-auto h-[70vh] w-[min(90vw,1100px)]">
          <Image
            src={largeSrc}
            alt={item.alt}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between gap-4">
          <FrameLabel className="text-background/80">{item.frameLabel}</FrameLabel>
          <span className="max-w-xl text-right text-xs text-background/70">
            {item.alt}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
