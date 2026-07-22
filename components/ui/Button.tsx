import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

type Variant = "primary" | "ghost" | "outline" | "accent";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-background hover:bg-accent hover:text-accent-foreground",
  ghost: "text-ink hover:text-accent",
  outline: "border border-ink text-ink hover:bg-ink hover:text-background",
  accent:
    "bg-accent text-accent-foreground hover:bg-ink hover:text-background",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant = "primary", className, children, ...rest }, ref) {
    return (
      <button ref={ref} className={cn(base, styles[variant], className)} {...rest}>
        {children}
      </button>
    );
  }
);

type CTALinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
  children: ReactNode;
};

export function CTALink({
  variant = "primary",
  className,
  href,
  children,
  ...rest
}: CTALinkProps) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");
  const classes = cn(base, styles[variant], className);

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
