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
| `pnpm sync:github` | Refresh `src/data/github-projects.json` from GitHub |
| `pnpm setup:redirects` | Create Cloudflare Page Rules to canonicalize alternate domains (needs API token with Page Rules Edit) |

Cross-domain redirects (`y3rsh.com` → `joshmcvey.com`, etc.) are **not** supported in `public/_redirects` on Cloudflare Pages (relative paths only). Use `pnpm setup:redirects` or configure Redirect Rules in the Cloudflare dashboard per zone.

## Machine-readable exports

- `/llms.txt` — index for AI agents
- `/resume.txt`, `/resume.md` — structured resume
- `/resume.pdf` — PDF download

Copy lives in `src/content/`. Resume facts for exports: `src/content/resume-facts.ts`.
