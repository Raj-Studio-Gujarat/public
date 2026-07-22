import { cn } from "@/lib/utils";
import { type ElementType, type ReactNode } from "react";

export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <As
      className={cn(
        "mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-16",
        className
      )}
    >
      {children}
    </As>
  );
}
