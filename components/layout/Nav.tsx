"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { defaultWhatsAppMessage, navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-baseline gap-2"
          onClick={closeMenu}
        >
          <span className="font-display text-xl leading-none tracking-tight">
            {siteConfig.name}
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink-soft">
            Gujarat
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-200",
                  active ? "text-accent" : "text-ink hover:text-accent"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={getWhatsAppUrl(defaultWhatsAppMessage)}
            target="_blank"
            rel="noreferrer noopener"
            className="border border-ink px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-200 hover:bg-ink hover:text-background"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="p-2 text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            className="overflow-hidden border-t border-line md:hidden"
            initial={
              reduceMotion ? false : { height: 0, opacity: 0 }
            }
            animate={{ height: "auto", opacity: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Container className="flex flex-col py-4">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="py-3 font-mono text-xs uppercase tracking-[0.2em] text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={getWhatsAppUrl(defaultWhatsAppMessage)}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 border border-ink px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.2em]"
              >
                WhatsApp Us
              </a>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
