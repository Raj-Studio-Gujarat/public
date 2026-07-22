import { CTALink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <Container className="text-center">
        <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-normal text-ink">
          Frame not found
        </h1>
        <p className="mt-4 text-ink-soft">
          That page is not in the contact sheet.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <CTALink href="/">Go home</CTALink>
          <CTALink href="/portfolio" variant="outline">
            View gallery
          </CTALink>
        </div>
      </Container>
    </section>
  );
}
