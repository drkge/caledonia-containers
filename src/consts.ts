// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_URL = "https://www.caledoniacontainers.co.uk";

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

/**
 * Single source of truth for the business details that appear both as visible
 * copy (contact page, footer) and as structured data.
 */
export const BUSINESS = {
  legalName: "Caledonia Containers Ltd",
  name: "Caledonia Containers",
  email: "caledoniacontainers@msn.com",
  /** Display form, as shown on the site. */
  telephone: "07981883340",
  /** E.164, for structured data. */
  telephoneIntl: "+447981883340",
  address: {
    street: "3 Irvine Road, Lugton Bridge",
    locality: "Lugton",
    region: "Ayrshire",
    postalCode: "KA3 4ED",
    country: "GB",
  },
  geo: { latitude: 55.744867, longitude: -4.534255 },
  areaServed: ["Ayrshire", "Glasgow", "Scotland"],
  sameAs: ["https://www.linkedin.com/in/grahamsmuk/", "https://skipbits.co.uk"],
};
