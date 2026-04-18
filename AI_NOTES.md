# Instructions For Next AI Pass

⚠️ **Branch Policy:** Do *all* work on the `main` branch. The `gh-pages` branch is generated automatically by the GitHub Pages deploy script—never commit to it directly because changes there will be overwritten.

This repo is a Vite + React + TypeScript site for GitHub Pages. The CI/CD publishes when pushed to GitHub. Avoid deploying unless explicitly requested.

➡️ Jay spun up an experimental branch `planet` that roughs in a new version of `ThreeBackground.tsx`. Leave it untouched unless Jay specifically asks you to work there; keep regular work on `main`.

## Quick Orientation
- Entry points: `src/main.tsx`, `src/App.tsx`.
- Pages live under `src/pages/`.
- Project/category data lives in `src/pages/Projects/*_data.tsx` and `src/pages/Projects3D/Projects3D_data.tsx`.
- Shared components live in `src/components/`.
- Shared blog typography components (`Blog_Card`, `Blog_Label`, etc.) now live in `src/components/Blog/Blog_Pieces.tsx`; use them instead of ad-hoc Tailwind for future articles.
- 3D gallery pages share `src/pages/Projects3D/GalleryPage.tsx`; each project exports a thin wrapper file (e.g., `MyPlace.tsx`) with intro copy + frame metadata.
- GitHub Pages fallback: `npm run build` now copies `dist/index.html` to `dist/404.html` so BrowserRouter routes survive refreshes; keep this script (`scripts/copy-404.mjs`) if you change the build pipeline.
- BrowserRouter runs with `basename={import.meta.env.BASE_URL}`; if you change the deployment path update this accordingly.
- Styling is a mix of Tailwind (`src/tailwind.css`, `src/index.css`) and component CSS in `src/components/*.css`.
- Skill/tool logos now live in `/public/*_logo_40pt.svg`; when referencing them in JSX, build the src with `${import.meta.env.BASE_URL}filename.svg` so GitHub Pages resolves correctly.
- Fonts are in `src/assets/fonts/`.

## Commands
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`
- Deploy to GitHub Pages: `npm run deploy`

## Current TODOs (from code)
- About page needs a strong intro image/flourish: `src/pages/About.tsx`.
- Add the brag-worthy fitness/discipline section requested in About (see TODO in `src/pages/About.tsx`).
- SocialBrick uses a fixed px width that should become responsive: `src/components/SocialBrick.tsx`.
- Confirm links + description text in app shell: `src/App.tsx`.
- Create/replace icon images for categories in:
  - `src/pages/Projects/Art_data.tsx`
  - `src/pages/Projects/Projects_data.tsx`
  - `src/pages/Projects/Painting_data.tsx`
  - `src/pages/Projects/Drawing_data.tsx`
  - `src/pages/Projects/Design_data.tsx`
  - `src/pages/Projects3D/Projects3D_data.tsx`
- LocationBar URL string substitutions needed in the same data files as above.
- Replace stub project entries with real content + images for Web Dev + Programming pages:
  - `src/pages/Projects/WebDev_data.tsx`
  - `src/pages/Projects/Programming_data.tsx`
- Provide images/resources for project entries and fix the painting image carousel: `src/pages/Projects/Painting_data.tsx`.
- Reverse order of drawing objects array: `src/pages/Projects/Drawing_data.tsx`.
- Fill in painting period galleries with correct image sets per year:
  - `src/pages/Projects/Painting_periods_data.tsx`
  - `src/pages/PaintingPeriod.tsx`
- Swap placeholder renders + captions in the new 3D gallery pages (`src/pages/Projects3D/*.tsx`) with real assets once they’re ready.
## Content Notes
- Most TODOs are content/layout placeholders. Ask the user for assets and copy before filling lists or updating images.
- Keep art/project metadata consistent with existing data object shapes in the data files.

## Recent Changes
- Switched from `HashRouter` to `BrowserRouter` in `src/main.tsx` for clean URLs without `#` symbols. Updated internal links in `src/pages/About.tsx` from hash paths to regular paths (`/projects/urfriends`, `/projects/ripsheet`).
- Built a focused Contact hero layout: `src/pages/Contact.tsx`.
- Added a dedicated logos set for About-page skill stacks (SVGs live under `/public/*_logo_40pt.svg`) and updated blog cards to consume them.
- Added Web Dev + Programming project list pages, data stubs, and routes (see `src/pages/Projects/WebDev*.tsx`, `Programming*.tsx`, and `src/App.tsx`).
- Stubbed painting period galleries with per-period image arrays plus the `/art/painting/:periodSlug` route.
- Built a reusable gallery system for every 3D project: `src/pages/Projects3D/GalleryPage.tsx` plus project-specific wrappers (`MyPlace.tsx`, `Blitz3D.tsx`, etc.). `projects_3d_array` now includes `slug` + absolute `url` so the 3D hub and LocationBar link straight to each gallery.

## Suggested First Steps For Future Work
1. Ask the user which TODOs to prioritize (content, layout, or data cleanup).
2. Gather assets (images/icons) and confirm naming conventions.
3. Make small, page-by-page changes and verify with `npm run dev`.
