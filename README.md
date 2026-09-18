# Caledonia Containers

Website for [Caledonia Containers Ltd](https://caledoniacontainers.co.uk) — skip manufacturing,
refurbishment and container services in Lugton, Ayrshire.

A static [Astro](https://astro.build) site styled with Tailwind CSS 4, deployed to GitHub Pages.

## Commands

| Command           | Action                                         |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Install dependencies                           |
| `npm run dev`     | Local dev server at `http://localhost:4321`    |
| `npm run build`   | Build the production site to `dist/`           |
| `npm run preview` | Serve the built `dist/` locally                |

## Editing content

- **Business details** — phone, email, address, map coordinates, navigation, workshop capabilities
  and the online shops all live in [`src/consts.ts`](src/consts.ts). The visible copy and the
  structured data (JSON-LD) are both generated from it, so change them there.
- **Services** — one MDX file per service in [`src/content/service/`](src/content/service/). The
  filename sets the URL (`NewSkips.mdx` → `/services/newskips/`), so don't rename existing files.
  Frontmatter:

  ```yaml
  title: "New Skips"
  description: "One line — used on cards, the page header and the meta description."
  order: 1                              # position in grids and menus
  heroImage: "../../assets/example.webp"
  heroAlt: "Describe what the photo shows"
  highlights:                           # the "At a glance" list
    - "Short point"
  ```

  In the body, use `<ImageRender source="/src/assets/x.webp" alt="…" />` for a single photo,
  `<Gallery images={[…]} />` for a row of two or three, and `<SpecTable title="…" rows={[…]} />`
  for specifications.
- **Photos** — put them in [`src/assets/`](src/assets/). Astro resizes and converts them to WebP at
  build time, so upload originals.

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
builds the site and publishes it to GitHub Pages. The custom domain is set by
[`public/CNAME`](public/CNAME).

## SEO

`sitemap-index.xml` and `robots.txt` are generated on build from the `site` URL in
[`astro.config.mjs`](astro.config.mjs). Every page gets a canonical URL, Open Graph tags and JSON-LD
(Organization, WebSite, LocalBusiness, Service and BreadcrumbList as appropriate).
