# joshmcvey.com

Personal site for [joshmcvey.com](https://joshmcvey.com). Astro 6 static build, deployed on Cloudflare Pages.

## Commands

| Command | Action |
| --- | --- |
| `pnpm dev` | Local dev server |
| `pnpm validate` | Typecheck (`astro check`) + lint/format check (`biome check`) |
| `pnpm typecheck` | Astro/TypeScript diagnostics only |
| `pnpm lint` | Biome lint and format check |
| `pnpm lint:fix` | Biome lint with safe fixes and format |
| `pnpm format` | Biome format write |
| `pnpm build` | `validate` then production build to `dist/` |
| `pnpm preview` | Preview production build |
| `pnpm resume:pdf` | Regenerate `public/resume.pdf` from `scripts/resume-content.mjs` |
| `pnpm sync:github` | Refresh `src/data/github-projects.json` from GitHub |
| `pnpm sync:prs` | Refresh `src/data/opentrons-prs.json` (public Opentrons PRs) |
| `pnpm setup:redirects` | Create Cloudflare Page Rules to canonicalize alternate domains (needs API token with Page Rules Edit) |

Cross-domain redirects (`y3rsh.com` → `joshmcvey.com`, etc.) are **not** supported in `public/_redirects` on Cloudflare Pages (relative paths only). Use `pnpm setup:redirects` or configure Redirect Rules in the Cloudflare dashboard per zone.

## Machine-readable exports

- `/llms.txt` — index for AI agents
- `/resume.txt`, `/resume.md` — structured resume
- `/resume.pdf` — generated PDF download (see below)

Copy lives in `src/content/`. Resume facts for exports: `src/content/resume-facts.ts`.

## Resume PDF

`public/resume.pdf` is **generated**, not hand-authored:

- **Source of truth**: `docs/resume-source.md` (every fact, aggregated from the
  site data and the original LinkedIn export).
- **Content**: `scripts/resume-content.mjs` (the optimized, ATS/LLM-friendly v2).
- **Generator**: `scripts/generate-resume-pdf.mjs` → `pnpm resume:pdf` (pdfkit,
  single-column, two pages).

Edit content in `scripts/resume-content.mjs`, run `pnpm resume:pdf`, and commit
the regenerated `public/resume.pdf` (it is not produced during `astro build`).
The download filename is `JoshMcVeyResume<year>.pdf`, with the year resolved at
site-build time. See `CLAUDE.md` for the full workflow and verification steps.

## Live Opentrons PRs

The homepage "Public work at Opentrons" section is driven by
`src/data/opentrons-prs.json`, refreshed by `pnpm sync:prs`
(`scripts/sync-opentrons-prs.mjs`, GitHub search for `author:y3rsh org:Opentrons`).
A daily GitHub Actions workflow (`.github/workflows/sync-opentrons-prs.yml`)
re-runs the sync and commits the JSON when it changes, which redeploys the site.
Only **public** repos are returned by the API, so private work (Protocol Library,
Opentrons AI) is intentionally not listed.
