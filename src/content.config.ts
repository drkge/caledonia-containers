import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const service = defineCollection({
  // Load Markdown and MDX files in the `src/content/service/` directory.
  loader: glob({ base: "./src/content/service", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    postImages: z.array(z.string().optional()).optional(),
  }),
});

export const collections = { service };
