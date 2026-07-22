import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { homeServiceCards } from "@/content/services";

export function ServiceCards() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
          <div>
            <Eyebrow>02 — Services</Eyebrow>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              What we shoot
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden font-mono text-[0.7rem] uppercase tracking-[0.2em] hover:text-accent md:inline-block"
          >
            All packages →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServiceCards.map((service) => (
            <Link key={service.title} href={service.href} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-bg-alt">
                <Image
                  src={service.img}
                  alt={`${service.title} photography by Raj Studio`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute left-3 top-3">
                  <FrameLabel variant="overlay">
                    {service.frame}-{service.n}
                  </FrameLabel>
                </div>
              </div>
              <div className="mt-4">
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft">
                  {service.n}
                </div>
                <h3 className="mt-1 font-display text-xl group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{service.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
