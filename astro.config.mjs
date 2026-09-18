// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import { SITE_URL } from "./src/consts";

/** Pages that deserve more weight than the default in the sitemap. */
const PRIORITIES = [
  [/^\/$/, 1.0, "monthly"],
  [/^\/services\/$/, 0.8, "monthly"],
  [/^\/services\/.+/, 0.7, "monthly"],
  [/^\/(about|contact)\/$/, 0.6, "yearly"],
];

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: SITE_URL,
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const { pathname } = new URL(item.url);
        const match = PRIORITIES.find(([pattern]) => pattern.test(pathname));
        item.priority = match ? match[1] : 0.5;
        item.changefreq = match ? match[2] : "yearly";
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
