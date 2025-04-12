// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://fancy-valkyrie-4d111d.netlify.app",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  adapter: netlify(),
});
