import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-xs uppercase tracking-[0.2em] text-ink-soft",
        className
      )}
    >
      {children}
    </span>
  );
}
