export type PortfolioCategory =
  | "wedding"
  | "pre-wedding"
  | "studio"
  | "events"
  | "video";

export type PortfolioItem = {
  id: string;
  category: PortfolioCategory;
  frameLabel: string;
  alt: string;
  src: string;
  featured?: boolean;
  width: number;
  height: number;
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const categoryLabels: Record<PortfolioCategory | "all", string> = {
  all: "All Work",
  wedding: "Weddings",
  "pre-wedding": "Pre-Wedding",
  studio: "Studio",
  events: "Events",
  video: "Video",
};

export const categoryMeta: Record<
  PortfolioCategory,
  { title: string; description: string }
> = {
  wedding: {
    title: "Indian Wedding Photography — Raj Studio Gujarat",
    description:
      "Indian wedding photography across Ahmedabad and Gujarat — pheras, rituals, portraits, and reception coverage from Raj Studio.",
  },
  "pre-wedding": {
    title: "Pre-wedding Shoots — Raj Studio Gujarat",
    description:
      "Pre-wedding and engagement photography in Ahmedabad. Outdoor and studio sessions from Raj Studio.",
  },
  studio: {
    title: "Studio Photography — Raj Studio Gujarat",
    description:
      "Studio portraits, family sessions, and product shoots at Raj Studio branches in Ahmedabad.",
  },
  events: {
    title: "Event Photography — Raj Studio Gujarat",
    description:
      "Birthday, engagement, society, and corporate event photography across Ahmedabad from Raj Studio.",
  },
  video: {
    title: "Wedding Video — Raj Studio Gujarat",
    description:
      "Indian wedding films, event coverage, and promotional video from Raj Studio Ahmedabad.",
  },
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "w1",
    category: "wedding",
    frameLabel: "WED-01",
    alt: "Bride and groom in traditional Gujarati wedding attire during pheras",
    src: u("photo-1519741497674-611481863552"),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "w2",
    category: "wedding",
    frameLabel: "WED-02",
    alt: "Bride's hands adorned with mehendi at Ahmedabad wedding",
    src: u("photo-1583939003579-730e3918a45a"),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "w3",
    category: "wedding",
    frameLabel: "WED-03",
    alt: "Groom's baraat procession under evening light",
    src: u("photo-1594736797933-d0501ba2fe65"),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "pw1",
    category: "pre-wedding",
    frameLabel: "PRE-04",
    alt: "Couple laughing during pre-wedding shoot at Sabarmati riverfront",
    src: u("photo-1529636798458-92182e662485"),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "pw2",
    category: "pre-wedding",
    frameLabel: "PRE-05",
    alt: "Pre-wedding portrait in Ahmedabad old city",
    src: u("photo-1519225421980-715cb0215aed"),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "s1",
    category: "studio",
    frameLabel: "STU-06",
    alt: "Studio portrait with controlled softbox lighting",
    src: u("photo-1524504388940-b1c1722653e1"),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "s2",
    category: "studio",
    frameLabel: "STU-07",
    alt: "Family studio portrait on neutral backdrop",
    src: u("photo-1502920917128-1aa500764cbd"),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "s3",
    category: "studio",
    frameLabel: "STU-08",
    alt: "Individual headshot on grey studio background",
    src: u("photo-1544005313-94ddf0286df2"),
    width: 1200,
    height: 1600,
  },
  {
    id: "e1",
    category: "events",
    frameLabel: "EVT-09",
    alt: "Corporate event stage coverage in Ahmedabad",
    src: u("photo-1511578314322-379afb476865"),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "e2",
    category: "events",
    frameLabel: "EVT-10",
    alt: "Birthday celebration candid photography",
    src: u("photo-1464366400600-7168b8af9bc3"),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "e3",
    category: "events",
    frameLabel: "EVT-11",
    alt: "Reception decor and guest coverage",
    src: u("photo-1530023367847-a683933f4172"),
    width: 1200,
    height: 1600,
  },
  {
    id: "v1",
    category: "video",
    frameLabel: "VID-12",
    alt: "Cinematic wedding video still frame",
    src: u("photo-1492691527719-9d1e07e534b4"),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "v2",
    category: "video",
    frameLabel: "VID-13",
    alt: "Video crew capturing event highlights",
    src: u("photo-1533228876829-65c94e7b5025"),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "w4",
    category: "wedding",
    frameLabel: "WED-14",
    alt: "Ring exchange close-up at sunset",
    src: u("photo-1537633552985-df8429e8048b"),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "s4",
    category: "studio",
    frameLabel: "STU-15",
    alt: "Maternity studio portrait, soft lighting",
    src: u("photo-1508214751196-bcfd4ca60f91"),
    width: 1200,
    height: 1600,
  },
  {
    id: "e4",
    category: "events",
    frameLabel: "EVT-16",
    alt: "Sangeet night dance floor coverage",
    src: u("photo-1519671482749-fd09be7ccebf"),
    width: 1200,
    height: 1600,
  },
];

export const heroImages = [
  {
    src: u("photo-1519741497674-611481863552", 1800),
    alt: "Bride and groom in traditional Gujarati wedding attire during pheras",
    frameLabel: "01/04",
  },
  {
    src: u("photo-1529636798458-92182e662485", 1800),
    alt: "Couple laughing during pre-wedding shoot",
    frameLabel: "02/04",
  },
  {
    src: u("photo-1583939003579-730e3918a45a", 1800),
    alt: "Bride's hands adorned with mehendi",
    frameLabel: "03/04",
  },
  {
    src: u("photo-1537633552985-df8429e8048b", 1800),
    alt: "Ring exchange close-up at sunset",
    frameLabel: "04/04",
  },
];

export function getFeaturedWork(limit = 12): PortfolioItem[] {
  return portfolioItems.filter((item) => item.featured).slice(0, limit);
}

export function getByCategory(category: PortfolioCategory): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}

export function isPortfolioCategory(value: string): value is PortfolioCategory {
  return ["wedding", "pre-wedding", "studio", "events", "video"].includes(value);
}
