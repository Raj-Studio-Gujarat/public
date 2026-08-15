"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

/** Spec: stagger siblings ~60–80ms apart */
export const REVEAL_STAGGER = 0.07;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** When true, animate on mount instead of scroll into view (e.g. hero copy). */
  immediate?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  immediate = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const transition = { duration: 0.4, ease: "easeOut" as const, delay };

  if (immediate) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
