import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getJournalPost, journalPosts } from "@/content/journal";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) {
    return buildMetadata({
      title: "Journal",
      description: "Raj Studio journal",
      path: "/journal",
    });
  }
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/journal/${post.slug}`,
  });
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="border-b border-line bg-background py-14 md:py-20">
        <Container className="max-w-3xl">
          <Eyebrow>
            {post.category} · {post.date}
          </Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-normal text-ink md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-10 space-y-5 text-lg text-ink-soft">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-12">
            <Link
              href="/journal"
              className="font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-accent"
            >
              ← All journal posts
            </Link>
          </p>
        </Container>
      </article>
      <CTASection />
    </>
  );
}
