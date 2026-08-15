export type ServicePackage = {
  frame: string;
  name: string;
  price: string;
  includes: string[];
};

export type ServiceSection = {
  frame: string;
  title: string;
  blurb: string;
  packages: ServicePackage[];
};

export const serviceSections: ServiceSection[] = [
  {
    frame: "STU",
    title: "Studio",
    blurb:
      "In-house sessions with controlled light — portraits, family, maternity, newborn, headshots.",
    packages: [
      {
        frame: "STU-01",
        name: "Portrait Session",
        price: "₹2,500 – ₹5,000",
        includes: [
          "1 hour studio time",
          "1 – 3 outfit changes",
          "10 edited digital images",
          "Online gallery",
        ],
      },
      {
        frame: "STU-02",
        name: "Family / Group",
        price: "₹6,000 – ₹12,000",
        includes: [
          "1.5 hour studio time",
          "Group + individual portraits",
          "20 edited images",
          "Print-ready files",
        ],
      },
      {
        frame: "STU-03",
        name: "Maternity / Newborn",
        price: "₹8,000 – ₹15,000",
        includes: [
          "2 hour session",
          "Props and setups included",
          "25 edited images",
          "One 8x12 print",
        ],
      },
    ],
  },
  {
    frame: "WED",
    title: "Weddings",
    blurb:
      "Full Gujarati wedding coverage — pheras, rituals, portraits, reception. Priced by event count and coverage days.",
    packages: [
      {
        frame: "WED-01",
        name: "Single Event",
        price: "₹25,000 – ₹45,000",
        includes: [
          "One event, up to 8 hours",
          "1 photographer",
          "150+ edited images",
          "Online gallery",
        ],
      },
      {
        frame: "WED-02",
        name: "Full Wedding",
        price: "₹85,000 – ₹1,50,000",
        includes: [
          "2 – 3 day coverage",
          "2 photographers + assistant",
          "500+ edited images",
          "Premium photo album",
        ],
      },
      {
        frame: "WED-03",
        name: "Wedding + Film",
        price: "₹1,50,000 – ₹3,00,000+",
        includes: [
          "Photo + video team",
          "Cinematic 3–5 min film",
          "Highlight reel + full-length",
          "Album + digital delivery",
        ],
      },
    ],
  },
  {
    frame: "EVT",
    title: "Events",
    blurb:
      "Birthdays, sangeets, engagement parties, corporate events. On-location coverage across Ahmedabad.",
    packages: [
      {
        frame: "EVT-01",
        name: "Half Day",
        price: "₹8,000 – ₹15,000",
        includes: [
          "Up to 4 hours",
          "1 photographer",
          "80+ edited images",
          "48 hour preview",
        ],
      },
      {
        frame: "EVT-02",
        name: "Full Day",
        price: "₹18,000 – ₹30,000",
        includes: [
          "Up to 8 hours",
          "1 – 2 photographers",
          "200+ edited images",
          "Same-week delivery",
        ],
      },
      {
        frame: "EVT-03",
        name: "Corporate",
        price: "On request",
        includes: [
          "Multi-venue supported",
          "Photo + short reel",
          "Same-day teaser images",
          "Branded gallery",
        ],
      },
    ],
  },
  {
    frame: "VID",
    title: "Video",
    blurb: "Cinematic films, event highlights, brand and product video, reels.",
    packages: [
      {
        frame: "VID-01",
        name: "Highlight Reel",
        price: "₹15,000 – ₹25,000",
        includes: [
          "60 – 90 second edit",
          "Licensed music",
          "Vertical + horizontal cuts",
          "Delivery within 2 weeks",
        ],
      },
      {
        frame: "VID-02",
        name: "Cinematic Wedding Film",
        price: "₹60,000 – ₹1,20,000",
        includes: [
          "Full-day coverage",
          "3 – 5 min feature film",
          "Long-form 20 min cut",
          "4K master files",
        ],
      },
      {
        frame: "VID-03",
        name: "Brand / Product",
        price: "On request",
        includes: [
          "Concept + storyboard",
          "Studio or on-location",
          "Colour graded final",
          "Reels & long-form cuts",
        ],
      },
    ],
  },
];

export const homeServiceCards = [
  {
    n: "01",
    title: "Studio",
    frame: "STU",
    blurb:
      "Family portraits, headshots, maternity and newborn — controlled light in-house.",
    href: "/services#studio",
    img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=70",
  },
  {
    n: "02",
    title: "Weddings",
    frame: "WED",
    blurb:
      "Full-day Gujarati wedding coverage — pheras, rituals, portraits, reception.",
    href: "/services#weddings",
    img: "https://images.unsplash.com/photo-1587271636175-90d58cdad458?auto=format&fit=crop&w=900&q=70",
  },
  {
    n: "03",
    title: "Events",
    frame: "EVT",
    blurb: "Birthdays, sangeets, corporate stage and celebration coverage.",
    href: "/services#events",
    img: "https://images.unsplash.com/photo-1744804298612-fa9f2ef0e125?auto=format&fit=crop&w=900&q=70",
  },
  {
    n: "04",
    title: "Video",
    frame: "VID",
    blurb: "Cinematic wedding films, event highlights, brand and product video.",
    href: "/services#video",
    img: "https://images.unsplash.com/photo-1543359905-c5d15c3a23dd?auto=format&fit=crop&w=900&q=70",
  },
] as const;
