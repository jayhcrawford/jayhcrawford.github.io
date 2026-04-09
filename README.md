# jayhcrawford.github.io

Modern personal site/portfolio for Jay Crawford built with **Vite + React + TypeScript** and deployed to **GitHub Pages**.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build
npm run preview  # preview the build locally
npm run lint     # ESLint
```

## Branch & Deploy Workflow

- **All edits happen on `main`.** This is the working branch collaborators should use for commits and PRs.
- **`gh-pages` is deployment-only.** GitHub Pages tooling generates this branch automatically from the build artifact. Do **not** land commits there manually—changes will be overwritten by the deploy workflow.
- Deploys run via `npm run deploy` (or the configured GitHub Action) which publishes the latest `main` build to `gh-pages`.

## Repository Structure

See [`STRUCTURE.md`](./STRUCTURE.md) for a current map of key directories/files useful to AI agents and collaborators.

## Notes for AI/Automation

Additional working notes, TODOs, and agent-ready context live in [`AI_NOTES.md`](./AI_NOTES.md).
