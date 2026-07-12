# CLAUDE.md

Guidance for Claude when working in this repo (joshmcvey.com — Josh McVey's
personal site + resume). Astro 6 static build, deployed on Cloudflare Pages,
package manager is **pnpm**.

## Commands

| Command | Action |
| --- | --- |
| `pnpm dev` | Local dev server |
| `pnpm build` | `validate` then production build to `dist/` |
| `pnpm validate` | `typecheck` + `lint` (run before committing) |
| `pnpm typecheck` | `astro check` only |
| `pnpm lint` / `pnpm lint:fix` | Biome check / check with safe fixes |
| `pnpm resume:pdf` | Regenerate `public/resume.pdf` from resume v2 content |
| `pnpm sync:github` | Refresh `src/data/github-projects.json` from GitHub |
| `pnpm setup:redirects` | Cloudflare Page Rules for alternate-domain canonicalization |

## Where content lives

All human-facing copy is data, not markup. Edit the data files; the Astro
pages ([src/pages/index.astro](src/pages/index.astro)) just render them.

- [src/content/site-copy.ts](src/content/site-copy.ts) — hero, facets ("what I'm good at"), experience timeline, AI section, contact.
- [src/content/career-map.ts](src/content/career-map.ts) — the four-lane career timeline (Consulting / Leadership / Test architecture / Build & Release).
- [src/content/resume-facts.ts](src/content/resume-facts.ts) — structured facts that feed the machine-readable exports (`/resume.txt`, `/resume.md`, `/llms.txt`) via [src/lib/resume-export.ts](src/lib/resume-export.ts).
- [src/site.ts](src/site.ts) — name, page `<title>`, meta description, canonical links, email.

## Positioning conventions (keep consistent everywhere)

- Josh's two lead capabilities are **Lead SDET** *and* **Test Architect** —
  keep both visible together in top-line positioning (site eyebrow, page title,
  facet heading, resume title + summary). Don't let "Test Architect" collapse
  into just a past job title.
- Number style is **"20+ years"** (numeral), everywhere. Not "twenty".
- Name capitalization is **McVey** (not "Mcvey").
- Opentrons HQ is **Long Island City, NY** (the old LinkedIn PDF said "Queens").
- Josh is remote from **Lawrence, KS**.

## Resume system (the important part)

The downloadable PDF is **generated**, not hand-made. Three layers:

1. **Source of truth** — [docs/resume-source.md](docs/resume-source.md).
   Every career fact, aggregated verbatim from (a) the website data files and
   (b) the original LinkedIn PDF export. This is the archive/input. When a fact
   changes, update this file first.

2. **Resume v2 content** — [scripts/resume-content.mjs](scripts/resume-content.mjs).
   The curated, optimized resume as a plain-JS data object (title, summary,
   skill groups, experience, education, certs). Written to be ATS/LLM-friendly:
   standard section names, keyword-dense skills, impact-first bullets, ~two
   pages. **This is what you edit to change the PDF's wording.**

3. **Generator** — [scripts/generate-resume-pdf.mjs](scripts/generate-resume-pdf.mjs).
   Renders the v2 content to [public/resume.pdf](public/resume.pdf) using
   `pdfkit` (pure JS, no headless browser). Clean single-column, two pages.

### How to change the resume

1. Edit facts in [docs/resume-source.md](docs/resume-source.md) if the
   underlying truth changed.
2. Edit [scripts/resume-content.mjs](scripts/resume-content.mjs) for what
   actually appears on the PDF.
3. Run `pnpm resume:pdf` to regenerate `public/resume.pdf`.
4. Commit the regenerated `public/resume.pdf` (it is served statically; the PDF
   is NOT built during `astro build`, so it must be committed).

### Download filename

The download name is `JoshMcVeyResume<year>.pdf`, with the year resolved at
**site build time** in [src/pages/index.astro](src/pages/index.astro)
(`new Date().getFullYear()`). The served file stays `public/resume.pdf`; the
`download` attribute renames it on save. The PDF's internal Title metadata also
carries the year (set in the generator via `YEAR`).

### Verifying the PDF (recommended after any layout change)

`pdfkit` gives no visual feedback, so verify two things:

- **Text is extractable** (ATS/LLM search) — parse with `pdfjs-dist`.
- **Layout looks right** (no overlaps, correct page count) — render pages to PNG
  with `pdfjs-dist` + `@napi-rs/canvas` and view the images.

These two packages are **not** project dependencies (only `pdfkit` is). Install
them temporarily for a check, then remove:

```bash
pnpm add -D pdfjs-dist @napi-rs/canvas
# ...run a throwaway script that getDocument()s public/resume.pdf,
#    calls getTextContent() to check words, and page.render() to a canvas PNG...
pnpm remove pdfjs-dist @napi-rs/canvas
```

Import path for Node: `pdfjs-dist/legacy/build/pdf.mjs`. `page.render()` needs a
`canvasFactory` backed by `@napi-rs/canvas`.

### Generator gotchas (learned the hard way)

- **Footer pagination**: writing text below the bottom margin makes pdfkit
  auto-append a blank page. The generator temporarily sets
  `doc.page.margins.bottom = 0` around footer writes to prevent phantom pages.
- **Text encoding**: pdfkit writes single-byte hex codes (`<4a>` = `J`) with a
  ToUnicode CMap. A homegrown extractor must read 1 byte at a time; use
  `pdfjs-dist` instead of rolling your own.
- Keep the title to one line — it's rendered at 11.5pt; long titles wrap. The
  current title fits; adding words may not.

## Build/lint notes

- `.claude/` is excluded from Biome ([biome.json](biome.json) `files.includes`)
  so local tool settings never fail the site build.
- Cross-domain redirects (`y3rsh.com` → `joshmcvey.com`) are NOT supported in
  `public/_redirects` on Cloudflare Pages. Use `pnpm setup:redirects` or the
  dashboard. See [README.md](README.md).
