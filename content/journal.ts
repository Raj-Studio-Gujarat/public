export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "ahmedabad-wedding-coverage-plan",
    title: "Planning wedding coverage across Ahmedabad",
    excerpt:
      "How we schedule teams when mehndi, pheras, and reception sit at different venues in one day.",
    date: "2026-03-12",
    category: "Weddings",
    body: [
      "Ahmedabad weddings often move between home, mandap, and hall in a single day. We start with a timeline on WhatsApp, then assign photographers to the moments that cannot be restaged.",
      "Our Maninagar studio is the base for kit checks before late functions across the city.",
      "If your date is fixed, send venues and function list — we will reply with a coverage plan and quote.",
    ],
  },
  {
    slug: "maninagar-studio-family-session",
    title: "Family sessions at our Maninagar studio",
    excerpt:
      "What to expect from a portrait or family album shoot at our Maninagar East studio.",
    date: "2026-01-28",
    category: "Studio",
    body: [
      "The Maninagar studio is set up for family groups, couple portraits, and small product shoots.",
      "Sessions usually run sixty to ninety minutes. We deliver an edited gallery online; prints can be ordered separately.",
      "To book a slot, send your preferred date on WhatsApp.",
    ],
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return journalPosts.find((post) => post.slug === slug);
}
