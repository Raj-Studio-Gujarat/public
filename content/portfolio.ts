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

/** Verified Indian wedding photography from Unsplash (mandap, bridal, rituals). */
export const INDIAN_WEDDING_PHOTOS = {
  bridalPortrait: "photo-1617627143750-d86bc21e42bb",
  mandapCeremony: "photo-1587271636175-90d58cdad458",
  coupleStage: "photo-1744804298612-fa9f2ef0e125",
  beachMandap: "photo-1543359905-c5d15c3a23dd",
  ritualHands: "photo-1666916990615-51537445e50b",
  ritualHandsAlt: "photo-1666916990621-88c594bdc84e",
  bridalBangles: "photo-1666916991821-d594c8fceaff",
  varmalaRitual: "photo-1774024050561-4ee0148c8526",
} as const;

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
      "Studio portraits, family sessions, and bridal portraits at Raj Studio branches in Ahmedabad.",
  },
  events: {
    title: "Event Photography — Raj Studio Gujarat",
    description:
      "Sangeet, engagement, and celebration photography across Ahmedabad from Raj Studio.",
  },
  video: {
    title: "Wedding Video — Raj Studio Gujarat",
    description:
      "Indian wedding films and highlight reels from Raj Studio Ahmedabad.",
  },
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "w1",
    category: "wedding",
    frameLabel: "WED-01",
    alt: "Hindu wedding mandap ceremony with bride in red lehenga and groom in gold sherwani",
    src: u(INDIAN_WEDDING_PHOTOS.mandapCeremony),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "w2",
    category: "wedding",
    frameLabel: "WED-02",
    alt: "Bride and groom on a floral stage during an Indian wedding celebration",
    src: u(INDIAN_WEDDING_PHOTOS.coupleStage),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "w3",
    category: "wedding",
    frameLabel: "WED-03",
    alt: "Close-up of bridal and groom hands holding betel leaf during a Hindu wedding ritual",
    src: u(INDIAN_WEDDING_PHOTOS.ritualHands),
    featured: true,
    width: 1200,
    height: 800,
  },
  {
    id: "w4",
    category: "wedding",
    frameLabel: "WED-04",
    alt: "Varmala and ceremonial cloth during an Indian wedding ritual",
    src: u(INDIAN_WEDDING_PHOTOS.varmalaRitual),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "pw1",
    category: "pre-wedding",
    frameLabel: "PRE-05",
    alt: "Indian bridal portrait in silk saree with traditional gold jewellery outdoors",
    src: u(INDIAN_WEDDING_PHOTOS.bridalPortrait),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "pw2",
    category: "pre-wedding",
    frameLabel: "PRE-06",
    alt: "Beachside wooden mandap set for an Indian destination wedding",
    src: u(INDIAN_WEDDING_PHOTOS.beachMandap),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "pw3",
    category: "pre-wedding",
    frameLabel: "PRE-07",
    alt: "Bride and groom laughing together on a decorated Indian wedding stage",
    src: u(INDIAN_WEDDING_PHOTOS.coupleStage, 1400),
    width: 1400,
    height: 1600,
  },
  {
    id: "s1",
    category: "studio",
    frameLabel: "STU-08",
    alt: "Studio-style Indian bridal portrait with maang tikka, jhumkas and gold necklace",
    src: u(INDIAN_WEDDING_PHOTOS.bridalPortrait, 1400),
    featured: true,
    width: 1400,
    height: 1800,
  },
  {
    id: "s2",
    category: "studio",
    frameLabel: "STU-09",
    alt: "Detail of gold bridal bangles and red mouli thread during wedding rituals",
    src: u(INDIAN_WEDDING_PHOTOS.bridalBangles),
    featured: true,
    width: 1200,
    height: 1600,
  },
  {
    id: "s3",
    category: "studio",
    frameLabel: "STU-10",
    alt: "Close-up of joined hands with betel leaf offering at an Indian wedding",
    src: u(INDIAN_WEDDING_PHOTOS.ritualHandsAlt),
    width: 1200,
    height: 1600,
  },
  {
    id: "e1",
    category: "events",
    frameLabel: "EVT-11",
    alt: "Candid moment of bride in pink lehenga and groom in cream sherwani on stage",
    src: u(INDIAN_WEDDING_PHOTOS.coupleStage, 1600),
    featured: true,
    width: 1600,
    height: 1200,
  },
  {
    id: "e2",
    category: "events",
    frameLabel: "EVT-12",
    alt: "Floral Indian wedding mandap with guests seated for the ceremony",
    src: u(INDIAN_WEDDING_PHOTOS.mandapCeremony, 1600),
    featured: true,
    width: 1600,
    height: 1200,
  },
  {
    id: "e3",
    category: "events",
    frameLabel: "EVT-13",
    alt: "Outdoor beach mandap prepared for an Indian wedding function",
    src: u(INDIAN_WEDDING_PHOTOS.beachMandap, 1600),
    width: 1600,
    height: 1200,
  },
  {
    id: "v1",
    category: "video",
    frameLabel: "VID-14",
    alt: "Wide cinematic frame of an Indian wedding mandap under open sky",
    src: u(INDIAN_WEDDING_PHOTOS.mandapCeremony, 1800),
    featured: true,
    width: 1800,
    height: 1200,
  },
  {
    id: "v2",
    category: "video",
    frameLabel: "VID-15",
    alt: "Film-ready candid of Indian bride and groom during stage celebrations",
    src: u(INDIAN_WEDDING_PHOTOS.coupleStage, 1800),
    featured: true,
    width: 1800,
    height: 1200,
  },
  {
    id: "v3",
    category: "video",
    frameLabel: "VID-16",
    alt: "Ritual detail frame suitable for an Indian wedding highlight film",
    src: u(INDIAN_WEDDING_PHOTOS.varmalaRitual, 1800),
    width: 1800,
    height: 1200,
  },
];

export const heroImages = [
  {
    src: u(INDIAN_WEDDING_PHOTOS.mandapCeremony, 1800),
    alt: "Hindu wedding mandap ceremony with bride and groom under floral canopy",
    frameLabel: "01/04",
  },
  {
    src: u(INDIAN_WEDDING_PHOTOS.coupleStage, 1800),
    alt: "Indian bride in pink lehenga and groom in sherwani on a floral stage",
    frameLabel: "02/04",
  },
  {
    src: u(INDIAN_WEDDING_PHOTOS.bridalPortrait, 1800),
    alt: "Indian bridal portrait in silk saree with traditional gold jewellery",
    frameLabel: "03/04",
  },
  {
    src: u(INDIAN_WEDDING_PHOTOS.ritualHands, 1800),
    alt: "Close-up of wedding ritual with bridal bangles and ceremonial offering",
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
