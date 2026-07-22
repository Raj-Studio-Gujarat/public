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
      "Our Maninagar, Ramol, and Ghodasar branches give the team nearby kit-check points before late functions.",
      "If your date is fixed, send venues and function list — we will reply with a coverage plan and quote.",
    ],
  },
  {
    slug: "ghodasar-studio-family-session",
    title: "Family sessions at our Ghodasar studio",
    excerpt:
      "What to expect from a portrait or family album shoot at Shop No.1, Dhwani Flat on Cadila Road.",
    date: "2026-01-28",
    category: "Studio",
    body: [
      "The Ghodasar studio is set up for family groups, couple portraits, and small product shoots. Cadila Road access makes parking straightforward.",
      "Sessions usually run sixty to ninety minutes. We deliver an edited gallery online; prints can be ordered separately.",
      "To book a slot, send your preferred date on WhatsApp — Maninagar and Ramol branches are available too.",
    ],
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return journalPosts.find((post) => post.slug === slug);
}
