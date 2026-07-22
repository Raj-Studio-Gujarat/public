import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function FrameLabel({
  children,
  className,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "overlay";
}) {
  return (
    <span
      className={cn(
        "font-mono text-[0.65rem] uppercase leading-none tracking-[0.2em]",
        variant === "overlay"
          ? "bg-background/85 px-2 py-1 text-ink backdrop-blur-sm"
          : "text-ink-soft",
        className
      )}
    >
      {children}
    </span>
  );
}
