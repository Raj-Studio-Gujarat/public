import { branches } from "@/content/locations";
import { siteConfig } from "@/lib/site";

export function getLocalBusinessJsonLd() {
  const branch = branches[0];

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneTel,
    image: `${siteConfig.url}/og-default.jpg`,
    priceRange: "₹₹",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Gujarat",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.address,
      addressLocality: siteConfig.city,
      addressRegion: "GJ",
      addressCountry: siteConfig.country,
      name: branch.label,
    },
  };
}
