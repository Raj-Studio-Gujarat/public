"use client";

import Image, { type ImageProps } from "next/image";
import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type LazyImageProps = Omit<ImageProps, "onLoad"> & {
  /** Soft fade when the image finishes loading. Default true. */
  fadeIn?: boolean;
};

/**
 * next/image wrapper with lazy loading (unless priority) and a soft on-load fade.
 * Skips fade when prefers-reduced-motion is set.
 */
export function LazyImage({
  className,
  fadeIn = true,
  priority,
  alt,
  ...props
}: LazyImageProps) {
  const reduceMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(Boolean(priority) || !fadeIn);

  const shouldFade = fadeIn && !reduceMotion && !priority;

  return (
    <Image
      alt={alt}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      onLoad={() => setLoaded(true)}
      className={cn(
        className,
        shouldFade && "transition-opacity duration-200 ease-out",
        shouldFade && (loaded ? "opacity-100" : "opacity-0")
      )}
      {...props}
    />
  );
}
