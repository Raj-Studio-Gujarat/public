export const siteConfig = {
  name: "Raj Studio",
  legalName: "Raj Studio — Gujarat",
  tagline:
    "Photography and video for weddings, studio work, and events across Gujarat.",
  description:
    "Raj Studio shoots weddings, studio portraits, events and cinematic video across Gujarat. Three Ahmedabad branches. Enquire on WhatsApp.",
  phoneDisplay: "+91 78746 44411",
  phoneTel: "+917874644411",
  email: null as string | null,
  city: "Ahmedabad",
  region: "Gujarat",
  country: "IN",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

export const defaultWhatsAppMessage =
  "Hi Raj Studio, I'd like to enquire.";

export const bookWhatsAppMessage =
  "Hi Raj Studio, I'd like to book a shoot.";
