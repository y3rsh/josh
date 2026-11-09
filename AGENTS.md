# Repository instructions

Read [CLAUDE.md](CLAUDE.md) for the project structure, positioning conventions,
commands, and resume generation workflow.

## Always keep the PDF resume in sync

Treat website and resume content changes as one coordinated update, even when
Josh asks only for a homepage edit. Whenever wording, positioning, facts, skills,
experience, or role preferences change anywhere in this repo:

1. Record new or changed facts and preferences in `docs/resume-source.md`.
2. Update the relevant homepage copy, metadata, and machine-readable profile.
3. **Always update `scripts/resume-content.mjs` to reflect the change.** This is
   the separate source for the downloadable PDF; editing `src/content/` alone
   does not update it.
4. Run `pnpm resume:pdf` to regenerate `public/resume.pdf`. Never hand-edit it.
5. Verify extractable text, the two-page layout, and the updated content; run
   `pnpm build` before committing.
6. Include the PDF content source and regenerated PDF with the corresponding
   website changes in the same commit when a commit is requested.

Check this synchronization on every task. Do not wait for a separate request to
update the PDF. `pnpm build` does not regenerate it.
