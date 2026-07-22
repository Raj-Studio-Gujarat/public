import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/sections/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { journalPosts } from "@/content/journal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Journal",
  description:
    "Notes from Raj Studio on Indian weddings, studio sessions, and photography across Ahmedabad and Gujarat.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <>
      <section className="border-b border-line bg-background py-14 md:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Journal</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-normal text-ink md:text-5xl">
              Notes from the studio
            </h1>
            <p className="mt-4 max-w-2xl text-ink-soft">
              Short posts on shoots, locations, and practical planning. More
              stories will land here over time.
            </p>
          </Reveal>

          <ul className="mt-12 divide-y divide-line border-t border-line">
            {journalPosts.map((post, index) => (
              <li key={post.slug}>
                <Reveal delay={index * 0.06}>
                  <Link href={`/journal/${post.slug}`} className="group block py-8">
                    <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                      {post.category} · {post.date}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-normal text-ink group-hover:text-accent md:text-3xl">
                      {post.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-ink-soft">{post.excerpt}</p>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
