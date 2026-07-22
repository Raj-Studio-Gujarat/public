import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="border-b border-line pb-6">
          <Eyebrow>04 — Words</Eyebrow>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            What our clients say
          </h2>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="flex flex-col border-t border-line pt-6"
            >
              <FrameLabel>{item.frameLabel}</FrameLabel>
              <blockquote className="mt-4 font-display text-xl leading-snug md:text-2xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="text-ink">{item.name}</div>
                <div className="text-ink-soft">{item.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
