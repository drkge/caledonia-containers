// Global site data. Anything that appears both as visible copy and in
// structured data lives here so the two can't drift apart.

export const SITE_URL = "https://caledoniacontainers.co.uk";

export const SITE_TITLE = "Caledonia Containers";
export const SITE_DESCRIPTION =
  "Skips, containers and custom metalwork in Ayrshire. Caledonia Containers offers fabrication, shot blasting, welding, painting, repairs and refurbishment.";

/** Default social sharing card. 1200x630, lives in `public/`. */
export const OG_IMAGE = {
  src: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Caledonia Containers — everything for waste carriers",
};

export const BUSINESS = {
  legalName: "Caledonia Containers Ltd",
  name: "Caledonia Containers",
  email: "caledoniacontainers@msn.com",
  /** As a UK visitor would read it. */
  telephoneDisplay: "07981 883340",
  /** E.164, for tel: links and structured data. */
  telephoneIntl: "+447981883340",
  address: {
    street: "3 Irvine Road, Lugton Bridge",
    locality: "Lugton",
    region: "Ayrshire",
    postalCode: "KA3 4ED",
    country: "GB",
  },
  /** Address as display lines, for the contact page and footer. */
  addressLines: ["3 Irvine Road", "Lugton Bridge", "Lugton, Ayrshire", "KA3 4ED"],
  geo: { latitude: 55.744867, longitude: -4.534255 },
  areaServed: ["Ayrshire", "Glasgow", "Scotland"],
  linkedin: "https://www.linkedin.com/in/grahamsmuk/",
  sameAs: ["https://www.linkedin.com/in/grahamsmuk/", "https://skipbits.co.uk"],
};

export const TEL_HREF = `tel:${BUSINESS.telephoneIntl}`;
export const MAILTO_HREF = `mailto:${BUSINESS.email}`;
export const QUOTE_MAILTO_HREF = `mailto:${BUSINESS.email}?subject=${encodeURIComponent("Quote request")}`;
export const DIRECTIONS_HREF =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("3 Irvine Road, Lugton Bridge, Lugton, KA3 4ED");

export const NAV = [
  { label: "Services", href: "/services/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

/** Online shops shown on the home page and in the footer. */
export const SHOPS = [
  {
    name: "Skip Bits",
    href: "https://skipbits.co.uk",
    logo: "skipbits.png",
    blurb:
      "Our online shop for skip and container parts — rollers, hinges, lifting lugs, door locks and more.",
    note: "Part of Caledonia Containers Ltd",
  },
  {
    name: "Dusty Bins",
    href: "https://dustybins.co.uk",
    logo: "dustybins.webp",
    blurb: "Recycling bins, wheelie bins and litter bins for homes and businesses.",
    note: undefined,
  },
];

/** Workshop capabilities, all drawn from the original site copy. */
export const CAPABILITIES = [
  { icon: "lucide:hammer", title: "Fabrication & welding", text: "New skips and containers built from steel plate in-house." },
  { icon: "lucide:sparkles", title: "Shot blasting", text: "Rust and old coatings stripped back to clean metal." },
  { icon: "lucide:spray-can", title: "Spray painting", text: "Durable paint finishes in your fleet colours." },
  { icon: "lucide:wrench", title: "Repairs & modifications", text: "Structural repairs, upgrades and conversions." },
  { icon: "lucide:droplets", title: "Steam cleaning", text: "Containers cleaned down before inspection or repair." },
  { icon: "lucide:paintbrush", title: "Logos & graphics", text: "Your branding applied, so your fleet looks the part." },
  { icon: "lucide:clipboard-check", title: "Inspections & reports", text: "Condition, safety and lifespan reports on your equipment." },
  { icon: "lucide:package", title: "Spare parts", text: "Parts sourced for you, or shop direct at Skip Bits." },
];
