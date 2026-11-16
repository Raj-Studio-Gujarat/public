import { CTASection } from "@/components/sections/CTASection";
import { Reveal, REVEAL_STAGGER } from "@/components/sections/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { LazyImage } from "@/components/ui/LazyImage";
import { branches } from "@/content/locations";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Raj Studio is a family-run photography and video studio in Maninagar, Ahmedabad, covering weddings and events across Gujarat.",
  path: "/about",
});

const numbers = [
  { n: "20+", label: "Years shooting Gujarati weddings" },
  { n: "1,200+", label: "Weddings & events documented" },
  { n: "1", label: "Studio in Maninagar East" },
  { n: "4K", label: "Cinema-grade video delivery" },
];

export default function AboutPage() {
  return (
    <>
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal immediate className="md:col-span-7">
            <Eyebrow>About — Raj Studio</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
              A small team, a{" "}
              <span className="italic text-accent">long habit</span> of paying
              attention.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              We started as a neighbourhood studio in Maninagar and still work
              the same way: understand the family, understand the light, and
              stay out of the way of the moment.
            </p>
            <p className="mt-4 max-w-2xl text-ink-soft">
              Our photographs are meant to be printed, framed and looked at for
              years — not scrolled past. That guides every decision, from how we
              light a portrait to how we edit a wedding gallery.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-bg-alt">
              <LazyImage
                src="/images/portfolio/studio-03.webp"
                alt="Studio portrait by Raj Studio"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute left-3 top-3">
                <FrameLabel variant="overlay">STUDIO — 001</FrameLabel>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <section className="border-y border-line bg-bg-alt py-16">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {numbers.map((item, index) => (
              <Reveal key={item.label} delay={index * REVEAL_STAGGER}>
                <div className="border-l border-line pl-6">
                  <div className="font-display text-4xl md:text-5xl">
                    {item.n}
                  </div>
                  <div className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft">
                    {item.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Where to find us</Eyebrow>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Maninagar East, Ahmedabad
            </h2>
          </Reveal>
          <div className="mt-10 max-w-xl">
            {branches.map((branch) => (
              <Reveal key={branch.id}>
                <div className="border-t border-line pt-6">
                  <FrameLabel>01 — Studio</FrameLabel>
                  <div className="mt-3 font-display text-2xl">
                    {branch.label}
                  </div>
                  <p className="mt-3 text-sm text-ink-soft">{branch.address}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
